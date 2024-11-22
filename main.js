/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n\nfunction pageLoad(){\n    const divContent = document.getElementById('content');\n    divContent.innerHTML = `<img src=\"https://via.placeholder.com/800x400\" alt=\"Delicious food\">\n            <h1>About Us</h1>\n            <div style=\"background-color: #e6e6fa\">\n            <p>\n                Delightful Eats was founded with a passion for bringing people together over great food. \n                Join us to celebrate flavors and create unforgettable memories.\n            </div>\n            </p>`;\n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n\nfunction pageLoad(){\n    const divContent = document.getElementById('content');\n    divContent.innerHTML = `<img src=\"https://via.placeholder.com/800x400\" alt=\"Delicious food\">\n            <h1>Welcome to Delightful Eats</h1>\n            <div style=\"background-color: #f0f8ff\">\n            <p>\n                At Delightful Eats, we serve the finest gourmet dishes crafted with love and passion. \n                Enjoy a cozy ambiance, impeccable service, and flavors that will transport you to culinary heaven. \n                Visit us today to savor the experience!\n            </p>\n            </div>`\n            \n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n// alert(\"hello world!!!\")\n\n\n\n\n\nconst elements = document.getElementsByTagName(\"button\");\n// Attach event listeners to each button\nfor (let i = 0; i < elements.length; i++) {\n    elements[i].addEventListener(\"click\", myFunction);\n}\n\n// Define the function to handle button clicks\nfunction myFunction(event) {\n    const buttonText = event.target.innerText; // Get the text of the clicked button\n\n    switch (buttonText) {\n        case \"Home\":\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n            break;\n        case \"Menu\":\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.pageLoad)();\n            break;\n        case \"About\":\n            (0,_about_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad)();\n            break;\n        default:\n            console.error(\"Unknown button text:\", buttonText);\n    }\n}\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n\nfunction pageLoad(){\n    const divContent = document.getElementById('content');\n    divContent.innerHTML = `<img src=\"https://via.placeholder.com/800x400\" alt=\"Delicious food\">\n            <h1>Our Menu</h1>\n            <div style=\"background-color: #fffacd\">\n            <p>\n                Explore a variety of dishes, from sizzling appetizers to mouthwatering desserts. \n                Each plate is a masterpiece waiting to be savored.\n            </div>\n            </p>`;\n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;