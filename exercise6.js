// As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.

// To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented by an array of numbers. The position of a certain card corresponds to the index in the array. That means position 0 refers to the first card, position 1 to the second card etc.

const position = 2;

function getItem(cards, position) {
	return cards[position];
}

// Perform some sleight of hand and exchange the card at index position with the replacement card provided. Return the adjusted stack.

const position1 = 2;
const replacementCard = 6;

function setItem(array, position, replacement) {
	array.splice(position, 1, replacement);
	return array;
}

const stack = [2, 2, 2];
const position2 = 1;
const replacement = 5;

// Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.

const newCard = 8;

function insertItemAtTop(cards, newCards) {
	cards.push(newCards);
	return cards;
}

// Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.`

const position3 = 2;

function removeItem(cards, position) {
	cards.splice(position, 1);
	return cards;
}

// Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.

function removeItemFromTop(cards) {
	cards.pop();
	return cards;
}

// Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.

function insertItemAtBottom(cards, newCard = 'Insert New Card') {
	cards.unshift(newCard);
	return cards;
}

// Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.

function removeItemAtBottom(cards) {
	cards.shift();
	return cards;
}

// Check whether the size of the stack is equal to stackSize or not.

function checkSizeOfStack(cards, stackSize) {
	const cardsLength = cards.length;

	return cardsLength === stackSize;
}
