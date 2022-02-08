(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds"),c=()=>{let e=(new Date("28 feb 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}},r=()=>{let e=c();t.textContent=("0"+e.hours).slice(-2),o.textContent=("0"+e.minutes).slice(-2),l.textContent=("0"+e.seconds).slice(-2)};c>0&&r(),setInterval((()=>{let e=c();e.timeRemaining>0?r():0===e.timeRemaining&&clearInterval(r)}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=t.querySelector(".close-btn"),l=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),o.addEventListener("click",c),l.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{window.outerWidth>768?(e.style.display="block",document.querySelector(".popup-content").animate([{opacity:0,transform:"translate3D(0, -300px, 0)"},{opacity:1}],{duration:500})):e.style.display="block"}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),l=document.querySelector(".calc-block"),c=document.querySelectorAll("form"),r=document.querySelector(".mess");c.forEach((e=>{const t=e.querySelector("input[type=text]"),o=e.querySelector("input[type=email]"),l=e.querySelector("input[type=tel]");t.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-я -]/gi,"")})),o.addEventListener("input",(e=>{e.preventDefault(),o.type="text",e.target.value=e.target.value.replace(/[^a-z0-9_.~*'!@-]/giu,"")})),l.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^0-9\(\)\-\+\ ]/g,"")}))})),r.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-я !?()-*%.,/]/gi,"")})),l.addEventListener("input",(l=>{l.preventDefault(),e.value=e.value.replace(/\D+/,""),t.value=t.value.replace(/\D+/,""),o.value=o.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const l=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===l?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let l,c=0;const r=()=>{const e=document.createElement("li");e.classList.add("dot"),o.append(e)};for(;o.childElementCount<t.length;){if(0===o.childElementCount){const e=document.createElement("li");e.classList.add("dot"),e.classList.add("dot-active"),o.append(e)}else if(o.childElementCount===t.length)return;r()}const a=(e,t,o)=>{e[t].classList.remove(o)},n=(e,t,o)=>{e[t].classList.add(o)},u=()=>{a(t,c,"portfolio-item-active"),a(o.querySelectorAll(".dot"),c,"dot-active"),c++,c>=t.length&&(c=0),n(t,c,"portfolio-item-active"),n(o.querySelectorAll(".dot"),c,"dot-active")},i=(e=1500)=>{l=setInterval(u,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(a(t,c,"portfolio-item-active"),a(o.querySelectorAll(".dot"),c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&o.querySelectorAll(".dot").forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),n(t,c,"portfolio-item-active"),n(o.querySelectorAll(".dot"),c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),a=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==l&&t.target!==c&&t.target!==r||(()=>{const t=+o.options[o.selectedIndex].value,n=l.value;let u=0,i=1,s=1;r.value&&r.value<5?s=2:r.value&&r.value<10&&(s=1.5),c.value>1&&(i+=+c.value/10),u=o.value&&l.value?e*t*n*i*s:0,a.textContent=u})()}))})(),(()=>{const e=document.querySelectorAll('a[href^="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))})()})();