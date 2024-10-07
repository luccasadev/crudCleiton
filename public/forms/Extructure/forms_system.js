import { constructorForms } from "../Constructors/constructorForms.js";
import { buttonsForms } from "../Constructors/ConstructorbuttonsForms.js";
import { RenderNames } from "../Constructors/ConstructorNames.js";

export const forms = (users = []) => {
  const forms =  constructorForms(); 
  const buttons = buttonsForms();
  const Names = users.map((user) => RenderNames(user)).join("");

  const html = `
    <div 
    class="constructor-form">
    
    <div class="constructor-form__grid">
      
      <form 
      id="Constructor"
      class="constructor-form__grid_"> 
          ${forms} 
      </form>

      <div class="constructor-form__buttons"> 
            ${buttons} 
      </div>
      
      <div
      class="constructor-form__names" >
        ${Names}
      </div>
      
    </div>


    <div id="target" style="display:none;"></div>
</div>
`;

  return applyMaskToHTML(html);
};


