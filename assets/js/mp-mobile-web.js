var zeee;
var noofMobiles = 0;
var bzoop ;

//MODAL START
const modalONE = document.getElementById("myModalONE");
const modalTWO = document.getElementById("myModalTWO");
const modalTHREE = document.getElementById("myModalTHREE");
function openModalTHREE() {
  modalTHREE.style.display = "block";
}
function closeModalTHREE() {
  modalTHREE.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modalTHREE) {
    closeModalTHREE();
  }
};

function openModalONE(event) {
  console.log(
    "oop",
    document.getElementsByClassName("modethowImagesMain")[0].div
  );

  console.log(
    "event.target.parentNode?.children[0].id",
    event.target.parentNode?.children[0].id
  );
  modalONE.style.display = "block";
  bzoop = event.target.parentNode?.children;

}
function closeModalONE() {
  modalONE.style.display = "none";
}
function openModalTWO(event) {
  modalTWO.style.display = "block";
  console.log("event", event.target.parentNode);
  zeee = event.target.parentNode;
  console.log(
    "gggg",
    document.getElementsByClassName("modethowImagesMain")[0].children[0]
      .children[0]
  );
  if (noofchildsofmain % 2 == 0) {
    for (
      let index = 0;
      index <
      document.getElementsByClassName("modethowImagesMain")[0].children
        .length -1;
      index++
    ) {
      console.log(
        "pp",
        document.getElementsByClassName("modethowImagesMain")[0].children[
          index
        ].children
      );
      document.getElementsByClassName("modethowImagesMain")[0].children[
        index
      ].children[0].style.transform = "rotate(180deg)";
    }
  } else {
    for (
      let index = 0;
      index <
      document.getElementsByClassName("modethowImagesMain")[0].children
        .length;
      index++
    ) {
      console.log(
        "pp",
        document.getElementsByClassName("modethowImagesMain")[0].children[
          index
        ].children
      );
      document.getElementsByClassName("modethowImagesMain")[0].children[
        index
      ].children[0].style.transform = "rotate(0deg)";
    }
  }
  // secondtemporaryClass = event.target.parentNode.className
}
function closeModalTWO() {
  modalTWO.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modalTWO) {
    closeModalTWO();
  }
};
window.onclick = function (event) {
  if (event.target == modalONE) {
    closeModalONE();
  }
};
//MODAL END

var secondPlus = document.getElementById("secondPlus");
var mainforphotos = document.getElementById("mainforphotos");
var noofchildsofmain = 1;
secondPlus.addEventListener("click", () => {
  var newdiv = document.createElement("div");
  newdiv.style.height = "170px";
  newdiv.style.width = "auto";
  newdiv.className = `mainforphotos${noofchildsofmain}child`;
  mainforphotos.appendChild(newdiv);
});

const breakLine = () => {
  closeModalTWO()
  if (noofchildsofmain % 2 == 0) {
    document.getElementsByClassName(
      `mainforphotos${noofchildsofmain}child`
    )[
      document.getElementsByClassName(
        `mainforphotos${noofchildsofmain}child`
      ).length - 1
    ].children[
      document.getElementsByClassName(
        `mainforphotos${noofchildsofmain}child`
      )[
        document.getElementsByClassName(
          `mainforphotos${noofchildsofmain}child`
        ).length - 1
      ].children.length - 1
    ].children[0].children[0].innerHTML = "";
  } else {
    document.getElementsByClassName(
      `mainforphotos${noofchildsofmain}child`
    )[
      document.getElementsByClassName(
        `mainforphotos${noofchildsofmain}child`
      ).length - 1
    ].children[
      document.getElementsByClassName(
        `mainforphotos${noofchildsofmain}child`
      )[
        document.getElementsByClassName(
          `mainforphotos${noofchildsofmain}child`
        ).length - 1
      ].children.length - 1
    ].children[0].children[1].innerHTML = "";
  }
  document.getElementsByClassName(
    `mainforphotos${noofchildsofmain}child`
  )[
    document.getElementsByClassName(
      `mainforphotos${noofchildsofmain}child`
    ).length - 1
  ].children[
    document.getElementsByClassName(
      `mainforphotos${noofchildsofmain}child`
    )[
      document.getElementsByClassName(
        `mainforphotos${noofchildsofmain}child`
      ).length - 1
    ].children.length - 1
  ].children[1].innerHTML = ` <img
  src="./assets/images/rightArrows/ra5.png"
  style='transform : rotate(90deg); background: rgba(217, 217, 217, 0.53); border: 1px dashed #AABED1; padding: 5px;'
        id="bzoop"
        alt="image"
      /> <img width='24px' height='24px' onClick="openModalONE(event)" src="./assets/images/icons/plus-big-icon.svg" alt="image" class="mt-3">`;
  var newdiv = document.createElement("div");
  newdiv.style.height = "170px";
  if (noofchildsofmain % 2 !== 0) {
    newdiv.style.width = `${
      document.getElementsByClassName(
        `mainforphotos${noofchildsofmain}child`
      )[0].children.length *
        230 -
      70
    }px`;
    newdiv.style.marginLeft = '50px'

  } else {
    newdiv.style.width = "auto";
  }
  noofchildsofmain += 1;
  newdiv.className = `mainforphotos${noofchildsofmain}child`;
  newdiv.style.marginLeft = '50px'

  if (noofchildsofmain % 2 == 0) {
    newdiv.style.flexDirection = "row-reverse";
  }
  mainforphotos.appendChild(newdiv);
};

const modelOneClick = (event) => {
  if (bzoop[0]?.id !== "bzoop") {
bzoop[0].remove();
  } else {
    bzoop[1].remove();
  }        console.log(event.target.id);
  closeModalONE();
  var newdiv = document.createElement("div");
  newdiv.style = "width: 230px;height : 230px ";
  if (noofchildsofmain % 2 == 0) {
    newdiv.style =
      "width: 230px;height : 230px ; display : flex ; flex-direction : column ; align-items : flex-end ";
    newdiv.innerHTML = `
  <div class='peela' style= "width: 230px;height : 153px; display: flex;justify-content : space-around">
 
<div style="width: 70px;height : 153px;display : flex ; justify-content : center ; align-items : center">
  <img width='24px' height='24px' onClick="openModalTWO(event)" src="./assets/images/icons/plus-big-icon.svg" alt="image">
  </div>
  <div style="width: 157px;height : 153px;display : flex ; justify-content : center; flex-flow: column">
  <img src="./assets/images/web-dasktop/${event.target.id}.png" style="object-fit : contain ; width : 100%" alt="image">
  <input type="text" name="name" id="name" placeholder="Web Title" class="d-block w-100 border-0 mt-2 rounded bg-transparent outline-none fw-600 text-center">
</div> 
</div>
<div style="height :77px;width : 160px ; display : flex ;  justify-content : space-evenly ; align-items : center ;flex-direction : column">
</div>`;
  } else {
    newdiv.style = "width: 230px;height : 230px ";

    newdiv.innerHTML = `
  <div class='peela' style= "width: 230px;height : 153px; display: flex;justify-content : space-around">
  <div style="width: 160px;height : 153px;display : flex ; justify-content : center; flex-flow: column">
  <img src="./assets/images/web-dasktop/${event.target.id}.png" style="object-fit : contain ; width : 100%" alt="image">
  <input type="text" name="name" id="name" placeholder="Web Title" class="d-block w-100 border-0 rounded mt-2 bg-transparent outline-none fw-600 text-center">
</div>
<div style="width: 70px;height : 153px;display : flex ; justify-content : center ; align-items : center">
  <img width='24px' height='24px' onClick="openModalTWO(event)" src="./assets/images/icons/plus-big-icon.svg" alt="image">
  </div>
</div>
<div style="height :77px;width : 160px ; display : flex ;  justify-content : space-evenly ; align-items : center ;flex-direction : column">
</div>`;
  }
  console.log("noofchildsofmainbefore", noofchildsofmain);

  var toappendasingle = document.getElementsByClassName(
    `mainforphotos${noofchildsofmain}child`
  )[0];
  console.log(
    "toappendasingle",
    document.getElementsByClassName(
      `mainforphotos${noofchildsofmain}child`
    )
  );

  toappendasingle.style.height = "230px";
  toappendasingle.style.display = "flex";
  console.log("toappendasingle", toappendasingle);
  console.log("noofchildsofmain", noofchildsofmain);

  toappendasingle.appendChild(newdiv);
  noofMobiles += 1;
  var tool = document.getElementsByClassName(
    "twoChildTwoAnotherChild"
  )[0];
  var lop = document.createElement("div");
  lop.innerHTML =`  <div class="desMain">
        <div class="counting">${noofMobiles}</div>
        <div>
        <input type="text" name="name" id="name" placeholder="Web Title" class="d-block w-100 border-0 rounded mt-2 bg-transparent outline-none fw-600">
        <textarea class='txtarea'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation. Culpa qui officia deserunt mollit anim.</textarea>
        </div>
        <div><button style="width : 20px ; height: 20px;cursor : pointer; background-color:  #775DA6 ; color: white; padding:  5px ; display : flex ; justify-content : center ; align-items : center ; outline : none ; border : none ; border-radius : 50%"  onClick="remove(event)"> X </button></div>
      </div>`;
  tool.appendChild(lop);
  if(document.getElementsByClassName(`mainforphotos${noofchildsofmain}child`)[0].children.length  == 8){
    breakLine();
  }
};
const remove = (event) =>{
  console.log('remove',event.target.parentNode.parentNode);
  event.target.parentNode.parentNode.remove()
}

const rightArrowmodelClick = (event) => {
  closeModalTWO();
  zeee.innerHTML = "";
  if (noofchildsofmain % 2 == 0) {
    zeee.innerHTML = `<div style="display : flex ; justify-content : center ; align-items : center"><div style="height :100% ;display : flex ; justify-content : center ; align-items : flex-end">
    <img width='24px' height='24px' onClick="openModalONE(event)" src="./assets/images/icons/plus-big-icon.svg" alt="image"></div>
      </div>
    <div style="display : flex ; justify-content : center ; align-items : center; background: rgba(217, 217, 217, 0.53); border: 1px dashed #AABED1; padding: 5px;"><img style="transform: rotate(180deg);" src="./assets/images/rightArrows/${event.target.id}.png" alt=""></div>
      <div>
    
         </div>`;
  } else {
    zeee.innerHTML = `<div style="display : flex ; justify-content : center ; align-items : center">
    <div style="display : flex ; justify-content : center ; align-items : center; background: rgba(217, 217, 217, 0.53); border: 1px dashed #AABED1; padding: 5px;"><img src="./assets/images/rightArrows/${event.target.id}.png" alt=""></div>
      <div>
    <div style="height :100% ;display : flex ; justify-content : center ; align-items : flex-end">
    <img width='24px' height='24px' onClick="openModalONE(event)" src="./assets/images/icons/plus-big-icon.svg" alt="image"></div>
      </div>
         </div>`;
  }
};