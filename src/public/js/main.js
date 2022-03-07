
// Open/close mobile-menu-bar
var menuBtn = document.getElementById('close-sitebar-btn');
var siteMenu = document.getElementById('header-bottom');
console.log(window.getComputedStyle(siteMenu).overflow ==='hidden')

menuBtn.onclick = function() {
   if (window.getComputedStyle(siteMenu).overflow === 'hidden') {
     siteMenu.style.overflow = 'visible';
   }
   else {
      siteMenu.style.overflow = 'hidden';
   }
}


