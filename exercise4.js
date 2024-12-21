function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
	//Price by day
	const priceByDay = ratePerHour * 8;
	// Price of the month
	const priceByMonth = priceByDay * 22 * (1 - discount);
	//Number of complete months
	const numberOfMonths = Math.floor(numDays / 22);
	//Remainig of the months
	const remainigMonths = numDays % 22;
	//Price remaininf months
	const priceRemainingMonths = remainigMonths * priceByDay;
	//Price of the project months
	const priceProjectMonths = numberOfMonths * priceByMonth;
	//Final price
	const finalPrice = priceRemainingMonths + priceProjectMonths;

	return Math.ceil(finalPrice);
}

console.log(priceWithMonthlyDiscount(29.654321, 220, 0.112));
