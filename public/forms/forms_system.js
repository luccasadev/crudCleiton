import { constructorForms } from "./constructorForms.js";
import { buttonsForms } from "./ConstructorbuttonsForms.js";
import { RenderNames } from "./ConstructorNames.js";

export const forms = (users = []) => {
  const buttons = buttonsForms();
  const forms =  constructorForms(); 
  const Names = users.map((user) => RenderNames(user)).join("");

  const html = `
    <div 
    class="w-[90%] ic px-[25px]">
    
    <div class="col gap-6">
      
      <form 
      id="Constructor"
      class=" grid grid-cols-2 gap-4"> 
          ${forms} 
      </form>

      <div class=" grid grid-cols-3  gap-4"> 
            ${buttons} 
      </div>
      
      <div
      class=" text-white w-full col gap-[1px]" >
        ${Names}
      </div>
      
    </div>


    <div id="target" style="display:none;"></div>
</div>
`;

  return applyMaskToHTML(html);
};


