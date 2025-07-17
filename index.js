import{a as m,S as f,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="51334256-c1710c37c982a8ca30afac428";function h(i){return m("https://pixabay.com/api/",{params:{key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>[])}const l=document.querySelector(".gallery");let y=new f(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});function g(i){const r=i.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
     <li class="gallery-item">
        <a class="gallery-link" href="${o}">
            <img
             class="gallery-image"
             src="${a}"
             alt="${e}"
             width="360"
            />
        </a>
        <div class="image-info">
            <p><b>Likes</b> ${t}</p>
            <p><b>Views</b> ${s}</p>
            <p><b>Comments</b> ${u}</p>
            <p><b>Downloads</b> ${d}</p>
        </div>
    </li>
    `).join("");l.innerHTML=r,y.refresh()}function b(){l.innerHTML="",window.scrollTo({top:0,behavior:"smooth"})}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function c(){document.querySelector(".loader").classList.add("is-hidden")}const v=document.querySelector(".form");v.addEventListener("submit",w);function w(i){b(),i.preventDefault(),L();const r=i.currentTarget.elements.searchText,a=r.value.trim();if(!a){n.info({title:"Please!",message:"Enter request!",position:"topRight",timeout:3e3}),r.value="",c();return}h(a).then(o=>{if(o.length===0)throw new Error("No result");g(o)}).catch(o=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3})}).finally(()=>{c(),r.value=""})}
//# sourceMappingURL=index.js.map
