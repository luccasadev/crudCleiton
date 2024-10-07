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
        id="${input.name}"
        class="in row rd8 px-[22px] py-[8px] w-full border-slate-100 border-2"
        name="${input.name}"
        type="text"
        placeholder="${placeholder}"
        x-model="$store.formsData.user['${input.name}']"
      />
    `;
  }).join("");

  return formsHTML; // Retorna o HTML final dos inputs
};
