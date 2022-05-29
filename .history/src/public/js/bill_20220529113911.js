
// SHOW SERVICE LIST
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

// ADD SERVICE
var add_btn = document.querySelectorAll('.servie-add i');
var remove_btn = document.querySelectorAll('.service-remove');

add_btn.forEach(add => {
	add.addEventListener('click', function(e) {
		var addBtn = e.target;
		var service = addBtn.parentElement.parentElement.parentElement;
		
		if(service.tagName == 'TR') {
			var sv_name = service.getElementsByClassName('sv-name')[0].innerText;
			var sv_type = service.getElementsByClassName('sv-type')[0].innerText;
			var sv_price = service.getElementsByClassName('sv-price')[0].innerText;
			var sv_qty = service.querySelector('.svList-qty .qty-input').value;
			AddSerive(sv_name, sv_type, sv_price, sv_qty);
		}
	})
})

function AddSerive(name, type, price, qty) {
	var serviceContainer = document.querySelector('#service-container');
	var serviceRow = serviceContainer.querySelectorAll('tr');
	var service_row = document.createElement('tr');
	var serviceContent = ``;
	var total = 0;
	var result = 0;
	var sv_price = price.replace(/,/g, '');
	qty = parseFloat(qty);

	for(var i = 0; i < serviceRow.length; i++) {
		var item_title = serviceRow[i].getElementsByClassName('sv-title')[0].innerText;
		var item_qty = serviceRow[i].querySelector('.sv-qty .qty-input').value;
		if(item_title) {
			if(item_title === name) {
				qty += parseFloat(item_qty);
				total += parseFloat(sv_price) * qty;
				result = Intl.NumberFormat().format(total);
				serviceContent += `
					<td class="sv-title">${name}</td>
					<td>${type}</td>
					<td>${price}</td>
					<td class="sv-qty"><input class="qty-input" type="number" min="1" value="${qty}" name="" id=""></td>
					<td>${result}</td>
					<td style="min-width: 0;">
						<div class="status-btn-circle service-remove"> <i class="fas fa-minus"></i></div>
					</td>
				`
				var x = billTotal(total);
				console.log(x)
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

	total += parseFloat(sv_price) * qty;
	result = Intl.NumberFormat().format(total);
	billTotal(total);
	serviceContent += `
		<td class="sv-title">${name}</td>
		<td>${type}</td>
		<td class="price">${price}</td>
		<td class="sv-qty"><input class="qty-input" type="number" min="1" value="${qty}" name="" id=""></td>
		<td class="sv-total">${result}</td>
		<td style="min-width: 0;">
			<div class="status-btn-circle service-remove"> <i class="fas fa-minus"></i></div>
		</td>
	`
		service_row.innerHTML = serviceContent;
		serviceContainer.append(service_row);
		// CHECK REMOVE BTN AND ONCHANGE INPUT OF TABLE SERVICE
		service_row.querySelector('.service-remove').addEventListener('click', function (e) {
			var btn_remove = e.target;
			var tr = btn_remove.parentElement.parentElement.parentElement;
			tr.remove();
		})
	
		// service_row.querySelector('.sv-qty .qty-input').addEventListener('click', function() {
			var input_value = service_row.querySelector('.sv-qty .qty-input');
			console.log(input_value)
			var sv_total = service_row.querySelector('.sv-total');
			var price = service_row.querySelector('.price').innerText;
			price = price.replace(/,/g, '');
			var total = parseFloat(price) * parseFloat(input_value.value);
			sv_total.innerHTML = Intl.NumberFormat().format(total);
		// })
}

// BILL TOTAL
function billTotal(sv_price) {
	var totalHTML = document.querySelector('#total-bill');
	var total = totalHTML.value;
	total = parseFloat(total.replace(/,/g, ''));
	total += sv_price;
	totalHTML.value = Intl.NumberFormat().format(total);
	return Intl.NumberFormat().format(total);
}

var roomTotal = document.getElementById('room-total').innerText;
var total = Intl.NumberFormat().format(parseFloat(roomTotal));
document.getElementById('room-total').innerHTML = total;



// var serviceData = '';
// if(serviceRow.length === 0) {
// 	serviceData += `
// 	<tr>
// 		<td colspan="5">Chưa có dịch vụ</td>
// 	</tr>
// 	`
// 	serviceContainer.innerHTML = serviceData;
// }




