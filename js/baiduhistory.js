/**
 * Minified by jsDelivr using Terser v5.13.1.
 * Original file: /gh/Zfour/Butterfly-card-history@master/baiduhistory/js/main.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
 if(document.getElementById("history-container")){function append(t,e){if("string"==typeof e){var n=document.createElement("div");n.innerHTML=e;for(var i=document.createDocumentFragment();n.firstChild;)i.appendChild(n.firstChild);t.appendChild(i)}else t.appendChild(e)}function history_get_data(){var t=new Date,e=t.getMonth()+1;getMonth=e<10?"0"+String(e):String(e);var n=String(t.getDate());n=n<10?"0"+String(n):String(n);var i="S"+getMonth+n;return["https://fastly.jsdelivr.net/gh/Zfour/Butterfly-card-history@latest/baiduhistory/json/"+getMonth+".json",i]}var history_data=history_get_data();fetch(history_data[0]).then((t=>t.json())).then((t=>{for(var e of(console.log(t[history_data[1]]),html_item="",t[history_data[1]]))html_item+='<div class="swiper-slide history_slide"><span class="history_slide_time">A.D.'+e.year+'</span><span class="history_slide_link">'+e.title+"</span></div>";append(document.getElementById("history_container_wrapper"),html_item);var n=new Swiper(".history_swiper-container",{passiveListeners:!0,spaceBetween:30,effect:"coverflow",coverflowEffect:{rotate:30,slideShadows:!1},loop:!0,direction:"vertical",autoplay:{disableOnInteraction:!0,delay:5e3},mousewheel:!1}),i=document.getElementById("history-container");i.onmouseenter=function(){n.autoplay.stop()},i.onmouseleave=function(){n.autoplay.start()}}))}
 //# sourceMappingURL=/sm/da1f37f0c2a26401f3f0c30d18cc14f5f876ba337f40286e58608b4d2ff5c89e.map