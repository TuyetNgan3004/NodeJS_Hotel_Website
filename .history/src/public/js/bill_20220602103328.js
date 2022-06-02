
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
			// var sv_qty = service.querySelector('.svList-qty .qty-input').value;
			AddSerive(sv_name, sv_type, sv_price);
		}
	})
})

function AddSerive(name, type, price) {
	var serviceContainer = document.querySelector('#service-container');
	var serviceRow = serviceContainer.querySelectorAll('tr');
	var service_row = document.createElement('tr');
	var serviceContent = ``;
	var total = 0;
	var result = 0;
	var sv_price = price.replace(/,/g, '');

	for(var i = 0; i < serviceRow.length; i++) {
		var item_title = serviceRow[i].getElementsByClassName('sv-title')[0].innerText;
		var item_qty = serviceRow[i].querySelector('.sv-qty .qty-input').value;
		if(item_title) {
			if(item_title === name) {
				var qty = parseFloat(item_qty) + 1;
				total += parseFloat(sv_price) * qty;
				result = Intl.NumberFormat().format(total);
				serviceContent += `
					<td class="sv-title">
						${name}
						<input hidden type="text" name="sv_name" value="${name}">
					</td>
					<td>
						${type}
						<input hidden type="text" name="sv_type" value="${type}">
					</td>
					<td>
						${price}
						<input hidden type="text" name="sv_price" value="${price}">
					</td>
					<td class="sv-qty"><input class="qty-input" type="number" min="1" value="${qty}" name="sv_qty" id=""></td>
					<td>
					${result}
					<input hidden type="text" name="sv_total" value="${result}">
					</td>
					<td style="min-width: 0;">
						<div class="status-btn-circle service-remove"> <i class="fas fa-minus"></i></div>
					</td>
				`
				billTotal(parseFloat(sv_price));
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
	
	total += parseFloat(sv_price);
	result = Intl.NumberFormat().format(total);
	// billTotal(total);
	serviceContent += `
		<td class="sv-title">
			${name}
			<input hidden type="text" name="sv_name" value="${name}">
		</td>
		<td>
			${type}
			<input hidden type="text" name="sv_type" value="${type}">
		</td>
		<td class="price">
			${price}
			<input hidden type="text" name="sv_price" value="${price}">
		</td>
		<td class="sv-qty"><input class="qty-input" type="number" min="1" value="1" name="sv_qty" id=""></td>
		<td class="sv-total">
			${result}
			<input hidden type="text" name="sv_total" value="${result}">
		</td>
		<td style="min-width: 0;">
			<div class="status-btn-circle service-remove"> <i class="fas fa-minus"></i></div>
		</td>
	`
	billTotal(parseFloat(sv_price));
	service_row.innerHTML = serviceContent;
	serviceContainer.append(service_row);
	// CHECK REMOVE BTN AND ONCHANGE INPUT OF TABLE SERVICE
	service_row.querySelector('.service-remove').addEventListener('click', function (e) {
		var btn_remove = e.target;
		var tr = btn_remove.parentElement.parentElement.parentElement;
		var total = tr.children[4].innerText;
		total = total.replace(/,/g, '');
		billTotal(-(parseFloat(total)));
		tr.remove();
	})
		
	// service_row.querySelector('.sv-qty .qty-input').addEventListener('click', function() {
		var input_value = service_row.querySelector('.sv-qty .qty-input');
		var sv_total = service_row.querySelector('.sv-total');
		var price = service_row.querySelector('.price').innerText;
		price = price.replace(/,/g, '');
		var previous_value = 1;
		input_value.addEventListener('change', function(e) {
			var total = parseFloat(price) * parseFloat(e.target.value);
			sv_total.innerHTML = `
			${Intl.NumberFormat().format(total)}
			<input hidden type="text" name="sv_total" value="${Intl.NumberFormat().format(total)}">
			`
			if(previous_value > e.target.value) {
				billTotal(-(parseFloat(price)));
			}
			else if(previous_value < e.target.value) {
				billTotal(parseFloat(price));
			}
			previous_value = e.target.value;
		})
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




