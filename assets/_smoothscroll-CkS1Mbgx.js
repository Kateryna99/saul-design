document.addEventListener("click",s);function s(o){const t=o.target;if(t.closest("[data-goto]")){document.documentElement.classList.contains("menu-open")&&document.documentElement.classList.remove("menu-open");const n=t.closest("[data-goto]").dataset.goto,e=document.querySelector(n),c=document.querySelector(".header").offsetHeight;e&&window.scroll({top:e.offsetTop-(c+15),behavior:"smooth"}),o.preventDefault()}}
