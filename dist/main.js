(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),c=()=>{let e=(()=>{let e=(new Date("31 january 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.hours,n.textContent=e.minutes,o.textContent=e.seconds,e.timeRemaining>0&&setTimeout(c,1e3)};c()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>{e.addEventListener("click",c)}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-close");t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})),n.addEventListener("click",(()=>{e.style.display="none"}))})()})();