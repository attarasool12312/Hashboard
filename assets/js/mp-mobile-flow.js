var secondPlus = document.getElementById("secondPlus");
secondPlus.addEventListener("click", (event) => openModalONE(event));
console.log("secondPlus", secondPlus);
var temporaryClass;
var secondtemporaryClass;
var alreadyDivsRigth = [];
var doubleBox = false;
var doubleBoxClass;
var noofImgsdoubleBox = 0;
var checkTop = "";
var currntpusherDiv = "";
var count = 0;

var twoChildTwoAnotherChild = document.getElementsByClassName(
  "twoChildTwoAnotherChild"
);

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
    "openModalONE",
    event.target.parentNode.parentNode.className
  );
  if (event.target.parentNode.parentNode.className) {
    currntpusherDiv = `${event.target.parentNode.parentNode.className}`;
    console.log("currntpusherDiv", currntpusherDiv);
  }

  (event.target.className = "superb")
    ? event.target.remove()
    : console.log("hi");
  temporaryClass = event.target.className;
  console.log("temporaryClass", temporaryClass);

  modalONE.style.display = "block";
}
function closeModalONE() {
  modalONE.style.display = "none";
}
function openModalTWO(event) {
  modalTWO.style.display = "block";
  console.log("event", event.target.parentNode.parentNode.parentNode);
  secondtemporaryClass = event.target.parentNode.className;
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
function modelOneClick(event) {
  console.log("currntpusherDiv", currntpusherDiv);
  console.log("eventzzz", event.target.parentNode.parentNode);
  count +=1;

  closeModalONE();
  if (doubleBox == false) {
    var forRemoval = document.getElementsByClassName(
      `${secondtemporaryClass}`
    );
    console.log("secondtemporaryClass", secondtemporaryClass);
    var zee = document.getElementsByClassName(currntpusherDiv);
    var zeeAmo = document.createElement("div");
    zeeAmo.style.position = "absolute";
    zeeAmo.style.top = "0px";

    var width = 0;
    for (var i = 0; i < alreadyDivsRigth.length; i++) {
      if (alreadyDivsRigth[i].boxName == currntpusherDiv) {
        width += 1;
      }
    }
    zeeAmo.style.left = `${width * 140}px`;

    var newMainDiv = document.createElement("div");
    newMainDiv.style.width = "140px";
    newMainDiv.style.height = "200px";
    newMainDiv.style.display = "flex";
    newMainDiv.style.flexWrap = "wrap";

    var createdDivChildOne = document.createElement("div");
    createdDivChildOne.style.width = "86px";
    var newImage = document.createElement("img");
    newImage.src = `./assets/images/mobile/${event.target.id}.png`;
    createdDivChildOne.appendChild(newImage);
    createdDivChildOne.style.display = "flex";
    createdDivChildOne.style.justifyContent = "center";
    createdDivChildOne.style.alignItems = "center";
    var createdDivChildTwo = document.createElement("div");
    createdDivChildTwo.className = `ccp${parseInt(
      Math.random() * 1000
    )}plloo`;
    var rightarrowImage = document.createElement("img");
    rightarrowImage.src = `./assets/images/greePlus.png`;
    rightarrowImage.style.width = "20px";
    rightarrowImage.style.height = "20px";
    rightarrowImage.style.cursor = "pointer";
    rightarrowImage.addEventListener("click", (event) =>
      openModalTWO(event)
    );
    createdDivChildTwo.appendChild(rightarrowImage);
    createdDivChildTwo.style.width = "54px";
    createdDivChildTwo.style.display = "flex";
    createdDivChildTwo.style.justifyContent = "center";
    createdDivChildTwo.style.alignItems = "center";
    var createdDivChildThree = document.createElement("div");
    var bottomarrowImage = document.createElement("img");
    bottomarrowImage.src = `./assets/images/greePlus.png`;
    bottomarrowImage.style.width = "20px";
    bottomarrowImage.style.height = "20px";
    bottomarrowImage.style.cursor = "pointer";
    bottomarrowImage.addEventListener("click", (event) =>
      openModalTHREE(event)
    );
    createdDivChildThree.appendChild(bottomarrowImage);
    createdDivChildThree.style.display = "flex";
    createdDivChildThree.style.justifyContent = "center";
    createdDivChildThree.style.alignItems = "center";
    createdDivChildThree.style.width = "86px";
    newMainDiv.appendChild(createdDivChildOne);
    newMainDiv.appendChild(createdDivChildTwo);
    zeeAmo.appendChild(newMainDiv);
    console.log("zee", zee[0]);

    zee[0].appendChild(zeeAmo);
    alreadyDivsRigth.push({
      boxName: currntpusherDiv,
      imageone: `./assets/images/mobile/${event.target.id}.png`,
    });
    console.log("twoChildTwoAnotherChild", twoChildTwoAnotherChild);
    var lop = document.createElement("div");
    lop.innerHTML = `  <div class="desMain">
        <div class="counting">${count}</div>
        <div class="written">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
          ad minim veniam, quis nostrud exercitation. Culpa qui officia
          deserunt mollit anim.
        </div>
      </div>`;
    twoChildTwoAnotherChild[0].appendChild(lop);

    temporaryClass = "";
    const mainforphotos =
      document.getElementsByClassName(currntpusherDiv);
    console.log("alreadyDivsRigth", alreadyDivsRigth);
    console.log("currntpusherDiv", currntpusherDiv);

    if (
      mainforphotos[0].children.length == 2 &&
      mainforphotos[0].children[0].className == "firstPlus"
    ) {
      mainforphotos[0].children[0].remove();
    }
  } else {
    if (noofImgsdoubleBox == 0) {
      var zee = document.getElementsByClassName(currntpusherDiv)[0];
      var zeeAmofree = document.createElement("div");
      zee.appendChild(zeeAmofree);
      var clazzName = `ccp${parseInt(
        Math.random() * 1000
      )}plferwefrefvsdvoo`;
      zeeAmofree.className = clazzName;
      doubleBoxClass = clazzName;
      zeeAmofree.style.position = "absolute";
      zeeAmofree.style.height = "160px";
      zeeAmofree.style.top = "0px";
      zeeAmofree.style.width = "140px";
      var width = 0;
      for (var i = 0; i < alreadyDivsRigth.length; i++) {
        if (alreadyDivsRigth[i].boxName == currntpusherDiv) {
          width += 1;
        }
      }
      zeeAmofree.style.left = `${width * 140}px`;
      var happenedDiv =
        document.getElementsByClassName(doubleBoxClass)[0];
      happenedDiv.style.height = "160px";

      var newMainDivOne = document.createElement("div");
      newMainDivOne.style.width = "140px";
      newMainDivOne.style.height = "160px";
      newMainDivOne.style.display = "flex";
      newMainDivOne.style.flexWrap = "wrap";
      newMainDivOne.style.position = "relative";
      newMainDivOne.style.top = "0px";

      var createdDivChildOne = document.createElement("div");
      createdDivChildOne.style.width = "86px";
      var newImage = document.createElement("img");
      newImage.src = `./assets/images/mobile/${event.target.id}.png`;
      createdDivChildOne.appendChild(newImage);
      createdDivChildOne.style.display = "flex";
      createdDivChildOne.style.justifyContent = "center";
      createdDivChildOne.style.alignItems = "center";
      var createdDivChildTwo = document.createElement("div");
      createdDivChildTwo.className = `ccp${parseInt(
        Math.random() * 1000
      )}plloo`;
      var rightarrowImage = document.createElement("img");
      rightarrowImage.src = `./assets/images/greePlus.png`;
      rightarrowImage.style.width = "20px";
      rightarrowImage.style.height = "20px";
      rightarrowImage.style.cursor = "pointer";
      rightarrowImage.addEventListener("click", (event) =>
        openModalTWO(event)
      );
      createdDivChildTwo.appendChild(rightarrowImage);
      createdDivChildTwo.style.width = "54px";
      createdDivChildTwo.style.display = "flex";
      createdDivChildTwo.style.justifyContent = "center";
      createdDivChildTwo.style.alignItems = "center";
      var createdDivChildThree = document.createElement("div");
      var bottomarrowImage = document.createElement("img");
      bottomarrowImage.src = `./assets/images/greePlus.png`;
      bottomarrowImage.style.width = "20px";
      bottomarrowImage.style.height = "20px";
      bottomarrowImage.style.cursor = "pointer";
      bottomarrowImage.addEventListener("click", (event) =>
        openModalTHREE(event)
      );
      createdDivChildThree.appendChild(bottomarrowImage);
      createdDivChildThree.style.display = "flex";
      createdDivChildThree.style.justifyContent = "center";
      createdDivChildThree.style.alignItems = "center";
      createdDivChildThree.style.width = "86px";
      newMainDivOne.appendChild(createdDivChildOne);
      newMainDivOne.appendChild(createdDivChildTwo);
      noofImgsdoubleBox += 1;

      alreadyDivsRigth.push({
        boxName: currntpusherDiv,
        imageone: `./assets/images/mobile/${event.target.id}.png`,
      });
      var lop = document.createElement("div");
    lop.innerHTML = `  <div class="desMain">
        <div class="counting">${count}</div>
        <div class="written">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
          ad minim veniam, quis nostrud exercitation. Culpa qui officia
          deserunt mollit anim.
        </div>
      </div>`;
    twoChildTwoAnotherChild[0].appendChild(lop);
      happenedDiv.appendChild(newMainDivOne);
    } else if (noofImgsdoubleBox == 1) {
      var happenedDiv =
        document.getElementsByClassName(doubleBoxClass)[0];
      console.log("happenedDiv", happenedDiv);
      happenedDiv.style.height = "320px";
      happenedDiv.style.display = "flex";
      happenedDiv.style.felxDirection = "column";
      happenedDiv.style.justifyContent = "space-between";
      happenedDiv.style.marginTop = "-34px";

      var newMainDivTwo = document.createElement("div");
      newMainDivTwo.style.width = "140px";
      newMainDivTwo.style.height = "160px";
      newMainDivTwo.style.display = "flex";
      newMainDivTwo.style.flexWrap = "wrap";
      newMainDivTwo.style.position = "absolute";
      newMainDivTwo.style.top = "200px";

      var createdDivChildOne = document.createElement("div");
      createdDivChildOne.style.width = "86px";
      var newImage = document.createElement("img");
      newImage.src = `./assets/images/mobile/${event.target.id}.png`;
      createdDivChildOne.appendChild(newImage);
      createdDivChildOne.style.display = "flex";
      createdDivChildOne.style.justifyContent = "center";
      createdDivChildOne.style.alignItems = "center";
      var createdDivChildTwo = document.createElement("div");
      createdDivChildTwo.className = `ccp${parseInt(
        Math.random() * 1000
      )}plloo`;
      var rightarrowImage = document.createElement("img");
      rightarrowImage.src = `./assets/images/greePlus.png`;
      rightarrowImage.style.width = "20px";
      rightarrowImage.style.height = "20px";
      rightarrowImage.style.cursor = "pointer";
      rightarrowImage.addEventListener("click", (event) =>
        openModalTWO(event)
      );
      createdDivChildTwo.appendChild(rightarrowImage);
      createdDivChildTwo.style.width = "54px";
      createdDivChildTwo.style.display = "flex";
      createdDivChildTwo.style.justifyContent = "center";
      createdDivChildTwo.style.alignItems = "center";
      var createdDivChildThree = document.createElement("div");
      var bottomarrowImage = document.createElement("img");
      bottomarrowImage.src = `./assets/images/greePlus.png`;
      bottomarrowImage.style.width = "20px";
      bottomarrowImage.style.height = "20px";
      bottomarrowImage.style.cursor = "pointer";
      bottomarrowImage.addEventListener("click", (event) =>
        openModalTHREE(event)
      );
      createdDivChildThree.appendChild(bottomarrowImage);
      createdDivChildThree.style.display = "flex";
      createdDivChildThree.style.justifyContent = "center";
      createdDivChildThree.style.alignItems = "center";
      createdDivChildThree.style.width = "86px";
      newMainDivTwo.appendChild(createdDivChildOne);
      var lop = document.createElement("div");
    lop.innerHTML = `  <div class="desMain">
        <div class="counting">1</div>
        <div class="written">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
          ad minim veniam, quis nostrud exercitation. Culpa qui officia
          deserunt mollit anim.
        </div>
      </div>`;
    twoChildTwoAnotherChild[0].appendChild(lop);
      noofImgsdoubleBox = 0;
      doubleBox = false;
      happenedDiv.appendChild(newMainDivTwo);
    }
  }
}
var noofFloos = 1;
function rightArrowmodelClick(event) {
  closeModalTWO();
  console.log("rightArrowmodelClick", event.target);
  var ppel = document.getElementsByClassName(secondtemporaryClass);
  ppel[0].innerHTML = "";
  secondtemporaryClass = "";

  console.log("ppel", ppel[0].children[0]);

  var newDivRMain = document.createElement("div");
  newDivRMain.style.display = "flex";
  var newDivRimage = document.createElement("div");
  var newRAimg = document.createElement("img");
  newRAimg.src = `./assets/images/rightArrows/${event.target.id}.png`;
  newDivRimage.appendChild(newRAimg);
  if (
    event.target.id == "ra1" ||
    event.target.id == "ra2" ||
    event.target.id == "ra3" ||
    event.target.id == "ra4" ||
    event.target.id == "ra5"
  ) {
    var newDivRimageforexpandone = document.createElement("div");
    var expandOneImage = document.createElement("img");
    expandOneImage.src = `./assets/images/greePlus.png`;
    expandOneImage.className = "superb";
    expandOneImage.style.width = "20px";
    expandOneImage.style.height = "20px";
    expandOneImage.style.cursor = "pointer";
    expandOneImage.style.cursor = "pointer";
    expandOneImage.addEventListener("mouseover", (event) => {
      console.log(
        "OVER",
        event.target.parentNode.parentNode.parentNode.parentNode
      ),
        (currntpusherDiv = `${event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className}`);
    });
    expandOneImage.addEventListener("click", (event) =>
      openModalONE(event)
    );
    newDivRimageforexpandone.appendChild(expandOneImage);
    newDivRMain.appendChild(newDivRimage);
    newDivRMain.appendChild(newDivRimageforexpandone);
    alreadyDivsRigth[
      alreadyDivsRigth.length - 1
    ].rightArroe = `./assets/images/rightArrows/${event.target.id}.png`;
    console.log("alreadyDivsRigth", alreadyDivsRigth);

    console.log(
      "alreadyDivsRigth[alreadyDivsRigth.length - 1].rightArroe",
      alreadyDivsRigth.length
    );
  } else if (
    event.target.id == "ra6" ||
    event.target.id == "ra7" ||
    event.target.id == "ra8" ||
    event.target.id == "ra9" ||
    event.target.id == "ra10"
  ) {
    doubleBox = true;

    var newDivRimageforexpandone = document.createElement("div");
    newDivRimageforexpandone.style.position = "relative";

    var expandOneImage = document.createElement("img");
    var expandtwoImage = document.createElement("img");

    expandOneImage.src = `./assets/images/greePlus.png`;
    expandOneImage.style.width = "20px";
    expandOneImage.style.height = "20px";
    expandOneImage.style.cursor = "pointer";
    expandOneImage.style.position = "absolute";
    expandOneImage.style.top = "0px";
    expandOneImage.addEventListener("click", (event) =>
      openModalONE(event)
    );
    expandtwoImage.src = `./assets/images/greePlus.png`;
    expandtwoImage.style.width = "20px";
    expandtwoImage.style.height = "20px";
    expandtwoImage.style.cursor = "pointer";
    expandtwoImage.style.position = "absolute";
    expandtwoImage.style.bottom = "0px";
    expandtwoImage.addEventListener("click", (event) =>
      openModalONE(event)
    );
    newDivRimageforexpandone.appendChild(expandOneImage);
    newDivRimageforexpandone.appendChild(expandtwoImage);
    newDivRMain.appendChild(newDivRimage);
    newDivRMain.appendChild(newDivRimageforexpandone);
    alreadyDivsRigth[
      alreadyDivsRigth.length - 1
    ].rightArroe = `./assets/images/rightArrows/${event.target.id}.png`;
  }

  ppel[0].appendChild(newDivRMain);

  console.log("secondtemporaryClass", secondtemporaryClass);
}
function addAnoSection() {
  noofFloos += 1;
  var oop = document.getElementsByClassName("subOne")[0];
  console.log("oop", oop);
  var newd = document.createElement("div");
  newd.className = "subOneKidOne";
  var newdsubOne = document.createElement("div");
  newdsubOne.className = "oneChildOne";
  newdsubOne.innerHTML = `<input type="text" placeholder="Enter Something"  style="font-size: 24px; font-weight: 700; border : none;outline : none"   />`;
  var newdsubTwo = document.createElement("div");
  newdsubTwo.className = "oneChildTwo";
  newdsubTwo.innerHTML = ` <div class="mainforphoto${noofFloos}s" style="position: relative">
      <div class="firstPlus">
        <img
          src="./assets/images/greePlus.png"
          width="20px"
          height="20px"
          onclick="openModalONE(event)"
          style="cursor: pointer"
          alt=""
        />
      </div>
     
    </div>`;
  var newdsubThree = document.createElement("div");
  newdsubThree.className = "btnz";
  var bbn = document.createElement("button");
  bbn.innerHTML = "ADD";
  bbn.addEventListener("click", () => addAnoSection());
  newdsubThree.appendChild(bbn);
  newd.appendChild(newdsubOne);
  newd.appendChild(newdsubTwo);
  newd.appendChild(newdsubThree);
  oop.appendChild(newd);
}