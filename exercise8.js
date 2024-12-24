// Let us start analyzing the data by getting a high-level view. Find out how many birds you counted in total since you started your logs.

// Implement a function totalBirdCount that accepts an array that contains the bird count per day. It should return the total number of birds that you counted

birdsPerDay1 = [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0, 8, 0];

function totalBirdCount(birdsPerDay) {
	let counter = 0;
	for (let i = 0; i < birdsPerDay.length; i++) {
		counter += birdsPerDay[i];
	}

	return counter;
}

// Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.

// Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.
const week21 = [4, 7, 3, 2, 1, 1, 2, 0, 2, 3, 2, 7, 1, 3, 0, 6, 5, 3, 7, 2, 3];

function totalBirdCount(birdsPerDay, week) {
	const dayInWeek = 7;
	const start = (week - 1) * dayInWeek;
	const end = start + dayInWeek;
	let counter = 0;

	for (let i = start; i < end; i++) {
		counter += birdsPerDay[i];
	}
	return counter;
}

// You realized that all the time you were trying to keep track of the birds, there was one hiding in a far corner of the garden. You figured out that this bird always spent every second day in your garden. You do not know exactly where it was in between those days but definitely not in your garden. Your bird watcher intuition also tells you that the bird was in your garden on the first day that you tracked in your list.

// Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument. It should correct the counting mistake and return the modified array.
birdsPerDay = [2, 5, 0, 7, 4, 1];

function fixBirdCounting(array) {
	for (let i = 0; i <= array.length; i + 2) {
		const newArray = [];
		const element = array[i] + 1;

		return newArray.push(element);
	}

	return element;
}

console.log(fixBirdCounting(birdsPerDay));
