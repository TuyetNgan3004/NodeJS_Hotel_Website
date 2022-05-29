// Filter rooms by searchbar 
const searchingWord = document.querySelector('#myInput').addEventListener("keyup", function () {
  const keyword = document.querySelector('#myInput');
  const value = keyword.value.toLowerCase();

  const rooms = document.querySelectorAll('.js-myroom').forEach(room => {

     var items = room.querySelector('*').innerText;
     var itemsRemoveComma = items.replaceAll(',', '');
     if (value == '') {
        room.classList.remove("room-filter-none")
     }
     else if (itemsRemoveComma.toLowerCase().indexOf(value) > -1) {
        room.classList.remove("room-filter-none")
     }

     else {
        room.classList.add("room-filter-none")
     }
  });
})