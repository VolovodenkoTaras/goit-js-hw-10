const e={headers:{"X-Api-Key":"dd82ff3604224bf1b224da3ef75c9135"}};const t=document.getElementById("form"),n=document.getElementById("newsWrapper"),s=new class{getNews(){const t=`https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&page=${this.page}`;return fetch(t,e).then((e=>e.json())).then((({articles:e})=>(this.nextPage(),e)))}nextPage(){this.page+=1}resetPage(){this.page=1}constructor(){this.page=1,this.searchQuery=""}},r=new class{getButton(e){return document.querySelector(e)}hide(){this.button.classList.add("hidden")}show(){this.button.classList.remove("hidden")}disable(){this.button.disabled=!0,this.button.textContent="Loading..."}enable(){this.button.disabled=!1,this.button.textContent="Load more"}constructor({selector:e,isHidden:t}){this.button=this.getButton(e),t?this.hide():this.show()}}({selector:"#loadMore",isHidden:!0});function i(){return r.disable(),s.getNews().then((e=>{if(0===e.length)throw new Error("No data");return e.reduce(((e,t)=>function({author:e,title:t,description:n,url:s,urlToImage:r}){return`\n  <div class="article-card">\n    <img src=${r} class="article-img" />\n    <h2 class="article-title">${t}</h2>\n    <h3 class="article-author">${e||"anonymous"}</h3>\n    <p  class="article-description">${n}</p>\n    <a href=${s} class="article-link" target="_blank">Read more</a>\n  </div>\n  `}(t)+e),"")})).then((e=>{a(e),r.enable()})).catch(o)}function a(e){n.insertAdjacentHTML("beforeend",e)}function o(e){console.error(e),r.hide(),a("<p>Articles not found</p>")}t.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget,a=t.elements.news.value.trim();s.searchQuery=a,s.resetPage(),n.innerHTML="",r.show(),i().finally((()=>t.reset()))})),r.button.addEventListener("click",i);
//# sourceMappingURL=news-wrapper.e7e57a93.js.map
