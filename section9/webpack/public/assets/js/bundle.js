/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var result = document.querySelector('.result');
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('title')) {
    result.innerText = "Você clicou no título";
  } else {
    result.innerText = "Você clicou em outro lugar";
  }
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map