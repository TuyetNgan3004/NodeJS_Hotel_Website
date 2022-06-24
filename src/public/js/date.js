var checkoutDate = document.querySelector('[data-toggle="endDate"]').flatpickr(
   {
      altInput: true,
      altFormat: "d-m-Y",
      minDate: new Date().fp_incr(0),
   }
 );
 

var checkinDate = document.querySelector('[data-toggle="startDate"]').flatpickr(
   {
      altInput: true,
      altFormat: "d-m-Y",
      minDate: new Date().fp_incr(0),
      onChange: function(dateObj, dateStr) {  
         checkoutDate.set('minDate', new Date(dateStr).fp_incr(1));
         // flatpickr(checkoutDate, {dateFormat: "d-m-Y", minDate: new Date(dateStr).fp_incr(1)});
     }
   }
 );



