function deckConstructor(){
	this.cards = [];
	var numbers = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
	var suits = ['Heart', 'Spade', 'Diamond', 'Club'];
	for(var j=0; j<suits.length; j++){
		for(var i=0; i<numbers.length; i++){
			this.cards.push(suits[j] + numbers[i]+ ' ');
		}
	}
	console.log(this.cards);

	this.shuffleDeck = function(){
		this.deck = this.cards;
		for(var i=0; i<300; i++){	
			var index = Math.floor(Math.random()*52);
			var card = this.deck[index];
			this.deck.splice(index, 1);
			this.deck.push(card);
		}
		console.log(this.deck);
	};

	this.resetDeck = function(){
		reset_deck = new deckConstructor();
		console.log(reset_deck);
	};

	this.dealCard = function(){
		var random_card = '';
		var index = Math.floor(Math.random()*this.deck.length);
		random_card = this.cards[index];
		this.deck.splice(index, 1);
		return random_card;
	};	

	this.player_hand = function(){
		var hand = [];
		for(var i=0; i<5; i++ ){
			hand.push(this.dealCard());
		}
		return hand;
	};

}

var my_deck = new deckConstructor();
my_deck.shuffleDeck();
my_deck.resetDeck();
my_deck.dealCard();


function PlayerConstructor(name, hand){
	this.name = name;
	this.hand = hand;

	this.discardCard = function(index){
		var discarded_card = '';
		discarded_card = this.hand[index];
		this.hand.splice(index, 1);
		return discarded_card;
	};	
}

var my_player = new PlayerConstructor('Thaissa', my_deck.player_hand());
console.log(my_player);
my_player.discardCard(2);


















