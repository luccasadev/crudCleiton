import imports from "./imports.js";


const __filename = imports.fileURLToPath(import.meta.url);
const __dirname = imports.path.dirname(__filename);

// Caminhos dos arquivos
const cssFilePath = imports.path.join(__dirname +'../../' + '/css/output.css');  // Caminho atualizado para acessar a pasta CSS corretamente

const app = imports.express();
const port = 3000;


// Middlewares
app.use(imports.cors());
app.use(imports.express.json());
app.use(imports.bodyParser.json({ extended: true }));
app.use(imports.express.urlencoded({ extended: true }));


// Middleware para servir arquivos estáticos da pasta public
app.use(imports.express.static(imports.path.join(__dirname +'../../' + '/public')));

// Servir a pasta CSS corretamente e garantir que o tipo MIME seja text/css
app.use("/css", (req, res, next) => {
  res.type('text/css');
  next();
}, imports.express.static(imports.path.join(__dirname +'../../' + '/css')));  // Corrigido para servir corretamente a pasta CSS

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname +'../../' + '/public/skeleton.html'));
});

// Model
const sequelize = new imports.Sequelize({
  dialect: "sqlite",
  storage: "./api/db/sisme.sqlite",
});

const usuarios = sequelize.define(
  "users",
  {
    arroba: {
      type: imports.DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: imports.DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: imports.DataTypes.STRING,
      allowNull: false,
    },
    typeuser: {
      type: imports.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // Define se deve ou não incluir createdAt e updatedAt
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);

sequelize.sync();

// Função para lidar com erros
const handleError = (res, message) => {
  res.status(500).send(imports.createMessageContainer(message, "red"));
};


const formatDateToBR = (date) => {
  
  // Verifica se a data é null, vazia ou '0000-00-00'
  if (!date || date === '0000-00-00' || typeof date !== 'string') {
    return ''; // Retorna uma string vazia
  }

  // Verifica se a data está em um formato reconhecido
  const isValidDate = imports.moment(date, imports.moment.ISO_8601, true).isValid();
  if (!isValidDate) {
    return ''; // Retorna uma string vazia se o formato for inválido
  }

  // Converte a data para o formato ISO 8601
  const isoDate = imports.moment(date).format("YYYY-MM-DDTHH:mm:ssZ");

  // Formata e retorna a data no formato brasileiro
  return imports.moment(isoDate).format("DD/MM/YYYY");
};


app.get("/forms", async (req, res) => {

  try {
    const users = await usuarios.findAll();
    const formattedusers = users.map((user) => ({
      ...user.dataValues,
      createdAt: formatDateToBR(user.createdAt),
    }));
    return res.send(imports.forms(formattedusers));
  } catch (error) {
    console.error(error);
    return handleError(res, "Problema ao buscar os users.");
  }
});




// Atualizando a rota para aceitar um ID
// Rota Express
app.get("/formsload/:id", async (req, res) => {
  const { id } = req.params; // Obtendo o ID da requisição

  try {
    // Consulta para pegar os dados do usuário
    const [user] = await sequelize.query(`SELECT * FROM users WHERE id = ?`, {
      replacements: [id],
    });

    if (user.length === 0) {
      return res.status(404).send("user não encontrado.");
    }

    // Formata o resultado do user
    const formatteduser = {

      id: user[0].id,
      nome: user[0].nome,
      sobrenome: user[0].sobrenome,
      inst: user[0].inst,
      nifa: user[0].nifa,
      email: user[0].email,
      whatsapp: user[0].whatsapp,

    };

    // Envia os dados no formato desejado
    return res.json({ user: formatteduser });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Problema ao buscar os dados do user.");
  }
});




app.post("/formscreatusers", async (req, res) => {
  const dados = req.body;
  console.log("Dados recebidos:", dados); // Adicione esta linha para depuração

  // Validação básica (você pode usar bibliotecas como Joi ou express-validator para algo mais robusto)
  if (!dados.nome || !dados.sobrenome || !dados.email) {
    return res.status(400).send("Campos obrigatórios: nome, sobrenome e email.");
  }

  try {
    // Inserir os dados do usuário no banco de dados
    const [result] = await sequelize.query(
      `INSERT INTO users (nome, sobrenome, inst, nifa, email, whatsapp, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      {
        replacements: [dados.nome, dados.sobrenome, dados.inst, dados.nifa, dados.email, dados.whatsapp, '0000-00-00 00:00:00'],
      }
    );

    // Retornar sucesso ao cliente
    return res.status(201).send("Usuário cadastrado com sucesso.");
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);

    // Retornar erro adequado dependendo do tipo (ex: email duplicado)
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).send("Email já cadastrado.");
    }

    return res.status(500).send("Erro interno do servidor.");
  }
});





app.post("/formsdeleteuser", async (req, res) => {
  const dados = req.body;

  console.log("Dados recebidos:", dados);
  // Validação básica
  if (!dados.id) {
      return res.status(400).send("Campo obrigatório: id.");
  }

  try {
      // Deletar o usuário no banco de dados
      const [result] = await sequelize.query(
          `DELETE FROM users WHERE id = ?`,
          {
              replacements: [dados.id],
          }
      );

      // Verifica se o usuário foi encontrado e deletado
      if (result.affectedRows === 0) {
          return res.status(404).send("Usuário não encontrado.");
      }

      // Retornar sucesso ao cliente
      return res.status(200).send("Usuário deletado com sucesso.");
  } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      return res.status(500).send("Erro interno do servidor.");
  }
});




app.post("/formsupdateuser", async (req, res) => {
  const dados = req.body;
  console.log("Dados recebidos:", dados);

  // Validação básica
  if (!dados.id || !dados.nome || !dados.sobrenome || !dados.email) {
      return res.status(400).send("Campos obrigatórios: id, nome, sobrenome e email.");
  }

  // Formatação da data de nascimento, se existir
  let replacements = [dados.nome, dados.sobrenome, dados.email, dados.whatsapp, dados.inst, dados.id]; // Mantém id no final

  try {
      // Atualizar os dados do usuário no banco de dados
      const [result] = await sequelize.query(
          `UPDATE users SET nome = ?, sobrenome = ?, email = ?, whatsapp = ?, inst = ? WHERE id = ?`,
          {
              replacements: [...replacements], // Utiliza o array de replacements atualizado
          }
      );

      // Verifica se o usuário foi encontrado e atualizado
      if (result.affectedRows === 0) {
          return res.status(404).send("Usuário não encontrado.");
      }

      // Retornar sucesso ao cliente
      return res.status(200).send("Usuário atualizado com sucesso.");
  } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      return res.status(500).send("Erro interno do servidor.");
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

