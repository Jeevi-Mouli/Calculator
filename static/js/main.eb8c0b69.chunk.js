(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(_,e,t){},,function(module,__webpack_exports__,__webpack_require__){"use strict";var G_React_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),G_React_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),G_React_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),G_React_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),G_React_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),G_React_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_CalcButton__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_CalcDisplay__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(12),_myStyles_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(8),_myStyles_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_myStyles_css__WEBPACK_IMPORTED_MODULE_9__),_ResultDisplay__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(13),btnvals=["C","del","+",7,8,9,"-",4,5,6,"*",1,2,3,"/",0,".","="],Calculator=function(_Component){function Calculator(props){var _this;return Object(G_React_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=Object(G_React_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(G_React_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator).call(this,props)),_this.calcButtonHandler=function(e){var value=e.target.value;"C"==value?_this.setState({displayValue:"",result:""}):"del"==value?_this.setState((function(){return{displayValue:_this.state.displayValue.slice(0,-1),result:isNaN(_this.state.displayValue.charAt(_this.state.displayValue.length-2))?eval(_this.state.displayValue.slice(0,-2)):eval(_this.state.displayValue.slice(0,-1))}})):"="==value?_this.setState((function(){return{displayValue:_this.state.result,result:""}})):_this.setState((function(prevState){return{displayValue:prevState.displayValue+value,result:isNaN(value)?_this.state.result:eval(prevState.displayValue+value)}}))},_this.state={displayValue:"",result:""},_this.calcButtonHandler=_this.calcButtonHandler.bind(Object(G_React_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(_this)),_this}return Object(G_React_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator,_Component),Object(G_React_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){var _=this,e=this.state,t=e.displayValue,a=e.result;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CalcDisplay__WEBPACK_IMPORTED_MODULE_8__.a,{displayValue:t}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ResultDisplay__WEBPACK_IMPORTED_MODULE_10__.a,{result:a}),btnvals.map((function(e){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CalcButton__WEBPACK_IMPORTED_MODULE_7__.a,{id:e,value:e,calcButtonHandler:_.calcButtonHandler})})))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=Calculator},function(_,e,t){"use strict";var a=t(1),l=t(2),r=t(4),s=t(3),n=t(5),c=t(0),u=t.n(c),i=(t(8),function(_){function e(){return Object(a.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(n.a)(e,_),Object(l.a)(e,[{key:"render",value:function(){var _=this.props,e=_.id,t=_.value,a=_.calcButtonHandler,l="="==e||"C"==e?"btnNbrs  btnLarge":"btnNbrs";return u.a.createElement("button",{className:l,type:"button",id:e,value:t,onClick:a},t)}}]),e}(c.Component));e.a=i},function(_,e,t){"use strict";var a=t(1),l=t(2),r=t(4),s=t(3),n=t(5),c=t(0),u=t.n(c),i=function(_){function e(){return Object(a.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(n.a)(e,_),Object(l.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:"display"},this.props.displayValue)}}]),e}(c.Component);e.a=i},function(_,e,t){"use strict";var a=t(1),l=t(2),r=t(4),s=t(3),n=t(5),c=t(0),u=t.n(c),i=function(_){function e(){return Object(a.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(n.a)(e,_),Object(l.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:"display resultDisplay"},this.props.result)}}]),e}(c.Component);e.a=i},function(_,e,t){_.exports=t(22)},,,,,function(_,e,t){},function(_,e,t){_.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(0),l=t.n(a),r=t(9),s=t.n(r),n=(t(19),t(20),t(21),t(10));var c=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(n.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(c,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.eb8c0b69.chunk.js.map