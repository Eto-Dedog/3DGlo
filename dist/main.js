(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),c=()=>{let e=(new Date("31 january 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}},r=()=>{let e=c();t.textContent=("0"+e.hours).slice(-2),l.textContent=("0"+e.minutes).slice(-2),o.textContent=("0"+e.seconds).slice(-2)};c>0&&r(),setInterval((()=>{let e=c();e.timeRemaining>0?r():0===e.timeRemaining&&clearInterval(r)}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),l=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),l.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{window.outerWidth>768?(e.style.display="block",document.querySelector(".popup-content").animate([{opacity:0,transform:"translate3D(0, -300px, 0)"},{opacity:1}],{duration:500})):e.style.display="block"}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),o=document.querySelector(".calc-block"),c=document.querySelectorAll("form"),r=document.querySelector(".mess");c.forEach((e=>{const t=e.querySelector("input[type=text]"),l=e.querySelector("input[type=email]"),o=e.querySelector("input[type=tel]");t.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-я -]/gi,"")})),l.addEventListener("input",(e=>{e.preventDefault(),l.type="text",e.target.value=e.target.value.replace(/[^a-z0-9_.~*'!@-]/giu,"")})),o.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^0-9\(\)\-\+\ ]/g,"")}))})),r.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-я !?()-*%.,/]/gi,"")})),o.addEventListener("input",(o=>{o.preventDefault(),e.value=e.value.replace(/\D+/,""),t.value=t.value.replace(/\D+/,""),l.value=l.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),l=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),l[t].classList.remove("d-none")):(e.classList.remove("active"),l[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),l=document.querySelector(".portfolio-dots");let o,c=0;const r=()=>{const e=document.createElement("li");e.classList.add("dot"),l.append(e)};for(;l.childElementCount<t.length;){if(0===l.childElementCount){const e=document.createElement("li");e.classList.add("dot"),e.classList.add("dot-active"),l.append(e)}else if(l.childElementCount===t.length)return;r()}const a=(e,t,l)=>{e[t].classList.remove(l)},n=(e,t,l)=>{e[t].classList.add(l)},u=()=>{a(t,c,"portfolio-item-active"),a(l.querySelectorAll(".dot"),c,"dot-active"),c++,c>=t.length&&(c=0),n(t,c,"portfolio-item-active"),n(l.querySelectorAll(".dot"),c,"dot-active")},i=(e=1500)=>{o=setInterval(u,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(a(t,c,"portfolio-item-active"),a(l.querySelectorAll(".dot"),c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&l.querySelectorAll(".dot").forEach(((t,l)=>{e.target===t&&(c=l)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),n(t,c,"portfolio-item-active"),n(l.querySelectorAll(".dot"),c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(o)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),l=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),a=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==l&&t.target!==o&&t.target!==c&&t.target!==r||(()=>{const t=+l.options[l.selectedIndex].value,n=o.value;let u=0,i=1,s=1;r.value&&r.value<5?s=2:r.value&&r.value<10&&(s=1.5),c.value>1&&(i+=+c.value/10),u=l.value&&o.value?e*t*n*i*s:0,a.textContent=u})()}))})()})();