const handlePlusMinus = (cardName, direction) => {
	const counter_id = cardName + '_counter';
	const inp = document.getElementById(counter_id);
	if (direction === 'plus') {
		inp.value = +inp.value + 1;
	} else if (direction === "minus") {
		inp.value = +inp.value - 1 > 0 ? +inp.value - 1 : 0;
	}
}


document.addEventListener('click', (event) => {
	const id = event.target.id; // 
	const id_parts = id.split('_'); // разделение имени id на части, до "_" и после
	if (id_parts[1] === "plus-button") {
		handlePlusMinus(id_parts[0], 'plus');
	} else if (id_parts[1] === "minus-button") {
		handlePlusMinus(id_parts[0], 'minus');
	}
})

document.getElementById('btn_1').onclick = function createElement() {
	const section = document.createElement('section');
	section.className = "card"; //Создаем нову полку

	const button = document.createElement('button');
	button.innerText = 'Прибавить продукт'
	button.className = 'btn_2'
	section.appendChild(button);//При нажати на кнопку, на этой полке должна появиться новая карточка продукта.

	const h3 = document.createElement('h3');
	h3.className = 'card-title';
	h3.innerText = "Полка №4 Яйца";
	section.appendChild(h3);// Заголовок	

	const div = document.createElement('div');
	div.className = "square-block";
	section.appendChild(div);//Карточка продукта

	const img = document.createElement('img');
	img.src = 'https://cdn-icons.flaticon.com/png/512/2713/premium/2713474.png?token=exp=1645793439~hmac=ad25b36aec50fafaef8193ffe363be94'; //Возникли трудности с интегрированием картинки из папки img
	img.className = 'img';
	div.appendChild(img);



	document.body.append(section);
}

	// < div class="counter" >
   //    <button class="counter__btn" data-direction="plus" id="beer_plus-button">+</button>
   //    <input type="text" value="0" class="counter__value" id="beer_counter">
   //    <button class="counter__btn" data-direction="minus" id="beer_minus-button">-</button>

	//type="button" id="btn"