const { add } = require("nodemon/lib/rules");

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
var add_btn = document.querySelectorAll('#service-add');
var remove_btn = document.querySelectorAll('#service-remove');

var serviceData = '';
	if(serviceRow.length === 0) {
		serviceData += `
		<tr>
			<td colspan="5">Chưa có dịch vụ</td>
		</tr>
		`
		serviceContainer.innerHTML = serviceData;
	}

// REMOVE SERVICE
remove_btn.forEach(btn => {
	btn.addEventListener('click', function(e) {
		var btn_remove = e.target;
		var tr = btn_remove.parentElement.parentElement.parentElement;
		tr.remove();
	})
})

// ADD SERVICE
add_btn.forEach(btn => {
	add.addEventListener('click', function(e) {
		var add_btn = e.target;
		console.log(add_btn);
	})
})






