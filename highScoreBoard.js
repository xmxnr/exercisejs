// Create a function createScoreBoard that creates an object that serves as a high score board. The keys of this object will be the names of the players, the values will be their scores. For testing purposes, you want to directly include one entry in the object. This initial entry should consist of The Best Ever as player name and 1000000 as score.

function createScoreBoard() {
	const scores = {
		'The Best Ever': 1000000,
	};

	return scores;
}

const existingScoreBoard = createScoreBoard();

// To add a player to the high score board, define the function addPlayer. It accepts 3 parameters:

// The first parameter is an existing score board object.
// The second parameter is the name of a player as a string.
// The third parameter is the score as a number.
// The function returns the same score board object that was passed in after adding the new player.

function addPlayer(scoreBoard, player, score) {
	scoreBoard[player] = score;

	return scoreBoard;
}

// If players violate the rules of the arcade hall, they are manually removed from the high score board. Define removePlayer which takes 2 parameters:

// The first parameter is an existing score board object.
// The second parameter is the name of the player as a string.
// This function should remove the entry for the given player from the board and return the board afterwards. If the player was not on the board in the first place, nothing should happen to the board. It should be returned as is.

function removePlayer(scoreBoard, player) {
	delete scoreBoard[player];

	return scoreBoard;
}

// If a player finishes another game at the arcade hall, a certain amount of points will be added to the previous score on the board. Implement updateScore, which takes 3 parameters:

// The first parameter is an existing score board object.
// The second parameter is the name of the player whose score should be increased.
// The third parameter is the score that you wish to add to the stored high score.
// The function should return the score board after the update was done.

function updateScore(scoreBoard, player, points = 0) {
	scoreBoard[player] += points;

	return scoreBoard;
}

// The arcade hall keeps a separate score board on Mondays. At the end of the day, each player on that board gets 100 additional points.

// Implement the function applyMondayBonus that accepts a score board. The function adds the bonus points for each player that is listed on that board. Afterwards, the board is returned.

function applyMondayBonus(scoreBoard) {
	for (let key in scoreBoard) {
		scoreBoard[key] = scoreBoard[key] + 100;
	}

	return scoreBoard;
}

// Different arcade halls award different score points. To celebrate the best arcade player in town, a player's score needs to be normalized so scores from different arcade halls become comparable.

// Write a function normalizeScore. To practice your object skills, instead of two parameters this function should accept one object as a parameter. That object contains a key score with the value being a player's score (a number). There is also a second key normalizeFunction that has a function as its value. This function takes a score as an argument and returns the corrected score.

// Your function normalizeScore should return the normalized score that you get after applying the normalization function to the score that was passed in.
function normalizeScore(object) {
	return object.normalizeFunction(object.score);
}

function normalize(score) {
	return 2 * score + 10;
}

const params = { score: 400, normalizeFunction: normalize };

console.log(normalizeScore(params));
