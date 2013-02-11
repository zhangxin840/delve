/**
 * @author Administrator
 */

//Types: i = item, m = monster, t = trap
//Item subtypes: w = weapon, m = magic, p = potin, e= epic
//Monster subtypes: s = spellcaster, d = dragon, de = demon, u = undead
//playerClasss: f = fighter, w = wizard, r = rogue, c = cleric, n = none

//Items cards
var itemCard1 = {
	type : "i",
	subType:"w",
	playerClass : ["f", "w"],
	modifier : 1,
	discription :"",
	special : function() {
		player.hp += 1;
	}
}

var itemCard2 = {
	type : "i",
	subType:"m",
	playerClass : ["f", "w", "r"],
	modifier : 2,
	discription :"",
	special : function() {
		player.hp += 1;
	}
}

//
//Monster cards
//
var monsterCard1 = {
	type : "m",
	subType:"s",
	modifier : -1,
	vitality : 5,
	discription :"",
	special : function() {
		player.hp -= 1;
	}
}

var monsterCard2 = {
	type : "m",
	subType:"d",
	modifier : -1,
	vitality : 5,
	discription :"",
	special : function() {
		player.hp -= 1;
	}
}

//
//Trap cards
//
var spikedPit = {
	type : "t",
	modifier : -1,
	discription :"Turn this card into 1 damage.",
	special : function() {
	}
}

var earthquake = {
	type : "t",
	modifier : -1,
	discription :"Either discard 1 item or turn this card into 1 damage.",
	special : function() {
	}
}

var acidArrowTrap = {
	type : "t",
	modifier : -1,
	discription :"Either discard 1 item or turn this card into 1 damage.",
	special : function() {
	}
}

var corrosiveMist = {
	type : "t",
	modifier : 0,
	discription :"Discard 1 item.",
	special : function() {
	}
}

var crushingRoom = {
	type : "t",
	modifier : -1,
	discription :"If you have weapons, discard them and turn this card into 1 damage, otherwise, ingore this card.",
	special : function() {
	}
}





