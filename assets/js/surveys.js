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
            item.innerHTML = `<div class="row mt-3"><div class="col-8 mx-auto"><div class="radio-button"><label for="name" class="question"><input type="text" name="name" id="name" placeholder="Question" class="d-block w-100 border-0 outline-none rounded py-2"></label><div id="radio"><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked><label class="form-check-label" for="flexRadioDefault1"><input type="text" name="name" id="name" placeholder="Item 1" class="d-block w-100 border-0 outline-none"></label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"><label class="form-check-label" for="flexRadioDefault2"><input type="text" name="name" id="name" placeholder="Item 2" class="d-block w-100 border-0 outline-none"></label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"><input type="text" name="name" id="name" placeholder="Item 3" class="d-block w-100 border-0 outline-none"></label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"><label class="form-check-label" for="flexRadioDefault2"><input type="text" name="name" id="name" placeholder="Item 4" class="d-block w-100 border-0 outline-none"></label></div></div><a class="cursor-pointer text-decoration-none text-fill fw-600 mt-3 ms-4 d-block" onclick="addRadio()">Add More</a></div></div></div>`;
            break;
          case "ratingScale":
            item.innerHTML = '<div class="row mt-4"><div class="col-8 mx-auto"><div class="rating-scale"><label for="name" class="question"><input type="text" name="name" id="name" placeholder="Question" class="d-block w-100 border-0 outline-none rounded py-2"></label><div class="rating" id="rating"><p><input type="text" name="name" id="name" placeholder="1" class="d-block w-100 border-0 outline-none rounded py-2 text-center bg-transparent"></p><p><input type="text" name="name" id="name" placeholder="2" class="d-block w-100 border-0 outline-none rounded py-2 text-center bg-transparent"></p><p><input type="text" name="name" id="name" placeholder="3" class="d-block w-100 border-0 outline-none rounded py-2 text-center bg-transparent"></p><p><input type="text" name="name" id="name" placeholder="4" class="d-block w-100 border-0 outline-none rounded py-2 text-center bg-transparent"></p><p><input type="text" name="name" id="name" placeholder="5" class="d-block w-100 border-0 outline-none rounded py-2 text-center bg-transparent"></p></div><a class="cursor-pointer text-decoration-none text-fill fw-600 mt-3 ms-4 d-block" onclick="addRating()">Add More</a></div></div></div>';
            break;
          case "checkboxes":
            item.innerHTML = '<div class="row mt-4"><div class="col-8 mx-auto"><div class="checkboxes"><label for="name" class="question"><input type="text" name="name" id="name" placeholder="Question" class="d-block w-100 border-0 outline-none rounded py-2"></label><div id="checkbox"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked><label class="form-check-label" for="flexCheckDefault"><input type="text" name="name" id="name" placeholder="Item 1" class="d-block w-100 border-0 outline-none rounded py-2"></label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"><label class="form-check-label" for="flexCheckChecked"><input type="text" name="name" id="name" placeholder="Item 2" class="d-block w-100 border-0 outline-none rounded py-2"></label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"><input type="text" name="name" id="name" placeholder="Item 3" class="d-block w-100 border-0 outline-none rounded py-2"></label></div></div><a class="cursor-pointer text-decoration-none text-fill fw-600 mt-3 ms-4 d-block" onclick="addCheckbox()">Add More</a></div></div></div>';
            break;
          case "dropdown":
            item.innerHTML = '<div class="row mt-4"><div class="col-8 mx-auto"><div class="dropdown-surveys"><label for="name" class="question"><input type="text" name="name" id="name" placeholder="Question" class="d-block w-100 border-0 outline-none rounded py-2"></label><select name="Role" id="Role" class="select-dropdown"></select><div class="select-item" id="selectItem"><input type="text" name="name" id="name" placeholder="Item 1" class="d-block w-100 border-0 outline-none rounded py-2"><input type="text" name="name" id="name" placeholder="Item 2" class="d-block w-100 border-0 outline-none rounded py-2"><input type="text" name="name" id="name" placeholder="Item 3" class="d-block w-100 border-0 outline-none rounded py-2"><input type="text" name="name" id="name" placeholder="Item 4" class="d-block w-100 border-0 outline-none rounded py-2"></div><a class="cursor-pointer text-decoration-none text-fill fw-600 mt-3 ms-4 d-block" onclick="addSelectItem()">Add More</a></div></div></div>';
            break;
          case "boolean":
            item.innerHTML = '<div class="row mt-4"><div class="col-8 mx-auto"><div class="boolean"><label for="name" class="question"><input type="text" name="name" id="name" placeholder="Question" class="d-block w-100 border-0 outline-none rounded py-2"></label><ul class="head-btn"><li class="p-0 slider-btn d-flex"><a href="#" type="button" class="btn ouline-white tab-click"><input type="text" name="name" id="name" placeholder="Yes" class="d-block w-50px border-0 outline-none rounded py-1"></a><a href="#" type="button" class="btn ouline-white tab-click border-none"><input type="text" name="name" id="name" placeholder="No" class="d-block w-50px border-0 outline-none rounded py-1"></a></li></ul></div></div></div>';
            break;
          case "singleLineInput":
            item.innerHTML = '<div class="row mt-4"><div class="col-8 mx-auto"><div class="single-line-input"><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2 line-input"></div></div></div>';
            break;
          case "longText":
            item.innerHTML = '<div class="row mt-4"><div class="col-8 mx-auto"><div class="long-text"><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><textarea name="message" id="message" cols="20" rows="5" class="d-block w-100 border-0 outline-none rounded py-2 long-textarea"></textarea></div></div></div>';
            break;
          case "multipleTextboxes":
            item.innerHTML = '<div class="row mt-4"><div class="col-8 mx-auto"><div class="single-line-input"><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2 line-input"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2 line-input"></div></div></div>';
            break;
          case "fileUpload":
            item.innerHTML = '<div class="row mt-4"><div class="col-8 mx-auto"><div class="upload-file"><label for="name" class="question m-0"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><div class="upload-box"><div class="form-group"><label for="fileField" class="attachment"><div class="row btn-file"><div class="btn-file__preview"></div><div class="btn-file__actions"><div class="btn-file__actions__item col-xs-12 text-center"><div class="btn-file__actions__item--shadow"><img src="image.png" alt="Drop a File here or click the a box to load the file" class="upload-image"></div></div></div></div><input name="file" type="file" id="fileField"></label></div></div></div></div></div>';
            break;
          case "imagePicker":
            item.innerHTML = '<div class="row mt-4"><div class="col-8 mx-auto"><div class="image-picker"><label for="name" class="question"><input type="text" name="name" id="name" class="d-block w-100 border-0 outline-none rounded py-2" placeholder="Question"></label><div id="imageContainer"></div><input type="file" id="imagePicker" style="display: none;" multiple><button onclick="openImagePicker()">Add Image</button></div></div></div>';
            break;
          default:
            break;
        }
      }
    });
  })();
});