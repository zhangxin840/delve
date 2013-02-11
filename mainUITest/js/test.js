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

	var discription = $("#discription");
	$(".heroCard").mouseenter(function() {
		var hero = window[this.id];
		var test = hero.discription;

		discription.promise().done(function() {
			discription.html(test);
			discription.fadeIn("normal");
		});
	});
	$(".heroCard").mouseleave(function() {

		discription.promise().done(function() {
			discription.fadeOut("normal");
		});
	});

	$("#popup").removeClass("hide");
	$("#popup").hide();

	$(".heroCard").click(function() {
		//Show popup
		var path = "images/" + this.id + ".gif";
		$("#bigHeroCard").attr("src", path);
		$("#popup").promise().done(function() {
			$("#popup").fadeIn("slow");
		});
		
		//Set the player
		var hero = window[this.id];
        player.hp = hero.vitality;
        player.playerClass = hero.playerClass;
	});

	$('.heroCard').mousewheel(function(event, delta, deltaX, deltaY) {
		if(delta > 0)
			$("#" + this.id).click();

		event.stopPropagation();
		event.preventDefault();
	});

	$("#popup").click(function() {
		$("#popup").promise().done(function() {
			$("#popup").fadeOut("normal");
		});
	});
	
	$('#popup').mousewheel(function(event, delta, deltaX, deltaY) {
		if(delta < 0)
			$("#popup").click();

		event.stopPropagation();
		event.preventDefault();
	});
	
	$("#startButton").click(function() {
		$("#popup").click();
		
	});
});
