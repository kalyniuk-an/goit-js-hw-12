import{a as g,S as f,i}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function m(o,t=1){const a=new URLSearchParams({key:"56012300-f086c257a570084238c9733eb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});return(await g.get("https://pixabay.com/api/",{params:a})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");document.querySelector(".loader-more");const p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y({webformatURL:o,largeImageURL:t,tags:a,likes:n,views:e,comments:r,downloads:s}){return`
    <li class="gallery-item">
      <a href="${t}" data-lightbox="gallery">
        <img src="${o}" alt="${a}" />
      </a>
      <div class="details">
        <p><strong>Likes:</strong> ${n}</p>
        <p><strong>Views:</strong> ${e}</p>
        <p><strong>Comments:</strong> ${r}</p>
        <p><strong>Downloads:</strong> ${s}</p>
      </div>
    </li>
  `}function h(o){const t=o.map(y).join("");l.innerHTML=t,p.refresh()}function L(){l.innerHTML=""}function S(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const d=document.querySelector(".form");let c=1;d.addEventListener("submit",w);async function w(o){o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(console.log("Search query:",t),!t){i.info({title:"Info",message:"Please enter a search query.",position:"topRight"});return}c=1,L(),S();try{const a=await m(t,c);if(a.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(a.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q()}d.reset()}
//# sourceMappingURL=index.js.map
