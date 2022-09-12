/*
=== List of Effects that generate mechanics ===

1. This card can attack from your Pendulum Zone
2. This card can attack during your opponent's battle phase
3. This card can attack while in face-up Defense Position
4. You can Set this card from your hand to your Spell
*/


window.findCard = function(arr, hand, grave, like)
{
	var no_question = true;
	var cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell, linkLeft, linkRight, player1.skillCard, player2.skillCard];
	if (hand) {
		for (var k = 0; k < player1.hand_arr.length; k++) {
			cards.push(player1.hand_arr[k]);
		}
	}
	if (grave) {
		for (k = 0; k < player1.grave_arr.length; k++) {
			cards.push(player1.grave_arr[k]);
		}
	}
	for (var i = 0; i < arr.length;i ++) {
		if(arr[i] != "Question")
			continue;
		
		no_question = false;
		
		for (var j = 0; j < cards.length; j++) {
			if (cards[j]) {
				if (cards[j].data("face_down")) { // Question
					continue;
				}
				//if (cards[j].data("cardfront").data("treated_as") == arr[i] && !cards[j].data("face_down")) {
				if (cards[j].data("cardfront").data("treated_as") == arr[i] || like && cards[j].data("cardfront").data("treated_as") && cards[j].data("cardfront").data("treated_as").indexOf(arr[i]) >= 0) {
					return true;
				}
			}
		}
	}
	return no_question;
}

window.cardMenuE = function() {	
	if (!Duelist()) {
		menu_reason = "You are not a duelist";
		return;
	}
	var card = $(this).parent();
	if (automatic) {
		showEquips(card);
	}
	if (card.data("controller") != player1) {
		if (card.data("controller") == player3) {
			updateController(player1, card);
			updateOwner(player1, card);
		}
	}
	if (card == menu_card) {
		menu_reason = "card is menu_card";
		return;
	}
	if (!viewing) {
		if (!isPlayer1(card.data("controller").username)) {
			menu_reason = "You don't control this card";
			return;
		}
		if (isIn(card, player1.main_arr) >= 0) {
			menu_reason = "Card is in the Deck";
			return;
		}
		if (isIn(card, player1.extra_arr) >= 0) {
			menu_reason = "Card is in the Extra Deck";
			return;
		}
	}
	
	if (automatic) {
		cardMenuE2(card);
		return;
	}
	
	var menu = [];
	if (card.data("controller") != player1) {
		if (isIn(card, player1.opponent.grave_arr) >= 0 || isIn(card, player1.opponent.banished_arr) >= 0) {
			if (card.data("cardfront").data("card_type") == "Monster") {
				if (hasAvailableMonsterZones(player1)) {
					menu.push({label:"SS ATK",data:"SS ATK"});

					menu.push({label:"SS DEF",data:"SS DEF"});
				}
			}
			if (isIn(card, player1.opponent.grave_arr) >= 0) {
				menu.push({label:"Banish",data:"Banish"});
			}
			else if (!card.data("face_down")) {
				menu.push({label:"To Grave",data:"To GY"});
			}
			menu.push({label:"Target",data:"Target"});
			
			
			if (findCard(["Toadally Awesome"], true, true, true)) {
				if (card.data("cardfront").data("card_type") != "Monster") {
					if (hasAvailableSTZones(player1) && card.data("cardfront").data("type") != "Field") {
						menu.push({label:"To S/T",data:"To ST"});
					}
					else if (player1.fieldSpell == null	&& card.data("cardfront").data("type") == "Field") {
						//menu.push({label:"Set",data:"Set Field Spell"});
						menu.push({label:"Activate",data:"Activate Field Spell"});
					}
				}
			}
		}
		if ((viewing == "Opponent's Deck (partial)" || viewing == "Opponent's Deck (Top 3 Cards)" || viewing == "Opponent's Deck (Top 5 Cards)") && isIn(card, player1.opponent.main_arr) >= 0) {
			if (findCard(["Destiny HERO - Dominance", "Flower Cardian Peony with Butterfly", "Goddess Skuld's Oracle", "Millennium Necklace", "SPYRAL GEAR - Drone"])) {
				menu.push({label:"To Top of Deck",data:"To T Deck 2"});
			}
			if (findCard(["Flower Cardian Peony with Butterfly"])) { // eh
				menu.push({label:"To Bottom of Deck",data:"To B Deck 2"});
			}
		}
	}
	else {
		
		// for attacking during opponent's battle phase.
		if (currentPhase == "BP" && !card.data("face_down") && card.data("cardfront").data("effect").search(/This card can attack during your opponent's battle phase/i) != -1)
		{
			if (countMonsters(player2) > 0) {
				menu.push({label:"Attack",data:"Attack"});
			}
			menu.push({label:"Attack Directly",data:"Attack directly"});
		}
		else if (currentPhase == "BP" && (turn_player.username == username || isEitherTurnAttacker(card)) && !card.data("face_down") && isST(player1, card) && isPendulumAttacker(card)) {
				if (countMonsters(player2) > 0) {
					menu.push({label:"Attack",data:"Attack"});
				}
				menu.push({label:"Attack Directly",data:"Attack directly"});
		}
		else if (currentPhase == "BP" && (turn_player.username == username || isEitherTurnAttacker(card)) && !card.data("face_down") && isMonster(player1, card)) {
			if (card.data("inATK")) {
				if (countMonsters(player2) > 0) {
					menu.push({label:"Attack",data:"Attack"});
				}
				menu.push({label:"Attack Directly",data:"Attack directly"});
			}
			else {
				switch (card.data("cardfront").data("name")) {
					default:
						if (card.data("cardfront").data("effect").search(/This card can attack while in face-up Defense Position/i) == -1) {
							break;
						}
					case "Elemental HERO Rampart Blaster":
					case "Invoked Cocytus":
					case "Superheavy Samurai Beast Kyubi":
					case "Superheavy Samurai Big Benkei":
					case "Superheavy Samurai General Jade":
					case "Superheavy Samurai Ninja Sarutobi":
					case "Superheavy Samurai Ogre Shutendoji":
					case "Superheavy Samurai Stealth Ninja":
					case "Superheavy Samurai Steam Train King":
					case "Superheavy Samurai Swordmaster Musashi":
					case "Superheavy Samurai Wagon":
					case "Superheavy Samurai Warlord Susanowo":
					case "Total Defense Shogun":
						if (countMonsters(player2) > 0) {
							menu.push({label:"Attack",data:"Attack"});
						}
						menu.push({label:"Attack Directly",data:"Attack directly"});
				}
			}
		}
		if (isIn(card, player1.hand_arr) >= 0) {
			if (hasAvailableSTZones(player1) && card.data("cardfront").data("effect").search(/You can Set this card from your hand to your Spell/i) != -1) {
				menu.push({label:"Set (To S/T)",data:"Set ST"});
			}
			if (card.data("cardfront").data("pendulum")) {
				if (links && (!player1.s1 || !player1.s5)) {
					menu.push({label:"Activate",data:player1.s1 && !player1.s5 ? "Activate Pendulum Right" : (!player1.s1 && player1.s5 ? "Activate Pendulum Left" : "Activate Pendulum")});
				}
				else if (!links) {
					if (!player1.pendulumLeft) {
						menu.push({label:"Activate Left",data:"Activate Pendulum Left"});
					}
					if (!player1.pendulumRight) {
						menu.push({label:"Activate Right",data:"Activate Pendulum Right"});
					}
				}
			}
			if (card.data("cardfront").data("type") != "Field" && card.data("cardfront").data("card_type") != "Monster" && hasAvailableSTZones(player1)) {
				//if (card.data("cardfront").data("card_type") == "Spell" || (card.data("cardfront").data("name") == "Harpie's Feather Storm" && findCard(["Harpie Lady", "Harpie Queen", "Harpie Channeler", "Harpie Dancer"])) || card.data("cardfront").data("card_type") == "Trap" && card.data("cardfront").data("name").indexOf("Magical Musket") == 0 && findCard(["Magical Musket Mastermind Zakiel", "Magical Musketeer Calamity", "Magical Musketeer Caspar", "Magical Musketeer Doc", "Magical Musketeer Kidbrave", "Magical Musketeer Starfire", "Magical Musketeer Wild"])) {
				if (card.data("cardfront").data("card_type") == "Spell") {
					menu.push({label:"Activate",data:"Activate ST"});
				}
				menu.push({label:"Set",data:"Set ST"});
			}
			if (card.data("cardfront").data("type") == "Field" && !player1.fieldSpell) {
				menu.push({label:"Activate",data:"Activate Field Spell"});
				menu.push({label:"Set",data:"Set Field Spell"});
			}
			if (hasAvailableMonsterZones(player1)) {
				if (card.data("cardfront").data("card_type") == "Monster") {
					menu.push({label:"Normal Summon",data:"Normal Summon"});
					menu.push({label:"Set",data:"Set monster"});
				}
				else if (findCard(["Magical Hats"])) {
					menu.push({label:"Set to Monster Zone",data:"Set monster"});
				}
			}
		}
		if (card.data("cardfront").data("monster_color") == "Xyz" && isIn(card, player1.extra_arr) >= 0 && countOverlayOptions(player1) >= 1) {
			menu.push({label:"OL ATK",data:"OL ATK"});
			menu.push({label:"OL DEF",data:"OL DEF"});
		}
		if ((hasAvailableMonsterZones(player1) || links && (!linkLeft || !linkRight) && isIn(card, player1.extra_arr) >= 0) && card.data("cardfront").data("card_type") == "Monster" && !card.data("isXyzMaterial") && !isMonster(player1, card) && !isST(player1, card)) {
			menu.push({label:"S. Summon ATK",data:"SS ATK"});
			menu.push({label:"S. Summon DEF",data:"SS DEF"});
			menu.push({label:"Set",data:"Set monster"});
		}
		if (isIn(card, player1.grave_arr) >= 0 && hasAvailableMonsterZones(player1)) {
			switch (card.data("cardfront").data("name")) {
				case "First-Aid Squad":
				case "Paleozoic Olenoides":
				case "Paleozoic Hallucigenia":
				case "Paleozoic Canadia":
				case "Paleozoic Pikaia":
				case "Paleozoic Eldonia":
				case "Paleozoic Dinomischus":
				case "Paleozoic Marrella":
				case "Paleozoic Leanchoilia":
				case "The Phantom Knights of Dark Gauntlets":
				case "The Phantom Knights of Shadow Veil":
				case "The Prime Monarch":
					menu.push({label:"SS ATK",data:"SS ATK"});
					menu.push({label:"SS DEF",data:"SS DEF"});
					break;
			}
		}
		if (card.data("cardfront").data("monster_color") == "Token") {
			menu.push({label:"Remove",data:"Remove Token"});
			if (isMonster(player1, card)) {
				if (card.data("inDEF")) {
					menu.push({label:"To ATK",data:"To ATK"});
				}
				menu.push({label:"To DEF",data:"To DEF"});
			}
			//menu.push({label:"Change Control",data:"Change control"});
			menu.push({label:"Move",data:"Move"});
		}
		else {
			if (isST(player1, card) && card.data("face_down")) {
				menu.push({label:"Activate",data:"Activate ST"});
			}
			if (player1.fieldSpell && card[0] == player1.fieldSpell[0] && card.data("face_down")) {
				menu.push({label:"Activate",data:"Activate Field Spell"});
			}
			if (isIn(card, player1.main_arr) >= 0) {
				menu.push({label:"To Hand",data:"To hand"});
				//if (!player1.fieldSpell && card.data("cardfront").data("type") == "Field" && findCard(["Ancient Fairy Dragon", "Demise of the Land", "Dream Mirror Hypnagogia", "Galatea, the Orcust Automaton", "Ghostrick Renovation", "Last Resort", "Metaverse", "Pop-Up", "Triamid Dancer", "Triamid Hunter", "Triamid Master"])) {
				if (!player1.fieldSpell && card.data("cardfront").data("type") == "Field") {
					//menu.push({label:"Activate ",data:"Activate Field Spell"});
					menu.push({label:"Activate",data:"Activate Field Spell"});
				}
			}
			if (isIn(card, player1.grave_arr) < 0 && !card.data("isXyzMaterial")) {
				menu.push({label:"To Graveyard",data:"To GY"});
			}
			if (!card.data("face_down")) {
				//if (isMonster(player1, card) || isST(player1, card) || player1.fieldSpell && card[0] == player1.fieldSpell[0] || player1.pendulumLeft && card[0] == player1.pendulumLeft[0] || player1.pendulumRight && card[0] == player1.pendulumRight[0]) {
				if (isMonster(player1, card) || isST(player1, card) || player1.fieldSpell && card[0] == player1.fieldSpell[0] || player1.pendulumLeft && card[0] == player1.pendulumLeft[0] || player1.pendulumRight && card[0] == player1.pendulumRight[0] || isIn(card, player1.grave_arr) >= 0 || isIn(card, player1.banished_arr) >= 0) {
					menu.push({label:"Declare",data:"Declare"});
				}
			}
			if (!links && card.data("cardfront").data("pendulum") && isIn(card, player1.hand_arr) < 0) {
				if (!player1.pendulumLeft) {
					menu.push({label:"Activate Left",data:"Activate Pendulum Left"});
				}
				if (!player1.pendulumRight) {
					menu.push({label:"Activate Right",data:"Activate Pendulum Right"});
				}
			}
			if (isMonster(player1, card)) {
				if (card.data("inDEF")) {
					if (card.data("face_down")) {
						menu.push({label:"Flip Summon",data:"Flip Summon"});
						menu.push({label:"Flip",data:"Flip"});
					}
					else {
						menu.push({label:"To ATK",data:"To ATK"});
					}
				}

				menu.push({label:"To DEF",data:"To DEF"});

				if (!card.data("face_down")) {
					menu.push({label:"Set",data:"Set monster"});
				}
			}
			if (isST(player1, card) && !card.data("face_down")) {
				menu.push({label:"Set",data:"Set ST"});
			}
			if (player1.fieldSpell && card[0] == player1.fieldSpell[0] && !card.data("face_down")) {
				menu.push({label:"Set",data:"Set Field Spell"});
			}
			if (isIn(card, player1.hand_arr) < 0 && isIn(card, player1.main_arr) < 0 && !isExtraDeckCard(card) && card.data("cardfront").data("monster_color") != "Token" && !card.data("isXyzMaterial")) {
				menu.push({label:"To Hand",data:"To hand"});
			}
			//if (card.data("isXyzMaterial")) {
			//	menu.push({label:"Detach",data:"Detach"});
			//}
			if (isIn(card, player1.banished_arr) < 0) {
				menu.push({label:"Banish",data:"Banish"});
				if (findCard([
					"Black Luster Soldier - Envoy of the Evening Twilight",
					"Blue Duston",
					"Chaos Scepter Blast",
					"Eater of Millions",
					"Elemental HERO Nebula Neos",
					"Evening Twilight Knight",
					"Evenly Matched",
					"Banquet of Millions",
					"Gizmek Orochi, the Serpentron Sky Slasher",
					"Lightforce Sword",
					"Necro Fusion",
					"Network Trap Hole",
					"Number 89: Diablosis the Mind Hacker",
					"PSY-Frame Overload",
					"Small World",
					"Super Koi Koi",
					"Transmission Gear",
					"Treasure Panda",
					"Wind-Up Zenmaintenance",
					"Xyz Override"
				//], true) || isIn(card, player1.main_arr) >= 0 || card.data("face_down")) {
				], true) || isIn(card, player1.main_arr) >= 0 || isIn(card, player1.extra_arr) >= 0 || card.data("face_down")) {
					menu.push({label:"Banish FD",data:"Banish FD"});
				}
			}
			if (player1.opponent == null) {
				player1.opponent = player2; // quick fix
			}
			if (isMonster(player1, card) && hasAvailableMonsterZones(player1.opponent)) {
				//menu.push({label:"Change Control",data:"Change control"});
			}
			if (isExtraDeckCard(card) && isIn(card, player1.extra_arr) < 0) {
				menu.push({label:"To Extra Deck",data:"To ED"});
			}
			//if (card.data("cardfront").data("pendulum") && isIn(card, player1.extra_arr) < 0 && (isMonster(player1, card) || isST(player1, card) || card == player1.pendulumRight || card == player1.pendulumLeft)) {
			if (card.data("cardfront").data("pendulum") && isIn(card, player1.main_arr) < 0 && isIn(card, player1.hand_arr) < 0) { // i think you should be able to return it from the gy to the extra deck
				menu.push({label:"To Extra Deck FU",data:"To ED FU"});
			}
			if (!isExtraDeckCard(card) && isIn(card, player1.main_arr) < 0 && !card.data("isXyzMaterial")) {
				menu.push({label:"To Top of Deck",data:"To T Deck"});
				//if (findEffect("bottom", true, true, true) && isIn(card, player1.extra_arr) < 0 || findCard(["Small World"])) {
				//if (findEffect("bottom", true, true, true) && isIn(card, player1.extra_arr) < 0) {
				if (findEffect("bottom") || findCard(["Tearlament"], true, true, true) && isIn(card, player1.extra_arr) < 0) {
					menu.push({label:"To Bottom of Deck",data:"To B Deck"});
				}
			}
			
			// Eyal282 here, nobody will ever use this...
			/*if (isIn(card, player1.main_arr) >= 0 && findCard(["Upside Down"])) {
				menu.push({label:"To Bottom of Deck",data:"Upside Down effect 2"});
			}*/
			
			
			/*if (card.data("cardfront").data("pendulum") && !card.data("face_down") && (isMonster(player1, card) || isST(player1, card))) {
				if (!links) {
					if (!player1.pendulumRight) {
						menu.push({label:"To P. Right",data:"Activate Pendulum Right"});
					}
					if (!player1.pendulumLeft) {
						menu.push({label:"To P. Left",data:"Activate Pendulum Left"});
					}
				}
				else if (!player1.s1 || !player1.s5) {
					menu.push({label:"Activate Pendulum",data:player1.s1 && !player1.s5 ? "Activate Pendulum Right" : (!player1.s1 && player1.s5 ? "Activate Pendulum Left" : "Activate Pendulum")});
				}
			}*/
			
			
			
			
			
			//if (isMonster(player1, card) || isST(player1, card) || (player1.fieldSpell && card[0] == player1.fieldSpell[0]) || (player1.pendulumRight && card[0] == player1.pendulumRight[0]) || (player1.pendulumLeft && card[0] == player1.pendulumLeft[0])) {
			if (isIn(card, player1.hand_arr) < 0 && isIn(card, player1.main_arr) < 0 && isIn(card, player1.extra_arr) < 0) {
				menu.push({label:"Target",data:"Target"});
			}
			
			
			
			if (isMonster(player1, card) || isST(player1, card) || (player1.fieldSpell && card[0] == player1.fieldSpell[0]) && !card.data("face_down")) {
				menu.push({label:"Move",data:"Move"});
			}
			if (isMonster(player1, card) && countOverlayOptions(player1) > 1 && !card.data("face_down")) {
				menu.push({label:"Overlay",data:"Overlay"});
			}
			if ((isIn(card, player1.hand_arr) >= 0 && card.data("cardfront").data("card_type") != "Spell") || isIn(card, player1.main_arr) >= 0 || isIn(card, player1.grave_arr) >= 0) {
				//if (card.data("cardfront").type != "Field" && hasAvailableSTZones(player1)) {
				if (hasAvailableSTZones(player1)) {
					menu.push({label:"To S/T",data:"To ST"});
				}
			}
			if (isIn(card, player1.hand_arr) >= 0) {
				menu.push({label:"Declare",data:"Declare"}); // we'll need to enforce a minimum of v446
			}
			if (isIn(card, player1.hand_arr) >= 0 || isIn(card, player1.extra_arr) >= 0 || isIn(card, player1.main_arr) >= 0 && findCard(["Small World"])) {
				menu.push({label:"Reveal",data:"Reveal"});
				if (card.data("face_up")) {
					menu.push({label:"Stop Revealing",data:"Stop revealing"});
				}
				else if (card.data("cardfront").data("effect").includes("becomes revealed") || card.data("cardfront").data("effect").includes("remain revealed") || findCard(["Contract with Don Thousand"])) {
					menu.push({label:"Stay Revealed",data:"Stay revealed"});
				}
			}
			if (!card.data("face_down")) {
				if (isMonster(player1, card)) {
					switch (card.data("cardfront").data("name")) {
						case "Parasite Paracide":
							menu.push({label:"Resolve Effect",data:"To T Deck 2 FU"});
							break;
						case "SPYRAL GEAR - Drone":
							if (player1.opponent.main_arr.length >= 3) {
								menu.push({label:"Look at cards",data:"Spyral event"});
							}
							break;
						case "Destiny HERO - Dominance":
							if (player1.opponent.main_arr.length >= 5) {
								menu.push({label:"Look at opponent cards",data:"Dominance event"});
							}
							break;
						case "Zolga the Prophet":
							if (player1.opponent.main_arr.length >= 1) {
								menu.push({label:"Look at opponent cards",data:"Zolga event"});
							}
							break;
						case "Flower Cardian Peony with Butterfly":
							if (player1.opponent.main_arr.length >= 3) {
								menu.push({label:"Look at cards",data:"Peony event"});
							}
							break;
						case "Aegaion the Sea Castrum":
							if (player1.opponent.extra_arr.length > 0) {
								menu.push({label:"Resolve Effect",data:"Random extra event"});
							}
							break;
						case "Number 78: Number Archive":
							if (player1.extra_arr.length > 0) {
								menu.push({label:"Resolve Effect",data:"Banish random ED card"});
							}
							break;
						case "Kozmo Tincan": // this card requires the remaining cards to go to the GY
						case "Noble Knight Borz": // this card requires the remaining cards to go to the GY
							if (player1.main_arr.length >= 3) {
								menu.push({label:"Resolve Effect",data:"Tincan effect"});
							}
							break;
						case "Hi-Speedroid Rubber Band Shooter": // this card requires the remaining cards to go to the GY
							if (player1.main_arr.length >= 2) {
								menu.push({label:"Resolve Effect",data:"Rubber Band effect"});
							}
							break;
						case "Crowley, the First Propheseer":
						case "Power Tool Dragon":
						case "Machina Metalcruncher":
							if (player1.main_arr.length >= 3) {
								menu.push({label:"Resolve Effect",data:"Crescent effect"});
							}
							break;
						case "Salamangreat Foxy":
							if (player1.main_arr.length >= 3) {
								menu.push({label:"Banish 3 Cards",data:"Banish top 3 cards"});
							}
							break;
						case "Time Thief Redoer":
							if (player1.opponent.main_arr.length >= 1) {
								menu.push({label:"Resolve Effect",data:"Redoer event"});
							}
							break;
						case "Necroface":
							if (player1.opponent.banished_arr.length >= 1 || player2.opponent.banished_arr.length >= 1) {
								menu.push({label:"Resolve Effect",data:"Necroface event"});
							}
							break;
					}
					if (card.data("cardfront").data("id") == 10190) {
						if (player1.extra_arr.length >= 1) {
							menu.push({label:"Banish Random Card",data:"Banish random ED card 2"});
						}
					}
				}
				if (isST(player1, card)) {
					if (card.data("cardfront").data("name") == "Pot of Desires" && player1.main_arr.length >= 12) {
						menu.push({label:"Banish 10 Cards FD",data:"Banish top 10 cards FD"});
					}
					if (card.data("cardfront").data("name") == "Pot of Extravagance" && countFaceDownExtraDeckCards(player1) >= 3) {
						menu.push({label:"Banish 3 ED Cards FD",data:"Banish 3 random ED cards FD"});
					}
					if (card.data("cardfront").data("name") == "Pot of Extravagance" && countFaceDownExtraDeckCards(player1) >= 6) {
						menu.push({label:"Banish 6 ED Cards FD",data:"Banish 6 random ED cards FD"});
					}
					
					if (card.data("cardfront").data("name") == "Pot of Duality" && player1.main_arr.length >= 3) {
						menu.push({label:"Banish 3 Cards",data:"Banish top 3 cards"});
					}
					if (player1.main_arr.length > player1.opponent.main_arr.length) {
						menu.push({label:"Mill " + String(player1.main_arr.length - player1.opponent.main_arr.length),data:"Mill difference"});
					}
					if (card.data("cardfront").data("name") == "Pharaoh's Treasure") {
						menu.push({label:"To Top of Deck face-up",data:"To T Deck FU"});
					}
					if (card.data("cardfront").data("id") == 11111 && player1.main_arr.length >= 3) {
						//menu.push({label:"Resolve Effect",data:"Crescent effect"});
					}
					if (card.data("cardfront").data("name") == "Spellbook Library of the Crescent" && player1.main_arr.length >= 3) {
						menu.push({label:"Resolve Effect",data:"Crescent effect"});
					}
					if (card.data("cardfront").data("name") == "Bingo Machine, Go!!!" && player1.main_arr.length >= 3) {
						menu.push({label:"Resolve Effect",data:"Crescent effect"});
					}
					if (card.data("cardfront").data("name") == "Exchange") {
						//menu.push({label:"Resolve Effect",data:"Exchange event"});
					}
					if (card.data("cardfront").data("name") == "Goddess Skuld's Oracle" && player2.main_arr.length >= 3) {
						menu.push({label:"Look at cards",data:"Oracle event"});
					}
					if (card.data("cardfront").data("name") == "You're in Danger!" && player1.main_arr.length >= 3) {
						menu.push({label:"Resolve Effect",data:"Page-Flip effect"});
					}
					if (card.data("cardfront").data("name") == "Toon Page-Flip" && player1.main_arr.length >= 3) {
						menu.push({label:"Resolve Effect",data:"Page-Flip effect"});
					}
					if (card.data("cardfront").data("name") == "Ancient Telescope" && player2.main_arr.length >= 1) {
						menu.push({label:"Look at cards",data:"Telescope event"});
					}
					if (card.data("cardfront").data("name") == "Senri Eye") {
						menu.push({label:"Look at cards",data:"Senri event"});
					}
					if (card.data("cardfront").data("name") == "Draw of Fate") {
						menu.push({label:"Resolve Effect",data:"Fate effect"});
					}
					if (card.data("cardfront").data("name") == "Old Mind") {
						menu.push({label:"To Opponent's Hand",data:"To hand 2"});
					}
					if (card.data("cardfront").data("name") == "Transmission Gear" && moderator >= 2) {
						//menu.push({label:"Resolve Effect",data:"Play RPS"});
					}
					if (card.data("cardfront").data("name") == "Fusion Guard") {
						menu.push({label:"Resolve Effect",data:"Banish random Fusion card"});
					}
					if (card.data("cardfront").data("name") == "Upside Down" || card.data("id") == 13393) {
						menu.push({label:"Resolve Effect",data:"Upside Down effect"});
					}
				}
				if (isIn(card, player1.grave_arr) >= 0 || isMonster(player1, card)) {
					if (card.data("cardfront").data("name") == "Lilith, Lady of Lament") {
						if (player1.main_arr.length >= 3 && hasAvailableSTZones(player1)) {
							menu.push({label:"Resolve Effect",data:"Lilith effect"});
						}
					}
					if (card.data("cardfront").data("name") == "Super Quantal Fairy Alphan") {
						if (player1.main_arr.length >= 3 && hasAvailableSTZones(player1)) {
							menu.push({label:"Resolve Effect",data:"Alphan effect"});
						}
					}
					if (card.data("cardfront").data("name") == "Gizmek Orochi, the Serpentron Sky Slasher") {
						if (player1.main_arr.length >= 8) {
							menu.push({label:"Banish 8 Cards FD",data:"Banish top 8 cards FD"});
						}
					}
				}
				if (card.data("cardfront").data("name") == "Golden Castle of Stromberg" && player1.fieldSpell && card[0] == player1.fieldSpell[0] && player1.main_arr.length >= 10) {
					menu.push({label:"Banish 10 Cards FD",data:"Banish top 10 cards FD"});
				}
				if (card.data("cardfront").data("name") == "Malefic World" && player1.fieldSpell && card[0] == player1.fieldSpell[0] && player1.main_arr.length >= 3) {
					menu.push({label:"Resolve Effect",data:"Crescent effect"});
				}
				if (card.data("cardfront").data("name") == "Cynet Storm" && player1.fieldSpell && card[0] == player1.fieldSpell[0]) {
					menu.push({label:"Resolve Effect", data:"Cynet Storm"});
				}
				if (card.data("cardfront").data("name") == "Prescience" && player1.opponent.main_arr.length > 0) {
					menu.push({label:"Resolve Effect",data:"View top card 2"});
				}
			}
			if (card.data("cardfront").data("type") == "Field" && isIn(card, player1.main_arr) >= 0) {
				if (findCard(["Set Rotation"])) {
					if (player1.fieldSpell == null) {
						menu.push({label:"Set",data:"Set Field Spell"});
					}
					if (player1.opponent.fieldSpell == null) {
						menu.push({label:"Set to other side",data:"Set Field Spell 2"});
					}
				}
				if (findCard(["Dream Mirror Hypnagogia", "Valiants Vorld - Koenig Wissen", "Valiants Vorld - Shinrabansho"])) {
					if (player1.opponent.fieldSpell == null) {
						menu.push({label:"Activate to other side",data:"Activate Field Spell 2"});
					}
				}
			}
			if (card.data("cardfront").data("name") == "Small World") {
				menu.push({label:"Check Options",data:"Resolve Small World"});
			}
			menu.push({label:"To Opponent's Hand",data:"To hand 2"});
			
			if (card.data("isXyzMaterial")) {
				menu = [];
				menu.push({label:"Detach",data:"Detach"});
				menu.push({label:"Banish",data:"Banish"});
			}
			if ((viewing == "Deck (Picking 3 Cards)" || viewing == "Deck (Picking 2 Cards)" || viewing == "Deck (Picking Card)") && (isIn(card, player1.main_arr) >= 0 || isIn(card, player1.opponent.main_arr) >= 0)) {
				menu = [];
				if (player1.temp_arr.indexOf(card.data("id")) < 0) {
					menu.push({label:"Choose",data:"Choose card"});
				}
			}
			if (player1.skillCard && card[0] == player1.skillCard[0]) {
				menu = [];
				if (card.data("face_down")) {
					menu.push({label:"Activate",data:"Activate Skill"});
				}
				else {
					menu.push({label:"Set",data:"Set Skill"});
					if (card.data("cardfront").data("name") == "Millennium Necklace") {
						menu.push({label:"Look at cards",data:"Necklace event"});
					}
					if (card.data("cardfront").data("name") == "Cyberdark Style") {
						menu.push({label:"Resolve Effect",data:"Crescent effect"});
					}
				}
			}
			if (moderator >= 2 && isIn(card, player1.hand_arr) >= 0) {
				menu.push({label:"Swap",data:"Swap"});
			}
		}
	}
	
	console.log(menu)
	showMenu(card, menu);
}

window.startChooseMonsterZones = function() {
	console.log('startChooseMonsterZones');
	if (player1.m1 == null) {
		$('#m1_select').show();
		m1_select.play();
	}
	if (player1.m2 == null) {
		$('#m2_select').show();
		m2_select.play();
	}
	if (player1.m3 == null) {
		$('#m3_select').show();
		m3_select.play();
	}
	if (!duel_links && !speed && !rush) {
		if (player1.m4 == null) {
			$('#m4_select').show();
			m4_select.play();
		}
		if (player1.m5 == null) {
			$('#m5_select').show();
			m5_select.play();
		}
	}
	/*
	if(summoning_play == "SS ATK" || summoning_play == "SS DEF")
	{
		let effect = summoning_card.data("cardfront").data("effect")
		let effectV2 = effect
		
		effect = effect.replaceAll("(", "");
		effect = effect.replaceAll(")", "");
		effect = effect.replaceAll("opponent's side of the field", "opponent's field");
		effect = effect.replaceAll("to your opponent's field", "to the opponent's field");
		
		effectV2 = effectV2.replaceAll("(", "");
		effectV2 = effectV2.replaceAll(")", "");
		effectV2 = effectV2.replaceAll("opponent's side of the field", "opponent's field");
		effectV2 = effectV2.replaceAll("to your opponent's field", "to the opponent's field");

		console.log(effect);
		if (effect.indexOf("You can Special Summon this card from your hand to the opponent's field") >= 0 || effectV2.indexOf("Special Summoned from your hand to the opponent's field") >= 0)
		{
			startChooseMonsterZones2()
		}
	}
	*/
}

// Makes deck viewer lower in height to fit new menu options.
document.getElementById('view').style.top = "130px"

window.showMenu = function(card, dp) {
	if (!dp) {
		menu_reason = "Menu has no data";
		return;
	}
	dp.reverse();
	if (TweenMax.isTweening(card)) {
		menu_reason = "Card is currently tweening";
		return;
	}
	if (menu_card && menu_card[0] == card[0]) {
		menu_reason = "Card is menu_card 2";
		return;
	}
	if ($('#overlay').is(":visible")) {
		menu_reason = "overlay is visible";
		return;
	}
	if (!$('#cig1_txt').is(":visible")) {
		menu_reason = "Number of cards in GY is invisible";
		return;
	}
	if (menu_card) {
		if (getRotation(menu_card[0]) == -90 && inBounds(menu)) {
			menu_reason = "Card is rotated";
			return;
		}
		removeCardMenu();
	}
	if (isInYourHand(player1, card)) {
		card.css("top", card.data("controller").handY - 30);
		$('#blue_target').hide();
	}
	if (getScale(card[0]) < 0.2) {
		for (var i = 0; i < dp.length; i++) {
			switch (dp[i].label) {
				case "S. Summon ATK":
					dp[i].label = "SS ATK";
					break;
				case "S. Summon DEF":
					dp[i].label = "SS DEF";
					break;
				case "To Graveyard":
					dp[i].label = "To Grave";
					break;
				case "To Top of Deck":
					dp[i].label = "To T. Deck";
					break;
				case "To Bottom of Deck":
					dp[i].label = "To B. Deck";
					break;
			}
		}
	}
	menu_card = card;
	menu.find('#card_menu_content').html("");
	var scale = getScale(card[0]);
	if (scale < 0) {
		scale = -scale;
	}
	var width = 400;
	var height = 580;
	var rotation = getRotation(card[0]);
	if (rotation == 180) {
		rotation = 0;
	}
	if (rotation != 0) {
		width = 580;
		height = 400;
	}
	menu.css("width", width * scale);
	if (width * scale > 100) {
		console.log('menu is too wide');
		return;
	}
	var h = 0;
	var menu_height = 14;
	for (var i = 0; i < dp.length ;i++) {
		if (automatic && dp[i].label == "Set ST") {
			dp[i].label = "Set";
		}
		var option = $('<div class="card_menu_btn"><div class="image"><img src="' + IMAGES_START + 'svg/card_menu_btn_up.svg" /></div><span class="card_menu_txt">' + dp[i].label + '</span></div>');
		option.data("data", dp[i].data);
		option.click(cardMenuClickE);
		option.css("width", width * scale);
		option.css("height", menu_height);
		option.find('.image').css("width", width);
		if (menu.hasClass("unloaded")) {
			option.find('.image img')[0].onload = function(){
				menu.removeClass("unloaded");
			};
		}
		var optionScaleY = 0.265;
		if (rotation != 0) {
			optionScaleY = 0.18;
		}
		TweenMax.to(option.find('.image'), 0, {scaleY:optionScaleY, scaleX:scale});
		$('body').append(option);
		var num = 14;
		if (option.find('.card_menu_txt')[0].scrollHeight > 15) {
			h += option.find('.card_menu_txt')[0].scrollHeight / num * menu_height;
			option.css("height", option.find('.card_menu_txt')[0].scrollHeight / num * menu_height);
			TweenMax.to(option.find('.image'), 0, {scaleY:optionScaleY * option.find('.card_menu_txt')[0].scrollHeight / num, scaleX:scale});
		}
		else {
			h += menu_height;
			option.find('.card_menu_txt').css("white-space", "nowrap");
		}
		addButton(option);
		switch (dp[i].label) {
			case "Activate ":
			case "Flip Deck":
			case "Turn Top Card FU":
			case "Banish 10 Cards FD":
			case "Banish 3 Cards":
			case "Banish 3 ED Cards FD":
			case "Banish 6 ED Cards FD":
			case "Banish random ED Card":
			case "Banish random ED Card FD":
			case "To Top of Deck face-up":
			case "To Opponent's Deck":
			case "Face-Down":
			case "Mill difference":
			case "Activate to other side":
			case "Set to your side":
			case "Set to other side":
			case "Resolve Effect":
			case "Look at cards":
			case "Set to Monster Zone":
			case "Draw Spell/Trap":
			case "Draw Spellcaster":
			case "Choose":
			case "Banish ED Card FD":
			case "To Opponent's Hand":
			case "Look at opponent cards":
			case "Card of Fate Effect":
			case "Banish Random Card":
			case "Banish 8 Cards FD":
			case "Stay Revealed":
			case "Stop Revealing":
			case "Check Small World":
			case "Check Options":
				option.find('img').attr("src", IMAGES_START + "svg/card_menu_btn_up2.svg");
				break;
		}
		if (dp[i].label.indexOf("Mill ") >= 0) {
			option.find('img').attr("src", IMAGES_START + "svg/card_menu_btn_up2.svg");
		}
		menu.find('#card_menu_content').append(option);
	}
	$('#viewing').append(menu);
	
	
	
	
	
	menu.css("height", h);
	var left = parseInt(card.css("left")) - scale * width / 2;
	var top = parseInt(card.css("top")) - height * scale / 2 - h;
	if (menu_card.parent()[0] == $('#view > .content')[0]) {
		top += 130 + 32 - $('#view > .content').scrollTop();
		left += 219 + 5;
	}
	var startY = top + menu[0].scrollHeight;
	if (menu[0].scrollHeight > parseInt(card.css("height")) * scale) {
		startY = top + parseInt(card.css("height")) * scale;
	}
	//menu.css("top", top);
	menu.css("top", top + 1); // helps prevent unwanted menuOutE events
	menu.data("top", top + 1);
	menu.css("left", left);
	TweenMax.set(menu, {"scaleY":1});
	//TweenMax.set(menu, {"scaleY":isMonster(player1, menu_card) ? 2 : 2.5});
	TweenMax.fromTo(menu.find('#card_menu_content'), 0.03 * dp.length, {"top":h}, {"top":0, ease:Linear.easeNone, onComplete:function(){
		var scaleY = 1;
		if (menu[0].getBoundingClientRect().y < -marginTop) {
			scaleY = (menu[0].scrollHeight + menu[0].getBoundingClientRect().y) / menu[0].scrollHeight;
			menu.css("top", top - menu[0].getBoundingClientRect().y);
			TweenMax.set(menu, {"scaleY":scaleY});
		}
	}});
	
	/*if (mobile) {
		var sel = $('<select></select>');
		for (var i = 0; i < dp.length ;i++) {
			sel.append('<option>' + dp[i].label + '</option>');
		}
		sel.insertAfter(menu);
	}*/
}


window.duelResponse = function(data) {
	
		//duelActions++;
		//saveGamestate(duelActions);



	if (SOFT_PLAYS.indexOf(data.play) < 0) {
		$('.red_target').hide();
		$('.blue_target').hide();
		$('.green_target').hide();
	}
	var player;
	if (data.username == player1.username) {
		player = player1;
	}
	else if (data.username == player2.username) {
		player = player2;
	}
	else if (tag_duel && data.username == player3.username) {
		player = player3;
	}
	else if (tag_duel && data.username == player4.username) {
		player = player4;
	}
	if (actionsQueue.length > 0) {
		//console.log("actionsQueue.length = " + actionsQueue.length);
		for (var i = 0; i < actionsQueue.length; i++) {
			//console.log("actionsQueue[i] = " + actionsQueue[i]);
		}
	}
	
	if (data.owner && data.id) {
		actionsQueue.push(function(){
			//updateOwner(getPlayer(data.owner), getDuelCard(data.id));
			updateOwner(getCurrentOwner(data.owner), getDuelCard(data.id)); // the owner is always the active_player on a team
			endAction();
		});
	}
	
	console.log(data.play);
	switch (data.play) {
		case "Rejoin duel":
			rejoinDuel(player, data);
			break;
		case "Add watcher":
			addWatcher(data);
			break;
		case "Remove watcher":
			removeWatcher(data);
			enableAdminE();
			break;
		case "Watcher message":
			watchChatPrint(data);
			break;
		case "Siding":
			initSiding(data);
			addLine(escapeHTML(data.message));
			break;
		case "Siding with cards":
			initSiding(data);
			addLine(escapeHTML(data.message));
			createSidingHoles(data);
			initSideCardFromData(data);
			break;
		case "Begin next duel":
			beginNextDuel(data);
			break;
		case "Back to RPS":
			exitRPS();
			exitTP();
			exitDueling();
			exitSiding();
			duel_active = true;
			if (duelist) {
				updateActive(true);
			}
			else {
				$('#draw_btn').hide();
					$('#mulligan_btn').hide();
			}
			initRPSStart();
			gameLossSound = getGameLossSound();
			gameWinSound = getGameWinSound();
			if (switched) {
				if (tag_duel) {
					switchDuelists(data, "player1", "player2", "player3", "player4");
				}
				else {
					switchDuelists(data, "player1", "player2");
				}
			}
			else if (tag_duel && data.player3.username == username) {
				switchDuelists(data, "player1", "player3");
			}
			deckData = data;
			if (data.starting) {
				if (match_type == "m") {
					addLine("Starting new match");
				}
				else if (match_type == "n") {
					addLine("Starting new single");
				}
			}
			$('#draw_btn').val("Offer Draw");
			initSleeves();
			$('.all_good').hide();
			break;
		case "Admit defeat":
			hideDim();
			admittedDefeat(player, data);
			break;
		case "Left duel":
			leftDuel(player, data);
			break;
		case "Quit duel":
			quitDuel(player, data);
			break;
		case "Game loss":
		case "Match loss":
			gamelossed(player, data);
			break;
		case "Loss":
			loss(player, data);
			break;
		case "Cancel game":
			gameCanceled(data);
			break;
		case "Frozen":
			if (data.targeted_username) {
				addLine(data.targeted_username + " has been frozen");
			}
			else {
				addLine(data.username + " has been frozen");
			}
			break;
		case "Beginner":
			if (data.targeted_username) {
				addLine(data.targeted_username + " has been set as a beginner");
			}
			else {
				addLine(data.username + " has been set as a beginner");
			}
			break;
		case "RPS":
			determineWinner(data);
			break;
		case "Typing":
			typingE(player);
			break;
		case "Duel message":
			duelChatPrint(data);
			if (player) {
				player.stopTyping();
			}
			if (duelist && data.username == username) {
				duelChatTimerE();
			}
			break;
		case "Reset deck":
		case "Swap cards":
			hideDim();
			$('#reset_btn').disable(false);
			updateSideCards(data);
			checkSidingCards();
			break;
		case "Pause game":
			pauseGame(player, data);
			break;
		case "Resume game":
			resumeGame(data);
			break;
		case "Reset game":
			actionsQueue.push(function(){
				resetGame(player, data);
			});
			break;
		case "Call admin":
			addLine(escapeHTML(player.username) + " has called a judge");
			$('#call_admin_btn').disable(true);
			awaiting_admin = true;
			if (duelist && player.username == username) {
				$('#call_admin_btn').disable(false);
				$('#call_admin_btn').val("Cancel Call");
			}
			break;
		case "Cancel call":
			addLine(escapeHTML(player.username) + " cancelled the call");
			awaiting_admin = false;
			if (duelist) {
				$('#call_admin_btn').disable(false);
				$('#call_admin_btn').val("Call Judge");
			}
			break;
		case "Offer draw":
			addLine(escapeHTML(player.username) + " has made a draw offer");
			if (isPlayer2(player.username)) {
				$('#draw_btn').val("Accept Draw");
				return;
			}
			$('#draw_btn').val("Revoke Draw");
			break;
		case "Revoke draw":
			addLine(escapeHTML(player.username) + " has revoked the draw offer");
			$('#draw_btn').val("Offer Draw");
			break;
		case "Accept draw":
			acceptDraw(player, data);
			break;
		case "Offer rematch":
			addLine(escapeHTML(player.username) + " offered a rematch");
			if (isPlayer2(player.username)) {
				$('#rematch_btn').val("Accept Rematch");
				return;
			}
			$('#rematch_btn').val("Revoke Rematch");
			break;
		case "Revoke rematch":
			addLine(escapeHTML(player.username) + " has revoked the rematch offer");
			$('#rematch_btn').val("Offer Rematch");
			break;
		case "Accept rematch":
			used_allotted_rematch = 1;
			$('#rematch_btn').val("Offer Rematch");
			break;
		case "Done siding":
			if (!duelist && player == Player1()) {
				$('#done_siding1').show();
			}
			else if (duelist && player.username == username) {
				clearHoles();
				$('#done_siding_btn').hide();
				$('#done_siding1').show();
			}
			else if (player == Player2()) {
				$('#done_siding2').show();
			}
			break;
		case "Pick first":
			pickFirstResponse(data);
			break;
		case "Target card":
			actionsQueue.push(function(){
				targetCardResponse(player, data); // when not using actionsQueue, it messed up replays
			});
			break;
			break;
		case "Stop viewing":
			stopViewing(data);
			break;
		case "Shuffle deck":
			actionsQueue.push(function(){
				shuffleDeck(player, data);
			});
			break;
		case "Shuffle hand":
			actionsQueue.push(function(){
				shuffleHand2(player, data);
			});
			break;
		case "Permission event":
			permissionEvent(data);
			break;
		case "Permission granted":
			removePermission();
			break;
		case "Permission denied":
			addLine(escapeHTML(data.username) + " denied permission");
			if (isPlayer1(data.username)) {
				if ($('#status1 .status_txt').text() == "Waiting for permission") {
					$('#status1 .status_txt').text("");
				}
			}
			else if (isPlayer2(data.username)) {
				if ($('#status2 .status_txt').text() == "Waiting for permission") {
					$('#status2 .status_txt').text("");
				}
			}
			break;
		case "Start turn":
			actionsQueue.push(function(){
				turn_player = getPlayer(data.username);
				startTurn();
			});
			break;
		case "Enter DP":
			actionsQueue.push(function(){
				enterDP();
			});
			break;
		case "Enter SP":
			actionsQueue.push(function(){
				enterSP();
			});
			break;
		case "Enter M1":
			actionsQueue.push(function(){
				enterM1();
			});
			break;
		case "Enter BP":
			actionsQueue.push(function(){
				enterBP();
			});
			break;
		case "Enter M2":
			actionsQueue.push(function(){
				enterM2();
			});
			break;
		case "Enter EP":
			actionsQueue.push(function(){
				enterEP();
			});
			break;
		case "End turn":
			actionsQueue.push(function(){
				endTurn(data);
			});
			break;
		case "Add counter":
			actionsQueue.push(function(){
				addCounter(player, data);
			});
			break;
		case "Remove counter":
			actionsQueue.push(function(){
				removeCounter(player, data);
			});
			break;
		case "Die":
			actionsQueue.push(function(){
				dieRoll(player, data);
			});
			break;
		case "Coin":
			actionsQueue.push(function(){
				coinFlip(player, data);
			});
			break;
		case "Life points":
			actionsQueue.push(function(){
				updateLifePoints(player, data);
			});
			break;
		case "View deck":
			if (duelist && player.username == username) {
				if (seen_deck == false) {
					//seen_deck = true;
					viewingE(data.viewing, data);
				}
			}
			showViewing(data);
			break;
		case "View GY":
		case "View GY 2":
		case "View Banished":
		case "View Banished 2":
		case "View ED 2":
		case "View Graveyard":
		case "View Extra Deck":
		case "View Opponent's Banished":
		case "View Opponent's Graveyard":
		case "View Opponent's Public Extra Deck":
			showViewing(data);
			break;
		case "View ED":
			if (duelist && player.username == username) {
				if (seen_extra == false) {
					seen_extra = true;
					viewingE("Extra Deck", data);
				}
			}
			showViewing(data);
			break;
		case "Show deck":
		case "Show hand":
		case "Show ED":
		case "Show Extra Deck":
			actionsQueue.push(function(){
				showE(data.viewing, data);
			});
			break;
		case "Reveal":
		case "Reveal card from hand":
		case "Reveal card from deck":
		case "Reveal from Extra":
			actionsQueue.push(function(){
				reveal(player, data);
			});
			break;
		case "Move":
			actionsQueue.push(function(){
				move(player, data);
			});
			break;
		case "Overlay":
			actionsQueue.push(function(){
				overlay(player, data);
			});
			break;
		case "Detach":
			actionsQueue.push(function(){
				detach(player, data);
			});
			break;
		case "Attack":
			actionsQueue.push(function(){
				attack(player, data);
			});
			break;
		case "Attack directly":
			actionsQueue.push(function(){
				attackDirectly(player, data);
			});
			break;
		case "Draw card":
			actionsQueue.push(function(){
				drawCard(player, data);
			});
			break;
		case "To hand":
		case "To hand 2":
		case "To hand from deck":
		case "To hand from field":
		case "To hand from grave":
		case "To hand from Extra":
		case "To hand from banished":
			actionsQueue.push(function(){
				toHand(player, data);
			});
			break;
		case "To B Deck":
		case "To B Deck 2":
		case "To T Deck":
		case "To T Deck 2":
		case "To T Deck FU":
		case "To T Deck 2 FU": // Parasite Paracide
			actionsQueue.push(function(){
				toDeck(player, data);
			});
			break;
		case "To GY":
		case "To grave from deck":
		case "To grave from field":
		case "To grave from hand":
		case "To Grave from Extra":
		case "To grave from banished":
		case "To grave from opponent's banished":
			actionsQueue.push(function(){
				toGY(player, data);
			});
			break;
		case "Mill":
			actionsQueue.push(function(){
				mill(player, data);
			});
			break;
		case "Banish":
		case "Banish FD":
		case "Banish from deck":
		case "Banish top card of deck":
		case "Banish top card of deck FD":
		case "Banish FD from deck":
		case "Banish from field":
		case "Banish from field FD":
		case "Banish from hand":
		case "Banish from hand FD":
		case "Banish Xyz Material":
		case "Banish from Extra":
		case "Banish from Extra FD":
		case "Banish from grave":
		case "Banish from grave FD":
		case "Banish from opponent's grave":
			actionsQueue.push(function(){
				banish(player, data);
			});
			break;
		case "To ED":
		case "To ED FU":
		case "To Extra from field":
		case "To Extra FU from field":
		case "To Extra from grave":
		case "To Extra FU from grave":
		case "To Extra from banished":
		case "To Extra FU from banished":
			actionsQueue.push(function(){
				toED(player, data);
			});
			break;
		case "Normal Summon":
			actionsQueue.push(function(){
				normalSummon(player, data);
			});
			break;
		case "SS ATK":
		case "SS DEF":
		case "SS ATK from hand":
		case "SS ATK from deck":
		case "SS ATK from Extra":
		case "SS ATK from grave":
		case "SS ATK from banished":
		case "SS ATK from opponent's grave":
		case "SS ATK from opponent's banished":
		case "SS DEF from hand":
		case "SS DEF from deck":
		case "SS DEF from Extra":
		case "SS DEF from grave":
		case "SS DEF from banished":
		case "SS DEF from opponent's grave":
		case "SS DEF from opponent's banished":
				actionsQueue.push(function(){
					specialSummon(player, data);
				});
			break;
		case "OL ATK":
		case "OL DEF":
		case "OL ATK from Extra":
		case "OL DEF from Extra":
			actionsQueue.push(function(){
				olSummon(player, data);
			});
			break;
		case "Summon token":
		case "Summon Token":
			actionsQueue.push(function(){
				summonToken(player, data);
			});
			break;
		case "Remove Token":
			actionsQueue.push(function(){
				removeToken(player, data);
			});
			break;
		case "Flip":
		case "Flip monster":
			actionsQueue.push(function(){
				flip(player, data);
			});
			break;
		case "Flip Summon":
			actionsQueue.push(function(){
				flipSummon(player, data);
			});
			break;
		case "To ATK":
			actionsQueue.push(function(){
				toATK(player, data);
			});
			break;
		case "To DEF":
			actionsQueue.push(function(){
				toDEF(player, data);
			});
			break;
		case "Activate ST":
		case "Activate Spell":
		case "Activate Spell from hand":
			actionsQueue.push(function(){
				activateST(player, data);
			});
			break;
		case "To ST":
		case "To ST from deck":
		case "To ST from hand":
		case "To ST from grave":
			actionsQueue.push(function(){
				toST(player, data);
			});
			break;
		case "Set monster":
		case "Set monster from hand":
			actionsQueue.push(function(){
				setMonster(player, data);
			});
			break;
		case "Set ST":
		case "Set ST from deck":
		case "Set ST from hand":
		case "Set monster to ST from hand":
			actionsQueue.push(function(){
				setST(player, data);
			});
			break;
		case "Activate Field Spell":
		case "Activate Field Spell from hand":
			actionsQueue.push(function(){
				activateFieldSpell(player, data);
			});
			break;
		case "Activate Field Spell 2":
			actionsQueue.push(function(){
				activateFieldSpell2(player, data);
			});
			break;
		case "Set Field Spell":
		case "Set Field Spell from hand":
		case "Set Field Spell from deck":
			actionsQueue.push(function(){
				setFieldSpell(player, data);
			});
			break;
		case "Set Field Spell 2": // Set Rotation
		case "Set Field Spell from deck to opponent's field":
			actionsQueue.push(function(){
				setFieldSpell2(player, data);
			});
			break;
		case "Activate Pendulum Left":
		case "Activate Pendulum Left from field":
		case "Activate Pendulum Left from hand":
			actionsQueue.push(function(){
				activatePendulumLeft(player, data);
			});
			break;
		case "Activate Pendulum Right":
		case "Activate Pendulum Right from field":
		case "Activate Pendulum Right from hand":
			actionsQueue.push(function(){
				activatePendulumRight(player, data);
			});
			break;
		case "Activate Skill":
			actionsQueue.push(function(){
				activateSkill(player, data);
			});
			break;
		case "Set Skill":
			actionsQueue.push(function(){
				setSkill(player, data);
			});
			break;
		case "Change control":
			actionsQueue.push(function(){
				changeControl(player, data);
			});
			break;
		case "Add random card from deck to hand": // Crescent effect
			actionsQueue.push(function(){
				addRandomCardFromDeckToHand(player, data);
			});
			break;
		case "Turn top card face-up": // Grave Lure
		case "Turn top card of deck face-up":
			actionsQueue.push(function(){
				turnTopCardOfDeckFU(player, data);
			});
			break;
		case "Flip deck": // Convulsion of Nature
		case "Flip deck back":
			actionsQueue.push(function(){
				flipDeck(player, data);
			});
			break;
		case "Pick 2 cards": // Hi-Speedroid Rubber Band Shooter
		case "Pick 3 cards": // Spellbook Library of the Crescent, Power Tool Dragon, Lilith, Lady of Lament
			if (duelist && player.username == username) {
				viewingE(data.viewing, data);
				next_callback = data.callback; // moved here from below
			}
			showViewing(data);
			break;
		case "Cynet Storm": // Cynet Storm
			actionsQueue.push(function(){
				cynetStorm(player, data);
			});
			break;
		case "Exchange cards": // Exchange
			actionsQueue.push(function(){
				exchangeCards(player, data);
			});
			break;
		case "Attach top card from Deck 2": // Time Thief Redoer
			actionsQueue.push(function(){
				attachTopCardFromDeck2(player, data);
			});
			break;
		case "Swap":
			swap(player, data);
			return;
		case "New card":
			actionsQueue.push(function(){
				newCard(player, data);
			});
			break;
		case "Initialize cards":
			initalizeCards(player, data);
			break;
			
		// DEPRACATED PLAYS
		case "Flip decks":
			actionsQueue.push(function(){
				flipDecks(player, data);
			});
			break;
		case "Flip decks back":
			actionsQueue.push(function(){
				flipDecksBack(player, data);
			});
			break;
		case "Turn face-down":
			actionsQueue.push(function(){
				turnFaceDown(player, data);
			});
			break;
		case "Add proxy":
			actionsQueue.push(function(){
				addProxy(player, data);
			});
			break;
		case "Declare":
			actionsQueue.push(function(){
				declare(player, data);
			});
			break;
		case "Stay revealed":
			actionsQueue.push(function(){
				stayRevealed(player, data);
			});
			break;
		case "Stop revealing":
			actionsQueue.push(function(){
				stopRevealing(player, data);
			});
			break;
		case "Good":
			actionsQueue.push(function(){
				allGood(player, data);
			});
			break;
		case "Stop good":
			actionsQueue.push(function(){
				stopGood(player, data);
			});
			break;
		case "Thinking":
			//actionsQueue.push(function(){
				thinking(player, data);
				typingE(player);
			//});
			break;
		case "Countdown":
			//actionsQueue.push(function(){
				updateCountdown(player, data);
			//});
			break;
		case "Message":
			//addLine(data.line);
			break;
	}
	if (data.line) {
		addLine(escapeHTML(data.line));
	}
	//if (duelist) {
		if (data.log) {
			if (data.log instanceof Array) {
				for (i = 0; i < data.log.length; i++) {
					data.log[i].seconds = data.seconds;
				}
			}
			else {
				data.log.seconds = data.seconds;
			}
			duelLogPrint(data.log);
		}
	//}
	performNextAction();
}

// Doesn't work, maybe only doesn't work in solo?

window.showExtraDeckMenu = function() 
{
	if (viewing != null && viewing != "")
	{
		viewingE(viewing);
		return;
	}
	if (player1.extra_arr.length == 0)
	{
		return;
	}
	if (!Duelist())
	{
		return;
	}
	
	var menu = [];
	menu.push({label:"View",data:"View ED"});
	if (!solo && !automatic)
	{
		menu.push({label:"Show",data:"Show ED"});
	}
	
	if (findCard(["Banquet of Millions"]) && countFaceDownExtraDeckCards(player1) >= 1)
		menu.push({label:"Banish random",data:"Banish random ED card"});
		
	if (countFaceDownExtraDeckCards(player1) >= 1)
		menu.push({label:"Banish random FD",data:"Banish random ED card FD"});

	showMenu(player1.extra_arr[0], menu);
}

window.isPendulumAttacker = function(card)
{
	let effect = card.data("cardfront").data("pendulum_effect")
	effect = effect.replaceAll("from your ", "")
	effect = effect.replaceAll("while in your ", "")
	
	console.log(effect)
	
	if(effect.search(/This card can attack Pendulum Zone/i) != -1)
		return true;
	
	return false;
}

window.isEitherTurnAttacker = function(card)
{
	if(isMonster(player1, card) && card.data("cardfront").data("effect").search(/This card can attack during your opponent's battle phase/i) != -1)
		return true;
	
	else if(isST(player1, card) && isPendulumAttacker(card))
		return true;
	
	return false;
}