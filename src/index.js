import { ToyReact } from './ToyReact'

class MyComponent {
  render(h) {
    return <div>render-test</div>
  }

  mountTo(parent) {
    let dom = this.render()
    vdom.mountTo(parent)
  }
}


let a = <MyComponent name="test">
  <span>hello</span>
  <span>world</span>
  <span></span>
</MyComponent>

ToyReact.render(
  a,
  document.body
)


console.log(a)
document.body.appendChild(a)

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToyReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToyReact */ "./src/ToyReact.js");

var a = _ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement(
  "div", 
  { name: "test" },
  _ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("span", null, "hello"),
  _ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("span", null, "world"), 
  _ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("span", null)
);
console.log(a);
document.body.appendChild(a);
