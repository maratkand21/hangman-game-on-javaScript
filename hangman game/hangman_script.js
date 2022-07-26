/* import function  */

import {dictionary} from './dictionary.js';
import {manDraw, winnerManDraw} from './canvas_script.js';

/* access to DOM elemnts */

const wrapperWord = document.querySelector('.wrapper-word');

const keyboard = document.querySelector('.keyboard');

let word = dictionary[Math.floor(Math.random() * dictionary.length)];

/* word generation */

for (let i = 0; i < word.length; i++) {
	let letter = document.createElement('div');
	letter.classList.add('single-letter');

	wrapperWord.appendChild(letter);
}

/* acces to letters */

const singleLetter = document.querySelectorAll('.single-letter');


/* russian alphabet*/

let arr_ru = [
	'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з',
	'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р',
	'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ',
	'ь', 'ы', 'ъ', 'э', 'ю', 'я'
	];

/* englang alphabet */

const arr_en = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g',
	'h', 'i', 'j', 'k', 'l', 'm', 'n',
 	'o', 'p', 'q', 'r', 's', 't', 'u',
  	'v', 'w', 'x', 'y', 'z'
  	];

/* keyboard generation */

for (let i = 0; i < 33; i++) {
	let div = document.createElement('div');

	div.classList.add('letter');

	div.innerHTML = arr_ru[i];

	keyboard.appendChild(div);			
}

/* word field delegation */

let guessedLetter = 0;

let attempt = 7;

keyboard.addEventListener('click', event => {
	if (event.target.classList == 'letter') {	
		searchLetterInWord();
	}
});


function searchLetterInWord () {

	let numberOfLetters = 0; // number of letters found
	let position = []; // position of found letters

	for (let i = 0; i < word.length; i++) {
		if (word[i] == event.target.textContent) {
			numberOfLetters++;
			position.push(i);
		}
	}

	if (numberOfLetters == 0) {
		
		attempt--;
		manDraw(attempt);

		event.target.classList.add('fail');

		if (attempt < 0) {

			keyboard.parentNode.removeChild(keyboard);

			singleLetter.forEach((element, index) => {
				element.innerHTML = word[index];
			});
		}
	}

	else {
		guessedLetter += numberOfLetters;

		event.target.classList.add('used');
		singleLetter.forEach((element, index) => {
			for (let j = 0; j < position.length; j++) {
				if (index == position[j]) {
					element.innerHTML = event.target.textContent;
				}
			}

		});

		if (guessedLetter == word.length) {
			console.log('win')
			winnerManDraw();
			keyboard.parentNode.removeChild(keyboard);
		}
	}
}