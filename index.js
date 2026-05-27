import{a as d,S as f,i}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function g(o){const t=new URLSearchParams({key:"56012300-f086c257a570084238c9733eb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get("https://pixabay.com/api/",{params:t}).then(n=>n.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),m=new f(".gallery a",{captionsData:"alt",captionDelay:250});function p({webformatURL:o,largeImageURL:t,tags:s,likes:n,views:e,comments:r,downloads:a}){return`
    <li class="gallery-item">
      <a href="${t}" data-lightbox="gallery">
        <img src="${o}" alt="${s}" />
      </a>
      <div class="details">
        <p><strong>Likes:</strong> ${n}</p>
        <p><strong>Views:</strong> ${e}</p>
        <p><strong>Comments:</strong> ${r}</p>
        <p><strong>Downloads:</strong> ${a}</p>
      </div>
    </li>
  `}function h(o){const t=o.map(p).join("");l.innerHTML=t,m.refresh()}function y(){l.innerHTML=""}function L(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(console.log("Search query:",t),!t){i.info({title:"Info",message:"Please enter a search query.",position:"topRight"});return}y(),L(),g(t).then(s=>{if(s.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s.hits)}).catch(s=>{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S()}),c.reset()});
//# sourceMappingURL=index.js.map
