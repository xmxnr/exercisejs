// When visitors come to the amusement park for the first time, they need to register by entering their name and age in a terminal and agreeing to the terms and conditions. Of course, they also need to buy a ticket. Each ticket has an identifier like H32AZ123.

// Write a function createVisitor that accepts three arguments.

// The name of the visitor.
// The age of the visitor.
// The identifier of the ticket that the visitor bought.
// The function should return an object that holds this information. The keys in the object should be called name, age and ticketId.

function createVisitor(name, age, ticketId) {
	return {
		name: name,
		age: age,
		ticketId: ticketId,
	};
}

// When people leave the amusement park, their ticket gets revoked. If they come back, they need to buy a new one. To save regular visitors some time, they only need to register once and the visitor information will be kept for subsequent visits.

// That means when a visitor leaves the park, only their ticket should be invalidated but the rest of the visitor object should stay the same. Implement the function revokeTicket that accepts a visitor object, sets the ticket identifier to null and returns the object afterwards.
const visitor1 = {
	name: 'Verena Nardi',
	age: 45,
	ticketId: 'H32AZ123',
};

function revokeTicket(visitor) {
	visitor.ticketId = null;

	return visitor;
}

// To prevent forgery, the ticket identifiers are unique. Once a ticket is printed, its identifier is added as a key in an object in the system so it can be tracked.

// Before the ticket is sold to a visitor, it is stored with the value null in the ticket tracking object. When it is sold to a visitor, the visitor's name is assigned as a value. When employees have doubts about the validity of a ticket, they need to check the status of the ticket in the system.

// Implement a function ticketStatus that accepts the tracking object and a ticket identifier as arguments. It should return one of the following results.

// 'unknown ticket id' if the identifier was not found in the tracking object
// 'not sold' in case the ticket was printed but not sold
// 'sold to {name}' where {name} is the name of the visitor if the ticket was sold
const tickets1 = {
	'0H2AZ123': null,
	'23LA9T41': 'Verena Nardi',
};

function ticketStatus(tickets, ticketId) {
	for (let key in tickets) {
		if (tickets[ticketId] === null) {
			return 'not sold';
		} else if (tickets[ticketId] === undefined) {
			return 'unknown ticket id';
		} else {
			return `sold to ${tickets[ticketId]}`;
		}
	}
}

// After a while, you get feedback from the employees that they want the ticket status to be easier to understand at the first glance. They only want to see either the name of the visitor or that the ticket is invalid.

// Write a function simpleTicketStatus that accepts the same arguments as ticketStatus in task 3. This function only returns one of two different results.

// the name of the visitor if the ticket was sold
// 'invalid ticket !!!' if the ticket was not sold yet or the identifier was not found in the tracking object
const tickets2 = {
	B7627X32: '',
	XF1X6S2W: 0,
	KJJIFFO0: false,
};

function simpleTicketsStatus(tickets, ticketId) {
	for (let key in tickets) {
		if (!tickets[ticketId] === true) {
			return 'invalid ticket !!!';
		} else {
			return `${tickets[ticketId]}`;
		}
	}
}

console.log(simpleTicketsStatus(tickets2, 'B7627X32'));
