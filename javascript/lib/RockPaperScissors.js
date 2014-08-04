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

;

PAIRS = {"rock":"scissors", "scissors":"rock", "paper":"rock", "scissors":"paper"}

Game.prototype.winner = function() {
  if (this.same_pick()) {
  	return null;
  } else if (PAIRS[this.player1.pick] == this.player2.pick) {
	  return this.player1;
	} else {
		return this.player2;
	}
}


Game.prototype.same_pick = function() {
	return(this.player1.pick == this.player2.pick);
};