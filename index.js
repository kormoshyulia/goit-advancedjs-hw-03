import{a as m,S as p,i as a}from"./assets/vendor-BzeJ7Hez.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="55614752-bda5b7428fe7eb42fb14ee41b";function y(i){return m.get(g,{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),f=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b>${t}</p>
            <p class="info-item"><b>Views</b>${s}</p>
            <p class="info-item"><b>Comments</b>${u}</p>
            <p class="info-item"><b>Downloads</b>${d}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function w(){f.classList.remove("is-hidden")}function P(){f.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){a.warning({message:"Please fill in the search field!",position:"topRight"});return}S(),w(),y(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{P(),l.reset()})});
//# sourceMappingURL=index.js.map
