import { txtinput, txtplace } from "../Extructure/txtValues.js";
export const constructorForms = () => {
  // Obtém os inputs e placeholders diretamente
  const inputMap = txtinput();
  const placeMap = txtplace();

  // Mapeia as seções e gera o HTML correspondente
  const formsHTML = inputMap.map((input) => {
    // Encontra o placeholder correspondente
    const placeholder = placeMap.find(place => place.id === input.id).placeholder;

    return `
      <input
        class="in ipt"
        id="${input.name}"
        name="${input.name}"
        type="text"
        placeholder="${placeholder}"
        x-model="$store.formsData.user['${input.name}']"
      />
    `;
  }).join("");

  return formsHTML; // Retorna o HTML final dos inputs
};
