// Open/close mobile-menu-bar
var menuBtn = document.getElementById('close-sitebar-btn');
var siteMenu = document.getElementById('header-bottom');

menuBtn.onclick = function () {
   if (window.getComputedStyle(siteMenu).overflow === 'hidden') {
      siteMenu.style.overflow = 'visible';
   }
   else {
      siteMenu.style.overflow = 'hidden';
   }
}

// dropdown phần tìm kiếm nhanh
var accordions = document.getElementsByClassName("room-categories-item");

for (var i = 0; i < accordions.length; i++) {
   accordions[i].onclick = function () {
      this.classList.toggle('is-open');

      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
         // accordion is currently open, so close it
         content.style.maxHeight = null;
      } else {
         // accordion is currently closed, so open it
         content.style.maxHeight = content.scrollHeight + "px";
      }
   }
}


// Chỉnh format ngày/ tháng/ năm và chỉ được chọn ngày hiện tại trở đi
config_LocalTime = {
   dateFormat: "d-m-Y",
   minDate: "today",
}
flatpickr("input[type=datetime-local]", config_LocalTime);

// Filter rooms by searchbar 
   const searchingWord = document.querySelector('#myInput').addEventListener("keyup", function () {
   const keyword = document.querySelector('#myInput');
   const value = keyword.value.toLowerCase();

   const rooms = document.querySelectorAll('.js-myroom').forEach(room => {
      var items = room.querySelector('*').innerText;
      var itemsRemoveComma = items.replaceAll(',', '');
      if (value == '') {
         room.classList.remove("room-filter-none")
      }
      else if (itemsRemoveComma.toLowerCase().indexOf(value) > -1) {
         room.classList.remove("room-filter-none")
      }

      else {
         room.classList.add("room-filter-none")
      }
   });
})
   
// Filter feedback by searchbar 



