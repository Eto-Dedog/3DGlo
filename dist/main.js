(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),c=()=>{let e=(new Date("31 january 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}},l=()=>{let e=c();t.textContent=("0"+e.hours).slice(-2),n.textContent=("0"+e.minutes).slice(-2),o.textContent=("0"+e.seconds).slice(-2)};c>0&&l(),setInterval((()=>{let e=c();e.timeRemaining>0?l():0===e.timeRemaining&&clearInterval(l)}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{console.dir(document);const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close");t.forEach((t=>{t.addEventListener("click",(()=>{window.outerWidth>768?(e.style.display="block",document.querySelector(".popup-content").animate([{opacity:0,transform:"translate3D(0, -300px, 0)"},{opacity:1}],{duration:500})):e.style.display="block"}))})),n.addEventListener("click",(()=>{e.style.display="none"}))})()})();