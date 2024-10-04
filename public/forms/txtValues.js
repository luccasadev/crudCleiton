  export function txtInput(formsID) {
    const buttonMap = {
      1: "nome",
      2: "sobrenome",
      3: "inst",
      4: "nifa",
      5: "email",
      6: "whatsapp",
    };
  
    return buttonMap[formsID] || null; // Retorna null se buttonId não for encontrado
  }
  
  export function txtplace(placeID) {
    const buttonMap = {
      1: "Nome",
      2: "Sobrenome",
      3: "Instituição",
      4: "Número de Identificação",
      5: "Email",
      6: "Whatsapp",
    };
  
  
    return buttonMap[placeID] || null; // Retorna null se buttonId não for encontrado
  }
  
  export function txtButtons(buttonsID) {
    const buttonMap = {
      1: "Cadastrar",
      2: "Cancelar",
      3: "Deletar",
      
    };
  
    return buttonMap[buttonsID] || null; // Retorna null se buttonId não for encontrado
  }
