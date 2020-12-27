/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("\n\nvar a = 10;\nvar b = 20;\n\nvar sum = function sum(a, b) {\n  return a + b;\n};\n\nconsole.log(sum(a, b));\n\nconsole.log('rohan');\n\n//# sourceURL=webpack://es-6/./src/index.js?");
})();

(() => {
/*!**************************!*\
  !*** ./src/let+const.js ***!
  \**************************/
eval("\n\n//const\nvar arr = [];\narr.push(12);\narr.push(20);\n\n// arr = []; we can not override or replace because we use const\n\nconsole.log(arr);\n\n// var\n\nvar a = 10;\n\nif (true) {\n    var a = 20;\n    console.log(a);\n}\nconsole.log(a);\n/*  our ans should be 10 but ans will be 20\r\nbecause var is also accessible for block level outsite.\r\nif we use let.... \r\n*/\n\n//let\n\nvar b = 10;\nif (true) {\n    var _b = 20;\n    console.log(_b);\n}\nconsole.log(b);\n\n//# sourceURL=webpack://es-6/./src/let+const.js?");
})();

(() => {
/*!********************************!*\
  !*** ./src/Template_String.js ***!
  \********************************/
eval("\n\nvar name = 'MD AYUB SHAMIM';\nvar age = 24;\nvar email = 'ahmed1.ayub6717@gmail.com';\nvar address = 'Dhaka';\n\n// const details = 'Name: ' + name + 'Age: ' + age + 'Email: ' + email\n/* this is previous style and very annoying */\n\nvar details = 'Name: ' + name + '; Age: ' + age + '; Email: ' + email + '; Address: ' + address;\nconsole.log(details);\n/* Easy  to concat that's why use template string*/\n\n//# sourceURL=webpack://es-6/./src/Template_String.js?");
})();

/******/ })()
;