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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Users_alichishti_Desktop_rb_extension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../containers/styles.css */ \"./app/containers/styles.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ \"./app/hooks/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alichishti/Desktop/rb-extension/app/components/announcements/index.tsx\";\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nvar Announcements = function Announcements() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      _useState2 = (0,_Users_alichishti_Desktop_rb_extension_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      announcements = _useState2[0],\n      setAnnouncements = _useState2[1];\n\n  var _useAnnouncements = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useAnnouncements)(),\n      _useAnnouncements$res = _useAnnouncements.res,\n      loading = _useAnnouncements$res.loading,\n      data = _useAnnouncements$res.data;\n\n  var getAnnouncementBox = function getAnnouncementBox(element, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n      key: \"Announcement\".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 5\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, element.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }\n    }, element.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }\n    }, element.date));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (!loading && data) {\n      console.log(data);\n      setAnnouncements(data);\n    }\n  }, [data]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_containers_styles_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mainPanel),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_containers_styles_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].heading),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"img\", {\n    src: \"images/notification.png\",\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_containers_styles_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].headingImage),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"span\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_containers_styles_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].headingText),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"News \", \"&\", \" Updates\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, announcements.map(function (data, index) {\n    return getAnnouncementBox(data, index);\n  })));\n};\n\n__signature__(Announcements, \"useState{[announcements, setAnnouncements]([])}\\nuseAnnouncements{{\\n    res: { loading, data },\\n  }}\\nuseEffect{}\", function () {\n  return [_hooks__WEBPACK_IMPORTED_MODULE_4__.useAnnouncements];\n});\n\nvar _default = Announcements;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\nvoid function register() {\n  /* react-hot-loader/webpack */\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"] : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n  /* eslint-disable camelcase, no-undef */\n\n\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;\n  /* eslint-enable camelcase, no-undef */\n\n  if (!webpackExports) {\n    return;\n  }\n\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"/Users/alichishti/Desktop/rb-extension/app/components/announcements/index.tsx\");\n    return;\n  }\n  /* eslint-disable no-restricted-syntax */\n\n\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */\n    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n\n    var namedExport = void 0;\n\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n\n    reactHotLoader.register(namedExport, key, \"/Users/alichishti/Desktop/rb-extension/app/components/announcements/index.tsx\");\n  }\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Announcements, \"Announcements\", \"/Users/alichishti/Desktop/rb-extension/app/components/announcements/index.tsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/alichishti/Desktop/rb-extension/app/components/announcements/index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9hbm5vdW5jZW1lbnRzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTs7QUFuQ0E7QUFJQTs7O0FBZ0NBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXBDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1yZWNvcmRlci1mZi8uL2FwcC9jb21wb25lbnRzL2Fubm91bmNlbWVudHMvaW5kZXgudHN4PzVkY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLy4uLy4uL2NvbnRhaW5lcnMvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQW5ub3VuY2VtZW50LCB1c2VBbm5vdW5jZW1lbnRzIH0gZnJvbSBcIi4uLy4uL2hvb2tzXCI7XG5cbmNvbnN0IEFubm91bmNlbWVudHM6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbYW5ub3VuY2VtZW50cywgc2V0QW5ub3VuY2VtZW50c10gPSB1c2VTdGF0ZTxBcnJheTxJQW5ub3VuY2VtZW50Pj4oW10pO1xuICBjb25zdCB7XG4gICAgcmVzOiB7IGxvYWRpbmcsIGRhdGEgfSxcbiAgfSA9IHVzZUFubm91bmNlbWVudHMoKTtcblxuICBjb25zdCBnZXRBbm5vdW5jZW1lbnRCb3ggPSAoZWxlbWVudDogSUFubm91bmNlbWVudCwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgIDxkaXYga2V5PXtgQW5ub3VuY2VtZW50JHtpbmRleH1gfT5cbiAgICAgIDxwPntlbGVtZW50LnR5cGV9PC9wPlxuICAgICAgPHA+e2VsZW1lbnQubmFtZX08L3A+XG4gICAgICA8cD57ZWxlbWVudC5kYXRlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxvYWRpbmcgJiYgZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBzZXRBbm5vdW5jZW1lbnRzKGRhdGEpO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihjc3MubWFpblBhbmVsKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oY3NzLmhlYWRpbmcpfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9ub3RpZmljYXRpb24ucG5nXCIgY2xhc3NOYW1lPXtjbihjc3MuaGVhZGluZ0ltYWdlKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbihjc3MuaGVhZGluZ1RleHQpfT5OZXdzIHtcIiZcIn0gVXBkYXRlczwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHthbm5vdW5jZW1lbnRzLm1hcCgoZGF0YSwgaW5kZXgpID0+IGdldEFubm91bmNlbWVudEJveChkYXRhLCBpbmRleCkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQW5ub3VuY2VtZW50cztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/announcements/index.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("43280701e92a0699dc2f")
/******/ })();
/******/ 
/******/ }
);