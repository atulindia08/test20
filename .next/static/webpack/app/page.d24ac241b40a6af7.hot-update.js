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

/***/ "(app-pages-browser)/./src/components/common/SelectDonationCause.tsx":
/*!*******************************************************!*\
  !*** ./src/components/common/SelectDonationCause.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SelectDonationCause; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/OutlinedInput */ \"(app-pages-browser)/./node_modules/@mui/material/OutlinedInput/OutlinedInput.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-pages-browser)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/FormControl */ \"(app-pages-browser)/./node_modules/@mui/material/FormControl/FormControl.js\");\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Select */ \"(app-pages-browser)/./node_modules/@mui/material/Select/Select.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ITEM_HEIGHT = 48;\nconst ITEM_PADDING_TOP = 8;\nconst MenuProps = {\n    PaperProps: {\n        style: {\n            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,\n            width: 250\n        }\n    }\n};\nconst cause = [\n    \"Help People\",\n    \"Help Students\",\n    \"Help Environment\"\n];\nfunction SelectDonationCause() {\n    _s();\n    const [personName, setPersonName] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);\n    const handleChange = (event)=>{\n        const { target: { value } } = event;\n        setPersonName(// On autofill we get a stringified value.\n        typeof value === \"string\" ? value.split(\",\") : value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                m: 1,\n                width: 300,\n                mt: 3\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Select__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                multiple: true,\n                displayEmpty: true,\n                value: personName,\n                onChange: handleChange,\n                input: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\atuli\\\\Desktop\\\\final\\\\test20\\\\src\\\\components\\\\common\\\\SelectDonationCause.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 18\n                }, void 0),\n                renderValue: (selected)=>{\n                    if (selected.length === 0) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                            children: \"Select Cause\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\atuli\\\\Desktop\\\\final\\\\test20\\\\src\\\\components\\\\common\\\\SelectDonationCause.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 22\n                        }, void 0);\n                    }\n                    return selected.join(\", \");\n                },\n                MenuProps: MenuProps,\n                inputProps: {\n                    \"aria-label\": \"Without label\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        disabled: true,\n                        value: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                            children: \"Placeholder\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\atuli\\\\Desktop\\\\final\\\\test20\\\\src\\\\components\\\\common\\\\SelectDonationCause.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\atuli\\\\Desktop\\\\final\\\\test20\\\\src\\\\components\\\\common\\\\SelectDonationCause.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    cause.map((cause)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            value: cause,\n                            children: cause\n                        }, cause, false, {\n                            fileName: \"C:\\\\Users\\\\atuli\\\\Desktop\\\\final\\\\test20\\\\src\\\\components\\\\common\\\\SelectDonationCause.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\atuli\\\\Desktop\\\\final\\\\test20\\\\src\\\\components\\\\common\\\\SelectDonationCause.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\atuli\\\\Desktop\\\\final\\\\test20\\\\src\\\\components\\\\common\\\\SelectDonationCause.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\atuli\\\\Desktop\\\\final\\\\test20\\\\src\\\\components\\\\common\\\\SelectDonationCause.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(SelectDonationCause, \"m4jAXoIxEbTiAYdPcsnuZG2B4wU=\");\n_c = SelectDonationCause;\nvar _c;\n$RefreshReg$(_c, \"SelectDonationCause\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9TZWxlY3REb25hdGlvbkNhdXNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ3lCO0FBQ1Y7QUFDTTtBQUNhO0FBRWpFLE1BQU1LLGNBQWM7QUFDcEIsTUFBTUMsbUJBQW1CO0FBQ3pCLE1BQU1DLFlBQVk7SUFDaEJDLFlBQVk7UUFDVkMsT0FBTztZQUNMQyxXQUFXTCxjQUFjLE1BQU1DO1lBQy9CSyxPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsTUFBTUMsUUFBUTtJQUNaO0lBQ0E7SUFDQTtDQUNEO0FBR2MsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHZiwyQ0FBYyxDQUFXLEVBQUU7SUFFL0QsTUFBTWlCLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUNKQyxRQUFRLEVBQUVDLEtBQUssRUFBRSxFQUNsQixHQUFHRjtRQUNKSCxjQUNFLDBDQUEwQztRQUMxQyxPQUFPSyxVQUFVLFdBQVdBLE1BQU1DLEtBQUssQ0FBQyxPQUFPRDtJQUVuRDtJQUVBLHFCQUNFLDhEQUFDRTtrQkFDQyw0RUFBQ25CLGlFQUFXQTtZQUFDb0IsSUFBSTtnQkFBRUMsR0FBRztnQkFBR2IsT0FBTztnQkFBS2MsSUFBSTtZQUFFO3NCQUN6Qyw0RUFBQ3JCLDREQUFNQTtnQkFDTHNCLFFBQVE7Z0JBQ1JDLFlBQVk7Z0JBQ1pQLE9BQU9OO2dCQUNQYyxVQUFVWDtnQkFDVlkscUJBQU8sOERBQUM1QixtRUFBYUE7Ozs7O2dCQUNyQjZCLGFBQWEsQ0FBQ0M7b0JBQ1osSUFBSUEsU0FBU0MsTUFBTSxLQUFLLEdBQUc7d0JBQ3pCLHFCQUFPLDhEQUFDQztzQ0FBRzs7Ozs7O29CQUNiO29CQUVBLE9BQU9GLFNBQVNHLElBQUksQ0FBQztnQkFDdkI7Z0JBQ0EzQixXQUFXQTtnQkFDWDRCLFlBQVk7b0JBQUUsY0FBYztnQkFBZ0I7O2tDQUU1Qyw4REFBQ2pDLDhEQUFRQTt3QkFBQ2tDLFFBQVE7d0JBQUNoQixPQUFNO2tDQUN2Qiw0RUFBQ2E7c0NBQUc7Ozs7Ozs7Ozs7O29CQUVMckIsTUFBTXlCLEdBQUcsQ0FBQyxDQUFDekIsc0JBQ1YsOERBQUNWLDhEQUFRQTs0QkFFUGtCLE9BQU9SO3NDQUVOQTsyQkFISUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVuQjtHQS9Dd0JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9TZWxlY3REb25hdGlvbkNhdXNlLnRzeD8wNjNjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE91dGxpbmVkSW5wdXQgZnJvbSAnQG11aS9tYXRlcmlhbC9PdXRsaW5lZElucHV0JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBTZWxlY3QsIHsgU2VsZWN0Q2hhbmdlRXZlbnQgfSBmcm9tICdAbXVpL21hdGVyaWFsL1NlbGVjdCc7XHJcblxyXG5jb25zdCBJVEVNX0hFSUdIVCA9IDQ4O1xyXG5jb25zdCBJVEVNX1BBRERJTkdfVE9QID0gODtcclxuY29uc3QgTWVudVByb3BzID0ge1xyXG4gIFBhcGVyUHJvcHM6IHtcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgIG1heEhlaWdodDogSVRFTV9IRUlHSFQgKiA0LjUgKyBJVEVNX1BBRERJTkdfVE9QLFxyXG4gICAgICB3aWR0aDogMjUwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY2F1c2UgPSBbXHJcbiAgJ0hlbHAgUGVvcGxlJyxcclxuICAnSGVscCBTdHVkZW50cycsXHJcbiAgJ0hlbHAgRW52aXJvbm1lbnQnLFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdERvbmF0aW9uQ2F1c2UoKSB7XHJcbiAgY29uc3QgW3BlcnNvbk5hbWUsIHNldFBlcnNvbk5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBTZWxlY3RDaGFuZ2VFdmVudDx0eXBlb2YgcGVyc29uTmFtZT4pID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGFyZ2V0OiB7IHZhbHVlIH0sXHJcbiAgICB9ID0gZXZlbnQ7XHJcbiAgICBzZXRQZXJzb25OYW1lKFxyXG4gICAgICAvLyBPbiBhdXRvZmlsbCB3ZSBnZXQgYSBzdHJpbmdpZmllZCB2YWx1ZS5cclxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLnNwbGl0KCcsJykgOiB2YWx1ZSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGb3JtQ29udHJvbCBzeD17eyBtOiAxLCB3aWR0aDogMzAwLCBtdDogMyB9fT5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgZGlzcGxheUVtcHR5XHJcbiAgICAgICAgICB2YWx1ZT17cGVyc29uTmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBpbnB1dD17PE91dGxpbmVkSW5wdXQgLz59XHJcbiAgICAgICAgICByZW5kZXJWYWx1ZT17KHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICByZXR1cm4gPGVtPlNlbGVjdCBDYXVzZTwvZW0+O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQuam9pbignLCAnKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBNZW51UHJvcHM9e01lbnVQcm9wc31cclxuICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnV2l0aG91dCBsYWJlbCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQgdmFsdWU9XCJcIj5cclxuICAgICAgICAgICAgPGVtPlBsYWNlaG9sZGVyPC9lbT5cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICB7Y2F1c2UubWFwKChjYXVzZSkgPT4gKFxyXG4gICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2NhdXNlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjYXVzZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjYXVzZX1cclxuICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJPdXRsaW5lZElucHV0IiwiTWVudUl0ZW0iLCJGb3JtQ29udHJvbCIsIlNlbGVjdCIsIklURU1fSEVJR0hUIiwiSVRFTV9QQURESU5HX1RPUCIsIk1lbnVQcm9wcyIsIlBhcGVyUHJvcHMiLCJzdHlsZSIsIm1heEhlaWdodCIsIndpZHRoIiwiY2F1c2UiLCJTZWxlY3REb25hdGlvbkNhdXNlIiwicGVyc29uTmFtZSIsInNldFBlcnNvbk5hbWUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpdCIsImRpdiIsInN4IiwibSIsIm10IiwibXVsdGlwbGUiLCJkaXNwbGF5RW1wdHkiLCJvbkNoYW5nZSIsImlucHV0IiwicmVuZGVyVmFsdWUiLCJzZWxlY3RlZCIsImxlbmd0aCIsImVtIiwiam9pbiIsImlucHV0UHJvcHMiLCJkaXNhYmxlZCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/SelectDonationCause.tsx\n"));

/***/ })

});