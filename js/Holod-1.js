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
	const id = event.target.id;
	const id_parts = id.split('_');
	if (id_parts[1] === "plus-button") {
		handlePlusMinus(id_parts[0], 'plus');
	} else if (id_parts[1] === "minus-button") {
		handlePlusMinus(id_parts[0], 'minus');
	}
});






