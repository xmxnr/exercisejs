// Li Mei likes to tell her customers in advance how long they have to wait for a juice from the menu that they ordered. She has a hard time remembering the exact numbers because the time it takes to mix the juices varies. 'Pure Strawberry Joy' takes 0.5 minutes, 'Energizer' and 'Green Garden' take 1.5 minutes each, 'Tropical Island' takes 3 minutes and 'All or Nothing' takes 5 minutes. For all other drinks (e.g., special offers) you can assume a preparation time of 2.5 minutes.

// To help your friend, write a function timeToMixJuice that takes a juice from the menu as an argument and returns the number of minutes it takes to mix that drink

function timeToMixJuice(name) {
	let timeOfWait;
	switch (name) {
		case 'Pure Strawberry Joy':
			timeOfWait = 0.5;
			break;
		case 'Energizer':
			timeOfWait = 1.5;
			break;
		case 'Green Garden':
			timeOfWait = 1.5;
			break;
		case 'Tropical Island':
			timeOfWait = 3;
			break;
		case 'All or Nothing':
			timeOfWait = 5;
			break;
		default:
			timeOfWait = 2.5;
	}
	return timeOfWait;
}

// A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the decoration. So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.

// Implement the function limesToCut which takes the number of lime wedges Li Mei needs to cut and an array representing the supply of whole limes she has at hand. She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime. She always cuts the limes in the order in which they appear in the list, starting with the first item. She keeps going until she reached the number of wedges that she needs or until she runs out of limes.

// Li Mei would like to know in advance how many limes she needs to cut. The limesToCut function should return the number of limes to cut.

function limesToCut(wedgesNeeded, limes) {
	const emptyArray = [];
	let wedges = 0;

	while (wedges <= wedgesNeeded) {
		for (let i = 0; i <= limes.length; i++) {
			switch (limes[i]) {
				case 'small':
					wedges += 6;
					break;
				case 'medium':
					wedges += 8;
					break;
				case 'large':
					wedges += 10;
					break;
			}
		}
	}

	return wedges;
}

console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));
