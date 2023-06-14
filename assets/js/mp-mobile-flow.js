var zeee;
var noofMobiles = 0;
var cross = false;
var bzoop;

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
  console.log('lal g', event.target);
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
        .length - 1;
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
var twoChildTwoAnotherChild = document.getElementById('PPtwoChildTwoAnotherChild')
twoChildTwoAnotherChild.addEventListener('onchange', () => {
  console.log("hieeeelo");
})
console.log("twoChildTwoAnotherChild", twoChildTwoAnotherChild);
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
    style='transform : rotate(90deg); margin-top: 50px;'
          id="bzoop"
          alt="image"
        /> <img width='24px' height='24px' style='margin-top: 30px' onClick="openModalONE(event)" src="./assets/images/icons/plus-big-icon.svg" alt="image">`;
  var newdiv = document.createElement("div");
  newdiv.style.height = "170px";
  newdiv.style.marginTop = '20px'
  if (noofchildsofmain % 2 !== 0) {
    let setCheckMarginLeft = `${document.getElementsByClassName(
      `mainforphotos${noofchildsofmain}child`
    )[0].style.marginLeft}`
    if (setCheckMarginLeft) {
      setCheckMarginLeft = parseInt(setCheckMarginLeft, 10)
      setCheckMarginLeft = setCheckMarginLeft - 50
    }
    let widthSetting = `${setCheckMarginLeft +
      document.getElementsByClassName(
        `mainforphotos${noofchildsofmain}child`
      )[0].children.length *
      160 -
      60
      }px`
    console.log(widthSetting, 'test')
    newdiv.style.width = widthSetting;


    newdiv.style.marginLeft = '50px'
  } else {
    let widthSet = `${parseInt(`${document.getElementsByClassName(
      `mainforphotos${noofchildsofmain}child`
    )[0].style.width}`, 10) - `${document.getElementsByClassName(
      `mainforphotos${noofchildsofmain}child`
    )[0].children.length *
    160 -
    60
    }` + 50}px`
    newdiv.style.width = 'auto';
    newdiv.style.marginLeft = widthSet
  }
  noofchildsofmain += 1;
  newdiv.className = `mainforphotos${noofchildsofmain}child`;
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
  }
  console.log("bzoop", bzoop);
  closeModalONE();
  var newdiv = document.createElement("div");
  newdiv.style = "width: 160px;height : 230px ";
  if (noofchildsofmain % 2 == 0) {
    // if (noofchildsofmain !== 1  ) {
    newdiv.style =
      "width: 160px;height : 230px ; display : flex ; flex-direction : column ; align-items : flex-end ";
    newdiv.innerHTML = `
    <div class='peela' style= "width: 122px;height : 153px; display: flex;justify-content : space-around">
   
  <div style="width: 60px;height : 153px;display : flex ; justify-content : center ; align-items : center">
    <img width='24px' height='24px' onClick="openModalTWO(event)" src="./assets/images/icons/plus-big-icon.svg" alt="image">
    </div>
    <div>
    <div style="width: 100px;height : 153px;display : flex ; justify-content : center">
    <img src="./assets/images/mobile/${event.target.id}.png" alt="image">
  </div> 
    <input type="text" name="name" id="name" placeholder="Web Title" class="d-block w-100 border-0 mt-2 rounded bg-transparent outline-none fw-600 text-center">
    </div>
  </div>
  <div style="height :77px;width : 100px ; display : flex ;  justify-content : space-evenly ; align-items : center ;flex-direction : column">
</div>`;
  } else {
    newdiv.style = "width: 160px;height : 230px ";

    newdiv.innerHTML = `
    <div class='peela' style= "width: 122px;height : 153px; display: flex;justify-content : space-around">
    <div>
    <div style="width: 100px;height : 153px;display : flex ; justify-content : center">
    <img src="./assets/images/mobile/${event.target.id}.png" alt="image">
  </div>
    <input type="text" name="name" id="name" placeholder="Web Title" class="d-block w-100 border-0 mt-2 rounded bg-transparent outline-none fw-600 text-center">
    </div>
  <div style="width: 60px;height : 153px;display : flex ; justify-content : center ; align-items : center">
    <img width='24px' height='24px' onClick="openModalTWO(event)" src="./assets/images/icons/plus-big-icon.svg" alt="image">
    </div>
  </div>
  <div style="height :77px;width : 100px ; display : flex ;  justify-content : space-evenly ; align-items : center ;flex-direction : column">
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
  lop.innerHTML = `  <div class="desMain">
          <div class="counting">${noofMobiles}</div>
          <div>
          <input type="text" name="name" id="name" placeholder="Web Title" class="d-block w-100 border-0 mt-2 rounded bg-transparent outline-none fw-600">
          <textarea class='txtarea'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation. Culpa qui officia deserunt mollit anim.</textarea>
          </div>
          <div><button style="width : 20px ; height: 20px;cursor : pointer; background-color:  red ; color: white; padding:  5px ; display : flex ; justify-content : center ; align-items : center ; outline : none ; border : none ; border-radius : 50%"  onClick="remove(event)"> X </button></div>
        </div>`;
  tool.appendChild(lop);
  let rowWidth = parseInt(document.getElementsByClassName(`mainforphotos${noofchildsofmain}child`)[0].style.width, 10);
  let childWidth = document.getElementsByClassName(`mainforphotos${noofchildsofmain}child`)[0].children.length * 160;
  let checkWidth = rowWidth - childWidth
  console.log( checkWidth < 0 , 'testing')
  if (document.getElementsByClassName(`mainforphotos${noofchildsofmain}child`)[0].children.length == 8 || checkWidth < 0) {
    breakLine();
  }
};







const remove = (event) => {
  console.log('remove', event.target.parentNode.parentNode);
  event.target.parentNode.parentNode.remove()
}




const rightArrowmodelClick = (event) => {
  closeModalTWO();
  zeee.innerHTML = "";
  if (noofchildsofmain % 2 == 0) {
    zeee.innerHTML = `<div style="display : flex ; justify-content : center ; align-items : center"><div style="height :100% ;display : flex ; justify-content : center ; align-items : flex-end">
      <img width='24px' height='24px' onClick="openModalONE(event)" src="./assets/images/icons/plus-big-icon.svg" alt="image"></div>
        </div>
      <div style="display : flex ; justify-content : center ; align-items : center;"><img style="transform: rotate(180deg);" src="./assets/images/rightArrows/${event.target.id}.png" alt=""></div>
        <div>
      
           </div>`;
  } else {
    zeee.innerHTML = `<div style="display : flex ; justify-content : center ; align-items : center">
      <div style="display : flex ; justify-content : center ; align-items : center;"><img src="./assets/images/rightArrows/${event.target.id}.png" alt=""></div>
        <div>
      <div style="height :100% ;display : flex ; justify-content : center ; align-items : flex-end">
      <img width='24px' height='24px' onClick="openModalONE(event)" src="./assets/images/icons/plus-big-icon.svg" alt="image"></div>
        </div>
           </div>`;
  }
};