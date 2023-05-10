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
                    case "table":
                        item.innerHTML = `<div class="invoice-table mt-4 tablepanel">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" class="ps-5">
                      <span class="check-tasks">
                        <div class="checkbox relative">
                          <label class="absolute">
                            <input type="checkbox" data-ng-model="example.check">
                            <span class="box"></span>
                          </label>
                        </div>
                      </span>Company name
                    </th>
                    <th scope="col">Location</th>
                    <th scope="col">Employees</th>
                    <th scope="col">Revenue (USD)</th>
                    <th scope="col"><a href="#" class="text-decoration-none fw-600">Edit</a></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row" class="ps-5" data-label="Company name">
                      <span class="check-tasks">
                        <div class="checkbox relative">
                          <label class="absolute">
                            <input type="checkbox" data-ng-model="example.check">
                            <span class="box"></span>
                          </label>
                        </div>
                      </span>
                      <div class="d-flex align-items-center">
                        <img src="./assets/images/amazon.jpg" alt="">
                        <div class="ms-3 ">
                          <h6 class="text-sm">Amazon Inc</h6>
                          <p class="text-light-gray">amazon.com</p>
                        </div>
                      </div>
                    </td>
                    <td data-label="Location">Seattle, Washington</td>
                    <td data-label="Employees">566k</td>
                    <td data-label="Revenue (USD)">12.16 bn</td>
                    <td>
                      <div class="btn-group border-end">
                        <button type="button" class="btn p-2 border-none ms-4" data-bs-toggle="dropdown" aria-expanded="false">
                          <div class="dots d-flex align-items-center  m-0 p-0">
                            <span class="me-1"></span>
                            <span class="me-1 mt-0"></span>
                            <span class="mt-0"></span>
                          </div>
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#"><i class="icon icon-edit"></i>
                              Edit</a></li>
                          <li><a class="dropdown-item" href="#"><i class="icon icon-inbox"></i>
                              Invitation Email</a></li>
                          <li><a class="dropdown-item" href="#"><i class="icon icon-delete"></i>
                              Delete</a></li>
                          <li><a class="dropdown-item" href="./crm-customer-profile.html">See Project Details</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>`;
                        break;
                    case "textInput":
                        item.innerHTML = '<input type="text" name="name" id="name" placeholder="Enter a Full Name" class="d-block w-100 border border-2 rounded px-4 py-2">';
                        break;
                    case "Image":
                        item.innerHTML = `<img style="height:auto;width:200px" draggable='false' src="https://picsum.photos/200/300/?random" alt="">`;
                        break;
                    case "Text":
                        item.innerHTML = `<div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam aperiam enim facilis eos rerum earum ipsa quasi explicabo ea tenetur. Ut corrupti repudiandae soluta atque in illum recusandae error fugiat!</p>
          </div>`;
                        break;
                    case "Form":
                        item.innerHTML = `<div class="row">
                <div class="col-md-6">
                    <label for="name" class="fw-bold mt-3 mb-2">First Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter a First Name" class="d-block w-100 border border-2 rounded px-4 py-2">
                    <label for="name" class="fw-bold mt-3 mb-2">Email</label>
                    <input type="email" name="name" id="name" placeholder="Enter a Email" class="d-block w-100 border border-2 rounded px-4 py-2">
                </div>
                <div class="col-md-6">
                    <label for="name" class="fw-bold mt-3 mb-2">Last Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter a Last Name" class="d-block w-100 border border-2 rounded px-4 py-2">
                    <label for="name" class="fw-bold mt-3 mb-2">Phone</label>
                    <input type="text" name="name" id="name" placeholder="Enter a Phone" class="d-block w-100 border border-2 rounded px-4 py-2">
                </div>
                <button type="button" class="btn ouline-white btn-fill mt-3">Submit</button>
            </div>`;
                        break;
                    case "keyValue":
                        item.innerHTML = `<div class="prof-table table tablepanel bg-white rounded">
                    <table class="mt-3">
                      <thead>
                        <tr>
                          <th>Key</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="No">a</td>
                          <td data-label="Leads">1</td>
                        </tr>
                        <tr>
                            <td data-label="No">b</td>
                            <td data-label="Leads">2</td>
                          </tr>
                          <tr>
                            <td data-label="No">c</td>
                            <td data-label="Leads">3</td>
                          </tr>
                          <tr>
                            <td data-label="No">d</td>
                            <td data-label="Leads">4</td>
                          </tr>
                      </tbody>
                    </table>
                  </div>`;
                        break;
                    case "Button":
                        item.innerHTML = `<button type="button" class="btn ouline-white btn-fill mt-3 mt-md-0">Add Button</button>`;
                        break;
                    case "Select":
                        item.innerHTML = `<select name="Role" id="Role" class="d-block w-100 border border-2 rounded px-4 py-2">
                            <option value="Manager">Value</option>
                            <option value="Urdu">Value</option>
                            <option value="Hindi">Value</option>
                            <option value="Punjabi">Value</option>
                          </select>`;
                        break;
                    case "Percent":
                        item.innerHTML = `<label for="name" class="fw-bold mt-3 mb-2">label</label>
                                <input type="number" name="name" id="name" placeholder="Enter a Percent" class="d-block w-100 border border-2 rounded px-4 py-2">`;
                        break;
                    case "Slider":
                        item.innerHTML = `<div class="line-1 percentage-slider">
                                    <div class="range-container column" id="ten">
                                      <input type="range" id="ats" min="0" max="100" value="70" style="--ptage: 13%;">
                                      <label for="ats" class="50" style="left: 50.4878px;">13</label>
                                    </div>
                                  </div>`;
                        break;
                    case "buttonGroup":
                        item.innerHTML = `<div class="d-flex align-items-center">
                                        <button type="button" class="btn ouline-white btn-fill mt-3 mt-md-0 me-3">Add button</button>
                                        <button type="button" class="btn ouline-white btn-fill mt-3 mt-md-0">Add button</button>
                                    </div>`;
                        break;
                    case "checkboxGroup":
                        item.innerHTML = `<div class="form-check">
                                            <input class="form-check-input d-block" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                              Default checkbox
                                            </label>
                                          </div>
                                          <div class="form-check">
                                            <input class="form-check-input d-block" type="checkbox" value="" id="flexCheckChecked">
                                            <label class="form-check-label" for="flexCheckChecked">
                                              Checked checkbox
                                            </label>
                                          </div>`;
                        break;
                    case "Multiselect":
                        item.innerHTML = `<label for="name" class="fw-bold mt-3 mb-2">label</label>
                        <select name="Role" id="Role" class="d-block w-100 border border-2 rounded px-4 py-2">
                            <option value="Manager">Value</option>
                            <option value="Urdu">Value</option>
                            <option value="Hindi">Value</option>
                            <option value="Punjabi">Value</option>
                          </select>`;
                        break;
                    case "Switch":
                        item.innerHTML = `<div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                      </div>`;
                        break;
                    case "Checkbox":
                        item.innerHTML = `<div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                              Default checkbox
                            </label>
                          </div>`;
                        break;
                    case "Listbox":
                        item.innerHTML = `<ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link text-uppercase active" id="Overview-tab" data-bs-toggle="tab" data-bs-target="#Overview" type="button" role="tab" aria-controls="Overview" aria-selected="true">Overview</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link text-uppercase" id="all-List-tab" data-bs-toggle="tab" data-bs-target="#List" type="button" role="tab" aria-controls="List" aria-selected="false">List</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link text-uppercase" id="all-timeline-tab" data-bs-toggle="tab" data-bs-target="#timeline" type="button" role="tab" aria-controls="timeline" aria-selected="false">Timeline</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link text-uppercase" id="all-Board-tab" data-bs-toggle="tab" data-bs-target="#Board" type="button" role="tab" aria-controls="Board" aria-selected="false">Board</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link text-uppercase" id="all-Calender-tab" data-bs-toggle="tab" data-bs-target="#Calender" type="button" role="tab" aria-controls="Calender" aria-selected="false">Calender</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link text-uppercase" id="all-Dashboard-tab" data-bs-toggle="tab" data-bs-target="#Dashboard" type="button" role="tab" aria-controls="Dashboard" aria-selected="false">Dashboard</button>
                                </li>
                              </ul>`;
                        break;
                    case "radioGroup":
                        item.innerHTML = `<div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                      Default radio
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                      Default checked radio
                                    </label>
                                  </div>
                                  <div class="form-check">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                  <label class="form-check-label" for="flexRadioDefault2">
                                    Default checked radio
                                  </label>
                                </div>`;
                        break;
                    case "radioGroup":
                        item.innerHTML = `<div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Default radio
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Default checked radio
                                        </label>
                                      </div>
                                      <div class="form-check">
                                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                      <label class="form-check-label" for="flexRadioDefault2">
                                        Default checked radio
                                      </label>
                                    </div>`;
                        break;
                    case "Comment":
                        item.innerHTML = `<textarea name="address" id="address" class="d-block mb-4" placeholder="Your address" spellcheck="false"></textarea>`;
                        break;
                    case "fileDropzone":
                        item.innerHTML = `<input type="file">`;
                        break;
                    case "queryBuilder":
                        item.innerHTML = `<ul class="mb-0 p-1 bg-light border-radius head-btn mt-3 mt-md-0">
                        <li class="p-0 slider-btn">
                          <a href="#" type="button" class="btn ouline-white tab-click active">Today</a>
                          <a href="#" type="button" class="btn ouline-white tab-click border-none">Completed</a>
                        </li>
                      </ul>`;
                        break;
                    case "Icon":
                        item.innerHTML = `<div class="d-flex align-items-center">
                            <i class="icon icon-assigned-icon"></i>
                            <i class="icon icon-blue-added-button"></i>
                        </div>`;
                        break;
                    case "Status":
                        item.innerHTML = `<div class="d-flex align-items-center">
                        <span class="finalized-status bg-warning">Approved</span>
                        <span class="finalized-status bg-danger">Approved</span>
                        <span class="finalized-status bg-success">Approved</span>
                    </div>`;
                        break;
                    case "circularImage":
                        item.innerHTML = `<div class="d-flex align-items-center">
                        <img style="height:200px;width:200px; border-radius: 50%;"  draggable='false' src="https://picsum.photos/200/300/?random" alt="">
                        </div>`;
                        break;
                    case "progressBar":
                        item.innerHTML = `<div class="progress">
                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>`;
                        break;
                    case "Tags":
                        item.innerHTML = `<div class="d-flex align-items-center">
                        <span class="finalized-status me-2">tags <a href="" class="text-decoration-none ms-2">X</a></span>
                        <span class="finalized-status me-2">tags <a href="" class="text-decoration-none ms-2">X</a></span>
                        <span class="finalized-status me-2">tags <a href="" class="text-decoration-none ms-2">X</a></span>
                    </div>`;
                        break;
                    case "Statistic":
                        item.innerHTML = `<div class="col-md-4 mt-3 mt-md-0">
                        <div class="sm-box h-100 bg-white d-flex justify-content-center justify-content-md-start p-3 cursor-pointer box-hover" data-bs-toggle="modal" data-bs-target="#leftBoxModal">
                          <div class="sm-box-desc d-flex align-items-center mb-2">
                            <span class=""><i class="icon icon-project-cirlce bg-cover"></i></span>
                            <div class="ms-2">
                              <div class="d-flex align-items-center">
                                <h4 class="fw-bold">75%</h4>
                                <p class="text-success text-small"><i class="icon icon-up-arrow"></i> +5.10%</p>
                              </div>
                              <p class="text-light-gray">Completion </p>
                            </div>
                          </div>
                        </div>
                      </div>`;
                        break;
                    case "pageInput":
                        item.innerHTML = `<div class="invoice-pagination d-flex mt-3 align-items-center flex-colume-sm">
                            <div class="pagination-right d-flex align-items-center gap-4 mt-4 mt-md-0">
                              <button class="btn pagination-btn active">1</button>
                              <button class="btn pagination-btn">2</button>
                              <a class="text-light-gray text-decoration-none">Next</a>
                              <a class="text-light-gray text-decoration-none">End</a>
                            </div>
                          </div>`;
                        break;
                    case "Navigation":
                        item.innerHTML = `<ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link text-uppercase active" id="Overview-tab" data-bs-toggle="tab" data-bs-target="#Overview" type="button" role="tab" aria-controls="Overview" aria-selected="true">Overview</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link text-uppercase" id="all-List-tab" data-bs-toggle="tab" data-bs-target="#List" type="button" role="tab" aria-controls="List" aria-selected="false">List</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link text-uppercase" id="all-timeline-tab" data-bs-toggle="tab" data-bs-target="#timeline" type="button" role="tab" aria-controls="timeline" aria-selected="false">Timeline</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link text-uppercase" id="all-Board-tab" data-bs-toggle="tab" data-bs-target="#Board" type="button" role="tab" aria-controls="Board" aria-selected="false">Board</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link text-uppercase" id="all-Calender-tab" data-bs-toggle="tab" data-bs-target="#Calender" type="button" role="tab" aria-controls="Calender" aria-selected="false">Calender</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link text-uppercase" id="all-Dashboard-tab" data-bs-toggle="tab" data-bs-target="#Dashboard" type="button" role="tab" aria-controls="Dashboard" aria-selected="false">Dashboard</button>
                        </li>
                      </ul>`;
                        break;
                    case "Timeline":
                        item.innerHTML = `<table class="table timeline-table">
                        <thead>
                          <tr>
                            <th scope="col">17</th>
                            <th scope="col">18</th>
                            <th scope="col">19</th>
                            <th scope="col">20</th>
                            <th scope="col">21</th>
                            <th scope="col">22</th>
                            <th scope="col">23</th>
                            <th scope="col">24</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="timeline-tree active bg-parpol"></div>
                            </td>
                            <td>
                              <div class="timeline-tree bg-parpol"></div>
                            </td>
                            <td>
                              <div class="timeline-tree bg-parpol"></div>
                            </td>
                            <td>
                              <div class="timeline-tree bg-parpol"></div>
                            </td>
                            <td>
                              <div class="timeline-tree bg-parpol"></div>
                            </td>
                            <td>
                              <div class="timeline-tree bg-parpol finish-timeline"></div>
                            </td>
                            <td>
                              <div class=""></div>
                            </td>
                            <td>
                              <div class=""></div>
                            </td>
                          </tr>
                        </tbody>
                      </table>`;
                        break;
                    default:
                        break;
                }
            }
        });
    })();
});