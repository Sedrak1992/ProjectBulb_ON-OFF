const app = document.querySelector(".app");
const imgLalp = document.querySelector(".iimg");
const imgLampMiacrac = document.querySelector(".imgLampMiacrac");


 function  crateTodo() {
  imgLampMiacrac.classList.toggle("dooo");
};



imgLalp.onclick = crateTodo;
imgLampMiacrac.onclick = crateTodo;











// crateTodo();
// function box() {
//   app.innerHTML += `
//       <h1>
//          Turn the light on and off
//          <br />
//          by clicking the bulb!
//       </h1>
//       <img src="img/OFFbulb.jpeg" alt="lamp" />
//       <img src="img/ONbulb.jpeg" alt="lamp" class="imgLamp"/>
//   `;
// }

// box();
// const input = document.querySelector(".tudo_list_form_input");
// const addBtn = document.querySelector(".tudo_list_form_button");
// const listContainer = document.querySelector(".tudo_list__items__ul");

// addBtn.addEventListener("click", crateTodo);

// function removeTodo() {
//   const listParent = this.parentElement.parentElement;
//   listContainer.removeChild(listParent);
// }

// function doneTodo() {
//   const listParent = this.parentElement.parentElement;
//   listParent.classList.toggle("done");
// }

// function setActionsEvents() {
//   const deleteBtns = document.querySelectorAll(
//     ".tudo_list__items__row__button--remove"
//   );

//   const doneBtns = document.querySelectorAll(
//     ".tudo_list__items__row__button--done"
//   );

//   deleteBtns.forEach(function (btn) {
//     btn.addEventListener("click", removeTodo);
//   });

//   doneBtns.forEach(function (btn) {
//     btn.addEventListener("click", doneTodo);
//   });
// }

// function crateTodo() {
//   if (input.value.length <= 3) {
//     return alert("miqich erkar ban gri");
//   }
//   listContainer.innerHTML += `
//   <li class="tudo_list__items__row">
//   <span class="tudo_list__items__row__content">${input.value}</span>
//   <div>
//     <button class="tudo_list__items__row__button--done">add</button>
//     <button class="tudo_list__items__row__button--remove">X</button>
//   </div>
// </li>
//   `;
//   input.value = "";

//   setActionsEvents();
// }
