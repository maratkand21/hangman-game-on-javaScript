/* word list */
let dictionary = [
	'croquet', 'cockpit', 'clumsy', 'fjord',
	'jazz', 'roma', 'kayak', 'shelf', 'the', 'sphinx',
	'rotary', 'quickly', 'ribbedgubbins', 'sticky',
	'heading', 'vague', 'jock', 'hockey', 'sequoia',
	'asexuals', 'crimson', 'chthonic', 'type',
	'actor', 'gold', 'painting',
	'advertisement', 'grass', 
	'parrot', 'afternoon', 'greece',
	'pencil', 'airport', 'guitarpiano',
	'ambulance', 'hair', 'pillow', 'animal', 
	'hamburger', 'pizza', 'answer', 'helicopter', 
	'planet', 'apple', 'helmet', 'plastic', 'army',
	'holiday', 'portugal', 'australia', 'potato', 
	'balloon', 'horse', 'queen', 'banana', 'hospital',
	'quill', 'battery', 'house', 'rain', 'beach',
	'hydrogen', 'rainbow', 'beard', 'ice', 'raincoat',
	'bed', 'insect', 'refrigerator', 'belgium',
	'insurance', 'restaurant', 'boy', 'iron', 'river',
	'branch', 'island', 'rocket', 'breakfast',
	'jackal', 'room', 'brother', 'jelly', 'rose',
	'camera', 'jewellery', 'russia', 'candle',
	'jordan', 'sandwich', 'car', 'juice',
	'school', 'caravan', 'kangaroo', 'scooter',
	'carpet', 'king',
	'shampoo', 'cartoon', 'kitchen',
	'shoe', 'china', 'kite','soccer',
	'church', 'knife', 'spoon', 'crayon',
	'lamp', 'stonecrowd', 'lawyer', 'sugar', 
	'daughter', 'leather', 'sweden', 'death', 'library', 
	'teacher', 'denmark', 'lighter', 'telephone', 'diamond',
	'lion', 'television', 'dinner', 'lizard', 'tent', 'disease',
	'lock', 'thailand', 'doctor', 'london', 'tomato', 'dog',
	'lunch', 'toothbrush', 'dream', 'machine', 'traffic',
	'dress', 'magazine', 'train', 'easter', 'magician', 
	'truck', 'egg', 'manchester', 'uganda', 'eggplant',
	'market', 'umbrella', 'egypt', 'match', 'van', 'elephant',
	'microphone', 'vase', 'energy', 'monkey', 'vegetable',
	'engine', 'morning', 'vulture'
];

/* access to DOM elemnts */

const wrapperWord = document.querySelector('.wrapper-word');		

const result = document.querySelector('.result');

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

/* keyboard generation */

const arr_en = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g',
	'h', 'i', 'j', 'k', 'l', 'm', 'n',
 	'o', 'p', 'q', 'r', 's', 't', 'u',
  	'v', 'w', 'x', 'y', 'z'
   ];

for (let i = 0; i < 26; i++) {
	let div = document.createElement('div');

	div.classList.add('letter');

	div.innerHTML = arr_en[i];

	keyboard.appendChild(div);			
}


let attempt = 6;

/* word field delegation */

keyboard.addEventListener('click', event => {
	if (event.target.classList == 'letter') {	
		searchLetterInWord();

		console.log(event.target.classList)
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

		result.innerHTML = `Remaining tries: ${attempt--}`;

		event.target.classList.add('fail');

		if (attempt < 0) {
			result.innerHTML = 'You lost.';
			keyboard.parentNode.removeChild(keyboard);

			singleLetter.forEach((element, index) => {
				element.innerHTML = word[index];
			});
		}

	}

	else {
		event.target.classList.add('used');
		singleLetter.forEach((element, index) => {
			for (let j = 0; j < position.length; j++) {
				if (index == position[j]) {
					element.innerHTML = event.target.textContent;
				}
			}
		});
	}
}
