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

/***/ "(app-pages-browser)/./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Nav = ()=>{\n    _s();\n    const [openMenu, setOpenMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>{\n        setOpenMenu(!openMenu);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(openMenu ? \"menuIsOpen \" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute top-20 left-20 z-20 text-white hover:bg-[#00000088] duration-500 p-2 2xl:text-black 2xl:hover:bg-[#00000055]\",\n                onClick: toggleMenu,\n                children: \"MENU\"\n            }, void 0, false, {\n                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-full flex justify-around items-center fixed menu top-0 left-0 z-20 p-10 -translate-x-full bg-white duration-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"absolute top-20 left-20 z-20 hover:bg-[#00000050] duration-500 p-2\",\n                        onClick: toggleMenu,\n                        children: \"CLOSE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"w-[350px] flex justify-center items-center flex-col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"\",\n                                        children: \"HOME\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 46\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#projects\",\n                                        onClick: toggleMenu,\n                                        children: \"PROJECTS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 46\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#about\",\n                                        onClick: toggleMenu,\n                                        children: \"ABOUT\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 46\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#contact\",\n                                        onClick: toggleMenu,\n                                        children: \"CONTACT\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 46\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-400 h-[580px] w-[325px]\",\n                                style: {\n                                    backgroundImage: \"url(/assets/images/menu-1.png)\",\n                                    backgroundPosition: \"center\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-400 h-[580px] w-[325px] translate-y-6\",\n                                style: {\n                                    backgroundImage: \"url(/assets/images/menu-2.png)\",\n                                    backgroundPosition: \"center\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-400 h-[580px] w-[325px]\",\n                                style: {\n                                    backgroundImage: \"url(/assets/images/menu-3.png)\",\n                                    backgroundPosition: \"center\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Nav.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Nav, \"qV1mtfM2fjcqS+QRhZwG0vvhG2w=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDd0M7QUFFeEMsTUFBTUUsTUFBTTs7SUFFWixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFFekMsTUFBTUksYUFBYTtRQUNmRCxZQUFZLENBQUNEO0lBQ2pCO0lBRUkscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVcsR0FBaUMsT0FBOUJKLFdBQVcsZ0JBQWdCOzswQkFDMUMsOERBQUNLO2dCQUFPRCxXQUFVO2dCQUF3SEUsU0FBU0o7MEJBQVk7Ozs7OzswQkFHL0osOERBQUNDO2dCQUFJQyxXQUFZOztrQ0FDYiw4REFBQ0M7d0JBQU9ELFdBQVU7d0JBQXFFRSxTQUFTSjtrQ0FBWTs7Ozs7O2tDQUc1Ryw4REFBQ0s7d0JBQUlILFdBQVU7a0NBQ1gsNEVBQUNJOzs4Q0FDRyw4REFBQ0M7b0NBQUdMLFdBQVU7OENBQU8sNEVBQUNNO3dDQUFFQyxNQUFLO2tEQUFHOzs7Ozs7Ozs7Ozs4Q0FDaEMsOERBQUNGO29DQUFHTCxXQUFVOzhDQUFPLDRFQUFDTTt3Q0FBRUMsTUFBSzt3Q0FBWUwsU0FBU0o7a0RBQVk7Ozs7Ozs7Ozs7OzhDQUM5RCw4REFBQ087b0NBQUdMLFdBQVU7OENBQU8sNEVBQUNNO3dDQUFFQyxNQUFLO3dDQUFTTCxTQUFTSjtrREFBWTs7Ozs7Ozs7Ozs7OENBQzNELDhEQUFDTztvQ0FBR0wsV0FBVTs4Q0FBTyw0RUFBQ007d0NBQUVDLE1BQUs7d0NBQVdMLFNBQVNKO2tEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdyRSw4REFBQ0M7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FDREMsV0FBVTtnQ0FDVlEsT0FBTztvQ0FDSEMsaUJBQWlCO29DQUNqQkMsb0JBQW9CO2dDQUN4Qjs7Ozs7OzBDQUVBLDhEQUFDWDtnQ0FBSUMsV0FBVTtnQ0FDZlEsT0FBTztvQ0FDSEMsaUJBQWlCO29DQUNqQkMsb0JBQW9CO2dDQUV4Qjs7Ozs7OzBDQUVBLDhEQUFDWDtnQ0FBSUMsV0FBVTtnQ0FDZlEsT0FBTztvQ0FDSEMsaUJBQWlCO29DQUNqQkMsb0JBQW9CO2dDQUV4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BCO0dBcERNZjtLQUFBQTtBQXNETiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi50c3g/ZTYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuXG5jb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBzZXRPcGVuTWVudSghb3Blbk1lbnUpXG59XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7b3Blbk1lbnUgPyAnbWVudUlzT3BlbiAnIDogJyd9YH0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTIwIGxlZnQtMjAgei0yMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLVsjMDAwMDAwODhdIGR1cmF0aW9uLTUwMCBwLTIgMnhsOnRleHQtYmxhY2sgMnhsOmhvdmVyOmJnLVsjMDAwMDAwNTVdJyBvbkNsaWNrPXt0b2dnbGVNZW51fT5cbiAgICAgICAgICAgICAgICBNRU5VXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC1zY3JlZW4gdy1mdWxsIGZsZXgganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIGZpeGVkIG1lbnUgdG9wLTAgbGVmdC0wIHotMjAgcC0xMCAtdHJhbnNsYXRlLXgtZnVsbCBiZy13aGl0ZSBkdXJhdGlvbi03MDBgfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTIwIGxlZnQtMjAgei0yMCBob3ZlcjpiZy1bIzAwMDAwMDUwXSBkdXJhdGlvbi01MDAgcC0yJyBvbkNsaWNrPXt0b2dnbGVNZW51fT5cbiAgICAgICAgICAgICAgICAgICAgQ0xPU0VcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0ndy1bMzUwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sJz5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQtNCc+PGEgaHJlZj1cIlwiPkhPTUU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J210LTQnPjxhIGhyZWY9XCIjcHJvamVjdHNcIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5QUk9KRUNUUzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbXQtNCc+PGEgaHJlZj1cIiNhYm91dFwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PkFCT1VUPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtdC00Jz48YSBocmVmPVwiI2NvbnRhY3RcIiBvbkNsaWNrPXt0b2dnbGVNZW51fT5DT05UQUNUPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTgnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLXNsYXRlLTQwMCBoLVs1ODBweF0gdy1bMzI1cHhdJ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKC9hc3NldHMvaW1hZ2VzL21lbnUtMS5wbmcpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1zbGF0ZS00MDAgaC1bNTgwcHhdIHctWzMyNXB4XSB0cmFuc2xhdGUteS02J1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKC9hc3NldHMvaW1hZ2VzL21lbnUtMi5wbmcpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcidcblxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctc2xhdGUtNDAwIGgtWzU4MHB4XSB3LVszMjVweF0nXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoL2Fzc2V0cy9pbWFnZXMvbWVudS0zLnBuZyknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJ1xuXG4gICAgICAgICAgICAgICAgICAgIH19IFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdiIsIm9wZW5NZW51Iiwic2V0T3Blbk1lbnUiLCJ0b2dnbGVNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm5hdiIsInVsIiwibGkiLCJhIiwiaHJlZiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.tsx\n"));

/***/ })

});