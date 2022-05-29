
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
		console.log(service);
		var sv_name = service.children[0].innerText;
		var sv_type = service.children[1].innerText;
		var sv_price = service.children[2].innerText;
		AddSerive(sv_name, sv_type, sv_price);
		console.log(`${sv_name} , ${sv_type}, ${sv_price} `);
	})
})

function AddSerive(name, type, price) {
	var cartRow = document.createElement('tr');
	var item = {};
	for(var i = 0; i < serviceRow.length; i++) {
		var item_title = serviceRow[i].getElementsByClassName('sv-title')[0].innerText;
		var item_price = serviceRow[i].getElementsByClassName('sv-qty')[0].innerText;
		if(item_title === name) {
			item_price = parseFloat(item_price) + 1;
			item = { name: name, type: type, qty: item_price, price: price}
		}
		else {
			item = { name: name, type: type, qty: 1, price: price}
		}
		var serviceContent = ``;
		serviceContent += `
		<tr>
			<td class="sv-title">${item.name}</td>
			<td>${item.type}</td>
			<td>${item.price}</td>
			<td class="sv-qty">${item.qty}</td>
			<td>0</td>
			<td style="min-width: 0;">
				<div id="service-remove" class="status-btn-circle"> <i class="fas fa-minus"></i></div>
			</td>
		</tr>
		`
	}
	serviceContainer.innerHTML = serviceContent;
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



