$(".Designer").click(function () {
  $(".designer-button").addClass("active");
  $(".logic-button").removeClass("active");
});
$(".Preview").click(function () {
  $(".designer-button").removeClass("active");
  $(".logic-button").removeClass("active");
});
$(".Logic").click(function () {
  $(".designer-button").removeClass("active");
  $(".logic-button").addClass("active");
});
$(".shareSurvey").click(function () {
  $(".designer-button").removeClass("active");
  $(".logic-button").removeClass("active");
});
$(document).on('click', '.cancel-radio-button', function () {
  $(this).parents('.radio-button-group').remove();
});
$(document).on('click', '.cancel-rating-scale', function () {
  $(this).parents('.rating-scale-div').remove();
});
$(document).on('click', '.cancel-checkboxes', function () {
  $(this).parents('.checkboxes-div').remove();
});
$(document).on('click', '.cancel-dropdown', function () {
  $(this).parents('.dropdown-div').remove();
});
$(document).on('click', '.cancel-boolean', function () {
  $(this).parents('.boolean-div').remove();
});
$(document).on('click', '.cancel-singleLineInput', function () {
  $(this).parents('.singleLineInput').remove();
});
$(document).on('click', '.cancel-longText', function () {
  $(this).parents('.longText').remove();
});
$(document).on('click', '.cancel-multipleTextboxes', function () {
  $(this).parents('.multipleTextboxes').remove();
});
$(document).on('click', '.cancel-fileUpload', function () {
  $(this).parents('.fileUpload').remove();
});
$(document).on('click', '.cancel-imagePicker', function () {
  $(this).parents('.imagePicker').remove();
});
$(document).on('click', '.cancel-signature', function () {
  $(this).parents('.signature-div').remove();
});
$(document).on('click', '.cancel-expression', function () {
  $(this).parents('.expression-div').remove();
});
$(document).on('click', '.cancel-HTML', function () {
  $(this).parents('.HTML-div').remove();
});
$(document).on('click', '.cancel-singleSelectMatrix', function () {
  $(this).parents('.singleSelectMatrix').remove();
});
$(document).on('click', '.cancel-dynamicMatrix', function () {
  $(this).parents('.dynamicMatrix').remove();
});
$(document).on('click', '.cancel-multiSelectMatrix', function () {
  $(this).parents('.multiSelectMatrix').remove();
});
$(document).on('click', '.cancel-image', function () {
  $(this).parents('.image-div').remove();
});
$(document).on('click', '.cancel-Ranking', function () {
  $(this).parents('.Ranking').remove();
});



const EVENTS = {
  TOUCH_MOVE: "touchmove",
  MOUSE_MOVE: "mousemove",
  MOUSE_UP: "mouseup",
  MOUSE_DOWN: "mousedown",
  TOUCH_END: "touchend",
  TOUCH_START: "touchstart",
  TOUCH_CANCEL: "touchcancel",
  DRAG_START: "dragstart",
  DRAG_END: "dragend"
};
const DIRECTIONS = {
  LEFT: "left",
  RIGHT: "right",
  UP: "up",
  DOWN: "down",
  TOP: "top",
  BOTTOM: "bottom",
  AFTEREND: "afterend",
  BEFOREBEGIN: "beforebegin"
};
const CLASS_NAMES = {
  guideLine: "__sortable_draggable-guide-line"
};
const containerStack = [];

function detectLeftButton(evt) {
  evt = evt || window.event;
  if ("buttons" in evt) {
    return evt.buttons === 1;
  }
  let button = evt.which || evt.button;
  return button === 1;
}
const getParent = (el) =>
  el && el.parentNode === document.body ? null : el && el.parentNode;

function getImmediateChild(dropTarget, target) {
  let immediate = target;
  // eslint-disable-next-line max-len
  while (
    immediate &&
    immediate !== dropTarget &&
    immediate &&
    getParent(immediate) !== dropTarget
  ) {
    immediate = getParent(immediate);
  }
  if (immediate === document.body) {
    return null;
  }
  if (target === dropTarget) {
    return null;
  }
  return immediate;
}

function renderMirrorImage(dragEl, clientX, clientY) {
  if (!dragEl) {
    return;
  }
  let rect = dragEl.getBoundingClientRect();
  const _mirror = dragEl.cloneNode(true);
  _mirror.style.position = "fixed";
  _mirror.classList.add("mirror");
  _mirror.style.opacity = 0.5;
  _mirror.style.width = `${rect.width}px`;
  _mirror.style.height = `${rect.height}px`;
  _mirror.style.top = `${rect.top}px`;
  _mirror.style.left = `${rect.left}px`;
  _mirror.__offsetX = clientX - rect.left;
  _mirror.__offsetY = clientY - rect.top;
  // _mirror.style.transform = `translate(${Math.abs(clientX - rect.left - rect.width/2)}px, -${Math.abs(clientY - rect.top - rect.height / 2)}px)`;
  document.body.appendChild(_mirror);
  return _mirror;
}

class Dragoned {
  constructor(container, options = {}) {
    if (typeof container === "string") {
      container = document.querySelector(container);
    }
    if (!container || !container instanceof HTMLElement) {
      return new Error(
        "Dragoned: container must be a string or an HTMLElement"
      );
    }
    this.createGuideLine();
    this.onMouseUp = this.onMouseUp.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.container = container;
    this.moveY = 0;
    this.moveX = 0;
    this.mouseUp = false;
    this.optionsInit(options);
    containerStack.push(this);
    this.init();
  }
  optionsInit(options) {
    this.options = {
      draggable: options.draggable,
      handle: options.handle,
      delay: typeof options.delay === "number" ? options.delay : 0,
      preventDefault: options.preventDefault,
      direction: options.direction,
      onStart: options.onStart,
      onMove: options.onMove,
      onClone: options.onClone,
      onEnd: options.onEnd,
      body: options.body || document.body,
      clone: options.clone,
      group: options.group,
      sort: options.sort
    };
  }

  createGuideLine() {
    this.guideLine = document.createElement("div");
    this.guideLine.className = CLASS_NAMES.guideLine;
    this.guideLine.style.position = "absolute";
    this.guideLine.style.borderRadius = `.5rem`;
    this.guideLine.style.backgroundColor = "rgb(70, 25, 194)";
  }

  init() {
    this.bindDrag(this.container);
  }
  dragEnd() {
    this.mouseUp = true;
    if (this.mirror) {
      this.mirror.remove();
      this.mirror = null;
    }

    this.dragEl.style.opacity = 1;
    this.guideLine.remove();
    this.guideLine.style.left = `${-9999}px`;
    this.guideLine.style.top = `${-9999}px`;
    document.removeEventListener(EVENTS.MOUSE_MOVE, this.onMouseMove);
    document.removeEventListener(EVENTS.TOUCH_MOVE, this.onMouseMove, {
      passive: false
    });
    document.removeEventListener(EVENTS.MOUSE_UP, this.dragEnd);
    document.removeEventListener(EVENTS.TOUCH_END, this.dragEnd);
    if (this.direction && this.dropEl) {
      const cloneEl =
        this.options.clone === true ? this.dragEl.cloneNode(true) : this.dragEl;
      if (
        this.options.clone === true &&
        typeof this.options.onClone === "function"
      ) {
        this.options.onClone({
          from: this.container,
          oldIndex: this.oldIndex,
          clone: this.cloneEl
        });
      }
      this.dropEl.insertAdjacentElement(this.direction, cloneEl);
      const to = this.dropEl.Sortable__container__;
      const from = this.container;
      this.newIndex = Array.prototype.indexOf.call(to.children, cloneEl);

      delete this.dragEl.Sortable__container__;
      delete this.dragEl.Sortable__container__;

      if (typeof this.options.onEnd === "function") {
        this.options.onEnd({
          item: cloneEl,
          to,
          from,
          newIndex: this.newIndex,
          oldIndex: this.oldIndex,
          direction: this.direction
        });
      }
    }
  }
  onMouseMove(event) {
    event.preventDefault();
    if (event.type === EVENTS.MOUSE_MOVE && !detectLeftButton(event)) {
      this.guideLine.remove();
      document.removeEventListener(EVENTS.MOUSE_MOVE, this.onMouseMove);
    }
    const clientY =
      event.type === EVENTS.TOUCH_MOVE
        ? event.touches[0].clientY
        : event.clientY;
    const clientX =
      event.type === EVENTS.TOUCH_MOVE
        ? event.touches[0].clientX
        : event.clientX;
    const pageY =
      event.type === EVENTS.TOUCH_MOVE ? event.touches[0].pageY : event.pageY;
    if (clientY < this.moveY) {
      this.mouseDirection = DIRECTIONS.TOP;
    } else if (clientY > this.moveY) {
      this.mouseDirection = DIRECTIONS.BOTTOM;
    }
    this.moveY = clientY;
    this.moveX = clientX;
    function getScrollParent(node) {
      if (node == null) {
        return null;
      }

      if (node.scrollHeight > node.clientHeight) {
        return node;
      } else {
        return getScrollParent(node.parentNode);
      }
    }

    const scroller = (_target) => {
      let scrollableEl = getScrollParent(_target) || document.body;
      console.log(scrollableEl);
      const scrollUp = () => scrollableEl.scroll(0, scrollableEl.scrollTop - 1);
      const scrollBottom = () =>
        scrollableEl.scroll(0, scrollableEl.scrollTop + 1);
      if (
        this.mirror &&
        this.moveY < 100 &&
        this.mouseDirection === DIRECTIONS.TOP
      ) {
        scrollUp();
        setTimeout(() => {
          scroller();
        }, 100);
      } else if (
        this.mirror &&
        window.innerHeight - this.moveY < 100 &&
        this.mouseDirection === DIRECTIONS.BOTTOM
      ) {
        scrollBottom();
        setTimeout(() => {
          scroller();
        }, 100);
      }
    };

    if (this.mirror && this.dragEl) {
      this.mirror.style.left = `${clientX - document.body.offsetLeft - this.mirror.__offsetX
        }px`;
      this.mirror.style.top = `${clientY - document.body.offsetTop - this.mirror.__offsetY
        }px`;
      this.mirror.style.display = "none";
    }
    const _target = document.elementFromPoint(clientX, clientY);
    scroller(_target);
    // here
    let dropEl;
    let dropInstance;
    for (let index = 0; index < containerStack.length; index++) {
      const current = containerStack[index];
      const immediate = getImmediateChild(current.container, _target);
      if (immediate) {
        dropInstance = current;
        dropEl = immediate;
        dropEl.Sortable__container__ = current.container;
        break;
      }
    }
    if (this.mirror) {
      this.mirror.style.display = "block";
    }
    if (dropEl && dropEl !== this.dragEl) {
      if (dropInstance.options.sort === false) {
        return;
      }
      if (typeof this.options.onMove === "function") {
        this.options.onMove({
          item: this.dragEl,
          to: dropInstance.container,
          from: this.container,
          newIndex: Array.prototype.indexOf.call(
            dropInstance.container.children,
            dropEl
          ),
          oldIndex: Array.prototype.indexOf.call(
            this.container.children,
            this.dragEl
          )
        });
      }
      this.dragEl.style.opacity = 0.2;
      this.guideLine.style.opacity = 1;
      const rect = dropEl.getBoundingClientRect();
      this.guideLine.style.width = `${rect.width}px`;
      this.guideLine.style.height = "4px";
      // is mouse is on the top of the element
      if (
        rect.bottom > this.moveY &&
        rect.bottom - rect.height / 2 < this.moveY
      ) {
        this.direction = DIRECTIONS.AFTEREND;
        this.dropEl = dropEl;
        this.dragEl = this.dragEl;
        this.guideLine.style.top = `${pageY - pageY + window.pageYOffset + rect.top + rect.height
          }px`;
        this.guideLine.style.left = `${rect.left}px`;
      } else if (
        rect.top < this.moveY &&
        rect.top + rect.height / 2 > this.moveY
      ) {
        this.dropEl = dropEl;
        this.direction = DIRECTIONS.BEFOREBEGIN;
        this.guideLine.style.top = `${pageY - pageY + window.pageYOffset + rect.top
          }px`;
        this.guideLine.style.left = `${rect.left}px`;
      }
    }
  }
  onMouseUp() {
    this.mouseUp = true;
    clearTimeout(this.pressDelay);
    document.removeEventListener(EVENTS.MOUSE_UP, this.onMouseUp);
  }
  dragStart(event) {
    this.mouseUp = false;
    if (event.type === EVENTS.MOUSE_DOWN && !detectLeftButton(event)) {
      return;
    }
    this.can = true;
    // continue if user clicked for 1 second
    const start = () => {
      document.body.appendChild(this.guideLine);
      const clientY =
        event.type === EVENTS.TOUCH_START
          ? event.touches[0].clientY
          : event.clientY;
      const clientX =
        event.type === EVENTS.TOUCH_START
          ? event.touches[0].clientX
          : event.clientX;
      const target = event.target;
      let draggableEl;
      let handleEl;
      if (this.options.draggable) {
        draggableEl = target.closest(this.options.draggable);
        if (!draggableEl) {
          return;
        }
      }
      if (this.options.handle) {
        handleEl = target.closest(this.options.handle);
        if (!handleEl) {
          return;
        }
      }
      const dragEl = getImmediateChild(this.container, target);
      if (!dragEl) {
        return;
      }
      if (!this.mirror) {
        this.mirror = renderMirrorImage(dragEl, clientX, clientY);
      }
      if (typeof this.options.onStart === "function") {
        this.options.onStart({
          from: this.container,
          oldIndex: this.oldIndex,
          item: dragEl
        });
      }
      this.dragEl = dragEl;
      this.dragEl.Sortable__container__ = this.container;
      this.oldIndex = Array.prototype.indexOf.call(
        this.container.children,
        dragEl
      );
      document.addEventListener(EVENTS.MOUSE_MOVE, this.onMouseMove);
      document.addEventListener(EVENTS.TOUCH_MOVE, this.onMouseMove, {
        passive: false
      });
      document.addEventListener(EVENTS.MOUSE_UP, this.dragEnd);
      document.addEventListener(EVENTS.TOUCH_END, this.dragEnd);
    };
    document.addEventListener(EVENTS.MOUSE_UP, this.onMouseUp);
    this.pressDelay = setTimeout(() => {
      if (this.mouseUp === false) {
        start();
      }
    }, this.options.delay);
  }

  bindDrag(container) {
    container.style.userSelect = "none";
    container.addEventListener(EVENTS.MOUSE_DOWN, this.dragStart);
    container.addEventListener(EVENTS.TOUCH_START, this.dragStart);
  }
  destroy() {
    const index = containerStack.findIndex((c) => c === this);
    if (index !== -1) {
      containerStack.splice(index, 1);
    }
    this.container.removeEventListener(EVENTS.MOUSE_DOWN, this.dragStart);
    this.container.removeEventListener(EVENTS.TOUCH_START, this.dragStart);
    if (this.mirror) {
      this.mirror.remove();
    }
    if (this.guideLine) {
      this.guideLine.remove();
    }
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  (function () {
    const container = new Dragoned(document.querySelector("#page"), {
      // draggable:".item",
      // handle:".handle",
      group: "blocks-group",
      delay: 100,
      onEnd: (data) => { }
    });
    //=========Initialize start here=========//
    const draggable = new Dragoned(document.querySelector("#draggable"), {
      // draggable:".item",
      // handle:".handle",
      sort: false,
      clone: true,
      group: "blocks-group",
      onEnd: (data) => {
        const { item } = data;
        const type = item.dataset.type;
        switch (type) {
          case "radioButtonGroup":
            item.innerHTML = `<div class="row mt-3 radio-button-group"><div class="col-12 mx-auto"><div class="radio-button"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" placeholder="Question" class="d-block w-100 border-0 outline-none rounded py-2"></label><div id="radio"><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked><label class="form-check-label" for="flexRadioDefault1"><input type="text" name="name" id="name" placeholder="Item 1" class="d-block w-100 border-0 outline-none"></label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"><label class="form-check-label" for="flexRadioDefault2"><input type="text" name="name" id="name" placeholder="Item 2" class="d-block w-100 border-0 outline-none"></label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"><input type="text" name="name" id="name" placeholder="Item 3" class="d-block w-100 border-0 outline-none"></label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"><label class="form-check-label" for="flexRadioDefault2">
            <input type="text" name="name" id="name" placeholder="Item 4" class="d-block w-100 border-0 outline-none"></label></div></div><a class="cursor-pointer text-decoration-none text-fill fw-600 mt-3 ms-4 d-block" onclick="addRadio()">Add More</a><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-radio-button">Cancel</button></div></div></div></div>`;
            break;
          case "ratingScale":
            item.innerHTML = '<div class="row mt-4 rating-scale-div"><div class="col-12 mx-auto"><div class="rating-scale"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" placeholder="Question" class="d-block w-100 border-0 outline-none rounded py-2"></label><div class="rating" id="rating"><p><input type="text" name="name" id="name" placeholder="1" class="d-block w-100 border-0 outline-none rounded py-2 text-center bg-transparent"></p><p><input type="text" name="name" id="name" placeholder="2" class="d-block w-100 border-0 outline-none rounded py-2 text-center bg-transparent"></p><p><input type="text" name="name" id="name" placeholder="3" class="d-block w-100 border-0 outline-none rounded py-2 text-center bg-transparent"></p><p><input type="text" name="name" id="name" placeholder="4" class="d-block w-100 border-0 outline-none rounded py-2 text-center bg-transparent"></p><p><input type="text" name="name" id="name" placeholder="5" class="d-block w-100 border-0 outline-none rounded py-2 text-center bg-transparent"></p></div><a class="cursor-pointer text-decoration-none text-fill fw-600 mt-3 ms-4 d-block" onclick="addRating()">Add More</a><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-rating-scale">Cancel</button></div></div></div></div>';
            break;
          case "checkboxes":
            item.innerHTML = '<div class="row mt-4 checkboxes-div"><div class="col-12 mx-auto"><div class="checkboxes"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" placeholder="Question" class="d-block w-100 border-0 outline-none rounded py-2"></label><div id="checkbox"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked><label class="form-check-label" for="flexCheckDefault"><input type="text" name="name" id="name" placeholder="Item 1" class="d-block w-100 border-0 outline-none rounded py-2"></label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"><label class="form-check-label" for="flexCheckChecked"><input type="text" name="name" id="name" placeholder="Item 2" class="d-block w-100 border-0 outline-none rounded py-2"></label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"><input type="text" name="name" id="name" placeholder="Item 3" class="d-block w-100 border-0 outline-none rounded py-2"></label></div></div><a class="cursor-pointer text-decoration-none text-fill fw-600 mt-3 ms-4 d-block" onclick="addCheckbox()">Add More</a><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-checkboxes">Cancel</button></div></div></div></div>';
            break;
          case "dropdown":
            item.innerHTML = '<div class="row mt-4 dropdown-div"><div class="col-12 mx-auto"><div class="dropdown-surveys"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" placeholder="Question" class="d-block w-100 border-0 outline-none rounded py-2"></label><select name="Role" id="Role"class="select-dropdown"></select><div class="select-item" id="selectItem"><input type="text" name="name" id="name" placeholder="Item 1" class="d-block w-100 border-0 outline-none rounded py-2"><input type="text" name="name" id="name" placeholder="Item 2" class="d-block w-100 border-0 outline-none rounded py-2"><input type="text" name="name" id="name" placeholder="Item 3" class="d-block w-100 border-0 outline-none rounded py-2"><input type="text" name="name" id="name" placeholder="Item 4" class="d-block w-100 border-0 outline-none rounded py-2"></div><a class="cursor-pointer text-decoration-none text-fill fw-600 mt-3 ms-4 d-block" onclick="addSelectItem()">Add More</a><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button"id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-dropdown">Cancel</button></div></div></div></div>';
            break;
          case "boolean":
            item.innerHTML = '<div class="row mt-4 boolean-div"><div class="col-12 mx-auto"><div class="boolean"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" placeholder="Question" class="d-block w-100 border-0 outline-none rounded py-2"></label><ul class="head-btn"><li class="p-0 slider-btn d-flex"><a href="#" type="button" class="btn ouline-white tab-click"><input type="text" name="name" id="name" placeholder="Yes" class="d-block w-50px border-0 outline-none rounded py-1"></a><a href="#" type="button" class="btn ouline-white tab-click border-none"><input type="text" name="name" id="name" placeholder="No" class="d-block w-50px border-0 outline-none rounded py-1"></a></li></ul><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-boolean">Cancel</button></div></div></div></div>';
            break;
          case "singleLineInput":
            item.innerHTML = '<div class="row mt-4 singleLineInput"><div class="col-12 mx-auto"><div class="single-line-input"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2 line-input"><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-singleLineInput">Cancel</button></div></div></div></div>';
            break;
          case "longText":
            item.innerHTML = '<div class="row mt-4 longText"><div class="col-12 mx-auto"><div class="long-text"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><textarea name="message" id="message" cols="20" rows="5" class="d-block w-100 border-0 outline-none rounded py-2 long-textarea"></textarea><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-longText">Cancel</button></div></div></div></div>';
            break;
          case "multipleTextboxes":
            item.innerHTML = '<div class="row mt-4 multipleTextboxes"><div class="col-12 mx-auto"><div class="single-line-input"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2 line-input"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2 line-input"><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-multipleTextboxes">Cancel</button></div></div></div></div>';
            break;
          case "fileUpload":
            item.innerHTML = '<div class="row mt-4 fileUpload"><div class="col-12 mx-auto"><div class="upload-file"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question m-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><div class="upload-box"><div class="form-group"><label for="fileField" class="attachment"><div class="row btn-file"><div class="btn-file__preview"></div><div class="btn-file__actions"><div class="btn-file__actions__item col-xs-12 text-center"><div class="btn-file__actions__item--shadow"><img src="image.png" alt="Drop a File here or click the a box to load the file" class="upload-image"></div></div></div></div><input name="file" type="file" id="fileField"></label></div></div><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center mt-3"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-fileUpload">Cancel</button></div></div></div></div>';
            break;
          case "imagePicker":
            item.innerHTML = '<div class="row mt-4 imagePicker"><div class="col-12 mx-auto"><div class="image-picker"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><div id="imageContainer"></div><input type="file" id="imagePicker" style="display: none;" multiple><button onclick="openImagePicker()">Add Image</button><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-imagePicker">Cancel</button></div></div></div></div>';
            break;
          case "signature":
            item.innerHTML = '<div class="row mt-4 signature-div"><div class="col-12 mx-auto"><div class="signature"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><section class="signature-component"><canvas id="signature-pad" width="400" height="200"></canvas><div><button id="save" class="d-none"></button><button id="clear"><i class="icon icon-delete"></i></button></div></section><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-signature">Cancel</button></div></div></div></div>';
            break;
          case "expression":
            item.innerHTML = '<div class="row mt-4 expression-div"><div class="col-12 mx-auto"><div class="expression"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-expression">Cancel</button></div></div></div></div>';
            break;
          case "HTML":
            item.innerHTML = '<div class="row mt-4 HTML-div"><div class="col-12 mx-auto"><div class="expression"><i class="icon icon-drag-drop-icon mx-auto"></i><textarea name="html" id="html" cols="30" rows="10" class="border border-2 w-100 p-3 rounded" placeholder="HTML content will be here."></textarea><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-HTML">Cancel</button></div></div></div></div>';
            break;
          case "singleSelectMatrix":
            item.innerHTML = '<div class="row mt-4 singleSelectMatrix"><div class="col-12 mx-auto"><div class="single-select"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><table class="table"><thead><tr><th scope="col" class="border-0"></th><th scope="col" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Column 1"></th><th scope="col" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Column 2"></th><th scope="col" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Column 3"></th></tr></thead><tbody><tr><th scope="row" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Row 1"></th><td class="border-0"><div class="form-check"><input class="form-check-input mx-auto" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked=""></div></td><td class="border-0"><div class="form-check"><input class="form-check-input mx-auto" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked=""></div></td><td class="border-0"><div class="form-check"><input class="form-check-input mx-auto" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked=""></div></td></tr><tr><th class="border-0" scope="row"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Row 2"></th><td class="border-0"><div class="form-check"><input class="form-check-input mx-auto" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked=""></div></td><td class="border-0"><div class="form-check"><input class="form-check-input mx-auto" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked=""></div></td><td class="border-0"><div class="form-check"><input class="form-check-input mx-auto" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked=""></div></td></tr></tbody></table><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white cancel-singleSelectMatrix">Cancel</button></div></div></div></div>';
            break;
          case "dynamicMatrix":
            item.innerHTML = '<div class="row mt-4 dynamicMatrix"><div class="col-12 mx-auto"><div class="dynamic-matrix"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><table class="table"><thead><tr><th scope="col" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Column 1"></th><th scope="col" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Column 2"></th><th scope="col" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Column 3"></th></tr></thead><tbody id="addTd"><tr class="addMoreTd"><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td></tr><tr class="addMoreTd"><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td></tr></tbody></table><a class="cursor-pointer text-decoration-none text-fill fw-600">Add More</a><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button"id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-dynamicMatrix">Cancel</button></div></div></div></div>';
            break;
          case "multiSelectMatrix":
            item.innerHTML = '<div class="row mt-4 multiSelectMatrix"><div class="col-12 mx-auto"><div class="dynamic-matrix"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><table class="table"><thead><tr><th scope="row" class="border-0"></th><th scope="col" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Column 1"></th><th scope="col" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Column 2"></th><th scope="col" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Column 3"></th></tr></thead><tbody id="addTd"><tr class="addMoreTd"><th scope="col" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Row 1"></th><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td></tr><tr class="addMoreTd"><th scope="col" class="border-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Row 1"></th><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td><td class="border-0"><select name="Role" id="Role" class="select-dropdown"></select><div class="hover-icon" data-bs-toggle="modal" data-bs-target="#addMoreItemModal"><i class="icon icon-edit"></i></div></td></tr></tbody></table><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-multiSelectMatrix">Cancel</button></div></div></div></div>';
            break;
          case "Image":
            item.innerHTML = '<div class="row mt-4 image-div"><div class="col-12 mx-auto"><div class="image"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><div class="upload-file"><div class="file-upload"><figure><img id="chosen-image"><figcaption id="file-name"></figcaption></figure><input type="file" id="upload-button" accept="image/*"><label for="upload-button"><img src="./assets/images/greePlus.png" alt=""></label></div></div></div><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-image">Cancel</button></div></div></div>';
            break;
          case "Ranking":
            item.innerHTML = '<div class="row mt-4 Ranking"><div class="col-12 mx-auto"><div class="raking"><i class="icon icon-drag-drop-icon mx-auto"></i><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><ul id="rank-list"><li class="rank-item" draggable="true" ondragstart="dragStart(event)"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Item"></li><li class="rank-item" draggable="true" ondragstart="dragStart(event)"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Item"></li><li class="rank-item" draggable="true" ondragstart="dragStart(event)"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Item"></li><li class="rank-item" draggable="true" ondragstart="dragStart(event)"><input type="text" name="name id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Item"></li><li class="rank-item" draggable="true" ondragstart="dragStart(event)"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Item"></li></ul><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><div class="dropdown select-dropdown"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Journey</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div><div class="dropdown select-dropdown ms-4"><button class="btn btn-secondary dropdown-toggle pe-5 bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select Stage</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Action</a></li><li><a class="dropdown-item" href="#">Another action</a></li><li><a class="dropdown-item" href="#">Something else here</a></li></ul></div></div><button type="button" class="btn ouline-white border-0 cancel-Ranking">Cancel</button></div></div></div></div>';
            break;
          case "addPages":
            item.innerHTML = '<div class="mb-3"><input type="text" name="name" id="name" placeholder="Page Title" class="d-block w-100 border-0 outline-none input-dark bg-transparent fs-5 fw-600 rounded py-2"><input type="text" name="name" id="name" placeholder="Description" class="d-block w-100 border-0 outline-none input-light bg-transparent rounded py-2"></div>';
            break;
          default:
            break;
        }
      }
    });
  })();
});


$('.tab-click-1').click(function () {
  $('.tab-click-1').removeClass("active");
  $(this).addClass("active");
});

$('.tab-click-2').click(function () {
  $('.tab-click-2').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-3').click(function () {
  $('.tab-click-3').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-4').click(function () {
  $('.tab-click-4').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-5').click(function () {
  $('.tab-click-5').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-6').click(function () {
  $('.tab-click-6').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-7').click(function () {
  $('.tab-click-7').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-8').click(function () {
  $('.tab-click-8').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-9').click(function () {
  $('.tab-click-9').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-10').click(function () {
  $('.tab-click-10').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-11').click(function () {
  $('.tab-click-11').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-12').click(function () {
  $('.tab-click-12').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-13').click(function () {
  $('.tab-click-13').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-14').click(function () {
  $('.tab-click-14').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-15').click(function () {
  $('.tab-click-15').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-16').click(function () {
  $('.tab-click-16').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-17').click(function () {
  $('.tab-click-17').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-18').click(function () {
  $('.tab-click-18').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-19').click(function () {
  $('.tab-click-19').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-20').click(function () {
  $('.tab-click-20').removeClass("active");
  $(this).addClass("active");
});
$('.tab-click-21').click(function () {
  $('.tab-click-21').removeClass("active");
  $(this).addClass("active");
});






$(".survey-general-button").click(function () {
  $(".general-content").toggleClass("d-block")
});
$(".survey-general-button").click(function () {
  $(".survey-general-button").toggleClass("active")
});
$(".survey-logo-title-button").click(function () {
  $(".logo-title-content").toggleClass("d-block")
});
$(".survey-logo-title-button").click(function () {
  $(".survey-logo-title-button").toggleClass("active")
});
$(".survey-navigation-button").click(function () {
  $(".navigation-content").toggleClass("d-block")
});
$(".survey-navigation-button").click(function () {
  $(".survey-navigation-button").toggleClass("active")
});
$(".survey-question-button").click(function () {
  $(".question-content").toggleClass("d-block")
});
$(".survey-question-button").click(function () {
  $(".survey-question-button").toggleClass("active")
});
$(".survey-data-button").click(function () {
  $(".data-content").toggleClass("d-block")
});
$(".survey-data-button").click(function () {
  $(".survey-data-button").toggleClass("active")
});
$(".survey-validation-button").click(function () {
  $(".validation-content").toggleClass("d-block")
});
$(".survey-validation-button").click(function () {
  $(".survey-validation-button").toggleClass("active")
});
$(".survey-complete-button").click(function () {
  $(".complete-content").toggleClass("d-block")
});
$(".survey-complete-button").click(function () {
  $(".survey-complete-button").toggleClass("active")
});
$(".survey-timer-button").click(function () {
  $(".timer-content").toggleClass("d-block")
});
$(".survey-timer-button").click(function () {
  $(".survey-timer-button").toggleClass("active")
});
$(".radio-general-button").click(function () {
  $(".radio-content").toggleClass("d-block")
});
$(".radio-general-button").click(function () {
  $(".radio-general-button").toggleClass("active")
});
function addRadioItem() {
  $('#choicesItem').append(`<div class="d-flex align-items-center choices-item mb-3"><input type="text" name="name" id="name" placeholder="Item" class="d-block w-100 border border-2 rounded px-4 py-2"><i class="icon icon-delete w-25 bg-cover delete-input cursor-pointer"></i></div>`);
}
$(document).on('click', '.delete-input', function () {
  $(this).parents('.choices-item').remove();
});
$(".radio-choices-button").click(function () {
  $(".radio-choices-content").toggleClass("d-block")
});
$(".radio-choices-button").click(function () {
  $(".radio-choices-button").toggleClass("active")
});
$(".radio-choices-from-button").click(function () {
  $(".radio-choices-from-content").toggleClass("d-block")
});
$(".radio-choices-from-button").click(function () {
  $(".radio-choices-from-button").toggleClass("active")
});
$(".radio-layout-button").click(function () {
  $(".radio-layout-content").toggleClass("d-block")
});
$(".radio-layout-button").click(function () {
  $(".radio-layout-button").toggleClass("active")
});
$(".radio-data-button").click(function () {
  $(".radio-data-content").toggleClass("d-block")
});
$(".radio-data-button").click(function () {
  $(".radio-data-button").toggleClass("active")
});
function addExpression() {
  $('#expression').append(`<div class="validation-expression mt-4 border">
  <div class="d-flex align-items-center justify-content-between bg-white">
    <input type="text" name="name" id="name" placeholder="Expression" class="d-block w-70 border-0 rounded px-4 py-2">
    <i class="icon icon-delete cursor-pointer w-25 bg-cover delete-box"></i>
  </div>
  <div class="p-3">
    <label for="name" class="mt-3 mb-2">"Required" error message</label>
    <input type="text" name="name" id="name" placeholder="Expression" class="d-block w-100 border-0 rounded px-4 py-2">
    <label for="name" class="mt-3 mb-2">"Required" error message</label>
    <textarea name="message" id="message" cols="30" rows="3" class="d-block w-100 border border-2 rounded px-4 py-2"></textarea>
  </div>
</div>`);
}
$(document).on('click', '.delete-box', function () {
  $(this).parents('.validation-expression').remove();
});
$(".radio-validation-button").click(function () {
  $(".radio-validation-content").toggleClass("d-block")
});
$(".radio-validation-button").click(function () {
  $(".radio-validation-button").toggleClass("active")
});
$(".rating-general-button").click(function () {
  $(".rating-content").toggleClass("d-block")
});
$(".rating-general-button").click(function () {
  $(".rating-general-button").toggleClass("active")
});
$(".rating-values-button").click(function () {
  $(".rating-value-content").toggleClass("d-block")
});
$(".rating-values-button").click(function () {
  $(".rating-values-button").toggleClass("active")
});
$(".rating-layout-button").click(function () {
  $(".rating-layout-content").toggleClass("d-block")
});
$(".rating-layout-button").click(function () {
  $(".rating-layout-button").toggleClass("active")
});
$(".rating-data-button").click(function () {
  $(".rating-data-content").toggleClass("d-block")
});
$(".rating-data-button").click(function () {
  $(".rating-data-button").toggleClass("active")
});
$(".rating-validation-button").click(function () {
  $(".rating-validation-content").toggleClass("d-block")
});
$(".rating-validation-button").click(function () {
  $(".rating-validation-button").toggleClass("active")
});
function addratingExpression() {
  $('#ratingExpression').append(`<div class="validation-expression mt-4 border">
  <div class="d-flex align-items-center justify-content-between bg-white">
    <input type="text" name="name" id="name" placeholder="Expression" class="d-block w-70 border-0 rounded px-4 py-2">
    <i class="icon icon-delete cursor-pointer w-25 bg-cover delete-box"></i>
  </div>
  <div class="p-3">
    <label for="name" class="mt-3 mb-2">"Required" error message</label>
    <input type="text" name="name" id="name" placeholder="Expression" class="d-block w-100 border-0 rounded px-4 py-2">
    <label for="name" class="mt-3 mb-2">"Required" error message</label>
    <textarea name="message" id="message" cols="30" rows="3" class="d-block w-100 border border-2 rounded px-4 py-2"></textarea>
  </div>
</div>`);
}
$(document).on('click', '.delete-box', function () {
  $(this).parents('.validation-expression').remove();
});
function addcheckboxesExpression() {
  $('#checkboxesExpression').append(`<div class="validation-expression mt-4 border">
  <div class="d-flex align-items-center justify-content-between bg-white">
    <input type="text" name="name" id="name" placeholder="Expression" class="d-block w-70 border-0 rounded px-4 py-2">
    <i class="icon icon-delete cursor-pointer w-25 bg-cover delete-box"></i>
  </div>
  <div class="p-3">
    <label for="name" class="mt-3 mb-2">"Required" error message</label>
    <input type="text" name="name" id="name" placeholder="Expression" class="d-block w-100 border-0 rounded px-4 py-2">
    <label for="name" class="mt-3 mb-2">"Required" error message</label>
    <textarea name="message" id="message" cols="30" rows="3" class="d-block w-100 border border-2 rounded px-4 py-2"></textarea>
  </div>
</div>`);
}
$(document).on('click', '.delete-box', function () {
  $(this).parents('.validation-expression').remove();
});
$(".checkboxes-general-button").click(function () {
  $(".checkboxes-content").toggleClass("d-block")
});
$(".checkboxes-general-button").click(function () {
  $(".checkboxes-general-button").toggleClass("active")
});

$(".checkboxes-choices-button").click(function () {
  $(".checkboxes-choices-content").toggleClass("d-block")
});
$(".checkboxes-choices-button").click(function () {
  $(".checkboxes-choices-button").toggleClass("active")
});
$(".checkboxes-choices-from-button").click(function () {
  $(".checkboxes-choices-from-content").toggleClass("d-block")
});
$(".checkboxes-choices-from-button").click(function () {
  $(".checkboxes-choices-from-button").toggleClass("active")
});
$(".checkboxes-layout-button").click(function () {
  $(".checkboxes-layout-content").toggleClass("d-block")
});
$(".checkboxes-layout-button").click(function () {
  $(".checkboxes-layout-button").toggleClass("active")
});
$(".checkboxes-data-button").click(function () {
  $(".checkboxes-data-content").toggleClass("d-block")
});
$(".checkboxes-data-button").click(function () {
  $(".checkboxes-data-button").toggleClass("active")
});
$(".checkboxes-validation-button").click(function () {
  $(".checkboxes-validation-content").toggleClass("d-block")
});
$(".checkboxes-validation-button").click(function () {
  $(".checkboxes-validation-button").toggleClass("active")
});
function addCheckboxItem() {
  $('#checkChoicesItem').append(`<div class="d-flex align-items-center choices-item mb-3"><input type="text" name="name" id="name" placeholder="Item" class="d-block w-100 border border-2 rounded px-4 py-2"><i class="icon icon-delete w-25 bg-cover delete-input cursor-pointer"></i></div>`);
}
$(document).on('click', '.delete-input', function () {
  $(this).parents('.choices-item').remove();
});
$('.radioButtonGroup').on('click', function () {
  $('.general').removeClass('active');
  $('.radio-button-group').addClass('active');
});




function addNewRule() {
  $('#addNewRule').append(`<div class="add-role">
  <div>
    <div id="addNewRule">
      <div class="new-rule">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="fw-600">New rule</h4>
        </div>
        <div class="rule-select">
          <h6>If</h6>
          <div class="select-button">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Select...
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">question 1</a></li>
                <li><a class="dropdown-item" href="#">question 2</a></li>
                <li><a class="dropdown-item" href="#">question 3</a></li>
              </ul>
            </div>
          </div>
          <div class="equals-button">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Equals
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">question 1</a></li>
                <li><a class="dropdown-item" href="#">question 2</a></li>
                <li><a class="dropdown-item" href="#">question 3</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="rule-action">
          <h6>then</h6>
          <div class="action-button">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle select-action" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Select action...
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item show-button cursor-pointer">question 1</a></li>
                <li><a class="dropdown-item show-button cursor-pointer">question 2</a></li>
                <li><a class="dropdown-item show-button cursor-pointer">question 3</a></li>
              </ul>
            </div>
          </div>
          <div class="select-question">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Select...
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">question 1</a></li>
                <li><a class="dropdown-item" href="#">question 2</a></li>
                <li><a class="dropdown-item" href="#">question 3</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="action-rule">
          <div id="action-rule">

          </div>
          <button type="button" class="addAction" onclick="addAction()">Add Action</button>
        </div>
        <button type="button" class="btn done-button">Done</button>
      </div>
    </div>
  </div>
</div>`);
  $(".show-button").click(function () {
    $(".select-question").addClass("active")
  });
  $(".select-action").click(function () {
    $(".addAction").addClass("active")
  });
}
function addAction() {
  $('#action-rule').append(`<div class="rule-action-add">
  <h6>and</h6>
  <div class="action-button-add">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle select-action" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Select action...
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item cursor-pointer">question 1</a></li>
        <li><a class="dropdown-item cursor-pointer">question 2</a></li>
        <li><a class="dropdown-item cursor-pointer">question 3</a></li>
      </ul>
    </div>
  </div>
  <div class="select-question-add">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Select...
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">question 1</a></li>
        <li><a class="dropdown-item" href="#">question 2</a></li>
        <li><a class="dropdown-item" href="#">question 3</a></li>
      </ul>
    </div>
  </div>
  <i class="icon icon-delete w-25 bg-cover ms-3"></i>
</div>`);
}

$(document).on('click', '.icon-delete', function () {
  $(this).parents('.rule-action-add').remove();
});


$('.picker-image').click(function () {
  $('.picker-image').removeClass("picker-active");
  $(this).addClass("picker-active");
});




document.getElementById('fileField').addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
  const file = event.target.files[0];
  const fileReader = new FileReader();

  fileReader.onload = function (e) {
    const previewElement = document.querySelector('.btn-file__preview');
    const imageElement = document.createElement('img');
    imageElement.src = e.target.result;
    imageElement.classList.add('uploaded-image');
    previewElement.innerHTML = '';
    previewElement.appendChild(imageElement);
    // Remove the btn-file__actions div
    const actionsElement = document.querySelector('.btn-file__actions');
    actionsElement.parentNode.removeChild(actionsElement);
  };

  fileReader.readAsDataURL(file);
}









$('.tab-click').click(function (e) {
  e.preventDefault();
  $(this).addClass('ouline-white');
  $('.slider-btn > a').removeClass('active');
  $(this).addClass('active');
});


var radio = 4;

function addRadio() {

  radio++;
  $('#radio').append(`<div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"><label class="form-check-label" for="flexRadioDefault2"><input type="text" name="name" id="name" placeholder="Item ${radio}" class="d-block w-100 border-0 outline-none"></label></div>`);
}

var rating = 5;

function addRating() {

  rating++;
  $('#rating').append(`<p><input type="text" name="name" id="name" placeholder="${rating}" class="d-block w-100 border-0 outline-none rounded py-2 text-center bg-transparent"></p>`);
}

var checkbox = 3;

function addCheckbox() {

  checkbox++;
  $('#checkbox').append(`<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"><input type="text" name="name" id="name" placeholder="Item ${checkbox}" class="d-block w-100 border-0 outline-none rounded py-2"></label></div>`);
}

var selectItem = 4;

function addSelectItem() {

  selectItem++;
  $('#selectItem').append(`<input type="text" name="name" id="name" placeholder="Item ${selectItem}" class="d-block w-100 border-0 outline-none rounded py-2">`);
}


$('.rating-text').click(function () {
  $('.rating-text').removeClass("rating-active");
  $(this).addClass("rating-active");
});

