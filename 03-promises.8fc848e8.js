function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");function l(e,t){const r=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();let r=Number(t.target[0].value);for(let n=1;n<=t.target[2].value;n+=1){l(n,r).then((t=>e(i).Notify.success(t))).catch((t=>e(i).Notify.failure(t))),r+=Number(t.target[1].value)}}));
//# sourceMappingURL=03-promises.8fc848e8.js.map