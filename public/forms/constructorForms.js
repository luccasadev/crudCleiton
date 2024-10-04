import { txtInput, txtplace } from "./txtValues.js";
export const constructorForms = () => {
  const FormsItems = [
    { id: 1, forms: [1] },
    { id: 2, forms: [2] },
    { id: 3, forms: [3] },
    { id: 4, forms: [4] },
    { id: 5, forms: [5] },
    { id: 6, forms: [6] },
  ];

  // Mapeia as seções e gera o HTML correspondente
  const forms = FormsItems.map((forms) => {
    // Mapeia os botões dentro de cada seção
    const FormersItems = forms.forms
      .map((formsID) => {
        // Obtenha a imagem correspondente ao botão
        const txtIn = txtInput(formsID);
        const txtpl = txtplace(formsID);
        // Gera o HTML do botão, chamando `iconButtons`
        return `
          
              <input
                id="${txtIn}"
                class="in row rd8 p816 w-full border-slate-100 border-2"
                name="${txtIn}"
                type="text"
                placeholder="${txtpl}"
                x-model="
                $store.formsData.user['${txtIn}']"
              />

        `;
      })
      .join("");

    return `
          
            ${FormersItems}
          
    `;
  }).join("");

  return forms;
};
