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

/***/ "(app-pages-browser)/./components/AboutSlider.tsx":
/*!************************************!*\
  !*** ./components/AboutSlider.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AboutSlider: function() { return /* binding */ AboutSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ AboutSlider auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AboutSlider(param) {\n    let { members } = param;\n    _s();\n    const [imageIndex, setImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    function showNextImage() {\n        setImageIndex((index)=>{\n            if (index === members.length - 1) return 0;\n            return index + 1;\n        });\n    }\n    function showPrevImage() {\n        setImageIndex((index)=>{\n            if (index === 0) return members.length - 1;\n            return index - 1;\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto relative pt-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative mx-auto justify-center items-center animate-fade-up animate-duration-1000 animate-delay-500\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex max-w-[500px] overflow-hidden mx-auto\",\n                    children: members.map((val, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-center items-center duration-500 w-full h-full\",\n                            style: {\n                                translate: \"\".concat(-100 * imageIndex, \"%\")\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: val.image,\n                                    alt: \"Jim Conrad Photo\",\n                                    width: 280,\n                                    height: 250\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-white pt-8 mt-2 md:mt-0 px-14 md:px-0 md:w-[500px] w-screen text-center\",\n                                    children: val.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-white pt-4\",\n                                    children: val.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 29\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat(imageIndex === 0 ? \"hidden\" : \"\", \" absolute top-0 bottom-0 md:left-[10%] left-[5%] cursor-pointer text-white duration-500 p-1 hover:bg-[#ffffff33]\"),\n                    onClick: showPrevImage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        width: \"25\",\n                        height: \"20\",\n                        viewBox: \"0 0 12 20\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"rotate-180\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z\",\n                            fill: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"absolute top-0 bottom-0 md:right-[10%] right-[5%] cursor-pointer text-white duration-500 p-1 hover:bg-[#ffffff33]\",\n                    onClick: showNextImage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        width: \"25\",\n                        height: \"20\",\n                        viewBox: \"0 0 12 20\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z\",\n                            fill: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/AboutSlider.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(AboutSlider, \"o3QdOvBx1glE+C1mg68BfbxAJt0=\");\n_c = AboutSlider;\nvar _c;\n$RefreshReg$(_c, \"AboutSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWJvdXRTbGlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytCO0FBRUU7QUFRMUIsU0FBU0UsWUFBWSxLQUFpQjtRQUFqQixFQUFFQyxPQUFPLEVBQVEsR0FBakI7O0lBQ3hCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUU3QyxTQUFTSztRQUNMRCxjQUFjLENBQUNFO1lBQ1gsSUFBSUEsVUFBVUosUUFBUUssTUFBTSxHQUFHLEdBQUcsT0FBTztZQUN6QyxPQUFPRCxRQUFRO1FBQ25CO0lBQ0o7SUFFQSxTQUFTRTtRQUNMSixjQUFjLENBQUNFO1lBQ1gsSUFBSUEsVUFBVSxHQUFHLE9BQU9KLFFBQVFLLE1BQU0sR0FBRztZQUN6QyxPQUFPRCxRQUFRO1FBQ25CO0lBQ0o7SUFHQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVztrQkFDWiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOzhCQUVQUixRQUFRUyxHQUFHLENBQUMsQ0FBQ0MsS0FBU04sc0JBQ2xCLDhEQUFDRzs0QkFDR0MsV0FBVTs0QkFFVkcsT0FBTztnQ0FDSEMsV0FBVyxHQUFxQixPQUFsQixDQUFDLE1BQU1YLFlBQVc7NEJBQ3BDOzs4Q0FFQSw4REFBQ0osbURBQUtBO29DQUFDZ0IsS0FBS0gsSUFBSUksS0FBSztvQ0FBRUMsS0FBSTtvQ0FBbUJDLE9BQU87b0NBQUtDLFFBQVE7Ozs7Ozs4Q0FDbEUsOERBQUNDO29DQUFFVixXQUFVOzhDQUFnRkUsSUFBSVMsSUFBSTs7Ozs7OzhDQUNyRyw4REFBQ0Q7b0NBQUVWLFdBQVU7OENBQW1CRSxJQUFJVSxJQUFJOzs7Ozs7OzJCQVBuQ2hCOzs7Ozs7Ozs7OzhCQWF6Qiw4REFBQ2lCO29CQUNHYixXQUFXLEdBQW9DLE9BQWpDUCxlQUFlLElBQUksV0FBVyxJQUFHO29CQUMvQ3FCLFNBQVNoQjs4QkFFVCw0RUFBQ2lCO3dCQUFJUCxPQUFNO3dCQUFLQyxRQUFPO3dCQUFLTyxTQUFRO3dCQUFZQyxNQUFLO3dCQUFPQyxPQUFNO3dCQUE2QmxCLFdBQVU7a0NBQ3JHLDRFQUFDbUI7NEJBQUtDLEdBQUU7NEJBQThESCxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUduRiw4REFBQ0o7b0JBQ0diLFdBQVU7b0JBQ1ZjLFNBQVNuQjs4QkFFVCw0RUFBQ29CO3dCQUFJUCxPQUFNO3dCQUFLQyxRQUFPO3dCQUFLTyxTQUFRO3dCQUFZQyxNQUFLO3dCQUFPQyxPQUFNO2tDQUM5RCw0RUFBQ0M7NEJBQUtDLEdBQUU7NEJBQThESCxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0Y7R0EzRGdCMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BYm91dFNsaWRlci50c3g/NTU1MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbWJlciB9IGZyb20gXCJAL3NyYy90eXBlc1wiO1xuXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgbWVtYmVyczogTWVtYmVyW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFib3V0U2xpZGVyKHsgbWVtYmVycyB9OlByb3BzKSB7XG4gICAgY29uc3QgW2ltYWdlSW5kZXgsIHNldEltYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBmdW5jdGlvbiBzaG93TmV4dEltYWdlKCkge1xuICAgICAgICBzZXRJbWFnZUluZGV4KChpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBtZW1iZXJzLmxlbmd0aCAtIDEpIHJldHVybiAwO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UHJldkltYWdlKCkge1xuICAgICAgICBzZXRJbWFnZUluZGV4KChpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSByZXR1cm4gbWVtYmVycy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4IC0gMTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbXgtYXV0byByZWxhdGl2ZSBwdC0xNid9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBhbmltYXRlLWZhZGUtdXAgYW5pbWF0ZS1kdXJhdGlvbi0xMDAwIGFuaW1hdGUtZGVsYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1heC13LVs1MDBweF0gb3ZlcmZsb3ctaGlkZGVuIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVycy5tYXAoKHZhbDphbnksIGluZGV4OmFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZHVyYXRpb24tNTAwIHctZnVsbCBoLWZ1bGwnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBgJHstMTAwICogaW1hZ2VJbmRleH0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3ZhbC5pbWFnZX0gYWx0PSdKaW0gQ29ucmFkIFBob3RvJyB3aWR0aD17MjgwfSBoZWlnaHQ9ezI1MH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIHB0LTggbXQtMiBtZDptdC0wIHB4LTE0IG1kOnB4LTAgbWQ6dy1bNTAwcHhdIHctc2NyZWVuIHRleHQtY2VudGVyJz57dmFsLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUgcHQtNCc+e3ZhbC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ltYWdlSW5kZXggPT09IDAgPyAnaGlkZGVuJyA6ICcnfSBhYnNvbHV0ZSB0b3AtMCBib3R0b20tMCBtZDpsZWZ0LVsxMCVdIGxlZnQtWzUlXSBjdXJzb3ItcG9pbnRlciB0ZXh0LXdoaXRlIGR1cmF0aW9uLTUwMCBwLTEgaG92ZXI6YmctWyNmZmZmZmYzM11gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQcmV2SW1hZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDEyIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwicm90YXRlLTE4MFwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIuMjgzNCAwTDAgMi4zNUw3LjQxNyAxMEwwIDE3LjY1TDIuMjgzNCAyMEwxMiAxMEwyLjI4MzQgMFpcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgYm90dG9tLTAgbWQ6cmlnaHQtWzEwJV0gcmlnaHQtWzUlXSBjdXJzb3ItcG9pbnRlciB0ZXh0LXdoaXRlIGR1cmF0aW9uLTUwMCBwLTEgaG92ZXI6YmctWyNmZmZmZmYzM11cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dOZXh0SW1hZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDEyIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMi4yODM0IDBMMCAyLjM1TDcuNDE3IDEwTDAgMTcuNjVMMi4yODM0IDIwTDEyIDEwTDIuMjgzNCAwWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiQWJvdXRTbGlkZXIiLCJtZW1iZXJzIiwiaW1hZ2VJbmRleCIsInNldEltYWdlSW5kZXgiLCJzaG93TmV4dEltYWdlIiwiaW5kZXgiLCJsZW5ndGgiLCJzaG93UHJldkltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidmFsIiwic3R5bGUiLCJ0cmFuc2xhdGUiLCJzcmMiLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsInRleHQiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AboutSlider.tsx\n"));

/***/ })

});