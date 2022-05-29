
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
var add_btn = document.querySelectorAll('#servie-add');
var remove_btn = document.querySelectorAll('#service-remove');

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
	btn.addEventListener('click', function(e) {
		var addBtn = e.target;
		var service = addBtn.parentElement.parentElement.parentElement;
		var sv_name = service.getElementsByClassName('sv_name')[0];
		var sv_type = service.getElementsByClassName('sv_type')[0];
		var sv_price = service.getElementsByClassName('sv_price')[0];
		AddSerive(sv_name, sv_type, sv_price);
	})
})

function AddSerive(name, type, price) {
	console.log(serviceRow)
	for(var i = 0; i < serviceRow.length; i++) {
		var item_title = serviceRow[i].getElementsByClassName('sv-title');
	}
}

var serviceData = '';
if(serviceRow.length === 0) {
	serviceData += `
	<tr>
		<td colspan="5">Chưa có dịch vụ</td>
	</tr>
	`
	serviceContainer.innerHTML = serviceData;
}




