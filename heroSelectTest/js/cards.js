/**
 * @author Administrator
 */

//Types: i = item, m = monster, t = trap
//Item subtypes: w = weapon, m = magic, p = potin, e= epic
//playerClasss: f = fighter, w = wizard, r = rogue, c = cleric, n = none


//Heros
var hero1 = {
	playerClass : "c",
	vitality : 5,
	discription : "Anytime you win against a monster, heal 1 damage.",
	special : function() {
	}
}

var hero2 = {
	playerClass : "f",
	vitality : 5,
	discription : "Wins attacks in the event of a tie.",
	special : function() {
	}
}

var hero3 = {
	playerClass : "r",
	vitality : 5,
	discription : "Ingore traps.",
	special : function() {
	}
}

var hero4 = {
	playerClass : "w",
	vitality : 5,
	discription : "Can have 4 items at a time instead of 2.",
	special : function() {
	}
}


//
//Epics
//
var gandr = {
	type : "i",
	subType : "e",
	playerClass : ["w"],
	modifier : 0,
	discription : "Automatically win against Demons. Dose not take up an item slot.",
	special : function() {
	}
}

var bardsBow = {
	type : "i",
	subType : "e",
	playerClass : ["r"],
	modifier : 0,
	discription : "Automatically win against Dragons. Dose not take up an item slot.",
	special : function() {
	}
}

var holySymbol = {
	type : "i",
	subType : "e",
	playerClass : ["c"],
	modifier : 0,
	discription : "Automatically win against Undead. Dose not take up an item slot.",
	special : function() {
	}
}

var shieldOfReflection = {
	type : "i",
	subType : "e",
	playerClass : ["f"],
	modifier : 0,
	discription : "Automatically win against Spellcasters. Dose not take up an item slot.",
	special : function() {
	}
}


//
//Magics
//
var cursedAmulet = {
	type : "i",
	subType : "m",
	playerClass : ["f", "w", "c"],
	modifier : 0,
	discription : "Must be equipped and can't be discarded except when a trap or monster card specifies to discard an item.",
	special : function() {
	}
}

var gemOfSeeing = {
	type : "i",
	subType : "m",
	playerClass : ["f", "w", "c"],
	modifier : 0,
	discription : "Avoid all traps.",
	special : function() {
	}
}

var ringOfFire = {
	type : "i",
	subType : "m",
	playerClass : ["f", "r", "w", "c"],
	modifier : 0,
	discription : "Destroy one monster. Discard after using.",
	special : function() {
	}
}

var scrollOfAcid = {
	type : "i",
	subType : "m",
	playerClass : ["w"],
	modifier : 0,
	discription : "Destroy one monster. Discard after using.",
	special : function() {
	}
}

var scrollOfFrost = {
	type : "i",
	subType : "m",
	playerClass : ["w"],
	modifier : 0,
	discription : "Destroy one monster. Discard after using.",
	special : function() {
	}
}

var scrollOfLighting = {
	type : "i",
	subType : "m",
	playerClass : ["w"],
	modifier : 0,
	discription : "Destroy one monster. Discard after using.",
	special : function() {
	}
}

var spellBook = {
	type : "i",
	subType : "m",
	playerClass : ["w"],
	modifier : 0,
	discription : "Discard to find up to 3 scrolls and equip them.",
	special : function() {
	}
}


//
//Weapons
//
var club = {
	type : "i",
	subType : "w",
	modifier : 1,
	playerClass : ["f", "r", "w", "c"],
	discription : "+1 attack.",
	special : function() {
	}
}

var javelinOfLighting = {
	type : "i",
	subType : "w",
	modifier : 2,
	playerClass : ["f", "r", "w", "c"],
	discription : "+2 attack. Discard to destroy one monster.",
	special : function() {
	}
}

var quarterstaff = {
	type : "i",
	subType : "w",
	modifier : 2,
	playerClass : ["f", "r", "w", "c"],
	discription : "+2 attack.",
	special : function() {
	}
}

var dagger = {
	type : "i",
	subType : "w",
	modifier : 1,
	playerClass : ["f", "r", "w"],
	discription : "+1 attack.",
	special : function() {
	}
}

var shortSword = {
	type : "i",
	subType : "w",
	modifier : 2,
	playerClass : ["f", "r", "c"],
	discription : "+2 attack.",
	special : function() {
	}
}

var longSword = {
	type : "i",
	subType : "f",
	modifier : 3,
	playerClass : ["f"],
	discription : "+3 attack.",
	special : function() {
	}
}

var berserkingSword = {
	type : "i",
	subType : "w",
	modifier : 5,
	playerClass : ["f"],
	discription : "+5 attack.",
	special : function() {
	}
}

var handCrossbow = {
	type : "i",
	subType : "w",
	modifier : 3,
	playerClass : ["r"],
	discription : "+3 attack.",
	special : function() {
	}
}

var swordOfSubtlety = {
	type : "i",
	subType : "w",
	modifier : 3,
	playerClass : ["r"],
	discription : "+3 attack.",
	special : function() {
	}
}

var glamdring = {
	type : "i",
	subType : "w",
	modifier : 4,
	playerClass : ["w"],
	discription : "+4 attack.",
	special : function() {
	}
}

var saintsMace = {
	type : "i",
	subType : "w",
	modifier : 4,
	playerClass : ["c"],
	discription : "+4 attack. Heal 2 damage when equipped.",
	special : function() {
	}
}


//
//Potions
//
var potion = {
	type : "i",
	subType : "p",
	modifier : 0,
	playerClass : ["f", "r", "w", "c"],
	discription : "Heal 2 damage.",
	special : function() {
	}
}


//
//Monsters
//
var assassinVine = {
	type : "m",
	subType : "plant",
	modifier : -1,
	vitality : 2,
	discription : "Wins automatically against Fighters",
	special : function() {
	}
}

var stroneGolem = {
	type : "m",
	subType : "construct",
	modifier : -2,
	vitality : 7,
	discription : "Wins automatically against Wizards",
	special : function() {
	}
}

var cerebrilith = {
	type : "m",
	subType : "psionic",
	modifier : -1,
	vitality : 3,
	discription : "Wins automatically against Clerics",
	special : function() {
	}
}

var ogreBarbarian = {
	type : "m",
	subType : "giant",
	modifier : -2,
	vitality : 7,
	discription : "Wins automatically against Rogues.",
	special : function() {
	}
}

var gelatinousCube = {
	type : "m",
	subType : "ooze",
	modifier : -1,
	vitality : 6,
	discription : "If you lose you can discard 1 item instead of taking damage.",
	special : function() {
	}
}

var banishedPixie = {
	type : "m",
	subType : "fairy",
	modifier : -1,
	vitality : 4,
	discription : "If you lose you can discard 1 item instead of taking damage.",
	special : function() {
	}
}

var goblin = {
	type : "m",
	subType : "goblinoid",
	modifier : -1,
	vitality : 1,
	discription : "If you have any items, you may discard them all instead of taking damage if you lose.",
	special : function() {
	}
}

var balor = {
	type : "m",
	subType : "demon",
	modifier : -2,
	vitality : 10,
	discription : "Immune to magic attacks.",
	special : function() {
	}
}

var quasit = {
	type : "m",
	subType : "demon",
	modifier : -2,
	vitality : 2,
	discription : "Immune to magic attacks.",
	special : function() {
	}
}

var hezrou = {
	type : "m",
	subType : "demon",
	modifier : -2,
	vitality : 5,
	discription : "Immune to magic attacks.",
	special : function() {
	}
}

var mummy = {
	type : "m",
	subType : "undead",
	modifier : -1,
	vitality : 3,
	discription : "Damage from undead can not be healed.",
	special : function() {
	}
}

var wraith = {
	type : "m",
	subType : "undead",
	modifier : -1,
	vitality : 6,
	discription : "Damage from undead can not be healed.",
	special : function() {
	}
}

var skeleton = {
	type : "m",
	subType : "undead",
	modifier : -1,
	vitality : 4,
	discription : "Damage from undead can not be healed.",
	special : function() {
	}
}

var lich = {
	type : "m",
	subType : "undead",
	modifier : -2,
	vitality : 8,
	discription : "Damage from undead can not be healed.",
	special : function() {
	}
}

var drowWizard = {
	type : "m",
	subType : "spellcaster",
	modifier : -1,
	vitality : 8,
	discription : "If you do not attack with magic, take 1 damage only if you would have won.",
	special : function() {
	}
}

var ogreMage = {
	type : "m",
	subType : "spellcaster",
	modifier : -1,
	vitality : 7,
	discription : "If you do not attack with magic, take 1 damage only if you would have won.",
	special : function() {
	}
}

var renegadeWarlock = {
	type : "m",
	subType : "spellcaster",
	modifier : -2,
	vitality : 6,
	discription : "If you do not attack with magic, take 1 damage only if you would have won.",
	special : function() {
	}
}

var decrepitGreenDragon = {
	type : "m",
	subType : "dragon",
	modifier : -1,
	vitality : 6,
	discription : "If you lose you must also discard 1 item if you have one.",
	special : function() {
	}
}

var redDragon = {
	type : "m",
	subType : "dragon",
	modifier : -2,
	vitality : 12,
	discription : "If you lose you must also discard 1 item if you have one.",
	special : function() {
	}
}

var youngBlackDragon = {
	type : "m",
	subType : "dragon",
	modifier : -1,
	vitality : 9,
	discription : "If you lose you must also discard 1 item if you have one.",
	special : function() {
	}
}

//
//Traps
//
var spikedPit = {
	type : "t",
	modifier : -1,
	discription : "Turn this card into 1 damage.",
	special : function() {
	}
}

var earthquake = {
	type : "t",
	modifier : -1,
	discription : "Either discard 1 item or turn this card into 1 damage.",
	special : function() {
	}
}

var acidArrowTrap = {
	type : "t",
	modifier : -1,
	discription : "Either discard 1 item or turn this card into 1 damage.",
	special : function() {
	}
}

var corrosiveMist = {
	type : "t",
	modifier : 0,
	discription : "Discard 1 item.",
	special : function() {
	}
}

var crushingRoom = {
	type : "t",
	modifier : -1,
	discription : "If you have weapons, discard them and turn this card into 1 damage, otherwise, ingore this card.",
	special : function() {
	}
}