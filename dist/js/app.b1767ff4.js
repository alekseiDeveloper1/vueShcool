(function(e){function n(n){for(var r,c,i=n[0],a=n[1],l=n[2],s=0,d=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,i=1;i<t.length;i++){var a=t[i];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},u=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=a;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"40ef":function(e,n,t){"use strict";t("4a0f")},"4a0f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o={id:"app"},u=Object(r["d"])("h1",null,"Remember the number",-1),c=Object(r["d"])("hr",null,null,-1);function i(e,n,t,i,a,l){var f=Object(r["f"])("Form"),s=Object(r["f"])("myScript");return Object(r["e"])(),Object(r["b"])("div",o,[u,c,Object(r["d"])(f),Object(r["d"])(s)])}var a=t("68b0"),l=t.n(a),f=Object(r["c"])('<form class="number-form__first"><input class="number-input" name="number" min="2" max="5" placeholder="введите размер числа 2-3-4-5 разрядов" type="number" required><input class="number-input" name="time" step="0.1" min="0.2" max="2" placeholder="введите время показа от 0.2 до 2 секунд" type="number" required><button class="number-btn"> start </button></form><form class="number-form__last hide"><input class="number-input" name="int" placeholder="введите число" type="number" required><button class="number-btn"> start </button></form>',2);function s(e,n){return Object(r["e"])(),Object(r["b"])("div",null,[f])}t("5e2c");const d={};d.render=s;var m=d,b={name:"App",components:{Form:m,myScript:l.a}};t("40ef");b.render=i;var p=b;Object(r["a"])(p).mount("#app")},"5e2c":function(e,n,t){"use strict";t("f40c")},"68b0":function(e,n,t){t("c1f9"),t("d3b7"),t("ddb0"),window.document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".number-form__first"),n=document.querySelector(".number-form__last"),t=document.querySelector("div");function r(e){e.addEventListener("submit",(function(n){n.preventDefault(),e.classList.add("hide");var t=new FormData(e),r=Object.fromEntries(t.entries());o(r),e.reset()}))}function o(e){e.time&&e.number?u(e):i(e.int,document.querySelector(".number").innerHTML)}function u(e){console.log(e.number);var n=Math.floor(Math.random()*Math.pow(10,e.number)),t=1e3*e.time;c(n,t)}function c(e,r){var o=document.createElement("div");o.innerHTML=e,o.classList.add("number"),o.style.fontSize="50px",t.append(o),setTimeout((function(){t.querySelector(".number").style.display="none",n.classList.remove("hide")}),r)}function i(e,n){t.innerHTML=e==n?"Успех":"Неудача",setTimeout((function(){window.location="/"}),2e3)}r(n),r(e)}))},f40c:function(e,n,t){}});
//# sourceMappingURL=app.b1767ff4.js.map