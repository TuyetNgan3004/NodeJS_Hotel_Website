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

var checkinDate = document.querySelector('[data-toggle="startDate"]').flatpickr(
   {
     enableTime: false,
     altInput: true,
     altFormat: "F j, Y",
     dateFormat: "Y-m-d",
     minDate: new Date().fp_incr(2),
     onChange: function(dateObj, dateStr) {
      checkoutDate.set('maxDate', new Date(dateStr).fp_incr(-1))
     }
   }
 );

 var checkoutDate = document.querySelector('input[data-toggle="endDate"]').flatpickr(
   {
      enableTime: true,
      altInput: true,
      altFormat: "F j, Y h:i K",
      dateFormat: "Y-m-d H:i",
   }
 );

var checkinDate = document.getElementById('checkin');
var checkoutDate = document.getElementById('checkout');
// console.log(checkinDate);
// checkinDate.addEventListener('change',function(event) {
//    console.log(event.target.value);
//    date2.set('maxDate', new Date(dateStr).fp_incr(-1))

//    // config_CheckOut_Time = {
//    //    dateFormat: "d-m-Y",
//    //    // minDate: event.target.value,
//    //    disable: [
//    //       {
//    //           from: "today",
//    //           to: event.target.value
//    //       },
//    //    ]
//    // }
//    // flatpickr("input[type=datetime-checkout]", config_CheckOut_Time);
// });
   








