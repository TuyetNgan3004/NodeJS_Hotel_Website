var serviceBtn = document.querySelector(".show-service-btn");
var serviceList = document.querySelector(".service-list");

serviceBtn.addEventListener('click', function() {
	var height = serviceList.style.opacity
	console.log(serviceList.style.opacity)
  if(height === '0') {
	  	console.log('max = 0')
		serviceList.style.opacity = '1';
  } else {
	console.log('max = 105')
	serviceList.style.opacity = '0';
  }
});

// Add service
var serviceContainer = document.querySelector('#service-container');
console.log(serviceContainer);

