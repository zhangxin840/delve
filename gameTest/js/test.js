//Types: i = item, m = monster, t = trap
//Item subtypes: w = weapon, m = magic, p = potin, e= epic
//Monster subtypes: s = spellcaster, d = dragon, de = demon, u = undead
//playerClasss: f = fighter, w = wizard, r = rogue, c = cleric, n = none

var nameList = ["A", "B", "C", "D", "E", "F"];

var player = {
	hp : 5, //Player health point
	playerClass : "n",
	items : ["A", "B"],
	special : function() {
		switch(playerClass) {
			case "n":
				;
				break;
			case "f":
				;
				break;
			case "w":
				;
				break;
			case "r":
				;
				break;
			case "c":
				;
				break;
		}
	}
}

var defeatDeck = [];

// A face up deck of card names
var damageDeck = {
	cards : [],
	add : function(cardName) {
		this.cards.push(cardName);
	},
	sumDamage : function() {
		if(cards.length <= 0) {
			return 0;
		}

		var sum = 0;
		var obj;
		for(cardName in cards) {
			obj = window[cardName];
			sum += obj.modifier;
		}
		return sum;
	}
}

// A face down deck of card names
var drawDeck = {
	cards : nameList.slice(0), // Copy the nameList array
	deal : function() {
		return this.cards.pop();
		// Pop the last object in array
	},
	remove : function(cardName) {
		var idx = this.cards.indexOf(cardName);
		// Find the index
		if(idx != -1)
			this.cards.splice(idx, 1);
	},
	insert : function(cardName) {
		this.cards.push(cardName);
		// A face down deck can be shuffled any times
		this.shuffle();
	},
	shuffle : function() {
		var i;
		var a;
		var b;
		var temp;
		var length = this.cards.length;

		//Swap 3*deck.length times
		for( i = 0; i < 3 * length; i++) {
			a = Math.floor(Math.random() * length);
			b = Math.floor(Math.random() * length);
			temp = this.cards[a];
			this.cards[a] = this.cards[b];
			this.cards[b] = temp;
		}
	}
}

$(function() {
	drawDeck.shuffle();
	drawDeck.insert("ZX");
	var theString = "";
	var theString2 = "";
	var theString3 = "";
	var i = 0;
	var length = 0;

	drawDeck.remove("C");
	length = drawDeck.cards.length
	for( i = 0; i < length; i++) {
		theString += drawDeck.deal() + " ";
	}
	$("#test1").html(theString);

	for( i = 0; i < nameList.length; i++) {
		theString2 += nameList[i] + " ";
	}
	$("#test2").html(theString2);

	//Get obj by name
	var obj = window["player"];
	var test = obj.items[0];
	$("#test3").html(test);

});
