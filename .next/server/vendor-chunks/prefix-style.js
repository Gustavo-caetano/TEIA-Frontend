"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/prefix-style";
exports.ids = ["vendor-chunks/prefix-style"];
exports.modules = {

/***/ "(ssr)/./node_modules/prefix-style/index.js":
/*!********************************************!*\
  !*** ./node_modules/prefix-style/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\nvar div = null;\nvar prefixes = [\n    \"Webkit\",\n    \"Moz\",\n    \"O\",\n    \"ms\"\n];\nmodule.exports = function prefixStyle(prop) {\n    // re-use a dummy div\n    if (!div) {\n        div = document.createElement(\"div\");\n    }\n    var style = div.style;\n    // prop exists without prefix\n    if (prop in style) {\n        return prop;\n    }\n    // borderRadius -> BorderRadius\n    var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1);\n    // find the vendor-prefixed prop\n    for(var i = prefixes.length; i >= 0; i--){\n        var name = prefixes[i] + titleCase;\n        // e.g. WebkitBorderRadius or webkitBorderRadius\n        if (name in style) {\n            return name;\n        }\n    }\n    return false;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcHJlZml4LXN0eWxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxNQUFNO0FBQ1YsSUFBSUMsV0FBVztJQUFFO0lBQVU7SUFBTztJQUFLO0NBQU07QUFFN0NDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxZQUFhQyxJQUFJO0lBQ3pDLHFCQUFxQjtJQUNyQixJQUFJLENBQUNMLEtBQUs7UUFDUkEsTUFBTU0sU0FBU0MsYUFBYSxDQUFDO0lBQy9CO0lBRUEsSUFBSUMsUUFBUVIsSUFBSVEsS0FBSztJQUVyQiw2QkFBNkI7SUFDN0IsSUFBSUgsUUFBUUcsT0FBTztRQUNqQixPQUFPSDtJQUNUO0lBRUEsK0JBQStCO0lBQy9CLElBQUlJLFlBQVlKLEtBQUtLLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtOLEtBQUtPLEtBQUssQ0FBQztJQUUxRCxnQ0FBZ0M7SUFDaEMsSUFBSyxJQUFJQyxJQUFJWixTQUFTYSxNQUFNLEVBQUVELEtBQUssR0FBR0EsSUFBSztRQUN6QyxJQUFJRSxPQUFPZCxRQUFRLENBQUNZLEVBQUUsR0FBR0o7UUFDekIsZ0RBQWdEO1FBQ2hELElBQUlNLFFBQVFQLE9BQU87WUFDakIsT0FBT087UUFDVDtJQUNGO0lBRUEsT0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9yaXpvbi1haS10ZW1wbGF0ZS1wcm8vLi9ub2RlX21vZHVsZXMvcHJlZml4LXN0eWxlL2luZGV4LmpzP2RlYmUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpdiA9IG51bGxcbnZhciBwcmVmaXhlcyA9IFsgJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycgXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHByZWZpeFN0eWxlIChwcm9wKSB7XG4gIC8vIHJlLXVzZSBhIGR1bW15IGRpdlxuICBpZiAoIWRpdikge1xuICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH1cblxuICB2YXIgc3R5bGUgPSBkaXYuc3R5bGVcblxuICAvLyBwcm9wIGV4aXN0cyB3aXRob3V0IHByZWZpeFxuICBpZiAocHJvcCBpbiBzdHlsZSkge1xuICAgIHJldHVybiBwcm9wXG4gIH1cblxuICAvLyBib3JkZXJSYWRpdXMgLT4gQm9yZGVyUmFkaXVzXG4gIHZhciB0aXRsZUNhc2UgPSBwcm9wLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKVxuXG4gIC8vIGZpbmQgdGhlIHZlbmRvci1wcmVmaXhlZCBwcm9wXG4gIGZvciAodmFyIGkgPSBwcmVmaXhlcy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIG5hbWUgPSBwcmVmaXhlc1tpXSArIHRpdGxlQ2FzZVxuICAgIC8vIGUuZy4gV2Via2l0Qm9yZGVyUmFkaXVzIG9yIHdlYmtpdEJvcmRlclJhZGl1c1xuICAgIGlmIChuYW1lIGluIHN0eWxlKSB7XG4gICAgICByZXR1cm4gbmFtZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuIl0sIm5hbWVzIjpbImRpdiIsInByZWZpeGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInByZWZpeFN0eWxlIiwicHJvcCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwidGl0bGVDYXNlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImkiLCJsZW5ndGgiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/prefix-style/index.js\n");

/***/ })

};
;