"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatechrome_recorder_ff"]("recorder",{

/***/ "./app/components/announcements/index.tsx":
/*!************************************************!*\
  !*** ./app/components/announcements/index.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Users_alichishti_Desktop_rb_extension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../containers/styles.css */ \"./app/containers/styles.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ \"./app/hooks/index.ts\");\n/* harmony import */ var _subHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../subHeader */ \"./app/components/subHeader/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alichishti/Desktop/rb-extension/app/components/announcements/index.tsx\";\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nvar Announcements = function Announcements() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      _useState2 = (0,_Users_alichishti_Desktop_rb_extension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      announcements = _useState2[0],\n      setAnnouncements = _useState2[1];\n\n  var _useAnnouncements = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAnnouncements)(),\n      _useAnnouncements$res = _useAnnouncements.res,\n      loading = _useAnnouncements$res.loading,\n      data = _useAnnouncements$res.data;\n\n  var getAnnouncementBox = function getAnnouncementBox(element, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n      key: \"Announcement\".concat(index),\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_containers_styles_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].announcementBox),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 5\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }\n    }, element.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }\n    }, element.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }\n    }, element.date));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (!loading && data) {\n      console.log(data);\n      setAnnouncements(data);\n    }\n  }, [data]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_containers_styles_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mainPanel),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_subHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    image: \"/images/notification.png\",\n    heading: \"News & Updates\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, announcements.map(function (data, index) {\n    return getAnnouncementBox(data, index);\n  })));\n};\n\n__signature__(Announcements, \"useState{[announcements, setAnnouncements]([])}\\nuseAnnouncements{{\\n    res: { loading, data },\\n  }}\\nuseEffect{}\", function () {\n  return [_hooks__WEBPACK_IMPORTED_MODULE_4__.useAnnouncements];\n});\n\nvar _default = Announcements;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\nvoid function register() {\n  /* react-hot-loader/webpack */\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"] : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n  /* eslint-disable camelcase, no-undef */\n\n\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;\n  /* eslint-enable camelcase, no-undef */\n\n  if (!webpackExports) {\n    return;\n  }\n\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"/Users/alichishti/Desktop/rb-extension/app/components/announcements/index.tsx\");\n    return;\n  }\n  /* eslint-disable no-restricted-syntax */\n\n\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */\n    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n\n    var namedExport = void 0;\n\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n\n    reactHotLoader.register(namedExport, key, \"/Users/alichishti/Desktop/rb-extension/app/components/announcements/index.tsx\");\n  }\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Announcements, \"Announcements\", \"/Users/alichishti/Desktop/rb-extension/app/components/announcements/index.tsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/alichishti/Desktop/rb-extension/app/components/announcements/index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9hbm5vdW5jZW1lbnRzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBOztBQTVCQTtBQUlBOzs7QUF5QkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBN0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLXJlY29yZGVyLWZmLy4vYXBwL2NvbXBvbmVudHMvYW5ub3VuY2VtZW50cy9pbmRleC50c3g/NWRjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4vLi4vLi4vY29udGFpbmVycy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElBbm5vdW5jZW1lbnQsIHVzZUFubm91bmNlbWVudHMgfSBmcm9tIFwiLi4vLi4vaG9va3NcIjtcbmltcG9ydCBTdWJIZWFkZXIgZnJvbSBcIi4uL3N1YkhlYWRlclwiO1xuXG5jb25zdCBBbm5vdW5jZW1lbnRzOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW2Fubm91bmNlbWVudHMsIHNldEFubm91bmNlbWVudHNdID0gdXNlU3RhdGU8QXJyYXk8SUFubm91bmNlbWVudD4+KFtdKTtcbiAgY29uc3Qge1xuICAgIHJlczogeyBsb2FkaW5nLCBkYXRhIH0sXG4gIH0gPSB1c2VBbm5vdW5jZW1lbnRzKCk7XG5cbiAgY29uc3QgZ2V0QW5ub3VuY2VtZW50Qm94ID0gKGVsZW1lbnQ6IElBbm5vdW5jZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICA8ZGl2IGtleT17YEFubm91bmNlbWVudCR7aW5kZXh9YH0gY2xhc3NOYW1lPXtjbihjc3MuYW5ub3VuY2VtZW50Qm94KX0+XG4gICAgICA8cD57ZWxlbWVudC50eXBlfTwvcD5cbiAgICAgIDxwPntlbGVtZW50Lm5hbWV9PC9wPlxuICAgICAgPHA+e2VsZW1lbnQuZGF0ZX08L3A+XG4gICAgPC9kaXY+XG4gICk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2FkaW5nICYmIGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgc2V0QW5ub3VuY2VtZW50cyhkYXRhKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oY3NzLm1haW5QYW5lbCl9PlxuICAgICAgPFN1YkhlYWRlciBpbWFnZT1cIi9pbWFnZXMvbm90aWZpY2F0aW9uLnBuZ1wiIGhlYWRpbmc9XCJOZXdzICYgVXBkYXRlc1wiIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICB7YW5ub3VuY2VtZW50cy5tYXAoKGRhdGEsIGluZGV4KSA9PiBnZXRBbm5vdW5jZW1lbnRCb3goZGF0YSwgaW5kZXgpKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFubm91bmNlbWVudHM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/announcements/index.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d289aa0f40f8db4fb0a8")
/******/ })();
/******/ 
/******/ }
);