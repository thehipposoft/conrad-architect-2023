"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/[projectsId]/page",{

/***/ "(app-pages-browser)/./components/GallerySlider.tsx":
/*!**************************************!*\
  !*** ./components/GallerySlider.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst GallerySlider = (param)=>{\n    let { projectImages } = param;\n    _s();\n    const [imageIndex, setImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function showNextImage() {\n        setImageIndex((index)=>{\n            if (index === projectImages.length - 2) return 0;\n            return index + 1;\n        });\n    }\n    function showPrevImage() {\n        setImageIndex((index)=>{\n            if (index === 0) return projectImages.length - 1;\n            return index - 1;\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:relative w-screen z-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center md:max-w-[900px] max-h-[85vh] overflow-hidden mx-auto relative\",\n                    children: projectImages.map((val, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[900px] md:h-[450px] duration-500 bg-cover bg-center\",\n                            style: {\n                                backgroundImage: \"url(\".concat(val, \")\"),\n                                translate: \"\".concat(-100 * imageIndex, \"%\")\n                            },\n                            onClick: showNextImage\n                        }, index, false, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat(imageIndex === 0 ? \"hidden\" : \"\", \" absolute md:top-0 md:bottom-0 bottom-[5%] md:left-[10%] left-[5%] cursor-pointer text-white duration-500 p-2 hover:bg-[#ffffff33]\"),\n                    onClick: showPrevImage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        width: \"25\",\n                        height: \"20\",\n                        viewBox: \"0 0 12 20\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"rotate-180\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z\",\n                            fill: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"absolute md:top-0 md:bottom-0 bottom-[5%] md:right-[10%] right-[5%] cursor-pointer text-white duration-500 p-2 hover:bg-[#ffffff33]\",\n                    onClick: showNextImage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        width: \"25\",\n                        height: \"20\",\n                        viewBox: \"0 0 12 20\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z\",\n                            fill: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(GallerySlider, \"o3QdOvBx1glE+C1mg68BfbxAJt0=\");\n_c = GallerySlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GallerySlider);\nvar _c;\n$RefreshReg$(_c, \"GallerySlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvR2FsbGVyeVNsaWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3NDO0FBR3RDLE1BQU1FLGdCQUFnQjtRQUFDLEVBQUNDLGFBQWEsRUFBSzs7SUFFdEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTdDLFNBQVNLO1FBQ0xELGNBQWMsQ0FBQ0U7WUFDWCxJQUFJQSxVQUFVSixjQUFjSyxNQUFNLEdBQUcsR0FBRyxPQUFPO1lBQy9DLE9BQU9ELFFBQVE7UUFDbkI7SUFDSjtJQUVBLFNBQVNFO1FBQ0xKLGNBQWMsQ0FBQ0U7WUFDWCxJQUFJQSxVQUFVLEdBQUcsT0FBT0osY0FBY0ssTUFBTSxHQUFHO1lBQy9DLE9BQU9ELFFBQVE7UUFDbkI7SUFDSjtJQUNBLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFXOzs4QkFDWiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBRVBSLGNBQWNTLEdBQUcsQ0FBQyxDQUFDQyxLQUFTTixzQkFDeEIsOERBQUNHOzRCQUVHQyxXQUFVOzRCQUNWRyxPQUFPO2dDQUNIQyxpQkFBaUIsT0FBVyxPQUFKRixLQUFJO2dDQUM1QkcsV0FBVyxHQUFxQixPQUFsQixDQUFDLE1BQU1aLFlBQVc7NEJBQ3BDOzRCQUNBYSxTQUFTWDsyQkFOSkM7Ozs7Ozs7Ozs7OEJBZXJCLDhEQUFDVztvQkFDR1AsV0FBVyxHQUFvQyxPQUFqQ1AsZUFBZSxJQUFJLFdBQVcsSUFBRztvQkFDL0NhLFNBQVNSOzhCQUVULDRFQUFDVTt3QkFBSUMsT0FBTTt3QkFBS0MsUUFBTzt3QkFBS0MsU0FBUTt3QkFBWUMsTUFBSzt3QkFBT0MsT0FBTTt3QkFBNkJiLFdBQVU7a0NBQ3JHLDRFQUFDYzs0QkFBS0MsR0FBRTs0QkFBOERILE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR25GLDhEQUFDTDtvQkFDR1AsV0FBVTtvQkFDVk0sU0FBU1g7OEJBRVQsNEVBQUNhO3dCQUFJQyxPQUFNO3dCQUFLQyxRQUFPO3dCQUFLQyxTQUFRO3dCQUFZQyxNQUFLO3dCQUFPQyxPQUFNO2tDQUM5RCw0RUFBQ0M7NEJBQUtDLEdBQUU7NEJBQThESCxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkc7R0ExRE1yQjtLQUFBQTtBQTRETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbGxlcnlTbGlkZXIudHN4P2MwNTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBHYWxsZXJ5U2xpZGVyID0gKHtwcm9qZWN0SW1hZ2VzfTphbnkpID0+IHtcblxuICAgIGNvbnN0IFtpbWFnZUluZGV4LCBzZXRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgZnVuY3Rpb24gc2hvd05leHRJbWFnZSgpIHtcbiAgICAgICAgc2V0SW1hZ2VJbmRleCgoaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gcHJvamVjdEltYWdlcy5sZW5ndGggLSAyKSByZXR1cm4gMDtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1ByZXZJbWFnZSgpIHtcbiAgICAgICAgc2V0SW1hZ2VJbmRleCgoaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuIHByb2plY3RJbWFnZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAtIDE7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydtZDpyZWxhdGl2ZSB3LXNjcmVlbiB6LTEwJ30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtZDptYXgtdy1bOTAwcHhdIG1heC1oLVs4NXZoXSBvdmVyZmxvdy1oaWRkZW4gbXgtYXV0byByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW1hZ2VzLm1hcCgodmFsOmFueSwgaW5kZXg6YW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctWzkwMHB4XSBtZDpoLVs0NTBweF0gZHVyYXRpb24tNTAwIGJnLWNvdmVyIGJnLWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3ZhbH0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogYCR7LTEwMCAqIGltYWdlSW5kZXh9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dOZXh0SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW1hZ2VJbmRleCA9PT0gMCA/ICdoaWRkZW4nIDogJyd9IGFic29sdXRlIG1kOnRvcC0wIG1kOmJvdHRvbS0wIGJvdHRvbS1bNSVdIG1kOmxlZnQtWzEwJV0gbGVmdC1bNSVdIGN1cnNvci1wb2ludGVyIHRleHQtd2hpdGUgZHVyYXRpb24tNTAwIHAtMiBob3ZlcjpiZy1bI2ZmZmZmZjMzXWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dQcmV2SW1hZ2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMTIgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJyb3RhdGUtMTgwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIuMjgzNCAwTDAgMi4zNUw3LjQxNyAxMEwwIDE3LjY1TDIuMjgzNCAyMEwxMiAxMEwyLjI4MzQgMFpcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIG1kOnRvcC0wIG1kOmJvdHRvbS0wIGJvdHRvbS1bNSVdIG1kOnJpZ2h0LVsxMCVdIHJpZ2h0LVs1JV0gY3Vyc29yLXBvaW50ZXIgdGV4dC13aGl0ZSBkdXJhdGlvbi01MDAgcC0yIGhvdmVyOmJnLVsjZmZmZmZmMzNdXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd05leHRJbWFnZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxMiAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yLjI4MzQgMEwwIDIuMzVMNy40MTcgMTBMMCAxNy42NUwyLjI4MzQgMjBMMTIgMTBMMi4yODM0IDBaXCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVNsaWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdhbGxlcnlTbGlkZXIiLCJwcm9qZWN0SW1hZ2VzIiwiaW1hZ2VJbmRleCIsInNldEltYWdlSW5kZXgiLCJzaG93TmV4dEltYWdlIiwiaW5kZXgiLCJsZW5ndGgiLCJzaG93UHJldkltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidmFsIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0cmFuc2xhdGUiLCJvbkNsaWNrIiwiYnV0dG9uIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/GallerySlider.tsx\n"));

/***/ })

});