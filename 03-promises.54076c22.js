!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("iU1Pc");function u(e,n){var t=Math.random()>.3;return new Promise((function(r,o){setTimeout((function(){t?r("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(n.target[0].value),r=1;r<=n.target[2].value;r+=1){u(r,t).then((function(n){return e(i).Notify.success(n)})).catch((function(n){return e(i).Notify.failure(n)})),t+=Number(n.target[1].value)}}))}();
//# sourceMappingURL=03-promises.54076c22.js.map