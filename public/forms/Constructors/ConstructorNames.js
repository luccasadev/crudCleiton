export const RenderNames = (users) =>
  `
  <div 
  class="render-names"
  hx-get="/formsload/${users.id}"
  hx-target="#target"
  hx-swap="innerHTML"
  x-data="{ 
  count: ${users.id}}"
  @click="() => 
  { 
    $store.reload.handleClick(count); 
    $store.formsData.loadForUpdate({}); 
  }"
  :class="($store.reload.activeCount === count ? 'bg-slate-800' : 'bg-slate-900')">


 
    <div id="datas" class="render-names__datas">
    <div id="datas" class="render-names__grid">
  
    <!-- Nome do users -->
    <div class="render-names__name">
      ${users.nome}
    </div>
    
    <!-- Informação de reserva -->
    <div class="render-names__info">
      Reservou a sala para o dia
    </div>
    
    <!-- Data de criação -->
    <div class="render-names__date">
      ${users.createdAt}
    </div>
  
  </div>
  
 
     <div
        class="icon-button"   
        x-data="{ click: true,
        hover: false }"
     >
       <!-- visible icon -->
       <button
         class="icon-button__st" 
         @mouseenter="hover = true" 
         @mouseleave="hover = false" 
         @click="click = !click"
       >
         <div
           class="icon-button__abs"
         ></div>
 
         <!-- Primeiro objeto, visível quando é falso -->
         <object
         :class="{
           'visible': !click,
           'hidden': click,
           'opacity-20': !hover,
           'opacity-100': hover,
         }"
           mask="./img/check.svg"
           class="icon-button__object"
         ></object>
 
         <!-- Segundo objeto, visível quando é verdadeiro -->
         <object
 
         :class="{
           'hidden': !click,
           'visible': click,
           'opacity-20': !hover,
           'opacity-100': hover,
         }"
           mask="./img/edit.svg"
           class="icon-button__object"
         ></object>
       </button>
 
       <button
       x-data="{hover2: false }"
         class="icon-button__st h-[22px] "
       >
         <object
         @mouseenter="hover2 = true" 
         @mouseleave="hover2 = false" 
           mask="./img/zapzap.svg"
           :class="{'opacity-100': hover2}"
           class="icon-button__object2 w-[23px] h-[22px] hover:bg-[#0CFF6D]"
         ></object>
       </button>
     </div>
   </div>
 </div>

`;
