document.addEventListener("DOMContentLoaded", function() {
   document.querySelectorAll("img").forEach(img => {
       img.setAttribute("loading", "lazy");
   });
});
if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/assets/js/sw.js').then(() => {
       // console.log("service worker registered");
   });
}
function handleTransition(href) {
    if (!document.startViewTransition) {
      window.location.href = href;
      return;
    }
  
    document.startViewTransition(() => {
      window.location.href = href;
    });
  }