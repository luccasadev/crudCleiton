export const RenderNames = (users) =>
  `
  <div 
  class="w-full h-[50px] py-[8px] px-[22px] rd8 flex items-center cursor-pointer"
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


 
    <div id="datas" class="w-full ml-auto  flex items-center gap-10 ">
    <div id="datas" class="w-full ml-auto grid grid-cols-[1fr,auto,minmax(80px,80px)] items-center gap-10">
  
    <!-- Nome do users -->
    <div class="text-white text-[14px] font-bold tracking-[0.08em] text-start">
      ${users.nome}
    </div>
    
    <!-- Informação de reserva -->
    <div class="text-[#afabab] text-[12px] font-light text-end px-6">
      Reservou a sala para o dia
    </div>
    
    <!-- Data de criação -->
    <div class="text-white text-[14px] font-light text-end">
      ${users.createdAt}
    </div>
  
  </div>
  
 
     <div
       x-data="{ click: true,
       hover: false }"
       class="z-40 row gap-6 justify-center items-center"
     >
       <!-- visible icon -->
       <button
         @mouseenter="hover = true" 
         @mouseleave="hover = false" 
         @click="click = !click"
         class=" cursor-pointer flex h-[22px] justify-center items-center w-full"
       >
         <div
           class="absolute w-[22px] h-[22px] bg-transparent bg-black z-10"
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
           class="opacity-20 w-[22px] h-[22px] z-0 bg-white"
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
           class="opacity-20 w-[22px] h-[22px] z-0 bg-white"
         ></object>
       </button>
 
       <button
       x-data="{hover2: false }"
         class="cursor-pointer flex h-[22px] justify-center items-center w-full"
       >
         <object
         @mouseenter="hover2 = true" 
         @mouseleave="hover2 = false" 
           mask="./img/zapzap.svg"
           :class="{'opacity-100': hover2}"
           class="opacity-20 w-[22px] h-[22px] z-0 bg-white hover:bg-[#0CFF6D]"
         ></object>
       </button>
     </div>
   </div>
 </div>

`;
