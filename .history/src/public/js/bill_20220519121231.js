var serviceBtn = document.querySelector(".show-service-btn");
var serviceList = document.querySelector(".service-list");

serviceBtn.addEventListener('click', function() {
	var height = serviceList.style.opacity
  if(height === '0') {
		serviceList.style.opacity = '1';
  } else {
	serviceList.style.opacity = '0';
  }
});

// Add service
var serviceContainer = document.querySelector('#service-container');
var serviceRow = serviceContainer.querySelectorAll('tr');
var services = document.querySelectorAll('.service-item');
services.forEach(service => {
	var add_btn =  
})


var serviceData = '';
	if(serviceRow.length === 0) {
		serviceData += `
		<tr>
			<td colspan="5">Chưa có dịch vụ</td>
		</tr>
		`
	}

serviceContainer.innerHTML = serviceData;

