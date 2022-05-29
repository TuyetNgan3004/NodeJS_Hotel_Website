
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
// var serviceContainer = document.querySelector('#service-container');
// var serviceRow = serviceContainer.querySelectorAll('tr');
// var services = document.querySelectorAll('.service-item');
var add_btn = document.querySelectorAll('.servie-add i');
console.log(add_btn)
var remove_btn = document.querySelectorAll('.service-remove');

// REMOVE SERVICE
// remove_btn.forEach(btn => {
// 	btn.addEventListener('click', function(e) {
// 		var btn_remove = e.target;
// 		var tr = btn_remove.parentElement.parentElement.parentElement;
// 		tr.remove();
// 	})
// })


// ADD SERVICE
add_btn.forEach(add => {
	add.addEventListener('click', function(e) {
		var addBtn = e.target;
		var service = addBtn.parentElement.parentElement.parentElement;
		
		if(service.tagName == 'TR') {
			var sv_name = service.getElementsByClassName('sv-name')[0].innerText;
			var sv_type = service.getElementsByClassName('sv-type')[0].innerText;
			var sv_price = service.getElementsByClassName('sv-price')[0].innerText;
			AddSerive(sv_name, sv_type, sv_price);
		}
	})
})

function AddSerive(name, type, price) {
	var serviceContainer = document.querySelector('#service-container');
	var serviceRow = serviceContainer.querySelectorAll('tr');
	var service_row = document.createElement('tr');
	var serviceContent = ``;
	var qty = 1;

	for(var i = 0; i < serviceRow.length; i++) {
		var item_title = serviceRow[i].getElementsByClassName('sv-title')[0].innerText;
		console.log(item_title)
		var item_qty = serviceRow[i].getElementsByClassName('sv-qty')[0].innerText;
		if(item_title) {
			if(item_title === name) {
				qty = parseFloat(item_qty) + 1;
				serviceContent += `
					<td class="sv-title">${name}</td>
					<td>${type}</td>
					<td>${price}</td>
					<td><input class="qty-input" type="number" min="1" value="${qty}" name="" id=""></td>
					<td>0</td>
					<td style="min-width: 0;">
						<div class="status-btn-circle service-remove"> <i class="fas fa-minus"></i></div>
					</td>
				`
				serviceRow[i].innerHTML = serviceContent;
				serviceRow[i].querySelector('.service-remove').addEventListener('click', function (e) {
					var btn_remove = e.target;
					var tr = btn_remove.parentElement.parentElement.parentElement;
					tr.remove();
			})
				return;
			}
		}
	}
	
	serviceContent += `
			<td class="sv-title">${name}</td>
			<td>${type}</td>
			<td>${price}</td>
			<td><input class="qty-input" type="number" min="1" value="${qty}" name="" id=""></td>
			<td>0</td>
			<td style="min-width: 0;">
				<div class="status-btn-circle service-remove"> <i class="fas fa-minus"></i></div>
			</td>
		`
			service_row.innerHTML = serviceContent;
			serviceContainer.append(service_row);
			service_row.querySelector('.service-remove').addEventListener('click', function (e) {
				var btn_remove = e.target;
				var tr = btn_remove.parentElement.parentElement.parentElement;
				tr.remove();
		})
}

// var serviceData = '';
// if(serviceRow.length === 0) {
// 	serviceData += `
// 	<tr>
// 		<td colspan="5">Chưa có dịch vụ</td>
// 	</tr>
// 	`
// 	serviceContainer.innerHTML = serviceData;
// }




