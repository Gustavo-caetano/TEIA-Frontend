"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/to-space-case";
exports.ids = ["vendor-chunks/to-space-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/to-space-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-space-case/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar clean = __webpack_require__(/*! to-no-case */ \"(ssr)/./node_modules/to-no-case/index.js\");\n/**\n * Export.\n */ module.exports = toSpaceCase;\n/**\n * Convert a `string` to space case.\n *\n * @param {String} string\n * @return {String}\n */ function toSpaceCase(string) {\n    return clean(string).replace(/[\\W_]+(.|$)/g, function(matches, match) {\n        return match ? \" \" + match : \"\";\n    }).trim();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdG8tc3BhY2UtY2FzZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSUEsUUFBUUMsbUJBQU9BLENBQUM7QUFFcEI7O0NBRUMsR0FFREMsT0FBT0MsT0FBTyxHQUFHQztBQUVqQjs7Ozs7Q0FLQyxHQUVELFNBQVNBLFlBQVlDLE1BQU07SUFDekIsT0FBT0wsTUFBTUssUUFBUUMsT0FBTyxDQUFDLGdCQUFnQixTQUFVQyxPQUFPLEVBQUVDLEtBQUs7UUFDbkUsT0FBT0EsUUFBUSxNQUFNQSxRQUFRO0lBQy9CLEdBQUdDLElBQUk7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2hvcml6b24tYWktdGVtcGxhdGUtcHJvLy4vbm9kZV9tb2R1bGVzL3RvLXNwYWNlLWNhc2UvaW5kZXguanM/NGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBjbGVhbiA9IHJlcXVpcmUoJ3RvLW5vLWNhc2UnKVxuXG4vKipcbiAqIEV4cG9ydC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3BhY2VDYXNlXG5cbi8qKlxuICogQ29udmVydCBhIGBzdHJpbmdgIHRvIHNwYWNlIGNhc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHRvU3BhY2VDYXNlKHN0cmluZykge1xuICByZXR1cm4gY2xlYW4oc3RyaW5nKS5yZXBsYWNlKC9bXFxXX10rKC58JCkvZywgZnVuY3Rpb24gKG1hdGNoZXMsIG1hdGNoKSB7XG4gICAgcmV0dXJuIG1hdGNoID8gJyAnICsgbWF0Y2ggOiAnJ1xuICB9KS50cmltKClcbn1cbiJdLCJuYW1lcyI6WyJjbGVhbiIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwidG9TcGFjZUNhc2UiLCJzdHJpbmciLCJyZXBsYWNlIiwibWF0Y2hlcyIsIm1hdGNoIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/to-space-case/index.js\n");

/***/ })

};
;