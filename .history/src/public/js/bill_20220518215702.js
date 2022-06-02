var serviceBtn = document.querySelector(".show-service-btn");
var serviceList = document.querySelector(".service-list");

serviceBtn.addEventListener('click', function() {
	console.log(serviceList.style.opacity)
  if(serviceList.style.opacity === '0') {
	  	console.log('max = 0')
		serviceList.style.opacity = '1';
  } else {
	console.log('max = 105')
	serviceList.style.opacity = '0';
  }
});

// coll.addEventListener("click", function() {
//   this.classList.toggle("active");
//   var content = this.nextElementSibling;
//   if (content.style.display === "block") {
//     content.style.display = "none";
//   } else {
//     content.style.display = "block";
//   }
// });

