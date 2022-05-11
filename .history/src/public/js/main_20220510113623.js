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

var checkinDate = document.getElementById('checkin').addEventListener('onchange',function() {
   console.log(checkinDate.value);
});
   

config_CheckOut_Time = {
   dateFormat: "d-m-Y",
   minDate: checkinDate.value,
}
flatpickr("input[type=datetime-local]", config_LocalTime);
flatpickr("input[type=datetime-checkout]", config_CheckOut_Time);






