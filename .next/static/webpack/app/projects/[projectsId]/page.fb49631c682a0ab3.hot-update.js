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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst GallerySlider = (param)=>{\n    let { projectImages } = param;\n    _s();\n    const [imageIndex, setImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function showNextImage() {\n        setImageIndex((index)=>{\n            if (index === projectImages.length - 2) return 0;\n            return index + 1;\n        });\n    }\n    function showPrevImage() {\n        setImageIndex((index)=>{\n            if (index === 0) return projectImages.length - 1;\n            return index - 1;\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:relative w-screen z-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center md:max-w-[900px] max-h-[85vh] overflow-hidden mx-auto\",\n                    children: projectImages.map((val, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:w-[900px] md:min-h-[450px] duration-500\",\n                            style: {\n                                translate: \"\".concat(-100 * imageIndex, \"%\")\n                            },\n                            onClick: showNextImage,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"max-w-none\",\n                                src: val,\n                                alt: \"\",\n                                width: 900,\n                                height: 450\n                            }, index, false, {\n                                fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 33\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"\".concat(imageIndex === 0 ? \"hidden\" : \"\", \" absolute md:top-0 md:bottom-0 bottom-[5%] md:left-[10%] left-[5%] cursor-pointer text-white duration-500 p-2 hover:bg-[#ffffff33]\"),\n                    onClick: showPrevImage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        width: \"25\",\n                        height: \"20\",\n                        viewBox: \"0 0 12 20\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"rotate-180\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z\",\n                            fill: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"absolute md:top-0 md:bottom-0 bottom-[5%] md:right-[10%] right-[5%] cursor-pointer text-white duration-500 p-2 hover:bg-[#ffffff33]\",\n                    onClick: showNextImage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        width: \"25\",\n                        height: \"20\",\n                        viewBox: \"0 0 12 20\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M2.2834 0L0 2.35L7.417 10L0 17.65L2.2834 20L12 10L2.2834 0Z\",\n                            fill: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/juanmanuelborigen/Desktop/HippoSoft/conrad-architect-2023/components/GallerySlider.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(GallerySlider, \"o3QdOvBx1glE+C1mg68BfbxAJt0=\");\n_c = GallerySlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GallerySlider);\nvar _c;\n$RefreshReg$(_c, \"GallerySlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvR2FsbGVyeVNsaWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDc0M7QUFDUDtBQUUvQixNQUFNRyxnQkFBZ0I7UUFBQyxFQUFDQyxhQUFhLEVBQUs7O0lBRXRDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUU3QyxTQUFTTTtRQUNMRCxjQUFjLENBQUNFO1lBQ1gsSUFBSUEsVUFBVUosY0FBY0ssTUFBTSxHQUFHLEdBQUcsT0FBTztZQUMvQyxPQUFPRCxRQUFRO1FBQ25CO0lBQ0o7SUFFQSxTQUFTRTtRQUNMSixjQUFjLENBQUNFO1lBQ1gsSUFBSUEsVUFBVSxHQUFHLE9BQU9KLGNBQWNLLE1BQU0sR0FBRztZQUMvQyxPQUFPRCxRQUFRO1FBQ25CO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVzs7OEJBQ1osOERBQUNEO29CQUFJQyxXQUFVOzhCQUVQUixjQUFjUyxHQUFHLENBQUMsQ0FBQ0MsS0FBU04sc0JBQ3hCLDhEQUFDRzs0QkFFR0MsV0FBVTs0QkFDVkcsT0FBTztnQ0FDSEMsV0FBVyxHQUFxQixPQUFsQixDQUFDLE1BQU1YLFlBQVc7NEJBQ3BDOzRCQUNBWSxTQUFTVjtzQ0FFVCw0RUFBQ0wsbURBQUtBO2dDQUNGVSxXQUFVO2dDQUNWTSxLQUFLSjtnQ0FDTEssS0FBSTtnQ0FFSkMsT0FBTztnQ0FDUEMsUUFBUTsrQkFGSGI7Ozs7OzJCQVhKQTs7Ozs7Ozs7Ozs4QkFxQnJCLDhEQUFDYztvQkFDR1YsV0FBVyxHQUFvQyxPQUFqQ1AsZUFBZSxJQUFJLFdBQVcsSUFBRztvQkFDL0NZLFNBQVNQOzhCQUVULDRFQUFDYTt3QkFBSUgsT0FBTTt3QkFBS0MsUUFBTzt3QkFBS0csU0FBUTt3QkFBWUMsTUFBSzt3QkFBT0MsT0FBTTt3QkFBNkJkLFdBQVU7a0NBQ3JHLDRFQUFDZTs0QkFBS0MsR0FBRTs0QkFBOERILE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR25GLDhEQUFDSDtvQkFDR1YsV0FBVTtvQkFDVkssU0FBU1Y7OEJBRVQsNEVBQUNnQjt3QkFBSUgsT0FBTTt3QkFBS0MsUUFBTzt3QkFBS0csU0FBUTt3QkFBWUMsTUFBSzt3QkFBT0MsT0FBTTtrQ0FDOUQsNEVBQUNDOzRCQUFLQyxHQUFFOzRCQUE4REgsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5HO0dBaEVNdEI7S0FBQUE7QUFrRU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYWxsZXJ5U2xpZGVyLnRzeD9jMDUwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgR2FsbGVyeVNsaWRlciA9ICh7cHJvamVjdEltYWdlc306YW55KSA9PiB7XG5cbiAgICBjb25zdCBbaW1hZ2VJbmRleCwgc2V0SW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGZ1bmN0aW9uIHNob3dOZXh0SW1hZ2UoKSB7XG4gICAgICAgIHNldEltYWdlSW5kZXgoKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IHByb2plY3RJbWFnZXMubGVuZ3RoIC0gMikgcmV0dXJuIDA7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcmV2SW1hZ2UoKSB7XG4gICAgICAgIHNldEltYWdlSW5kZXgoKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHJldHVybiBwcm9qZWN0SW1hZ2VzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggLSAxO1xuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWQ6cmVsYXRpdmUgdy1zY3JlZW4gei0xMCd9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWQ6bWF4LXctWzkwMHB4XSBtYXgtaC1bODV2aF0gb3ZlcmZsb3ctaGlkZGVuIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEltYWdlcy5tYXAoKHZhbDphbnksIGluZGV4OmFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtZDp3LVs5MDBweF0gbWQ6bWluLWgtWzQ1MHB4XSBkdXJhdGlvbi01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IGAkey0xMDAgKiBpbWFnZUluZGV4fSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TmV4dEltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtYXgtdy1ub25lJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dmFsfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQ1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbWFnZUluZGV4ID09PSAwID8gJ2hpZGRlbicgOiAnJ30gYWJzb2x1dGUgbWQ6dG9wLTAgbWQ6Ym90dG9tLTAgYm90dG9tLVs1JV0gbWQ6bGVmdC1bMTAlXSBsZWZ0LVs1JV0gY3Vyc29yLXBvaW50ZXIgdGV4dC13aGl0ZSBkdXJhdGlvbi01MDAgcC0yIGhvdmVyOmJnLVsjZmZmZmZmMzNdYH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1ByZXZJbWFnZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAxMiAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cInJvdGF0ZS0xODBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMi4yODM0IDBMMCAyLjM1TDcuNDE3IDEwTDAgMTcuNjVMMi4yODM0IDIwTDEyIDEwTDIuMjgzNCAwWlwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbWQ6dG9wLTAgbWQ6Ym90dG9tLTAgYm90dG9tLVs1JV0gbWQ6cmlnaHQtWzEwJV0gcmlnaHQtWzUlXSBjdXJzb3ItcG9pbnRlciB0ZXh0LXdoaXRlIGR1cmF0aW9uLTUwMCBwLTIgaG92ZXI6YmctWyNmZmZmZmYzM11cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TmV4dEltYWdlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDEyIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIuMjgzNCAwTDAgMi4zNUw3LjQxNyAxMEwwIDE3LjY1TDIuMjgzNCAyMEwxMiAxMEwyLjI4MzQgMFpcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5U2xpZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJHYWxsZXJ5U2xpZGVyIiwicHJvamVjdEltYWdlcyIsImltYWdlSW5kZXgiLCJzZXRJbWFnZUluZGV4Iiwic2hvd05leHRJbWFnZSIsImluZGV4IiwibGVuZ3RoIiwic2hvd1ByZXZJbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInZhbCIsInN0eWxlIiwidHJhbnNsYXRlIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYnV0dG9uIiwic3ZnIiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/GallerySlider.tsx\n"));

/***/ })

});