import { txtButtons } from "./txtValues.js";
export const buttonsForms = () => {
  const ButtonsItems = [
    { id: 1, buttons: [1] },
    { id: 2, buttons: [2] },
    { id: 3, buttons: [3] },
  ];

  // Mapeia as seções e gera o HTML correspondente
  const buttons = ButtonsItems.map((buttons) => {
    // Mapeia os botões dentro de cada seção
    const buttonsItems = buttons.buttons
      .map((buttonsID) => {
        // Obtenha a imagem correspondente ao botão
        const txtbtn = txtButtons(buttonsID);
        // Gera o HTML do botão, chamando `iconButtons`
        return `

    
          ${txtbtn}

        `;
      })
      .join("");

    return `
        <button
        @click="$store.crudusers.handleClick('button${buttons.id}')"
          type="button"
          id="button${buttons.id}"
          class=" rd8 row  text-white reg22 p1022 jc-ic cursor-pointer hover:bg-slate-800 bg-slate-900">
            ${buttonsItems}
        </button>
    `;
  }).join("");

  return buttons;
};
