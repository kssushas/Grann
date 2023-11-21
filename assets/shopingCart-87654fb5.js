(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const l={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),mobileMenuLinks:document.querySelectorAll(".mob-link")},b="https://kssushas.github.io/Grann/",y="/Grann/";l.openMenuBtn.addEventListener("click",f);l.closeMenuBtn.addEventListener("click",f);document.addEventListener("DOMContentLoaded",k);function f(){l.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function k(){l.mobileMenuLinks.forEach(s=>{s.addEventListener("click",L)})}function L(s){s.preventDefault();const t=this.getAttribute("href").split("#")[0],i=this.getAttribute("href").split("#")[1],c=document.getElementById(i);c&&(c.scrollIntoView({behavior:"smooth"}),l.menu.classList.add("is-hidden"),document.body.classList.toggle("no-scroll")),`${y}${t}`!==window.location.pathname&&(window.location.href=`${b}${t}#${i}`)}const z="/Grann/assets/best-1-1x-f34a5808.jpg",S="/Grann/assets/best-1-2x-min-b18d24bf.jpg",G="/Grann/assets/best-2-1x-min-bc5cefd3.jpg",j="/Grann/assets/best-2-2x-min-f7017007.jpg",p="/Grann/assets/best-min-b7034760.jpg",A="/Grann/assets/catal-1-1x-min-7680421d.jpg",w="/Grann/assets/catal-1-2x-min-6eb4bb8b.jpg",U="/Grann/assets/catal-2-1x-min-1965d2df.jpg",H="/Grann/assets/catal-2-2x-min-8d2fab4e.jpg",v="/Grann/assets/catal-3-1x-min-57a29785.jpg",x="/Grann/assets/catal-3-2x-min-4b93d5f1.jpg",I="/Grann/assets/shy-min-f96d1842.jpg",O="/Grann/assets/shy2-min-26ee150a.jpg",E="/Grann/assets/shy3-min-6f0a1e95.jpg",B="/Grann/assets/shy4-min-1f95a868.jpg",P="/Grann/assets/best-3-1x-min-e8802001.jpg",q="/Grann/assets/tistechko4-3ed2f397.png",N="/Grann/assets/tistechko7-min-3785b187.jpg",C="/Grann/assets/tistechko6-min-551052d0.jpg",M="/Grann/assets/tistechko-1af78365.png",$="/Grann/assets/tistechko2-9507041e.png",T="/Grann/assets/tistechko3-f20a35f6.png",J="/Grann/assets/tistechko5-57b1af9d.png",D="/Grann/assets/pizza1-min-29a1899d.jpeg",F="/Grann/assets/pizza2-min-960e10c8.jpg",K="/Grann/assets/pizza3-min-245b002a.jpg",R="/Grann/assets/pizza4-min-4af0dc79.jpeg",V="/Grann/assets/pizza6-min-cf8ea013.jpg",W="/Grann/assets/pizza7-min-32fdd6f6.jpg",Q=[{id:1,src:D,title:"Pizza 'Cezar'",price:"300UAH/1"},{id:2,src:F,title:"Pizza '4-meat'",price:"400UAH/1"},{id:3,src:K,title:"Pizza '4-chesse'",price:"350UAH/1"},{id:4,src:R,title:"Pizza '4-seasons'",price:"400UAH/1"},{id:5,src:V,title:"Hawaiian pizza",price:"300UAH/1"},{id:6,src:W,title:"Viennese pizza",price:"300UAH/1"}],X=[{id:7,src:I,title:"Classic cream puff",price:"200UAH/5pcs"},{id:8,src:O,title:"Cream puff with strawberry filling",price:"300UAH/5pcs"},{id:9,src:E,title:"Cream puff with strawberry filling and chocolate topping",price:"500UAH/5pcs"},{id:10,src:B,title:"French-style cream puff",price:"500UAH/5pcs"},{id:11,src:P,title:"Choux pastry",price:"400UAH/4pcs"},{id:12,src:q,title:"Cream puff with nuts",price:"600UAH/4pcs"}],Y=[{id:13,src:z,srcset:S,title:"Mango-Passionfruit mousse cake",price:"1200UAH/3kg"},{id:14,src:G,srcset:j,title:"Chocolate brownie",price:"300UAH/3pcs"},{id:15,src:A,srcset:w,title:"Сhocolate cake with raspberries",price:"1000UAH/2kg"},{id:16,src:U,srcset:H,title:"Passionfruit kiwi cake",price:"1100UAH/1.5kg"},{id:17,src:v,srcset:x,title:"Snickers cake",price:"1400UAH/3kg"},{id:18,src:p,srcset:p,title:"Napoleon",price:"700UAH/2kg"}],Z=[{id:19,src:N,title:"Pistachio-raspberry pastry",price:"100UAH/1pcs"},{id:20,src:C,title:"Waffle-nut pastry",price:"350UAH/2pcs"},{id:21,src:M,title:"Strawberry tart",price:"900UAH/5pcs"},{id:22,src:$,title:"Ecstasy pastry",price:"600UAH/3pcs"},{id:23,src:T,title:"Pastry with custard cream and strawberries",price:"600UAH/6pcs"},{id:24,src:J,title:"Berry cheesecake",price:"500UAH/3pcs"}],g=[Y,Z,X,Q],se="/Grann/assets/svg-85fb7ccb.svg#icon-shoping-cart",u={listOfProducts:document.querySelector(".storage-js")},r="data";let o=[];localStorage.getItem(r)&&(o=JSON.parse(localStorage.getItem(r)));u.listOfProducts&&u.listOfProducts.addEventListener("click",_);function _(s){if(s.target.nodeName!=="use")return;const t=s.target.closest("li").id;ee(t)}const m=(s,t,i)=>{const c=e=>{e.target.nodeName==="BUTTON"&&(s.classList.remove("show-wrap"),t.style.display="block",te(i),s.removeEventListener("click",c))};return c};function ee(s){const t=g.flat().find(n=>n.id===parseInt(s));o.push(t),localStorage.setItem(r,JSON.stringify(o));const i=document.getElementById(s),c=i.querySelector(".js-btn-wrap"),e=i.querySelector(".js-add-basket");c.classList.add("show-wrap"),e.style.display="none",c.addEventListener("click",m(c,e,t))}function ne(){if(localStorage.getItem(r)){const s=JSON.parse(localStorage.getItem(r));for(let t of s)if(document.getElementById(t.id)){const i=g.flat().find(a=>a.id===parseInt(t.id)),c=document.getElementById(t.id),e=c.querySelector(".js-btn-wrap"),n=c.querySelector(".js-add-basket");e.classList.add("show-wrap"),n.style.display="none",e.addEventListener("click",m(e,n,i))}}}function te(s){const t=o.findIndex(i=>i.id===s.id);o.splice(t,1),localStorage.setItem(r,JSON.stringify(o))}const d={openShopListBtn:document.querySelector("[data-shopList-open]"),closeShopListBtn:document.querySelector("[data-shopList-close]"),shopList:document.querySelector("[data-shopList]")};d.openShopListBtn.addEventListener("click",h);d.closeShopListBtn.addEventListener("click",h);function h(){d.shopList.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}export{ne as c,g as d,Y as r,se as s};
