"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider */ \"(app-pages-browser)/./components/Slider.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst ProjectsComp = (param)=>{\n    let { projects } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-8 h-screen\",\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"pl-20 pt-20 text-3xl\",\n                children: \"OUR PROJECTS\"\n            }, void 0, false, {\n                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Projects.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: projects.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                    projectsToDisplay: projects\n                }, void 0, false, {\n                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Projects.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 25\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No projects to display\"\n                }, void 0, false, {\n                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Projects.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Projects.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Projects.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_c = ProjectsComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsComp);\nvar _c;\n$RefreshReg$(_c, \"ProjectsComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUVpRDtBQUNmO0FBT2xDLE1BQU1FLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQVE7SUFHcEMscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7UUFBZ0JDLElBQUc7OzBCQUM5Qiw4REFBQ0M7Z0JBQUdGLFdBQVU7MEJBQXVCOzs7Ozs7MEJBQ3JDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFFUEYsU0FBU0ssTUFBTSxHQUFHLGtCQUNkLDhEQUFDUCwyQ0FBTUE7b0JBQUNRLG1CQUFtQk47Ozs7OzhDQUUvQiw4REFBQ087OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZCO0tBakJNUjtBQW1CTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeD9mM2Y4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IGdldEFsbFByb2plY3RzIGZyb20gJ0AvQVBJL2dldEFsbFByb2plY3RzJztcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJy4vU2xpZGVyJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICdAL3NyYy90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgcHJvamVjdHM6IFByb2plY3RbXVxufVxuXG5jb25zdCBQcm9qZWN0c0NvbXAgPSAoeyBwcm9qZWN0cyB9OlByb3BzKSA9PiB7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS04IGgtc2NyZWVuJyBpZD0ncHJvamVjdHMnPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ncGwtMjAgcHQtMjAgdGV4dC0zeGwnPk9VUiBQUk9KRUNUUzwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgcHJvamVjdHNUb0Rpc3BsYXk9e3Byb2plY3RzfS8+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPHA+Tm8gcHJvamVjdHMgdG8gZGlzcGxheTwvcD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNDb21wO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTbGlkZXIiLCJQcm9qZWN0c0NvbXAiLCJwcm9qZWN0cyIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaDEiLCJsZW5ndGgiLCJwcm9qZWN0c1RvRGlzcGxheSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Projects.tsx\n"));

/***/ })

});