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

/***/ "(app-pages-browser)/./components/Slider.tsx":
/*!*******************************!*\
  !*** ./components/Slider.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slider: function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ Slider auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Slider(param) {\n    let { projectsToDisplay } = param;\n    _s();\n    const [imageIndex, setImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    function showNextImage() {\n        setImageIndex((index)=>{\n            if (index === projectsToDisplay.length - 1) return 0;\n            return index + 1;\n        });\n    }\n    function showPrevImage() {\n        setImageIndex((index)=>{\n            if (index === 0) return projectsToDisplay.length - 1;\n            return index - 1;\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto relative md:pt-20 flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative max-h-[450px] max-w-[1350px] gap-4 flex overflow-hidden mx-auto\",\n                children: [\n                    projectsToDisplay.map((val, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"projects/\".concat(val.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[400px] w-[650px] duration-500 relative slide overflow-hidden\",\n                                style: {\n                                    backgroundImage: \"url(\".concat(val.main_image, \")\"),\n                                    backgroundSize: \"cover\",\n                                    backgroundPosition: \"center\",\n                                    translate: \"\".concat(-100 * imageIndex, \"%\")\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"absolute bottom-6 right-12 text-white uppercase z-20 duration-500\",\n                                        children: val.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute top-0 left-0 w-full h-full z-10 bg-black duration-500 opacity-10 hover:opacity-0\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(imageIndex === 0 ? \"hidden\" : \"\", \" absolute top-0 bottom-0 left-0 cursor-pointer hover:bg-[#00000033] duration-300 p-2\"),\n                        onClick: showPrevImage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"25\",\n                            height: \"20\",\n                            viewBox: \"0 0 12 20\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"rotate-180\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z\",\n                                fill: \"white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"absolute top-0 bottom-0 right-0 cursor-pointer hover:bg-[#00000033] duration-300 p-2\",\n                        onClick: showNextImage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"25\",\n                            height: \"20\",\n                            viewBox: \"0 0 12 20\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z\",\n                                fill: \"white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 absolute left-[50%] bottom-[-30px] -translate-x-[50%]\",\n                children: projectsToDisplay.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(index === imageIndex ? \"bg-neutral-700\" : \"\", \" p-[6px] hover:bg-neutral-700 duration-150 rounded-full bg-neutral-400\"),\n                        onClick: ()=>setImageIndex(index)\n                    }, index, false, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/Slider.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n} /*\n\n                        <Image\n                                src={val.main_image}\n                                key={index} \n                                alt=\"\" \n                                width={650}\n                                height={450}\n                                className=\"shrink-0 grow-0 duration-300\"\n                                style={{ translate: `${-100 * imageIndex}%` }}\n                        />\n*/ \n_s(Slider, \"o3QdOvBx1glE+C1mg68BfbxAJt0=\");\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUU2QjtBQUNJO0FBRTFCLFNBQVNFLE9BQU8sS0FBeUI7UUFBekIsRUFBRUMsaUJBQWlCLEVBQU0sR0FBekI7O0lBQ25CLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUU3QyxTQUFTSztRQUNMRCxjQUFjLENBQUNFO1lBQ1gsSUFBSUEsVUFBVUosa0JBQWtCSyxNQUFNLEdBQUcsR0FBRyxPQUFPO1lBQ25ELE9BQU9ELFFBQVE7UUFDbkI7SUFDSjtJQUVBLFNBQVNFO1FBQ0xKLGNBQWMsQ0FBQ0U7WUFDWCxJQUFJQSxVQUFVLEdBQUcsT0FBT0osa0JBQWtCSyxNQUFNLEdBQUc7WUFDbkQsT0FBT0QsUUFBUTtRQUNuQjtJQUNKO0lBR0EscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVc7OzBCQUNaLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBRVBSLGtCQUFrQlMsR0FBRyxDQUFDLENBQUNDLEtBQVNOLHNCQUM1Qiw4REFBQ1Asa0RBQUlBOzRCQUFDYyxNQUFNLFlBQW1CLE9BQVBELElBQUlFLEVBQUU7c0NBQzFCLDRFQUFDTDtnQ0FDR0MsV0FBVTtnQ0FDVkssT0FBTztvQ0FDSEMsaUJBQWlCLE9BQXNCLE9BQWZKLElBQUlLLFVBQVUsRUFBQztvQ0FDdkNDLGdCQUFnQjtvQ0FDaEJDLG9CQUFvQjtvQ0FDcEJDLFdBQVcsR0FBcUIsT0FBbEIsQ0FBQyxNQUFNakIsWUFBVztnQ0FDcEM7O2tEQUVBLDhEQUFDa0I7d0NBQUdYLFdBQVU7a0RBQXFFRSxJQUFJVSxLQUFLOzs7Ozs7a0RBQzVGLDhEQUFDYjt3Q0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7OzJCQVhnQko7Ozs7O2tDQWdCbkQsOERBQUNpQjt3QkFDR2IsV0FBVyxHQUFvQyxPQUFqQ1AsZUFBZSxJQUFJLFdBQVcsSUFBRzt3QkFDL0NxQixTQUFTaEI7a0NBRVQsNEVBQUNpQjs0QkFBSUMsT0FBTTs0QkFBS0MsUUFBTzs0QkFBS0MsU0FBUTs0QkFBWUMsTUFBSzs0QkFBT0MsT0FBTTs0QkFBNkJwQixXQUFVO3NDQUNyRyw0RUFBQ3FCO2dDQUFLQyxHQUFFO2dDQUE4REgsTUFBSzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHbkYsOERBQUNOO3dCQUNHYixXQUFVO3dCQUNWYyxTQUFTbkI7a0NBRVQsNEVBQUNvQjs0QkFBSUMsT0FBTTs0QkFBS0MsUUFBTzs0QkFBS0MsU0FBUTs0QkFBWUMsTUFBSzs0QkFBT0MsT0FBTTtzQ0FDOUQsNEVBQUNDO2dDQUFLQyxHQUFFO2dDQUE4REgsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbkYsOERBQUNwQjtnQkFBSUMsV0FBVTswQkFFUFIsa0JBQWtCUyxHQUFHLENBQUMsQ0FBQ3NCLEdBQU8zQixzQkFDMUIsOERBQUNpQjt3QkFDR2IsV0FBVyxHQUFnRCxPQUE3Q0osVUFBVUgsYUFBYSxtQkFBbUIsSUFBRzt3QkFDM0RxQixTQUFTLElBQU1wQixjQUFjRTt1QkFDeEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWpDLEVBRUE7Ozs7Ozs7Ozs7O0FBV0E7R0FuRmdCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NsaWRlci50c3g/NDM1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlcih7IHByb2plY3RzVG9EaXNwbGF5IH06YW55KSB7XG4gICAgY29uc3QgW2ltYWdlSW5kZXgsIHNldEltYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBmdW5jdGlvbiBzaG93TmV4dEltYWdlKCkge1xuICAgICAgICBzZXRJbWFnZUluZGV4KChpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBwcm9qZWN0c1RvRGlzcGxheS5sZW5ndGggLSAxKSByZXR1cm4gMDtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1ByZXZJbWFnZSgpIHtcbiAgICAgICAgc2V0SW1hZ2VJbmRleCgoaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuIHByb2plY3RzVG9EaXNwbGF5Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggLSAxO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydteC1hdXRvIHJlbGF0aXZlIG1kOnB0LTIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJ30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC1oLVs0NTBweF0gbWF4LXctWzEzNTBweF0gZ2FwLTQgZmxleCBvdmVyZmxvdy1oaWRkZW4gbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNUb0Rpc3BsYXkubWFwKCh2YWw6YW55LCBpbmRleDphbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Bwcm9qZWN0cy8ke3ZhbC5pZH1gfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLVs0MDBweF0gdy1bNjUwcHhdIGR1cmF0aW9uLTUwMCByZWxhdGl2ZSBzbGlkZSBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dmFsLm1haW5faW1hZ2V9KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IGAkey0xMDAgKiBpbWFnZUluZGV4fSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS02IHJpZ2h0LTEyIHRleHQtd2hpdGUgdXBwZXJjYXNlIHotMjAgZHVyYXRpb24tNTAwXCI+e3ZhbC50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIHotMTAgYmctYmxhY2sgZHVyYXRpb24tNTAwIG9wYWNpdHktMTAgaG92ZXI6b3BhY2l0eS0wXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ltYWdlSW5kZXggPT09IDAgPyAnaGlkZGVuJyA6ICcnfSBhYnNvbHV0ZSB0b3AtMCBib3R0b20tMCBsZWZ0LTAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctWyMwMDAwMDAzM10gZHVyYXRpb24tMzAwIHAtMmB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1ByZXZJbWFnZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTIgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJyb3RhdGUtMTgwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMi4yODM0IDBMMCAyLjM1TDcuNDE3IDEwTDAgMTcuNjVMMi4yODM0IDIwTDEyIDEwTDIuMjgzNCAwWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBib3R0b20tMCByaWdodC0wIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLVsjMDAwMDAwMzNdIGR1cmF0aW9uLTMwMCBwLTJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dOZXh0SW1hZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDEyIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMi4yODM0IDBMMCAyLjM1TDcuNDE3IDEwTDAgMTcuNjVMMi4yODM0IDIwTDEyIDEwTDIuMjgzNCAwWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgYWJzb2x1dGUgbGVmdC1bNTAlXSBib3R0b20tWy0zMHB4XSAtdHJhbnNsYXRlLXgtWzUwJV1cIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzVG9EaXNwbGF5Lm1hcCgoXzphbnksIGluZGV4OmFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luZGV4ID09PSBpbWFnZUluZGV4ID8gJ2JnLW5ldXRyYWwtNzAwJyA6ICcnfSBwLVs2cHhdIGhvdmVyOmJnLW5ldXRyYWwtNzAwIGR1cmF0aW9uLTE1MCByb3VuZGVkLWZ1bGwgYmctbmV1dHJhbC00MDBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEltYWdlSW5kZXgoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4vKlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt2YWwubWFpbl9pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQ1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hyaW5rLTAgZ3Jvdy0wIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zbGF0ZTogYCR7LTEwMCAqIGltYWdlSW5kZXh9JWAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4qL1xuXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiU2xpZGVyIiwicHJvamVjdHNUb0Rpc3BsYXkiLCJpbWFnZUluZGV4Iiwic2V0SW1hZ2VJbmRleCIsInNob3dOZXh0SW1hZ2UiLCJpbmRleCIsImxlbmd0aCIsInNob3dQcmV2SW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ2YWwiLCJocmVmIiwiaWQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIm1haW5faW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsInRyYW5zbGF0ZSIsImgxIiwidGl0bGUiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImQiLCJfIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Slider.tsx\n"));

/***/ })

});