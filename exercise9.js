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
	let emptyArray = [];
	let wedges = 0;

	if (wedgesNeeded === 0) {
		emptyArray = [];
		return emptyArray.length;
	} else {
		while (wedges < wedgesNeeded) {
			for (let i = 0; i <= limes.length; i++) {
				switch (limes[i]) {
					case 'large':
						emptyArray.push(1);
						wedges += 10;
						break;
					case 'medium':
						emptyArray.push(1);
						wedges += 8;
						break;
					case 'small':
						emptyArray.push(1);
						wedges += 6;
						break;
				}
				if (wedges > wedgesNeeded) {
					break;
				}
			}
			return emptyArray.length;
		}
	}
}

// Li Mei always works until 3pm. Then her employee Dmitry takes over. There are often drinks that have been ordered but are not prepared yet when Li Mei's shift ends. Dmitry will then prepare the remaining juices.

// To make the hand-over easier, implement a function remainingOrders which takes the number of minutes left in Li Mei's shift and an array of juices that have been ordered but not prepared yet. The function should return the orders that Li Mei cannot start preparing before the end of her workday.

// The time left in the shift will always be greater than 0. The array of juices to prepare will never be empty. Furthermore, the orders are prepared in the order in which they appear in the array. If Li Mei starts to mix a certain juice, she will always finish it even if she has to work a bit longer. If there are no remaining orders left that Dmitry needs to take care of, an empty array should be returned.

function remainigOrders(timeLeft, orders) {
	let emptyArray = [];
	let remainingMinutes = 0;

	while (remainingMinutes < timeLeft) {
		for (let i = 0; i < orders.length; i++) {
			switch (orders[i]) {
				case 'Pure Strawberry Joy':
					remainingMinutes += 0.5;
					emptyArray.push(1);
					break;
				case 'Energizer':
					remainingMinutes += 1.5;
					emptyArray.push(1);
					break;
				case 'Green Garden':
					remainingMinutes += 1.5;
					emptyArray.push(1);
					break;
				case 'Tropical Island':
					remainingMinutes += 3;
					emptyArray.push(1);
					break;
				case 'All or Nothing':
					remainingMinutes += 5;
					emptyArray.push(1);
					break;
				default:
					remainingMinutes += 2.5;
					emptyArray.push(1);
			}
			if (remainingMinutes >= timeLeft) {
				break;
			}
		}
	}
	return orders.splice(emptyArray.length);
}

console.log(
	remainigOrders(7, [
		'Tropical Island',
		'Energizer',
		'Limetime',
		'All or Nothing',
		'Pure Strawberry Joy',
	]),
);
