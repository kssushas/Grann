(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&g(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function g(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const a=[{src:"../../img/best-1-1x.jpg",srcset:"../../img/best-1-2x-min.jpg 2x",title:"Mango-Passionfruit mousse cake",price:"1200UAH/3kg"},{src:"../../img/best-2-1x.jpg",srcset:"../../img/best-2-2x-min.jpg 2x",title:"Chocolate brownie",price:"300UAH/3pcs"},{src:"../../src/img/best-3-1x-min.jpg",srcset:"../../src/img/best-3-2x-min.jpg 2x",title:"Choux pastry",price:"400UAH/4pcs"},{src:"../src/img/catal-1-1x-min.jpg",srcset:"../src/img/catal-1-2x-min.jpg 2x",title:"Сhocolate cake with raspberries",price:"1000UAH/2kg"},{src:"./img/catal-2-1x-min.jpg",srcset:"./img/catal-2-2x-min.jpg 2x",title:"Passionfruit kiwi cake",price:"1100UAH/1.5kg"},{src:"./img/catal-3-1x-min.jpg",srcset:"./img/catal-3-2x-min.jpg 2x",title:"Snickers cake",price:"1400UAH/3kg"}],e={prevEl:document.querySelector(".prevEl"),nextEl:document.querySelector(".nextEl"),bestlist:document.querySelector(".bestlist"),el1:document.querySelector(".el-1"),el2:document.querySelector(".el-2"),el3:document.querySelector(".el-3")};e.nextEl.addEventListener("click",p);e.prevEl.addEventListener("click",d);let i=0;e.nextEl.style.backgroundColor="#F5EEE0";e.prevEl.style.backgroundColor="transparent";u(i);function u(r){switch(console.log(c(r)+c(r+1)),e.bestlist.innerHTML=c(r)+c(r+1),r){case 0:e.el1.style.fill="#705A66",e.el2.style.fill="#F5EEE0",e.el3.style.fill="#F5EEE0",e.prevEl.style.backgroundColor="transparent",e.nextEl.style.backgroundColor="#F5EEE0";break;case 2:e.el1.style.fill="#F5EEE0",e.el2.style.fill="#705A66",e.el3.style.fill="#F5EEE0",e.nextEl.style.backgroundColor="#F5EEE0",e.prevEl.style.backgroundColor="#F5EEE0";break;case 4:e.el1.style.fill="#F5EEE0",e.el2.style.fill="#F5EEE0",e.el3.style.fill="#705A66",e.nextEl.style.backgroundColor="transparent",e.prevEl.style.backgroundColor="#F5EEE0";break}}function p(){i+=2,a[i+1]!==void 0&&u(i)}function d(){i-=2,a[i]!==void 0&&u(i)}function c(r){return a.map((l,n)=>{if(r===n)return`<li class="best-item "><img srcset="${l.srcset}" src="${l.src}" alt="cakes" loading ="lazy" class="best-img fade-in"><div class="best-wrap"><h4 class="best-list-title">${l.title}</h4><p class="best-list-p">${l.price}</p><svg class="best-shop-card" width="30" height="30"><use href="./img/svg.svg#icon-shoping-cart"></use></svg></div></li>`}).join(" ")}
