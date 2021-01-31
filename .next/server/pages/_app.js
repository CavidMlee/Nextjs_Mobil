module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-responsive-modal/styles.css":
/*!********************************************************!*\
  !*** ./node_modules/react-responsive-modal/styles.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _src_styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./src/components/index.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query/devtools */ "react-query/devtools");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contexts */ "./src/contexts/index.tsx");
/* harmony import */ var react_responsive_modal_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-modal/styles.css */ "./node_modules/react-responsive-modal/styles.css");
/* harmony import */ var react_responsive_modal_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Cavid Malikli\\Desktop\\Next js MobileStore\\advertising-phone\\pages\\_app.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


// import Head from 'next/head';





 // Create a client


const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__["QueryClient"]();

function MyApp({
  Component,
  pageProps
}) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(components__WEBPACK_IMPORTED_MODULE_2__["Head"], {
    title: "Phones",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_query__WEBPACK_IMPORTED_MODULE_3__["QueryClientProvider"], {
    client: queryClient,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_query_devtools__WEBPACK_IMPORTED_MODULE_4__["ReactQueryDevtools"], {
    initialIsOpen: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(contexts__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/components/head.tsx":
/*!*********************************!*\
  !*** ./src/components/head.tsx ***!
  \*********************************/
/*! exports provided: Head */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Cavid Malikli\\Desktop\\Next js MobileStore\\advertising-phone\\src\\components\\head.tsx";



const defaultDescription = "";
const defaultKeywords = "";
const defaultOGURL = "";
const defaultOGImage = "";
const Head = props => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}, props.title || ""), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  name: "description",
  content: props.description || defaultDescription,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  name: "keywords",
  content: props.keywords || defaultKeywords,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/static/favicon.svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/static/favicon.svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("link", {
  rel: "shortcut icon",
  href: "/static/favicon.svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/static/favicon.svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("link", {
  rel: "mask-icon",
  href: "/static/favicon.ico",
  color: "#000000",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  property: "og:url",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  property: "og:title",
  content: props.title || "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  property: "og:description",
  content: props.description || defaultDescription,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  name: "twitter:site",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  name: "twitter:card",
  content: "summary_large_image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  name: "twitter:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  property: "og:image:width",
  content: "1200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }
}), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
  property: "og:image:height",
  content: "630",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }
}));

/***/ }),

/***/ "./src/components/index.tsx":
/*!**********************************!*\
  !*** ./src/components/index.tsx ***!
  \**********************************/
/*! exports provided: Head, Layout, Authcard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head */ "./src/components/head.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return _head__WEBPACK_IMPORTED_MODULE_0__["Head"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/components/layout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["Layout"]; });

/* harmony import */ var _ui_authCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/authCard */ "./src/components/ui/authCard.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Authcard", function() { return _ui_authCard__WEBPACK_IMPORTED_MODULE_2__["Authcard"]; });





/***/ }),

/***/ "./src/components/layout.tsx":
/*!***********************************!*\
  !*** ./src/components/layout.tsx ***!
  \***********************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts */ "./src/contexts/index.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Cavid Malikli\\Desktop\\Next js MobileStore\\advertising-phone\\src\\components\\layout.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const Layout = ({
  children
}) => {
  const {
    0: dark,
    1: setDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("header", {
    className: myStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Header"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
    onClick: () => setDark(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Dark"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
    onClick: () => setDark(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Light"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Theme:", dark ? 'dark' : 'light')), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, children), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("footer", {
    className: myStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Footer"));
};
const myStyle = /*#__PURE__*/Object(_emotion_css__WEBPACK_IMPORTED_MODULE_1__["css"])(false ? undefined : {
  name: "1qehv1a-myStyle",
  styles: "height:10vh;width:100vw;background-color:#1d1c1d;color:white;display:flex;justify-content:center;align-items:center;label:myStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2F2aWQgTWFsaWtsaVxcRGVza3RvcFxcTmV4dCBqcyBNb2JpbGVTdG9yZVxcYWR2ZXJ0aXNpbmctcGhvbmVcXHNyY1xcY29tcG9uZW50c1xcbGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Qm1CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQ2F2aWQgTWFsaWtsaVxcRGVza3RvcFxcTmV4dCBqcyBNb2JpbGVTdG9yZVxcYWR2ZXJ0aXNpbmctcGhvbmVcXHNyY1xcY29tcG9uZW50c1xcbGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgUmVhY3RDaGlsZCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnY29udGV4dHMnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBKU1guRWxlbWVudFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiB7XHJcblxyXG4gICAgY29uc3QgWyBkYXJrLCBzZXREYXJrIF06YW55ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17bXlTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIEhlYWRlclxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXREYXJrKHRydWUpfT5EYXJrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXREYXJrKGZhbHNlKX0+TGlnaHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlRoZW1lOntkYXJrPydkYXJrJzonbGlnaHQnfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtteVN0eWxlfT5Gb290ZXI8L2Zvb3Rlcj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbXlTdHlsZSA9IGNzc2BcclxuICBoZWlnaHQ6MTB2aDtcclxuICB3aWR0aDoxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDFjMWQ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

/***/ }),

/***/ "./src/components/ui/authCard.tsx":
/*!****************************************!*\
  !*** ./src/components/ui/authCard.tsx ***!
  \****************************************/
/*! exports provided: Authcard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authcard", function() { return Authcard; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Cavid Malikli\\Desktop\\Next js MobileStore\\advertising-phone\\src\\components\\ui\\authCard.tsx";


const Authcard = ({
  title,
  headerText,
  children,
  footerText,
  footerFuncText,
  footerFunc
}) => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "headerText",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, headerText), children, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "footerContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, footerText), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    onClick: footerFunc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, footerFuncText)));
};

const Container = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1ysaxlj0",
  label: "Container"
})("background-color:", props => props.theme.colors.modalBackground, ";width:400px;height:auto;display:flex;flex-direction:column;h1{font-family:Arimo;font-style:normal;font-weight:bold;font-size:24px;line-height:28px;color:", props => props.theme.colors.textColor, ";margin:0 0 10px;}.headerText{font-family:Arimo;font-style:normal;font-weight:normal;font-size:14px;line-height:100%;color:", props => props.theme.colors.textColor, ";opacity:0.3;margin-bottom:30px;}.footerContainer{margin-top:30px;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:row;font-family:Arimo;font-style:normal;font-weight:normal;font-size:16px;line-height:18px;span{color:", props => props.theme.colors.textColor, ";margin-right:5px;}div{font-weight:600;color:", props => props.theme.colors.primaryColor, ";cursor:pointer;}}" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2F2aWQgTWFsaWtsaVxcRGVza3RvcFxcTmV4dCBqcyBNb2JpbGVTdG9yZVxcYWR2ZXJ0aXNpbmctcGhvbmVcXHNyY1xcY29tcG9uZW50c1xcdWlcXGF1dGhDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQm9DIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQ2F2aWQgTWFsaWtsaVxcRGVza3RvcFxcTmV4dCBqcyBNb2JpbGVTdG9yZVxcYWR2ZXJ0aXNpbmctcGhvbmVcXHNyY1xcY29tcG9uZW50c1xcdWlcXGF1dGhDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcblxyXG5pbnRlcmZhY2UgSVByb3Bze1xyXG4gICAgdGl0bGU/OnN0cmluZyxcclxuICAgIGhlYWRlclRleHQ/OnN0cmluZyxcclxuICAgIGNoaWxkcmVuOlJlYWN0LlJlYWN0Tm9kZSxcclxuICAgIGZvb3RlclRleHQ/OnN0cmluZyxcclxuICAgIGZvb3RlckZ1bmNUZXh0PzpzdHJpbmcsXHJcbiAgICBmb290ZXJGdW5jPzooKT0+dm9pZCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhjYXJkOlJlYWN0LkZDPElQcm9wcz4gPSAoe3RpdGxlLGhlYWRlclRleHQsY2hpbGRyZW4sZm9vdGVyVGV4dCxmb290ZXJGdW5jVGV4dCxmb290ZXJGdW5jfSkgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlYWRlclRleHQnPntoZWFkZXJUZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntmb290ZXJUZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Zm9vdGVyRnVuY30+e2Zvb3RlckZ1bmNUZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxudHlwZSBUUHJvcHMgPSB7XHJcbiAgICB0aGVtZT86IGFueTtcclxuICB9XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PFRQcm9wcz5gXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmNvbG9ycy5tb2RhbEJhY2tncm91bmR9O1xyXG4gICAgd2lkdGg6NDAwcHg7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmltbztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyVGV4dHtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpbW87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyQ29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaW1vO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5Q29sb3J9O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gIl19 */"));

/***/ }),

/***/ "./src/contexts/index.tsx":
/*!********************************!*\
  !*** ./src/contexts/index.tsx ***!
  \********************************/
/*! exports provided: ThemeContext, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themeContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themeContext */ "./src/contexts/themeContext.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return _themeContext__WEBPACK_IMPORTED_MODULE_0__["ThemeContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _themeContext__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"]; });



/***/ }),

/***/ "./src/contexts/themeContext.tsx":
/*!***************************************!*\
  !*** ./src/contexts/themeContext.tsx ***!
  \***************************************/
/*! exports provided: ThemeContext, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_theme_themeBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/theme/themeBuilder */ "./src/styles/theme/themeBuilder.tsx");
var _jsxFileName = "C:\\Users\\Cavid Malikli\\Desktop\\Next js MobileStore\\advertising-phone\\src\\contexts\\themeContext.tsx";




const ThemeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const ThemeProvider = ({
  children
}) => {
  const {
    0: dark,
    1: setDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ThemeContext.Provider, {
    value: [dark, setDark],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: dark ? styles_theme_themeBuilder__WEBPACK_IMPORTED_MODULE_2__["darkTheme"] : styles_theme_themeBuilder__WEBPACK_IMPORTED_MODULE_2__["lightTheme"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, children));
};

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/theme/themeBuilder.tsx":
/*!*******************************************!*\
  !*** ./src/styles/theme/themeBuilder.tsx ***!
  \*******************************************/
/*! exports provided: lightTheme, darkTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
const lightTheme = {
  colors: {
    backgroundColor: 'grey',
    modalBackground: '#ffffff',
    primaryColor: '#4254F3',
    buttonText: '#FFFFFF',
    textColor: '#000000',
    socialButtonBackground: '#F2F6FA'
  }
};
const darkTheme = {
  colors: {
    backgroundColor: 'black',
    modalBackground: '#1f1e1e',
    primaryColor: '#6b75e4',
    buttonText: '#292929',
    textColor: '#dfdfdf',
    socialButtonBackground: '#b5c2cf'
  }
};


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@emotion/css":
/*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/css");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/styled/base":
/*!***************************************!*\
  !*** external "@emotion/styled/base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled/base");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-query/devtools");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkvYXV0aENhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL3RoZW1lQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy90aGVtZS90aGVtZUJ1aWxkZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL2Nzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vc3R5bGVkL2Jhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcXVlcnkvZGV2dG9vbHNcIiJdLCJuYW1lcyI6WyJxdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJkZWZhdWx0S2V5d29yZHMiLCJkZWZhdWx0T0dVUkwiLCJkZWZhdWx0T0dJbWFnZSIsIkhlYWQiLCJwcm9wcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInVybCIsIm9nSW1hZ2UiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRhcmsiLCJzZXREYXJrIiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIm15U3R5bGUiLCJjc3MiLCJBdXRoY2FyZCIsImhlYWRlclRleHQiLCJmb290ZXJUZXh0IiwiZm9vdGVyRnVuY1RleHQiLCJmb290ZXJGdW5jIiwiQ29udGFpbmVyIiwidGhlbWUiLCJjb2xvcnMiLCJtb2RhbEJhY2tncm91bmQiLCJ0ZXh0Q29sb3IiLCJwcmltYXJ5Q29sb3IiLCJjcmVhdGVDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsInVzZVN0YXRlIiwiZGFya1RoZW1lIiwibGlnaHRUaGVtZSIsImJhY2tncm91bmRDb2xvciIsImJ1dHRvblRleHQiLCJzb2NpYWxCdXR0b25CYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBRUE7QUFDQTtB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QUM7QUFObkI7QUFEYyxDQUExQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEseUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyAvKiwgQXBwQ29udGV4dCAqLyB9IGZyb20gJ25leHQvYXBwJztcclxuLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICcuLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgSGVhZCB9IGZyb20gJ2NvbXBvbmVudHMnO1xyXG5pbXBvcnQge1xyXG4gIFF1ZXJ5Q2xpZW50LFxyXG4gIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsXHJcbn0gZnJvbSAncmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tICdyZWFjdC1xdWVyeS9kZXZ0b29scyc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdjb250ZXh0cyc7XHJcbmltcG9ydCAncmVhY3QtcmVzcG9uc2l2ZS1tb2RhbC9zdHlsZXMuY3NzJztcclxuXHJcblxyXG4vLyBDcmVhdGUgYSBjbGllbnRcclxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKVxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkIHRpdGxlPSdQaG9uZXMnIC8+XHJcbiAgICAgIFxyXG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cclxuICAgICAgICA8UmVhY3RRdWVyeURldnRvb2xzIGluaXRpYWxJc09wZW49e2ZhbHNlfSAvPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgICBcclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJpbXBvcnQgTmV4dEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBkZWZhdWx0RGVzY3JpcHRpb24gPSBcIlwiO1xyXG5jb25zdCBkZWZhdWx0S2V5d29yZHMgPSBcIlwiO1xyXG5jb25zdCBkZWZhdWx0T0dVUkwgPSBcIlwiO1xyXG5jb25zdCBkZWZhdWx0T0dJbWFnZSA9IFwiXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgZGVmYXVsdERlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgZGVmYXVsdEtleXdvcmRzPzogc3RyaW5nO1xyXG4gICAgZGVmYXVsdE9HVVJMPzogc3RyaW5nO1xyXG4gICAgZGVmYXVsdE9HSW1hZ2U/OiBzdHJpbmc7XHJcbiAgICB0aXRsZT86c3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OnN0cmluZztcclxuICAgIGtleXdvcmRzPzpzdHJpbmc7XHJcbiAgICB1cmw/OnN0cmluZztcclxuICAgIG9nSW1hZ2U/OmFueTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWQgPSAocHJvcHM6UHJvcHMpID0+IChcclxuICAgIDxOZXh0SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgIDx0aXRsZT57cHJvcHMudGl0bGUgfHwgXCJcIn08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e3Byb3BzLmtleXdvcmRzIHx8IGRlZmF1bHRLZXl3b3Jkc30gLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLnN2Z1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5zdmdcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLnN2Z1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uc3ZnXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIGNvbG9yPVwiIzAwMDAwMFwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtwcm9wcy51cmwgfHwgZGVmYXVsdE9HVVJMfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwcm9wcy50aXRsZSB8fCBcIlwifSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbiB8fCBkZWZhdWx0RGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9e3Byb3BzLnVybCB8fCBkZWZhdWx0T0dVUkx9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3Byb3BzLm9nSW1hZ2UgfHwgZGVmYXVsdE9HSW1hZ2V9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI2MzBcIiAvPlxyXG4gICAgPC9OZXh0SGVhZD5cclxuKTtcclxuXHJcbiIsImV4cG9ydCB7SGVhZH0gZnJvbSAnLi9oZWFkJztcclxuZXhwb3J0IHtMYXlvdXR9IGZyb20gJy4vbGF5b3V0JztcclxuZXhwb3J0IHtBdXRoY2FyZH0gZnJvbSAnLi91aS9hdXRoQ2FyZCciLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIFJlYWN0Q2hpbGQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gJ2NvbnRleHRzJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogSlNYLkVsZW1lbnRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFsgZGFyaywgc2V0RGFyayBdOmFueSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e215U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICBIZWFkZXJcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0RGFyayh0cnVlKX0+RGFyazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0RGFyayhmYWxzZSl9PkxpZ2h0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5UaGVtZTp7ZGFyaz8nZGFyayc6J2xpZ2h0J308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17bXlTdHlsZX0+Rm9vdGVyPC9mb290ZXI+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG15U3R5bGUgPSBjc3NgXHJcbiAgaGVpZ2h0OjEwdmg7XHJcbiAgd2lkdGg6MTAwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMWQxYzFkO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQcm9wc3tcclxuICAgIHRpdGxlPzpzdHJpbmcsXHJcbiAgICBoZWFkZXJUZXh0PzpzdHJpbmcsXHJcbiAgICBjaGlsZHJlbjpSZWFjdC5SZWFjdE5vZGUsXHJcbiAgICBmb290ZXJUZXh0PzpzdHJpbmcsXHJcbiAgICBmb290ZXJGdW5jVGV4dD86c3RyaW5nLFxyXG4gICAgZm9vdGVyRnVuYz86KCk9PnZvaWQsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoY2FyZDpSZWFjdC5GQzxJUHJvcHM+ID0gKHt0aXRsZSxoZWFkZXJUZXh0LGNoaWxkcmVuLGZvb3RlclRleHQsZm9vdGVyRnVuY1RleHQsZm9vdGVyRnVuY30pID0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWFkZXJUZXh0Jz57aGVhZGVyVGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3RlckNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57Zm9vdGVyVGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2Zvb3RlckZ1bmN9Pntmb290ZXJGdW5jVGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbnR5cGUgVFByb3BzID0ge1xyXG4gICAgdGhlbWU/OiBhbnk7XHJcbiAgfVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxUUHJvcHM+YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5jb2xvcnMubW9kYWxCYWNrZ3JvdW5kfTtcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpbW87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcclxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlclRleHR7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaW1vO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3RlckNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmltbztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUuY29sb3JzLnRleHRDb2xvcn07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgICAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeUNvbG9yfTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYCIsImV4cG9ydCB7VGhlbWVDb250ZXh0LCBUaGVtZVByb3ZpZGVyfSBmcm9tICcuL3RoZW1lQ29udGV4dCciLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgYXMgVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHsgbGlnaHRUaGVtZSwgZGFya1RoZW1lIH0gZnJvbSAnc3R5bGVzL3RoZW1lL3RoZW1lQnVpbGRlcidcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlcjogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtkYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17WyBkYXJrLCBzZXREYXJrIF19ID5cclxuICAgICAgICAgICAgPFRoZW1lIHRoZW1lPXtkYXJrID8gZGFya1RoZW1lIDogbGlnaHRUaGVtZX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvVGhlbWU+XHJcblxyXG4gICAgICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiIsImNvbnN0IGxpZ2h0VGhlbWU6IE9iamVjdCA9IHtcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZXknLFxyXG4gICAgICAgIG1vZGFsQmFja2dyb3VuZDogJyNmZmZmZmYnLFxyXG4gICAgICAgIHByaW1hcnlDb2xvcjonIzQyNTRGMycsXHJcbiAgICAgICAgYnV0dG9uVGV4dDonI0ZGRkZGRicsXHJcbiAgICAgICAgdGV4dENvbG9yOicjMDAwMDAwJyxcclxuICAgICAgICBzb2NpYWxCdXR0b25CYWNrZ3JvdW5kOicjRjJGNkZBJ1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkYXJrVGhlbWU6IE9iamVjdCA9IHtcclxuICAgIGNvbG9yczoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICBtb2RhbEJhY2tncm91bmQ6JyMxZjFlMWUnLFxyXG4gICAgICAgIHByaW1hcnlDb2xvcjonIzZiNzVlNCcsXHJcbiAgICAgICAgYnV0dG9uVGV4dDonIzI5MjkyOScsXHJcbiAgICAgICAgdGV4dENvbG9yOicjZGZkZmRmJyxcclxuICAgICAgICBzb2NpYWxCdXR0b25CYWNrZ3JvdW5kOicjYjVjMmNmJ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUgfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2Nzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWQvYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnkvZGV2dG9vbHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==