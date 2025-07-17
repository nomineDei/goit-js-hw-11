import{a as u,S as d,i as m}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="51334256-c1710c37c982a8ca30afac428";function p(a){const r=new URLSearchParams({key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return u(`https://pixabay.com/api/?${r}`)}const n=document.querySelector(".gallery");let y=new d(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});function h(a){const r=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:c,downloads:l})=>`
     <li class="gallery-item">
        <a class="gallery-link" href="${s}">
            <img
             class="gallery-image"
             src="${o}"
             alt="${e}"
             width="360"
            />
        </a>
        <div class="image-info">
            <p><b>Likes</b> ${t}</p>
            <p><b>Views</b> ${i}</p>
            <p><b>Comments</b> ${c}</p>
            <p><b>Downloads</b> ${l}</p>
        </div>
    </li>
    `).join("");n.innerHTML=r,y.refresh()}function g(){n.innerHTML="",window.scrollTo({top:0,behavior:"smooth"})}function b(){document.querySelector(".loader").classList.remove("is-hidden")}function L(){document.querySelector(".loader").classList.add("is-hidden")}const w=document.querySelector(".form");document.querySelector(".gallery");w.addEventListener("submit",S);function S(a){g(),a.preventDefault(),b();const r=a.currentTarget.elements.searchText;p(r.value).then(o=>{if(o.data.hits.length===0)throw new Error("No result");h(o.data.hits)}).catch(o=>{console.error(o),m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3})}).finally(()=>{L(),r.value=""})}
//# sourceMappingURL=index.js.map
