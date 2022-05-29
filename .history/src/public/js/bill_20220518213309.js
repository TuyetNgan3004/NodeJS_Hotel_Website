var serviceBtn = document.querySelector(".show-service-btn");
var serviceList = document.querySelector(".collapse-list");
console.log(serviceList);
serviceBtn.addEventListener('click', function() {
  if(serviceList.style.maxHeight === 0) {
	  console.log('max = 0')
		serviceList.style.maxHeight = '105px';
		serviceList.style.padding = '16px';
  } else {
	console.log('max = 105')
		serviceList.style.maxHeight = '0';
		serviceList.style.padding = '0';
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

