function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.WINNING = { 
	rock: { scissors: 'crushes', lizard: 'crushes' },
	lizard: { spock: 'poisons', paper: 'eats'},
	spock: {scissors: 'smashes', rock: 'vaporizes'},
	scissors: {paper: 'cuts', lizard: 'decapitates'},
	paper: {rock: 'covers', spock: 'disproves'}
};


Game.prototype.winner = function() {
  if (this.same_pick()) {
  	return null;
  } else if (this.player1.defeats(this.player2)) {
	  return this.player1;
	} else {
		return this.player2;
	}
}

Game.prototype.loser = function() {
	if (this.winner() == this.player1) {
		return this.player2;
	} else if (this.winner() == this.player2){
		return this.player1;
	}
};

Player.prototype.defeats = function(opponent) {
	return Object.keys(Game.prototype.WINNING[this.pick]).indexOf(opponent.pick) >-1
};

Game.prototype.winner_message = function() {
	console.log(this.player1.pick)
	return this.winner().name + "'s " + this.winner().pick + " " + this.WINNING[this.winner().pick][this.loser().pick] + " " + this.loser().name + "'s " + this.loser().pick; 
};

Game.prototype.same_pick = function() {
	return(this.player1.pick === this.player2.pick);
};