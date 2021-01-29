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
/*! exports provided: Head, Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head */ "./src/components/head.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return _head__WEBPACK_IMPORTED_MODULE_0__["Head"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/components/layout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_1__["Layout"]; });




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
    dark,
    setDark
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
  }, "Header")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("main", {
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2F2aWQgTWFsaWtsaVxcRGVza3RvcFxcTmV4dCBqcyBNb2JpbGVTdG9yZVxcYWR2ZXJ0aXNpbmctcGhvbmVcXHNyY1xcY29tcG9uZW50c1xcbGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Qm1CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQ2F2aWQgTWFsaWtsaVxcRGVza3RvcFxcTmV4dCBqcyBNb2JpbGVTdG9yZVxcYWR2ZXJ0aXNpbmctcGhvbmVcXHNyY1xcY29tcG9uZW50c1xcbGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgUmVhY3RDaGlsZCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnY29udGV4dHMnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBKU1guRWxlbWVudFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBkYXJrLCBzZXREYXJrIH06YW55ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17bXlTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIEhlYWRlclxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNoYW5nZT17KCk9PnNldERhcmsodHJ1ZSl9PkRhcms8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DaGFuZ2U9eygpPT5zZXREYXJrKGZhbHNlKX0+TGlnaHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntkYXJrPydkYXJrJzonbGlnaHQnfTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17bXlTdHlsZX0+Rm9vdGVyPC9mb290ZXI+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IG15U3R5bGUgPSBjc3NgXHJcbiAgaGVpZ2h0OjEwdmg7XHJcbiAgd2lkdGg6MTAwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMWQxYzFkO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuYFxyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ThemeContext.Provider, {
    value: {
      dark,
      setDark
    },
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
    inputText: '#000000'
  }
};
const darkTheme = {
  colors: {
    backgroundColor: 'black',
    modalBackground: 'black',
    primaryColor: '#b6bcf8',
    buttonText: '#292929',
    inputText: '#f1f1f1'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvdGhlbWVDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lL3RoZW1lQnVpbGRlci50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY3NzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcXVlcnkvZGV2dG9vbHNcIiJdLCJuYW1lcyI6WyJxdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJkZWZhdWx0S2V5d29yZHMiLCJkZWZhdWx0T0dVUkwiLCJkZWZhdWx0T0dJbWFnZSIsIkhlYWQiLCJwcm9wcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInVybCIsIm9nSW1hZ2UiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRhcmsiLCJzZXREYXJrIiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIm15U3R5bGUiLCJjc3MiLCJjcmVhdGVDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsInVzZVN0YXRlIiwiZGFya1RoZW1lIiwibGlnaHRUaGVtZSIsImNvbG9ycyIsImJhY2tncm91bmRDb2xvciIsIm1vZGFsQmFja2dyb3VuZCIsInByaW1hcnlDb2xvciIsImJ1dHRvblRleHQiLCJpbnB1dFRleHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Q0FJQTs7O0FBQ0EsTUFBTUEsV0FBVyxHQUFHLElBQUlDLHVEQUFKLEVBQXBCOztBQUVBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUFtRDtBQUNqRCxTQUNFLDJEQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwyREFBQywrQ0FBRDtBQUFNLFNBQUss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O0FBUUgsQ0FYTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hQO0FBQUE7QUFBQTtBQUFBLE1BQU1XLFVBQWtCLEdBQUc7QUFDdkJDLFFBQU0sRUFBRTtBQUNKQyxtQkFBZSxFQUFFLE1BRGI7QUFFSkMsbUJBQWUsRUFBRSxTQUZiO0FBR0pDLGdCQUFZLEVBQUMsU0FIVDtBQUlKQyxjQUFVLEVBQUMsU0FKUDtBQUtKQyxhQUFTLEVBQUM7QUFMTjtBQURlLENBQTNCO0FBVUEsTUFBTVAsU0FBaUIsR0FBRztBQUN0QkUsUUFBTSxFQUFFO0FBQ0pDLG1CQUFlLEVBQUUsT0FEYjtBQUVKQyxtQkFBZSxFQUFDLE9BRlo7QUFHSkMsZ0JBQVksRUFBQyxTQUhUO0FBSUpDLGNBQVUsRUFBQyxTQUpQO0FBS0pDLGFBQVMsRUFBQztBQUxOO0FBRGMsQ0FBMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLHlDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgLyosIEFwcENvbnRleHQgKi8gfSBmcm9tICduZXh0L2FwcCc7XHJcbi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnLi4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IEhlYWQgfSBmcm9tICdjb21wb25lbnRzJztcclxuaW1wb3J0IHtcclxuICBRdWVyeUNsaWVudCxcclxuICBRdWVyeUNsaWVudFByb3ZpZGVyLFxyXG59IGZyb20gJ3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IHsgUmVhY3RRdWVyeURldnRvb2xzIH0gZnJvbSAncmVhY3QtcXVlcnkvZGV2dG9vbHMnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnY29udGV4dHMnO1xyXG5pbXBvcnQgJ3JlYWN0LXJlc3BvbnNpdmUtbW9kYWwvc3R5bGVzLmNzcyc7XHJcblxyXG5cclxuLy8gQ3JlYXRlIGEgY2xpZW50XHJcbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KClcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZCB0aXRsZT0nUGhvbmVzJyAvPlxyXG4gICAgICBcclxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XHJcbiAgICAgICAgPFJlYWN0UXVlcnlEZXZ0b29scyBpbml0aWFsSXNPcGVuPXtmYWxzZX0gLz5cclxuICAgICAgICA8VGhlbWVQcm92aWRlcj5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICAgICAgXHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiaW1wb3J0IE5leHRIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uID0gXCJcIjtcclxuY29uc3QgZGVmYXVsdEtleXdvcmRzID0gXCJcIjtcclxuY29uc3QgZGVmYXVsdE9HVVJMID0gXCJcIjtcclxuY29uc3QgZGVmYXVsdE9HSW1hZ2UgPSBcIlwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGRlZmF1bHREZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgIGRlZmF1bHRLZXl3b3Jkcz86IHN0cmluZztcclxuICAgIGRlZmF1bHRPR1VSTD86IHN0cmluZztcclxuICAgIGRlZmF1bHRPR0ltYWdlPzogc3RyaW5nO1xyXG4gICAgdGl0bGU/OnN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzpzdHJpbmc7XHJcbiAgICBrZXl3b3Jkcz86c3RyaW5nO1xyXG4gICAgdXJsPzpzdHJpbmc7XHJcbiAgICBvZ0ltYWdlPzphbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkID0gKHByb3BzOlByb3BzKSA9PiAoXHJcbiAgICA8TmV4dEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICA8dGl0bGU+e3Byb3BzLnRpdGxlIHx8IFwiXCJ9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9uIHx8IGRlZmF1bHREZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtwcm9wcy5rZXl3b3JkcyB8fCBkZWZhdWx0S2V5d29yZHN9IC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5zdmdcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uc3ZnXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5zdmdcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLnN2Z1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiBjb2xvcj1cIiMwMDAwMDBcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17cHJvcHMudXJsIHx8IGRlZmF1bHRPR1VSTH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHJvcHMudGl0bGUgfHwgXCJcIn0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXtwcm9wcy51cmwgfHwgZGVmYXVsdE9HVVJMfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtwcm9wcy5vZ0ltYWdlIHx8IGRlZmF1bHRPR0ltYWdlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwcm9wcy5vZ0ltYWdlIHx8IGRlZmF1bHRPR0ltYWdlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTIwMFwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiNjMwXCIgLz5cclxuICAgIDwvTmV4dEhlYWQ+XHJcbik7XHJcblxyXG4iLCJleHBvcnQge0hlYWR9IGZyb20gJy4vaGVhZCc7XHJcbmV4cG9ydCB7TGF5b3V0fSBmcm9tICcuL2xheW91dCc7IiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBSZWFjdENoaWxkLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICdjb250ZXh0cyc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGRhcmssIHNldERhcmsgfTphbnkgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtteVN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgSGVhZGVyXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2hhbmdlPXsoKT0+c2V0RGFyayh0cnVlKX0+RGFyazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNoYW5nZT17KCk9PnNldERhcmsoZmFsc2UpfT5MaWdodDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2Rhcms/J2RhcmsnOidsaWdodCd9PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtteVN0eWxlfT5Gb290ZXI8L2Zvb3Rlcj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbXlTdHlsZSA9IGNzc2BcclxuICBoZWlnaHQ6MTB2aDtcclxuICB3aWR0aDoxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDFjMWQ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5gXHJcbiIsImV4cG9ydCB7VGhlbWVDb250ZXh0LCBUaGVtZVByb3ZpZGVyfSBmcm9tICcuL3RoZW1lQ29udGV4dCciLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgYXMgVGhlbWUgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuaW1wb3J0IHsgbGlnaHRUaGVtZSwgZGFya1RoZW1lIH0gZnJvbSAnc3R5bGVzL3RoZW1lL3RoZW1lQnVpbGRlcidcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlcjogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtkYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGRhcmssIHNldERhcmsgfX0gPlxyXG4gICAgICAgICAgICA8VGhlbWUgdGhlbWU9e2RhcmsgPyBkYXJrVGhlbWUgOiBsaWdodFRoZW1lfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9UaGVtZT5cclxuXHJcbiAgICAgICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuIiwiY29uc3QgbGlnaHRUaGVtZTogT2JqZWN0ID0ge1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JleScsXHJcbiAgICAgICAgbW9kYWxCYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgcHJpbWFyeUNvbG9yOicjNDI1NEYzJyxcclxuICAgICAgICBidXR0b25UZXh0OicjRkZGRkZGJyxcclxuICAgICAgICBpbnB1dFRleHQ6JyMwMDAwMDAnXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRhcmtUaGVtZTogT2JqZWN0ID0ge1xyXG4gICAgY29sb3JzOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIG1vZGFsQmFja2dyb3VuZDonYmxhY2snLFxyXG4gICAgICAgIHByaW1hcnlDb2xvcjonI2I2YmNmOCcsXHJcbiAgICAgICAgYnV0dG9uVGV4dDonIzI5MjkyOScsXHJcbiAgICAgICAgaW5wdXRUZXh0OicjZjFmMWYxJ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUgfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2Nzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnkvZGV2dG9vbHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==