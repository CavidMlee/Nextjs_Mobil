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
/*! exports provided: Head, Layout, Authcard, ItemCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head */ "./src/components/head.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return _head__WEBPACK_IMPORTED_MODULE_0__["Head"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/components/layout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["Layout"]; });

/* harmony import */ var _ui_authCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/authCard */ "./src/components/ui/authCard.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Authcard", function() { return _ui_authCard__WEBPACK_IMPORTED_MODULE_2__["Authcard"]; });

/* harmony import */ var _ui_itemCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/itemCard */ "./src/components/ui/itemCard.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemCard", function() { return _ui_itemCard__WEBPACK_IMPORTED_MODULE_3__["ItemCard"]; });






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

/***/ "./src/components/ui/itemCard.tsx":
/*!****************************************!*\
  !*** ./src/components/ui/itemCard.tsx ***!
  \****************************************/
/*! exports provided: ItemCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCard", function() { return ItemCard; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Cavid Malikli\\Desktop\\Next js MobileStore\\advertising-phone\\src\\components\\ui\\itemCard.tsx";


const ItemCard = () => {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])(StyledCardContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "imageContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    src: "https://picsum.photos/400/500",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "infoContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "infoTextContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "itemName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "Samsung Galaxy S12"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "itemBaseInfo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "6GB / 128GB / 2019"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "itemAddDate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, "Bak\u0131, 28.01.2021, 16:34")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "infoIconContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "priceContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, "2180\u20BC")))));
};

const StyledCardContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e33b9dt0",
  label: "StyledCardContainer"
})("height:310px;width:250px;box-shadow:0px 10px 20px rgba(0, 0, 0, 0.05);border-radius:10px;background-color:", props => props.theme.colors.cardBackground, ";display:flex;flex-direction:column;overflow:hidden;cursor:pointer;.imageContainer{height:200px;width:100%;overflow:hidden;img{height:200px;width:100%;object-fit:cover;transition:transform .4s;&:hover{transform:scale(1.1);}}}.infoContainer{height:110px;width:100%;display:flex;flex-direction:column;justify-content:space-between;.infoTextContainer{height:80px;width:100%;padding:10px;display:flex;flex-direction:column;justify-content:space-between;font-family:Arimo;font-style:normal;color:", props => props.theme.colors.textColor, ";.itemName{font-weight:bold;font-size:16px;line-height:18px;}.itemBaseInfo{font-weight:normal;font-size:14px;line-height:16px;}.itemAddDate{font-weight:normal;font-size:12px;line-height:14px;opacity:0.5;}}.infoIconContainer{height:30px;width:100%;.priceContainer{height:100%;width:85px;background-color:", props => props.theme.colors.secondaryColor, ";border-radius:0px 9px;display:flex;justify-content:center;align-items:center;span{font-family:Arimo;font-style:normal;font-weight:bold;font-size:16px;line-height:18px;display:flex;align-items:center;color:#FFFFFF;}}}}" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2F2aWQgTWFsaWtsaVxcRGVza3RvcFxcTmV4dCBqcyBNb2JpbGVTdG9yZVxcYWR2ZXJ0aXNpbmctcGhvbmVcXHNyY1xcY29tcG9uZW50c1xcdWlcXGl0ZW1DYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjhDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQ2F2aWQgTWFsaWtsaVxcRGVza3RvcFxcTmV4dCBqcyBNb2JpbGVTdG9yZVxcYWR2ZXJ0aXNpbmctcGhvbmVcXHNyY1xcY29tcG9uZW50c1xcdWlcXGl0ZW1DYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1DYXJkOlJlYWN0LkZDID0oKSA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPFN0eWxlZENhcmRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL3BpY3N1bS5waG90b3MvNDAwLzUwMCcgYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mb1RleHRDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbU5hbWUnPlNhbXN1bmcgR2FsYXh5IFMxMjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9J2l0ZW1CYXNlSW5mbyc+NkdCIC8gMTI4R0IgLyAyMDE5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0naXRlbUFkZERhdGUnPkJha8SxLCAyOC4wMS4yMDIxLCAxNjozNDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvSWNvbkNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmljZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4yMTgw4oK8PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N0eWxlZENhcmRDb250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbnR5cGUgVFByb3BzID17XHJcbiAgICB0aGVtZT86YW55XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZENhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2PFRQcm9wcz5gXHJcbiAgICBoZWlnaHQ6MzEwcHg7XHJcbiAgICB3aWR0aDoyNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmNvbG9ycy5jYXJkQmFja2dyb3VuZH07XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAuaW1hZ2VDb250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OmNvdmVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluZm9Db250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OjExMHB4O1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAuaW5mb1RleHRDb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDo4MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgLy90ZXh0XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmltbztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBjb2xvcjoke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xyXG4gICAgICAgICAgICAuaXRlbU5hbWV7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pdGVtQmFzZUluZm97XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1BZGREYXRle1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvSWNvbkNvbnRhaW5lcntcclxuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIC5wcmljZUNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ODVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeUNvbG9yfTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCA5cHggO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaW1vO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYCJdfQ== */"));

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
    secondaryColor: '#E84C53',
    buttonText: '#FFFFFF',
    textColor: '#000000',
    socialButtonBackground: '#F2F6FA',
    buttonDisable: '#6f7075',
    cardBackground: '#ffffff'
  }
};
const darkTheme = {
  colors: {
    backgroundColor: 'black',
    modalBackground: '#1f1e1e',
    primaryColor: '#6b75e4',
    secondaryColor: '#E84C53',
    buttonText: '#292929',
    textColor: '#dfdfdf',
    socialButtonBackground: '#b5c2cf',
    buttonDisable: '#afafb1',
    cardBackground: '#1f1e1e'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkvYXV0aENhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VpL2l0ZW1DYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy90aGVtZUNvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGhlbWUvdGhlbWVCdWlsZGVyLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZC9iYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5L2RldnRvb2xzXCIiXSwibmFtZXMiOlsicXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwiZGVmYXVsdEtleXdvcmRzIiwiZGVmYXVsdE9HVVJMIiwiZGVmYXVsdE9HSW1hZ2UiLCJIZWFkIiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJ1cmwiLCJvZ0ltYWdlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJkYXJrIiwic2V0RGFyayIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJteVN0eWxlIiwiY3NzIiwiQXV0aGNhcmQiLCJoZWFkZXJUZXh0IiwiZm9vdGVyVGV4dCIsImZvb3RlckZ1bmNUZXh0IiwiZm9vdGVyRnVuYyIsIkNvbnRhaW5lciIsInRoZW1lIiwiY29sb3JzIiwibW9kYWxCYWNrZ3JvdW5kIiwidGV4dENvbG9yIiwicHJpbWFyeUNvbG9yIiwiSXRlbUNhcmQiLCJTdHlsZWRDYXJkQ29udGFpbmVyIiwiY2FyZEJhY2tncm91bmQiLCJzZWNvbmRhcnlDb2xvciIsImNyZWF0ZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwidXNlU3RhdGUiLCJkYXJrVGhlbWUiLCJsaWdodFRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwiYnV0dG9uVGV4dCIsInNvY2lhbEJ1dHRvbkJhY2tncm91bmQiLCJidXR0b25EaXNhYmxlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0NBSUE7OztBQUNBLE1BQU1BLFdBQVcsR0FBRyxJQUFJQyx1REFBSixFQUFwQjs7QUFFQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBbUQ7QUFDakQsU0FDRSwyREFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMkRBQUMsK0NBQUQ7QUFBTSxTQUFLLEVBQUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRSwyREFBQywrREFBRDtBQUFxQixVQUFNLEVBQUVKLFdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwyREFBQyx1RUFBRDtBQUFvQixpQkFBYSxFQUFFLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLDJEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwyREFBQyxTQUFELGVBQWVJLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBRkYsQ0FIRixDQURGO0FBYUQ7O0FBRWNGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBOztBQUVBLE1BQU1HLGtCQUFrQixHQUFHLEVBQTNCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLEVBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVBQXZCO0FBY08sTUFBTUMsSUFBSSxHQUFJQyxLQUFELElBQ2hCLDJEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFNLFNBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBUUEsS0FBSyxDQUFDQyxLQUFOLElBQWUsRUFBdkIsQ0FGSixFQUdJO0FBQU0sTUFBSSxFQUFDLFVBQVg7QUFBc0IsU0FBTyxFQUFDLHFDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSEosRUFJSTtBQUFNLE1BQUksRUFBQyxhQUFYO0FBQXlCLFNBQU8sRUFBRUQsS0FBSyxDQUFDRSxXQUFOLElBQXFCUCxrQkFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUpKLEVBS0k7QUFBTSxNQUFJLEVBQUMsVUFBWDtBQUFzQixTQUFPLEVBQUVLLEtBQUssQ0FBQ0csUUFBTixJQUFrQlAsZUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUxKLEVBTUk7QUFBTSxLQUFHLEVBQUMsTUFBVjtBQUFpQixNQUFJLEVBQUMsV0FBdEI7QUFBa0MsT0FBSyxFQUFDLE9BQXhDO0FBQWdELE1BQUksRUFBQyxxQkFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU5KLEVBT0k7QUFBTSxLQUFHLEVBQUMsTUFBVjtBQUFpQixNQUFJLEVBQUMsV0FBdEI7QUFBa0MsT0FBSyxFQUFDLE9BQXhDO0FBQWdELE1BQUksRUFBQyxxQkFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVBKLEVBUUk7QUFBTSxLQUFHLEVBQUMsZUFBVjtBQUEwQixNQUFJLEVBQUMscUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFSSixFQVNJO0FBQU0sS0FBRyxFQUFDLGtCQUFWO0FBQTZCLE9BQUssRUFBQyxTQUFuQztBQUE2QyxNQUFJLEVBQUMscUJBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFUSixFQVVJO0FBQU0sS0FBRyxFQUFDLFdBQVY7QUFBc0IsTUFBSSxFQUFDLHFCQUEzQjtBQUFpRCxPQUFLLEVBQUMsU0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVZKLEVBV0k7QUFBTSxVQUFRLEVBQUMsUUFBZjtBQUF3QixTQUFPLEVBQUVJLEtBQUssQ0FBQ0ksR0FBTixJQUFhUCxZQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWEosRUFZSTtBQUFNLFVBQVEsRUFBQyxVQUFmO0FBQTBCLFNBQU8sRUFBRUcsS0FBSyxDQUFDQyxLQUFOLElBQWUsRUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVpKLEVBYUk7QUFBTSxVQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsU0FBTyxFQUFFRCxLQUFLLENBQUNFLFdBQU4sSUFBcUJQLGtCQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBYkosRUFjSTtBQUFNLE1BQUksRUFBQyxjQUFYO0FBQTBCLFNBQU8sRUFBRUssS0FBSyxDQUFDSSxHQUFOLElBQWFQLFlBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFkSixFQWVJO0FBQU0sTUFBSSxFQUFDLGNBQVg7QUFBMEIsU0FBTyxFQUFDLHFCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZkosRUFnQkk7QUFBTSxNQUFJLEVBQUMsZUFBWDtBQUEyQixTQUFPLEVBQUVHLEtBQUssQ0FBQ0ssT0FBTixJQUFpQlAsY0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWhCSixFQWlCSTtBQUFNLFVBQVEsRUFBQyxVQUFmO0FBQTBCLFNBQU8sRUFBRUUsS0FBSyxDQUFDSyxPQUFOLElBQWlCUCxjQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBakJKLEVBa0JJO0FBQU0sVUFBUSxFQUFDLGdCQUFmO0FBQWdDLFNBQU8sRUFBQyxNQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBbEJKLEVBbUJJO0FBQU0sVUFBUSxFQUFDLGlCQUFmO0FBQWlDLFNBQU8sRUFBQyxLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBbkJKLENBREcsQzs7Ozs7Ozs7Ozs7O0FDcEJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7QUFPTyxNQUFNUSxNQUF1QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXVCO0FBRTFELFFBQU07QUFBQSxPQUFFQyxJQUFGO0FBQUEsT0FBUUM7QUFBUixNQUF3QkMsd0RBQVUsQ0FBQ0MscURBQUQsQ0FBeEM7QUFFQSxTQUNJLDJEQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLGFBQVMsRUFBRUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUlJO0FBQVEsV0FBTyxFQUFFLE1BQUlILE9BQU8sQ0FBQyxJQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixFQUtJO0FBQVEsV0FBTyxFQUFFLE1BQUlBLE9BQU8sQ0FBQyxLQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBYUQsSUFBSSxHQUFDLE1BQUQsR0FBUSxPQUF6QixDQU5KLENBREosRUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9ELFFBQVAsQ0FUSixFQVVJO0FBQVEsYUFBUyxFQUFFSyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkosQ0FESjtBQWVILENBbkJNO0FBcUJQLE1BQU1BLE9BQU8sZ0JBQUdDLHdEQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7O0FBYU8sTUFBTUMsUUFBeUIsR0FBRyxDQUFDO0FBQUNiLE9BQUQ7QUFBT2MsWUFBUDtBQUFrQlIsVUFBbEI7QUFBMkJTLFlBQTNCO0FBQXNDQyxnQkFBdEM7QUFBcURDO0FBQXJELENBQUQsS0FBcUU7QUFDMUcsU0FDSSwyREFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtqQixLQUFMLENBREosRUFFSTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCYyxVQUE5QixDQUZKLEVBR0tSLFFBSEwsRUFJSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPUyxVQUFQLENBREosRUFFSTtBQUFLLFdBQU8sRUFBRUUsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCRCxjQUEzQixDQUZKLENBSkosQ0FESjtBQVdILENBWk07O0FBa0JQLE1BQU1FLFNBQVMsR0FBRztBQUFIO0FBQUE7QUFBQSx3QkFDUW5CLEtBQUssSUFBRUEsS0FBSyxDQUFDb0IsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxlQURsQyxnS0FZQ3RCLEtBQUssSUFBRUEsS0FBSyxDQUFDb0IsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxTQVozQixpSUFxQkN2QixLQUFLLElBQUVBLEtBQUssQ0FBQ29CLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsU0FyQjNCLCtQQXNDS3ZCLEtBQUssSUFBRUEsS0FBSyxDQUFDb0IsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxTQXRDL0IsbURBMkNLdkIsS0FBSyxJQUFFQSxLQUFLLENBQUNvQixLQUFOLENBQVlDLE1BQVosQ0FBbUJHLFlBM0MvQixpNkdBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTs7QUFLTyxNQUFNQyxRQUFpQixHQUFFLE1BQUs7QUFDakMsU0FDUSwyREFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLCtCQUFUO0FBQXlDLE9BQUcsRUFBQyxFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosRUFFSTtBQUFLLGFBQVMsRUFBRSxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUUsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FISixDQURKLEVBTUk7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLENBREosQ0FOSixDQUpKLENBRFI7QUFtQkgsQ0FwQk07O0FBMEJQLE1BQU1DLG1CQUFtQixHQUFHO0FBQUg7QUFBQTtBQUFBLGlIQUtGMUIsS0FBSyxJQUFFQSxLQUFLLENBQUNvQixLQUFOLENBQVlDLE1BQVosQ0FBbUJNLGNBTHhCLGlmQXdDTDNCLEtBQUssSUFBSUEsS0FBSyxDQUFDb0IsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxTQXhDdkIscVRBZ0VVdkIsS0FBSyxJQUFFQSxLQUFLLENBQUNvQixLQUFOLENBQVlDLE1BQVosQ0FBbUJPLGNBaEVwQyxxaExBQXpCLEM7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBT08sTUFBTWpCLFlBQVksZ0JBQUdrQiwyREFBYSxDQUFDLEVBQUQsQ0FBbEM7QUFFQSxNQUFNQyxhQUErQixHQUFHLENBQUM7QUFBRXZCO0FBQUYsQ0FBRCxLQUFrQjtBQUM3RCxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JzQixzREFBUSxDQUFVLEtBQVYsQ0FBaEM7QUFFQSxTQUNJLDJEQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRSxDQUFFdkIsSUFBRixFQUFRQyxPQUFSLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSwyREFBQyw0REFBRDtBQUFPLFNBQUssRUFBRUQsSUFBSSxHQUFHd0IsbUVBQUgsR0FBZUMsb0VBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSzFCLFFBREwsQ0FESixDQURKO0FBUUgsQ0FYTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hQO0FBQUE7QUFBQTtBQUFBLE1BQU0wQixVQUFrQixHQUFHO0FBQ3ZCWixRQUFNLEVBQUU7QUFDSmEsbUJBQWUsRUFBRSxNQURiO0FBRUpaLG1CQUFlLEVBQUUsU0FGYjtBQUdKRSxnQkFBWSxFQUFDLFNBSFQ7QUFJSkksa0JBQWMsRUFBQyxTQUpYO0FBS0pPLGNBQVUsRUFBQyxTQUxQO0FBTUpaLGFBQVMsRUFBQyxTQU5OO0FBT0phLDBCQUFzQixFQUFDLFNBUG5CO0FBUUpDLGlCQUFhLEVBQUMsU0FSVjtBQVNKVixrQkFBYyxFQUFDO0FBVFg7QUFEZSxDQUEzQjtBQWNBLE1BQU1LLFNBQWlCLEdBQUc7QUFDdEJYLFFBQU0sRUFBRTtBQUNKYSxtQkFBZSxFQUFFLE9BRGI7QUFFSlosbUJBQWUsRUFBQyxTQUZaO0FBR0pFLGdCQUFZLEVBQUMsU0FIVDtBQUlKSSxrQkFBYyxFQUFDLFNBSlg7QUFLSk8sY0FBVSxFQUFDLFNBTFA7QUFNSlosYUFBUyxFQUFDLFNBTk47QUFPSmEsMEJBQXNCLEVBQUMsU0FQbkI7QUFRSkMsaUJBQWEsRUFBQyxTQVJWO0FBU0pWLGtCQUFjLEVBQUM7QUFUWDtBQURjLENBQTFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIC8qLCBBcHBDb250ZXh0ICovIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJy4uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgeyBIZWFkIH0gZnJvbSAnY29tcG9uZW50cyc7XHJcbmltcG9ydCB7XHJcbiAgUXVlcnlDbGllbnQsXHJcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcclxufSBmcm9tICdyZWFjdC1xdWVyeSc7XHJcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gJ3JlYWN0LXF1ZXJ5L2RldnRvb2xzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ2NvbnRleHRzJztcclxuaW1wb3J0ICdyZWFjdC1yZXNwb25zaXZlLW1vZGFsL3N0eWxlcy5jc3MnO1xyXG5cclxuXHJcbi8vIENyZWF0ZSBhIGNsaWVudFxyXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQgdGl0bGU9J1Bob25lcycgLz5cclxuICAgICAgXHJcbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICAgIDxSZWFjdFF1ZXJ5RGV2dG9vbHMgaW5pdGlhbElzT3Blbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgICAgIFxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsImltcG9ydCBOZXh0SGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbiA9IFwiXCI7XHJcbmNvbnN0IGRlZmF1bHRLZXl3b3JkcyA9IFwiXCI7XHJcbmNvbnN0IGRlZmF1bHRPR1VSTCA9IFwiXCI7XHJcbmNvbnN0IGRlZmF1bHRPR0ltYWdlID0gXCJcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBkZWZhdWx0RGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICBkZWZhdWx0S2V5d29yZHM/OiBzdHJpbmc7XHJcbiAgICBkZWZhdWx0T0dVUkw/OiBzdHJpbmc7XHJcbiAgICBkZWZhdWx0T0dJbWFnZT86IHN0cmluZztcclxuICAgIHRpdGxlPzpzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86c3RyaW5nO1xyXG4gICAga2V5d29yZHM/OnN0cmluZztcclxuICAgIHVybD86c3RyaW5nO1xyXG4gICAgb2dJbWFnZT86YW55O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZCA9IChwcm9wczpQcm9wcykgPT4gKFxyXG4gICAgPE5leHRIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPntwcm9wcy50aXRsZSB8fCBcIlwifTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbiB8fCBkZWZhdWx0RGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17cHJvcHMua2V5d29yZHMgfHwgZGVmYXVsdEtleXdvcmRzfSAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uc3ZnXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLnN2Z1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uc3ZnXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5zdmdcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgY29sb3I9XCIjMDAwMDAwXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3Byb3BzLnVybCB8fCBkZWZhdWx0T0dVUkx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLnRpdGxlIHx8IFwiXCJ9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9uIHx8IGRlZmF1bHREZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD17cHJvcHMudXJsIHx8IGRlZmF1bHRPR1VSTH0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17cHJvcHMub2dJbWFnZSB8fCBkZWZhdWx0T0dJbWFnZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cHJvcHMub2dJbWFnZSB8fCBkZWZhdWx0T0dJbWFnZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjEyMDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYzMFwiIC8+XHJcbiAgICA8L05leHRIZWFkPlxyXG4pO1xyXG5cclxuIiwiZXhwb3J0IHsgSGVhZCB9IGZyb20gJy4vaGVhZCc7XHJcbmV4cG9ydCB7IExheW91dCB9IGZyb20gJy4vbGF5b3V0JztcclxuZXhwb3J0IHsgQXV0aGNhcmQgfSBmcm9tICcuL3VpL2F1dGhDYXJkJ1xyXG5leHBvcnQgeyBJdGVtQ2FyZCB9IGZyb20gJy4vdWkvaXRlbUNhcmQnOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgUmVhY3RDaGlsZCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnY29udGV4dHMnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBKU1guRWxlbWVudFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiB7XHJcblxyXG4gICAgY29uc3QgWyBkYXJrLCBzZXREYXJrIF06YW55ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17bXlTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIEhlYWRlclxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXREYXJrKHRydWUpfT5EYXJrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXREYXJrKGZhbHNlKX0+TGlnaHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlRoZW1lOntkYXJrPydkYXJrJzonbGlnaHQnfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtteVN0eWxlfT5Gb290ZXI8L2Zvb3Rlcj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbXlTdHlsZSA9IGNzc2BcclxuICBoZWlnaHQ6MTB2aDtcclxuICB3aWR0aDoxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDFjMWQ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcblxyXG5pbnRlcmZhY2UgSVByb3Bze1xyXG4gICAgdGl0bGU/OnN0cmluZyxcclxuICAgIGhlYWRlclRleHQ/OnN0cmluZyxcclxuICAgIGNoaWxkcmVuOlJlYWN0LlJlYWN0Tm9kZSxcclxuICAgIGZvb3RlclRleHQ/OnN0cmluZyxcclxuICAgIGZvb3RlckZ1bmNUZXh0PzpzdHJpbmcsXHJcbiAgICBmb290ZXJGdW5jPzooKT0+dm9pZCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhjYXJkOlJlYWN0LkZDPElQcm9wcz4gPSAoe3RpdGxlLGhlYWRlclRleHQsY2hpbGRyZW4sZm9vdGVyVGV4dCxmb290ZXJGdW5jVGV4dCxmb290ZXJGdW5jfSkgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlYWRlclRleHQnPntoZWFkZXJUZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntmb290ZXJUZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Zm9vdGVyRnVuY30+e2Zvb3RlckZ1bmNUZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxudHlwZSBUUHJvcHMgPSB7XHJcbiAgICB0aGVtZT86IGFueTtcclxuICB9XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PFRQcm9wcz5gXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmNvbG9ycy5tb2RhbEJhY2tncm91bmR9O1xyXG4gICAgd2lkdGg6NDAwcHg7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmltbztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyVGV4dHtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpbW87XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyQ29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaW1vO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5Q29sb3J9O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgSXRlbUNhcmQ6UmVhY3QuRkMgPSgpID0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FyZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vcGljc3VtLnBob3Rvcy80MDAvNTAwJyBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvVGV4dENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtTmFtZSc+U2Ftc3VuZyBHYWxheHkgUzEyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0naXRlbUJhc2VJbmZvJz42R0IgLyAxMjhHQiAvIDIwMTk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSdpdGVtQWRkRGF0ZSc+QmFrxLEsIDI4LjAxLjIwMjEsIDE2OjM0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm9JY29uQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaWNlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjIxODDigrw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkQ2FyZENvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxudHlwZSBUUHJvcHMgPXtcclxuICAgIHRoZW1lPzphbnlcclxufVxyXG5cclxuY29uc3QgU3R5bGVkQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXY8VFByb3BzPmBcclxuICAgIGhlaWdodDozMTBweDtcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUuY29sb3JzLmNhcmRCYWNrZ3JvdW5kfTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC5pbWFnZUNvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6Y292ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHM7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mb0NvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6MTEwcHg7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC5pbmZvVGV4dENvbnRhaW5lcntcclxuICAgICAgICAgICAgaGVpZ2h0OjgwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAvL3RleHRcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaW1vO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGNvbG9yOiR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHRDb2xvcn07XHJcbiAgICAgICAgICAgIC5pdGVtTmFtZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1CYXNlSW5mb3tcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbUFkZERhdGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm9JY29uQ29udGFpbmVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgLnByaWNlQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo4NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5Q29sb3J9O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDlweCA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpbW87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gIiwiZXhwb3J0IHtUaGVtZUNvbnRleHQsIFRoZW1lUHJvdmlkZXJ9IGZyb20gJy4vdGhlbWVDb250ZXh0JyIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciBhcyBUaGVtZSB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5pbXBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUgfSBmcm9tICdzdHlsZXMvdGhlbWUvdGhlbWVCdWlsZGVyJ1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogSlNYLkVsZW1lbnRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZVByb3ZpZGVyOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhcmssIHNldERhcmtdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbIGRhcmssIHNldERhcmsgXX0gPlxyXG4gICAgICAgICAgICA8VGhlbWUgdGhlbWU9e2RhcmsgPyBkYXJrVGhlbWUgOiBsaWdodFRoZW1lfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9UaGVtZT5cclxuXHJcbiAgICAgICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuIiwiY29uc3QgbGlnaHRUaGVtZTogT2JqZWN0ID0ge1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JleScsXHJcbiAgICAgICAgbW9kYWxCYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgcHJpbWFyeUNvbG9yOicjNDI1NEYzJyxcclxuICAgICAgICBzZWNvbmRhcnlDb2xvcjonI0U4NEM1MycsXHJcbiAgICAgICAgYnV0dG9uVGV4dDonI0ZGRkZGRicsXHJcbiAgICAgICAgdGV4dENvbG9yOicjMDAwMDAwJyxcclxuICAgICAgICBzb2NpYWxCdXR0b25CYWNrZ3JvdW5kOicjRjJGNkZBJyxcclxuICAgICAgICBidXR0b25EaXNhYmxlOicjNmY3MDc1JyxcclxuICAgICAgICBjYXJkQmFja2dyb3VuZDonI2ZmZmZmZicsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRhcmtUaGVtZTogT2JqZWN0ID0ge1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIG1vZGFsQmFja2dyb3VuZDonIzFmMWUxZScsXHJcbiAgICAgICAgcHJpbWFyeUNvbG9yOicjNmI3NWU0JyxcclxuICAgICAgICBzZWNvbmRhcnlDb2xvcjonI0U4NEM1MycsXHJcbiAgICAgICAgYnV0dG9uVGV4dDonIzI5MjkyOScsXHJcbiAgICAgICAgdGV4dENvbG9yOicjZGZkZmRmJyxcclxuICAgICAgICBzb2NpYWxCdXR0b25CYWNrZ3JvdW5kOicjYjVjMmNmJyxcclxuICAgICAgICBidXR0b25EaXNhYmxlOicjYWZhZmIxJyxcclxuICAgICAgICBjYXJkQmFja2dyb3VuZDonIzFmMWUxZScsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxpZ2h0VGhlbWUsIGRhcmtUaGVtZSB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY3NzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZC9iYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeS9kZXZ0b29sc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9