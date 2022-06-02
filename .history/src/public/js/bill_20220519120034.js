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
var serviceData = '';
	if(serviceRow.length === 0) {
		serviceData = `
		<tr>
			<td>{{this.TenDV}}</td>
			<td>{{this.LoaiDV}}</td>
			<td>{{this.GiaDV}}</td>
			<td style="min-width: 0;">
				<div class="status-btn-circle"> <i class="fas fa-plus"></i></div>
			</td>
		</tr>
		`
	}
	else {
		serviceData = 'hello'
	}

serviceContainer.innerHTML = serviceData;

