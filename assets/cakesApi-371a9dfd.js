(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const n={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),mobileMenuLinks:document.querySelectorAll(".mob-link")};n.openMenuBtn.addEventListener("click",p);n.closeMenuBtn.addEventListener("click",p);document.addEventListener("DOMContentLoaded",l);function p(){n.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function l(){n.mobileMenuLinks.forEach(c=>{c.addEventListener("click",u)})}function u(c){c.preventDefault(),this.getAttribute("href").split("#")[0];const t=this.getAttribute("href").split("#")[1],r=document.getElementById(t);r&&(r.scrollIntoView({behavior:"smooth"}),n.menu.classList.add("is-hidden"),document.body.classList.toggle("no-scroll"))}const d="/Grann/assets/best-1-1x-f34a5808.jpg",f="/Grann/assets/best-1-2x-min-b18d24bf.jpg",m="/Grann/assets/best-2-1x-min-bc5cefd3.jpg",g="/Grann/assets/best-2-2x-min-f7017007.jpg",o="/Grann/assets/best-min-b7034760.jpg",h="/Grann/assets/catal-1-1x-min-7680421d.jpg",b="/Grann/assets/catal-1-2x-min-6eb4bb8b.jpg",z="/Grann/assets/catal-2-1x-min-1965d2df.jpg",k="/Grann/assets/catal-2-2x-min-8d2fab4e.jpg",y="/Grann/assets/catal-3-1x-min-57a29785.jpg",G="/Grann/assets/catal-3-2x-min-4b93d5f1.jpg",A="/Grann/assets/shy-min-f96d1842.jpg",H="/Grann/assets/shy2-min-26ee150a.jpg",j="/Grann/assets/shy3-min-6f0a1e95.jpg",U="/Grann/assets/shy4-min-1f95a868.jpg",x="/Grann/assets/best-3-1x-min-e8802001.jpg",L="/Grann/assets/tistechko4-3ed2f397.png",w="/Grann/assets/tistechko7-min-3785b187.jpg",P="/Grann/assets/tistechko6-min-551052d0.jpg",M="/Grann/assets/tistechko-1af78365.png",C="/Grann/assets/tistechko2-9507041e.png",E="/Grann/assets/tistechko3-f20a35f6.png",v="/Grann/assets/tistechko5-57b1af9d.png",S="/Grann/assets/pizza1-min-29a1899d.jpeg",B="/Grann/assets/pizza2-min-960e10c8.jpg",O="/Grann/assets/pizza3-min-245b002a.jpg",q="/Grann/assets/pizza4-min-4af0dc79.jpeg",I="/Grann/assets/pizza6-min-cf8ea013.jpg",N="/Grann/assets/pizza7-min-32fdd6f6.jpg",F=[{src:S,title:"Pizza 'Cezar'",price:"300UAH/1"},{src:B,title:"Pizza '4-meat'",price:"400UAH/1"},{src:O,title:"Pizza '4-chesse'",price:"350UAH/1"},{src:q,title:"Pizza '4-seasons'",price:"400UAH/1"},{src:I,title:"Hawaiian pizza",price:"300UAH/1"},{src:N,title:"Viennese pizza",price:"300UAH/1"}],D=[{src:A,title:"Classic cream puff",price:"200UAH/5pcs"},{src:H,title:"Cream puff with strawberry filling",price:"300UAH/5pcs"},{src:j,title:"Cream puff with strawberry filling and chocolate topping",price:"500UAH/5pcs"},{src:U,title:"French-style cream puff",price:"500UAH/5pcs"},{src:x,title:"Choux pastry",price:"400UAH/4pcs"},{src:L,title:"Cream puff with nuts",price:"600UAH/4pcs"}],V=[{src:d,srcset:f,title:"Mango-Passionfruit mousse cake",price:"1200UAH/3kg"},{src:m,srcset:g,title:"Chocolate brownie",price:"300UAH/3pcs"},{src:h,srcset:b,title:"Сhocolate cake with raspberries",price:"1000UAH/2kg"},{src:z,srcset:k,title:"Passionfruit kiwi cake",price:"1100UAH/1.5kg"},{src:y,srcset:G,title:"Snickers cake",price:"1400UAH/3kg"},{src:o,srcset:o,title:"Napoleon",price:"700UAH/2kg"}],K=[{src:w,title:"Pistachio-raspberry pastry",price:"100UAH/1pcs"},{src:P,title:"Waffle-nut pastry",price:"350UAH/2pcs"},{src:M,title:"Strawberry tart",price:"900UAH/5pcs"},{src:C,title:"Ecstasy pastry",price:"600UAH/3pcs"},{src:E,title:"Pastry with custard cream and strawberries",price:"600UAH/6pcs"},{src:v,title:"Berry cheesecake",price:"500UAH/3pcs"}];export{K as a,D as b,F as c,V as r};
