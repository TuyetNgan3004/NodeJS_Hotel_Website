
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
config1 = {
   // enableTime: true, (GIỜ)
   dateFormat: "d-m-Y",
   minDate: "today",
}
flatpickr("input[type=datetime-local]", config1);

// kiểm tra chọn ngày nhận ngày trả trước khi đặt phòng của trang chi tiết phòng
// var datPhong = document.getElementById('datphong');
// var checkIn = document.getElementById('ngaynhan');
// var checkOut = document.getElementById('ngaytra');

// datPhong.onclick = function() {
//    if(checkIn.value === "" || checkOut.value === "" ){
//       alert ("Vui lòng chọn ngày nhận và ngày trả phòng !!!");
//       return false;
//    }
// }

   

