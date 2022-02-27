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
})

function createShelf(name, id) {
	console.log("-----shelf----name----", name);
	const holodilnik = document.getElementById('holodilnik');
	const shelf = document.createElement('section');
	shelf.id = id;
	shelf.className = "shelf";
	let h3 = document.createElement('h3');
	h3.className = 'card-title';
	h3.innerText = "Полка: " + name;
	shelf.appendChild(h3);
	holodilnik.appendChild(shelf);
}

function addCardToShelf(shelfId, card) {
	const shelf = document.getElementById(shelfId);
	shelf.appendChild(card);
}

function createCard(name, id, count, imgUrl) {
	const card = document.createElement('article');
	card.classList.add('square-block');

	const imgCreateCard = document.createElement('img'); // Картинка карточки
	imgCreateCard.src = imgUrl;
	imgCreateCard.className = 'img';
	card.appendChild(imgCreateCard);

	const nameCreateCard = document.createElement('h3'); // Имя карточки
	nameCreateCard.innerText = name;
	card.appendChild(nameCreateCard);

	const div = document.createElement('div'); // Див для кнопок и окна ввода
	card.appendChild(div);

	const buttonPlus = document.createElement('button'); // Кнопка плюс
	buttonPlus.className = "counter__btn"
	buttonPlus.id = id + '_plus-button';
	buttonPlus.innerText = '+';
	div.appendChild(buttonPlus);

	const countCreateCard = document.createElement('input'); // Окно ввода
	countCreateCard.id = id + '_counter';
	countCreateCard.className = 'counter__value';
	countCreateCard.value = count;
	div.appendChild(countCreateCard);

	const buttonMinus = document.createElement('button'); // Кнопка минус
	buttonMinus.className = "counter__btn"
	buttonMinus.id = id + '_minus-button';
	buttonMinus.innerText = '-';
	div.appendChild(buttonMinus);

	return card;
}

//-----------------------------------------

createShelf('Напитки', 'drinks');
createShelf('Овощи', 'vegetables');
createShelf('Фрукты', 'fruits');
createShelf('Колбаса/Сыр', 'kalbasa');

addCardToShelf('drinks', createCard('Beer', 'beer', 10, 'img/beer.png'));
addCardToShelf('drinks', createCard('Soft-drinker', 'soft-drink', 10, 'img/soft-drink.png'));
addCardToShelf('drinks', createCard('Drink', 'drink', 10, 'img/drink.png'));

addCardToShelf('vegetables', createCard('Carrots', 'carrots', 5, 'img/carrots.png'));
addCardToShelf('vegetables', createCard('Cucumber', 'cucumber', 5, 'img/cucumber.png'));
addCardToShelf('vegetables', createCard('Tomato', 'tomato', 5, 'img/tomato.png'));

addCardToShelf('fruits', createCard('Grape', 'grape', 1, 'img/grape.png'));
addCardToShelf('fruits', createCard('Apple', 'apple', 1, 'img/apple.png'));
addCardToShelf('fruits', createCard('Orange', 'orange', 1, 'img/orange.png'));

addCardToShelf('kalbasa', createCard('cheese', 'cheese', 1, 'img/cheese.png'));
addCardToShelf('kalbasa', createCard('Ham', 'ham', 1, 'img/ham.png'));
addCardToShelf('kalbasa', createCard('Sausages', 'sausages', 1, 'img/sausages.png'));