(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const d=document.querySelectorAll(".category-menu-item-link"),i=document.querySelector(".optical"),n=document.querySelector(".sunglasses"),a=document.querySelector(".optical-section"),u=document.querySelector(".sunglasses-section");f()==="product.html"?p():console.log("not product");function f(){return window.location.pathname.split("/").pop()}function p(){d.forEach(o=>{o.addEventListener("click",function(s){console.log(s.target.innerText),g(),s.target.classList.toggle("active"),s.target.innerText==="OPTICAL"?(i.classList.add("active"),a.classList.add("active"),n.classList.remove("active"),u.classList.remove("active")):s.target.innerText==="SUNGLASSES"&&(i.classList.remove("active"),a.classList.remove("active"),n.classList.add("active"),u.classList.add("active"))})})}function g(){d.forEach(o=>{o.classList.remove("active")})}f()==="store.html"?m():console.log("not store");function m(){const o=document.querySelectorAll(".store-list-card"),s=document.querySelector("#locationInput");s.addEventListener("change",function(c){if(console.log(c.target.value),c.target.value==="台北市")for(let e=0;e<5;e++)e==0||e==1?o[e].style.display="block":o[e].style.display="none";else if(c.target.value==="台中市")for(let e=0;e<5;e++)e==2?o[e].style.display="block":o[e].style.display="none";else if(c.target.value==="高雄市")for(let e=0;e<5;e++)e==3||e==4?o[e].style.display="block":o[e].style.display="none";else for(let e=0;e<5;e++)o[e].style.display="block";s.addEventListener("click",function(e){e.target&&(e.target.value="")})})}
