export function txtinput() {
  // Mapeia diretamente o ID e o nome do campo
  const inputMap = [
    { id: 1, name: "nome" },
    { id: 2, name: "sobrenome" },
    { id: 3, name: "inst" },
    { id: 4, name: "nifa" },
    { id: 5, name: "email" },
    { id: 6, name: "whatsapp" },
  ];

  return inputMap; // Retorna o array completo de inputs
}

export function txtplace() {
  // Mapeia diretamente o ID e o placeholder do campo
  const placeMap = [
    { id: 1, placeholder: "Nome" },
    { id: 2, placeholder: "Sobrenome" },
    { id: 3, placeholder: "Instituição" },
    { id: 4, placeholder: "Número de Identificação" },
    { id: 5, placeholder: "Email" },
    { id: 6, placeholder: "Whatsapp" },
  ];

  return placeMap; // Retorna o array completo de placeholders
}
  
  export function txtButtons() {
    // Agora, mapeamos diretamente o ID e o texto do botão
    const buttonMap = [
      { id: 1, text: "Cadastrar" },
      { id: 2, text: "Cancelar" },
      { id: 3, text: "Deletar" }
    ];
  
    return buttonMap; // Retorna o array completo de botões
  }
  