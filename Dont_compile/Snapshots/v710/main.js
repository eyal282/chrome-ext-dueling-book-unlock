"use strict";

var BLAH = false;

var fragment = $(document.createDocumentFragment());
var private_chat_cycle = loadSVGAnimation(private_chat_cycle, "private_chat_cycle", "chat_cycle", 200, 404, 24);
var public_chat_cycle = new MovieClip();
var watch_chat_cycle = new MovieClip();
var log_cycle = new MovieClip();
var m1_select = loadSVGAnimation(m1_select, "m1_select", "zone_select", 93, 93, 24);
var m2_select = new MovieClip();
var m3_select = new MovieClip();
var m4_select = new MovieClip();
var m5_select = new MovieClip();

var m1_select2 = new MovieClip();
var m2_select2 = new MovieClip();
var m3_select2 = new MovieClip();
var m4_select2 = new MovieClip();
var m5_select2 = new MovieClip();

var s1_select = new MovieClip();
var s2_select = new MovieClip();
var s3_select = new MovieClip();
var s4_select = new MovieClip();
var s5_select = new MovieClip();

var field_spell1_select = loadSVGAnimation(field_spell1_select, "field_spell1_select", "zone_select2", 93, 93, 24);
var field_spell2_select = new MovieClip();

var link_left_select = new MovieClip();
var link_right_select = new MovieClip();
bubbles1 = loadSVGAnimation(bubbles1, "bubbles1", "bubbles", 500, 20, 24);

var ChatInbound = 'sounds/ChatInbound.mp3';
var ChatOutbound = 'sounds/ChatOutbound.mp3';
var IntroSong = 'sounds/theme_park_short.mp3';

var Cards = [];
//var HOSTNAME = 'ws://127.0.0.1:8443/';
var HOSTNAME = 'wss://duel.duelingbook.com:8443/';
if (window.location.href.indexOf("cf_websocket") >= 0) {
	HOSTNAME = 'wss://www.duelingbook.com:8443/';
}
if (GET("host")) {
	HOSTNAME = 'wss://' + GET("host") + ':8443/';
}

var ac_txt;
var action;
var actions_data;
var activated = true;
var add_adjudicator = $('#add_adjudicator');
var admin_actions = ["", "Add warning", "Answer call", "Cancel game", "Comp check", "Delete comment", "Delete status", "Duel records", "Edit history", "Freeze user", "Game loss", "Get ban status", "Get log", "Get screenshot", "Hide ban note", "Hide message", "Hide messages", "IP check", "Kick user", "Mute user", "Remove custom image", "Remove customs", "Remove image", "Reset stats", "Reverse loss", "Set admin", "Set beginner", "Set ignored", "Set NSFW", "Super ban", "Unban user", "Unmute user", "Unset beginner", "Unset ignored", "Watch duel"];
var admin_username = "";
var administrate = false;
var agreed_to_terms = true;
var allCards = [];
//var all_comments_arr;
var all_friends_arr = [];
var all_status_arr = [];
var already_sent_friend_requests_arr = [];
var alt_username;
var always_play_profile_song = 0;
var announcement_arr = [];
var arFilter;
var attacking_card;
var auFilter;
var auto_close_notifications = 0;
var auto_load_messages = 0;
//var avatar_images_arr = [122, 144, 5918, 6367, 430, 5875, 513, 6127, 559, 5668, 7669, 687, 7188, 856, 863, 6836, 1002, 1004, 1050, 1155, 1218, 1271, 1306, 6535, 1408, 6281, 5112, 1496, 5757, 1621, 1729, 1788, 7892, 1887, 1970, 2356, 2230, 2260, 5214, 2324, 2333, 2352, 2518, 5167, 2583, 2648, 5456, 2738, 2788, 5784, 6304, 2929, 2966, 3176, 3514, 5047, 3560, 3811, 3822, 4032]; // 2017
//var avatar_images_arr = [77, 226, 293, 303, 5661, 6540, 675, 808, 826, 4929, 1075, 1079, 1393, 1363, 1510, 1874, 7414, 1763, 7175, 1896, 2095, 2127, 5215, 2319, 2368, 2492, 4228, 2632, 2699, 3035, 7229, 3127, 3200, 3276, 7590, 3904, 4251, 4397, 4432, 2715, 4840, 8369, 513, 842, 1001, 4094, 4945, 3540, 158, 886, 1138, 1374, 3466, 4885, 85, 145, 214, 5097, 5096, 5095, 144, 430, 437, 3360, 3506, 4032, 8831, 7188, 7232, 5022, 6786, 8217, 8056, 8653, 5875, 5873, 5876, 5874, 424, 668, 4932, 1051, 2698, 6457, 8937, 8092, 8766, 8365, 7114, 8343, 512, 8560, 1604, 5920, 4476, 4959, 6013, 6011, 6012, 240, 1247, 5288]; // 2018
/*var avatar_images_arr = [
	// free
	9639, // Danger!? Tsuchinoko?
	4389, // Tiger Axe
	4923, // Cyber Dragon
	7498, // Toon Barrel Dragon
	10519, // Reeshaddoll Wendi
	10952, // Number C1: Numeron Chaos Gate Sunya
	8631, // World Chalice Guardragon
	10371, // Linguriboh
	10091, // Red Blossoms from Underroot
	10397, // Sky Striker Ace - Roze
	4457, // Treeborn Frog
	11710, // SolSolfachord Gracia
	618, // Card Trooper
	10816, // Infernoble Knight Ogier
	1985, // Gravekeeper's Commandant
	825, // Crystal Beast Ruby Carbuncle
	10596, // Ghost Mourner & Moonlit Chill
	8272, // SPYRAL Quik-Fix
	9775, // Salamangreat Gazelle
	7085, // Jet Synchron
	11054, // Virtual World Mai-Hime - Lulu
	8747, // Number 41: Bagooska the Terribly Tired Tapir
	5730, // Mermail Abysstrite
	3505, // Red Archery Girl
	10808, // Dogmatika Ecclesia, the Virtuous
	10608, // Splash Mage
	5869, // Madolche Hootcake
	4432, // Tour Guide From the Underworld
	5298, // White Dragon Ninja
	10344, // Dimension Shifter
	8927, // Subterror Guru
	10851, // Ancient Warriors Oath - Double Dragon Lords
	5765, // Harpie Channeler
	10339, // Brotherhood of the Fire Fist - Peacock
	4647, // Volcanic Rocket
	9285, // Crusadia Reclusia
	9220, // Vampire Fraulein
	2935, // Mobius the Frost Monarch
	9573, // Prank-Kids Dropsies
	9667, // Prank-Kids Rocksies
	9571, // Prank-Kids Fansies
	9572, // Prank-Kids Lampsies 
	
	// 25
	2551, // Legendary Six Samurai - Shi En
	9083, // Aleister the Invoker of Madness
	9915, // Time Thief Redoer
	8368, // Zoodiac Tigermortar
	9737, // Garden Rose Maiden
	4375, // Thousand-Eyes Restrict
	
	// 50
	7306, // Red-Eyes Flare Metal Dragon
	8216, // Sauravis, the Ancient and Ascended
	7140, // Dark Magician
	7946, // Blue-Eyes White Dragon
	4930, // Dark Magician Girl
	9080, // Cherubini, Ebon Angel of the Burning Abyss
	
	// 100
	6945, // Nekroz of Valkyrus
	6623, // Elder Entity Norden
	670, // Chaos Goddess
	8787, // Tri-Gate Wizard
	11516, // Amazement Administrator Arlekino
	5443, // High Priestess of Prophecy
	
	// 200
	5337, // Hieratic Sun Dragon Overlord of Heliopolis
	4191, // T.G. Hyper Librarian
	10243, // I:P Masquerena
	9508, // Galatea, the Orcust Automaton
	10694, // Eldlich the Golden Lord
	8488, // Majesty Maiden, the True Dracocaster
	
	// 300
	10926, // The Chaos Creator
	9490, // Chaos Dragon Levianeer
	9436, // Blackwing Full Armor Master
	8574, // Ultimate Conductor Tyranno
	7999, // Block Dragon
	9171, // Knightmare Unicorn
	
	// 500
	11153, // Evil★Twin Ki-sikil
	11154, // Evil★Twin Lil-la
	10425, // Aussa the Earth Charmer, Immovable
	9701, // Hiita the Fire Charmer, Ablaze
	10615, // Eria the Water Charmer, Gentle
	10056, // Wynn the Wind Charmer, Verdant
	
	// 1000
	9863, // Ib the World Chalice Justiciar
	2583, // Light and Darkness Dragon
	10654, // Diviner of the Herald
	10416, // Megalith Bethor
	10505, // Selene, Queen of the Master Magicians
	7696, // Buster Blader, the Dragon Destroyer Swordsman
	
	// 2000
	4476, // Trishula, Dragon of the Ice Barrier
	1004, // Dark Magician of Chaos
	3471, // Rainbow Neos
	8460, // Astrograph Sorcerer
	11092, // Tri-Brigade Shuraig the Ominous Omen
	10054, // Shaman of the Tenyi
	
	// 3000
	4579, // Uria, Lord of Searing Flames
	2080, // Hamon, Lord of Striking Thunder
	3486, // Raviel, Lord of Phantasms
	10058, // Apollousa, Bow of the Goddess
	9501, // Thunder Dragon Colossus
	10239, // Unchained Abomination
	
	// 5000
	8514, // True King of All Calamities
	11089, // Divine Arsenal AA-ZEUS - Sky Thunder
	6173, // Black Luster Soldier - Envoy of the Evening Twilight
	7791, // The Legendary Exodia Incarnate
	10523, // Red-Eyes Dark Dragoon
	10606, // Accesscode Talker
	
	// 10000
	10843, // The First Darklord
	10592, // Trias Hierarchia
	10377 // Ten Thousand Dragon
]; // 2020*/
//var avatar_images_arr = [12277, 1301, 8421, 12277, 6836, 12068, 9942, 6603, 3276, 9915, 10654, 8369, 8978, 13670, 5047, 7892, 12298, 5571, 11141, 9512, 10584, 7011, 6125, 5550, 1360, 2045, 5550, 12880, 4878, 230, 5438, 3324, 2324, 11093, 9546, 12802, 4413, 3877, 11922, 11761, 6040, 1477, 13596, 5243, 13321, 8923, 9985, 5124, 12678, 424, 5784, 5632, 13010, 10522, 6942, 952, 12108, 6462, 5576, 1956, 13352, 10503, 13326, 10676, 1004, 12073, 3065, 13686, 9081, 7335, 8750, 7425, 13626, 12102, 13504, 7033, 423, 11543, 10007, 11545, 13100, 7506, 5771, 13355, 9682, 11144, 12690, 10845, 7421, 2333, 1325, 3471, 4476, 9501, 7302, 10568, 10606, 10523, 8514, 6573, 11327, 9420, 8148, 11222, 7949, 4579, 2080, 3486, 9811, 7791, 9059, 10843, 1247, 8492, 13459, 10296, 12683, 10377, 5288, 11079]; // 2023 (not used)
//var avatar_images_arr = [12277, 1301, 8421, 12277, 12068, 9942, 6603, 8978, 13670, 12298, 5571, 11141, 9512, 10584, 7011, 6125, 5550, 1360, 2045, 5550, 12880, 4878, 230, 5438, 3324, 11093, 9546, 12802, 4413, 3877, 11922, 11761, 6040, 1477, 13596, 5243, 13321, 8923, 9985, 5124, 12678, 5632, 13010, 10522, 6942, 952, 12108, 6462, 5576, 1956, 13352, 10503, 13326, 10676, 12073, 3065, 13686, 9081, 7335, 8750, 7425, 13626, 12102, 13504, 7033, 423, 11543, 10007, 11545, 13100, 7506, 5771, 13355, 9682, 11144, 12690, 10845, 7421, 1325, 7302, 10568, 6573, 11327, 9420, 8148, 11222, 7949, 9811, 9059, 8492, 13459, 10296, 12683, 11079]; (2023 not used no duplicates)

/*var avatar_images_arr = [11421, 9138, 9097, 10511, 6750, 5185, 11914, 2829, 4087, 1408, 5765, 4902, 11393, 6040, 11761, 11922, 4413, 4878, 12880, 7011, 9512, 9985, 5571, 12298, 7892, 5047, 13670, 8978, 8369, 10654, 9915, 3276, 9942, 8421, 12277, 13010, 6836, 8923, 7425, 13339, 13845, 13864,
13321, 2324, 12802, 13481, 13492, 3201,
1000, 513, 3514, 10149, 8772, 158, 
10689, 6634, 8746, 4885, 1138, 9680, 
1004, 1956, 13686, 10676, 5632, 10522,
12073, 10503, 8461, 6786, 12647, 13353, 
9081, 424, 13352, 12857, 12108, 13857, 
952, 11543, 12289, 7335, 9507, 10533, 
10007, 11545, 13100, 7506, 5771, 13355, 
11144, 13626, 7232, 7900, 7900, 11327, 
7809, 8217, 7901, 12629, 13876, 13619, 
10845, 12690, 2333, 12678, 8750, 12102, 
3065, 13620, 9682, 10568, 12038, 9742, 
4476, 7302, 11283, 13117, 11893, 12992, 
1325, 1320, 1319, 9501, 6573, 7421, 


13881, 9059, 9420, 10606, 1247, 13842, 
8148, 11222, 7949, 4579, 2080, 3486, 
9811, 7985, 8514, 10843, 13633, 12280, 
13459, 10296, 12683, 13592, 10610, 7791, 
10377, 5288, 11079
];*/


// 5576, 2923, 7033
var avatar_images_arr = [5438, 4137, 2126, 3324, 12078, 5613, 12571, 230, 11093, 6836, 10584, 11421, 9138, 9097, 10511, 6750, 5185, 11914, 2829, 13339, 4902, 11393, 6040, 11761, 11922, 4413, 4878, 12880, 7011, 9512, 9985, 5571, 12298, 13670, 8978, 9942, 8421, 12277, 13010, 8923, 9546, 7587, 13864, 13319, 12802, 13481, 13492, 3201, 6125, 8940, 13398, 1360, 10149, 8772, 13845, 12068, 10689, 6634, 8746, 9680, 13596, 1956, 13686, 10676, 5632, 6535, 1477, 13364, 10503, 8461, 12647, 13353, 5124, 9081, 13352, 12857, 12108, 13857, 952, 11543, 12289, 7335, 9507, 10533, 10007, 11545, 13100, 7506, 5771, 13355, 5243, 11144, 13626, 7900, 6462, 11327, 7809, 7901, 4476, 13876, 13619, 10845, 12690, 12678, 8750, 12102, 3065, 13620, 9682, 10568, 12038, 9742, 7302, 11283, 13117, 11893, 12992, 1325, 1320, 1319, 6573, 7421, 13881, 9059, 9420, 13842, 8148, 11222, 7949, 9811, 10843, 13633, 12280, 13459, 10296, 12683, 13592, 10610, 423, 1247, 6942, 10377, 5288, 11079];

//var avatar_wins_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75, 100, 100, 100, 100, 100, 100, 250, 250, 250, 250, 250, 250, 500, 500, 500, 500, 500, 500, 750, 750, 750, 750, 750, 750, 1000, 1000, 1000, 1000, 1000, 1000, 2000, 2000, 2000, 2000, 2000, 2000, 3000, 3000, 3000, 3000, 3000, 3000]; // 2018
//var avatar_wins_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 50, 50, 50, 50, 50, 50, 100, 100, 100, 100, 100, 100, 250, 250, 250, 250, 250, 250, 500, 500, 500, 500, 500, 500, 750, 750, 750, 750, 750, 750, 1000, 1000, 1000, 1000, 1000, 1000, 2000, 2000, 2000, 2000, 2000, 2000, 3000, 3000, 3000, 3000, 3000, 3000, 5000, 5000, 5000, 5000, 5000, 5000, 10000, 10000, 10000]; // 2020
//var avatar_wins_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 50, 50, 50, 50, 50, 50, 100, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 300, 300, 300, 300, 300, 300, 400, 400, 400, 400, 400, 400, 500, 500, 500, 500, 500, 500, 1000, 1000, 1000, 1000, 1000, 1000, 2000, 2000, 2000, 2000, 2000, 2000, 3000, 3000, 3000, 3000, 3000, 3000, 4000, 4000, 4000, 4000, 4000, 4000, 5000, 5000, 5000, 5000, 5000, 5000, 7500, 7500, 7500, 10000, 10000, 10000]; // 2023 (not used)


/*var avatar_wins_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
25, 25, 25, 25, 25, 25, 
50, 50, 50, 50, 50, 50, 
75, 75, 75, 75, 75, 75, 
100, 100, 100, 100, 100, 100, 
200, 200, 200, 200, 200, 200, 
300, 300, 300, 300, 300, 300, 
400, 400, 400, 400, 400, 400, 
500, 500, 500, 500, 500, 500, 
600, 600, 600, 600, 600, 600, 
700, 700, 700, 700, 700, 700, 
800, 800, 800, 800, 800, 800, 
900, 900, 900, 900, 900, 900, 
1000, 1000, 1000, 1000, 1000, 1000, 
2000, 2000, 2000, 2000, 2000, 2000, 
3000, 3000, 3000, 3000, 3000, 3000, 
4000, 4000, 4000, 4000, 4000, 4000, 
5000, 5000, 5000, 5000, 5000, 5000, 
7500, 7500, 7500, 7500, 7500, 7500, 
10000, 10000, 10000]; // 2023 (not used)*/

var avatar_wins_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
25, 25, 25, 25, 25, 25, 
50, 50, 50, 50, 50, 50, 
75, 75, 75, 75, 75, 75, 
100, 100, 100, 100, 100, 100, 
200, 200, 200, 200, 200, 200, 
300, 300, 300, 300, 300, 300, 
400, 400, 400, 400, 400, 400, 
500, 500, 500, 500, 500, 500, 
600, 600, 600, 600, 600, 600, 
700, 700, 700, 700, 700, 700, 
800, 800, 800, 800, 800, 800, 
900, 900, 900, 900, 900, 900, 
1000, 1000, 1000, 1000, 1000, 1000, 
2500, 2500, 2500, 2500, 2500, 2500, 
5000, 5000, 5000, 5000, 5000, 5000, 
7500, 7500, 7500, 7500, 7500, 7500, 
10000, 10000, 10000, 10000, 10000, 10000];
var avatars_arr = [];
var avatars_loaded = false;
var awaiting_auto_complete = false;
var awaiting_message = false;
var awaiting_response = false;
var awaiting_screenshot = false;
var away = false;
var banlistId = 0;
var banlists = [
  {
    "name": "Speed Duel Format",
    "id": 1099
  },
  {
    "name": "Goat Format",
    "id": 1098
  },
  
  
  
  
  {
    "name": "Jul 1999 (OCG)",
    "id": 1
  },
  {
    "name": "Feb 2000 (OCG)",
    "id": 2
  },
  {
    "name": "May 2000 (OCG)",
    "id": 3
  },
  {
    "name": "Jul 2000 (OCG)",
    "id": 4
  },
  {
    "name": "Aug 2000 (OCG)",
    "id": 5
  },
  {
    "name": "Nov 2000 (OCG)",
    "id": 6
  },
  {
    "name": "Jan 2001 (OCG)",
    "id": 7
  },
  {
    "name": "May 2001 (OCG)",
    "id": 8
  },
  {
    "name": "Jan 2002 (OCG)",
    "id": 9
  },
  {
    "name": "May 2002 (OCG)",
    "id": 10
  },
  {
    "name": "May 2002 (TCG)",
    "id": 11
  },
  {
    "name": "Jul 2002 (TCG)",
    "id": 12
  },
  {
    "name": "Oct 2002 (TCG)",
    "id": 13
  },
  {
    "name": "Dec 2002 (TCG)",
    "id": 14
  },
  {
    "name": "Jan 2003 (OCG)",
    "id": 15
  },
  {
    "name": "Apr 2003 (TCG)",
    "id": 16
  },
  {
    "name": "Apr 2003 (OCG)",
    "id": 17
  },
  {
    "name": "May 2003 (TCG)",
    "id": 18
  },
  {
    "name": "Jul 2003 (OCG)",
    "id": 19
  },
  {
    "name": "Jul 2003 (TCG)",
    "id": 20
  },
  {
    "name": "Aug 2003 (TCG)",
    "id": 21
  },
  {
    "name": "Oct 2003 (OCG)",
    "id": 22
  },
  {
    "name": "Nov 2003 (TCG)",
    "id": 23
  },
  {
    "name": "Feb 2004 (TCG)",
    "id": 24
  },
  {
    "name": "Mar 2004 (OCG)",
    "id": 25
  },
  {
    "name": "Apr 2004 (TCG)",
    "id": 26
  },
  {
    "name": "Aug 2004 (TCG)",
    "id": 27
  },
  {
    "name": "Sep 2004 (OCG)",
    "id": 28
  },
  {
    "name": "Oct 2004 (TCG)",
    "id": 29
  },
  {
    "name": "Mar 2005 (OCG)",
    "id": 30
  },
  {
    "name": "Apr 2005 (TCG)",
    "id": 31
  },
  {
    "name": "Sep 2005 (OCG)",
    "id": 32
  },
  {
    "name": "Oct 2005 (TCG)",
    "id": 33
  },
  {
    "name": "Mar 2006 (OCG)",
    "id": 34
  },
  {
    "name": "Apr 2006 (TCG)",
    "id": 35
  },
  {
    "name": "Sep 2006 (OCG)",
    "id": 36
  },
  {
    "name": "Sep 2006 (TCG)",
    "id": 37
  },
  {
    "name": "Mar 2007 (OCG)",
    "id": 38
  },
  {
    "name": "Mar 2007 (TCG)",
    "id": 39
  },
  {
    "name": "Jun 2007 (TCG)",
    "id": 40
  },
  {
    "name": "Sep 2007 (OCG)",
    "id": 41
  },
  {
    "name": "Sep 2007 (TCG)",
    "id": 42
  },
  {
    "name": "Mar 2008 (OCG)",
    "id": 43
  },
  {
    "name": "Mar 2008 (TCG)",
    "id": 44
  },
  {
    "name": "May 2008 (TCG)",
    "id": 45
  },
  {
    "name": "Sep 2008 (OCG)",
    "id": 46
  },
  {
    "name": "Sep 2008 (TCG)",
    "id": 47
  },
  {
    "name": "Mar 2009 (OCG)",
    "id": 48
  },
  {
    "name": "Mar 2009 (TCG)",
    "id": 49
  },
  {
    "name": "Sep 2009 (OCG)",
    "id": 50
  },
  {
    "name": "Sep 2009 (TCG)",
    "id": 51
  },
  {
    "name": "Mar 2010 (OCG)",
    "id": 52
  },
  {
    "name": "Mar 2010 (TCG)",
    "id": 53
  },
  {
    "name": "Sep 2010 (OCG)",
    "id": 54
  },
  {
    "name": "Sep 2010 (TCG)",
    "id": 55
  },
  {
    "name": "Mar 2011 (OCG)",
    "id": 56
  },
  {
    "name": "Mar 2011 (TCG)",
    "id": 57
  },
  {
    "name": "Sep 2011 (OCG)",
    "id": 58
  },
  {
    "name": "Sep 2011 (TCG)",
    "id": 59
  },
  {
    "name": "Mar 2012 (OCG)",
    "id": 60
  },
  {
    "name": "Mar 2012 (TCG)",
    "id": 61
  },
  {
    "name": "Sep 2012 (OCG)",
    "id": 62
  },
  {
    "name": "Sep 2012 (TCG)",
    "id": 63
  },
  {
    "name": "Mar 2013 (OCG)",
    "id": 64
  },
  {
    "name": "Mar 2013 (TCG)",
    "id": 65
  },
  {
    "name": "Nov 2013 (OCG)",
    "id": 67
  },
  {
    "name": "Sep 2013 (OCG)",
    "id": 66
  },
  {
    "name": "Sep 2013 (TCG)",
    "id": 68
  },
  {
    "name": "Jan 2014 (TCG)",
    "id": 69
  },
  {
    "name": "Feb 2014 (OCG)",
    "id": 70
  },
  {
    "name": "Apr 2014 (OCG)",
    "id": 71
  },
  {
    "name": "Apr 2014 (TCG)",
    "id": 72
  },
  {
    "name": "Jul 2014 (OCG)",
    "id": 73
  },
  {
    "name": "Jul 2014 (TCG)",
    "id": 74
  },
  {
    "name": "Oct 2014 (OCG)",
    "id": 75
  },
  {
    "name": "Oct 2014 (TCG)",
    "id": 76
  },
  {
    "name": "Jan 2015 (OCG)",
    "id": 77
  },
  {
    "name": "Jan 2015 (TCG)",
    "id": 78
  },
  {
    "name": "Apr 2015 (OCG)",
    "id": 79
  },
  {
    "name": "Apr 2015 (TCG)",
    "id": 80
  },
  {
    "name": "Jul 2015 (OCG)",
    "id": 81
  },
  {
    "name": "Jul 2015 (TCG)",
    "id": 82
  },
  {
    "name": "Oct 2015 (OCG)",
    "id": 83
  },
  {
    "name": "Nov 2015 (TCG)",
    "id": 84
  },
  {
    "name": "Jan 2016 (OCG)",
    "id": 85
  },
  {
    "name": "Feb 2016 (TCG)",
    "id": 86
  },
  {
    "name": "Mar 2016 (OCG)",
    "id": 87
  },
  {
    "name": "Apr 2016 (OCG)",
    "id": 88
  },
  {
    "name": "Jul 2016 (OCG)",
    "id": 89
  },
  {
    "name": "Aug 2016 (TCG)",
    "id": 90
  },
  {
    "name": "Oct 2016 (OCG)",
    "id": 91
  },
  {
    "name": "Jan 2017 (OCG)",
    "id": 92
  },
  {
    "name": "Mar 2017 (TCG)",
    "id": 93
  },
  {
    "name": "Apr 2017 (OCG)",
    "id": 94
  },
  {
    "name": "Jun 2017 (TCG)",
    "id": 95
  },
  {
    "name": "Jul 2017 (OCG)",
    "id": 96
  },
  {
    "name": "Sep 2017 (TCG)",
    "id": 97
  },
  {
    "name": "Oct 2017 (OCG)",
    "id": 98
  },
  {
    "name": "Nov 2017 (TCG)",
    "id": 99
  },
  {
    "name": "Jan 2018 (OCG)",
    "id": 100
  },
  {
    "name": "Feb 2018 (TCG)",
    "id": 101
  },
  {
    "name": "Apr 2018 (OCG)",
    "id": 102
  },
  {
    "name": "May 2018 (TCG)",
    "id": 103
  },
  {
    "name": "Jul 2018 (OCG)",
    "id": 104
  },
  {
    "name": "Sep 2018 (TCG)",
    "id": 105
  },
  {
    "name": "Oct 2018 (OCG)",
    "id": 106
  },
  {
    "name": "Dec 2018 (TCG)",
    "id": 107
  },
  {
    "name": "Jan 2019 (OCG)",
    "id": 108
  },
  {
    "name": "Jan 2019 (TCG)",
    "id": 109
  },
  {
    "name": "Apr 2019 (OCG)",
    "id": 110
  },
  {
    "name": "Apr 2019 (TCG)",
    "id": 111
  },
  {
    "name": "Jul 2019 (OCG)",
    "id": 112
  },
  {
    "name": "Jul 2019 (TCG)",
    "id": 113
  },
  {
    "name": "Oct 2019 (OCG)",
    "id": 114
  },
  {
    "name": "Oct 2019 (TCG)",
    "id": 115
  },
  {
    "name": "Jan 2020 (OCG)",
    "id": 116
  },
  {
    "name": "Jan 2020 (TCG)",
    "id": 117
  },
  {
    "name": "Apr 2020 (OCG)",
    "id": 118
  },
  {
    "name": "Apr 2020 (TCG)",
    "id": 119
  },
  {
    "name": "Jun 2020 (TCG)",
    "id": 120
  },
  {
    "name": "Jul 2020 (OCG)",
    "id": 121
  },
  {
    "name": "Sep 2020 (TCG)",
    "id": 122
  },
  {
    "name": "Oct 2020 (OCG)",
    "id": 123
  },
  {
    "name": "Dec 2020 (TCG)",
    "id": 124
  },
  {
    "name": "Jan 2021 (OCG)",
    "id": 125
  },
  {
    "name": "Feb 2021 (OCG)",
    "id": 126
  },
  {
    "name": "Mar 2021 (TCG)",
    "id": 127
  },
  {
    "name": "Apr 2021 (OCG)",
    "id": 128
  },
  {
    "name": "Jul 2021 (OCG)",
    "id": 130
  },
  {
    "name": "Jul 2021 (TCG)",
    "id": 129
  },
  {
    "name": "Oct 2021 (OCG)",
    "id": 132
  },
  {
    "name": "Oct 2021 (TCG)",
    "id": 131
  },
  {
    "name": "Jan 2022 (TCG)",
    "id": 133
  },
  {
    "name": "Feb 2022 (TCG)",
    "id": 134
  },
  {
    "name": "Apr 2022 (OCG)",
    "id": 135
  },
  {
    "name": "May 2022 (TCG)",
    "id": 136
  },
  {
    "name": "Jul 2022 (OCG)",
    "id": 137
  },
  {
    "name": "Oct 2022 (OCG)",
    "id": 138
  },
  {
    "name": "Oct 2022 (TCG)",
    "id": 139
  },
  {
    "name": "Dec 2022 (TCG)",
    "id": 140
  },
  {
    "name": "Jan 2023 (OCG)",
    "id": 141
  },
  {
    "name": "Feb 2023 (TCG)",
    "id": 142
  },
  {
    "name": "Apr 2023 (OCG)",
    "id": 143
  },
  {
    "name": "Jun 2023 (TCG)",
    "id": 144
  },
  {
    "name": "Jul 2023 (OCG)",
    "id": 145
  }
];
var banned = false;
var beginner = 0;
var blocked_by_you_arr = [];
var browse_avatar = false;
var browse_data;
var browsing = false;
var callback;
var callbackAfterSave;
var card1;
var card2;
var card3;
var card4;
var card5;
var card_interval;
var canvas_fingerprint = "";
var cards_fingerprint = 319;
var change_colors = false;
var checked_logged_in = false;
var chipNumber = 0;
var city;
var clickedDuel = 0;
var clickedHoster;
var clickedMessageUsername;
var clickedUsername;
var commentReplyTo;
var comments_data;
var commentY = 0;
var comment_limit = 0;
var commentsLoaded = false;
var confirmation_id;
var confirmation_sent = false;
var connected_str;
var connect_time = 0;
var connected_at = 0;
var connecting_at = 0;
var connection_success = false;
var counter = new Counter();
	counter.find('.glow').detach();
	counter.find('.total_txt').hide();
var country_code;
var cuFilter;
var currentDeckId = 0;
var currentGroup;
var currentGroupId = 0;
var currentNote = "";
var currentProfile;
var currentProfileId = 0;
var current_title = "Duelingbook";
var custom_tokens_arr = [];
var custom_sleeves_arr = [];
var customs = 0;
var deck;
var decklist_cb = $('#decklist_cb');
var deck_holes_arr;
var deckName;
var decks = [];
var deckX = 801;
var deckY = 531.5;
var degenerate = window.location.href.indexOf("degenerate") >= 0;
var defaultDeckData;
var defaultExtraArray;
var defaultMainArray;
var defaultSideArray;
var default_deck;
var default_pic;
var deletedPrivateMessage = 0;
var dlFilter;
var dragCallback;
var dragScaleX;
var dragScaleY;
var dragStartingX = 0;
var dragStartingY = 0;
var dragTransform;
var duel_records_arr = [];
var edit_card = $('#edit_card');
var edit_stats_card;
var exitAfterSave = false;
var experience = 0;
var expert = 0;
var extra_holes_arr;
var favorites = [];
var firstCards;
var firstLogin = false;
var following_arr = [];
var following_data;
var formats = ['ar', 'au', 'cu', 'gu', 'tu', 'uu', 'su', 'dl', 'du'];
var fps = 24;
var frames = $('#frames').children();
var friendsFilter;
var friendsLoaded = false;
var friends_arr = [];
var frozen = false;
var full_search = false;
var game_type;
var got_heartbeat = false;
var groups_arr = [];
var guFilter;
var guild_load_time = 0;
var hosting = false;
var hostname;
var images = [];
var images_loaded = false;
var importedCards;
var importedDeckName = "";
var inPool = false;
var isDimmed = false;
var item_arr;
var item_arr = [];
var joining = false;
//var join_tourney_btn = $('.join_tourney_btn');
var judge = 0;
//var lastAC;
var lastAutoCompleteString;
var lastFormat;
var lastFrame;
var lastJudge = "";
var lastViewedProfile;
var latitude;
var legality;
var liked_by = $('#liked_by');
var liked_comments;
var links_chosen = false;
var loadDeckAfterSave = false;
var loading_deck = false;
var location_confirmed = 0;
var locked = false;
var logged_in = false;
var logged_into_forum = false;
var logging = false;
var logging_in = false;
var loginDate;
var logins = getLogins();
var login_time = 0;
var log_vsp = 0;
var logs = [];
var longitude;
var mX = 0;
var mY = 0;
var map;
var map_div = $('#map');
var accept_members = $('#accept_members_bg');
var menu_arr;
var messages_obj;
var messagesVSP = 0;
var muteSeconds = 0;
var muted = false;
var my_banlists = [];
var my_card;
var newComments = 0;
var newFriendRequests = 0;
var newMessages = 0;
var newSong = false;
var news_loaded = false;
var next_callback;
var next_title;
var not_loading_avatars = false;
var notifications_arr = [];
var nummouseevents = 0;
var official_tourneys_data;
var olPlay;
var online_admins = [];
var online_users = $('#online_users');
var online_users_filter = [];
var online_users_data;
var online_vsp = 0;
var overlaying_card;
var pageNumber = 0;
var pairings = $('#pairings');
	pairings.detach();
var partner;
var pongs = 0;
var poolStatus;
var post_reply = $('#post_reply');
var post_review = $('#post_review');
var post_status = $('#post_status');
var postedReplyRecently = false;
var postedStatusRecently = false;
var private_chat = $('#private_chat');
var profile_data;
var profileBodyState;
var profileBottomY = 0;
var profileFriends;
var profileSong;
var profileSongUrl;
var public_chat = $('#public_chat');
var publicChatLimit = 0;
var publicHTMLLines = 0;
var publicHTMLText = "";
var publicVSP = 0;
var rankings_data;
var rating = 0;
//var read_new_rules = false;
var readyCountdown = 0;
var rebootSeconds = 0;
var rebooting = false;
var received_friend_requests_arr = [];
var reconfirm_email;
var reconnecting = false;
var records_data;
var records_index = 0;
var recycled_friends_arr = [];
var recycled_replies_arr = [];
var recycled_statuses_arr = [];
var region;
var removedCounterCardId = 0;
var remove_adjudicator = $('#remove_adjudicator');
var remove_player = $('#remove_player');
var replySeconds = 0;
var replyToId = 0;
var require_comment_approval = 0;
var RESULT_BOTTOM = 371;
var resultCardX = 0;
var resultCardY = 0;
var resumeTime = 0;
var return_to_deck = false;
var revamped = true;
var savedDeckState = "";
var saved_search;
var searchCardX = 0;
var searchCardY = 0;
var searched = false;
var searchingCountdown = 0;
var selectedComment;
var selectedGroup = "";
var selectedStore;
var selectedThumb = 0;
var selectedTourney;
var sent_friend_requests_arr = [];
var session_id = randomHex();
var shift = false;
var show_admin_arrow;
var sideData;
var side_holes_arr;
var sidingExtraArr;
var sidingExtraTotal = 0;
var sidingMainArr;
var sidingMainTotal = 0;
var sidingSideArr;
var sidingSideTotal = 0;
var simple = 0;
var skill = "";
var skill_draw = false;
//var skills = ["", "Ancient Fusion", "Armed and Ready!", "Aroma Strategy", "Bandit", "Beasts of Phantom", "Beatdown!", "Behold, Gate Guardian!", "Believe in your Bro", "Beware the Brothers Paradox!", "Blaze Accelerator Deployment", "Call of the Haunted", "Catch of the Day", "Chemistry in Motion", "Chillin' Outback", "Cocoon of Ultra Evolution", "Consumed By Darkness", "Crystal Transcendence", "Cyber Blade Fusion", "Cyberdark Style", "Destiny Draw", "Digging for Gold", "Dino Destruction", "Dinosaur Kingdom", "Double Evolution Pill", "Dragon Caller", "Ectoplasmic Fortification!", "Elements of Thunder, Water, and Wind", "Endless Traps", "Energizing Elements", "Final Draw", "Flight of the Harpies", "Forbidden Cyber Style Technique", "Fury of Thunder", "Fusion Party!", "Gravekeeper's Lot", "Grit", "Guardians of the Tomb", "Heavy Metal Raiders", "Here Goes Something!", "HERO World", "HEROES UNITE - FUSION!!", "Hidden Parasite", "Hieratic Chant", "Hyper Metamorphosis", "I'm Just Gonna Attack!", "I've Got Dino DNA!", "Inner Conflict", "Into the Darkness Below", "It's a Toon World!", "It's Jinzo!", "It's My Lucky Day!", "It's No Monster, It's a God!", "Knight of Legend", "Land of the Ojamas", "Last Gamble", "Looking into the Future", "Low Blow", "Machine Angel Ascension", "Magician's Act", "Magnetic Attraction", "Middle Age Mechs", "Millennium Eye", "Millennium Necklace", "Mind Scan", "Mythic Depths", "Nightmare Sonic Blast!", "No More Mrs. Nice Mai!", "Pal-O'Mine-zation!", "Peak Performance", "Power Bond", "Power of Dark", "Power of Friendship", "Power Up!", "Powerful Group of Guys", "Prescience", "Rainbow Crystal Collection", "Rise of the Fallen", "Ritual Ceremony", "Ritual of Black Mastery", "Room for Growth", "Royal Flush", "Servants of the Fallen King", "Shadow Reborn", "Small Roid Big City", "Spell of Mask", "Spell Proof Armor", "Straight to the Grave", "Switcheroo", "Terror from the Deep!", "The Psychic Duelist", "The Right Hero for the Job", "The Roids are Alright", "The World's Greatest Fisherman", "Thousand-Eyes Spell", "Tomb of the Pharaoh", "Toon Mayhem!", "Tribal Synergy", "Twisted Personality", "Under Pressure", "Union Combination", "Viral Infection", "Volcanic Cannon", "Zombie Master"];
var skills = ["", "Ancient Fusion", "Ancient Ruler Rises", "Archfiend's Conscription", "Archfiend's Promotion", "Armed and Ready!", "Aroma Strategy", "Bandit", "Beasts of Phantom", "Beatdown!", "Behold, Gate Guardian!", "Believe in your Bro", "Beware the Brothers Paradox!", "Blaze Accelerator Deployment", "Call of the Haunted", "Catch of the Day", "Chemistry in Motion", "Chillin' Outback", "Cloudy Skies of Grey", "Cocoon of Ultra Evolution", "Cold-Blooded Tactician", "Consumed By Darkness", "Crystal Transcendence", "Cyber Blade Fusion", "Cyberdark Style", "Dark Creation", "Dark Unity", "Delicious Morsel!", "Destiny Draw", "Digging for Gold", "Dino Destruction", "Dinosaur Kingdom", "Double Evolution Pill", "Dragon Caller", "Dragon Force", "Ectoplasmic Fortification!", "Elements of Thunder, Water, and Wind", "Endless Traps", "Energizing Elements", "Final Draw", "Flight of the Harpies", "Fog Warning", "Forbidden Cyber Style Technique", "Forged Steel", "Fury of Thunder", "Fusion Party!", "Gravekeeper's Lot", "Grit", "Guardians of the Tomb", "Heavy Metal Raiders", "Here Goes Something!", "HERO World", "HEROES UNITE - FUSION!!", "Hidden Parasite", "Hieratic Chant", "Hyper Metamorphosis", "I'm Just Gonna Attack!", "I've Got Dino DNA!", "Inner Conflict", "Into the Darkness Below", "It's a Toon World!", "It's Jinzo!", "It's My Lucky Day!", "It's No Monster, It's a God!", "Knight of Legend", "Land of the Ojamas", "Last Gamble", "Looking into the Future", "Low Blow", "Machine Angel Ascension", "Magician's Act", "Magnetic Attraction", "Middle Age Mechs", "Millennium Eye", "Millennium Necklace", "Mind Scan", "Mythic Depths", "Nightmare Sonic Blast!", "No More Mrs. Nice Mai!", "No One Suspects the Dark Scorpion Gang!", "Order of the Queen", "Pal-O'Mine-zation!", "Peak Performance", "Power Bond", "Power of Dark", "Power of Friendship", "Power Up!", "Powerful Group of Guys", "Prescience", "Professor of Alchemy", "Rainbow Crystal Collection", "Rise of the Fallen", "Ritual Ceremony", "Ritual of Black Mastery", "Room for Growth", "Royal Flush", "Ruthless Means", "Servants of the Fallen King", "Setting Sun", "Shadow Reborn", "Small Roid Big City", "Spell of Mask", "Spell Proof Armor", "Straight to the Grave", "Switcheroo", "Terror from the Deep!", "The Psychic Duelist", "The Right Hero for the Job", "The Roids are Alright", "The World's Greatest Fisherman", "Thousand-Eyes Spell", "Tomb of the Pharaoh", "Toon Mayhem!", "Tribal Synergy", "Twisted Personality", "Under Pressure", "Union Combination", "Unlocking the Power", "Vampiric Aristocracy", "Victory of the Shadow Riders", "Viral Infection", "Volcanic Cannon", "Welcome to the Jungle", "Zombie Master"];
var sleeveIndex = 0;
//var sleeve_exp_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 200, 200, 300, 300, 300, 300, 300, 300, 300, 300, 500, 500, 500, 500, 500, 500, 500, 500,750, 750, 750, 750, 750, 750, 750, 750, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 10000, 10000, 10000, 10000]; // 2018
var sleeve_exp_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 200, 200, 200, 200, 200, 200, 200, 200, 300, 300, 300, 300, 300, 300, 300, 300, 500, 500, 500, 500, 500, 500, 500, 500, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]; // 2023
//var sleeve_images_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132]; // 2018
var sleeve_images_arr = [1, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 129, 130, 131, 132]; // 2023
var sleeves_arr = [];
var sleeves_loaded = false;
var social_box_arr;
var socket_security_error = false;
var sound = false;
var statusSeconds = 0;
var status_arr = [];
var status_cb_index = 0;
var status_id = 0;
var statuses_type;
var store_data;
var store_name = "";
var suFilter;
var tagging_up = false;
var tempExtraState = [];
var tempMainState = [];
var tempSideState = [];
var temp_pic;
var tgFilter;
var thumb_border = $('<div id="thumb_border"></div>')
var times_online = 0;
var timezone = '-05:00';
var token_preview = new Thumbnail();
var tokens_arr = [];
var totalCardsSearched = 0;
var totalThumbs = 0;
var total_comments = 0;
var total_exp = 0;
var total_friends = 0;
var total_statuses = 0;
var total_wins = 0;
var tourney_data;
var tourney_members = $('#tourney_members');
var tourney_ready;
var tuFilter;
var twinkle_interval;
var unreadMessage = 0;
var unsavedChanges = false;
var unsavedDeckState = "";
var update_search = false;
//var update_statuses = true;
var update_statuses = false;
var upload_card = $('#upload_card');
var uploader = 0;
var userCommentY = 0;
var user_agent;
var user_username;
var uuFilter;
var view_more_comments_btn = $('.view_more_comments_btn');
var viewing_actions = false;
var viewing_comments = false;
var viewing_following = false;
var viewing_notes = false;
var viewing_rankings = false;
var viewing_records = false;
var viewing_requests = false;
var viewingVSP = 0;
var vip = 0;
var watch_buttons_arr = [];
var websocket = false;
var winningChoice;
var zip_code;

var autoCompleteTimer = new Timer(1000);
	autoCompleteTimer.callback = autoCompleteTimerE;
var statusTimer = new Timer(1000);
	statusTimer.callback = statusTimerE;
var replyTimer = new Timer(1000);
	replyTimer.callback = replyTimerE;
var likeTimer = new Timer(2600);
	likeTimer.callback = hideLikes;
var title_timer = new Timer(2000);
	title_timer.callback = setNextTitle;
/*var timeout_timer = new Timer(60000);
	timeout_timer.callback = timeoutE;*/
var timeout_timer = new Timer(40000);
	timeout_timer.callback = timeoutE;
var heartbeat_timer = new Timer(30000);
	heartbeat_timer.callback = sendHeartbeat;
//var connectTimer = new Timer(30000);
var connectTimer = new Timer(60000);
	connectTimer.callback = connectTimeoutE;
var statusSecondsTimer = new Timer(30000);
	statusSecondsTimer.callback = updateStatusSeconds;
var lockTimer = new Timer(2000);
	lockTimer.callback = lockTimerE;
var muteTimer = new Timer(1000);
	muteTimer.callback = muteTimerE;
var poolTimer = new Timer(1000);
	poolTimer.callback = updatePoolSeconds;
var rebootTimer = new Timer(1000);
	rebootTimer.callback = updateRebootSeconds;
var reconnect_timer = new Timer(5000);
var menuTimer = new Timer(9000);
	menuTimer.callback = menuTimerE;
var grecaptchaTimer = new Timer(10000);
	grecaptchaTimer.callback = hideRecaptcha;

window.onload = loadedE;
window.onbeforeunload = confirmExit;
window.onfocus = activateE;
window.onblur = deactivateE;
						
function gotoDuelRoom() {
	$('#duel_room .username_txt').val("");
	$('#duel_room .name_txt').val(""); // more reliable than below
	$('#duel_room input[type=text]').val("");
	decklist_cb.insertBefore($('#duel_room .default_btn'));
	decklist_cb.setPosition(17, 16);
	goto('duel_room');
	fillDecklists();
	showNotifications();
	lastFormat = 'ar';
	$('#chat_buttons').show();
	duelId = 0;
	rpsWinner = "";
	sideData = null;
	awaiting_admin = false;
	links = false;
	match = false;
	legality = null;
	games = 0;
	viewing = "";
	$('#joining_pool').hide();
	$('#hosting .accept_btn').disable(true);
	$('#hosting .reject_btn').disable(true);
	$('#joining').hide();
	$('#hosting').hide();
	$('#pools_next_btn').show();
	$('#pools_prev_btn').hide();
	$('#filter .username_txt').focus();
	$('#filter select').selectedIndex(0);
	$('#host .expert_cb').checked(false);
	$('#host .watching_cb').checked(true);
	$('#host .classic_cb').checked(false);
	$('#host .tag_duel_cb').checked(false);
	loadGames();
	if (frozen || decks.length == 0) {
		$('#host .format_cb').disable(true);
		decklist_cb.disable(true);
		$('#duel_room .default_btn').disable(true);
		disablePools();
		disableHosting();
	}
	else {
		verifyDeck();
	}	
	if (!simple) {
		var arr = [$('#formats'), $('#au'), $('#cu'), $('#decklist'), $('#filter'), $('#mode'), $('#host_bg')];
		arr.forEach(function(e,i){
			TweenMax.fromTo(e, 0.7, {left:parseInt(e.css("left")) + 250, top:parseInt(e.css("top")) + 100, alpha:0}, {left:parseInt(e.css("left")), top:parseInt(e.css("top")), alpha:1, ease:Expo.easeInOut, delay:i * 0.03 + 0.03});
		});
	}
	if (expert) {
		$('#host .expert_cb').show();
		$('#host .expert_cb').data("background").show();
		$('#host .expert_lbl').show();
		$('#host .host_btn').css("left", 94);
		$('#host .host_btn').data("background").css("left", 94);
	}
	else {
		$('#host .expert_cb').hide();
		$('#host .expert_cb').data("background").hide();
		$('#host .expert_lbl').hide();
		$('#host .host_btn').css("left", 42.5);
		$('#host .host_btn').data("background").css("left", 42.5);
	}
	showPrevFilters();
	setupHost();
	hideDim();
	//$('#formats').scrollLeft(0);
	if ($('#formats').overlayScrollbars) {
		$('#formats').overlayScrollbars().scroll({x:0});
	}
	tweenScrollbar($('#formats'), 0, {"scrollLeft":0});
	//$('#formats_inner').css("left", 0);
	
	//setTimeout(function(){
	//	updatePoolFormat();
	//}, 5);
}

function updateFormat() {
	//if ($('#host .format_cb').prop("selectedIndex") < 0) {
	//	$('#host .format_cb').selectedIndex(0);
	//}
	$('#host .rules_cb').disable(false);
	if (legality != "" && legality != "Illegal" && legality != "Empty") {
		enableHosting();
	}
}

/*function updatePoolFormat() {
	$('#ar .rules_cb').disable(false);
	switch($('#ar .format_cb').val()) {
		case "ar":
			if ($('#ar .rules_cb option').eq(0).val() == "*") {
				$('#ar .rules_cb option').eq(0).remove();
				$('#ar .rules_cb').selectedIndex($('#ar .rules_cb').prop("selectedIndex"));		
				var index = $('#ar .type_cb').prop("selectedIndex");
				$('#ar .type_cb option').eq(2).remove();
				if (index == 2) {
					$('#ar .type_cb').selectedIndex(1);
				}
			}
			break;
		case "gr":
		case "gu":
		case "sr":
		case "su":
			$('#ar .rules_cb').val("");
			$('#ar .rules_cb').disable(true);
			break;
		default:
			if ($('#ar .rules_cb option').eq(0).val() != "*") {
				$('#ar .rules_cb').prepend('<option value="*">TCG + OCG</option>');
				$('#ar .type_cb').append('<option value="n">Single (no siding)</option>');
			}
			if (lastFormat == 'ar' && $('#ar .type_cb').val() == "m") {
				$('#ar .type_cb').selectedIndex(1);
			}
			break;
	}
	if (!$('#ar .rules_cb').prop("disabled") && !$('#ar .rules_cb').val()) {
		$('#ar .rules_cb').selectedIndex(0);
	}
	else {
		$('#ar .rules_cb').selectedIndex($('#ar .rules_cb').prop("selectedIndex"));
	}
	lastFormat = $('#ar .format_cb').val();
}*/

function updatePoolFormat() {
	$('#ar .rules_cb').disable(false);
	switch($('#ar .format_cb').val()) {
		case "ar":
			if ($('#ar .rules_cb option').eq(0).val() == "*") {
				$('#ar .rules_cb option').eq(0).remove();
				$('#ar .rules_cb').selectedIndex($('#ar .rules_cb').prop("selectedIndex"));		
				//var index = $('#ar .type_cb').prop("selectedIndex");
				//$('#ar .type_cb option').eq(2).remove();
				//if (index == 2) {
				//	$('#ar .type_cb').selectedIndex(1);
				//}
			}
			break;
		case "gr":
		case "gu":
		case "sr":
		case "su":
			$('#ar .rules_cb').val("");
			$('#ar .rules_cb').disable(true);
			break;
		default:
			if ($('#ar .rules_cb option').eq(0).val() != "*") {
				$('#ar .rules_cb').prepend('<option value="*">TCG + OCG</option>');
				//$('#ar .type_cb').append('<option value="n">Single (no siding)</option>');
			}
			if (lastFormat == 'ar' && $('#ar .type_cb').val() == "m") {
				//$('#ar .type_cb').selectedIndex(1);
			}
			break;
	}
	if (!$('#ar .rules_cb').prop("disabled") && !$('#ar .rules_cb').val()) {
		$('#ar .rules_cb').selectedIndex(0);
	}
	else {
		$('#ar .rules_cb').selectedIndex($('#ar .rules_cb').prop("selectedIndex"));
	}
	lastFormat = $('#ar .format_cb').val();
}
	
function loadGames() {
	showDim();
	$('.duelbutton').detach();
	$('.format_inner').html("");
	//$('.format_inner').addClass("unscrollable");
	if ($('#mode .duel_rb').is(":checked")) {
		if (legality != null && decks.length > 0) {
			updateFormat();
			if (!hosting) {
				decklist_cb.disable(false);
			}
		}
		loadHosting();
		$('#ar .format_txt').text("Duelist Pool");
	}
	else if ($('#mode .watch_rb').is(":visible")) {
		loadWatching();
		$('#ar .format_txt').text("Advanced (Rated)");
	}
}

function loadHosting() {
	Send({"action":"Load hosting"});
}

function loadWatching() {
	Send({"action":"Load watching", "card":$('#filter .name_txt').val()});
}

function enableHosting() {
	$('#host .rules_cb').disable(false);
	$('#host .format_cb').disable(false);
	$('#host .match_type_cb').disable(false);
	$('#host .host_btn').disable(false);
	$('#host .duel_note_txt').disable(false);
	$('#host .duel_password_txt').disable(false);
	$('#host .watching_cb').disable(false);
	$('#host .classic_cb').disable(false);
	$('#host .watch_note_txt').disable(false);
	$('#host .watch_password_txt').disable(false);
	determineRatedLegality();
}

function disableHosting() {
	$('#host .rules_cb').disable(true);
	$('#host .format_cb').disable(true);
	$('#host .match_type_cb').disable(true);
	$('#host .host_btn').disable(true);
	$('#host .duel_note_txt').disable(true);
	$('#host .duel_password_txt').disable(true);
	$('#host .watching_cb').disable(true);
	$('#host .classic_cb').disable(true);
	$('#host .watch_note_txt').disable(true);
	$('#host .watch_password_txt').disable(true);
	determineRatedLegality();
}

function determineRatedLegality() {
	if (hosting || joining || inPool) {
		return;
	}
	if (deck.tcg && !deck.ocg) {
		$('#ar .rules_cb').selectedIndex(0);
	}
	if (!deck.tcg && deck.ocg) {
		$('#ar .rules_cb').selectedIndex(1);
	}
	determineRatedLegality2();
}

function determineRatedLegality2() {
	if (!frozen) {
		$('#ar .format_cb').disable(false);
		$('#ar .rules_cb').disable(false);
		$('#ar .type_cb').disable(false);
		$('#ar .join_btn').disable(false);
	}
}

function enablePools() {
	if (decks.length > 0) {
		$('.format_inner').removeClass("is_disabled");
		if (!tagging_up) {
			decklist_cb.disable(false);
		}
	}
	if ($('#mode .duel_rb').is(":checked")) {
		determineClickableDuels();
	}
}

function disablePools() {
	$('.format_inner').addClass("is_disabled");
}

function deckChangeE(e) {
	if (deckIndex() < 0) {
		deck = {};
		return;
	}
	deck = decks[deckIndex()];
	if (currentLabel == "deck_constructor") {
		loadDeck();
	}
	else if (currentLabel == "duel_room") {
		verifyDeck(e);
	}
}

function verifyDeck(e) {
	legality = null;
	if (decks.length > 0) {
		if (deck.legality) {
			legality = deck.legality;
			determineDeckLegality();
			return;
		}
		Send({"action":"Verify deck", "id":deck.id, "name":deck.data});
		if (e == true) {
			return;
		}
		showDim();
	}
	else {
		$('#duel_room .format_cb').disable(true);
		decklist_cb.disable(true);
		$('#duel_room .default_btn').disable(true);
		disablePools();
		disableHosting();
	}
}

function verifyDeckResponse(data) {
	var index = deckIndex();
	legality = data.legality;
	deck.legality = data.legality;
	deck.tcg = data.tcg;
	deck.ocg = data.ocg;
	deck.goat = data.goat;
	deck.links = data.links;
	deck.speed = data.speed;
	deck.rush = data.rush;
	deck.custom = data.custom;
	determineDeckLegality();
	decklist_cb.find('option').eq(deckIndex())[0].outerHTML	= '<option value="' + deck.id + '" style="color: ' + getDeckColor(deck) + ';">' + escapeHTML(deck.label) + '</option>';
	decklist_cb.selectedIndex(index);
}

function determineDeckLegality() {
	hideDim();
	if (currentLabel != "duel_room") {
		return;
	}
	var prevIndex = $('#host .format_cb option:selected').index();
	switch (legality) {
		case "Advanced":
			if ($('#mode .duel_rb').is(":checked")) {
				$('#au .format_inner').removeClass("is_disabled");
				$('#cu .format_inner').removeClass("is_disabled");
				$('#tu .format_inner').removeClass("is_disabled");
				$('#uu .format_inner').removeClass("is_disabled");
				//$('#su .format_inner').removeClass("is_disabled");
				$('#host .format_cb').selectedIndex(0);
				determineRatedLegality();
			}
			enableHosting();
			break;
		case "Traditional":
			if ($('#mode .duel_rb').is(":checked")) {
				$('#cu .format_inner').removeClass("is_disabled");
				$('#tu .format_inner').removeClass("is_disabled");
				$('#uu .format_inner').removeClass("is_disabled");
			}
			enableHosting();
			//if ($('#host .format_cb').prop("selectedIndex") < 3) {
				$('#host .format_cb').selectedIndex(3);
			//}
			break;
		case "Unlimited":
		case "Illegal":
		case "Small":
			if ($('#mode .duel_rb').is(":checked")) {
				$('#cu .format_inner').removeClass("is_disabled");
				$('#uu .format_inner').removeClass("is_disabled");
			}
			enableHosting();
			$('#host .format_cb').selectedIndex(4);
			break;
		/*case "Rush":
			if ($('#mode .duel_rb').is(":checked")) {
				$('#ru .format_inner').removeClass("is_disabled");
			}
			enableHosting();
			$('#host .format_cb').selectedIndex(6);
			break;*/
		case "Duel Links":
			if ($('#mode .duel_rb').is(":checked")) {
				$('#cu .format_inner').removeClass("is_disabled");
				$('#dl .format_inner').removeClass("is_disabled");
			}
			enableHosting();
			if ($('#host .format_cb').prop("selectedIndex") < 5) {
				$('#host .format_cb').selectedIndex(5);
			}
			break;
		case "Empty":
		default:
			disableHosting();
			if ($('#mode .duel_rb').is(":checked")) {
				console.log('b');
				disablePools();
			}
			break;
	}
	if ($('#mode .duel_rb').is(":checked")) {
		if (deck.speed) {
			$('#su .format_inner').removeClass("is_disabled");
		}
	}
	if (deck.rush == 1) {
		if ($('#mode .duel_rb').is(":checked")) {
			$('#ru .format_inner').removeClass("is_disabled");
		}
		enableHosting();
		$('#host .format_cb').selectedIndex(6);
	}
	if (deck.goat && legality != "Illegal" && legality != "Empty" && legality != "Small") {
		$('#host .format_cb').selectedIndex(2);
	}
	if (deck.custom) {
		$('#host .format_cb').selectedIndex(1);
	}
	if (deck.speed) {
		$('#host .format_cb').selectedIndex(5);
	}
	if (prevIndex == 7) {
		$('#host .format_cb').selectedIndex(7);
	}
	determineClickableDuels();
	updateFormat();
	if ($('#mode .watch_rb').is(":checked") && !hosting) {
		$('.format_inner').removeClass("is_disabled");
	}
	
	updatePoolFormat(); // needed to redisable rules if goat/speed is selected
}

function determineClickableDuels() {
	if (tagging_up) {
		return;
	}
	if (decks.length < 1 || hosting) {
		disablePools();
	}
	else {
		switch (legality) {
			case "Traditional":
				$('#au .format_inner').addClass("is_disabled");
				break;
			case "Unlimited":
				$('#au .format_inner').addClass("is_disabled");
				$('#tu .format_inner').addClass("is_disabled");
				break;
		}
		if (!frozen) {
			if (deck.goat) {
				$('#gu .format_inner').removeClass("is_disabled");
			}
		}
	}
}

function loadDuelsResponse(data) {
	console.time("loadDuelsResponse");
	if (currentLabel != "duel_room") {
		return;
	}
	hideDim();
	if ($('#mode .duel_rb').is(":checked")) {
		for (var i = 0; i < data.duels.length; i++) {
			createJoinButton(data.duels[i]);
		}
		if (frozen) {
			disablePools();
			disableHosting();
		}
		else {
			if (legality != null) {
				determineDeckLegality();
			}
			if (hosting || joining || inPool) {
				disablePools();
			}
		}
		showRatedOptions();
		determineClickableDuels();
	}
	else if ($('#mode .watch_rb').is(":checked")) {
		$('.format_inner').each(function(i,e){
			$(this).data("arr", []);
		});
		for (i = 0; i < data.duels.length; i++) {
			createWatchButton(data.duels[i], true)
		}
		$('.format_inner').each(function(i,e){
			$(this).html($(this).data("arr"));
		});
		$('.watchbutton').each(function(){
			var btn = $(this);
			setText(btn.find('.title_txt'));
			setText(btn.find('.title2_txt'));
			setText(btn.find('.note_txt'));
			if (!passesFilter(btn)) {
				btn.hide();
			}
		});
		$('.format_inner').removeClass("is_disabled");
		if (hosting) {
			disablePools();
		}
		hideRatedOptions();
	}
	/*else if ($('#mode .watch_rb').is(":checked")) {
		for (i = 0; i < data.duels.length; i++) {
			createWatchButton(data.duels[i])
		}
		$('.format_inner').removeClass("is_disabled");
		if (hosting) {
			disablePools();
		}
		hideRatedOptions();
	}*/
	filterDuels();
	console.timeEnd("loadDuelsResponse");
}

function getFormat(str) {
	switch (str) {
		case "ar":
			return $('#ar .format_inner');
		case "au":
			return $('#au .format_inner');
		case "cu":
			return $('#cu .format_inner');
		case "gr":
		case "gu":
			return $('#gu .format_inner');
		case "tu":
			return $('#tu .format_inner');
		case "uu":
			return $('#uu .format_inner');
		case "sr":
		case "su":
			return $('#su .format_inner');
		case "rr":
		case "ru":
			return $('#ru .format_inner');
	}
	return null;
}

function createJoinButton(data) {
	if (currentLabel != "duel_room") {
		return;
	}
	if (!$('#mode .duel_rb').is(":checked")) {
		return;
	}
	//if (blocked_arr.indexOf(data.u) >= 0) {
	if (isBlocked(data.u)) {
		return;
	}
	var join_button = new JoinButton(data);
	var format = getFormat(data.f);
	addDuelButton(join_button, format);
}

function createWatchButton(data, b) {
	if (currentLabel != "duel_room") {
		return;
	}
	if (!$('#mode .watch_rb').is(":checked")) {
		return;
	}
	//if (blocked_arr.indexOf(data.u) >= 0) {
	if (isBlocked(data.u)) {
		return;
	}
	var watch_button = new WatchButton(data);
	var format = getFormat(data.f);
	addDuelButton(watch_button, format, b);
}

function addDuelButton(btn, sp, b) {
	var y = 0;
	for (var i = 0; i < sp.find('.duelbutton').length; i++) {
		if (!sp.find('.duelbutton').eq(i).is(":visible")) {
			y -= 50;
			continue;
		}
		var top = parseInt(sp.find('.duelbutton').eq(i).css("top"));
		if (top % 50 != 0) {
			top++;
		}
		if (top != y) {
			insertAt(i, btn, sp);
			break;
		}
		y += 50;
	}
	btn.css("top", y);
	if (y == 250) {
		sp.removeClass("unscrollable");
	}
	if (i == sp.find('.duelbutton').length) {
		if (b) {
			sp.data("arr").push(btn);
			return;
		}
		sp.append(btn);
	}
	if (btn.hasClass("joinbutton")) {
		setText(btn.find('.username_txt'));
	}
	else {
		setText(btn.find('.title_txt'));
		setText(btn.find('.title2_txt'));
	}
	setText(btn.find('.note_txt'));
	if (!passesFilter(btn)) {
		btn.hide();
	}
}

function near(num1, num2, leeway) {
	if (num1 - num2 < -leeway) {
		return false;
	}
	return true;
}

function passesFilter(btn) {
	var _username = $('#filter .username_txt').val().toLowerCase();
	if (btn.hasClass("joinbutton")) {
		if (_username != "" && btn.data("username").toLowerCase().indexOf(_username) < 0) {
			if (_username != "" && btn.data("username2").toLowerCase().indexOf(_username) < 0) {
				return false;
			}
		}
	}
	else {
		if (_username != "" && btn.data("username1").toLowerCase().indexOf(_username) < 0 && btn.data("username2").toLowerCase().indexOf(_username) < 0 && btn.data("username3").toLowerCase().indexOf(_username) < 0 && btn.data("username4").toLowerCase().indexOf(_username) < 0) {
			return false;
		}
	}
	if ($('#filter .rating_lower_txt').val() != "" && ~~$('#filter .rating_lower_txt').val() >= btn.data("rating_high")) {
		return false;
	}
	if ($('#filter .rating_upper_txt').val() != "" && ~~$('#filter .rating_upper_txt').val() <= btn.data("rating_low")) {
		return false;
	}
	if ($('#filter .rep_lower_txt').val() != "" && ~~$('#filter .rep_lower_txt').val() >= btn.data("experience_high")) {
		return false;
	}
	if ($('#filter .rep_upper_txt').val() != "" && ~~$('#filter .rep_upper_txt').val() <= btn.data("experience_low")) {
		return false;
	}
	if ($('#filter .match_type_cb').val() != "") {
		if ($('#filter .match_type_cb').val() == "s" && btn.data("type") != "s") {
			return false;
		}
		if ($('#filter .match_type_cb').val() == "n" && btn.data("type") != "n") {
			return false;
		}
		if ($('#filter .match_type_cb').val() == "m" && btn.data("type") != "m") {
			return false;
		}
	}
	if ($('#filter .rules_cb').val() == "tcg" && !btn.data("tcg")) {
		return false;
	}
	if ($('#filter .rules_cb').val() == "ocg" && !btn.data("ocg")) {
		return false;
	}
	if ($('#filter .style_cb').val() == "links" && btn.data("links") == false) {
		return false;
	}
	if ($('#filter .style_cb').val() == "classic" && btn.data("links") == true) {
		return false;
	}
	if ($('#filter .style_cb').val() == "tag_duel" && !btn.data("tag_duel")) {
		return false;
	}
	return true;
}

function hideRatedOptions() {
	$('#rated_options').hide();
}

function showRatedOptions() {
	$('#rated_options').show();
}

function filterDuels() {
	var buttonType = "joinbutton";
	if (!$('#mode .duel_rb').is(":checked")) {
		buttonType = "joinbutton";
	}
	var formats = [$('#ar .format_inner'), $('#au .format_inner'), $('#cu .format_inner'), $('#gu .format_inner'), $('#tu .format_inner'), $('#uu .format_inner'), $('#su .format_inner'), $('#ru .format_inner')];
	for (var i = 0; i < formats.length; i++) {
		var arr = formats[i].find('.duelbutton');
		for (var j = 0; j < arr.length; j++) {
			if (passesFilter(arr.eq(j))) {
				arr.eq(j).show();
			}
			else {
				arr.eq(j).hide();
			}
		}
		sortButtons(formats[i]);
	}
	// THIS SHOULD BE REDUNDANT, BUT I CAN'T SEEM TO DO WITHOUT IT	
	if (hosting) {
		disablePools();
	}
}

function sortButtons(format) {
	var sort_by = $('#filter .sort_cb').val();
	switch (sort_by) {
		case "username":
			format.find('.duelbutton').sortElements(function(a, b){
				if ($(a).data("username") < $(b).data("username")) {
					return -1;
				}
				if ($(a).data("username") > $(b).data("username")) {
					return 1;
				}
				return 0;
			});
			break;
		default:
			format.find('.duelbutton').sortElements(function(a, b){
				if (~~$(a).data(sort_by) > ~~$(b).data(sort_by)) {
					return -1;
				}
				if (~~$(a).data(sort_by) < ~~$(b).data(sort_by)) {
					return 1;
				}
				return 0;
			});
			break;
	}
	var y = 0;
	format.find('.duelbutton').each(function(i,e){
		if (!$(this).is(":visible")) {
			return true;
		}
		$(this).css("top", y);
		y += 50;
	});
}

function removeWatchButton(id) {
	if (currentLabel != "duel_room") {
		return;
	}
	if (!$('#mode .watch_rb').is(":checked")) {
		return;
	}
	$('.format_inner').find('.duelbutton').each(function(){
		if ($(this).data("id") == id) {
			$(this).remove();
			return false;
		}
	});
	for (var i = 0; i < watch_buttons_arr.length; i++) {
		if (watch_buttons_arr[i].data("id") == id) {
			watch_buttons_arr.splice(i, 1);
			break;
		}
	}
}

function removeJoinButton(str, b) {
	if (b !== false) {
		b = true;
	}
	if (currentLabel != "duel_room") {
		return;
	}
	if (!$('#mode .duel_rb').is(":checked")) {
		return;
	}
	$('.format_inner').find('.duelbutton').each(function(){
		if ($(this).data("username") == str) {
			$(this).remove();
			return false;
		}
	});
	if ($('#joining').is(":visible") && clickedHoster == str && partner != str) {
		if (tagging_up) {
			setupHosting();
			enablePools();
		}
		else {
			partner = null;
			setupHost();
		}
		messageE("User has cancelled their duel");
	}
	if (partner == str && b || username == str && partner != null && b) {
		partner = null;
		setupHost();
		messageE("Partner has left");
	}
}

function joinPool(e, ready) {
	if (!deck.id) {
		errorE("First, create a deck in Deck Constructor");
		return;
	}
	if (ready !== true) {
		ready = false;
	}
	if (!ableToDuel($('#ar .format_cb').val(), $('#ar .rules_cb').val())) {
		return;
	}
	if (($('#ar .format_cb').val() == "su" || $('#ar .format_cb').val() == "sr") && !ready) {
		chooseSkill(e, joinPool);
		return;
	}
	/*if (!read_new_rules) {
		getConfirmation("Master Rule Revision", 'Duelingbook is following the updated <font color="#0077FF"><a href="' + URL_START + '"/master-rule-update" target="_blank"><u>Master Rule</u></a></font>. Proceed?', function(){
			read_new_rules = true;
			localStorage.setItem("rules", "true");
			joinPool(e, ready);
		}, null, true);
		showDim();
		return;
	}*/
	showDim();
	inPool = true;
	$('#ar .format_cb').disable(true);
	$('#ar .rules_cb').disable(true);
	$('#ar .type_cb').disable(true);
	$('#ar .join_btn').disable(true);
	var rules = $('#ar .rules_cb').val();
	if (!rules) {
		rules = "*";
	}
	Send({"action":"Join pool", "username":username, "rules":rules, "type":$('#ar .type_cb').val(), "deck":deck.id, "format":$('#ar .format_cb').val(), "skill":skill});
}

function hostDuel(e, ready) {
	if (!deck.id) {
		errorE("First, create a deck in Deck Constructor");
		return;
	}
	if (ready !== true) {
		ready = false;
	}
	var format = $('#host .format_cb').val();
	if ($('#host .classic_cb').is(":checked") && deck.links) {
		errorE("You cannot play in classic mode because your deck contains Link monsters");
		return;
	}
	if (!ableToDuel(format, $('#host .rules_cb').val())) {
		return;
	}
	if (format == "su" && !ready) {
		chooseSkill(e, hostDuel);
		return;
	}
	setupHosting();
	hosting = true;
	Send({"action":"Host duel", "format":format, "type":$('#host .type_cb').val(), "rules":$('#host .rules_cb').val(), "note":$('#host .duel_note_txt').val(), "password":$('#host .duel_password_txt').val(), "watching":$('#host .watching_cb').is(":checked"), "watch_note":$('#host .watch_note_txt').val(), "watch_password":$('#host .watch_password_txt').val(), "deck":deck.id, "links":!$('#host .classic_cb').is(":checked"), "skill":skill, "expert":$('#host .expert_cb').is(":checked"), "tag":$('#host .tag_duel_cb').is(":checked")});
	if (format == "so") {
		setupHost();
		showDim();
	}
	switch(format) {
		case "ar":
		case "au":
		case "cu":
			poolsPrevE(true);
			setTimeout(function(){
				poolsPrevE(true);
			}, 20);
			break;
		case "gu":
		case "tu":
		case "uu":
			poolsPrevE(true);
			setTimeout(function(){
				poolsPrevE(true);
				setTimeout(function(){
					poolsNextE(true);
				}, 20);
			}, 20);
			break;
		case "su":
		case "ru":
			poolsNextE(true);
			setTimeout(function(){
				poolsNextE(true);
			}, 1);
			break;
	}
}

function setupHost() {
	tagging_up = false;
	clickedHoster = null;
	$('#host').show();
	$('#hosting').hide();
	$('#joining').hide();
	$('#joining_pool').hide();
	enablePools();
	determineRatedLegality2();
	$('#host_bg #host_lbl').text("Host a Duel");
	
	updatePoolFormat();
}

function setupHosting() {
	$('#host').hide();
	$('#hosting').show();
	$('#joining').hide();
	$('#joining_pool').hide();
	disablePools();
	decklist_cb.disable(true);
	$('#ar .format_cb').disable(true);
	$('#ar .rules_cb').disable(true);
	$('#ar .type_cb').disable(true);
	$('#ar .join_btn').disable(true);
	$('#hosting .accept_btn').disable(true);
	$('#hosting .reject_btn').disable(true);
	$('#joinlist').html("");
}

function setupJoining() {
	joining = true;
	$('#host').hide();
	$('#hosting').hide();
	$('#joining').show();
	$('#joining_pool').hide();
	disablePools();
	decklist_cb.disable(true);
	$('#ar .format_cb').disable(true);
	$('#ar .rules_cb').disable(true);
	$('#ar .type_cb').disable(true);
	$('#ar .join_btn').disable(true);
	$('#host_bg #host_lbl').text("Joining Duel");
}

function setupJoiningPool() {
	$('#host').hide();
	$('#hosting').hide();
	$('#joining').hide();
	$('#joining_pool').show();
	$('#joining_pool .ready_btn').hide();
	disablePools();
	decklist_cb.disable(true);
	$('#host_bg #host_lbl').text("Waiting in Pool");
}

function cancelDuel() {
	hosting = false;
	partner = null;
	setupHost();
	enablePools();
	removeJoinButton(username);
	Send({"action":"Cancel duel"});
}

function checkDeck(str, test) {
	if (test !== true) {
		test = false;
	}
	if (test) {
		Send({"action":"Check deck", "rules":str, "id":deck.id});
		showDim();
		return;
	}
	switch (str) {
		case "TCG":
			errorE("Your deck contains cards that are not TCG legal");
			break;
		case "OCG":
			errorE("Your deck contains cards that are not OCG legal");
			break;
	}
}

function ableToDuel(format, rules) {
	if (admin) {
		errorE("Admins are forbidden from dueling while on duty");
		return false;
	}
	if (adjudicator) {
		errorE("You cannot duel right now");
		return false;
	}
	switch(deck.legality) {
		case "":
			checkDeck("*", true);
			return false;
		case "Empty":
			errorE("Your deck does not contain any cards yet");
			return false;
	}
	if (format == "so") {
		return true;
	}
	if (deck.legality == "Small" || deck.legality == "Illegal") {
		switch(format) {
			case "uu":
			case "cu":
			case "sr":
			case "su":
				if (deck.legality == "Illegal") {
					errorE("The minimum deck size for this format is 20");
					return false;
				}
				break;
			default:
				errorE("Your deck needs at least 40 cards");
				return false;
		}
	}
	if (deck.custom && format != "cu") {
		errorE("Your deck can only be used in Custom Card Format");
		return false;
	}
	/*if (deck.rush && format != "rr" && format != "ru" && format != "cu") {
		if (format == "sr" || format == "su") {
			checkDeck("Speed", true);
		}
		else {
			checkDeck("*", true);
		}
		return false;
	}*/
	
	
	switch(format) {
		case "au":
			if (deck.legality != "Advanced") {
				checkDeck(rules, true);
				return false;
			}
			break;
		case "dl":
			if (legality != "Duel Links") {
				checkDeck("Duel Links", true);
				return false;
			}
			break;
		case "gr":
		case "gu":
			if (!deck.goat) {
				checkDeck("Goat", true);
				return false;
			}
			break;
		case "sr":
		case "su":
			if (!deck.speed) {
				checkDeck("Speed", true);
				return false;
			}
			break;
		case "tu":
			if (deck.legality != "Advanced" && deck.legality != "Traditional") {
				checkDeck("*", true);
				return false;
			}
			break;
		case "rr":
		case "ru":
			//if (!deck.rush) { // i don't remember why this didn't work well
			//if (legality != "Rush") {
			if (deck.rush != 1) {
				checkDeck("Rush", true);
				return false;
			}
			if (deck.ocg == 0) {
				checkDeck("OCG", true);
				return false;
			}
			break;
	}
	
	
	// I moved this block down to here from up above because I want Speed Duels and Goat Format to give Speed/Goat error messages, not general rush card messages
	if (deck.rush && format != "rr" && format != "ru" && format != "cu") {
		checkDeck("*", true);
		return false;
	}
	
	
	
	if (rules == "TCG" && !deck.tcg) {
		checkDeck("TCG", true);
		return false;
	}
	if (rules == "OCG" && !deck.ocg) {
		checkDeck("OCG", true);
		return false;
	}
	if (format == "ar" && deck.legality != "Advanced") {
		checkDeck("Legality", true);
		return false;
	}
	return true;
}

function deckIndex() {
	return decklist_cb.prop("selectedIndex");
}

function chooseSkill(e, callback) {
	for (var i = skills.length - 1; i >= 0; i--) {
		if (skill == skills[i]) {
			break;
		}
	}
	getComboBox("Speed Duel", "Select the skill you would like to use: ", skills, i, function(){
		skill = $('#combo .combo_cb').val();
		callback(e, true);
		localStorage.setItem("skill", skill);
	});
	showDim();
}

function changeSkill() {
	Send({"action":"Duel", "play":"Change skill", "skill":$('#combo .combo_cb').val()});
}

function joinDuelE(e, ready) {
	if (ready !== true) {
		ready = false;
	}
	hosting = false;
	var joinButton;
	if (e instanceof jQuery) {
		joinButton = e;
	}
	else {
		joinButton = e.currentTarget;
	}
	if (joinButton.data("username") == username) {
		errorE("This is your own join button");
		return;
	}
	if (!tagging_up && joinButton.data("tag")) {
		errorE("To join this game, first pair up with a tag partner");
		return;
	}
	if (tagging_up && !joinButton.data("tag")) {
		errorE("You must select a Tag Duel");
		return;
	}
	if (!joinButton.data("links") && deck.links) {
		errorE("You cannot play in classic mode because your deck contains Link monsters");
		return;
	}
	if (joinButton.find('.expert').length == 1 && !expert) {
		errorE("Only users who passed the judge exam can play in expert games");
		return;
	}
	if (!ableToDuel(joinButton.data("format"), joinButton.data("rules"))) {
		return;
	}
	//if (blocked_arr.indexOf(joinButton.data("username")) >= 0) 
	if (isBlocked(joinButton.data("username"))) {
		errorE("You are blocked from dueling this user");
		return;
	}
	clickedHoster = joinButton.data("username");
	if (joinButton.data("format") == "su" && !ready && !joinButton.find('.partner').length && !joinButton.data("tag")) {
		chooseSkill(joinButton, joinDuelE);
		return;
	}
	if (joinButton.data("password")) {
		getInput("Duel Password", "Enter the duel password to join duel:", "", 50, joinDuel, null, true);
		showDim();
		return;
	}
	joinDuel();
}

function joinDuel() {
	if (!clickedHoster) { // idk how this is null here sometimes
		errorE("Please reselect a game to join");
		return;
	}
	setupJoining();
	$('#joining .waiting_txt').text("Waiting for response from host...");
	Send({"action":"Join duel", "username":clickedHoster, "deck":deck.id, "password":$('#input .input_txt').val(), "skill":skill});
}

function joinDuelResponse(data) {
	var arr = $('#joinlist .cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i).data("username") == data.username) {
			console.log('returning');
			return;
		}
	}
	var cell = $(new Cell2(data.username + data.rating));
	if (data.rating.indexOf(" (Deck contains under 40 cards)") >= 0) {
		cell.find('span').html(escapeHTML(data.username) + data.rating.substring(0, data.rating.indexOf(" (Deck contains under 40 cards)")) + ' <font color="#FF0000">(Deck contains under 40 cards)</font>');
	}
	//else if (data.rating.indexOf(" (Bypassing card limits)") >= 0) {
	//	cell.find('span').html(escapeHTML(data.username) + data.rating.substring(0, data.rating.indexOf(" (Bypassing card limits)")) + ' <font color="#FF0000">(Bypassing card limits)</font>');
	//}
	else if (data.rating.indexOf(" (Unlimited)") >= 0) {
		cell.find('span').html(escapeHTML(data.username) + data.rating.substring(0, data.rating.indexOf(" (Unlimited)")) + ' <font color="#FF0000">(Unlimited)</font>');
	}
	else if (data.rating.indexOf(" (Expert)") >= 0) {
		cell.find('span').html(escapeHTML(data.username) + data.rating.substring(0, data.rating.indexOf(" (Expert)")) + ' <font color="#009900">(Expert)</font>');
	}
	//cell.removeAttr("ondblclick");
	//cell.data("label", data.username + data.rating);
	cell.data("username", data.username);
	cell.click(function(){
		$('#hosting .accept_btn').disable(false);
		$('#hosting .reject_btn').disable(false);
	});
	$('#joinlist').append(cell);
}

function removeFromJoinlist(data) {
	$('#joinlist .cell').each(function(){
		if ($(this).data("username") == data.username) {
			$(this).remove();
			if ($('#joinlist .cell2.selected').length == 0) {
				$('#hosting .accept_btn').disable(true);
				$('#hosting .reject_btn').disable(true);
			}
			return false;
		}
	});
}

function leaveDuel() {
	if (tagging_up) {
		setupHosting();
		enablePools();
	}
	else {
		joining = false;
		partner = null;
		setupHost();
	}
	Send({"action":"Leave duel"});
	clickedHoster = null;
}

function rejectUser() {
	var str = $('#joinlist .cell2.selected').data("username");
	Send({"action":"Reject user", "username":str});
	$('#joinlist .cell2.selected').remove();
	$('#hosting .accept_btn').disable(true);
	$('#hosting .reject_btn').disable(true);
}

function acceptUser() {
	var str = $('#joinlist .cell2.selected').data("username");
	if (!str) {
		return;
	}
	Send({"action":"Accept user", "username":str});
	$('#joinlist').html("");
	showDim();
}

function updatePoolSeconds() {
	trace("updatePoolSeconds entered");
	if (currentLabel == "duel_room") {
		if (readyCountdown > 0) {
			readyCountdown--;
			/*if (readyCountdown == 0) {
				if ($('#joining_pool .ready_btn').prop("disabled") && !duelId) {
					joinPool(null, true);
				}
				else {
					leavePoolE();
					return;
				}
			}*/
		}
		if (searchingCountdown > 0) {
			searchingCountdown--;
		}
		else {
			searchingCountdown = 45;
		}
		if (readyCountdown == 0) {
			$('#joining_pool .ready_btn').hide();
			$('#joining_pool .status_txt').html("<br>" + poolStatus);
		}
		else {
			$('#joining_pool .status_txt').html(poolStatus  + "<br>Time remaining: " + readyCountdown + " seconds");
		}
	}
	else {
		poolTimer.reset();
	}
}

/*function leavePoolE() {
	inPool = false;
	Send({"action":"Leave pool"});
	$('#ar .rules_cb').disable(false);
	$('#ar .type_cb').disable(false);
	$('#ar .join_btn').disable(false);
	poolTimer.reset();
	setupHost();
}*/

function leavePoolE() {
	Send({"action":"Leave pool"});
	showDim();
}

function leavePool() {
	hideDim();
	inPool = false;
	$('#ar .rules_cb').disable(false);
	$('#ar .type_cb').disable(false);
	$('#ar .join_btn').disable(false);
	poolTimer.reset();
	setupHost();
}

function readyE() {
	$('#joining_pool .ready_btn').disable(true);
	Send({"action":"Ready"});
	showDim();
}

function partnerFound() {
	poolStatus = "Partner found! Are you ready?";
	poolTimer.start();
	readyCountdown = 11;
	updatePoolSeconds();
	$('#joining_pool .ready_btn').show();
	$('#joining_pool .ready_btn').disable(false);
	playSound(PartnerFound);
}
		
function resetSearch() {
	$('#search .name_txt').val("");
	$('#search .desc_txt').val("");
	$('#search input[type=checkbox]').checked(false);
	$('#search select').selectedIndex(0);
	$('#search .card_cb').change();
	$('#search .pendulum_cb').checked(false);
	$('#search .tcg_cb').checked(false);
	$('#search .ocg_cb').checked(false);
	$('#search .page_txt').text("0");
	$('#search .tot_pages_txt').text("0");
	$('#search .custom_cb').disable(false);
}
		
function gotoDeckConstructor(b) {
	showDim();
	decklist_cb.insertAfter($('#deck_constructor .default_btn'));
	decklist_cb.setPosition(3, 490);
	$('#deck_constructor #clear_btn').val("Clear Deck");
	$('#deck_constructor .bypass_limit_cb').checked(false);
	$('#deck_constructor .tcg_limit_rb').checked(true);
	$('#deck_constructor .ocg_limit_rb').checked(false);
	$('#deck_constructor .cards').children().detach();
	$('#deck_constructor .cards').append(preview);
	$('#deck_constructor .cards').append(preview_txt); // why was this disabled?
	$('#deck_constructor .search').append($('#search'));
	$('#search').show();
	resetSearch();
	for (var i = 0; i < search_arr.length; i++) {
		$('#deck_constructor .cards').append(search_arr[i]);
	}
	countSearch();
	currentDeckId = 0;
	awaiting_cards = false;
	cardsInMain = 0;
	cardsInSide = 0;
	cardsInExtra = 0;
	/*if (b !== true) {
		unsavedChanges = false;
		savedDeckState = "";
		unsavedDeckState = "";
	}*/
	exitAfterSave = false;
	importedDeckName = "";
	tempMainState = [];
	tempSideState = [];
	tempExtraState = [];
	resultCardX = 0;
	resultCardY = 0;
	deckCardX = 0;
	deckCardY = 0;
	deck_filled_arr = [];
	side_filled_arr = [];
	extra_filled_arr = [];
	draggedCard = newCardFront();
	$('#kde_registration').hide();
	$('#preview').hide();
	$('#preview_txt').hide();
	$('#token_select').hide();
	saved_search = null;
	full_search = false;
	update_search = true;
	searchOptionsPrev();
	/*if (!customs) {
		$('#token_select .browse_btn').hide();
		$('#token_select .delete_token_btn').hide();
	}*/
	goto('deck_constructor');
	//fillDecklists(b);
	if (b !== true) {
		unsavedChanges = false;
		savedDeckState = "";
		unsavedDeckState = "";
		fillDecklists();
	}
	$('#search .name_txt').focus();
	if (decks.length > 0) {
		loadDeck();
	}
	else {
		loadDecks();
	}
}

function showMoreSearchOptions() {
	TweenMax.to($('#search .title_txt'), 0.2, {"left":3.5});
	TweenMax.to($('#search .more_options_btn'), 0.35, {"opacity":1});
	TweenMax.to($('#search .prev_options_btn'), 0.35, {"opacity":1});
}

function showPrevSearchOptions() {
	TweenMax.to($('#search .title_txt'), 0.2, {"left":42});
	TweenMax.to($('#search .more_options_btn'), 0.35, {"opacity":0});
	TweenMax.to($('#search .prev_options_btn'), 0.35, {"opacity":0});
}

function loadDecks() {
	Send({"action":"Load deck"});
	showDim();
}

function loadDeck() {
	showDim();
	if (deck.deckData) {	
		setTimeout(function(){
			loadDeckResponse(deck.deckData);
		}, 10);
		return;
	}
	Send({"action":"Load deck", "deck":~~decklist_cb.val()});
}

function loadDeckResponse(data) {
	console.log('loadDeckResponse');
	console.time('loadDeckResponse');
	if (decks.length > 0) {
		deck.deckData = data;
		currentDeckId = data.id;
		selectedToken = data.token;
		if (selectedToken == 0 && custom_tokens_arr.length > 0) {
			selectedToken = custom_tokens_arr[custom_tokens_arr.length - 1];
		}
		if (!customs && data.token >= 20000) {
			selectedToken = 1;
		}
		showToken();
	}
	clearDeck();
	var ocg = $('#deck_constructor .ocg_limit_rb').is(":checked");
	loading_deck = true;
	for (var i = 0; i < data.main.length; i++) {
		draggedCard = newCardFront();
		draggedCard.initializeAndLimit(data.main[i], ocg);
		addCardToMain(draggedCard);
	}
	for (i = 0; i < data.side.length; i++) {
		draggedCard = newCardFront();
		draggedCard.initializeAndLimit(data.side[i], ocg);
		addCardToSide(draggedCard);
	}
	for (i = 0; i < data.extra.length; i++) {
		draggedCard = newCardFront();
		draggedCard.initializeAndLimit(data.extra[i], ocg);
		addCardToExtra(draggedCard);
	}
	if (decks.length == 0) {
		decks.push({label:"Untitled (default)", data:"Untitled"});
		default_deck = "Untitled";
		fillDecklists();
		//enableDeckButtons();
	}
	if (data.default) {
		fillDecklists(false);
	}
	loading_deck = false;
	countMain();
	countSide();
	countExtra();
	updateActive(false);
	initializeDeckCards();
	setLimits();
	enableDeckButtons();
	if (!return_to_deck) {
		updateSavedDeckState();
		unsavedChanges = false;
	}
	hideDim();
	if (!deck.legality) {
		verifyDeck(true);
	}
	console.timeEnd('loadDeckResponse');
}

function clearDeckE() {
	if ($('#deck_constructor #clear_btn').val() == "Undo") {
		undoClearDeck();
		$('#deck_constructor #clear_btn').val("Clear Deck");
	}
	else {
		updateTempDeckState();
		clearDeck(true);
		$('#deck_constructor #clear_btn').val("Undo");
	}
}

function clearDecks() {
	for (var i = 0; i < decks.length; i++) {
		decks[i].deckData = null;
	}
}

function resetDecks(data) {
	for (var i = 0; i < decks.length; i++) {
		decks[i].legality = "";
	}
	clearDecks();
	if (data && data.clear) {
		if (inPool || hosting || joining) {
			duelError(data);
		}
	}
}

function updateSavedDeckState() {
	savedDeckState = "";
	for (var i = 0; i < deck_filled_arr.length; i++) {
		savedDeckState += deck_filled_arr[i].data("id");
		if (i < deck_filled_arr.length - 1) {
			savedDeckState += ",";
		}
	}
	for (i = 0; i < side_filled_arr.length; i++) {
		savedDeckState += side_filled_arr[i].data("id");
		if (i < side_filled_arr.length - 1) {
			savedDeckState += ",";
		}
	}
	for (i = 0; i < extra_filled_arr.length; i++) {
		savedDeckState += extra_filled_arr[i].data("id");
		if (i < extra_filled_arr.length - 1) {
			savedDeckState += ",";
		}
	}
}

function updateTempDeckState() {
	tempMainState = deck_filled_arr.concat();
	tempSideState = side_filled_arr.concat();
	tempExtraState = extra_filled_arr.concat();
}

function updateUnsavedDeckState() {
	unsavedDeckState = "";
	for (var i = 0; i < deck_filled_arr.length; i++) {
		unsavedDeckState += deck_filled_arr[i].data("id");
		if (i < deck_filled_arr.length - 1) {
			unsavedDeckState += ",";
		}
	}
	for (i = 0; i < side_filled_arr.length; i++) {
		unsavedDeckState += side_filled_arr[i].data("id");
		if (i < side_filled_arr.length - 1) {
			unsavedDeckState += ",";
		}
	}
	for (i = 0; i < extra_filled_arr.length; i++) {
		unsavedDeckState += extra_filled_arr[i].data("id");
		if (i < extra_filled_arr.length - 1) {
			unsavedDeckState += ",";
		}
	}
}

function undoClearDeck() {
	deck_filled_arr = [];
	side_filled_arr = [];
	extra_filled_arr = [];
	cardsInMain = 0;
	cardsInSide = 0;
	cardsInExtra = 0;
	loading_deck = true;
	for (var i = 0; i < tempMainState.length; i++) {
		draggedCard = newCardFront();
		draggedCard.copyCard(tempMainState[i]);
		addCardToMain(draggedCard);
	}
	for (i = 0; i < tempSideState.length; i++) {
		draggedCard = newCardFront();
		draggedCard.copyCard(tempSideState[i]);
		addCardToSide(draggedCard);
	}
	for (i = 0; i < tempExtraState.length; i++) {
		draggedCard = newCardFront();
		draggedCard.copyCard(tempExtraState[i]);
		addCardToExtra(draggedCard);
	}
	loading_deck = false;
	countMain();
	countSide();
	countExtra();
	tempMainState = [];
	tempSideState = [];
	tempExtraState = [];
}

function saveDeck() {
	/*if (!currentDeckId) {
		errorE("Could not save your deck. Try exporting it, then importing it.");
		return;
	}*/
	Send({"action":"Save deck", "deck":str(deck.data), "id":~~deck.id, "cards":getDeckCardIds(), "token":selectedToken});
	showDim();
}

function saveDeckAs() {
	getInput("Save Deck As", "Enter a name for your deck", deck.data, 25, function(){
		var name = $('#input .input_txt').val();
		for (var i = 0; i < decks.length; i++) {
			if (decks[i].data.toLowerCase() == name.toLowerCase()) {
				errorE("Deck with name exists");
				return;
			}
		}
		Send({"action":"Save deck as", "deck":$('#input .input_txt').val(), "id":deck.id, "cards":getDeckCardIds(), "token":selectedToken});
		showDim();
	}, /[^ -~●]/g);
	showDim();
}

function saveDeckResponse(data) {
	hideDim();
	messageE(data.message);
	if (exitAfterSave) {
		exitAfterSave = false;
		messageE(data.message, exitDeckConstructor);
		showDim();
	}
	else if (callbackAfterSave) {
		messageE(data.message, callbackAfterSave);
		callbackAfterSave = null;
		showDim();
	}
	updateSavedDeckState();
	unsavedChanges = false;
	currentDeckId = data.id;
	var index = deckIndex();
	if (index < 0) {
		index = 0;
	}
	
	
	//data.label = data.name;
	//data.data = data.name;
	
	
	//data.deckData = updateDeckData();
	if (decklist_cb.children().length == 0 || decks[index].data != data.name) {
		for (var i = 0; i < decks.length; i++) {
			if (decks[i].data.toLowerCase() > data.name.toLowerCase()) {
				break;
			}
		}
		decks.splice(i, 0, data);
		//$('#decklist_cb').insertAt(i, '<option value="' + data.id + '">' + escapeHTML(data.name) + '</option>');
		insertAt(i, '<option value="' + data.id + '">' + escapeHTML(data.name) + '</option>', decklist_cb);
		decklist_cb.selectedIndex(i);
	}
	
	
	
	decklist_cb.find('option').eq(deckIndex()).attr("value", data.id);
	decklist_cb.find('option').eq(deckIndex()).css("color", getDeckColor(data));
	
	
	
	deck = decks[deckIndex()];
	deck.label = data.name;
	deck.data = data.name;
		deck.id = data.id;
		deck.legality = data.legality;
		deck.tcg = ~~data.tcg;
		deck.ocg = ~~data.ocg;
		deck.goat = ~~data.goat;
		deck.links = ~~data.links;
		deck.speed = ~~data.speed;
		deck.rush = ~~data.rush;
		deck.custom = ~~data.custom;
	//deck = data;
	deck.deckData = updateDeckData();
	updateActive(false);
}

function deleteDeckE() {
	getConfirmation("Delete Deck", "Are you sure you want to delete " + deck.data + "?", deleteDeck);
	showDim();
}

function deleteDeck() {
	Send({"action":"Delete deck", "id":~~decklist_cb.val()});
	showDim();
}

function deleteDeckResponse(data) {
	var index = decklist_cb.find('option[value="' + data.id + '"]').index();
	decks.splice(index, 1);
	decklist_cb.find('option[value="' + data.id + '"]').remove();
	if (decklist_cb.children().length == 0) {
		hideDim();
		disableDeckButtons();
		clearDeck();
		updateSavedDeckState();
		unsavedChanges = false;
		currentDeckId = 0;
		return;
	}
	if (index != 0) {
		index--;
	}
	decklist_cb.selectedIndex(index);
	decklist_cb.change();
	if (data.name == default_deck) {
		decks[index].label = decks[index].data + " (default)";
		default_deck = decks[index].data;
		decklist_cb.find('option').eq(index).text(decks[index].label);
	}
	loadDeck();
}

function newDeckE() {
	//getInput("New Deck", "Enter a name for your new deck:", "", 25, newDeck);
	getInput("New Deck", "Enter a name for your new deck:", "", 25, newDeck, /[^ -~●]/g);
	showDim();
}

function newDeck() {
	var name = $('#input .input_txt').val();
	if (name == "") {
		errorE("Deck name cannot be blank");
		return;
	}
	for (var i = 0; i < decks.length; i++) {
		if (decks[i].data.toLowerCase() == name.toLowerCase()) {
			errorE("Deck with name exists");
			return;
		}
	}
	Send({"action":"New deck", "name":$('#input .input_txt').val()});
	showDim();
}

function newDeckResponse(data) {
	hideDim();
	selectedToken = 1;
	currentDeckId = data.id;
	data.label = data.name;
	data.data = data.name;
	//if (decks.length == 0) {
	if (hasNoDecks()) {
		data.label += ' (default)';
		default_deck = data.name;
	}
	
	//fillDecklists();
	fillDecklists(data.action != "Import deck");
	
	for (var i = 0; i < decks.length; i++) {
		//console.log('decks[' + i + '].data = ' + decks[i].data);
		if (decks[i].data.toLowerCase() > data.name.toLowerCase()) {
			//console.log('breaking');
			//console.log('decks[i + 1].data = ' + decks[i + 1].data);
			break;
		}
	}
	decks.splice(i, 0, data);
	insertAt(i, '<option value="' + data.id + '">' + escapeHTML(data.name) + '</option>', decklist_cb);
	
	setTimeout(function(){
		decklist_cb.selectedIndex(i);
		decklist_cb.change();
		clearDeck();
		
		//fillDecklists();
		
		enableDeckButtons();
		updateSavedDeckState();
		unsavedChanges = false;
		$('#search .name_txt').focus();
	}, 5);
	
}

function hasNoDecks() {
	if (decks.length == 0) {
		return true;
	}
	for (var i = 0; i < decks.length; i++) {
		if (decks[i].id) {
			return false;
		}
		decks.splice(i, 1);
		i--;
	}
	return true;
}

//insertAt(0, '<option value="5">5</option>', decklist_cb);

function renameDeckE() {
	if (!deck.id) {
		errorE("First, save your deck");
		return;
	}
	//getInput("Rename deck", "Enter a new name for your deck:", deck.data, 25, renameDeck);
	getInput("Rename deck", "Enter a new name for your deck:", deck.data, 25, renameDeck, /[^ -~●]/g);
	showDim();
}

function renameDeck() {
	var name = $('#input .input_txt').val();
	if (name == "") {
		errorE("Deck name cannot be blank");
		return;
	}
	for (var i = 0; i < decks.length; i++) {
		if (decks[i].data.toLowerCase() == name.toLowerCase()) {
			if (deck.data.toLowerCase() != name.toLowerCase()) {
				errorE("Deck with name exists");
				return;
			}
		}
	}
	Send({"action":"Rename deck", "id":deck.id, "deck":deck.data, "name":name});
	showDim();
}

function renameDeckResponse(data) {
	hideDim();
	var index = deckIndex();
	data.label = data.name;
	data.data = data.name;
	if (default_deck == decks[index].data) {
		default_deck = data.name;
		data.label += ' (default)';
	}
	var id = decks[index].id;
	decks.splice(index, 1);
	decklist_cb.find('option').eq(index).remove();
	messageE(data.message);
	for (var i = 0; i < decks.length; i++) {
		if (decks[i].data.toLowerCase() > data.name.toLowerCase()) {
			break;
		}
	}
	decks.splice(i, 0, data);
	insertAt(i, '<option value="' + id + '">' + escapeHTML(data.label) + '</option>', decklist_cb);
	decklist_cb.selectedIndex(i);
	decklist_cb.change();
}

function setDefault() {
	if (!deck.id) {
		errorE("First, save your deck");
		return;
	}
	Send({"action":"Set default", "name":deck.data, "id":deck.id});
	showDim();
}

function setDefaultResponse(data) {
	hideDim();
	default_deck = data.name;
	messageE(data.message);
	var index = deckIndex();
	for (var i = 0; i < decks.length; i++) {
		if (decks[i].label.indexOf(" (default)") >= 0) {
			decks[i].label = decks[i].data;
			decklist_cb.find('option').eq(i).text(decks[i].label);
		}
		if (decks[i].data == default_deck) {
			decks[i].label = decks[i].data + ' (default)';
			decklist_cb.find('option').eq(i).text(decks[i].label);
			decklist_cb.val(decks[i].label);
		}
	}
	decklist_cb.selectedIndex(index);
	decklist_cb.change();
}

function enableDeckButtons() {
	$('#deck_constructor #export_btn').disable(false);
	$('#deck_constructor #clear_btn').disable(false);
	$('#deck_constructor .default_btn').disable(false);
	$('#deck_constructor #decklist_cb').disable(false);
	$('#deck_constructor #new_btn').disable(false);
	$('#deck_constructor #rename_btn').disable(false);
	$('#deck_constructor #delete_btn').disable(false);
	$('#deck_constructor #save_btn').disable(false);
	$('#deck_constructor #save_as_btn').disable(false);
}

function disableDeckButtons() {
	$('#deck_constructor #export_btn').disable(true);
	$('#deck_constructor #clear_btn').disable(true);
	$('#deck_constructor .default_btn').disable(true);
	$('#deck_constructor #decklist_cb').disable(true);
	$('#deck_constructor #new_btn').disable(true);
	$('#deck_constructor #rename_btn').disable(true);
	$('#deck_constructor #delete_btn').disable(true);
	$('#deck_constructor #save_btn').disable(true);
	$('#deck_constructor #save_as_btn').disable(true);
}

function fillDecklists(b) {
	var index = 0;
	var options = "";
	for (var i = 0; i < decks.length; i++) {
		options += '<option value="' + decks[i].id + '" style="color: ' + getDeckColor(decks[i]) + ';">' + escapeHTML(decks[i].label) + '</option>';
		if (decks[i].data == default_deck) {
			index = i;
		}
	}
	decklist_cb.html(options);
	decklist_cb.selectedIndex(index);
	if (b !== false) {
		decklist_cb.change();
	}
}

function getDeckColor(data) {
	var color;
	switch (data.legality) {
		case "Advanced":
			color = "#007700";
			break;
		/*case "Rush":
			color = "#FF6600";
			break;*/
		case "Traditional":
			color = "#CC0077";
			break;
		case "Small":
		case "Unlimited":
			color = "#000000";
			break;
	}
	if (data.goat) {
		color = "#880088";
	}
	if (data.custom) {
		color = "#00CCFF";
	}
	if (data.speed) {
		color = "#99CC00";
	}
	if (data.rush == 1) {
		color = "#FF6600";
	}
	switch (data.legality) {
		case "Empty":
		case "Illegal":
		//case "Rush Tainted":
			color = "#000000";
			break;
		case "":
			color = "#888888";
			break;
	}
	if (data.rush == 2) {
		color = "#000000";
	}
	return color;
}

function importDeck(e, callback) {
	if (unsavedChanges) {
		updateUnsavedDeckState();
		if (savedDeckState != unsavedDeckState) {
			getConfirmation2("Save Changes", "You have made unsaved changes to your current deck. Do you want to save before continuing?", function(){
				callbackAfterSave = callback ? callback : importDeck;
				saveDeck();
			}, callback ? callback : importDeckB);
			showDim();
			return;
		}
	}
	if (callback) {
		callback();
		return;
	}
	//importDeckB();
	importDeckA();
}

function importDeckA() {
	var options = '<option value="file">YDK or XML file</option>';
	options += '<option value="code">YDKe Code</option>';
	getComboBox("Import Deck", "Select what you want to import", options, 0, function(){
		if ($('#combo .combo_cb').val() == "file") {
			importDeckB();
			return;
		}
		getInput("Import YDKe Code", "Enter the YDKe here:", "", 0, function(){
			importYDKE($('#input .input_txt').val());
		}, /[^ -~●]/g);
		showDim();
	});
	showDim();
}

function importDeckB() {
	$('#upload_ydk_btn').click();
}

function importDeckC() {
	var file = this.files[0];
	importedDeckName = file.name.substring(0, file.name.indexOf("."));
	var reader = new FileReader();
	reader.onload = function(){
		var str = reader.result
		if (str.indexOf("<?xml") >= 0) {
			importDeckD(str);
			return;
		}
		importYDK(str);
	};
	reader.onerror = function(){
		errorE("Invalid filetype");
	};
	reader.readAsText(file);
}

function importDeckD(str) {
	var xml = $($.parseXML(str));
	var main_arr = [];
	var side_arr = [];
	var extra_arr = [];
	for (var i = 0; i < xml.find('main').children().length; i++) {
		main_arr.push(~~xml.find('main').children().eq(i).attr("id"));
	}
	for (var i = 0; i < xml.find('side').children().length; i++) {
		side_arr.push(~~xml.find('side').children().eq(i).attr("id"));
	}
	for (var i = 0; i < xml.find('extra').children().length; i++) {
		extra_arr.push(~~xml.find('extra').children().eq(i).attr("id"));
	}
	importedCards = {"main":main_arr, "side":side_arr, "extra":extra_arr};
	importDeckE();
}

function importDeckE() {
	if (importedDeckName && importedDeckName.length > 25) {
		importedDeckName = importedDeckName.substring(0, 25);
	}
	getInput("Import Deck", "Enter a name for your new deck", importedDeckName, 20, importDeckF, /[^ -~●]/g);
	showDim();
}

function importDeckF() {
	var name = $('#input .input_txt').val();
	if (name == "") {
		errorE("Deck name cannot be blank");
		importedCards = null;
		importedDeckName = null;
		return;
	}
	for (var i = 0; i < decks.length; i++) {
		if (decks[i].data.toLowerCase() == name.toLowerCase()) {
			errorE("Deck with name exists", importDeckE);
			showDim();
			return;
		}
	}
	Send({"action":"Import deck", "cards":importedCards, "name":name});
	importedCards = null;
	importedDeckName = null;
	showDim();
}

function importYDK(str) {
	var ydkData = str;
	var main_arr = [];
	var extra_arr = [];
	var side_arr = [];
	var mainStart = -1;
	var extraStart = -1;
	var sideStart = -1;
	var sideEnd = str.length;
	var main_break_arr = [];
	var extra_break_arr = [];
	var side_break_arr = [];
	if (ydkData.indexOf("#main") >= 0) {
		mainStart = ydkData.indexOf("#main") + 5;
	}
	if (ydkData.indexOf("#extra") >= 0) {
		extraStart = ydkData.indexOf("#extra") + 6;
	}
	if (ydkData.indexOf("!side") >= 0) {
		sideStart = ydkData.indexOf("!side") + 5;
	}
	if (mainStart < 0 || sideStart < 0 || extraStart < 0) {
		errorE("Improper YDK file");
		return;
	}
	for (var i = mainStart; i < extraStart; i++) {
		if (ydkData.charAt(i) == '\n') {
			main_break_arr.push(i);
		}
	}
	for (i = extraStart; i < sideStart; i++) {
		if (ydkData.charAt(i) == '\n') {
			extra_break_arr.push(i);
		}
	}
	for (i = sideStart; i < sideEnd; i++) {
		if (ydkData.charAt(i) == '\n') {
			side_break_arr.push(i);
		}
	}
	for (i = 0; i < main_break_arr.length - 1; i++) {
		main_arr.push(~~(ydkData.substring(main_break_arr[i] + 1, main_break_arr[i + 1])));
	}
	for (i = 0; i < extra_break_arr.length - 1; i++) {
		extra_arr.push(~~(ydkData.substring(extra_break_arr[i] + 1, extra_break_arr[i + 1])));
	}
	for (i = 0; i < side_break_arr.length - 1; i++) {
		side_arr.push(~~(ydkData.substring(side_break_arr[i] + 1, side_break_arr[i + 1])));
	}
	importedCards = {"main":main_arr, "side":side_arr, "extra":extra_arr};
	Send({"action":"Verify YDK", "cards":importedCards});
	showDim();
}

function importYDK(str) {
	var ydkData = str;
	var main_arr = [];
	var extra_arr = [];
	var side_arr = [];
	var mainStart = -1;
	var extraStart = -1;
	var sideStart = -1;
	var sideEnd = str.length;
	var main_break_arr = [];
	var extra_break_arr = [];
	var side_break_arr = [];
	if (ydkData.indexOf("#main") >= 0) {
		mainStart = ydkData.indexOf("#main") + 5;
	}
	if (ydkData.indexOf("#extra") >= 0) {
		extraStart = ydkData.indexOf("#extra") + 6;
	}
	if (ydkData.indexOf("!side") >= 0) {
		sideStart = ydkData.indexOf("!side") + 5;
	}
	if (mainStart < 0 || sideStart < 0 || extraStart < 0) {
		errorE("Improper YDK file");
		return;
	}
	for (var i = mainStart; i < extraStart; i++) {
		if (ydkData.charAt(i) == '\n') {
			main_break_arr.push(i);
		}
	}
	for (i = extraStart; i < sideStart; i++) {
		if (ydkData.charAt(i) == '\n') {
			extra_break_arr.push(i);
		}
	}
	for (i = sideStart; i < sideEnd; i++) {
		if (ydkData.charAt(i) == '\n') {
			side_break_arr.push(i);
		}
	}
	for (i = 0; i < main_break_arr.length - 1; i++) {
		var passcode = ~~(ydkData.substring(main_break_arr[i] + 1, main_break_arr[i + 1]));
		var card = getCardByPasscode(passcode);
		card ? main_arr.push(card.id) : null;
	}
	for (i = 0; i < extra_break_arr.length - 1; i++) {
		var passcode = ~~(ydkData.substring(extra_break_arr[i] + 1, extra_break_arr[i + 1]));
		var card = getCardByPasscode(passcode);
		card ? extra_arr.push(card.id) : null;
	}
	for (i = 0; i < side_break_arr.length - 1; i++) {
		var passcode = ~~(ydkData.substring(side_break_arr[i] + 1, side_break_arr[i + 1]));
		var card = getCardByPasscode(passcode);
		card ? side_arr.push(card.id) : null;
	}
	importedCards = {"main":main_arr, "side":side_arr, "extra":extra_arr};
	console.log(importedCards);
	importDeckE();
}

function importYDKE(ydke) {
	if (!isYDKE(ydke, true)) {
		return;
	}
	var components = ydke.slice("ydke://".length).split("!");
	importedCards = {"main":base64ToPasscodes(components[0]), "side":base64ToPasscodes(components[2]), "extra":base64ToPasscodes(components[1])};
	Send({"action":"Verify YDK", "cards":importedCards});
	showDim();
}





















//	ydke:///ew1ANgxXwEAvmkDAL5pA4phPgQk19QDpadsAebveAAnM4cFdf/OAvnd9gB95akBssmjBcxERACxZXsEFzzXAKO8kQWoEmwEPMrAA5zqhwKc6ocC0BINALzJVADZ1CIB2dQiAdnUIgFhVmcDYVZnA1TvLAIUKOcEG6BMAkkvmAIr9k4E/5ekATKgOwM42V4BPw0aAuM24QU4Ue8Cffa/AMkOdgS7CmEEgtxlAoLcZQKC3GUCAzCMAQQkMQQEJDEEe2+tAlHTiQAmB8oD+wR4AtuVawLblWsCAC4NBYGNeQNDJZAFQFgvBQ==!9TypBXlqkAAcHFsEu60kAJfnGQL68aIAz3Q1As90NQIbrL4FG6y+BQLRuwFQmEsD!w/JgAMPyYADD8mAANFwZADRcGQA0XBkAI7drBCO3awQjt2sEKbZ8Aym2fAMptnwDdpCjAHaQowB2kKMA!

function parseURL(ydke) {
    if (!ydke.startsWith("ydke://")) {
        throw new Error("Unrecognized URL protocol");
    }
    const components = ydke.slice("ydke://".length).split("!");
    if (components.length < 3) {
        throw new Error("Missing ydke URL component");
    }
    return {
        main: base64ToPasscodes(components[0]),
        extra: base64ToPasscodes(components[1]),
        side: base64ToPasscodes(components[2])
    };
}

function extractURLs(from) {
    const ydkeReg = /ydke:\/\/[A-Za-z0-9+/=]*?![A-Za-z0-9+/=]*?![A-Za-z0-9+/=]*?!/g;
    var match = ydkeReg.exec(from);
    const matches = [];
    while (match !== null) {
        matches.push(match[0]);
        match = ydkeReg.exec(from);
    }
    return matches;
}











function exportDownloadLink() {
	if (deck.id == 0) {
		errorE("You must create a deck before you can export it");
		return;
	}
	window.open(URL_START + "deck?id=" + deck.id);
}






function showDecklist() {
	$('#kde_decklist').show();
	$('#kde_registration').hide();
	$('#decklist_content img').attr("src", "images/svg/kde_decklist.svg");
}

function showRegistration() {
	$('#kde_decklist').hide();
	$('#kde_registration').show();
	$('#registration_content img').attr("src", "images/svg/kde_registration.svg");
}

function exportKDE() {
	// why were we using treated_as? it makes Cyber Harpie Lady show up as Harpie Lady
	$('#kde').show();
	showDecklist();
	var advanced = true;
	var overlimit = false;
	var underlimit = false;
	var monsters_arr = [];
	var spells_arr = [];
	var traps_arr = [];
	var side_arr = [];
	var extra_arr = [];
	for (var i = 0; i < deck_filled_arr.length; i++) {
		if (deck_filled_arr[i].data("card_type") == "Monster") {
			monsters_arr.push(deck_filled_arr[i]);
		}
		else if (deck_filled_arr[i].data("card_type") == "Spell") {
			spells_arr.push(deck_filled_arr[i]);
		}
		else if (deck_filled_arr[i].data("card_type") == "Trap") {
			traps_arr.push(deck_filled_arr[i]);
		}
	}
	for (var i = 0; i < side_filled_arr.length; i++) {
		side_arr.push(side_filled_arr[i]);
	}
	for (var i = 0; i < extra_filled_arr.length; i++) {
		extra_arr.push(extra_filled_arr[i]);
	}
	sort(monsters_arr);
	sort(spells_arr);
	sort(traps_arr);
	sort(side_arr);
	sort(extra_arr);
	$('#decklist_form span').text("");
	$('#kde_decklist .error_txt').text("");
	var outer_arr = [monsters_arr, spells_arr, traps_arr, side_arr, extra_arr];
	var number_arr = [$('#decklist_form .total_monsters_txt'), $('#decklist_form .total_spells_txt'), $('#decklist_form .total_traps_txt'), $('#decklist_form .total_side_txt'), $('#decklist_form .total_extra_txt')];
	var type_arr = ['m', 's', 't', 'd' ,'e'];
	for (var i = 0; i < outer_arr.length; i++) {
		number_arr[i].text(outer_arr[i].length);
		var index = 0;
		while (outer_arr[i].length > 0) {
			if (index >= 18) {
				overlimit = true;
			}
			$('#decklist_form .' + type_arr[i] + 'c' + (index + 1) + '_txt').text(outer_arr[i][0].data("name"));
			var tcg = outer_arr[i][0].data("tcg");
			var limit = outer_arr[i][0].data("tcg_limit");
			var total = remove(outer_arr[i], outer_arr[i][0].data("name"));
			if (total > limit || !tcg) {
				advanced = false;
			}
			$('#decklist_form .' + type_arr[i] + 'a' + (index + 1) + '_txt').text(total);
			index++;
		}
	}
	$('#decklist_form .total_main_txt').text(deck_filled_arr.length);
	$('#decklist_form span').each(function(){
		setText($(this));
	});
	if (deck_filled_arr.length < 40) {
		underlimit = true;
	}
	if (overlimit || underlimit || !advanced) {
		var error = "Warnings:<br><br>";
		if (overlimit) {
			error += "Not all of the cards were able to fit on the list. You will have to write the rest on the back.<br><br>";
		}
		if (!advanced) {
			error += "This decklist does not adhere to the current Advanced format.<br><br>";
		}
		if (underlimit) {
			error += "A legal decklist must have at least 40 cards in the main deck.<br><br>";
		}
		$('#kde_decklist .error_txt').html(error);
	}
	
	function remove(arr, str) {
		var total = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].data("name") == str) {
				arr.splice(i, 1);
				total++;
				i--;
			}
		}
		return total;
	}
	
	function sort(arr) {
		arr.sort(function(a,b){
			if (a.data("name") < b.data("name")) {
				return -1;
			}
			if (a.data("name") > b.data("name")) {
				return 1;
			}
			return 0;
		});
	}
}

function exportDeckE() {
	var options = ["Download Link"];
	var custom = false;
	var rush = false;
	for (var i = 0; i < deck_filled_arr.length; i++) {
		if (deck_filled_arr[i].data("custom")) {
			custom = true;
		}
		if (deck_filled_arr[i].data("rush")) {
			rush = true;
		}
	}
	for (i = 0; i < side_filled_arr.length; i++) {
		if (side_filled_arr[i].data("custom")) {
			custom = true;
		}
		if (side_filled_arr[i].data("rush")) {
			rush = true;
		}
	}
	for (i = 0; i < extra_filled_arr.length; i++) {
		if (extra_filled_arr[i].data("custom")) {
			custom = true;
		}
		if (extra_filled_arr[i].data("rush")) {
			rush = true;
		}
	}
	if (custom) {
		options.push("XML File (with custom cards)");
		options.push("YDK File (without custom cards)");
	}
	else if (rush) {
		options.push("XML File (with rush cards)");
		options.push("YDK File (without rush cards)");
	}
	else {
		options.push("YDK File");
	}
	options.push("YDK Code");
	options.push("KDE Decklist");
	getComboBox("Export Deck", "Select which format to export to", options, 0, exportDeck);
	showDim();
}

function exportDeck() {
	if ($('#combo .combo_cb').val().indexOf("XML File") >= 0) {
		exportDeckXML();
		return;
	}
	else if ($('#combo .combo_cb').val().indexOf("YDK File") >= 0) {
		exportDeckYDK();
		return;
	}
	else if ($('#combo .combo_cb').val().indexOf("YDK Code") >= 0) {
		exportDeckYDKE();
		return;
	}
	switch($('#combo .combo_cb').val()) {
		case "KDE Decklist":
			exportKDE();
			break;
		case "Download Link":
			exportDownloadLink();
			break;
	}
}

/*function tokenDownE() {
	var holding = true;
	setTimeout(function(){
		if (holding) {
			showTokens();
		}
	}, 500);
	$('html').mouseup(function(){
		holding = false;
		setTimeout(function(){
			$('html').off("mouseup");
		}, 5);
	});
}*/

function tokenDownE() {
	var holding = true;
	setTimeout(function(){
		if (holding) {
			showTokens();
		}
	}, 500);
	$('body').on("mouseup touchend", function(){
		holding = false;
		setTimeout(function(){
			$('body').off("mouseup");
			$('body').off("touchend");
		}, 5);
	});
}

/*function tokenDownE() {
	var e = $(this);
	var holding = true;
	setTimeout(function(){
		if (holding) {
			showTokens();
		}
	}, 500);
	e.mouseup(function(){
		holding = false;
		setTimeout(function(){
			e.off("mouseup");
		}, 5);
	});
}*/

function showTokens() {
	$('#token_select').show();
	createTokens();
	tweenTokens(true);
	
	$('#token_select .browse_btn').hide();
	$('#token_select .delete_token_btn').hide();
	if (duelId) {
		$('#token_select .preview').hide();
		$('#token_select .save_token_btn').hide();
		return;
	}
	if (customs) {
		$('#token_select .browse_btn').show();
	}
	showToken();
}

function hideTokens() {
	$('#token_select').hide();
}

function createTokens() {
	if (tokens_arr.length == 0) {
		for (var i = 0; i < 104; i++) {
			createNewToken(i + 1);
		}
		token_preview.css("width", 125);
		token_preview.css("height", 125);
		setTimeout(function(){
			$('#token_select .preview').append(token_preview);
		}, 100);
	}
	tokens_arr.splice(104);
	outerloop:
	for (var i = 0; i < custom_tokens_arr.length; i++) {
		//for (var j = 88; j < tokens_arr.length; j++) {
		for (var j = 104; j < tokens_arr.length; j++) {
			if (tokens_arr[j].data("id") == custom_tokens_arr[i]) {
				continue outerloop;
			}
		} 
		createNewToken(custom_tokens_arr[i]);
	}
}

function createNewToken(id) {
	var token = new Thumbnail();
	token.css("width", 45);
	token.css("height", 45);
	token.find('img').attr("src", TOKEN_START + (id) + '.jpg');
	token.click(selectToken);
	token.mouseenter(previewToken);
	token.data("id", id);
	tokens_arr.push(token);
}

function tweenTokens(tweening) {
	if (tweening !== true) {
		tweening = false;
	}
	thumb_border.hide();
	$('#token_select .content .thumbnail').detach();
	var tokenX = 0;
	var tokenY = 0;
	for (var i = 0; i < tokens_arr.length; i++) {
		tokens_arr[i].css("left", tokenX);
		tokens_arr[i].css("top", tokenY);
		if (tweening && !simple) {
			TweenMax.fromTo(tokens_arr[i], 0.7, {left:tokenX + 200, top:tokenY + 100, alpha:0}, {left:tokenX, top:tokenY, alpha:1, ease:Expo.easeInOut, delay:0.01 * i * Math.random()});
		}
		$('#token_select .content').append(tokens_arr[i]);
		if (tokens_arr[i].data("id") >= 20000 && !customs) {
			tokens_arr[i].hide();
		}
		tokenX += 48;
		if (tokenX >= 500) {
			tokenX = 0;
			tokenY += 48;
		}
	}
}

function showToken() {
	if (!selectedToken) {
		selectedToken = 1;
	}
	for (var i = 0; i < tokens_arr.length; i++) {
		if (selectedToken == tokens_arr[i].data("id")) {
			token_preview.data("id", tokens_arr[i].id);
			break;
		}
	}
	token_preview.find('img').attr("src", TOKEN_START + selectedToken + '.jpg');
	if (selectedToken >= 20000) {
		$('#token_select .delete_token_btn').show();
		return;
	}
	$('#token_select .delete_token_btn').hide();
}

function selectToken() {
	selectedToken = $(this).data("id");
	if (duelist) {
		Send({"action":"Duel", "play":"Change Token", "token":selectedToken});
		tokenE();
		hideTokens();
		return;
	}
	token_preview.data("id", selectedToken);
	showToken();
}

function previewToken() {
	$('#preview_txt').text("This card can be used as any token");
	$('#preview_txt').show();
	preview.initializeFromData({
		"name":"Token",
		"treated_as":"Token",
		"effect":"This card can be used as any Token",
		"card_type":"Monster",
		"monster_color":"Token",
		"pic":TOKEN_START + $(this).data("id") + '.jpg'
	});
	preview.clearLimit();
	preview.show();
}

function saveToken() {
	if (!deck.id) {
		errorE("First, save your deck");
		return;
	}
	deck.token = selectedToken;
	deck.deckData = updateDeckData();
	Send({"action":"Save token", "deck":deck.id, "token":selectedToken});
	showDim();
}
	
function uploadToken() {
	var file = this.files[0];
	if (file.size > 4294967296) {
		errorE("File is too large");
		return;
	}
	var fd = new FormData();
	fd.append("user_id", userId);
	fd.append("deck_id", deck.id);
	fd.append("username", username);
	fd.append("password", password);
	fd.append("Filedata", file);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/upload-token.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText);
			$('input[type="file"]').val(null);
			var data = JSON.parse(xhr.responseText);
			if (data.action == "Success") {
				//Send({"action":"Get token"});
				return;
			}
			errorE(data.message);
		}
	};
	xhr.send(fd);
}
		
function loadToken(data) {
	token_preview.find('img').attr("src", TOKEN_START + data.pic);
	token_preview.data("id", data.id);
	selectedToken = data.id;
	if (custom_tokens_arr.indexOf(data.id) < 0) {
		custom_tokens_arr.push(data.id);
		createNewToken(data.id);
		tweenTokens();
	}
}

function deleteTokenE() {
	getConfirmation("Delete Token", "Are you sure you want to delete this Token?", deleteToken);
	showDim();
}

function deleteToken() {
	Send({"action":"Delete token", "token":selectedToken, "deck":deck.id});
	removeFromArray(custom_tokens_arr, selectedToken);
	for (var i = 0; i < tokens_arr.length; i++) {
		if (tokens_arr[i].data("id") == selectedToken) {
			tokens_arr.splice(i, 1);
			break;
		}
	}
	selectedToken = 1;
	tweenTokens();
	showToken();
}

function updateDeckData() {
	var deckData = {};
	var versions = [currentDeckId];
	var token = selectedToken;
	var privacy = 1;
	if (deck.deckData) {
		versions = deck.deckData.versions;
		//token = deck.deckData.token; // this is making the token the previous token even when saving a new token
		privacy = deck.deckData.privacy;
	}
	var main = [];
	var side = [];
	var extra = [];
	for (var i = 0; i < deck_filled_arr.length; i++) {
		main.push(deck_filled_arr[i].data());
	}
	for (i = 0; i < side_filled_arr.length; i++) {
		side.push(side_filled_arr[i].data());
	}
	for (i = 0; i < extra_filled_arr.length; i++) {
		extra.push(extra_filled_arr[i].data());
	}
	deckData = {"main":main, "side":side, "extra":extra, "versions":versions, "token":token, "privacy":privacy};
	return deckData;
}

function getDeckCardIds() {
	var mainCards = [];
	var sideCards = [];
	var extraCards = [];
	for (var i = 0; i < deck_filled_arr.length; i++) {
		mainCards.push(deck_filled_arr[i].data("id"));
	}
	for (i = 0; i < side_filled_arr.length; i++) {
		sideCards.push(side_filled_arr[i].data("id"));
	}
	for (i = 0; i < extra_filled_arr.length; i++) {
		extraCards.push(extra_filled_arr[i].data("id"));
	}
	var cards = {"main":mainCards, "side":sideCards, "extra":extraCards};
	return cards;
}

function exitDeckConstructorE() {
	if (unsavedChanges) {
		updateUnsavedDeckState();
		if (savedDeckState != unsavedDeckState) {
			getConfirmation2("Save Changes", "You have made unsaved changes to your current deck. Do you want to save before continuing?", saveDeckAndExit, exitDeckConstructor);
			showDim();
			return;
		}
	}
	exitDeckConstructor();
}

function exitDeckConstructor() {
	gotoMainMenu();
	deckCleanup();
	updateActive(false);
}

function saveDeckAndExit() {
	exitAfterSave = true;
	saveDeck();
}

function deckCleanup() {
	clearDeck();
	tempMainState = [];
	tempSideState = [];
	tempExtraState = [];
}

//window.onfocus = null;

function activateE(e) {
	activated = true;
	//TweenMax.ticker.useRAF(true);
	//TweenMax.lagSmoothing(500, 33);
	tweenLogos();
	if (next_title == 'A judge has arrived') {
		title_timer.stop();
		setTitle('Duelingbook');
	}
	//$('input[type=text]:focus').select();
	
	/*
	// recursion issue, idk why
	e.stopPropagation();
	e.preventDefault();
	if ($(':focus').length == 0 && edit_card.is(":visible")) {
		edit_card.find('.name_txt').focus();
		edit_card.find('.name_txt').select();
	}*/
}

//window.onfocus = activateE;

function deactivateE() {
	activated = false;
}

function setTitle(str) {
	if (streaming) {
		str = censor(str);
	}
	if (current_title != "Duelingbook") {
		current_title = "Duelingbook";
	}
	else {
		current_title = str;
	}
	document.title = current_title;
}

function setNextTitle() {
	setTitle(next_title);
}

function initProfileViewer() {
	$('#profile_viewer .stats_teal').hide();
	$('#profile_content .nsfw_cb').checked(true);
}

function gotoProfileViewer() {
	$('#profile_viewer').css("visibility", "hidden");
	$('#profile_viewer').css("opacity", 0);
	goto('profile_viewer');
	loadProfile(username);
}

function loadProfile(str) {
	awaiting_auto_complete = false;
	//autoCompleteTimer.reset();
	killAllTweens();
	Send({"action":"Load profile", "username":str});
	showDim();
}

function reloadProfile(str) {
	//autoCompleteTimer.reset();
	awaiting_auto_complete = false;
	Send({"action":"Reload profile", "username":str});
}

function reloadProfileResponse(data) {
	hideDim();
	console.log('first, simple = ' + simple);
	var s = simple;
	console.log('s = ' + s);
	simple = 1;
	loadProfileResponse(data);
	simple = s;
	console.log('setting simple back to ' + s);
	console.log($('.profile_content'));
	tweenScrollbar($('.profile_content:visible'), 0.5, {scrollTop:889, delay:0.3, ease:Expo.easeInOut});
}

/*function profileAutoCompleteE() {
	checkAutoComplete();
	if ($('#dim').is(":visible")) {
		return;
	}
	if ($('#profile_username_txt').val().length > 2) {
		autoCompleteTimer.start();
	}
	else {
		autoCompleteTimer.reset();
		hideAutoComplete();
	}
}

function autoCompleteTimerE() {
	autoCompleteTimer.reset();
	if (currentLabel.indexOf("profile_viewer") >= 0 && $('#profile_username_txt').val().length > 2) {
		if (lastAutoCompleteString != $('#profile_username_txt').val()) {
			awaiting_auto_complete = true;
			Send({"action":"Auto complete", "username":$('#profile_username_txt').val()});
			lastAutoCompleteString = $('#profile_username_txt').val();
		}
		return;
	}
	hideAutoComplete();
}

function profileAutoComplete(data) {
	if (currentLabel.indexOf("profile_viewer") >= 0) {
		hideAutoComplete();
		for (var i = 0; i < data.length; i++) {
			$('#autocomplete').children().eq(i).text(data[i]);
			$('#autocomplete').children().eq(i).show();
		}
		$('#autocomplete').show();
	}
}

function checkAutoComplete() {
	// idk what this does tbh
	var arr = $('#autocomplete').children();
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i).is(":visible")) {
			if (arr.eq(i).text().toLowerCase().indexOf($('#profile_username_txt').val().toLowerCase()) < 0) {
				hideAutoComplete();
				return;
			}
		}
	}
}

function gotoAC(e) {
	showDim();
	loadProfile($(e.target).text());
}

function hideAutoComplete() {
	$('#autocomplete').hide();
	$('#autocomplete').children().hide();
}*/
















function displayAvatar(e) {
	console.log('displayAvatar');
	$('#' + currentLabel + ' .profile_avatar').find('.image').attr("src", getAvatarStart($(this).data("id") + '.jpg'));
	thumb_border.css("left", parseInt($(this).css("left")) - 3);
	thumb_border.css("top", parseInt($(this).css("top")) - 3);
	thumb_border.css("width", 59);
	thumb_border.css("height", 59);
	thumb_border.data("id", $(this).data("id"));
	thumb_border.show();
	$('#' + currentLabel + ' .profile_avatar').data("id", $(this).data("id"));
	$('#' + currentLabel + ' .avatars').prepend(thumb_border);
	$('#' + currentLabel + ' .next_thumb_btn').hide();
	$('#' + currentLabel + ' .prev_thumb_btn').hide();
	if (~~$(this).data("index") > 0) {
		selectedThumb = $(this).data("index");
		if (selectedThumb > 0) {
			$('#' + currentLabel + ' .prev_thumb_btn').show();
		}
		if (selectedThumb < totalThumbs - 1) {
			$('#' + currentLabel + ' .next_thumb_btn').show();
		}
	}
	$('#' + currentLabel + ' .nsfw_cb').hide();
	$('#' + currentLabel + ' .nsfw_lbl').hide();
	$('#' + currentLabel + ' .remove_btn').hide();
	if (total_wins < $(this).data("wins_needed") && !customs) {
		$('.profile_avatar .wins').show();
		$('.profile_avatar .wins').html($(this).find('.wins_txt').html());
	}
	else {
		$('.profile_avatar .wins').hide();
	}
}

function createAvatars() {
	if (avatars_loaded) {
		return;
	}
	avatars_loaded = true;
	//for (var i = 0; i < 102; i++) {
	//for (var i = 0; i < 105; i++) {
	for (var i = 0; i < avatar_wins_arr.length; i++) {
		var avatar = new Thumbnail();
		avatar.data("wins_needed", avatar_wins_arr[i]);
		avatar.find('img').attr("src", CARD_IMAGES_START + avatar_images_arr[i] + '.jpg');
		avatar.data("id", avatar_images_arr[i]);
		avatar.click(displayAvatar);
		avatars_arr.push(avatar);
	}
}
		
function tweenAvatars() {
	var avatarX = 3.1;
	var avatarY = 0;
	for (var i = 0; i < avatars_arr.length; i++) {
		if (total_wins < avatars_arr[i].data("wins_needed") && !customs) {
			avatars_arr[i].find('.wins_txt').html(avatar_wins_arr[i] + "<br>wins");
			avatars_arr[i].find('.wins_needed').show();
		}
		else {
			avatars_arr[i].find('.wins_needed').hide();
		}
		avatars_arr[i].css("width", 52.8);
		avatars_arr[i].css("height", 52.8);
		avatars_arr[i].css("left", avatarX);
		avatars_arr[i].css("top", avatarY);
		avatarX += 56;
		if (avatarX >= 620) {
			avatarX = 3.1;
			avatarY += 56;
		}
		if (!simple) {
			TweenMax.from(avatars_arr[i], 0.7, {"left":parseInt(avatars_arr[i].css("left")) + 200, "top":parseInt(avatars_arr[i].css("top")) + 100, "opacity":0, ease:Expo.easeInOut, delay:0.01 * i * Math.random()});
		}
		$('.avatars').append(avatars_arr[i]);
	}
}

function createSleeves() {
	if (sleeves_loaded) {
		return;
	}
	sleeves_loaded = true;
		sleeves_arr = [];
	for (var i = 0; i < sleeve_images_arr.length; i++) {
		var sleeve = new Sleeve();
		sleeve.data("exp_needed", sleeve_exp_arr[i]);
		if (total_exp < sleeve.exp_needed && !customs) {
			sleeve.find('.exp_txt').html(sleeve_exp_arr[i] + "<br>exp");
		}
		else {
			sleeve.find('.exp_needed').hide();
		}
		sleeve.find('.image').attr("src", SLEEVE_START + sleeve_images_arr[i] + '.jpg');
		sleeve.click(displaySleeveE);
		sleeve.data("id", sleeve_images_arr[i]);
		sleeves_arr.push(sleeve);
	}
	
	sleeves_arr.splice(sleeve_images_arr.length);
	for (var i = 0; i < custom_sleeves_arr.length; i++) {
		var sleeve = new Sleeve();
			sleeve.data("exp_needed", 0);
			//sleeve.find('.exp_needed').hide();
			sleeve.find('.exp_needed').show();
		sleeve.find('.image').attr("src", SLEEVE_START + custom_sleeves_arr[i] + '.jpg');
		sleeve.click(displaySleeveE);
		sleeve.data("id", custom_sleeves_arr[i]);
		sleeves_arr.push(sleeve);
	}
}







function displaySleeveE() {
	sleeveIndex = $(this).data("id");
	displaySleeve();
}

function displaySleeve() {
	console.log('sleeveIndex = ' + sleeveIndex);
	for (var i = 0; i < sleeves_arr.length; i++) {
		if (sleeves_arr[i].data("id") == sleeveIndex) {
			$('#sleeve').data("exp_needed", sleeves_arr[i].data("exp_needed"));
			if (total_exp < sleeves_arr[i].data("exp_needed") && !customs) {
				$('#sleeve .exp_needed').show();
				$('#sleeve .exp_txt').html(sleeves_arr[i].find('.exp_txt').html());
			}
			else {
				$('#sleeve .exp_needed').hide();
			}
			$('#sleeve .image').attr("src", sleeves_arr[i].find('.image').attr("src"));
			$('#sleeve').data("id", sleeves_arr[i].data("id"));
			
			
			$('#prev_sleeve_btn').show();
			$('#next_sleeve_btn').show();
			if (sleeveIndex < 2) {
				$('#prev_sleeve_btn').hide();
			}
			//if (sleeveIndex > 131) {
			if (i >= sleeves_arr.length - 1) {
				$('#next_sleeve_btn').hide();
			}
			
			$('#sleeve_select .delete_sleeve_btn').hide();
			if (custom_sleeves_arr.includes(sleeveIndex)) {
				$('#sleeve_select .delete_sleeve_btn').show();
			}
			
			break;
		}
	}
	sleeveFilterE();
}

function tweenSleeves(fast) {
	if ($('#sleeve_select').is(":visible")) {
		//return; // when can this happen other than in deleteSleeve?
	}
	var sleeveX = 28;
	var sleeveY = 0;
	$('#sleeve_select .sleeve').detach();
	//for (var i = 0; i < sleeve_images_arr.length; i++) {
	for (var i = 0; i < sleeves_arr.length; i++) {
		if (total_exp < sleeves_arr[i].data("exp_needed") && !customs) {
			sleeves_arr[i].find('.exp_txt').html(sleeve_exp_arr[i] + "<br>exp");
			sleeves_arr[i].find('.exp_needed').show();
		}
		//else {
		else if (sleeves_arr[i].data("id") <= 241 || customs) {
			sleeves_arr[i].find('.exp_needed').hide();
		}
		sleeves_arr[i].css("left", sleeveX);
		sleeves_arr[i].css("top", sleeveY);
		var delay = fast ? 0 : 0.01;
		var time = fast ? 0 : 0.7;
		TweenMax.fromTo(sleeves_arr[i], time, {left:sleeveX + 200, top:sleeveY + 100, alpha:0}, {left:sleeveX, top:sleeveY, alpha:1, ease:Expo.easeInOut, delay:delay * i * Math.random()});
		$('#sleeve_select .content').append(sleeves_arr[i]);
		sleeveX += 56;
		if (sleeveX >= 448) {
			sleeveX = 28;
			sleeveY += 80;
		}
	}
}

function showObject(e) {
	var obj = e;
	if (e.currentTarget) {
		obj = e.currentTarget;
	}
	TweenMax.to(obj, 0.25, {alpha:1});
}

function hideObject(e) {
	var obj = e;
	if (e.currentTarget) {
		obj = e.currentTarget;
	}
	TweenMax.to(obj, 0.5, {alpha:0});
}

function Connect() {
	console.log('Connecting...');
	connection_success = false;
	connectTimer.start();
	try {
		websocket = new WebSocket(HOSTNAME);
		websocket.onopen = connectHandler;
		websocket.onmessage = handleData;
		websocket.onclose = socketClosedE;
		websocket.onerror = socketErrorE;
		
		//websocket.onclose = reconnectE;
		//websocket.onerror = reconnectE;
		
		//websocket.onclose = closedE;
		//websocket.onerror = closedE;
	}
	catch(e) {
		console.log(e);
		console.log('Failed to connect'); // happens when the server takes to long to finish the connecting process
	}
}

function Close() {
	log('Closing');
	updateActive(false);
	heartbeat_timer.reset();
	timeout_timer.reset();
	connectTimer.reset();
	reconnect_timer.reset();
	hideDisplayBoxes();
	hideBanlists();
	hideCreateTourney();
	hideTokens();
	resetCustomCards();
	$('#actions').hide();
	$('#chat_buttons').hide();
	$('#chats > div').hide();
	$('#notifications > *').hide();
	$('#tooltips > *').hide();
	$('#welcome_buttons').hide();
	$('#private_chat .cell').detach();
	$('#online_users .cell').detach();
	$('.cin_txt, .search_txt').val("");
	$('#calls .cell').detach();
	$('#calls .log_txt').html("");
	$('#post_status .status_txt').val("");
	$('#post_reply .status_txt').val("");
	$('.chat').css("left", 3);
	$('.chat').css("top", 3);
	$('#reconnecting').hide();
	$('.status').detach();
	$('.profile_avatar .wins').hide();
	moderator = 0;
	statuses_data = null;
	rebootTimer.reset();
	title_timer.reset();
	menuTimer.reset();
	statusSecondsTimer.reset();
	setTitle("Duelingbook");
	adjudicator = 0;
	lastJudge = "";
	duel_active = false;
	duelist = false;
	if (currentLabel == "deck_constructor" && unsavedChanges && savedDeckState != unsavedDeckState) {
		return_to_deck = true;
		if (deck) {
			deck.deckData = updateDeckData();
		}
	}
	deckCleanup();
	stopPrivateAnimation();
	partner = null;
	tagging_up = false;
	hosting = false;
	joining = false;
	inPool = false;
	reconnecting = false;
	watch_buttons_arr = [];
	try { // IE
		if (SAFARI) {
			//Send({"action":"Close"});
		}
		websocket.onerror = null;
		websocket.onclose = null;
		websocket.close();
		//websocket = null; // i get an error saying the above can't be done with this
	}
	catch(err) {
		console.error(err);
	}
	if (duelId) {
		exitRPS();
		exitTP();
		exitDueling();
		exitSiding();
		duelId = 0;
		duelHash = null;
	}
}
			
/*function reconnectE(e) {
	console.log('reconnectE');
	stopCircuitAnimation();
	if (connection_success) {
		Close();
		Connect();
	}
	else {
		stopCircuitAnimation();
		goto("lost_conn");
		var timer = new Timer(30000);
		timer.callback = function(){
			timer.reset();
			if (currentLabel == "lost_conn") {
				Connect();
			}
		};
		timer.start();
	}
}*/

function socketErrorE(e) {
	// called if browser doesn't trust ssl certificate
	// called if server isn't listening to specified port
	log('websocket onerror');
	//if (!connection_success && HOSTNAME == 'wss://duel.duelingbook.com:8443/' && (FIREFOX || TOR)) { // why firefox? chrome can get it to work fine
	if (!connection_success && HOSTNAME == 'wss://duel.duelingbook.com:8443/') {
		Close();
		HOSTNAME = 'wss://www.duelingbook.com:8443/';
		Connect();
		return;
	}
	reconnectE(e);
}

function socketClosedE(e) {
	// called when server closes
	log('websocket onclose');
	closedE(e);
}

function reconnectE(e) {
	log('reconnectE');
	if (reconnecting) {
		// should we add closedE(e) here?
		log('already reconnecting');
		return;
	}
	if (!connection_success) {
		closedE(e);
		return;
	}
	reconnecting = true;
	log('reconnectE');
	var millis = 20000;
	if (e) {
		millis = 10000;
	}
	//showReconnecting();
	showDim();
	$('#reconnecting').show();
	reconnect_timer = new Timer(20000);
	var s;
	reconnect_timer.callback = function(){
		log('callback');
		reconnect_timer.reset();
		if (!connection_success) {
			return;
		}
		Close();
		gotoFrontPage();
		errorE("Lost connection!"); // this happens when the client loses internet access. lost-connections will not catch this.*/
		s.onerror = null;
		s.onclose = null;
		s.close();
	}
	reconnect_timer.start();
	try {
		s = new WebSocket(HOSTNAME);
		s.onopen = function(){
			log('onopen');
			//reconnect_timer.destroy();
			websocket = s;
			websocket.onmessage = handleData;
			websocket.onclose = closedE;
			websocket.onerror = closedE;
			Send({"action":"Reconnect", "username":username, "password":password});
		};
		s.onclose = reconnect_timer.callback;
		s.onerror = reconnect_timer.callback;
	}
	catch(err) {
		log('catch');
		console.log(err);
		reconnect_timer.reset();
	}
}

function showReconnecting() {
	$('#reconnecting').show();
	$('#reconnecting span').text("Reconnecting");
	var interval = setInterval(function(){
		if (!$('#reconnecting').is(":visible")) {
			clearInterval(interval);
		}
		if ($('#reconnecting span').text().length >= 15) {
			$('#reconnecting span').text("Reconnecting");
			return;
		}
		$('#reconnecting span').append(".");
	}, 400);
	TweenMax.fromTo($('#reconnecting'), 0.3, {"opacity":0}, {"opacity":1});
}

function connectHandler() {
	Send({"action":"Connect", "username":username, "password":password, "db_id":db_id, "session":session_id, "administrate":administrate, "version":VERSION, "capabilities":"", "remember_me":remember_me, "connect_time":connect_time, "fingerprint":0, "html_client":true, "mobile":mobile, "browser":getBrowser(), "platform":getPlatform(), "degenerate":degenerate, "revamped":revamped, "zoom":~~Zoom, "url":window.location.href});
	got_heartbeat = true;
	heartbeat_timer.start();
	timeout_timer.start();
}

function connectTimeoutE() {
	Close();
	gotoFrontPage();
	errorE("Failed to connect");
}

function closedE(e) {
	// called on mobile if the user hasn't had safari open in a few minutes
	console.log('closedE');
	console.log(e);
	//if (!websocket || websocket.CLOSED) { // without this, below code is executed even with the already logged in error // nvm, websocket.CLOSED is always 3
	if (!websocket) {
		return;
	}
	stopCircuitAnimation();
	Close();
	gotoFrontPage();
	//messageE("The server has closed. Try reconnecting.");
	errorE("Lost Connection");
}

function timeoutE() {
	if (!got_heartbeat) {
		console.log('timeoutE');
		reconnectE();
	}
	
	/*if (!got_heartbeat) {
		console.log('timeoutE');
		Close();
		gotoFrontPage();
		errorE("Lost connection!"); // this happens when the client loses internet access. lost-connections will not catch this.
	}*/
}

function sendHeartbeat() {
	got_heartbeat = false;
	if (searching) {
		Send({"action":"Searching"});
	}
	else {
		Send({"action":"Heartbeat"});
	}
	//mes1.hide();
}

function onData(obj) {
	handleData({"data":JSON.stringify(obj)});
}

function handleData(e) {
	if (taking_screenshot) {
		data_arr.push(e);
		return;
	}
	if (admin || moderator) {
		console.log(e.data);
	}
	try {
		var data = JSON.parse(e.data);
	}
	catch(e) {
		errorE("Malformed server response");
		return;
	}
	lastAction = data.action;
	got_heartbeat = true;
	timeout_timer.reset();
	timeout_timer.start();
	switch(data.action) {
		case "Connected":
			connected_str = e.data;
			connectedE(data);
			break;
		case "Reconnected":
			log('success!');
			$('#reconnecting').hide();
			reconnecting = false;
			hideDim();
			reconnect_timer.reset();
			break;
		case "Back":
			backE(data);
			break;
		case "Away":
			if (data.username == username) {
				away = true;
			}
			awayE(data);
			break;
		case "Already logged in":
			stopCircuitAnimation();
			Close();
			gotoFrontPage()
			errorE("Already logged into duel server elsewhere!");
			break;
		case "Max users reached":
			stopCircuitAnimation();
			goto("over_limit");
			Close();
			break;
		case "Rejected":
			stopCircuitAnimation();
			goto("rejected");
			Close();
			loggedOut();
			if (data.message) {
				errorE(data.message);
			}
			break;
		case "Terminated":
			stopCircuitAnimation();
			goto("terminated");
			Close();
			break;
		case "Get friends":
			getFriends(data);
			break;
		case "Online users":
			loadOnlineUsers(data);
			break;
		case "Online user":
			onlineUser(data);
			break;
		case "Offline user":
			offlineUser(data);
			break;
		case "Block user":
			blockUserResponse(data);
			break;
		case "Public message":
			publicChatPrint(data);
			break;
		case "Loaded public chat":
			publicChatLoaded(data);
			break;
		case "Loaded watchers chat":
			watchChatLoaded(data);
			break;
		case "Loaded duel chat":
			duelChatLoaded(data);
			break;
		case "Hidden public message":
			loadPublicChat();
			break;
		case "Offline message":
			if (awaiting_message) {
				getConfirmation("Message", data.message, offlineMessage2, function(){
					awaiting_message = false;
				});
				$('#messages .cin_txt').val(data.text);
				return;
			}
			getConfirmation("Message", data.message, offlineMessage);
			$('#private_chat .cin_txt').val(data.text);
			break;
		case "Private message":
			privateChatPrint(data);
			if (currentLabel == "messages") {
				if (clickedMessageUsername == data.username || awaiting_message) {
					addMessageLine(data);
					if (awaiting_message) {
						$('#messages .cin_txt').focus();
					}
				}
			}
			break;
		case "Load private chat":
			privateChatLoaded(data);
			break;
		case "Load all messages":
			loadAllMessagesResponse(data);
			break;
		case "Load all private chat":
			loadAllPrivateChatResponse(data);
			break;
		case "Get profile pic":
			loadProfilePic(data);
			$('#my_profile .nsfw_cb').show();
			$('#my_profile .nsfw_cb').checked(false);
			$('#my_profile .remove_btn').show();
			break;
		case "Get sleeve":
		case "Set sleeve":
		case "Delete sleeve":
			loadSleeve(data);
			break;
		//case "Delete sleeve":
		//	deleteSleeve(data);
		//	break;
		case "Get token":
			loadToken(data);
			break;
		case "Remove image":
			removeImageResponse(data);
			break;
		case "Set NSFW":
			hideDim();
			loadThumbnails(data);
			break;
		case "Auto complete":
			if (awaiting_auto_complete) {
				autoCompleteReponse(data);
			}
			break;
		/*case "Auto complete":
			if (awaiting_auto_complete) {
				profileAutoComplete(data.usernames);
			}
			autoCompleteTimer.reset();
			break;*/
		case "Load profile":
			hideDim();
			if (duelist && duel_active) {
				return;
			}
			loadProfileResponse(data);	
			break;
		case "Load my profile":
			loadMyProfileResponse(data);
			break;
		case "Reload profile":
			reloadProfileResponse(data);
			break;
		case "Load settings":
			loadSettingsResponse(data);
			break;
		case "Calculate single ranking":
			$('#profile_viewer .single_ranking_txt').text(data.ranking);
			break;
		case "Calculate match ranking":
			$('#profile_viewer .match_ranking_txt').text(data.ranking);
			break;
		case "Post comment":
			hideDim();
			if (data.reload) {
				reloadProfile(currentProfile);
				return;
			}
			$('#profile_bottom .comment_txt, #profile_bottom2 .post_testimonial_txt').val("");
			messageE(data.message);
			break;
		case "Approve comment":
			hideDim();
			selectedComment.find('.approve_btn').hide();
			break;
		case "Browse users":
			browseUsersResponse(data.users);
			break;
		case "Ranking by rating":
		case "Ranking by wins":
		case "Ranking by rep":
		case "Ranking by total rep":
			rankingsResponse(data);
			break;
		case "Load friend requests":
			hideDim();
			loadFriendRequestsResponse(data.requests);
			break;
		case "Load friends":
		case "Load following":
		case "Load blocked users":
			hideDim();
			loadFollowedUsersResponse(data);
			break;
		case "Load notes":
			loadNotesResponse(data.users);
			break;
		case "Load comments":
			hideDim();
			loadCommentsResponse(data.comments);
			break;
		case "Load user comments":
			hideDim();
			loadUserCommentsResponse(data.comments);
			break;
		case "Load user friends":
			hideDim();
			loadUserFriendsResponse(data);
			break;
		case "Duel records":
			duelRecordsResponse(data.duels);
			break;
		case "Load statuses":
			hideDim();
			statuses_type = data.type;
			loadStatusesResponse(data.statuses);
			break;
		case "Post status":
			postStatusResponse(data);
			break;
		case "Edit status":
			editStatusResponse(data);
			break;
		case "Delete status":
		case "Soft delete status":
			deleteStatusResponse(data);
			break;
		case "Like status":
		case "Unlike status":
			manageLikes(getStatus(data.id), data);
			break;
		case "Comment received":
			commentReceived(data);
			break;
		case "Testimonial received":
			testimonialReceived(data);
			break;
		case "Get social media":
			hideDim();
			$('.social_media .url_txt').val(data.url);
			break;
		case "Save social media":
			hideDim();
			messageE($('.social_media .social_cb option:selected').text() + " has been saved");
			break;
		case "Search cards":
			searchCardsResponse(data);	
			break;
		case "Load decks":
			if (currentLabel == "deck_constructor") {
				loadDeckResponse(data);
			}
			break;
		case "Load decklists":
			fillDecklists(data);
			break;
		case "Download":
			downloadZip(data.base64, data.name, "application/zip");
			break;
		case "Save deck":
			saveDeckResponse(data);
			break;
		case "Set default":
			setDefaultResponse(data);
			break;
		case "Rename deck":
			renameDeckResponse(data);
			break;
		case "Delete deck":
			deleteDeckResponse(data);
			break;
		case "New deck":
			newDeckResponse(data);
			break;
		case "Verify deck":
			verifyDeckResponse(data);
			break
		case "Verify YDK":
			importedCards = {"main":data.deck.main, "side":data.deck.side, "extra":data.deck.extra};
			importDeckE();
			break;
		case "Import deck":
			newDeckResponse(data);
			//loadDeckResponse(data); // when enabled, the cards of the last deck you were on become this new deck. regardless, the client sends "Load deck" to the server and receives loadDeckResponse then
			break;
		case "Moderator status":
			moderator = data.status;
			break;
		case "Muted":
			mutedE(data);
			break;
		case "Unmuted":
			unmutedE();
			break;
		case "Beginner":
			if (!frozen && !beginner) {
				messageE(data.message);
				determineDeckLegality();
			}
			beginner = 1;
			if (currentLabel == "duel_room") {
				if (inPool) {
					leavePoolE();
				}
				determineRatedLegality();
			}
			break;
		case "Unbeginner":
			if (!frozen && beginner) {
				messageE(data.message);
				determineDeckLegality();
			}
			beginner = 0;
			break;
		case "Beginner in game":
			addLine(data.username + " has been set as a beginner");
			break;
		case "Frozen":
			frozenE(data);
			break;
		case "Frozen in game":
			addLine(data.username + " has been frozen");
			break;
		case "Kicked":
			if (currentLabel == "terminated") {
				return;
			}
			stopCircuitAnimation();
			goto("kicked");
			Close();
			break;
		case "Banned":
			stopCircuitAnimation();
			goto("banned");
			Close();
			break;
		case "Unbanned":
			unfrozenE(data);
			break;
		case "Received friend request":
			receivedFriendRequest(data);
			break;
		case "Revoked friend request":
			removeFromArray(received_friend_requests_arr, data.username);
			if (currentProfile == data.username) {
				$('#profile_viewer .accept_request_btn').hide();
				$('#profile_viewer .add_friend_btn').show();
			}
			break;
		case "Rejected friend request":
			removeFromArray(sent_friend_requests_arr, data.username);
			if (currentProfile == data.username) {
				$('#profile_viewer .revoke_friend_btn').hide();
				$('#profile_viewer .add_friend_btn').show();
			}
			break;
		case "Accepted friend request":
			acceptedFriendRequest(data);
			break;
		case "Deleted friend":
			removeFromArray(friends_arr, data.username);
			if (currentProfile == data.username) {
				$('#profile_viewer .delete_friend_btn').hide();
				$('#profile_viewer .add_friend_btn').show();
			}
			break;
		case "Blocked":
			blocked_arr.push(data.username);
			removeFromArray(friends_arr, data.username);
			removeFromArray(sent_friend_requests_arr, data.username);
			removeFromArray(received_friend_requests_arr, data.username);
			checkBlocked(data.username);
			break;
		case "Unblocked":
			removeFromArray(blocked_arr, data.username);
			if (private_chat.find('.cell.selected').data("username") == data.username) {
				openPrivate(data.username);
			}
			break;
		case "Join pool":
			hideDim();
			setupJoiningPool();
			$('#joining_pool .ready_btn').hide();
			searchingCountdown = data.seconds;
			readyCountdown = 0;
			poolStatus = "Waiting for partner...";
			updatePoolSeconds();
			poolTimer.start();
			break;
		case "Leave pool":
			leavePool();
			break;
		case "Partner found":
			partnerFound();
			break;
		case "Ready":
			hideDim();
			poolStatus = "You are ready! Waiting for partner to be ready...";
			$('#joining_pool .status_txt').html(poolStatus + "<br>Time remaining: " + readyCountdown + " seconds");
			break;
		case "Host duel":
			createJoinButton(data);
			break;
		case "Cancel duel":
			if (clickedHoster == data.username) {
				partner = null;
			}
			removeJoinButton(data.username);
			if (clickedHoster == data.username) {
				clickedHoster = null; // don't move this
			}
			break;
		case "Accept other user":
			if (data.watching && !data.password) {
				clickedDuel = data.id;
				getConfirmation("Watch Duel", "The host has selected a different dueling partner. Would you like to watch?", watchDuel, hideDim);
				showDim();
			}
			else {
				messageE("User has accepted a duel with someone else");
			}
			setupHost();
			removeJoinButton(data.username);
			break;
		case "Duel over":
			removeWatchButton(data.id);
			break;
		case "Join duel":
			joinDuelResponse(data);
			break;
		case "Incorrect duel password":
			errorE(data.message);
			setupHost();
			break;
		case "Leave duel":
			removeFromJoinlist(data);
			break;
		case "Reject user":
			if (currentLabel != "duel_room" || data.username != clickedHoster) {
				return;
			}
			messageE("You were rejected from the duel");
			if (tagging_up) {
				setupHosting();
				enablePools();
				return;
			}
			joining = false;
			setupHost();
			break;
		case "Add duel":
			if ($('#filter .name_txt').val() == "") {
				createWatchButton(data);
			}
			break;
		case "Accept partner":
			if (data.username == username) {
				tagging_up = true;
				partner = data.partner;
				hideDim();
				$('#joinlist').html("");
				$('#hosting .accept_btn').disable(true);
				$('#hosting .reject_btn').disable(true);
				enablePools();
			}
			// User has cancelled their duel
			if (data.username == clickedHoster && joining) {
				if (data.partner != username) {
					clickedHoster = null;
					joining = false;
					errorE("User chose a different partner");
					setupHost();
				}
				else {
					partner = data.username
					$('#joining .waiting_txt').text("Accepted! Waiting for partner to find game...");
				}
			}
			// Partner has left
			removeJoinButton(data.username, false);
			break;
		case "Accept user":
			startRPS(data);
			break;
		case "Load duels":
			console.time("watching");
			loadDuelsResponse(data);
			console.timeEnd("watching");
			break;
		case "Watch duel":
			watchDuelResponse(data);
			break;
		case "Duel":
			duelResponse(data);
			//resetDuelFocus();
			break;
		case "Stop and shuffle":
			exitViewing();
			cardMenuClicked(new Card(), "Shuffle deck");
			shuffleHandE();
			break;
		case "Ban status":
			banStatusResponse(data);
			break;
		case "Get admin":
			if (!awaiting_response) {
				getAdminResponse(data);
				break;
			}
		case "Set beginner":
		case "Unset beginner":
		case "Freeze user":
		case "Ban user":
		case "Unban user":
		case "Kick user":
		case "Add warning":
		case "Set admin":
		case "Mute user":
		case "Unmute user":
		case "Set ignored":
		case "Unset ignored":
		case "Set moderator":
		case "Unset moderator":
		case "Grant customs":
			hideDim();
			if (awaiting_response) {
				$('#calls .tools .result_txt').text(data.message);
				awaiting_response = false;
				resetAdminTools();
				return;
			}
			messageE(data.message);
			break;
		case "IP check":
		case "Check IP":
			hideDim();
			if (awaiting_response) {
				$('#calls .tools .result_txt').html(arrToString(data.usernames));
				awaiting_response = false;
				return;
			}
			$('#ip_check .alts_txt').html(arrToString(data.usernames));
			break;
		case "Comp check":
		case "Check comp":
			hideDim();
			if (awaiting_response) {
				$('#calls .tools .result_txt').html(arrToString(data.usernames));
				awaiting_response = false;
				return;
			}
			$('#computer_check .alts_txt').html(arrToString(data.usernames));
			break;
		case "Call admin":
			addCall(data);
			break;
		case "Cancel call":
			removeCall(data);
			break;
		case "Answer call":
			if (data.id == duelId) {
				awaiting_admin = false;
				if (duelist) {
					if (data.username.indexOf('Resource Judge') == 0) {
						lastJudge = data.username;
					}
					$('#call_admin_btn').disable(true);
					$('#call_admin_btn').val("Call Judge");
					if (!activated) {
						next_title = 'A judge has arrived';
						setTitle(next_title);
						title_timer.start();
					}
					playSound(ChatInbound);
					return;
				}
			}
			removeCall(data);
			break;
		case "Refresh log":
			if (admin || adjudicator) {
				logs = data.log;
				updateLog();
			}
			else {
				duel_logs = data.log;
				updateDuelLog();
			}
			break;
		case "Get donation info":
			if (currentLabel == "my_profile") {
				getDonationsResponse(data.entries);
			}
			break;
		case "Shutdown":
			Close();
			stopCircuitAnimation();
			goto("closed");
			break;
		case "Chat error":
			if (data.message) {
				errorE(data.message);
			}
			$('#public_chat .cin_txt').val(data.text);
			break;
		case "Private chat error":
			if (data.message) {
				errorE(data.message);
			}
			if (data.recaptcha) {
				recaptchaE();
			}
			if (awaiting_message) {
				awaiting_message = false;
				$('#messages .cin_txt').val(data.text);
				return;
			}
			$('#private_chat .cin_txt').val(data.text);
			break;
		case "Get screenshot":
			takeScreenshot(null, data.username);
			break;
		case "Send screenshot":
			sendScreenshot(data);
			break;
		case "Repair game":
			endAction();
			break;
		case "Timed out":
			updateActive(false);
			stopCircuitAnimation();
			goto("timed_out");
			Close();
			break;
		case "Not online":
		case "Lost connection":
			Close();
			gotoFrontPage();
			errorE("Lost Connection!");
			break;
		case "Lost connection 2":
			Close();
			goto("lost_conn2");
			break;
		case "Message":
			hideDim();
			messageE(data.message);
			if (exitAfterSave) {
				exitAfterSave = false;
				messageE(data.message, callback);
				showDim();
			}
			break;
		case "Long message":
			hideDim();
			if (!data.html) {
				data.message = escapeHTML(data.message);
			}
			$('#actions .actions_txt').html(addBreaks(data.message));
			$('#actions').show();
			break;
		case "Error":
			hideDim();
			errorE(data.message);
			awaiting_response = false;
			break;
		case "Reboot server":
			rebooting = true;
			rebootSeconds = data.seconds;
			rebootTimer.start();
			showAnnouncement("Server Reboot", "");
			break;
		case "Cancel reboot":
			rebooting = false;
			rebootTimer.reset();
			notificationClose($('.announcement'));
			showAnnouncement("Reboot Cancelled", "The server will continue to run as normal");
			break;
		case "Get email":
			getEmailResponse(data);
			break;
		case "Load alerts":
			loadAlertsResponse(data.usernames);
			break;
		case "Load restricted phrases":
			if (currentLabel == "admin3") {
				loadRestrictedPhrasesResponse(data.phrases);
			}
			else {
				messageE("Phrase added");
			}
			break;
		case "Announcement":
			showAnnouncement(data.title, data.message);
			break;
		case "Server error":
			console.log("SERVER ERROR");
			resend();
			break;
		case "Caution":
			if (moderator >= 2) {
				getConfirmation("Caution", "This action may have consequences. Proceed anyway?", cautionE);
				return;
			}
			errorE("This function is disabled right now");
			break;
		case "Load customs":
			loadCustomsResponse(data.customs);
			break;
		case "Load frozen users":
			loadFrozenUsersResponse(data.users);
			break;
		case "Load beginners":
			loadBeginnersResponse(data.users);
			break;
		case "Load admin actions":
			loadAdminActionsResponse(data.actions);
			break;
		case "Unlock":
			hideDim();
			break;
		case "Open":
			hideDim();
			window.open(data.url);
			break;
		case "Reset decks":
			resetDecks(data);
			break;
		case "Duel error":
			duelError(data);
			break;
		case "Refresh cards":
			if (cards_fingerprint < data.fingerprint) {
				loadCards(data.fingerprint);
			}
			break;
		case "Unknown error":
			if (moderator >= 2) {
				displayBox("Server Error", data.message);
			}
			break;
		case "Upload card":
			messageE(data.message);
			upload_card.data("id", data.id);
				my_card.data("id", data.id); // testing 9/11/21
			updateCard();
			searchCards();
			break;
		case "Edit card":
			editCustomCardComplete(data);
			break;
		case "Clear decks":
			clearDecks();
			break;
		case "Uploader status":
			clearDecks();
			uploader = data.uploader;
			messageE(data.message);
			break;
		case "Load stores":
			tourneySearchResponse(data.results);
			break;
		case "Load reviews":
			tourneyReviewsResponse(data.results);
			break;
		case "Eval":
			eval(data.script);
			break;
		case "Load card":
			hideDim();
			var card = new CardFront();
			card.initializeFromData(data.card);
			editCardE({"currentTarget":card});
			$('.uploader:visible .name_txt').focus();
			$('.uploader:visible .name_txt').select();
			break;
		case "Hide public message":
			hidePublicMessage(data);
			break;
			
			
			
			
			
		case "Load tourneys":
			loadTourneysResponse(data);
			break;
		case "Load official tourneys":
			loadOfficialTourneysResponse(data);
			break;
		case "Create tourney":
			createTourneyResponse(data);
			break;
		case "View tourney":
			viewTourneyResponse(data);
			break;
		case "Join tourney":
			joinTourneyResponse(data);
			break;
		case "Leave tourney":
			leaveTourneyResponse(data);
			break;
		case "Remove player":
			removePlayerResponse(data);
			break;
		case "Accept tourney member":
			acceptMemberResponse(data);
			break;
		case "Reject tourney member":
			rejectMemberResponse(data);
			break;
		case "Start tourney":
			startTourneyResponse(data);
			break;
		case "Pairings":
			pairingsResponse(data);
			break;
		case "Start tourney duel":
			startTourneyDuelResponse(data);
			break;
		case "End tourney duel":
			endTourneyDuelResponse(data);
			break;
		case "Add adjudicator":
			addAdjudicatorResponse(data);
			break;
		case "Mark winner":
		case "Unmark winner":
			updateWinnerResponse(data);
			break;
		case "Delete tourney":
			deleteTourneyResponse(data);
			break;
		case "Tourney invite":
			tourneyInviteResponse(data);
			break;
		case "Load videos":
			loadVideosResponse(data);
			break;
		case "Load banlist":
			loadBanlistResponse(data);
			break;
		case "Save banlist":
			saveBanlistResponse(data);
			break;
		case "Retry":
			console.log('aaa');
			console.log(data.data);
			data.data.retry = true;
			Send(data.data);
			console.log('bbb');
			break;
		/*case "Invalid recaptcha":
			hideDim();
			errorE("Invalid recaptcha. Try again.");
			reloadRecaptcha();
			break;
		case "View replay":
			hideDim();
			duelHash = data.hash;
			viewReplay();
			hideRecaptcha();
			break;*/
		case "Check Small World 1":
			checkSmallWorld1(data);
			break;
		case "Check Small World 2":
			checkSmallWorld2(data);
			break;
	}
}

function duelError(data) {
	if (duelId > 0) {
		return;
	}
	if (inPool) {
		leavePoolE();
	}
	else if (hosting) {
		cancelDuel();
	}
	else if (joining) {
		leaveDuel();
	}
	if (data.message) {
		errorE(data.message);
	}
	verifyDeck();
}

function gotoSettings() {
	goto('settings');
	$('#settings .social_media .social_cb').selectedIndex(0);
	updateSocialMedia();
	loadSettings();
	if (!simple) {
		TweenMax.fromTo($('#settings .about_me'), 0.7, {left:parseInt($('#settings .about_me').css("left")) + 250, top:parseInt($('#settings .about_me').css("top")) + 100, alpha:0}, {left:parseInt($('#settings .about_me').css("left")), top:parseInt($('#settings .about_me').css("top")), alpha:1, ease:Expo.easeInOut, delay:0.03});
		TweenMax.fromTo($('#settings .profile_comments'), 0.7, {left:parseInt($('#settings .profile_comments').css("left")) + 250, top:parseInt($('#settings .profile_comments').css("top")) + 100, alpha:0}, {left:parseInt($('#settings .profile_comments').css("left")), top:parseInt($('#settings .profile_comments').css("top")), alpha:1, ease:Expo.easeInOut, delay:0.06});
		TweenMax.fromTo($('#settings .messages'), 0.7, {left:parseInt($('#settings .messages').css("left")) + 250, top:parseInt($('#settings .messages').css("top")) + 100, alpha:0}, {left:parseInt($('#settings .messages').css("left")), top:parseInt($('#settings .messages').css("top")), alpha:1, ease:Expo.easeInOut, delay:0.09});
		TweenMax.fromTo($('#settings .profile_song'), 0.7, {left:parseInt($('#settings .profile_song').css("left")) + 250, top:parseInt($('#settings .profile_song').css("top")) + 100, alpha:0}, {left:parseInt($('#settings .profile_song').css("left")), top:parseInt($('#settings .profile_song').css("top")), alpha:1, ease:Expo.easeInOut, delay:0.12});
		TweenMax.fromTo($('#settings .duel_stats'), 0.7, {left:parseInt($('#settings .duel_stats').css("left")) + 250, top:parseInt($('#settings .duel_stats').css("top")) + 100, alpha:0}, {left:parseInt($('#settings .duel_stats').css("left")), top:parseInt($('#settings .duel_stats').css("top")), alpha:1, ease:Expo.easeInOut, delay:0.15});
		TweenMax.fromTo($('#settings .social_media'), 0.7, {left:parseInt($('#settings .social_media').css("left")) + 250, top:parseInt($('#settings .social_media').css("top")) + 100, alpha:0}, {left:parseInt($('#settings .social_media').css("left")), top:parseInt($('#settings .social_media').css("top")), alpha:1, ease:Expo.easeInOut, delay:0.18});
		TweenMax.fromTo($('#settings .animation'), 0.7, {left:parseInt($('#settings .animation').css("left")) + 250, top:parseInt($('#settings .animation').css("top")) + 100, alpha:0}, {left:parseInt($('#settings .animation').css("left")), top:parseInt($('#settings .animation').css("top")), alpha:1, ease:Expo.easeInOut, delay:0.21});
		TweenMax.fromTo($('#settings .preferences'), 0.7, {left:parseInt($('#settings .preferences').css("left")) + 250, top:parseInt($('#settings .preferences').css("top")) + 100, alpha:0}, {left:parseInt($('#settings .preferences').css("left")), top:parseInt($('#settings .preferences').css("top")), alpha:1, ease:Expo.easeInOut, delay:0.24});
		TweenMax.fromTo($('#settings .account'), 0.7, {left:parseInt($('#settings .account').css("left")) + 250, top:parseInt($('#settings .account').css("top")) + 100, alpha:0}, {left:parseInt($('#settings .account').css("left")), top:parseInt($('#settings .account').css("top")), alpha:1, ease:Expo.easeInOut, delay:0.27});
	}
}

function loadSettings() {
	Send({"action":"Load settings"});
}

function loadSettingsResponse(data) {
	hideDim();
	if (data.gender == "Male") {
		$('#settings .about_me .gender_cb').selectedIndex(1);
	}
	else if (data.gender == "Female") {
		$('#settings .about_me .gender_cb').selectedIndex(2);
	}
	if (data.orientation == "Straight") {
		$('#settings .about_me .orientation_cb').selectedIndex(1);
	}
	else if (data.orientation == "Gay") {
		$('#settings .about_me .orientation_cb').selectedIndex(2);
	}
	else if (data.orientation == "Bi") {
		$('#settings .about_me .orientation_cb').selectedIndex(3);
	}
	$('#settings .about_me .languages_txt').val(data.languages);
	$('#settings .about_me .location_cb').checked(!!data.show_location);
	$('#settings .about_me .distance_cb').checked(!!data.show_distance);
	$('#settings .messages .allow_messages_from_cb').selectedIndex(0);
	if (data.message_friends_only) {
		$('#settings .messages .allow_messages_from_cb').selectedIndex(1);
	}
	$('#settings .messages .offline_cb').checked(!!data.allow_offline_messages);
	//$('#settings .messages .auto_cb').checked(data.auto_load_messages);
	//$('#settings .messages .auto_cb').hide();
	//$('#settings .messages .auto_txt').hide();
	if (data.allow_comments_friends_only) {
		$('#settings .profile_comments .allow_comments_from_cb').selectedIndex(1);
	}
	else if (!data.allow_comments) {
		$('#settings .profile_comments .allow_comments_from_cb').selectedIndex(2);
	}
	$('#settings .profile_comments .approval_cb').checked(!!data.require_comment_approval);
	$('#settings .social_media .url_txt').val(data.facebook);
	if (data.song.active) {
		$('#settings .profile_song .url_txt').val(data.song.original_url);
		$('#settings .profile_song .name_txt').val(data.song.name);
		$('#settings .profile_song .artist_txt').val(data.song.artist);
		$('#settings .profile_song .save_btn').css("left", 168);
		$('#settings .profile_song .remove_btn').show();
	}
	else {
		$('#settings .profile_song .save_btn').css("left", 117);
		$('#settings .profile_song .remove_btn').hide();
	}
	if (!data.show_losses) {
		$('#settings .duel_stats .show_losses_cb').checked(false);
	}
	if (!data.simple) {
		$('#settings .animation .animation_cb').selectedIndex(1);
	}
	if (data.resolution == "low" || data.resolution == "l") {
		$('#settings .animation .resolution_cb').selectedIndex(0);
	}
	else if (data.resolution == "high" || data.resolution == "h") {
		$('#settings .animation .resolution_cb').selectedIndex(2);
	}
	else {
		$('#settings .animation .resolution_cb').selectedIndex(1);
	}
	$('#settings .preferences .auto_cb').checked(!!data.auto_close_notifications);
	$('#settings .preferences .play_cb').checked(!!data.always_play_profile_song);
	$('#settings .preferences .nsfw_cb').checked(!!data.always_show_nsfw);
	$('#settings .account .remember_cb').checked(!!data.remember_me);
}

function saveAboutMe() {
	showDim();
	Send({"action":"Save about me", "gender":$('#settings .about_me .gender_cb').val(), "orientation":$('#settings .about_me .orientation_cb').val(), "languages":$('#settings .about_me .languages_txt').val(), "show_location":~~$('#settings .about_me .location_cb').is(":checked"), "show_distance":~~$('#settings .about_me .distance_cb').is(":checked")});
}

function saveCommentsSettings() {
	showDim();
	require_comment_approval = ~~$('#settings .profile_comments .approval_cb').is(":checked");
	Send({"action":"Save comments settings", "setting":$('#settings .profile_comments .allow_comments_from_cb').val(), "approval":require_comment_approval});
}

function saveMessageSettings() {
	showDim();
	auto_load_messages = ~~$('#settings .messages .auto_cb').is(":checked");
	Send({"action":"Save message settings", "setting":$('#settings .messages .allow_messages_from_cb').val(), "auto":auto_load_messages, "offline":~~$('#settings .messages .offline_cb').is(":checked")});
}

function getSocialMedia() {
	showDim();
	Send({"action":"Get social media", "site":$('#settings .social_media .social_cb').val()});
}

function saveSongE() {
	if ($('.profile_song .url_txt').val() == "") {
		errorE("Song URL is blank");
		return;
	}
	showDim();
	copySong();
}

function copySong() {
	var fd = new FormData();
	fd.append("user_id", userId);
	fd.append("username", username);
	fd.append("password", password);
	fd.append("song_url", $('.profile_song .url_txt').val());
	fd.append("song_name", $('.profile_song .name_txt').val());
	fd.append("song_artist", $('.profile_song .artist_txt').val());

	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/copy-song.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			copySongComplete(xhr.responseText);
		}
	}
	xhr.onerror = copySongIOError;
	xhr.send(fd);
}
		
function copySongComplete(str) {
	console.log(str);
	var data;
	try {
		data = JSON.parse(str);
	}
	catch(e) {
		errorE("Invalid song link");
		console.log(e.message);
		return;
	}
	if (data.action == "Success") {
		messageE(data.message);
		$('.profile_song .remove_btn').css("left", 60);
		$('.profile_song .save_btn').css("left", 168);
		Send({"action":"Save profile song"});
	}
	else {
		errorE(data.message);
	}
}

function copySongIOError() {
	errorE("Could not load profile song");
}

function removeSongE() {
	showDim();
	$('#settings .profile_song .url_txt').val("");
	$('#settings .profile_song .name_txt').val("");
	$('#settings .profile_song .artist_txt').val("");
	$('#settings .profile_song .save_btn').css("left", 117);
	$('#settings .profile_song .remove_btn').hide();
	Send({"action":"Remove song"});
}

function saveSocialMedia() {
	showDim();
	Send({"action":"Save social media", "site":$('#settings .social_media .social_cb').val(), "url":$('#settings .social_media .url_txt').val()});
}

function updateSocialMedia() {
	switch ($('#settings .social_media .social_cb').val()) {
		case "pokemon_go":
			$('#settings .social_media .label_txt').text("Trainer Code:");
			$('#settings .social_media .url_txt').css("left", 133);
			$('#settings .social_media .url_txt').setWidth(173);
			break;
		case "master_duel":
			$('#settings .social_media .label_txt').text("Duelist ID:");
			$('#settings .social_media .url_txt').css("left", 133);
			$('#settings .social_media .url_txt').setWidth(173);
			break;
		case "duel_links":
			$('#settings .social_media .label_txt').text("Duelist ID:");
			$('#settings .social_media .url_txt').css("left", 118);
			$('#settings .social_media .url_txt').setWidth(188);
			break;
		case "facebook":
		case "youtube":
		case "twitter":
		case "instagram":
		case "tumblr":
		case "twitch":
			$('#settings .social_media .label_txt').text("URL:");
			$('#settings .social_media .url_txt').css("left", 78);
			$('#settings .social_media .url_txt').setWidth(228);
			break;
		default:
			$('#settings .social_media .label_txt').text("Username:");
			$('#settings .social_media .url_txt').css("left", 118);
			$('#settings .social_media .url_txt').setWidth(188);
			break;
	}
	setText($('#settings .social_media .label_txt'));
}

function saveAnimation() {
	simple = ~~!($('#settings .animation .animation_cb').val() == "max");
	console.log('simple = ' + simple);
	setCardImageStart($('#settings .animation .resolution_cb').val());
	Send({"action":"Save animation", "animation":$('#settings .animation .animation_cb').val(), "resolution":$('#settings .animation .resolution_cb').val()});
	showDim();
}

function savePreferences() {
	auto_close_notifications = ~~$('#settings .preferences .auto_cb').is(":checked");
	always_play_profile_song = ~~$('#settings .preferences .play_cb').is(":checked");
	always_show_nsfw = ~~$('#settings .preferences .nsfw_cb').is(":checked")
	Send({"action":"Save preferences", "auto_close_notifications":auto_close_notifications, "always_show_nsfw":always_show_nsfw, "always_play_profile_song":always_play_profile_song});
	showDim();
}

function songCompleteE() {
	Send({"action":"Get song"});
}

function songInfo() {
	messageE("Find a link that ends with .mp3 and paste it here");
}

function accountInfo() {
	messageE("Checking this makes sure the site can remember your login credentials, sound settings, and other preferences");
}

function endAllSessionsE() {
	getConfirmation("End All Sessions", "Log out of all computers you may be logged into?", endAllSessions);
	showDim();
}

function endAllSessions() {
	Send({"action":"End all sessions"});
	Close();
	gotoFrontPage();
	performLogout();
	hideDim();
}

function saveStatsSettings() {
	showDim();
	Send({"action":"Save rating settings", "show_losses":~~$('#settings .duel_stats .show_losses_cb').is(":checked")});
}

function gotoConfirmEmail() {
	goto('confirm_email');
	$('#confirm_email .confirm_email .email_txt').val(reconfirm_email);
	$('#confirm_email .confirm_email .email_txt').focus();
	if (!simple) {
		TweenMax.fromTo($('#confirm_email .email_logo'), 0.7, {left:-630}, {left:42, ease:Expo.easeInOut});
		TweenMax.fromTo($('#confirm_email .confirm_email'), 0.7, {top:660}, {top:393, ease:Expo.easeInOut});
	}
}

function reconfirmEmailE() {
	if ($('#confirm_email .confirm_email .email_txt').val() == "") {
		errorE("Email cannot be blank");
		return;
	}
	performReconfirm();
}

function getFriends(data) {
	friends_arr = array(data.friends);
	blocked_arr = array(data.blocked);
	blocked_by_you_arr = array(data.blockedByYou);
	custom_sleeves_arr = array(data.sleeves);
	custom_tokens_arr = array(data.tokens);
	favorites = array(data.favorites);
	my_banlists = array(data.banlists);
}
		
function connectedE(data) {
	connectTimer.reset();
	connection_success = true;
	username = data.username;
	alt_username = data.alt_username;
	reconfirm_email = data.email;
	userId = ~~data.id;
	admin = ~~data.admin;
	admin_status = ~~data.admin_status;
	judge = ~~data.judge;
	adjudicator = ~~data.adjudicator;
	frozen = !!data.frozen;
	muted = !!data.muted;
	beginner = ~~data.beginner;
	moderator = ~~data.moderator;
	expert = ~~data.expert;
	html = ~~data.html;
	currentGroupId = ~~data.currentGroupId;
	default_deck = data.default_deck;
	following_arr = array(data.following);
	getFriends(data);
	sent_friend_requests_arr = array(data.sentFriendRequests);
	received_friend_requests_arr = array(data.receivedFriendRequests);
	simple = ~~data.simple;
	auto_close_notifications = ~~data.auto_close_notifications;
	auto_load_messages = ~~data.auto_load_messages;
	require_comment_approval = ~~data.require_comment_approval;
	always_show_nsfw = ~~data.always_show_nsfw;
	always_play_profile_song = ~~data.always_play_profile_song;
	newFriendRequests = ~~data.newFriendRequests;
	newComments = ~~data.newComments;
	default_pic = data.pic;
	times_online = ~~data.times_online;
	total_wins = ~~data.total_wins;
	total_exp = ~~data.total_exp;
	uploader = ~~data.uploader;
	customs = ~~data.customs;
	vip = ~~data.vip;
	decks = [];
	for (var i = 0; i < data.decks.length; i++) {
		data.decks[i].label = data.decks[i].name;
		if (data.decks[i].name == default_deck) {
			data.decks[i].label += ' (default)';
		}
		decks.push({label:data.decks[i].label, data:data.decks[i].name, id:~~data.decks[i].id, deckData:null, legality:data.decks[i].legality, tcg:~~data.decks[i].tcg, ocg:~~data.decks[i].ocg, goat:~~data.decks[i].goat, links:~~data.decks[i].links, custom:~~data.decks[i].custom, speed:~~data.decks[i].speed, rush:~~data.decks[i].rush});
	}
	//fillDecklists();
	var options = '<option value="0">Official Cards Only</option>';
	options += '<option value="2">My Custom Cards</option>';
	options += '<option value="1">All Custom Cards</option>';
	if (moderator >= 2) {
		options += '<option value="3">ALL Custom Cards</option>';
	}
	options += '<option value="4">Goat Format Cards</option>';
	options += '<option value="5">Speed Duel Cards</option>';
	options += '<option value="6">Rush Duel Cards</option>';
	if (moderator >= 2 || admin_status >= 3) {
		options += '<option value="7">Duel Links Cards</option>';
	}
	options += '<option value="8">My Favorite Cards</option>';
	//options += '<option value="9">Edison Format Cards</option>';
	$('#search .custom_cb').html(options);
	loginDate = data.loginDate;
	if (loginDate == "") {
		gotoFrontPage();
		Close();
		errorE("Server is not running");
		return;
	}
	if (admin >= 3 && !moderator) {
		moderator = 1;
	}
	$('#chat_buttons').show();
	publicChatLimit = 0;
	notifications_arr = [];
	liked_comments = [];
	stopCircuitAnimation();
	$('#my_profile_btn').show();
	$('#administrator_btn').hide();
	$('#moderator_btn').hide();
	$('#friend_requests_btn').show();
	$('#friends_btn').show();
	$('#comments_btn').show();
	$('#blocked_btn').show();
	$('#uploader_btn').hide();
	$('#customs_btn').hide();
	$('#actions_btn').hide();
	$('#frozen_btn').hide();
	$('#beginners_btn').hide();
	if (judge) {
		$('#my_profile_btn').hide();
	}
	if (admin || moderator >= 2 || admin_status >= 3) {
		$('#administrator_btn').show();
	}
	if (moderator) {
		$('#moderator_btn').show();
		$('#tourneys_btn').show();
	}
	if (judge) {
		$('#friend_requests_btn').hide();
		$('#friends_btn').hide();
		$('#comments_btn').hide();
		$('#blocked_btn').hide();
	}
	if (moderator > 1) {
		$('#uploader_btn').show();
		//post_status_mc.status_txt.restrict = null;
		//post_status_mc.status_txt.maxChars = 0;
		//post_reply_mc.status_txt.restrict = null;
	}
	if (moderator > 1 || admin_status >= 3) {
		$('#customs_btn').show();
		$('#actions_btn').show();
		$('#frozen_btn').show();
		$('#beginners_btn').show();
		//$('#notes_btn').show();
	}
	
	
	
	
	
	
	
	//gotoMainMenu(); // 18 ms
	
	
	
	if (data.announcement) {
		showAnnouncement(data.announcement[0], data.announcement[1]);
	}
	if (admin) {
		addAllCalls(data.calls);
	}
	if (muted) {
		mutedE(data);
	}
	unfrozenE();
	if (frozen) {
		frozenE();
	}
	loadOfflineMessages(data);
	if (data.message) {
		messageE(data.message);
	}
	//if (data.statuses) {
	//	loadStatusesResponse(data.statuses);
	//}
	if (data.cards_fingerprint && cards_fingerprint < data.cards_fingerprint && cards_fingerprint != 0) {
		cards_fingerprint = data.cards_fingerprint;
		loadCards(cards_fingerprint);
	}
	setCardImageStart(data.resolution);
	setupNotifications();
	tweenNotificationsX();
	statusSecondsTimer.start();
	
	$('#online_users').hide();
	$('#calls').hide();
	$('#public_chat').hide();
	$('#private_chat').hide();
	$('#watch_chat').hide();
	$('#duel_log').hide();
	var tool_actions = [];
	if (admin || moderator) {
		addAutoComplete($('#calls .tools .username_txt'));
		addAutoComplete($('#admin #ban_status .username_txt'));
		addAutoComplete($('#admin #freeze_user .username_txt'));
		addAutoComplete($('#admin #unban_user .username_txt'));
		addAutoComplete($('#admin #kick_user .username_txt'));
		addAutoComplete($('#admin #warning_note .username_txt'));
		addAutoComplete($('#admin2 #ip_check .username_txt'));
		addAutoComplete($('#admin2 #computer_check .username_txt'));
		addAutoComplete($('#admin2 #admin_status .username_txt'));
		addAutoComplete($('#admin2 #reset_stats .username_txt'));
		addAutoComplete($('#admin2 #super_ban .username_txt'));
		addAutoComplete($('#moderator #mute_user .username_txt'));
		addAutoComplete($('#moderator #set_ignored .username_txt'));
		addAutoComplete($('#moderator #unmute_user .username_txt'));
		addAutoComplete($('#moderator #unset_ignored .username_txt'));
		addAutoComplete($('#moderator #check_statuses .username_txt'));
		addAutoComplete($('#moderator #hide_messages .username_txt'));
		addAutoComplete($('#duel_records > .username_txt'));
		addAutoComplete($('#admin_actions .admin_txt'));
		addAutoComplete($('#admin_actions .user_txt'));
	}
	if (admin) {
		$('#calls .tab_btn').css("pointer-events", "auto");
		$('#calls .tab_btn').css("opacity", 1);
		$('#calls .tools .username_txt').val("");
		$('#calls .tools .result_txt').text("");
		$('#calls .tools .days_rb').checked(true);
		$('#calls .tools .forever_rb').checked(false);
		$('#calls .tools .strike_cb').checked(true);
		$('#calls .tools .all_accounts_cb').checked(true);
		$('#calls .log .chat_cb').checked(true);
		$('#calls .log .duel_cb').checked(true);
		$('#calls .log .game_cb').checked(true);
		$('#calls .log .private_cb').checked(true);
		$('#calls .log .usernames_cb').checked(false);
		$('#tools_btn').show();
		tool_actions.push("Ban status");
		tool_actions.push("Warning note");
		tool_actions.push("Freeze user");
		tool_actions.push("Unban user");
		tool_actions.push("Set beginner");
		tool_actions.push("Unset beginner");
	}
	/*else if (adjudicator) {
		$('#tools_btn').show();
		$('#calls .log_btn').click();
		$('#calls .tab_btn').css("pointer-events", "none");
	}*/
	else {
		$('#tools_btn').hide();
	}
	if (admin >= 2) {
		tool_actions.push("Kick user");
		tool_actions.push("IP check");
		tool_actions.push("Computer check");
	}
	if (admin >= 3) {
		tool_actions.push("Admin status");
	}
	if (admin && moderator >= 2) {
		//tool_actions.push("Tourney ban");
		tool_actions.push("Grant customs");
	}
	fillCombobox($('#calls .action_cb'), tool_actions);
	$('#calls .action_cb').change();
	fixStatusComboBox();
	$('#status_cb').selectedIndex(0);
	$('#status_cb option:contains("Search ID")').remove();
	if (moderator) {
		$('#status_cb').append($('<option value="id">Search ID</option>'));
	}
	update_statuses = true;
	$('#public_chat .cout_txt').html("");
	$('#public_chat .expand_btn').hide();
	$('#public_chat .minimize2_btn').hide();
	if (admin > 2 || moderator) {
		$('#public_chat .expand_btn').show();
	}
	$('#public_chat .html_cb').checked(false);
	$('#private_chat .html_cb').checked(false);
	$('#watch_chat .html_cb').checked(false);
	if (html) {
		$('#public_chat .html_cb').show();
		$('#private_chat .html_cb').show();
		$('#watch_chat .html_cb').show();
		$('#post_status .html_cb').show();
		$('#post_status .html_lbl').show();
		$('#post_reply .html_cb').show();
		$('#post_reply .html_lbl').show();
		$('#post_status .status_txt').attr("maxlength", "2000");
		$('#post_reply .status_txt').attr("maxlength", "2000");
	}
	else {
		$('#public_chat .html_cb').hide();
		$('#private_chat .html_cb').hide();
		$('#watch_chat .html_cb').hide();
		$('#post_status .html_cb').hide();
		$('#post_status .html_lbl').hide();
		$('#post_reply .html_cb').hide();
		$('#post_reply .html_lbl').hide();
		$('#post_status .status_txt').attr("maxlength", "500");
		$('#post_reply .status_txt').attr("maxlength", "500");
	}
	post_status.find('.status_txt').html("");
	post_reply.find('.status_txt').html("");
	$('#duel_log .chat_cb').checked(true);
	$('#duel_log .duel_cb').checked(true);
	$('#duel_log .game_cb').checked(true);
	$('#duel_log .private_cb').checked(true);
	$('#duel_log .usernames_cb').checked(false);
	$('#post_status .html_cb').checked(false);
	$('#post_status .nsfw_cb').checked(false);
	$('#post_reply .html_cb').checked(false);
	$('#post_reply .nsfw_cb').checked(false);
	if (admin) {
		setupInput($('#post_status .status_txt'), false);
		//setupInput($('#post_reply .status_txt'));
	}
	//TweenMax.fromTo($('#dark'), 0.25, {alpha:0}, {alpha:1});
	$('#browse .online_cb').checked(false);
	$('#browse .pics_cb').checked(false);
	$('#browse .all_genders_rb').checked(true);
	$('#browse .male_rb').checked(false);
	$('#browse .female_rb').checked(false);
	$('#browse .all_orientations_rb').checked(true);
	$('#browse .straight_rb').checked(false);
	$('#browse .gay_rb').checked(false);
	$('#browse .bi_rb').checked(false);
	$('#browse .matches_rb').checked(true);
	$('#browse .singles_rb').checked(false);
	$('#browse_users .following_cb').checked(false);
	$('#browse_users .friends_cb').checked(false);
	image_url = URL_START;
	
	if (moderator) {
		console.log(JSON.stringify(data));
	}
	
	if (data.duel) {
		setTimeout(function(){
			if (currentLabel == "connecting") {
				gotoMainMenu();
			}
		}, 3000);
		return;
	}
	if (return_to_deck) {
		gotoDeckConstructor(true); // the boolean insures that the decklist index isn't changed in fillDecklists
		setTimeout(function(){
			return_to_deck = false;
			unsavedChanges = true;
			updateUnsavedDeckState();
		}, 50);
		return;
	}
	
	//loadVideosResponse();
	
	gotoMainMenu();
	
	setTimeout(function(){
		loadGuild();
	}, 100);
	
	
	
}

function addToNotifications(notification, addTimer, perma) {
	if (addTimer !== true) {
		addTimer = false;
	}
	if (perma !== true) {
		perma = false;
	}
	notification.data("addTimer", addTimer);
	notification.data("perma", perma);
	notifications_arr.push(notification);
	if (duelId == 0 || !notification.hasClass("notification") || notification.data("urgent")) {
		showNotifications();
	}
}

function centerVertically() {

}

/*function showNotifications() {
	notification_tweening = true;
	var Y = 23;
	for (var i = 0; i < notifications_arr.length; i++) {
		var notification = notifications_arr[i];
		notification.css("top", Y);
		$('#notifications').append(notification);
		Y += notifications_arr[i][0].scrollHeight + 7;
		if (notification.data("started")) {
			continue;
		}
		notification.data("started", true);
		if (notification.hasClass("notification")) {
			while (notification.find('.message_txt')[0].scrollHeight > notification.height()) {
				var fontSize = parseInt(notification.find('.message_txt').css("font-size"));
				notification.find('.message_txt').css("font-size", --fontSize);
			}
			notification.find('.message_txt').css("top", notification.height() / 2 - notification.find('.message_txt')[0].scrollHeight / 2);
			if (!notification.data("perma") && (auto_close_notifications || notification.data("addTimer"))) {
				var timer = notification.data("timer");
				if (auto_close_notifications) {
					timer = new Timer(5000);
				}
				else {
					timer = new Timer(10000);
				}
				timer.callback = function(){
					timer.reset();
					notificationClose(notification);
				};
				timer.start();
			}
			TweenMax.fromTo(notification, 0.7, {left:1118}, {left:769, ease:Expo.easeInOut, delay:notification.data("fast") ? 0.25 : 1.5, onComplete:function(){
				for (var j = 0; j < notifications_arr.length; j++) {
					if (TweenMax.isTweening(notifications_arr[j])) {
						return;
					}
				}
				notification_tweening = false;
			}});
		}
	}
}*/

function showNotifications() {
	var Y = 23;
	for (var i = 0; i < notifications_arr.length; i++) {
		var notification = notifications_arr[i];
		notification.css("top", Y);
		$('#notifications').append(notification);
		Y += notifications_arr[i][0].scrollHeight + 7;
		if (notification.data("started")) {
			continue;
		}
		
		notification.data("started", true);
		if (notification.hasClass("notification")) {
			while (notification.find('.message_txt')[0].scrollHeight > notification.height()) {
				var fontSize = parseInt(notification.find('.message_txt').css("font-size"));
				notification.find('.message_txt').css("font-size", --fontSize);
			}
			//notification.find('.message_txt').css("top", notification.height() / 2 - notification.find('.message_txt')[0].scrollHeight / 2);
			var top = notification.height() / 2 - notification.find('.message_txt')[0].scrollHeight / 2;
			top = top == 9.5 ? 11 : top;
			notification.find('.message_txt').css("top", top);
			if (!notification.data("perma") && (auto_close_notifications || notification.data("addTimer"))) {
				var timer = notification.data("timer");
				if (auto_close_notifications) {
					timer = new Timer(5000);
				}
				else {
					timer = new Timer(notification.data("short") ? 2500 : 10000);
				}
				timer.callback = function(){
					timer.reset();
					notificationClose(notification);
				};
				timer.start();
			}
			notification_tweening = true;
			TweenMax.fromTo(notification, 0.7, {left:1118}, {left:769, ease:Expo.easeInOut, delay:notification.data("fast") ? 0.25 : 1.5, onComplete:function(){
				for (var j = 0; j < notifications_arr.length; j++) {
					if (TweenMax.isTweening(notifications_arr[j])) {
						return;
					}
				}
				notification_tweening = false;
			}});
		}
	}
}

function tweenNotificationsX() {
	for (var i = 0; i < notifications_arr.length; i++) {
		var notification = notifications_arr[i];
		TweenMax.killTweensOf(notification);
		var xPosition = 681;
		if (notification.hasClass("notification")) {
			xPosition = 769;
		}
		TweenMax.fromTo(notification, 0.7, {left:1118}, {left:xPosition, ease:Expo.easeInOut, delay:(i * 0.3) + 1.5});
	}
}

function tweenNotificationsY() {
	var Y = 23;
	for (var i = 0; i < notifications_arr.length; i++) {
		var notification = notifications_arr[i];
		var yPosition = Y;
		TweenMax.fromTo(notification, 0.7, {top:parseInt(notification.css("top"))}, {top:yPosition, ease:Expo.easeInOut});
		Y += notification[0].scrollHeight + 7;
	}
}

function notificationCloseE(e) {
	e.stopPropagation();
	notificationClose($(e.currentTarget).parent());
}

function notificationClose(notification) {
	for (var i = 0; i < notifications_arr.length; i++) {
		if (notification[0] == notifications_arr[i][0]) {
			notifications_arr.splice(i, 1);
			break; // 12/18/19
		}
	}
	TweenMax.to(notification, 0.5, {alpha:0, ease:Expo.easeInOut, onStart:function(){
		tweenNotificationsY();
	}, onComplete:function(){
		notification.remove();
	}});
}

function showAnnouncement(title, body) {
	if (body.indexOf('href="event:') >= 0) {
		return;
	}
	var announcement = new Announcement(title, body);
	addToNotifications(announcement);
	TweenMax.fromTo(announcement, 0.7, {left:1029}, {left:681, ease:Expo.easeInOut, delay:1.5});
	
	announcement.find('.body_txt').css("overflow-y", "hidden");
	if (announcement.find('.body_txt')[0].scrollHeight > announcement.find('.body_txt').height()) {
		announcement.find('.body_txt').css("overflow-y", "scroll");
	}
	return announcement;
}

function announcementCallbackE(str, param2, param3) {
	if (unsavedChanges || (duel_active && (duelist || admin))) {
		return;
	}
	leaveDuelRoom();
	switch (str) {
		case "confirm":
			gotoConfirmEmail();
			break;
		case "regional":
			gotoTournamentLocator();
			$('.store_search .tourney_cb').selectedIndex(1);
			//tourneySearch(latitude, longitude);
			tourneySearch(param2, param3);
			break;
		case "scroll":
			tweenScrollbar($('.announcement .body_txt:visible:last'), 0, {scrollTop:50, ease:Expo.easeInOut});
			return;
	}
	notificationClose($('.announcement'));
}

function notificationClick(e) {
	if (unsavedChanges || (duel_active && (duelist || admin))) {
		return;
	}
	if ($('.subscreen').is(":visible")) {
		return;
	}
	if ($(this).data("callback")) {
		leaveDuelRoom();
		$(this).data("callback")();
	}
	notificationClose($(this));
}

function exitDuelRoomE() {
	exitDuelRoom();
	gotoMainMenu();
}

/*function exitDuelRoom() {
	partner = null;
	tagging_up = false;
	hosting = false;
	joining = false;
	inPool = false;
	Send({"action":"Exit duel room"});
}*/

function exitDuelRoom() {
	partner = null;
	tagging_up = false;
	hosting = false;
	joining = false;
	inPool = false;
	switch(currentLabel) {
		case "duel_room":
			Send({"action":"Exit duel room"});
			break;
	}
}

function leaveDuelRoom() {
	exitDuelRoom();
	exitDuel(false);
	hideDisplayBoxes();
	$('#watch_chat').hide();
	$('#duel_log').hide();
	if (currentLabel == "deck_constructor") {
		deckCleanup();
	}
}

function setupNotifications() {
	if (newMessages) {
		var notification1 = new Notification();
		notification1.setupMessage(newMessages);
		notification1.data("callback", gotoMessages);
		addToNotifications(notification1);
	}
	if (newFriendRequests) {
		var notification2 = new Notification();
		notification2.setupRequest(newFriendRequests);
		notification2.data("callback", gotoFriendRequests);
		addToNotifications(notification2);
	}
	if (newComments) {
		var notification3 = new Notification();
		notification3.setupComment(newComments);
		if (require_comment_approval) {
			notification3.data("callback", gotoComments);
		}
		else {
			notification3.data("callback", function(){
				reloadProfile(username);
			});
		}
		addToNotifications(notification3);
	}
}

function gotoMainStatuses() {
	if (currentLabel == "main_start" || currentLabel == "main_return") {
		console.log('a');
		if ($('.main_menu_circle').eq(0).data("active")) {
			console.log('b');
			return 0;
		}
	}
	gotoMainMenu();
	//if (!$('.main_menu_circle').eq(0).data("active")) {
		console.log('c');
		showStatuses();
			console.log('d');
	//}
	return 1;
}

function gotoMainMenu() {
	$('.status').detach();
	$('.custom').detach(); // shouldn't be needed, but helps fix glitchiness
	$('.admin_action').detach(); // shouldn't be needed, but helps fix glitchiness
	goto('main_menu');
	killAllTweens(); // must be before loadMenu
	if (statuses_data == null) {
		status_cb_index = 0;
	}
	duel_records_arr = [];
	lastViewedProfile = "";
	browsing = false;
	viewing_actions = false;
	viewing_comments = false;
	viewing_following = false;
	viewing_notes = false;
	viewing_records = false;
	viewing_rankings = false;
	viewing_requests = false;
	tourney_ready = false;
	tourney_data = null;
	selectedTourney = null;
	deckData = null;
	unsavedChanges = false;
	post_reply.hide();
	//$('#actions_list').hide();
	if (statuses_type == "username" || statuses_type == "id") {
		fixStatusComboBox(true);
		status_cb_index = 0;
	}
	$('#status_cb').selectedIndex(status_cb_index);
	$('#menu_content').scrollTop(0);
	$('#statuses').scrollTop(0);
	tweenMenu();
	tweenTourneys();
	//TweenMax.set($('#menu_content .os-scrollbar-vertical .os-scrollbar-track'), {"backgroundColor":"rgb(255, 255, 255, 0.3)"});
	if (((update_statuses && status_cb_index == 0) || statuses_data == null) && lastFrame != "connecting") {
		loadStatusUpdates();
		statusSecondsTimer.reset();
		statusSecondsTimer.start();
	}
	else if (statuses_data) {
		loadStatusesResponse(statuses_data);
	}
	lastFrame = "main_menu";
	//TweenMax.fromTo(dark_mc, 0.25, {alpha:0}, {alpha:1});
	setupInput($('#post_status .status_txt'), false);
	update_statuses = false;
	//scrollbar_arrow_mc.hide()
	hideDim();
}

function loadVideosResponse(data) {
	$('.video').detach();
	var top = 18;
	for (var i = 0; i < data.videos.length; i++) {
		var video = new Video(data.videos[i]);
		video.css("left", 148 / 0.8 * (i % 4));
		if (i > 0 && i % 4 == 0) {
			top += 160 / 0.8;
		}
		video.css("top", top);
		$('#videos').append(video);
		//setText(video.find('.channel'));
		//setText(video.find('.views'));
	}
	
	top = 10;
	for (var i = 0; i < data.streams.length; i++) {
		var stream = new Stream(data.streams[i]);
		stream.css("top", top);
		//top += 200;
		top = 0;
		$('#streams > .content').append(stream);
		//setText(video.find('.channel'));
		//setText(video.find('.views'));
	}
	tweenVideos();
}

function tweenVideos() {
	var videoX = 0;
	var videoY = 0;
	//var videoY = 34;
	var arr = $('#videos .video').toArray();
	for (var i = 0; i < arr.length; i++) {
		var video = $(arr[i]);
		//videoX = 148 / 0.8 * (i % 4);
		//videoX = 146.25 / 0.8 * (i % 4);
		//videoX = 146.5 / 0.8 * (i % 4);
		videoX = 147 / 0.8 * (i % 4);
		if (i > 0 && i % 4 == 0) {
			//videoY += 133 / 0.8;
			videoY += 160 / 0.8;
			//videoY += 180 / 0.8;
		}
		video.css("left", videoX);
		video.css("top", videoY);
		if (!simple) {
			//TweenMax.fromTo(video, 1, {left:videoX + 200, top:videoY + 100 + (Math.random() * 150), alpha:0}, {left:videoX, top:videoY, alpha:1, ease:Expo.easeInOut, delay:0.01 * i * Math.random()});
			TweenMax.fromTo(video, 1, {left:videoX + 200, top:videoY + 100, alpha:0}, {left:videoX, top:videoY, alpha:1, ease:Expo.easeInOut, delay:0.02 * i * Math.random()});
		}
	}
	
	var arr = $('#streams .stream').toArray();
	for (var i = 0; i < arr.length; i++) {
		var stream = $(arr[i]);
		if (!simple) {
			var videoX = parseInt(stream.css("left"));
			var videoY = parseInt(stream.css("top"));
			TweenMax.fromTo(stream, 1, {left:videoX + 600, alpha:0}, {left:videoX, alpha:1, ease:Expo.easeInOut, delay:0.1 * i});
		}
	}
}

function tweenTourneys(b) {
	b = true;
	if ($('#tourney_sidebar').data("tweened")) {
		//return;
	}
	if (!$('#tourney_sidebar').is(":visible")) {
		return;
	}
	var arr = $('#tourney_sidebar .tourney').toArray();
	if (!$('#tourney_sidebar').data("set")) {
		$('#tourney_sidebar').data("set", true);
		var tourneyY = 5;
		for (var i = 0; i < arr.length; i++) {
			var tourney = $(arr[i]);
			if (!tourney.data("set")) {
				//setText(tourney.find('.name_txt'));
				setText(tourney.find('.hosted_by_txt'));
				setText(tourney.find('.date_txt'));
				tourney.data("set", true);
				tourney.css("top", tourneyY);
				if (tourney.find('.progress_txt').text() != "") {
					tourney.find('.progress_txt').show();
					tourney.find('.progress_txt').css("top", tourney[0].scrollHeight);
					tourney.find('.members_txt').css("top", parseInt(tourney.find('.progress_txt').css("top")) + 20);
				}
				else {
					tourney.find('.members_txt').css("top", tourney[0].scrollHeight);
				}
				tourneyY += tourney[0].scrollHeight + 30;
			}
		}
	}
	if (!simple && b) {
		for (var i = 0; i < arr.length; i++) {
			if (i > 10) {
				break;
			}
			var tourney = $(arr[i]);
			var tourneyX = parseInt(tourney.css("left"));
			TweenMax.fromTo(tourney, 1, {left:tourneyX + 600, alpha:0}, {left:tourneyX, alpha:1, ease:Expo.easeInOut, delay:0.08 * i});
		}
	}
	$('#tourney_sidebar').data("tweened", true);
}

function Video(data) {
	var video = $('<div class="video"></div>');
	video.data("id", data.id);
	video.data("p", data.p);
	
	//var img = $('<a href="https://www.youtube.com/watch?v=' + data.id + '" target="_blank"><img src="https://i.ytimg.com/vi/' + data.id + '/mqdefault.jpg" />');
	var img = $('<a href="https://www.youtube.com/watch?v=' + data.id + '" target="_blank"><img src="' + IMAGES_START + 'youtube-thumbnails/' + data.id + '.jpg" />');
	var title_txt = $('<div class="title_txt cyan"><a href="https://www.youtube.com/watch?v=' + data.id + '" target="_blank">' + escapeHTML(data.title) + '</a></div>');
	var channel_txt = $('<div class="channel_txt"><a class="nolink" href="https://www.youtube.com/channel/' + escapeHTML(data.channel) + '" target="_blank">' + escapeHTML(data.username) + '</a></div>');
	var views_txt = $('<span class="views_txt">' + Number(data.views).toLocaleString() + ' views</span>');
	
	img.mouseenter(function(){
		TweenMax.to(views_txt, 0.4, {"opacity":1});
	});
	img.mouseleave(function(){
		TweenMax.to(views_txt, 0.4, {"opacity":0});
	});
	img.contextmenu(rankVideoE);
	
	channel_txt.data("r", data.r);
	channel_txt.data("channel", data.channel);
	channel_txt.contextmenu(rankChannelE);
	
	video.append(img);
	video.append(title_txt);
	video.append(channel_txt);
	video.append(views_txt);
	return video;
}

function rankVideoE() {
	if (moderator < 2) {
		return true;
	}
	var video_id = $(this).parents('.video').data("id");
	//var arr = ["0", "1", "2", "3"];
	var arr = ["3", "2", "1", "0"];
	getComboBox("Rank Video", "Select a rank for this video: ", arr, arr.indexOf($(this).parents('.video').data("p").toString()), function(){
		Send({"action":"Rank video", "video":video_id, "rank":~~$('#combo .combo_cb').val()});
		showDim();
	});
	showDim();
	return false;
}

function rankChannelE() {
	if (moderator < 2) {
		return true;
	}
	var channel = $(this).data("channel");
	//var arr = ["0", "1", "2", "3"];
	var arr = ["3", "2", "1", "0"];
	getComboBox("Rank Channel", "Select a rank for this channel: ", arr, arr.indexOf($(this).data("r").toString()), function(){
		Send({"action":"Rank channel", "channel":channel, "rank":~~$('#combo .combo_cb').val()});
		showDim();
	});
	showDim();
	return false;
}

function Stream(data) {
	var stream = $('<div class="video stream"></div>');
	stream.data("id", data.id);
	stream.data("p", data.p);
	stream.contextmenu(rankStreamE);
	
	//var img = $('<a href="https://www.twitch.tv/' + data.username + '" target="_blank"><img src="' + data.thumbnail.replace('{width}', '480').replace('{height}', '270') + '" width="480" height="270" />');
	var img = $('<a href="https://www.twitch.tv/' + data.username + '" target="_blank"><img src="' + data.thumbnail.replace('{width}', '480').replace('{height}', '270') + '" width="208" height="117" /></a>');
	var title_txt = $('<div class="title_txt cyan"><a href="https://www.twitch.tv/' + data.username + '" target="_blank"><font color="red">[Live]</font> ' + escapeHTML(data.title) + '</a></div>');
	var channel_txt = $('<div class="channel_txt"><a class="nolink" href="https://www.twitch.tv/' + data.username + '" target="_blank">' + escapeHTML(data.username) + '</a></div>');
	var views_txt = $('<span class="views_txt">' + Number(data.views).toLocaleString() + ' viewers</span>');
	
	img.mouseenter(function(){
		TweenMax.to(views_txt, 0.4, {"opacity":1});
	});
	img.mouseleave(function(){
		TweenMax.to(views_txt, 0.4, {"opacity":0});
	});
	
	channel_txt.data("r", data.r);
	channel_txt.data("streamer", data.streamer);
	channel_txt.contextmenu(rankStreamerE);
	
	stream.append(title_txt);
	stream.append(img);
	stream.append(channel_txt);
	img.append(views_txt);
	return stream;
}

function rankStreamE() {
	if (moderator < 2) {
		return true;
	}
	var stream_id = $(this).data("id");
	//var arr = ["0", "1", "2", "3"];
	var arr = ["3", "2", "1", "0"];
	getComboBox("Rank Stream", "Select a rank for this stream: ", arr, arr.indexOf($(this).data("p").toString()), function(){
		Send({"action":"Rank stream", "stream":stream_id, "rank":~~$('#combo .combo_cb').val()});
		showDim();
	});
	showDim();
	return false;
}

function rankStreamerE() {
	if (moderator < 2) {
		return true;
	}
	var streamer = $(this).data("streamer");
	var arr = ["0", "1", "2", "3"];
	getComboBox("Rank Streamer", "Select a rank for this streamer: ", arr, arr.indexOf($(this).data("r").toString()), function(){
		Send({"action":"Rank streamer", "streamer":streamer, "rank":~~$('#combo .combo_cb').val()});
		showDim();
	});
	showDim();
	return false;
}

function gotoMyProfile() {
	lastFrame = "my_profile";
	currentProfile = username;
	thumb_border.hide();
	$('#prev_sleeve_btn').hide();
	$('#next_sleeve_btn').hide();
	$('#my_profile .thumbs').hide();
	$('#my_profile .html_cb').hide();
	$('#my_profile .html_cb').checked(false);
	$('#my_profile .html_lbl').hide();
	$('#my_profile .nsfw_cb').hide();
	$('#my_profile .nsfw_cb').checked(false);
	$('#my_profile .nsfw_lbl').hide();
	$('#my_profile .nsfw_btn').hide();
	$('#my_profile .remove_btn').hide();
	$('#my_profile .pic_prev_btn').hide();
	$('#my_profile .pic_next_btn').hide();
	$('#my_profile .donation_txt').hide();
	$('#my_profile .upload_btn').hide();
	$('#my_profile #sleeve_select').hide();
	$('#my_profile .profile_txt').val("");
	goto('my_profile');
	$('#my_profile .profile_txt').focus();
	if (!avatars_loaded) {
		createAvatars();
	}
	tweenAvatars();
	loadMyProfile();
}

function loadMyProfile() {
	Send({"action":"Load my profile"});
}

function gotoModerator() {
	$('#mute_user .forever_cb').checked(false);
	$('#mute_user .forever_cb').disable(false);
	$('#set_ignored .forever_cb').checked(false);
	$('#set_ignored .forever_cb').disable(false);
	if (moderator < 2 && admin < 3) {
		$('#mute_user .forever_cb').disable(true);
		$('#set_ignored .forever_cb').disable(true);
	}
	$('#unmute_user .forever_cb').checked(false);
	goto('moderator');
	$('#check_statuses .username_txt').focus();
	$('#check_statuses .username_txt').select();
}

function gotoAdmin() {
	$('#cancel_duel').hide();
	$('#admin .admin_next_btn').hide();
	$('#freeze_user .days_rb').checked(true);
	$('#freeze_user .forever_rb').disable(!(moderator >= 2 || admin >= 3));
	$('#freeze_user .forever_rb').checked(false);
	$('#freeze_user .strike_cb').checked(true);
	$('#freeze_user .all_accounts_cb').checked(true);
	$('#unban_user .strike_cb').checked(true);
	$('#unban_user .all_accounts_cb').checked(true);
	$('#warning_note .strike_cb').checked(false);
	if (moderator >= 2) {
		//$('#cancel_duel').show();
	}
	if (admin_status >= 2 || moderator >= 2) {
		$('#admin .admin_next_btn').show();
	}
	goto('admin');
	$('#ban_status .username_txt').focus();
	$('#ban_status .username_txt').select();
}

/*function gotoAdmin2(e, h, s) {
	goto('admin2');
	admin_username = "";
	$('#ip_check .super_cb').checked(false);
	$('#ip_check .super_cb').hide();
	$('#ip_check .super_cb').data("proxy").css("opacity", 0);
	$('#admin_status option:contains("Head Administrator")').remove();
	$('#admin_status .status_cb').disable(true);
	$('#admin_status .judge_cb').disable(true);
	$('#admin_status .judge_cb').checked(true);
	$('#admin_status .save_btn').disable(true);
	if (admin_status >= 3 || moderator >= 2) {
		$('#ip_check .super_cb').show();
	}
	if (admin < 3 && moderator < 2 || s) {
		$('#admin_status').hide();
		$('#reset_stats').hide();
		$('#super_ban').hide();
		$('#hide_btn').hide();
	}
	else {
		$('#admin_status').show();
		$('#reset_stats').show();
		$('#super_ban').show();
	}
	if (admin < 4 && moderator < 2 || h) {
		$('#admin2 .admin_next_btn').hide();
		$('#computer_check').css("top", 108);
		$('#hide_btn').show();
	}
	else {
		$('#admin2 .next_btn').show();
		$('#admin2 .status_cb').append($('<option value="3">Head Administrator</option>'));
		$('#computer_check').css("top", 133);
	}
	$('#ip_check .username_txt').focus();
	$('#ip_check .username_txt').select();
}*/

function gotoAdmin2(e, h, s) {
	goto('admin2');
	console.log('gotoAdmin2');
	console.log(h);
	console.log(s);
	admin_username = "";
	$('#ip_check .super_cb').checked(false);
	$('#ip_check .super_cb').hide();
	$('#ip_check .super_cb').data("proxy").css("opacity", 0);
	$('#admin_status option:contains("Head Administrator")').remove();
	$('#admin_status .status_cb').disable(true);
	$('#admin_status .judge_cb').disable(true);
	$('#admin_status .judge_cb').checked(true);
	$('#admin_status .save_btn').disable(true);
	if (admin_status >= 3 || moderator >= 2) {
		$('#ip_check .super_cb').show();
	}
	if (admin < 3 && moderator < 2 || s) {
		$('#admin_status').hide();
		$('#reset_stats').hide();
		$('#super_ban').hide();
		$('#next_btn').hide();
		$('#admin2 .admin_next_btn').hide();
	}
	else {
		if (admin < 4 && moderator < 2 || h) {
			$('#admin2 .admin_next_btn').hide();
			$('#computer_check').css("top", 108);
			$('#next_btn').show();
		}
		else {
			$('#admin2 .admin_next_btn').show();
			$('#admin2 .status_cb').append($('<option value="3">Head Administrator</option>'));
			$('#computer_check').css("top", 133);
		}
		$('#admin_status').show();
		$('#reset_stats').show();
		$('#super_ban').show();
	}
	$('#ip_check .username_txt').focus();
	$('#ip_check .username_txt').select();
}

function gotoAdmin3() {
	goto('admin3');
	$('#alerts .username_txt').focus();
	$('#alerts .username_txt').select();
}

function gotoSwitchboard() {
	var arr = $('#switchboard .switchboard input');
	var x = 24;
	var y = 30;
	for (var i = 0; i < arr.length; i++) {
		arr.eq(i).css("left", x);
		arr.eq(i).css("top", y);
		y += 30;
		if (y > 330) {
			y = 30;
			x += 146;
		}
	}
	goto('switchboard');
}

function gotoForum() {
	openForum();
	/*if (!username || !password) {
		openForum();
		return;
	}
	if (logged_into_forum) {
		openForum();
		return;
	}
	logged_into_forum = true;
	var fd = new FormData();
	fd.append("username", user_username);
	fd.append("password", password);
	fd.append("autologin", "on");
	fd.append("redirect", "index.php");
	fd.append("login", "Login");
	fd.append("ref", "db");

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://forum.duelingbook.com/ucp.php?mode=login", true);
	xhr.onreadystatechange = function() {
		console.log('xhr.readyState = ' + xhr.readyState);
		console.log('xhr.status = ' + xhr.status);
		console.log(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == 200) {
			openForum();
		}
	}
	xhr.send(fd);
	showDim();*/
}

function openWelcome() {
	window.open(URL_START + "welcome");
}

function openRules() {
	window.open(URL_START + "rules");
}

function openBlog() {
	window.open(URL_START + "blog");
}

function openForum() {
	hideDim();
	window.open("https://forum.duelingbook.com");
}

/*function openTwitter() {
	window.open("https://twitter.com/duelingbook");
}

function openYoutube() {
	window.open("https://www.youtube.com/user/duelingbook");
}

function openFacebook() {
	window.open("https://www.facebook.com/duelingbook/");
}

function openInstagram() {
	window.open("https://www.instagram.com/duelingbook/");
}*/

function openDiscord() {
	window.open("https://discord.gg/VE3xQZc");
}

function hideWidget() {
	revamped = false;
	revampedE(true);
	Send({"action":"Revamped", "revamped":revamped});
}

function revampedE(b) {
	if (revamped) {
		$('#menu_content, #circle_content, #statuses, #videos, #tourneys, #widget').addClass("revamped"); 
		$('#administrator_btn').removeClass("administrator_btn");
		$('#administrator_btn img').attr("data-src", "images/svg/menu_btn_up.svg");
		removeButton($('#administrator_btn'));
		addButton($('#administrator_btn'), gotoAdmin);
		$('#main_exit_btn').prependClass("administrator_btn");
		$('#main_exit_btn img').attr("data-src", "images/svg/administrator_btn_up.svg");
		$('#main_exit_btn img').attr("src", "images/svg/administrator_btn_up.svg");
		removeButton($('#main_exit_btn'));
		addButton($('#main_exit_btn'), mainExitE);
		$('#tourneys_btn').insertBefore($('#main_exit_btn'));
		$('#discord_menu_btn').hide();
		
		$('#tourney_sidebar').show();
		$('#streams').show();
		$('#status_cb').css("left", 688);
		
		if (b) {
			tweenMenu(true);
		}
		return;
	}
	if (b) {
		$('#menu_content, #circle_content, #statuses, #videos, #tourneys, #widget').removeClass("revamped"); 
		$('#administrator_btn').prependClass("administrator_btn");
		$('#administrator_btn img').attr("data-src", "images/svg/administrator_btn_up.svg");
		$('#administrator_btn img').attr("src", "images/svg/administrator_btn_up.svg");
		removeButton($('#administrator_btn'));
		addButton($('#administrator_btn'), gotoAdmin);
		$('#main_exit_btn').removeClass("administrator_btn");
		$('#main_exit_btn img').attr("data-src", "images/svg/menu_btn_up.svg");
		$('#main_exit_btn img').attr("src", "images/svg/menu_btn_up.svg");
		removeButton($('#main_exit_btn'));
		addButton($('#main_exit_btn'), mainExitE);
		$('#administrator_btn').insertAfter($('#main_exit_btn'));
		$('#tourneys_btn').insertAfter($('#moderator_btn'));
		$('#discord_menu_btn').show();
		
		$('#tourney_sidebar').hide();
		$('#streams').hide();
		$('#status_cb').css("left", 820);
		
		
		tweenMenu(true);
	}
}

function resizeMainE() {
	resizeE();
	if (mobile) {
		return;
	}
	var zoom = getZoom();
	//if (Zoom != zoom) {
	if (Zoom != zoom) {
		sendReport('zoom: ' + zoom + ', window.outerWidth = ' + window.outerWidth + ', window.innerWidth = ' + window.innerWidth + ', window.devicePixelRatio = ' + window.devicePixelRatio + (window.visualViewport ? (', window.visualViewport.width = ' + window.visualViewport.width) : ""));
		$('.notification:has(.zoom) .close_btn').click();
		if (Math.round(zoom) != 100) {
			/*var notification = new Notification();
			//notification.setupZoom("Your zoom level is not at 100%. Unexpected results may happen.");
			//notification.setupZoom("Zoom level is at " + zoom + "%. Unexpected results may happen.");
			//notification.setupZoom("Zoom level is " + zoom + "%. Unexpected visual results may happen.");
			notification.setupZoom("Zoom level is at " + zoom + "%. Visual glitches may occur.");
			notification.data("fast", true);
			notification.data("urgent", true);
			addToNotifications(notification, true);*/
		}
		else {
			/*var notification = new Notification();
			notification.setupZoomFixed("Zoom level is correct!");
			notification.data("fast", true);
			notification.data("urgent", true);
			notification.data("short", true);
			addToNotifications(notification, true);*/
		}
		Zoom = zoom;
		Send({"action":"Zoom", "zoom":Zoom});
	}
}

function loadedE() {
	if (mobile && $('#mobile').length == 0) {
		var s = $('<script id="mobile" src="mobile.js?v=' + VERSION + '"></script>');
		s.ready(loadedE);
		$('body').append(s);
		return;
	}
	revampedE();

	/*$('#content').show();
	$('#black').hide();
	return;*/
	
	$('#edit_card').append($('#upload_card').html());
	$('#edit_card').attr("class", $('#upload_card').attr("class"));
	$('#edit_card .title_txt').text("EDIT");
	$('#edit_card .upload_btn').val("Save");
	// 1.17
	
	//$('#recaptcha_bg').hide();
	//$('.grecaptcha-badge').css("visibility", "hidden");
	//grecaptcha.render($('#recaptcha_bg .recaptcha')[0], {"sitekey":"6LdgBP8fAAAAAE7oh2Qc-MqjzJhS0qUwBSE0o8NJ", "callback":"recaptchaCallback"});
	initDB();
	window.onresize = resizeMainE;
	
	// 3.17
	$('select').selectedIndex(0);
	$('input[type="text"]').val("");
	$('textarea').val("");
	$('#input .input_txt').on('input', function(){
		var regex = $(this).data("regex");
		if ($(this).val().match(regex)) {
			$(this).val($(this).val().replace(regex, ""));
		}
	});
	log('cards_fingerprint = ' + cards_fingerprint);
	loadCards(cards_fingerprint);
	checkLoggedIn();
	//loadGuild();
	activateE();
	getShared();
	loadNews();
	if (mobile) {
		mes1.detach();
		//mes3.show();
		//mes3.setHTML(banner_ad);
	}
	else {
		//mes1.show(); //so, this will cause the ad to show over a small screen's skip intro btn
		//mes1.setHTML(banner_ad);
	}
	$('html').bind("paste", onPaste);
	$('#skip_intro_btn').click(skipIntro);
	$('#welcome_btn').click(openWelcome);
	$('#forum_btn').click(openForum);
	$('#rules_btn').click(openRules);
	$('#blog_btn').click(openBlog);
	$('#login .username_txt').data("regex", /[^ -~]/g);
	$('#login .register_btn').click(showRegister);
	$('#login .forgot_password_btn').click(showForgotPassword);
	$('#login .login_btn').click(performLogin);
	$('#login .remember_cb').checked(true);
	$('#register .username_txt').data("regex", /[^ -~]/g);
	$('#register .email_txt').data("regex", /[^ -~]/g);
	$('#register .back_btn').click(showLogin);
	$('#register .register_btn').click(performRegisterE);
	$('#forgot_password .back_btn').click(showLogin);
	$('#forgot_password .reset_password_btn').click(performResetPassword);
	$('#logged_in .logout_btn').click(performLogout);
	$('#logged_in .switch_account_btn').click(switchAccountE);
	$('#donate_btn').click(donateE);
	//$('#twitter_btn').click(openTwitter);
	//$('#youtube_btn').click(openYoutube);
	//$('#facebook_btn').click(openFacebook);
	//$('#instagram_btn').click(openInstagram);
	//$('#discord_btn').click(openDiscord);
	addButton($('#main_exit_btn'), mainExitE);
	addButton($('#duel_btn'), performStart);
	addButton($('#admin_duel_btn'), performStart);
	addButton($('#admin_admin_btn'), performStart);
	//addButton($('#recaptcha_bg .exit_btn'), hideRecaptcha);
	
	decklist_cb.change(deckChangeE);
	
	$('#online_btn').mouseenter(function(){
		$('#online_users_tooltip').show();
	});
	$('#online_btn').mouseout(function(){
		$('#online_users_tooltip').hide();
	});
	$('#tools_btn').mouseenter(function(){
		$('#call_tooltip').show();
	});
	$('#tools_btn').mouseout(function(){
		$('#call_tooltip').hide();
	});
	$('#chat_btn').mouseenter(function(){
		$('#public_chat_tooltip').show();
	});
	$('#chat_btn').mouseout(function(){
		$('#public_chat_tooltip').hide();
	});
	$('#private_btn').mouseenter(function(){
		$('#private_chat_tooltip').show();
	});
	$('#private_btn').mouseout(function(){
		$('#private_chat_tooltip').hide();
	});
	addDragging($('#online_users'), ".chat_top_bg", ".chat_background", function(){
		appendChat($('#online_users'));
	}, function(){
		toggleAds($('#online_users'));
	});
	addDragging($('#public_chat'), ".chat_top_bg", ".chat_background", function(){
		appendChat($('#public_chat'));
	}, function(){
		toggleAds($('#public_chat'));
	});
	addDragging($('#calls'), ".chat_top_bg", ".chat_background, .calls, .tools, .log", function(){
		appendChat($('#calls'));
	}, function(){
		toggleAds($('#calls'));
	});
	addDragging($('#private_chat'), ".chat_top_bg", ".chat_background", function(){
		appendChat($('#private_chat'));
	}, function(){
		toggleAds($('#private_chat'));
	});
	
	$('#online_users .users').click(showActionList);
	$('#online_users .users').dblclick(cellDoubleClickE);
	$('#online_users .users').scroll(saveOnlineVSP);
	$('#online_users .search_txt').on("input", filterOnlineUsers);
	addButton($('#online_users .minimize_btn'), toggleOnline);
	
	$('#public_chat .refresh_btn').click(loadPublicChatE);
	addButton($('#public_chat .minimize_btn'), togglePublic);
	addButton($('#public_chat .minimize2_btn'), minimizePublicChat);
	addButton($('#public_chat .expand_btn'), expandPublicChat);
	
	$('#private_chat .users').click(changePrivate);
	$('#private_chat .refresh_btn').click(loadPrivateChatE);
	$('#private_chat .cout_txt').scroll(savePrivateVSP);
	$('#private_chat .cin_txt').on('input', savePrivateInput);
	addButton($('#private_chat .minimize_btn'), togglePrivate);
	addButton($('#private_chat .exit_btn'), endPrivate);
	
	$('#watch_chat .refresh_btn').click(loadWatchChatE);
	
	$('#duel_log .export_btn').click(viewLog);
	
	$('#calls .log_txt').scroll(saveLogVSP);
	$('#calls .log_txt').blur(restoreLogVSP);
	$('#calls .refresh_btn').click(refreshLogE);
	$('#calls .search_txt').on("input", updateLog);
	$('#calls .chat_cb').change(updateLog);
	$('#calls .duel_cb').change(updateLog);
	$('#calls .game_cb').change(updateLog);
	$('#calls .private_cb').change(updateLog);
	$('#calls .usernames_cb').change(updateLog);
	$('#calls .export_btn').click(getLogE);
	$('#calls .tools .username_txt').on("input", resetResult);
	$('#calls .calls_btn').click(showCalls);
	$('#calls .tools_btn').click(showTools);
	$('#calls .log_btn').click(showLog);
	$('#calls .calls_btn').trigger("click");
	$('#calls .calls').dblclick(answerCallE);
	$('#calls .action_cb').change(updateAction);
	$('#calls .submit_btn').click(performAction);
	addButton($('#calls .minimize_btn'), toggleCalls);
	restrictInt($('#calls .days_txt'));
	
	$('#action_list').mouseleave(hideActionList);
	$('#action_list').click(performListAction);
	addButton($('#actions .exit_btn'), function(){
		$('#actions').hide();
	});
	
	$('#circle_content').mouseenter(function(){
		menuTimer.reset();
	});
	$('.main_menu_circle').eq(0).data("active", true);
	$('.main_menu_circle').eq(0).find('.background').css("opacity", 1);
	$('.main_menu_circle').eq(0).click(showStatuses);
	$('.main_menu_circle').eq(1).click(showVideos);
	$('.main_menu_circle').eq(2).click(showTourneys);
	/*$('#statuses0').scroll(circleContentScrollE);
	$('#videos0').scroll(circleContentScrollE);
	$('#tourneys0').scroll(circleContentScrollE);*/
	$('#statuses0').on("scroll touchmove", circleContentScrollE);
	$('#videos0').on("scroll touchmove", circleContentScrollE);
	$('#tourneys0').on("scroll touchmove", circleContentScrollE);
	$('#statuses').scroll(verticalScrollE);
	$('#post_status_btn').click(postStatusE);
	$('#post_status .post_btn').click(postStatus);
	post_reply.find('.post_btn').click(postReply);
	$('#status_cb').change(loadStatusUpdates);
	liked_by.mouseleave(hideLikes);
	$('#liked_by .users').mouseenter(pauseLikes);
	$('#liked_by .users').dblclick(cellDoubleClickE);
	$('#tourney_sidebar .subtitle_txt').hover(function(){
		TweenMax.to($('#tourney_sidebar .close_btn'), 0.4, {"opacity":1});
	}, function(e){
		TweenMax.to($('#tourney_sidebar .close_btn'), 0.4, {"opacity":0});
	});
	addButton($('#tourney_sidebar .close_btn'), hideWidget);
	
	addButton($('#room_btn'), gotoDuelRoom);
	addButton($('#deck_btn'), gotoDeckConstructor);
	addButton($('#profile_btn'), gotoProfileViewer);
	addButton($('#my_profile_btn'), gotoMyProfile);
	addButton($('#rankings_btn'), gotoRankings);
	addButton($('#settings_btn'), gotoSettings);
	addButton($('#browse_btn'), gotoBrowseUsers);
	addButton($('#messages_btn'), gotoMessages);
	addButton($('#comments_btn'), gotoComments);
	addButton($('#friend_requests_btn'), gotoFriendRequests);
	addButton($('#friends_btn'), gotoFriends);
	addButton($('#following_btn'), gotoFollowedUsers);
	addButton($('#blocked_btn'), gotoBlockedUsers);
	addButton($('#records_btn'), gotoDuelRecords);
	addButton($('#tournament_btn'), gotoTournamentLocator);
	addButton($('#customs_btn'), gotoCustoms);
	addButton($('#actions_btn'), gotoAdminActions);
	addButton($('#frozen_btn'), gotoFrozenUsers);
	addButton($('#beginners_btn'), gotoBeginners);
	addButton($('#notes_btn'), gotoNotes);
	addButton($('#tourneys_btn'), gotoTournaments);
	addButton($('#custom_cards_btn'), gotoCustomCards);
	addButton($('#moderator_btn'), gotoModerator);
	addButton($('#administrator_btn'), gotoAdmin);
	addButton($('#password_btn'), gotoChangePassword);
	addButton($('#forum_menu_btn'), gotoForum);
	addButton($('#discord_menu_btn'), openDiscord);
	addButton($('#online_btn'), toggleOnline);
	addButton($('#tools_btn'), toggleCalls);
	addButton($('#group_chat_btn'));
	addButton($('#chat_btn'), togglePublic);
	addButton($('#private_btn'), togglePrivate);
	addButton($('#widget .close_btn'), hideWidget);
	
	if (!fancy_scrollbars) {
		$('#formats').addClass("unscrollable");
	}
	$('#ar .join_btn').click(joinPool);
	$('#ar .format_cb').change(updatePoolFormat);
	$('#ar .rules_cb').change(determineRatedLegality2);
	$('#joining_pool .ready_btn').click(readyE);
	$('#joining_pool .leave_btn').click(leavePoolE);
	$('#hosting .accept_btn').click(acceptUser);
	$('#hosting .reject_btn').click(rejectUser);
	$('#hosting .cancel_btn').click(cancelDuel);
	$('#hosting #joinlist').dblclick(acceptUser);
	$('#joining .leave_btn').click(leaveDuel);
	$('#host .format_cb').change(updateFormat);
	$('#host .host_btn').click(hostDuel);
	$('#filter .username_txt').on('input', filterDuels);
	$('#filter .match_type_cb').change(filterDuels);
	$('#filter .sort_cb').change(filterDuels);
	$('#filter .rating_upper_txt').change(filterDuels);
	$('#filter .rating_lower_txt').change(filterDuels);
	$('#filter .rep_upper_txt').change(filterDuels);
	$('#filter .rep_lower_txt').change(filterDuels);
	$('#filter .rules_cb').change(filterDuels);
	$('#filter .style_cb').change(filterDuels);
	$('#duel_room .default_btn').click(setDefault);
	$('#mode .duel_rb').change(loadGames);
	$('#mode .watch_rb').change(loadGames);
	$('#duel_room .room_exit_btn').click(exitDuelRoomE);
	restrictInt($('#filter .rating_lower_txt'));
	restrictInt($('#filter .rating_upper_txt'));
	restrictInt($('#filter .rep_lower_txt'));
	restrictInt($('#filter .rep_upper_txt'));
	addButton($('#gu .info_btn'), goatFormatInfo);
	addButton($('#su .info_btn'), speedDuelsInfo);
	addButton($('#ru .info_btn'), rushDuelsInfo);
	addButton($('#pools_prev_btn'), poolsPrevE);
	addButton($('#pools_next_btn'), poolsNextE);
	addButton($('#filter .prev_btn'), showPrevFilters);
	addButton($('#filter .next_btn'), showNextFilters);
	addComboBackground($('#duel_room #decklist #decklist_cb').data("proxy"), '#FF3300');
	addComboBackground($('#duel_room #decklist .default_btn').data("proxy"), '#FF3300');
	addComboBackground($('#duel_room #filter1 .match_type_cb').data("proxy"), '#0099FF');
	addComboBackground($('#duel_room #filter1 .sort_cb').data("proxy"), '#0099FF');
	addComboBackground($('#duel_room #filter2 .rules_cb').data("proxy"), '#0099FF');
	addComboBackground($('#duel_room #filter2 .style_cb').data("proxy"), '#0099FF');
	addRadioBackground($('#duel_room #mode .duel_rb').data("proxy"), '#6600CC');
	addRadioBackground($('#duel_room #mode .watch_rb').data("proxy"), '#6600CC');
	addComboBackground($('#duel_room #host .format_cb').data("proxy"), '#36CC00');
	addComboBackground($('#duel_room #host .type_cb').data("proxy"), '#36CC00');
	addComboBackground($('#duel_room #host .rules_cb').data("proxy"), '#36CC00');
	addComboBackground($('#duel_room #host .host_btn').data("proxy"), '#36CC00');
	addComboBackground($('#my_profile .redeem_btn').data("proxy"), '#FFFF00');
	addComboBackground($('#hosting .accept_btn').data("proxy"), '#36CC00');
	addComboBackground($('#hosting .reject_btn').data("proxy"), '#36CC00');
	addComboBackground($('#hosting .cancel_btn').data("proxy"), '#36CC00');
	addComboBackground($('#joining .leave_btn').data("proxy"), '#36CC00');
	addCheckboxBackground($('#duel_room #host .expert_cb').data("proxy"), '#36CC00');
	addCheckboxBackground($('#duel_room #host .watching_cb').data("proxy"), '#36CC00');
	addCheckboxBackground($('#duel_room #host .classic_cb').data("proxy"), '#36CC00');
	addCheckboxBackground($('#duel_room #host .tag_duel_cb').data("proxy"), '#36CC00');
	
	$('#formats').scroll(function(e){
		if ($(this).scrollLeft() == 0) {
			$('#pools_prev_btn').hide();
		}
		else if (!TweenMax.isTweening($('#formats'))) {
			$('#pools_prev_btn').show();
		}
		if ($(this).scrollLeft() >= 1366) {
			$('#pools_next_btn').hide();
		}
		else if (!TweenMax.isTweening($('#formats'))) {
			$('#pools_next_btn').show();
		}
	});
	
	initSearcher();
	$('.arrows div').click(function(){
		var src = $(this).find('img').attr("src");
		if (src.indexOf('red') >= 0) {
			src = src.replace('red', 'black');
		}
		else {
			src = src.replace('black', 'red');
		}
		$(this).find('img').attr("src", src);
		if (currentLabel == "custom_cards" && (upload_card.is(":visible") || edit_card.is(":visible"))) {
			updateCard();
		}
	});
	$('#deck_constructor #upload_ydk_btn').change(importDeckC);
	if (!$('#deck_constructor #upload_ydk_btn').data("proxy")) { // delete
		$('#deck_constructor #upload_ydk_btn').data("proxy", $('<div></div>'));
	}
	$('#deck_constructor #upload_ydk_btn').data("proxy").hide();
	//$('#deck_constructor #upload_ydk_btn').visible(false);
	$('#deck_constructor #import_btn').click(importDeck);
	$('#deck_constructor #export_btn').click(exportDeckE);
	$('#deck_constructor #clear_btn').click(clearDeckE);
	$('#deck_constructor .default_btn').click(setDefault);
	$('#deck_constructor #new_btn').click(newDeckE);
	$('#deck_constructor #rename_btn').click(renameDeckE);
	$('#deck_constructor #delete_btn').click(deleteDeckE);
	$('#deck_constructor #save_btn').click(saveDeck);
	$('#deck_constructor #save_as_btn').click(saveDeckAs);
	$('#deck_constructor .tcg_limit_rb').change(updateCardLimits);
	$('#deck_constructor .ocg_limit_rb').change(updateCardLimits);
	$('#deck_constructor .room_exit_btn').click(exitDeckConstructorE);
	$('#token_select .save_token_btn').click(saveToken);
	$('#token_select .delete_token_btn').click(deleteTokenE);
	if (!$('#token_select .browse_btn').data("proxy")) {
		$('#token_select .browse_btn').data("proxy", $('<div></div>'));
	}
	$('#token_select .browse_btn').data("proxy").text("Upload");
	$('#token_select .browse_btn').change(uploadToken);
	if (!mobile) {
		$('#deck_mask, #side_mask, #extra_mask, #limit_reached').contextmenu(function(){
			return false;
		});
	}
	$('#deck_constructor .info_btn').mouseenter(function(){
		$('#randomize_tooltip').show();
	});
	$('#deck_constructor .info_btn').mouseout(function(){
		$('#randomize_tooltip').hide();
	});
	addButton($('#deck_constructor .token_btn'), showTokens);
	addButton($('#deck_constructor .sort_btn'), sortDeck);
	addButton($('#deck_constructor .info_btn'), randomizeDeck);
	addButton($('#token_select .exit_btn'), hideTokens);
	//addButton($('#kde_registration .exit_btn'), closeKDE);
	//addButton($('#kde_registration .print_registration_btn'), closeKDE);
	token_preview.mouseenter(previewToken);
	
	$('#kde_registration .print_decklist_btn').click(showDecklist);
	$('#kde_decklist .print_registration_btn').click(showRegistration);
	addButton($('#kde .exit_btn'), exitKDE);
	
	restrictInt($('#kde_decklist .month_txt'));
	restrictInt($('#kde_decklist .day_txt'));
	restrictInt($('#kde_decklist .year_txt'));
	restrictInt($('#kde_decklist .id_txt'));
	$('#kde_decklist .fullname_txt').on('input', updateDecklist);
	$('#kde_decklist .month_txt').on('input', updateDecklist);
	$('#kde_decklist .day_txt').on('input', updateDecklist);
	$('#kde_decklist .year_txt').on('input', updateDecklist);
	$('#kde_decklist .initial_txt').on('input', updateDecklist);
	$('#kde_decklist .id_txt').on('input', updateDecklist);
	$('#kde_decklist .event_txt').on('input', updateDecklist);
	$('#kde_decklist .show_totals_cb').change(updateDecklist);
	$('#kde_decklist .print_btn').click(printDecklist);
	
	restrictInt($('#kde_registration .id_txt'));
	restrictInt($('#kde_registration .month_txt'));
	restrictInt($('#kde_registration .day_txt'));
	restrictInt($('#kde_registration .year_txt'));
	restrictInt($('#kde_registration .month2_txt'));
	restrictInt($('#kde_registration .day2_txt'));
	restrictInt($('#kde_registration .year2_txt'));
	$('#kde_registration .firstname_txt').on('input', updateRegistration);
	$('#kde_registration .middlename_txt').on('input', updateRegistration);
	$('#kde_registration .lastname_txt').on('input', updateRegistration);
	$('#kde_registration .id_txt').on('input', updateRegistration);
	$('#kde_registration .month_txt').on('input', updateRegistration);
	$('#kde_registration .day_txt').on('input', updateRegistration);
	$('#kde_registration .year_txt').on('input', updateRegistration);
	$('#kde_registration .month2_txt').on('input', updateRegistration);
	$('#kde_registration .day2_txt').on('input', updateRegistration);
	$('#kde_registration .year2_txt').on('input', updateRegistration);
	$('#kde_registration .event_txt').on('input', updateRegistration);
	$('#kde_registration .residence_txt').on('input', updateRegistration);
	$('#kde_registration .email_txt').on('input', updateRegistration);
	$('#kde_registration .print_btn').click(printRegistration);
	
	$('#profile_viewer .remove_btn').click(removeImageE);
	$('#profile_viewer .nsfw_cb').change(setNSFW);
	//$('#profile_username_txt').keyup(profileAutoCompleteE);
	$('#profile_viewer .send_pm_btn').click(openPrivateFromProfileE);
	$('#profile_viewer2 .send_pm_btn').click(openPrivateFromProfileE);
	$('#profile_viewer .follow_btn').click(followUserE);
	$('#profile_viewer .unfollow_btn').click(unfollowUserE);
	$('#profile_viewer .add_friend_btn').click(addFriendE);
	$('#profile_viewer .revoke_friend_btn').click(revokeFriendE);
	$('#profile_viewer .accept_request_btn').click(acceptFriendE);
	$('#profile_viewer .delete_friend_btn').click(deleteFriendE);
	$('#profile_viewer .block_user_btn').click(blockUserE);
	$('#profile_viewer .unblock_user_btn').click(unblockUserE);
	$('#profile_viewer .watch_duel_btn').click(watchDuelFromProfileE);
	$('#profile_viewer2 .watch_duel_btn').click(watchDuelFromProfileE);
	$('#profile_viewer .add_note_btn').click(addNoteE);
	$('#profile_viewer .view_all_comments_btn').click(viewAllComments);
	$('#profile_viewer #all_comments .content').scroll(appendUserComment);
	$('#profile_viewer #all_comments .back_to_profile_btn').click(backToProfile);
	$('#profile_viewer #all_friends .content').scroll(appendUserFriend);
	$('#profile_viewer #all_friends .back_to_profile_btn').click(backToProfile);
	$('#profile_viewer .view_all_friends_btn').click(viewAllFriends);
	$('#profile_viewer .match_ranking_txt').click(getMatchRanking);
	$('#profile_viewer .single_ranking_txt').click(getRankingE);	
	$('#profile_viewer #profile_bottom .reply_cb').change(toggleReply);
	$('#profile_viewer #profile_bottom .post_comment_btn').click(postComment);
	$('#profile_viewer .room_exit_btn').click(exitProfileViewer);
	$('#profile_viewer2 #profile_bottom2 .reply_cb').change(toggleReply);
	$('#profile_viewer2 #profile_bottom2 .post_testimonial_btn').click(postTestimonial);
	$('#profile_viewer2 .room_exit_btn').click(exitProfileViewer);
	$('#profile_viewer2 .save_btn').click(saveJudgeProfile);
	addButton($('#profile_viewer .next_thumb_btn'), nextThumb);
	addButton($('#profile_viewer .prev_thumb_btn'), prevThumb);
	addButton($('#profile_viewer #stats_next_btn'), statsNextE);
	view_more_comments_btn.click(loadMoreUserComments);
	for (var i = 0; i < 6; i++) {
		var thumb = new Thumbnail();
		thumb.css("left", i * 42);
		thumb.append($('<div class="nsfw"><div class="background"></div><div class="nsfw_txt">NSFW</div></div>'));
		$('#profile_viewer .thumbs').append(thumb);
	}
	for (var i = 0; i < 6; i++) {
		var thumb = new Thumbnail();
		thumb.css("left", i * 42);
		thumb.append($('<div class="no_image"><div class="background"></div><div class="no_image_txt">No Image</div></div>'));
		thumb.append($('<div class="nsfw"><div class="background"></div><div class="nsfw_txt">NSFW</div></div>'));
		$('#my_profile .thumbs').append(thumb);
	}
	$('#profile_content .nsfw_btn').click(showNSFW);
	$('#profile_song .play_btn').click(playProfileSong);
	$('#profile_song .pause_btn').click(stopProfileSong);
	addAutoComplete($('#profile_username_txt'));
	
	var avatar = new Avatar({});
	avatar.addClass("profile_avatar");
	var wins = $('<div class="wins unselectable">50<br>wins</div>');
	avatar.append(wins);
	wins.hide();
	$('#my_profile').prepend(avatar);
	$('#my_profile .profile_avatar .avatar_frame').attr("src", IMAGES_START + "svg/avatar_teal.svg");
	$('#my_profile .save_btn').click(saveProfile);
	$('#my_profile .nsfw_cb').change(setNSFW);
	$('#my_profile .remove_btn').click(removeImageE);
	$('#my_profile .profile_txt').keyup(updateSavedState);
	$('#my_profile .redeem_btn').click(redeemDonationE);
	var sleeve = new Sleeve();
	$('#my_profile #sleeve').append(sleeve);
	$('#my_profile #sleeve').click(showSleeves);
	$('#my_profile .upload_avatar_btn').change(uploadAvatar);
	if (!$('#my_profile .upload_avatar_btn').data("proxy")) { // delete
		$('#my_profile .upload_avatar_btn').data("proxy", $('<div></div>'))
	}
	$('#my_profile .upload_avatar_btn').data("proxy").hide();
	$('#my_profile .upload_btn').change(uploadSleeve);
	if (!$('#my_profile .upload_btn').data("proxy")) { // delete
		$('#my_profile .upload_btn').data("proxy", $('<div></div>'))
	}
	$('#my_profile .upload_btn').data("proxy").text("Upload");
	$('#my_profile #sleeve_select .sleeve_filter_rn').click(sleeveFilterE);
	$('#my_profile #sleeve_select .save_sleeve_btn').click(saveSleeve);
	$('#my_profile #sleeve_select .delete_sleeve_btn').click(deleteSleeveE);
	$('#my_profile .room_exit_btn').click(exitMyProfile);
	addButton($('#prev_sleeve_btn'), prevSleeveE);
	addButton($('#next_sleeve_btn'), nextSleeveE);
	addButton($('#my_profile #sleeve_select .exit_btn'),hideSleeves);
	addButton($('#my_profile .info_btn'), getDonationInfoE);
	addButton($('#my_profile .next_thumb_btn'), nextThumb);
	addButton($('#my_profile .prev_thumb_btn'), prevThumb);
	
	$('#donations .room_exit_btn').click(gotoMyProfile);
	
	$('#rankings .room_exit_btn').click(gotoMainMenu);
	$('#rankings .matches_rb').checked(true);
	$('#rankings .matches_rb').change(rankingsE);
	$('#rankings .singles_rb').change(rankingsE);
	$('#rankings .period_cb').change(rankingsE);
	$('#rankings .format_cb').change(rankingsE);
	addButton($('#by_rating_btn'), rankingsE);
	addButton($('#by_wins_btn'), rankingsE);
	addButton($('#by_experience_btn'), rankingsE);
	addButton($('#by_total_experience_btn'), rankingsE);

	$('#admin #ban_status .get_ban_status_btn').click(getBanStatusE);
	$('#admin #freeze_user .freeze_user_btn').click(freezeUserE);
	$('#admin #unban_user .unban_user_btn').click(unbanUserE);
	$('#admin #kick_user .kick_user_btn').click(kickUserE);
	$('#admin #warning_note .add_warning_btn').click(addWarningE);
	$('#admin .room_exit_btn').click(gotoMainMenu);
	addButton($('#admin .admin_next_btn'), gotoAdmin2);
	
	$('#admin2 #ip_check .check_ip_btn').click(checkIPE);
	$('#admin2 #computer_check .check_comp_btn').click(checkCompE);
	$('#admin2 #computer_check .next_btn').mouseenter(showObject);
	$('#admin2 #computer_check .next_btn').mouseleave(hideObject);
	$('#admin2 #admin_status .judge_cb').checked(true);
	$('#admin2 #admin_status .save_btn').click(setAdminE);
	$('#admin2 #reset_stats .reset_btn').click(resetStatsE);
	$('#admin2 #super_ban .ban_btn').click(superBanE);
	$('#admin2 .room_exit_btn').click(gotoMainMenu);
	$('#admin2 #ip_check .super_cb').mouseenter(function(){
		showObject($(this).data("proxy"));
	});
	$('#admin2 #ip_check .super_cb').mouseleave(function(){
		hideObject($(this).data("proxy"));
	});
	$('#admin2 #admin_status .username_txt').on('input', function(){
		$('#admin_status .save_btn').disable(!(admin_username && $('#admin_status .username_txt').val().toLowerCase() == admin_username.toLowerCase()));
		$('#admin_status .status_cb').disable(!(admin_username && $('#admin_status .username_txt').val().toLowerCase() == admin_username.toLowerCase()));
		$('#admin_status .judge_cb').disable(!(admin_username && $('#admin_status .username_txt').val().toLowerCase() == admin_username.toLowerCase()));
	});
	addButton($('#admin2 .admin_prev_btn'), gotoAdmin);
	addButton($('#admin2 .admin_next_btn'), gotoAdmin3);
	addButton($('#admin2 #computer_check .next_btn'), function(e){
		gotoAdmin2(e, true, parseInt($('#computer_check').css("top")) == 108);
	});
	
	$('#admin3 #alerts .add_user_btn').click(addAlert);
	$('#admin3 #restricted_phrases .add_phrase_btn').click(addRestrictedPhrase1);
	$('#admin3 #change_username .save_btn').click(changeUsername);
	$('#admin3 #terminate_account .terminate_btn').click(terminateAccountE);
	$('#admin3 #change_email .save_btn').click(changeEmail);
	$('#admin3 .room_exit_btn').click(gotoMainMenu);
	addButton($('#admin3 .admin_prev_btn'), gotoAdmin2);
	addButton($('#admin3 .admin_next_btn'), gotoSwitchboard);
	
	$('#switchboard .add_banned_ip_btn').click(addBannedIPE);
	$('#switchboard .add_bot_btn').click(addBotE);
	$('#switchboard .add_duel_btn').click(addDuelE);
	$('#switchboard .allow_special_chars_btn').click(allowSpecialCharacters);
	$('#switchboard .bypass_avatar_wins_btn').click(bypassAvatarWins);
	$('#switchboard .cancel_reboot_btn').click(cancelReboot);
	$('#switchboard .cards_fingerprint_btn').click(updateCardsFingerprintE);
	$('#switchboard .check_mentions_btn').click(checkMentionsE);
	$('#switchboard .crash_btn').click(crashE);
	$('#switchboard .create_auto_tourney_btn').click(createAutoTourney);
	$('#switchboard .days_old_btn').click(daysOldE);
	$('#switchboard .delete_all_cards_btn').click(deleteAllCardsE);
	$('#switchboard .empty_users_btn').click(emptyUsers);
	$('#switchboard .forbid_phrase_btn').click(forbidPhrase);
	$('#switchboard .garbage_collection_btn').click(gcE);
	$('#switchboard .get_detailed_actions_btn').click(getDetailedActionsE);
	$('#switchboard .get_user_id_btn').click(getUserIDE);
	$('#switchboard .kick_inactive_btn').click(kickInactive);
	$('#switchboard .load_announcement_btn').click(loadAnnouncement);
	$('#switchboard .lost_connections_btn').click(reportLostConnections);
	$('#switchboard .reboot_server_btn').click(rebootE);
	$('#switchboard .refresh_cards_btn').click(refreshCardsE);
	$('#switchboard .refresh_tourneys_btn').click(refreshTourneysE);
	$('#switchboard .refresh_videos_btn').click(refreshVideosE);
	$('#switchboard .reload_phrases_btn').click(loadIllegalPhrases);
	$('#switchboard .remove_banned_ip_btn').click(removeBannedIPs);
	$('#switchboard .remove_bot_btn').click(removeBotE);
	$('#switchboard .repair_statuses_btn').click(repairStatuses);
	$('#switchboard .report_actions_btn').click(reportActions);
	$('#switchboard .report_queries_btn').click(reportQueries);
	$('#switchboard .reset_decks_btn').click(resetDecksE);
	$('#switchboard .reset_searching_btn').click(resetSearching);
	$('#switchboard .restrict_by_exp_btn').click(restrictByExp);
	$('#switchboard .restrict_by_new_btn').click(restrictNewUsers);
	$('#switchboard .retry_actions_btn').click(retryActions);
	$('#switchboard .retry_actions2_btn').click(retryActions2);
	$('#switchboard .skim_clients_btn').click(skimClients);
	$('#switchboard .skim_duels_btn').click(skimDuels);
	$('#switchboard .skim_paused_games_btn').click(skimPausedGames);
	$('#switchboard .skim_queries_btn').click(skimQueries);
	$('#switchboard .skim_sockets_btn').click(skimSockets);
	$('#switchboard .skim_versions_btn').click(skimVersions);
	$('#switchboard .toggle_alphabetizing_btn').click(toggleAlphabetizing);
	$('#switchboard .toggle_custom_card1_btn').click(toggleCustomCard1);
	$('#switchboard .toggle_custom_card2_btn').click(toggleCustomCard2);
	$('#switchboard .toggle_doing_threads_btn').click(toggleDoingThreads);
	$('#switchboard .toggle_kicking_websockets_btn').click(toggleKickingWebsockets);
	$('#switchboard .toggle_print_queries_btn').click(togglePrintQueries);
	$('#switchboard .toggle_rated_btn').click(toggleRated);
	$('#switchboard .toggle_ratings_btn').click(toggleRatings);
	$('#switchboard .toggle_tourneys_btn').click(toggleTourneys);
	$('#switchboard .update_user_btn').click(updateUserE);
	$('#switchboard .update_version_btn').click(updateVersionE);
	$('#switchboard .watch_threads_btn').click(watchThreads);
	$('#switchboard .check_deck_cards_btn').click(checkDeckCards);
	$('#switchboard .room_exit_btn').click(gotoMainMenu);
	addButton($('#switchboard .admin_prev_btn'), gotoAdmin3);
	
	$('#moderator #mute_user .mute_btn').click(muteUserE);
	$('#moderator #unmute_user .unmute_btn').click(unmuteUserE);
	$('#moderator #set_ignored .set_ignored_btn').click(setIgnoredE);
	$('#moderator #unset_ignored .unset_ignored_btn').click(unsetIgnoredE);
	$('#moderator #check_statuses .check_statuses_btn').click(checkStatusesE);
	$('#moderator #hide_messages .hide_messages_btn').click(hideMessagesE);
	$('#moderator .room_exit_btn').click(gotoMainMenu);
	
	$('#settings .about_me .save_btn').click(saveAboutMe);
	$('#settings .profile_comments .save_btn').click(saveCommentsSettings);
	$('#settings .messages .save_btn').click(saveMessageSettings);
	$('#settings .profile_song .save_btn').click(saveSongE);
	$('#settings .profile_song .remove_btn').click(removeSongE);
	$('#settings .duel_stats .save_btn').click(saveStatsSettings);
	$('#settings .social_media .social_cb').change(updateSocialMedia);
	$('#settings .social_media .social_cb').change(getSocialMedia);
	$('#settings .social_media .save_btn').click(saveSocialMedia);
	$('#settings .preferences .save_btn').click(savePreferences);
	$('#settings .animation .save_btn').click(saveAnimation);
	$('#settings .account .logout_btn').click(endAllSessionsE);
	$('#settings .room_exit_btn').click(gotoMainMenu);
	addButton($('#settings .profile_song .info_btn'), songInfo);
	
	$('#confirm_email .confirm_email .confirm_btn').click(reconfirmEmailE);
	$('#confirm_email .room_exit_btn').click(gotoMainMenu);
	
	$('#messages .cin_txt').keydown(messagesEnterHandler);
	$('#messages .cin_txt').focus(saveMessagesVSP);
	$('#messages .cin_txt').blur(restoreMessagesVSP);
	$('#messages .cout_txt').blur(restoreMessagesVSP);
	$('#messages .cout_txt').scroll(saveMessagesVSP);
	$('#messages .timestamps_cb').change(filterMessages);
	$('#messages .filter_users_txt').on('input', filterMessageItems);
	$('#messages .filter_messages_txt').on('input', filterMessages);
	$('#messages .messages_content').scroll(verticalScrollE);
	$('#messages .room_exit_btn').click(gotoMainMenu);
	
	$('#browse_users .search_btn').click(browseUsers);
	$('#browse_users .update_location_btn').click(updatePosition);
	$('#browse_users .content').scroll(verticalScrollE);
	$('#browse_users .room_exit_btn').click(gotoMainMenu);
	
	$('#friend_requests .received_cb').change(loadFriendRequests);
	$('#friend_requests .accept_all_btn').click(acceptAllFriendRequests);
	$('#friend_requests .room_exit_btn').click(gotoMainMenu);
	
	$('#friends .room_exit_btn').click(gotoMainMenu);
	
	$('#comments .received_cb').change(loadComments);
	//$('#comments .content').scroll(verticalScrollE);
	$('#comments .content').scroll(appendComment);
	$('#comments .room_exit_btn').click(gotoMainMenu);
	
	$('#followed_users .room_exit_btn').click(gotoMainMenu);
	
	$('#blocked_users .room_exit_btn').click(gotoMainMenu);
	
	$('#change_password .change_btn').click(changePassword);
	$('#change_password .room_exit_btn').click(gotoMainMenu);
	
	$('#duel_records .type_cb').change(loadDuelRecords);
	$('#duel_records .period_cb').change(loadDuelRecords);
	$('#duel_records .content').scroll(duelRecordsScrollE);
	$('#duel_records .filter_txt').on('input', filterDuelRecords);
	$('#duel_records .room_exit_btn').click(gotoMainMenu);
	
	$('#tournament_locator .back_btn').click(storeBackE);
	$('#tournament_locator #post_review .post_review_btn').click(postReview);
	$('#tournament_locator #post_review_btn').click(postReviewE);
	$('#tournament_locator .search_btn').click(tourneySearchE);
	$('#tournament_locator .store_search .position_cb').change(useCurrentPositionE);
	$('#tournament_locator .store_search .position_cb').checked(false);
	$('#tournament_locator .room_exit_btn').click(gotoMainMenu);
	addButton($('#map .exit_btn'), hideMap);
	
	initUploader();
	$('#custom_cards #upload_card_btn').click(showUploader);
	$('#custom_cards #edit_card_btn').click(showEditor);
	$('#custom_cards #my_cards_btn').click(showMyCards);
	$('#custom_cards .clear_btn').click(clearCard);
	$('#custom_cards .delete_btn').click(deleteCardE);
	$('#custom_cards .room_exit_btn').click(gotoMainMenu);
	$('#custom_cards .ocg_limit_rb').hide();
	$('#custom_cards .id_txt').mouseenter(function(){
		showObject($(this));
		showObject($(this).data("proxy"));
	});
	$('#custom_cards .id_txt').mouseout(function(){
		hideObject($(this));
		hideObject($(this).data("proxy"));
	});
	addButton($('#custom_cards .prev_btn'), loadCard);
	addButton($('#custom_cards .next_btn'), loadCard);
	restrictInt($('#custom_cards .id_txt'));
	my_card = newCardFront();
	my_card.css("transform", "scale(0.5253, 0.5301)");
	my_card.initialize();
	my_card.removeImage();
	my_card.click(openCard);
	$('#my_card').html(my_card);
	resetCustomCards();
	
	
	$('#customs .content').scroll(verticalScrollE);
	$('#customs .room_exit_btn').click(gotoMainMenu);
	
	$('#admin_actions .content').scroll(verticalScrollE);
	$('#admin_actions .top').mouseenter(showObject);
	$('#admin_actions .top').mouseleave(hideObject);
	$('#admin_actions .action_cb').change(loadAdminActions);
	$('#admin_actions .limit_cb').change(loadAdminActions);
	$('#admin_actions .room_exit_btn').click(gotoMainMenu);

	$('#frozen_users .content').scroll(verticalScrollE);
	$('#frozen_users .room_exit_btn').click(gotoMainMenu);
	
	$('#beginners .content').scroll(verticalScrollE);
	$('#beginners .room_exit_btn').click(gotoMainMenu);
	
	$('#notes .content').scroll(verticalScrollE);
	$('#notes .room_exit_btn').click(gotoMainMenu);
	
	$('#tournaments .period_sel').change(loadTournamentsE);
	$('#tournaments .create_tourney_btn').click(createTourneyE);
	//$('#tournaments .join_tourney_btn').click(joinTourneyE);
	//$('#tournaments .back_btn').click(loadTournaments);
		$('#tournaments .back_btn').click(loadTournamentsE);
	$('#tournaments #accept_members .joinlist').dblclick(acceptMemberE);
	$('#tournaments #accept_members .accept_btn').click(acceptMemberE);
	$('#tournaments #accept_members .reject_btn').click(rejectMemberE);
	$('#tournaments #accept_members .check_btn').click(checkTourneyDeckE);
	$('#tournaments #accept_members .invite_btn').click(inviteFriendsE);
	//$('#tournaments #create_tourney input[type=date]').val(new Date().toLocaleDateString('en-CA'));
	$('#tournaments .min_date_dp').val('2002-03-08');
	$('#tournaments .max_date_dp').val(new Date().toLocaleDateString('en-CA'));
	$('#tournaments #create_tourney .start_registration_btn').click(startRegistrationE);
	/*$('#create_tourney .deck_check_cb').change(function(){
		$('#create_tourney .max_date_dp').disable(!$(this).is(":checked"));
		$('#create_tourney .banlist_sel').disable(!$(this).is(":checked"));
	});*/
	$('#create_tourney .my_banlists_btn').click(showBanlists);
	$('#my_banlists .banlist_back_btn').click(banlistBackE);
	//$('#my_banlists .edit_sel').disable(true);
	$('#my_banlists .edit_sel').change(loadBanlistE);
	$('#my_banlists .create_banlist_btn').click(newBanlistE);
	$('#my_banlists .banlist_sections .advanced_btn').click(banlistAdvancedE);
	$('#my_banlists .banlists2 .min_date_cb').change(function(){
		$('#my_banlists .banlists2 .min_date_dp:visible').disable(!$(this).is(":checked"));
	});
	$('#my_banlists .banlists2 .max_date_cb').change(function(){
		$('#my_banlists .banlists2 .max_date_dp:visible').disable(!$(this).is(":checked"));
	});
	$('#my_banlists .banlists2 .save_btn').click(saveBanlistE);
	$('#my_banlists .banlists2 .delete_btn').click(deleteBanlistE);
	fillOfficialBanlists();
	
	/*$('#my_banlists .banlists3 .all_cards_cb').change(function(){
		$('#my_banlists .banlists3 .min_date_cb:visible').disable(!$(this).is(":checked"));
		$('#my_banlists .banlists3 .max_date_cb:visible').disable(!$(this).is(":checked"));
		$('#my_banlists .banlists3 .min_date_cb:visible').checked(false);
		$('#my_banlists .banlists3 .max_date_cb:visible').checked(false);
		$('#my_banlists .banlists3 .min_date_cb:visible').change();
		$('#my_banlists .banlists3 .max_date_cb:visible').change();
		updateBanlistAdvanced();
	});
	$('#my_banlists .banlists3 .min_date_cb').change(function(){
		$('#my_banlists .banlists3 .min_date_dp:visible').disable(!$(this).is(":checked"));
		updateBanlistAdvanced();
	});
	$('#my_banlists .banlists3 .max_date_cb').change(function(){
		$('#my_banlists .banlists3 .max_date_dp:visible').disable(!$(this).is(":checked"));
		updateBanlistAdvanced();
	});*/
	
	
	
	
	
	
	$('#tournaments #create_tourney .browse_btn').click(uploadTourneyPicE);
	$('#tournaments #create_tourney .browse2_btn').change(uploadTourneyPic);
	$('#tournaments #create_tourney .browse2_btn').data("proxy").hide();
	//fancy_scrollbars ? $('#tournaments #create_tourney .browse2_btn').data("proxy").hide() : null;
	//$('#tournaments #create_tourney .no_limit_cb').checked(false);
	$('#tournaments #create_tourney .deck_check_cb').checked(false);
	$('#tournaments .room_exit_btn').click(gotoMainMenu);
	//$('#tournaments .content').scroll(verticalScrollE); // this will cause problems in storeClickE, all the other stores will append as scroll is triggered
	restrictInt($('#tournaments #create_tourney .max_txt'));
	addButton($('#tournaments #create_tourney .exit_btn'), hideCreateTourney);
	//addButton($('#tournaments #my_banlists .exit_btn'), hideBanlists);
	addButton($('#tournaments #my_banlists .exit_btn'), banlistBackE);
	addButton($('#tournaments #my_banlists .add_forbidden_btn'));
	add_adjudicator.detach();
	remove_adjudicator.detach();
	remove_player.detach();
	
	$('#call_admin_btn').click(callAdminE);
	$('#defeat_btn').click(admitDefeatE);
	$('#rematch_btn').click(rematchE);
	$('#end_turn').click(endTurnE);
	$('#end_turn').mouseenter(endTurnOver);
	$('#end_turn').mouseleave(endTurnOut);
	$('#start_turn').click(startTurnE);
	$('#done_siding_btn').click(doneSidingE);
	$('#swap_btn').click(swapCardsE);
	$('#siding_btn').click(startSidingE);
	
	//$('#duel .cin_txt').data("regex", /[^ -~\r\n●ÜúΩβα☆★ñéÉ#∞ä①②③④⑤⑥⑦⑧⑨・×áⱯ]/g);
	$('#duel .cin_txt').click(setDuelFocus);
	$('#duel .cin_txt').focus(setDuelFocus);
	$('#duel .cin_txt').on('input', duelChatTypeE);
	if (window.location.href.includes("auto_shuffle")) {
		$('#duel #auto_shuffle_lbl').show();
		$('#duel #auto_shuffle_cb').show();
		$('#duel #auto_shuffle_cb').checked(GET("auto_shuffle") == "true");
	}
	$('#watchers').dblclick(cellDoubleClickE);
	$('#cancel_duel_btn').click(cancelGameE);
	$('#host_loss_btn').click(hostLossE);
	$('#opponent_loss_btn').click(opponentLossE);
	//$('#view > .content').scroll(removeCardMenu);
	$('#view > .content').scroll(viewingScrollE);
	$('#auto_shuffle_cb').change(autoShuffleE);
	$('#shuffle_btn').click(shuffleHandE);
	$('#show_hand_btn').click(showHandE);
	$('#life_txt').click(setDuelFocus);
	$('#life_txt').focus(setDuelFocus);
	$('#life_txt').keydown(moveDuelFocus);
	$('#minus_btn').click(showPlus);
	$('#plus_btn').click(showMinus);
	$('#minus_btn, #plus_btn').mouseenter(function(){
		$('#minus_bg').show();
	});
	$('#minus_btn, #plus_btn').mouseout(function(){
		$('#minus_bg').hide();
	});
	$('#skill_btn').click(function(e){
		chooseSkill(e, changeSkill);
	});
	$('#skill_btn').mouseenter(function(){
		$('#skill_bg').attr("src", "images/svg/yellow_glow.svg");
	});
	$('#skill_btn').mouseout(function(){
		$('#skill_bg').attr("src", "images/svg/blue_glow.svg");
	});
	
	$('#pause_btn').click(pauseGameE);
	
	counters.forEach(function(e,i){
		addCounterDragging(e);
	});
	$('#duel_quit_btn').click(exitDuelE);
	$('#draw_btn').click(drawE);
	//$('#mulligan_btn').click(mulliganE);
	$('#duel .refresh_btn').click(refreshDuelChat);
	$('#duel .cout_txt').mouseenter(function(){
		TweenMax.to($('#duel .refresh_btn'), 0.75, {alpha:1});
	});
	$('#duel .cout_txt').mouseleave(function(){
		TweenMax.to($('#duel .refresh_btn'), 0.75, {alpha:0});
	});
	$('#reset_btn').click(resetDeckE);
	$('#duel .token_btn').mousedown(tokenDownE);
	$('#good_btn').mousedown(stillGoodE);
	$('#think_btn').click(thinkingE);
	$('#field_stats > span').click(editStatsE);
	$('#input2 .atk_txt, #input2 .def_txt').on('focus', saveEditStat);
	
	menu.mouseleave(menuRollOutE);
	addCounterDragging(counter_btn);
	addButton($('#duel .token_btn'), tokenE);
	addButton($('#die_btn'), dieE);
	addButton($('#coin_btn'), coinE);
	addButton($('#view .expand_btn'), addProxyE);
	addButton($('#good_btn'), allGoodE);
	addButton($('#input2 .ok_btn'), input2OK);
	addButton($('#input2 .cancel_btn'), cancelCallback);
	restrictInt($('#life_txt'));
	restrictIntATK($('#input2 .atk_txt'));
	restrictIntATK($('#input2 .def_txt'));
	
	goto('start');
	$('#card1').append(new Card());
	$('#card2').append(new Card());
	$('#card3').append(new Card());
	$('#card4').append(new Card());
	$('#card5').append(new Card());
	$('#card1 .card').data("cardfront").initializeFromData({"id":"6942","name":"Nekroz of Brionac","treated_as":"Nekroz of Brionac","effect":"You can Ritual Summon this card with any \"Nekroz\" Ritual Spell. Must be Ritual Summoned, without using \"Nekroz of Brionac\". You can only use each of these effects of \"Nekroz of Brionac\" once per turn.\r\u25cf You can discard this card; add 1 \"Nekroz\" monster from your Deck to your hand, except \"Nekroz of Brionac\".\r\u25cf You can target up to 2 face-up monsters on the field that were Special Summoned from the Extra Deck; shuffle them into the Deck.","pendulum_effect":"","card_type":"Monster","monster_color":"Ritual","is_effect":"1","type":"Warrior","attribute":"WATER","level":"6","ability":"","flip":"0","pendulum":"0","scale":"0","arrows":"","atk":"2300","def":"1400","tcg_limit":"3","ocg_limit":"3","serial_number":"26674724","tcg":"1","ocg":"1","pic":"1","hidden":"0"});
	$('#card2 .card').data("cardfront").initializeFromData({"id":"6754","name":"Qliphort Scout","treated_as":"Qliphort Scout","effect":"Booting in Replica Mode...\rAn error has occurred while executing C:sophiazefra.exe\rUnknown publisher.\rAllow C:\tierraqliphort.exe ? ...[Y]\rBooting in Autonomy Mode...","pendulum_effect":"You cannot Special Summon monsters, except \"Qli\" monsters. This effect cannot be negated. Once per turn: You can pay 800 LP; add 1 \"Qli\" card from your Deck to your hand, except \"Qliphort Scout\".","card_type":"Monster","monster_color":"Normal","is_effect":"0","type":"Machine","attribute":"EARTH","level":"5","ability":"","flip":"0","pendulum":"1","scale":"9","arrows":"","atk":"1000","def":"2800","tcg_limit":"3","ocg_limit":"3","serial_number":"65518099","tcg":"1","ocg":"1","pic":"1","hidden":"0"});
	$('#card3 .card').data("cardfront").initializeFromData({"id":"8030","name":"Pot of Desires","treated_as":"Pot of Desires","effect":"Banish 10 cards from the top of your Deck, face-down; draw 2 cards. You can only activate 1 \"Pot of Desires\" per turn.","pendulum_effect":"","card_type":"Spell","monster_color":"","is_effect":"0","type":"Normal","attribute":"","level":"0","ability":"","flip":"0","pendulum":"0","scale":"0","arrows":"","atk":"0","def":"0","tcg_limit":"3","ocg_limit":"3","serial_number":"35261759","tcg":"1","ocg":"1","pic":"1","hidden":"0"});
	$('#card4 .card').data("cardfront").initializeFromData({"id":"6634","name":"Odd-Eyes Pendulum Dragon","treated_as":"Odd-Eyes Pendulum Dragon","effect":"If this card battles an opponent's monster, any battle damage this card inflicts to your opponent is doubled.","pendulum_effect":"You can reduce the battle damage you take from an attack involving a Pendulum Monster you control to 0. During your End Phase: You can destroy this card, and if you do, add 1 Pendulum Monster with 1500 or less ATK from your Deck to your hand. You can only use each Pendulum Effect of \"Odd-Eyes Pendulum Dragon\" once per turn.","card_type":"Monster","monster_color":"Effect","is_effect":"1","type":"Dragon","attribute":"DARK","level":"7","ability":"","flip":"0","pendulum":"1","scale":"4","arrows":"","atk":"2500","def":"2000","tcg_limit":"3","ocg_limit":"3","serial_number":"16178681","tcg":"1","ocg":"1","pic":"1","hidden":"0"});
	$('#card5 .card').data("cardfront").initializeFromData({"id":"7057","name":"Zenmaiday","treated_as":"Zenmaiday","effect":"Once per turn: You can target 1 Machine-Type Xyz Monster you control; attach 1 \"Wind-Up\" monster from your hand or field to that monster as an Xyz Material. You can send this face-up card from the field to the Graveyard, then target 1 \"Wind-Up\" Xyz Monster you control; Special Summon, from your Extra Deck, 1 \"Wind-Up\" monster that is 1 Rank higher than that target, by using that target as Xyz Material. (This Special Summon is treated as an Xyz Summon. Xyz Materials attached to it also become Xyz Materials on the Summoned monster.) You cannot activate these effects in the same Chain.","pendulum_effect":"","card_type":"Trap","monster_color":"","is_effect":"0","type":"Continuous","attribute":"","level":"0","ability":"","flip":"0","pendulum":"0","scale":"0","arrows":"","atk":"0","def":"0","tcg_limit":"3","ocg_limit":"3","serial_number":"83319610","tcg":"1","ocg":"1","pic":"1","hidden":"0"});
	TweenMax.set($('.flying_card .card > .content'), {rotation:180});
	TweenMax.set($('#start #card1'), {rotation:-36});
	TweenMax.set($('#start #card2'), {rotation:36});
	TweenMax.set($('#start #card3'), {rotation:108});
	TweenMax.set($('#start #card4'), {rotation:180});
	TweenMax.set($('#start #card5'), {rotation:252});
	TweenMax.set($('#start .flying_card'), {z:-3390, rotationX:50});
	$('#start .flying_card').hide();
	setTimeout(function(){
		setTimeout(function(){
			$('html').off("mousedown", playIntroSong);
		}, 1200);
		TweenMax.to($('#spiral'), 2.5, {alpha:0.75, ease:Linear.easeNone});
		TweenMax.to($('#spiral'), 3, {alpha:0, ease:Linear.easeNone, delay:5});
		TweenMax.to($('#spiral'), 8, {scale:7, rotation:1280, ease:Linear.easeNone});
		$('#spiral').show();
		if (EDGE) {
			setTimeout(function(){
				tweenMonsters();
			}, 500);
		}
		else {
			$('#start .flying_card').show();
			TweenMax.fromTo($('#start #card1'), 0.5, {alpha:0}, {alpha:1});
			TweenMax.fromTo($('#start #card2'), 0.5, {alpha:0}, {alpha:1, delay:0.25});
			TweenMax.fromTo($('#start #card3'), 0.5, {alpha:0}, {alpha:1, delay:0.5});
			TweenMax.fromTo($('#start #card4'), 0.5, {alpha:0}, {alpha:1, delay:0.75});
			TweenMax.fromTo($('#start #card5'), 0.5, {alpha:0}, {alpha:1, delay:1});
			TweenMax.to($('#start #card1'), 3, {z:607, delay:0.25, onStart:function(){
				for (var i = 0; i < 50; i++) {
					twinkleE(Expo.easeOut);
				}
				twinkle_interval = setInterval(function(){
					twinkleE();
				}, 42);
				card_interval = setInterval(function(){
					cardE();
				}, 42);
			}, onComplete:function(){
				$('#start #card1').remove();
				clearInterval(card_interval);
			}});
			TweenMax.to($('#start #card2'), 3, {z:607, delay:0.5, onComplete:function(){
				$('#start #card2').remove();
			}});
			TweenMax.to($('#start #card3'), 3, {z:607, delay:0.75, onComplete:function(){
				$('#start #card3').remove();
			}});
			TweenMax.to($('#start #card4'), 3, {z:607, delay:1, onComplete:function(){
				tweenMonsters();
			}});
			TweenMax.to($('#start #card5'), 3, {z:607, delay:1.25, onComplete:function(){
				$('#start #card5').remove();
			}});
		}
	}, 100);
	setTimeout(function(){
		if ($('#cross').is(":visible")) {
			playSound(IntroSong);
			return;
		}
		$('html').on("mousedown", playIntroSong);
	}, 1);
	$('#online_users, #calls').hide(); // For some reason, this is needed in order to take a screenshot on the front page in Safari
	
	function tweenMonsters() {
		$('#start #card4').remove();
		$('#monsters').show();
		TweenMax.fromTo($('#brionac'), 0.5, {z:-2300, alpha:0}, {z:0, alpha:1, ease:Expo.easeInOut, delay:0});
		TweenMax.fromTo($('#scout'), 0.5, {z:-2300, alpha:0}, {z:0, alpha:1, ease:Expo.easeInOut, delay:0.2});
		TweenMax.fromTo($('#hanzo'), 0.5, {z:-2300, alpha:0}, {z:0, alpha:1, ease:Expo.easeInOut, delay:0.4});
		TweenMax.fromTo($('#hornet'), 0.5, {z:-2300, alpha:0}, {z:0, alpha:1, ease:Expo.easeInOut, delay:0.6});
		TweenMax.fromTo($('#neptabyss'), 0.5, {z:-2300, alpha:0}, {z:0, alpha:1, ease:Expo.easeInOut, delay:0.8});
		TweenMax.fromTo($('#gorilla'), 0.5, {z:-2300, alpha:0}, {z:0, alpha:1, ease:Expo.easeInOut, delay:1});
		
		TweenMax.fromTo($('#brionac'), 1.5, {z:0}, {z:226, ease:Linear.easeNone, delay:0.5});
		TweenMax.fromTo($('#scout'), 1.5, {z:0}, {z:226, ease:Linear.easeNone, delay:0.7});
		TweenMax.fromTo($('#hanzo'), 1.5, {z:0}, {z:226, ease:Linear.easeNone, delay:0.9});
		TweenMax.fromTo($('#hornet'), 1.5, {z:0}, {z:226, ease:Linear.easeNone, delay:1.1});
		TweenMax.fromTo($('#neptabyss'), 1.5, {z:0}, {z:226, ease:Linear.easeNone, delay:1.3});
		TweenMax.fromTo($('#gorilla'), 1.5, {z:0}, {z:226, ease:Linear.easeNone, delay:1.5});
		
		TweenMax.fromTo($('#brionac'), 0.5, {z:226}, {z:910, ease:Linear.easeNone, delay:2, onComplete:function(){
			$('#brionac').detach();
		}});
		TweenMax.fromTo($('#scout'), 0.5, {z:226}, {z:910, ease:Linear.easeNone, delay:2.2, onComplete:function(){
			$('#scout').hide();
		}});
		TweenMax.fromTo($('#hanzo'), 0.5, {z:226}, {z:910, ease:Linear.easeNone, delay:2.4, onComplete:function(){
			$('#hanzo').hide();
		}});
		TweenMax.fromTo($('#hornet'), 0.5, {z:226}, {z:910, ease:Linear.easeNone, delay:2.6, onComplete:function(){
			$('#hornet').hide();
		}});
		TweenMax.fromTo($('#neptabyss'), 0.5, {z:226}, {z:910, ease:Linear.easeNone, delay:2.8, onComplete:function(){
			$('#neptabyss').hide();
		}});
		TweenMax.fromTo($('#gorilla'), 0.5, {z:226}, {z:910, ease:Linear.easeNone, delay:3, onComplete:function(){
			$('#gorilla').hide();
			clearInterval(twinkle_interval);
			if (currentLabel != "start") {
				return;
			}
			TweenMax.fromTo($('#front_page'), 1, {alpha:0, z:-200}, {alpha:1, z:0, transformPerspective:600, ease:Circ.easeInOut, onComplete:function(){
				$('#front_page').css("transform", "unset");
				$('#start').hide();
			}});
			TweenMax.to($('#spiral'), 1, {alpha:0, ease:Circ.easeInOut}); // mainly for Edge
			gotoFrontPage();
			$('#start').show();
			$('#skip_intro_btn').hide();
			
			setTimeout(function(){
				loadGuild();
			}, 1500);
		}});
	}
	
	//loadGuild();
	
	setTimeout(function(){
		//loadGuild();
	}, 4000);
}

function Twinkle() {
	var twinkle = $('<img class="twinkle" src="' + IMAGES_START + 'twinkle.png" />');
	twinkle.css("left", 400 + Math.random() * 224);
	twinkle.css("top", 200 + Math.random() * 240);
	TweenMax.set(twinkle, {scale:0.066});
	return twinkle;
}

function twinkleE(ease) {
	if (!ease) {
		ease = Linear.easeNone;
	}
	var twinkle = new Twinkle();
	$('#start .cards').append(twinkle);
	TweenMax.fromTo(twinkle, 1.3, {z:-400}, {z:600, "ease":ease, onComplete:function(){
		twinkle.remove();
	}});
}

function cardE() {
	var card = $('<img class="cardback" src="' + CARD_START + 'cardback.jpg" />');
	card.css("left", 300 + Math.random() * 424);
	card.css("top", 200 + Math.random() * 240);
	TweenMax.set(card, {scale:0.1, rotationX:90, rotationZ:45 + Math.random() * 45});
	/*if (parseInt(card.css("left")) >= 512) {
		if (parseInt(card.css("top")) >= 320) {
			//card.data("rotationZ", 270 + Math.random() * 45);
			card.data("rotationZ", 315 + Math.random() * 45);
		}
		else {
			card.data("rotationZ", 225 + Math.random() * 45);
		}
	}
	else {
		if (parseInt(card.css("top")) >= 320) {
			card.data("rotationZ", 45 + Math.random() * 45);
		}
		else {
			//card.data("rotationZ", 90 + Math.random() * 45);
			card.data("rotationZ", 135 + Math.random() * 45);
		}
	}
	TweenMax.set(card, {scale:0.1, rotationX:90, rotationZ:card.data("rotationZ")});*/
	$('#start .cards').append(card);
	TweenMax.fromTo(card, 1, {z:-400}, {z:600, ease:Linear.easeNone, onComplete:function(){
		card.remove();
	}});
}

function Thumbnail() {
	var thumbnail = $('<div class="thumbnail unselectable"></div>');
	var img = $('<img src="' + IMAGES_START + 'blank.png" />');
	img[0].onload = function(){
		var img = this;
		img.style.height = thumbnail.width() + "px";
		img.style.clipPath = "unset";
		if (img.naturalHeight > img.naturalWidth && img.src.indexOf(".gif") < 0) {
			img.style.height = (((img.naturalHeight / img.naturalWidth * thumbnail.width()) / thumbnail.width()) * 100) + "%";
			img.style.clipPath = "inset(0px 0px " + ((1 - (img.naturalWidth / img.naturalHeight)) * 100) + "% 0px)";
		}
	};
	var wins_needed = $('<div class="wins_needed"><div class="background"></div></div>');
	var wins_txt = $('<div class="wins_txt"></div>');
	wins_txt.html("1000<br>wins");
	wins_needed.append(wins_txt);
	wins_needed.hide();
	
	thumbnail.append(img);
	thumbnail.append(wins_needed);
	return thumbnail;
}













function Sleeve() {
	var sleeve = $('<div class="sleeve"></div>');
	var cardback = $('<img class="cardback" src="' + CARD_START + 'cardback.jpg" width="100" height="145" />');
	var img = $('<img class="image" src="' + IMAGES_START + 'blank.png" />');
	var exp_needed = $('<div class="exp_needed"></div>');
	var exp_txt = $('<span class="exp_txt"></span>');
	exp_needed.append(exp_txt);
	
	sleeve.append(cardback);
	sleeve.append(img);
	sleeve.append(exp_needed);
	return sleeve;
}

function MessageItem(data) {
	var obj = $('<div class="message_item"></div>');
	
	var date_txt = $('<div class="date_txt arial_rounded18"></div>');
	date_txt.text(data.date);
	
	var avatar = new Avatar(data);
	avatar.off("click");
	avatar.click(getMessages);
	
	var username_txt = $('<span class="username_txt bisque selectable">' + data.u + '</span>')
	username_txt.text(data.username);
	
	obj.append(date_txt);
	obj.append(avatar);
	obj.append(username_txt);
	return obj;
}

function filterObject(obj) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (obj[key] === ""|| obj[key] === 0) {
				obj[key] = null;
			}
		}
	}
}

function Send(data) {
	action = JSON.stringify(data, function(k,v){
		if (v == null) {
			v = undefined;
		}
		return v;
	});
	resend();
}

function resend() {
	searching = false;
	if (!websocket) {
		//console.log(action);
		hideDim();
		return;
	}
	try {
		websocket.send(action);
	}
	catch(e) {
		console.log('Failed to send data');
		closedE();
	}
}

function tweenMenu(fast) {
	var s = simple;
	if (fast) {
		s = fast;
	}
	$('#menu_content .menu_btn:visible').each(function(i,e){
		TweenMax.set(e, {top:i * 76});
		if (!s) {
			TweenMax.fromTo(e, 0.7, {left:-400, alpha:0}, {left:0, alpha:1, ease:Expo.easeInOut, delay:0.03 * i});
		}
	});
	setTimeout(function(){
		$('#menu_content .os-content-arrange').css("height", 76 * $('#menu_content .menu_btn:visible').length);
	}, 1000);
}

function inStatusArr(id, pic, nsfw) {
	for (var i = 0; i < all_status_arr.length; i++) {
		if (all_status_arr[i].data("id") == id) {
			var status = all_status_arr[i];
			all_status_arr.splice(i, 1);
			if (status.find('.avatar').data("pic") != getAvatarStart(pic)) {
				return null;
			}
			if (~~status.find('.avatar .nsfw') != nsfw) {
				return null;
			}
			if (~~status.find('.avatar .nsfw') && always_show_nsfw) {
				return null;
			}
			return status;
		}
	}
	return null;
}

function Status(data) {
	var status = $('<div class="status"></div>');
	status.data("id", data.id);
	status.data("username", data.u);
	
	var avatar = new Avatar(data);
	
	var username_txt = $('<span class="username_txt selectable size24"></span>');
	username_txt.text(data.u);
	
	var status_txt = $('<div class="status_txt size18 cyan"></div>');
	if (data.html) {
		status_txt.html(addBreaks(data.m));
	}
	else {
		status_txt.html('<span class="not_link">' + escapeHTMLWithLinks(data.m, true) + '</span>');
	}
	
	var date_txt = $('<div class="date_txt arial_rounded18"></div>');
	
	//var circles = $('<div class="circles"><img src="' + IMAGES_START + 'svg/circles.svg" /></div>');
	//circles.click(openStatus);
	
	var like_btn = new LikeButton(data);
	like_btn.data("type", "status");
	like_btn.data("likeX", 14);
	addButton(like_btn);
	
	var likes = new Likes(data);
	likes.data("type", "status");
	likes.data("likeX", 21);
	
	status.append(avatar);
	status.append(username_txt);
	status.append(date_txt);
		//status.append(circles);
	status.append(like_btn);
	status.append(likes);
	status.append(status_txt);
	
	if (!data.r) {
		var reply_btn = $('<div class="reply_btn">Reply</div>');
		reply_btn.click(replyToStatusE);
		status.append(reply_btn);
	}
	
	
	
	//if (data.u == username || admin > 2 || moderator) {
		var delete_btn = $('<div class="delete_btn">Delete</div>');
		delete_btn.click(deleteStatusE);
		status_txt.addClass("selectable");
		status.append(delete_btn);
	//}
	/*if (data.h && moderator) {
		status.data("hidden", data.h);
		status.addClass("hidden");
	}*/
	if (data.h) {
		status.data("h", data.h);
	}
	
	
	
	if (data.private && moderator) {
		status.css("color", "#ff7777");
	}
	if (streaming) {
		username_txt.text(censor(data.u));
		status_txt.text(censor(data.m));
	}
	
	
	// this block was in postStatusResponse
	status.find('.delete_btn')[0].style.display = (status.data("username") == username || admin > 2 || moderator) ? "block" : "none";
	(status.data("h") && moderator) ? status.addClass("hidden") : status.removeClass("hidden");
	if (status.find('.avatar').data("nsfw") && username != status.data("username")) {
		stopGif(status.find('.avatar .image')[0]);
	}
	status.find('.date_txt').text("Just now");
	//status.data("timestamp", data.date);
	status.data("timestamp", data.date);
	
	/*status.mouseenter(function(e){
		//updateMouse(e);
		$('.circles').hide();
		circles.show();
		TweenMax.to(circles, 1, {"alpha":1});
	});
	status.mouseleave(function(e){
		//status.css("height")
		updateMouse(e);
		if (!inBounds2(status)) {
			console.log('hiding');
			$('.circles').hide();
		}
		//console.log('mouseleave');
		//TweenMax.to(circles, 1, {"alpha":0, "onComplete":function(){
		//	circles.hide();
		//}});
	});*/
	//status.mousemove(function(){
	//	console.log('mousemove');
	//});
	
	/*
	status.hover(function(){
		circles.show();
		TweenMax.to(circles, 1, {"alpha":1});
	}, function(){
		console.log('mouseleave');
		TweenMax.to(circles, 1, {"alpha":0, "onComplete":function(){
			circles.hide();
		}});
	});
	*/
	
	
	return status;
}

$('#statuses').mouseleave(function(){
	//$('.circles').hide();
});

function openStatus() {
	window.open(URL_START + "status?id=" + $(this).parents('.status').data("id"));
}

function Reply(data) {
	var reply = new Status(data);
	reply.addClass("reply");
	reply.data("reply_to", data.r);
	reply.find('.like_btn').data("likeX", 69);
	reply.find('.likes').data("likeX", 76);
	return reply;
}

function loadStatusUpdates() {
	//if ($('#status_cb option:selected').text() == "") {
	if ($('#status_cb option:selected').val() == "ignore") {
		return;
	}
	if ($('#status_cb').val() == "id") {
		$('#status_cb').selectedIndex(status_cb_index);
		getInput("Search Status", "Enter the Status ID:", "", 0, function(){
			if ($('#input .input_txt').val() == "") {
				errorE("Status ID is blank");
				return;
			}
			status_cb_index = 0;
			fixStatusComboBox(true);
			Send({"action":"Load statuses", "type":"id", "id":parseInt($('#input .input_txt').val())});
			showDim();
		}, /[^0-9]/g);
	}
	else if ($('#status_cb').val() == "username") {
		$('#status_cb').selectedIndex(status_cb_index);
		addAutoComplete($('#input .input_txt'));
		getInput("Search Statuses", "Search statuses by username:", "", 0, function(){
			if ($('#input .input_txt').val() == "") {
				errorE("Username is blank");
				return;
			}
			status_cb_index = 0;
			fixStatusComboBox(true);
			Send({"action":"Load statuses", "type":"username", "username":$('#input .input_txt').val()});
			showDim();
		});
	}
	else {
		status_cb_index = $('#status_cb').prop("selectedIndex");
		fixStatusComboBox();
		Send({"action":"Load statuses", "type":$('#status_cb').val()});
	}
	showDim();
	//endCircleCycle();
	menuTimer.reset();
}

function fixStatusComboBox(b) {
	if (b) {
		if ($('#status_cb option:first').text() != "" && status_cb_index == 0) {
			$('#status_cb').prepend($('<option value="ignore"></option>'));
			$('#status_cb').selectedIndex(0);
		}
		else {
			$('#status_cb').selectedIndex(status_cb_index);
		}
	}
	else {
		if ($('#status_cb option:first').text() == "") {
			$('#status_cb option:first').remove();
			status_cb_index--;
		}
	}
}

function editStatusResponse(data) {
	for (var i = 0; i < status_arr.length; i++) {
		if (status_arr[i].data("id") == data.id) {
			status_arr[i].find('.status_txt').html('<span>' + escapeHTMLWithLinks(data.status, true) + '</span><font style="font-size: 11px;" color="#BBBBBB"> (edited)</font>');
			restoreStatuses();
			return;
		}
	}
	for (i = 0; i < statuses_data.length; i++) {
		if (statuses_data[i].id == data.id) {
			statuses_data[i].m = data.status;
			break;
		}
	}
}

function deleteStatusResponse(data) {
	if (data.action == "Soft delete status") {
		//if (onScreen(getStatus(data.id)[0]) && currentLabel == "main_menu") {
		if (currentLabel == "main_menu") {
			return;
		}
	}
	var statusTop = 0;
	var totalHeight = 0;
	for (var i = 0; i < status_arr.length; i++) {
		if (status_arr[i].data("id") == data.id) {
			statusTop = parseInt(status_arr[i].css("top"));
			//totalHeight = status_arr[i][0].scrollHeight + 10;
			totalHeight = status_arr[i][0].scrollHeight;
			for (var j = i + 1; j < status_arr.length; j++) {
				if (status_arr[j].data("reply_to") == status_arr[i].data("id")) {
					totalHeight += status_arr[j][0].scrollHeight;
					status_arr[j].hide();
					status_arr[j].remove();
					status_arr.splice(j, 1);
					j--;
				}
				else {
					break;
				}
			}
			removeStatusData(data.id);
			status_arr[i].hide();
			status_arr[i].remove();
			status_arr.splice(i, 1);
			if (currentLabel != "main_menu") {
				return;
			}
			if (post_reply.data("id") == data.id) {
				TweenMax.to(post_reply, 0.5, {alpha:0, ease:Expo.easeInOut, onComplete:function(){
					post_reply.hide();
				}});
			}
			if (post_reply.is(":visible")) {
				var reset_focus = false;
				if (post_reply.find('.status_txt').is(":focus") && onScreen(post_reply[0])) {
					reset_focus = true;
				}
				var id = post_reply.data("id");
				var reply_to_username = post_reply.data("reply_to_username");
				var previousY = post_reply.css("top");
				if (id != data.id) {
					post_reply.data("id", -1);
				}
				post_reply.data("reply_to_username", "");
				replyToStatus(id, reply_to_username);
				if (reset_focus) {
					post_reply.find('.status_txt').focus();
				}
				TweenMax.fromTo(post_reply, 0.5, {top:previousY}, {top:parseInt(post_reply.css("top")), ease:Expo.easeInOut});
				
				if (parseInt(post_reply.css("top")) > statusTop && reset_focus) {
					tweenScrollbar($('#statuses'), 1, {scrollTop:$('#statuses').scrollTop() - totalHeight});
				}
			}
			else {
				restoreStatuses();
			}
			break;
		}
	}
}

function ableToPost(str) {
	if (str == "") {
		errorE("Status is blank");
		return false;
	}
	str = stripSpaces(str);
	str = replaceReturns(str);
	if (str.split('\r').length - 1 > 8 && !moderator) {
		errorE("There are too many line breaks in this status update");
		return false;
	}
	if (str.split('\n').length - 1 > 8 && !moderator) {
		errorE("There are too many line breaks in this status update");
		return false;
	}
	if (muted) {
		if (muteSeconds == 0) {
			errorE("You are forbidden from posting status updates");
			return false;
		}
		errorE("You must wait " + muteSeconds + " seconds before you can post a status update");
		return false;
	}
	if (str == "Posting as " + username + "...") {
		return false;
	}
	return true;
}

function postStatus() {
	var str = $('#post_status .status_txt').val();
	if (!ableToPost(str)) {
		return;
	}
	if (postedStatusRecently && moderator < 2) {
		errorE("You must wait " + statusSeconds + " seconds before you can post another status");
		return;
	}
	if (!agreed_to_terms && !$('#post_status .nsfw_cb').is(":checked")) {
		getConfirmation("Post Status", "Do you confirm your status post abides by the rules listed <font color='#0077FF'><a href='https://www.duelingbook.com/rules#statuses' target='_blank'><u>here</u></a></font>?", function(){
			agreed_to_terms = true;
			postStatus(e);
		}, null, true);
		showDim();
		return;
	}
	showDim();
	$(':focus').blur();
	Send({"action":"Post status", "status":str, "html":~~$('#post_status .html_cb').is(":checked"), "nsfw":~~$('#post_status .nsfw_cb').is(":checked")});
	postedStatusRecently = true;
	statusSeconds = 360;
	statusTimer.start();
}

function postReply() {
	var str = $('#post_reply .status_txt').val();
	if (!ableToPost(str)) {
		return;
	}
	if (postedReplyRecently && moderator < 2) {
		errorE("You must wait " + replySeconds + " seconds before you can post another reply");
		return;
	}
	if (!agreed_to_terms && !$('#post_status .nsfw_cb').is(":checked")) {
		getConfirmation("Post Status", "Do you confirm your status post abides by the rules listed <font color='#0077FF'><a href='https://www.duelingbook.com/rules#statuses' target='_blank'><u>here</u></a></font>?", function(){
			agreed_to_terms = true;
			postReply(e);
		}, null, true);
		showDim();
		return;
	}
	postedReplyRecently = true;
	replySeconds = 20;
	replyTimer.start();
	if (post_reply.data("id") >= 0) {
		showDim();
		Send({"action":"Post status", "status":str, "reply_to":post_reply.data("id"), "reply_to_username":post_reply.data("reply_to_username"), "html":~~$('#post_reply .html_cb').is(":checked"), "nsfw":~~$('#post_reply .nsfw_cb').is(":checked")});
	}
	post_reply.data("id", 0);
	post_reply.data("reply_to_username", "");
	TweenMax.to(post_reply, 0.5, {alpha:0, ease:Expo.easeInOut, onComplete:function(){
		post_reply.hide();
	}});
}

function updateStatusSeconds() {
	updateTourneySeconds();
	if (currentLabel != "main_menu") {
		return;
	}
	for (var i = 0; i < status_arr.length; i++) {
		try {
			status_arr[i].find('.date_txt').text(getTimeAgo(status_arr[i].data("timestamp").getTime()));
		}
		catch(err) {
			console.log(err);
			console.log('%cproblem with status #' + status_arr[i].data("id"), 'background: #ffacac; color: #412424');
			console.log('%cproblem with status ' + status_arr[i], 'background: #ffacac; color: #412424');
			console.log('%cproblem with status ' + JSON.stringify(status_arr[i]), 'background: #ffacac; color: #412424');
			console.log('i = ' + i + ', status_arr.length = ' + status_arr.length);
			console.log('status_arr[i].parent() = ' + status_arr[i].parent());
			console.log('status_arr[i].parent().length = ' + status_arr[i].parent().length);
			console.log('status_arr[i].find(".status_txt").text() = ' + status_arr[i].find(".status_txt").text());
		}
	}
}

function editStatusE(e) {
	var status = $(e.currentTarget).parent();
	var str = status.find('textarea').val();
	if (!ableToPost(str)) {
		return;
	}
	Send({"action":"Edit status", "id":status.data("id"), "status":str});
	status.data("timer").callback();
}

function deleteStatusE(e) {
	status_id = $(this).parent().data("id");
	if (moderator) {
		var usr = $(this).parent().data("username");
		var options = '<option value="Delete status">Delete</option>';
		options += '<option value="Approve status">Approve</option>';
		options += '<option value="Delete and warn">Delete and Warn</option>';
		options += '<option value="Soft delete status">Soft Delete</option>';
		options += '<option value="Set ignored">Set Ignored</option>';
		options += '<option value="Status feedback">Leave Feedback</option>';
		getComboBox("Delete Status", "What would you like to do?", options, 0, function(){
			switch ($('#combo .combo_cb').val()) {
				case "Delete status":
					deleteStatus(false);
					break;
				case "Delete and warn":
					deleteStatus(true);
					break;
				case "Soft delete status":
					softDeleteStatus();
					break;
				case "Set ignored":
					setIgnored(usr, false, status_id);
					break;
				case "Approve status":
					approveStatus();
					break;
				case "Status feedback":
					statusFeedback(usr, false, status_id);
					break;
			}
		});
	}
	else {
		getConfirmation("Delete Status", "Are you sure you want to delete this status post?", function(){
			deleteStatus(false);
		});
	}
	showDim();
}

function addStatusData(data) {
	if (~~data.r <= 0) {
		statuses_data.splice(0, 0, data);
		if ($('#status_cb').val() == "ignore") {
			return;
		}
		for (var k = statuses_data.length - 1; k >= 0; k--) {
			if (~~statuses_data[k].r > 0) {
				statuses_data.splice(k, 1);
				continue;
			}
			if (~~statuses_data[k].r == 0) {
				statuses_data.splice(k, 1);
				break;
			}
		}
		return;
	}
	for (var i = statuses_data.length - 1; i >= 0; i--) {
		if (statuses_data[i].id == ~~data.r || ~~statuses_data[i].r == ~~data.r) {
			statuses_data.splice(i + 1, 0, data);
			break;
		}
	}
	for (i = 0; i < statuses_data.length; i++) {
		if (statuses_data[i].u == data.u) {
			statuses_data[i].p = data.p;
			statuses_data[i].nsfw = data.nsfw;
		}
	}
}

function removeStatusData(id) {
	for (var i = statuses_data.length - 1; i >= 0; i--) {
		if (statuses_data[i].id == id || ~~statuses_data[i].r == id) {
			statuses_data.splice(i, 1);
		}
	}
}

function postStatusResponse(data) {
	//if (blocked_arr.includes(data.u)) {
	//if (isBlocked(data.u)) {
	if (blocked_arr.includes(data.u) && !moderator || blocked_by_you_arr.includes(data.u)) {
		return;
	}
	for (var i = 0; i < statuses_data.length; i++) {
		if (statuses_data[i].id == data.id) {
			getStatus(data.id).removeClass("hidden");
			getStatus(data.id).css("opacity", 1);
			return;
		}
	}
	if (data.reply_to_username) {
		//if (blocked_arr.includes(data.reply_to_username)) {
		//if (isBlocked(data.reply_to_username)) {
		if (blocked_arr.includes(data.reply_to_username) && !moderator || blocked_by_you_arr.includes(data.reply_to_username)) {
			return;
		}
		var notification = new Notification();
		notification.setupReply();
		notification.data("id", data.id);
		notification.data("callback", function(){
			var timer = new Timer(1000);
			if (currentLabel != "main_menu") {
				gotoMainStatuses();
				//timer.callback = findStatus;
				timer.callback = function(){
					timer.reset();
					timer = null;
					findStatus(data);
				};
				timer.start();
			}
			else {
				//findStatus();
				findStatus(data);
			}
			
			/*function findStatus() {
				timer.reset();
				timer = null;
				for (var i = 0; i < status_arr.length; i++) {
					//TweenMax.killTweensOf(status_arr[i]); // this causes problems
					status_arr[i].css("left", 0);
					status_arr[i].css("opacity", 1);
					if (status_arr[i].data("hidden")) {
						status_arr[i].css("opacity", 0.35);
					}
					if (status_arr[i].data("id") == data.id) {
						tweenScrollbar($('#statuses'), 0.7, {scrollTop:status_arr[i].data("statusY") - (revamped ? 610 : 460) + 10, ease:Expo.easeInOut}); // idk where 460 or 610 come from
					}
				}
			}*/
		});
		addToNotifications(notification, true);
	}
	data.date = new Date();
	addStatusData(data);
	if (currentLabel != "main_menu") {
		return;
	}
	var reply;
	var replyY = 0;
	var num = 0;
	var tween = false;
	var max = false;
	var time = 1;
	var maxVSP = $('#statuses').scrollMax();
	if ($('#statuses').scrollTop() >= maxVSP) {
		max = true;
		time = 0;
	}
	if (~~data.r > 0) {
		reply = new Reply(data);
		num = 1;
	}
	else {
		reply = new Status(data);
	}
	if (data.u == username) {
		hideDim();
	}
	var i = 0;
	var statusY = 0;
	if (~~data.r > 0) {
		for (i = 0; i < status_arr.length; i++) {
			if (status_arr[i].data("id") == post_reply.data("id")) {
				tween = true;
			}
			if (~~data.r == status_arr[i].data("id")) {
				for (var j = i + 1; j < status_arr.length; j++) {
					if (status_arr[j].data("id") == post_reply.data("id")) {
						tween = true;
					}
					if (status_arr[j].hasClass("reply")) {
						i++;
					}
					else {
						break;
					}
				}
				break;
			}
		}
		if (i >= status_arr.length) {
			return;
		}
		statusY = parseInt(status_arr[i].css("top")) + status_arr[i][0].scrollHeight + 10;
	}
	else {
		tween = true;
	}
	reply.data("statusY", statusY);
	reply.css("top", statusY);
	status_arr.splice(i + num, 0, reply);
	insertAt(i + num, reply, $('#statuses'));
	if (data.u == username || moderator >= 2) {
		var save_btn = $('<div class="save_btn">Save</div>');
		save_btn.click(editStatusE);
		save_btn.hide();
		reply.append(save_btn);
		
		var textarea = $('<textarea>' + data.m + '</textarea>');
		textarea.on("click", function(){
			textarea.off("click");
			reply.find('.status_txt').hide();
			textarea.css("opacity", 1);
		});
		textarea.on("input", function(){
			save_btn.show();
			textarea.off("input");
		});
		textarea.insertBefore(reply.find('.status_txt'));
		textarea.height(textarea[0].scrollHeight);
		textarea.css("opacity", 0);
		reply.find('.status_txt').addClass("disabled_status");
		
		var edit_timer = new Timer(45000);
		edit_timer.callback = function(){
			edit_timer.reset();
			edit_timer = null;
			if (reply.parent().length == 0) {
				return;
			}
			reply.find('.status_txt').html('<span>' + escapeHTMLWithLinks(textarea.val(), true) + '</span>');
			reply.find('.status_txt').removeClass("disabled_status");
			reply.find('.status_txt').show();
			textarea.remove();
			save_btn.hide();
		};
		edit_timer.start();
		reply.data("timer", edit_timer);
	}
	manageLikes(reply, data);
	if ($('#statuses').scrollTop() >= maxVSP) {
		console.log('is max');
		max = true;
	}
	var maxVSP = $('#statuses').scrollMax();
	if ($('#statuses').scrollTop() >= maxVSP && $('#post_status .status_txt').is(":focus")) {
		//addEventListener(Event.ENTER_FRAME, scrollStatusMaxE);
	}
	TweenMax.from(reply, 0.8, {left:parseInt(reply.css("left")) + 600, alpha:0, ease:Expo.easeInOut, onComplete:function(){
		//removeEventListener(Event.ENTER_FRAME, scrollStatusMaxE);
	}});
	if (post_reply.data("id") == ~~data.r && post_reply.is(":visible")) {
		TweenMax.to(post_reply, time, {top:reply.data("statusY") + reply[0].scrollHeight + 10, ease:Expo.easeInOut});
		statusY += post_reply[0].scrollHeight + 10;
	}
	for (j = i + 1 + num; j < status_arr.length; j++) {
		var status = status_arr[j];
		statusY += reply[0].scrollHeight + 10;
		status.data("statusY", statusY);
		TweenMax.to(status, time, {top:status.data("statusY"), ease:Expo.easeInOut});
		if (post_reply.data("id") == status.data("id") && post_reply.data("id") != 0) {
			TweenMax.to(post_reply, time, {top:status.data("statusY") + status[0].scrollHeight + 10, ease:Expo.easeInOut});
			statusY += post_reply[0].scrollHeight + 10;
		}
		if (j == status_arr.length - 1) {
			statusY = status.data("statusY") + status[0].scrollHeight + 10;
		}
	}
	//statusY = status.data("statusY") + status[0].scrollHeight + 10;
	TweenMax.to(post_status, time, {top:statusY, ease:Expo.easeInOut, onComplete:function(){
		//scrollPane2.update();
	}});
	if (data.u == username && ~~data.r <= 0) {
		$('#post_status .status_txt').val("");
		$('#statuses').scrollTop(0);
		// all_rb
		max = false;
	}
	else if (data.u == username && ~~data.r > 0) {
		$('#post_reply .status_txt').val("");
	}
	//if (~~post_reply.data("id") != 0  && post_reply.find('.status_txt').is(":focus")) {
	
	
	
	
	
	if (~~post_reply.data("id") != 0) {
		var id = post_reply.data("id");
		var reply_to_username = post_reply.data("reply_to_username");
		post_reply.data("id", -1);
		post_reply.data("reply_to_username", ""); // had some luck putting this in a
		
		//if (post_reply.find('.status_txt').is(":focus") && onScreen(post_reply[0])) {
		//	replyToStatus(id, reply_to_username, tween);
		//}
		
		var reset_focus = false;
		var topEnd = reply[0].scrollHeight + 10;
		if (post_reply.find('.status_txt').is(":focus") && onScreen(post_reply[0])) {
			console.log('a');
			reset_focus = true;
			//topEnd = 0; // needs to be disabled for A
		}
		else {
			tween = false;
		}
		replyToStatus(id, reply_to_username, tween);
		if (reset_focus) {
			post_reply.find('.status_txt').focus();
		}
		
		var topStart = parseInt(post_reply.css("top")) - reply[0].scrollHeight - 10;
		if (parseInt(reply.css("top")) > topStart) {
			console.log('b');
			topStart = parseInt(post_reply.css("top"));
			topEnd = 0;
		}
		//TweenMax.fromTo(post_reply, 0.5, {"top":topStart}, {"top":parseInt(post_reply.css("top")), ease:Expo.easeInOut});
		TweenMax.fromTo(post_reply, 0.5, {"top":topStart}, {"top":topStart + topEnd, ease:Expo.easeInOut});
		
	}
	else {
		restoreStatuses();
	}
	if (max) {
		//scrollStatusMaxE(time);
		//return;
	
		var maxVSP = $('#statuses').scrollMax();
		TweenMax.fromTo($('#statuses'), time, {scrollTop:maxVSP + 1000}, {scrollTop:maxVSP + 1000, ease:Expo.easeInOut, onComplete:function(){
			console.log('doing ' + (maxVSP + 1000));
			$('#statuses').scrollTop(maxVSP + 1000);
		}});
	}
	
	//$('#statuses').scrollTop($('#statuses')[0].scrollHeight - $('#statuses').outerHeight());
	
	
	/*return;
	//if (max) {
	if (max || not_loading_avatars) {
		TweenMax.killTweensOf($('#statuses'));
		restoreStatuses();
		postStatusE();
		return;
		
		//
	
		var maxVSP = $('#statuses')[0].scrollHeight - $('#statuses').outerHeight();
		TweenMax.fromTo($('#statuses'), time, {scrollTop:maxVSP + 1000}, {scrollTop:maxVSP + 1000, ease:Expo.easeInOut});
		//TweenMax.to($('#statuses'), time, {scrollTop:maxVSP, ease:Expo.easeInOut, onComplete:function(){
			//$('#statuses').scrollTop(maxVSP + 1000);
		//}});
		
		//trace("adding scrollStatusMaxE");
		//addEventListener(Event.ENTER_FRAME, scrollStatusMaxE);
	}*/
}

			function findStatus(data) {
				for (var i = 0; i < status_arr.length; i++) {
					//TweenMax.killTweensOf(status_arr[i]); // this causes problems
					status_arr[i].css("left", 0);
					status_arr[i].css("opacity", 1);
					if (status_arr[i].data("hidden")) {
						status_arr[i].css("opacity", 0.35);
					}
					if (status_arr[i].data("id") == data.id) {
						var Y = status_arr[i].data("statusY");
						if (!data.link) {
							Y -= (revamped ? 610 : 460) + 10;
						}
						tweenScrollbar($('#statuses'), 0.7, {scrollTop:Y, ease:Expo.easeInOut}); // idk where 460 or 610 come from
						// why don't we just scroll to exactly statusY?
						// because scrolling to statusY is ideal when linking to a status
						// the complicated stuff is useful when someone replies to you, so it leads to that last reply
					}
				}
			}
			
			
/*function findStatus0(data) {
	for (var i = 0; i < statuses_data.length; i++) {
		if (statuses_data[i].id == data.id) {
			findStatus(data);
			return;
		}
	}
	
}*/


//$('#statuses').scrollTop()			7418
//getStatus(12062634).data("statusY")	8018

//$('#statuses').scrollTop(8018)



function scrollStatusMaxE() {
	var total = 0;
	var interval = setInterval(function(){
		console.log('scrollStatusMaxE');
		$('#statuses').scrollTop($('#statuses').scrollMax());
		total++;
		if (total >= 200) {
			clearInterval(interval);
		}
	total
	}, 5);
}

function postStatusE() {
	not_loading_avatars = true;
	var maxVSP = $('#statuses').scrollMax();
	tweenScrollbar($('#statuses'), 0.8, {scrollTop:maxVSP, ease:Expo.easeInOut, onComplete:function(){
		not_loading_avatars = false;
		//showStatuses();
		//$('#statuses').scrollTop(maxVSP + 1000);
		$('#post_status .status_txt').focus();
	}});
	return;
}

function loadStatusesResponse(data) {
	statuses_data = data;
	update_statuses = false;
	var loaded = false;
	if (data.action == "Delete status") {
		loaded = true;
	}
	$('.status').detach();
	all_status_arr = status_arr;
	status_arr = [];
	item_arr = [];
	//var statusY = 20;
	var statusY = 0;
	var root_id = 0;
	
	if ($('#statuses').overlayScrollbars) {
		$('#statuses').overlayScrollbars().sleep();
		// for some reason, if you are local, and load certain status data without calling sleep(), performance is ridiculously bad
	}
	
	for (var i = 0; i < data.length; i++) {
		//if (blocked_arr.includes(data[i].u)) {
		//if (isBlocked(data[i].u)) {
		if (blocked_arr.includes(data[i].u) && !moderator || blocked_by_you_arr.includes(data[i].u)) {
			continue;
		}
		var total = 0;
		data[i].delay = true;
		var status = inStatusArr(data[i].id, data[i].p, ~~data[i].nsfw);
		if (!status) {
			if (~~data[i].r > 0) {
				if (root_id != data[i].r) {
					console.log('continuing because ' + root_id + ' != ' + data[i].r);
					continue;
				}
				status = new Reply(data[i]);
			}
			else {
				status = new Status(data[i]);
			}
		}
		status.find('.delete_btn')[0].style.display = (status.data("username") == username || admin > 2 || moderator) ? "block" : "none";
		(status.data("h") && moderator) ? status.addClass("hidden") : status.removeClass("hidden");
		if (!status.data("timestamp")) {
			if (data[i].date) {
				status.data("timestamp", data[i].date);
			}
			else {
				var timestamp = new Date();
				timestamp.setSeconds(timestamp.getSeconds() - ~~data[i].s);
				status.data("timestamp", timestamp);
			}
		}
		status.find('.date_txt').text(getTimeAgo(status.data("timestamp").getTime()));
		manageLikes(status, data[i]);
		if (!status.hasClass("reply")) {
			root_id = data[i].id;
		}
		$('#statuses').append(status);
		status.css("top", statusY);
		statusY += status[0].scrollHeight + 10;
		status_arr.push(status);
		item_arr.push(status);
		//if (!simple && !loaded && i < 25) {
		if (!simple && !loaded && i < 8) {
			TweenMax.fromTo(status, 0.8, {left:600, alpha:0,}, {left:0, alpha:1, ease:Expo.easeInOut, delay:0.05 * i});
		}
	}
	$('#statuses').trigger("scroll");
	
	post_status.css("left", 81);
	post_status.css("top", statusY);
	$('#statuses').append(post_status);
	if (!simple || !loaded) {
		restoreStatuses();
	}
	if (frozen) {
		$('#post_status .status_txt').val("You are frozen");
		$('#post_status .status_txt').attr("readonly", "readonly");
		$('#post_status .status_txt').css("color", "gray");
		//$('#post_status .status_txt').disable(true);
		$('#post_status .post_btn').disable(true);
	
		$('#post_reply .status_txt').val("You are frozen");
		$('#post_reply .status_txt').attr("readonly", "readonly");
		$('#post_reply .status_txt').css("color", "gray");
		//$('#post_reply .status_txt').disable(true);
		$('#post_reply .post_btn').disable(true);
	}
	//recycleStatuses();
	all_status_arr = status_arr.slice();
	
	if ($('#statuses').overlayScrollbars) {
		setTimeout(function(){
			$('#statuses').overlayScrollbars().update();
		}, 400);
	}
}

function replyToStatusE(e) {
	replyToStatus($(this).parent().data("id"), $(this).parent().find('.username_txt').text(), true);
	//$('#post_reply .status_txt').focus();
	//setupInput($('#post_reply .status_txt'));
}

function replyToStatus(id, reply_to_username, tween) {
	var same = false;
	if (~~post_reply.data("id") < 0) {
		same = true;
	}
	restoreStatuses();
	if (~~post_reply.data("id") == id) {
		post_reply.data("id", 0)
		post_reply.data("reply_to_username", "")
		TweenMax.to(post_reply, 0.5, {alpha:0, ease:Expo.easeInOut, onComplete:function(){
			post_reply.hide();
		}});
	}
	else {
		for (var i = 0; i < status_arr.length; i++) {
			if (status_arr[i].data("id") == id) {
				for (var j = i + 1; j < status_arr.length; j++) {
					if (status_arr[j].hasClass("reply")) {
						i++;
					}
					else {
						break;
					}
				}
				$('#statuses').append(post_reply);
				post_reply.data("id", id);
				post_reply.data("reply_to_username", reply_to_username);
				post_reply.show();
				post_reply.css("top", ~~status_arr[i].data("statusY") + status_arr[i][0].scrollHeight + 10);
				var replyAlpha = 0;
				var replyX = 600;
				if (same) {
					replyAlpha = 1;
					replyX = 100;
				}
				TweenMax.fromTo(post_reply, 0.5, {left:replyX, alpha:replyAlpha}, {left:100, alpha:1, ease:Expo.easeInOut});
				for (j = i + 1; j < status_arr.length; j++) {
					TweenMax.to(status_arr[j], 0.5, {top:status_arr[j].data("statusY") + 228, ease:Expo.easeInOut});
				}
				TweenMax.to(post_status, 0.5, {top:status_arr[j - 1].data("statusY") + status_arr[j - 1][0].scrollHeight + 228, ease:Expo.easeInOut});
				if (tween) {
					tweenScrollbar($('#statuses'), 0.5, {scrollTop:parseInt(post_reply.css("top")) - (revamped ? 681 : 545) + 228, ease:Expo.easeInOut, onComplete:function(){
						$('#post_reply .status_txt').focus();
					}});
					return;
				}
				//$('#post_reply .status_txt').focus();
				break;
			}
		}
	}
}

function restoreStatuses() {
	//var statusY = 20;
	var statusY = 0;
	for (var i = 0; i < status_arr.length; i++) {
		var status = status_arr[i];
		if (i > 0) {
			statusY += status_arr[i - 1][0].scrollHeight + 10;
		}
		status.data("statusY", statusY);
		TweenMax.to(status, 0.5, {top:statusY, ease:Expo.easeInOut});
	}
	var postY = 0;
	if (status_arr.length > 0) {
		postY = status_arr[i - 1].data("statusY") + status_arr[i - 1][0].scrollHeight;
	}
	//TweenMax.to(post_status, 0.5, {top:postY, ease:Expo.easeInOut});
	TweenMax.to(post_status, 0.5, {top:postY, ease:Expo.easeInOut, onComplete:function(){
		$('#statuses').trigger("scroll");
	}});
}


//onData({"action":"Delete status", "id":$('#statuses .status').eq(0).data("id")})

























/*function loadStatusesResponse(data) {
	statuses_data = data;
	update_statuses = false;
	$('.status').detach();
	all_status_arr = status_arr;
	status_arr = [];
	item_arr = [];
	var statusY = 20;
	var root_id = 0;
	for (var i = 0; i < data.length; i++) {
		if (blocked_arr.indexOf(data[i].u) >= 0) {
			continue;
		}
		data[i].delay = true;
		var status = inStatusArr(data[i].id, data[i].p, ~~data[i].nsfw);
		if (!status) {
			if (~~data[i].r > 0) {
				if (root_id != data[i].r) {
					continue;
				}
				status = new Reply(data[i]);
			}
			else {
				status = new Status(data[i]);
			}
		}
		if (!status.data("timestamp")) {
			if (data[i].date) {
				status.data("timestamp", data[i].date)
			}
			else {
				var timestamp = new Date();
				timestamp.setSeconds(timestamp.getSeconds() - ~~data[i].s);
				status.data("timestamp", timestamp);
			}
		}
		status.find('.date_txt').text(getTimeAgo(status.data("timestamp").getTime()));
		manageLikes(status, data[i]);
		if (!status.hasClass("reply")) {
			root_id = data[i].id;
		}
		$('#statuses').append(status);
		//status.css("top", statusY);
		//statusY += status[0].scrollHeight + 10;
		status_arr.push(status);
		item_arr.push(status);
		//if (!simple && !loaded && i < 25) {
			TweenMax.fromTo(status, 0.8, {left:600, alpha:0,}, {left:0, alpha:1, ease:Expo.easeInOut, delay:0.05 * i});
		//}
	}
	//$('#statuses').trigger("scroll");
	//post_status.css("left", 81);
	//post_status.css("top", statusY);
	$('#statuses').append(post_status);
	restoreStatuses(true);
	if (frozen) {
		$('#post_status .status_txt').val("You are frozen");
		$('#post_status .status_txt').attr("readonly", "readonly");
		$('#post_status .status_txt').css("color", "gray");
		$('#post_status .post_btn').disable(true);
	
		$('#post_reply .status_txt').val("You are frozen");
		$('#post_reply .status_txt').attr("readonly", "readonly");
		$('#post_reply .status_txt').css("color", "gray");
		$('#post_reply .post_btn').disable(true);
	}
	//recycleStatuses();
	all_status_arr = status_arr.slice();
}

//function restoreStatuses(b = false) {
function restoreStatuses(b) {
	if (b !== true) {
		b = false;
	}
	var statusY = 20;
	var arr = status_arr.concat();
	if (~~post_reply.data("id") > 0) {
		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[i].data("id") == post_reply.data("id") || arr[i].data("reply_to") == post_reply.data("id")) {
				arr.splice(i + 1, 0, post_reply);
				insertAt(i + 1, post_reply, $('#statuses'));
				break;
			}
		}
	}
	arr.push(post_status);
	for (var i = 0; i < arr.length; i++) {
		arr[i].data("statusY", statusY);
		if (b || arr[i][0] == post_reply[0]) {
			arr[i].css("top", statusY);
		}
		TweenMax.to(arr[i], 0.5, {top:statusY, ease:Expo.easeInOut});
		statusY += arr[i][0].scrollHeight + 10;
	}
	$('#statuses').trigger("scroll");
}

function replyToStatusE(e) {
	replyToStatus(e);
}

function replyToStatus(e) {
	var status = $(e.currentTarget).parent();
	var id = status.data("id");
	var alpha = 1;
	var left = 600;
	if (~~post_reply.data("id") == id) {
		post_reply.data("id", 0);
		alpha = 0;
		left = 100;
	}
	else {
		post_reply.css("opacity", 0);
		post_reply.css("left", 600);
		post_reply.data("id", id);
		post_reply.css("top", status.data("statusY") + status[0].scrollHeight + 10);
		//var yPosition = parseInt(post_reply.css("top")) - post_reply[0].scrollHeight + 354;
		//var yPosition = parseInt(post_reply.css("top")) - post_reply[0].scrollHeight - 354;
		//var yPosition = parseInt(post_reply.css("top")) - 354;
		var yPosition = parseInt(post_reply.css("top")) + 145;
		if (parseInt(post_reply.css("top")) < 335) {
			//yPosition = 0;
		}
		console.log('post_status.y = ' + parseInt(post_reply.css("top")));
		console.log('scrolling to: ' + yPosition);
		//tweenScrollbar($('#statuses'), 0.5, {scrollTop:yPosition, ease:Expo.easeInOut});
		tweenScrollbar($('#statuses'), 0.5, {scrollTop:yPosition, ease:Expo.easeInOut});
	}
	restoreStatuses();
	post_reply.css("pointer-events", "auto");
	TweenMax.fromTo(post_reply, 0.5, {"left":left}, {"left":100, "alpha":alpha, ease:Expo.easeInOut, onComplete:function(){
		if (alpha) {
			post_reply.css("pointer-events", "auto");
			//$('#post_reply .status_txt').focus();
			return;
		}
		post_reply.css("pointer-events", "none");
	}});

//$('#statuses').scrollTop(1438 - 354);
//$('#statuses').scrollTop(1438 - 354);

//980

//1295




//516

//661

}*/



















function mutedE(data) {
	if (!frozen) {
		muted = true;
		muteSeconds = ~~data.seconds;
		$('#public_chat .cin_txt').disable(true);
		$('#watch_chat .cin_txt').disable(true);
		if (muteSeconds > 0) {
			muteTimer.start();
			muteTimerE();
		}
	}
}

function unmutedE() {
	muted = false;
	muteTimer.reset();
	if (!frozen) {
		$('#public_chat .cin_txt').disable(false);
		$('#watch_chat .cin_txt').disable(false);
		$('#public_chat .cin_txt').val("");
		$('#watch_chat .cin_txt').val("");
	}
}

function muteTimerE() {
	muteSeconds--;
	$('#public_chat .cin_txt').val("You can chat in " + muteSeconds + " more seconds");
	$('#watch_chat .cin_txt').val("You can chat in " + muteSeconds + " more seconds");
	if (muteSeconds == 0) {
		unmutedE();
	}
}

function statusTimerE() {
	statusSeconds--;
	if (statusSeconds == 0) {
		postedStatusRecently = false;
		statusTimer.reset();
	}
}

function replyTimerE() {
	replySeconds--;
	if (replySeconds == 0) {
		postedReplyRecently = false;
		replyTimer.reset();
	}
}

function lock() {
	if (admin || moderator) {
		return;
	}
	locked = true;
	lockTimer.start();
	$('.cin_txt').css("color", "#999999");
}

function lockTimerE() {
	locked = false;
	lockTimer.reset();
	$('.cin_txt').css("color", "black");
}

function frozenE(data) {
	if (muted) {
		unmutedE();
	}
	if (!frozen) {
		if (data) {
			messageE(data.message);
			frozen = true;
		}
	}
	$('.cin_txt').val("You are frozen");
	$('.cin_txt').disable(true);
	if ($('#private_chat .cell').length > 0) {
		private_chat.openPrivate($('#private_chat .users .cell.selected').data("username"));
	}
}

function unfrozenE(data) {
	//if (muted) {
	//	unmutedE();
	//}
	if (frozen) {
		if (data && data.message) {
			messageE(data.message);
		}
		frozen = false;
	}
	$('.cin_txt').val("");
	$('.cin_txt').disable(false);
	if ($('#private_chat .cell').length > 0) {
		openPrivate($('#private_chat .users .cell.selected').data("username"));
	}
}

function loadOfflineMessages(data) {
	if (array(data.privateChatUsernames).length == 0) {
		return;
	}
	var auto_load = auto_load_messages;
	auto_load_messages = 1;
	for (var i = 0; i < data.privateChatUsernames.length; i++) {
		openPrivate(data.privateChatUsernames[i], data.privateChatLimits[i]);
		$('#private_chat .users .selected').data("new_msg", true);
	}
	determineAnimate();
	playSound(ChatInbound);
	auto_load_messages = auto_load;
}

function softDeleteStatus() {
	Send({"action":"Soft delete status", "id":status_id});
}

function deleteStatus(warning) {
	Send({"action":"Delete status", "id":status_id, "warning":warning});
}

function approveStatus() {
	Send({"action":"Approve status", "id":status_id});
}

function statusFeedback() {
	Send({"action":"Status feedback", "id":status_id});
}

function showLikes(e) {
	$(this).parent().parent().append(liked_by);
	liked_by.show();
	liked_by.css("top", parseInt($(this).css("top")) + 32 + parseInt($(this).parent().css("top")));
	liked_by.css("left", parseInt($(this).css("left")) + -7);
	liked_by.find('.users').html("");
	for (var i = 0; i < $(this).parent().data("usernames").length; i++) {
		liked_by.find('.users').append(new Cell($(this).parent().data("usernames")[i]));
	}
	var h = $(this).parent().data("usernames").length * 20;
	if (h > 200) {
		h = 200;
		liked_by.find('.users').removeClass("unscrollable");
	}
	else {
		liked_by.find('.users').addClass("unscrollable");
	}
	liked_by.find('.users').css("height", h);
	setTimeout(function(){
		if ($(this).parent().data("usernames")) {
			liked_by.find('.users .os-content-arrange').css("height", 20 * $(this).parent().data("usernames").length * 20);
		}
	}, 50);
	likeTimer.start();
}

function hideLikes() {
	liked_by.hide();
	likeTimer.reset();
}

function pauseLikes() {
	likeTimer.reset();
}

function Notification() {
	var notification = $('<div class="notification"><div class="background"></div></div>');
	notification.click(notificationClick);

	var message_txt = $('<span class="message_txt unselectable"></span>');
	message_txt.text("Sample Text");

	var close_btn = $('<div class="close_btn"><img src="' + IMAGES_START + 'svg/close_btn_up.svg" /></div>');
	close_btn.click(notificationCloseE);
	addButton(close_btn);

	notification.append(message_txt);
	notification.append(close_btn);

	notification.extend(notification, {
		setupMessage: function(newMessages) {
			var word = "Messages!";
			if (newMessages == 1) {
				word = "Message!";
			}
			message_txt.text(newMessages + " New " + word);
			notification.append($('<img class="new_message" src="' + IMAGES_START + 'svg/new_message.svg" />'));
		},
		setupRequest: function(newFriendRequests, str) {
			var word = "Friend Requests!";
			if (str) {
				word = "Friend Request from " + censor(str);
			}
			message_txt.text(newFriendRequests + " New " + word);
			notification.append($('<img class="friend_request" src="' + IMAGES_START + 'svg/friend_request.svg" />'));
		},
		setupNewFriend: function(str) {
			message_txt.text(str + " is now your friend!");
			notification.append($('<img class="friend_request" src="' + IMAGES_START + 'svg/friend_request.svg" />'));
		},
		setupComment: function(newComments) {
			var word = "Comments!";
			if (newComments == 1) {
				word = "Comment!";
			}
			message_txt.text(newComments + " New " + word);
			notification.append($('<img class="new_comment" src="' + IMAGES_START + 'svg/new_comment.svg" />'));
		},
		setupTestimonial: function(newComments) {
			var word = "Testimonials!";
			if (newComments == 1) {
				word = "Testimonial!";
			}
			message_txt.text(newComments + " New " + word);
			notification.append($('<img class="new_comment" src="' + IMAGES_START + 'svg/new_comment.svg" />'));
		},
		setupGroup: function(str) {
			message_txt.text("You were added to " + str);
			notification.append($('<img class="new_group" src="' + IMAGES_START + 'svg/group_chat_btn_up.svg" />'));
		},
		setupReply: function() {
			message_txt.text("New Status Reply!");
			notification.append($('<img class="new_comment" src="' + IMAGES_START + 'svg/new_comment.svg" />'));
		},
		setupAccepted: function(str) {
			message_txt.text("You were accepted into " + str);
			notification.append($('<img class="swords" src="' + IMAGES_START + 'svg/swords.svg" />'));
		},
		setupRejected: function(str) {
			message_txt.text("You were rejected from " + str);
			notification.append($('<img class="swords" src="' + IMAGES_START + 'svg/swords.svg" />'));
		},
		setupRemoved: function(str) {
			message_txt.text("You were removed from " + str);
			notification.append($('<img class="swords" src="' + IMAGES_START + 'svg/swords.svg" />'));
		},
		setupStarted: function(str) {
			message_txt.text("Pairings for " + str + " have been posted!");
			notification.append($('<img class="swords" src="' + IMAGES_START + 'svg/swords.svg" />'));
		},
		setupInvite: function(name, usr) {
			message_txt.text(usr + " invited you to join " + name);
			notification.append($('<img class="swords" src="' + IMAGES_START + 'svg/swords.svg" />'));
		},
		setupCopied: function(str) {
			message_txt.html('<font color="#84db4b">' + str + '</font>');
			//notification.append($('<img class="new_message" src="' + IMAGES_START + 'svg/new_message.svg" />'));
		},
		setupZoom: function(str) {
			message_txt.html('<font color="#fe6565">' + str + '</font>');
			notification.append($('<img class="zoom" src="' + IMAGES_START + 'svg/zoom.svg" />'));
		},
		setupZoomFixed: function(str) {
			message_txt.html('<font color="#84db4b">' + str + '</font>');
			notification.append($('<img class="zoom" src="' + IMAGES_START + 'svg/zoom.svg" />'));
			notification.append($('<img class="like" src="' + IMAGES_START + 'svg/like_btn_up.svg" />'));
		}
	});
	message_txt.mouseenter(function(){
		message_txt.css("color", "#FFAFCA");
	});
	message_txt.mouseout(function(){
		message_txt.css("color", "#FFFFFF");
	});
	return notification;
}

function Announcement(title, body) {
	if (body.indexOf("confirm") >= 0) {
		$('.email_logo').attr("src", $('.email_logo').attr("data-src"));
	}
	body = body.replace('<font size="14">', '<font style="font-size: 14px;">');
	
	var announcement = $('<div class="announcement"><div class="background"></div></div>');
	
	var title_txt = $('<span class="title_txt unselectable"></span>');
	title_txt.text(title);
	
	var body_txt = $('<span class="body_txt unselectable"></span>');
	body_txt.html(body);
	
	var close_btn = $('<div class="close_btn"><img src="' + IMAGES_START + 'svg/close_btn_up.svg" /></div>');
	close_btn.click(notificationCloseE);
	addButton(close_btn);
	
	announcement.append(title_txt);
	announcement.append(close_btn);
	announcement.append(body_txt);
	return announcement;
}

function resetResult() {
	$('#calls .result_txt').text("");
}

function saveCallsVSP() {
	calls_vsp = $('#calls .calls').scrollTop();
}

function restoreCallsVSP() {
	$('#calls .calls').scrollTop(calls_vsp);
}

function saveLogVSP() {
	log_vsp = $('#calls .log_txt').scrollTop();
}

function restoreLogVSP() {
	$('#calls .log_txt').scrollTop(log_vsp);
}

function getLogE(e) {
	Send({"action":"Get log"});
}

function getLog(str) {
	Send({"action":"Get log", "username":str});
}

function refreshLogE() {
	if (lastDuelId) {
		startChatCycle($('#log_cycle'));
		Send({"action":"Refresh log"});
	}
}

function refreshLog() {
	Send({"action":"Refresh log"});
}
		
function addAllCalls(data) {
	$('#calls .calls').html("");
	for (var i = 0; i < data.length; i++) {
		addCall(data[i]);
	}
	$('#calls .calls_lbl').html('Calls:&nbsp; ' + $('#calls .calls .cell').length);
}

function addCall(data) {
	var cell = $(new Cell(data.issue + ": " + data.caller + " | " + data.opponent));
	//cell.removeAttr("ondblclick");
	cell.data("id", data.id);
	cell.data("format", data.format);
	$('#calls .calls').append(cell);
	switch(data.format) {
		case "gr":
		case "gu":
			cell.find('span').prepend("(Goat) ");
			cell.css("color", "#660099");
			break;
		case "sr":
		case "su":
			cell.find('span').prepend("(Speed) ");
			cell.css("color", "#99CC00");
			break;
		case "rr":
		case "ru":
			cell.find('span').prepend("(Rush) ");
			cell.css("color", "#FF6600");
			break;
	}
	//setCellText(cell);
	$('#calls .calls_lbl').html('Calls:&nbsp; ' + $('#calls .calls .cell').length);
}

/*addCall({"issue":"Ruling", "caller":"User A", "opponent":"User B", "format":"gr"});
$('#calls .cell').each(function(){
	setText($(this));
});*/

function removeCall(data) {
	var arr = $('#calls .calls .cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i).data("id") == data.id) {
			arr.eq(i).remove();
			break;
		}
	}
	$('#calls .calls_lbl').html('Calls:&nbsp; ' + $('#calls .calls .cell').length);
}

function updateLog() {
	saveLogVSP();
	stopChatCycle($('#log_cycle'));
	var log = "";
	var private_info = $('#calls .private_cb').is(":checked");
	var searching_for = str($('#calls .search_txt').val());
	var show_usernames = $('#calls .usernames_cb').is(":checked");
	var show_chat = $('#calls .chat_cb').is(":checked");
	var show_duel = $('#calls .duel_cb').is(":checked");
	var show_game = $('#calls .game_cb').is(":checked");
	for (var i = 0; i < logs.length; i++) {
		var color = "#0000FF";
		var entry = logs[i].public_log;
		var user = "";
		if (private_info) {
			if (logs[i].private_log) {
				entry = logs[i].private_log;
			}
		}
		if (searching_for != "") {
			if (entry.toLowerCase().indexOf(searching_for.toLowerCase()) < 0) {
				continue;
			}
		}
		if (player1.username == logs[i].username || tag_duel && player3.username == logs[i].username) {
			color = "#FF0000";
		}
		else if (player2.username == logs[i].username || tag_duel && player4.username == logs[i].username) {
			color = "#0000FF";
		}
		else {
			color = "#000000";
		}
		if (show_usernames) {
			user = " " + logs[i].username + ":";
		}
		if (logs[i].type == "chat") {
			if (show_chat) {
				log += '<font color="' + color + '">' + getTimestamp(logs[i].seconds) + escapeHTML(user) + " <i>" + escapeHTML(entry) + "</i></font><br>";
			}
		}
		else if (logs[i].type == "duel") {
			if (show_duel) {
				if (entry == "Entered Draw Phase") {
					log += '<font color="' + color + '">--------------------------------------------</font>' + "<br>";
				}
				log += '<font color="' + color + '">' + getTimestamp(logs[i].seconds) + escapeHTML(user) + " " + escapeHTML(entry) + "</font><br>";
			}
		}
		else {
			if (show_game) {
				log += '<font color="' + color + '">' + getTimestamp(logs[i].seconds) + escapeHTML(user) + " " + escapeHTML(entry) + "</font><br>";
			}
		}
	}
	$('#calls .log_txt').html(log);
	restoreLogVSP();
}

function updateAction() {
	var result_txtY = 0;
	$('#calls .days_rb').hide();
	$('#calls .days_lbl').hide();
	$('#calls .days_txt').hide();
	$('#calls .forever_rb').hide();
	$('#calls .forever_lbl').hide();
	$('#calls .reason_lbl').hide();
	$('#calls .reason_txt').hide();
	$('#calls .strike_cb').hide();
	$('#calls .strike_lbl').hide();
	$('#calls .strikes_txt').hide();
	$('#calls .status_txt').hide();
	$('#calls .all_accounts_cb').hide();
	$('#calls .all_accounts_lbl').hide();
	$('#calls .forever_rb').disable(false);
	switch($('#calls .action_cb').val()) {
		case "Ban status":
			$('#calls .submit_btn').val("Get Ban Status");
			$('#calls .submit_btn').css("top", 72);
			$('#calls .status_txt').show();
			$('#calls .strikes_txt').show();
			$('#calls .tools .username_txt').focus();
			$('#calls .tools .username_txt').select();
			result_txtY = 135;
			break;
		case "Freeze user":
			$('#calls .days_rb').show();
			$('#calls .days_rb').checked(true);
			$('#calls .days_txt').show();
			$('#calls .days_txt').val("");
			$('#calls .days_txt').focus();
			$('#calls .days_lbl').show();
			$('#calls .forever_rb').show();
			$('#calls .forever_rb').css("top", 100);
			$('#calls .forever_rb').checked(false);
			if (admin < 3 && moderator < 2) {
				$('#calls .forever_rb').disable(true);
			}
			$('#calls .forever_lbl').show();
			$('#calls .reason_lbl').show();
			$('#calls .reason_lbl').text("Reason:");
			$('#calls .reason_lbl').css("top", 122);
			$('#calls .reason_txt').show();
			$('#calls .reason_txt').val("");
			$('#calls .reason_txt').css("top", 141);
			$('#calls .strike_cb').show();
			$('#calls .strike_cb').checked(true);
			$('#calls .strike_cb').css("top", 169);
			$('#calls .strike_lbl').show();
			$('#calls .strike_lbl').css("top", 170);
			$('#calls .strike_lbl').text("Increment Strike Count");
			$('#calls .all_accounts_cb').show();
			$('#calls .all_accounts_cb').checked(true);
				$('#calls .all_accounts_cb').css("left", 3);
			$('#calls .all_accounts_cb').css("top", 194);
			$('#calls .all_accounts_lbl').show();
				$('#calls .all_accounts_lbl').css("left", 26);
			$('#calls .all_accounts_lbl').css("top", 195);
			$('#calls .submit_btn').val("Freeze User");
			$('#calls .submit_btn').css("top", 216);
			result_txtY = 241;
			break;
		case "Unban user":
			$('#calls .strike_cb').show();
			$('#calls .strike_cb').checked(true);
			$('#calls .strike_cb').css("top", 75);
			$('#calls .strike_lbl').show();
			$('#calls .strike_lbl').css("top", 76);
			$('#calls .strike_lbl').text("Decrement Strike Count");
			$('#calls .all_accounts_cb').show();
			$('#calls .all_accounts_cb').css("left", 3);
			$('#calls .all_accounts_cb').css("top", 100);
			$('#calls .all_accounts_lbl').show();
			$('#calls .all_accounts_lbl').css("top", 26);
			$('#calls .all_accounts_lbl').css("top", 101);
			$('#calls .submit_btn').val("Unban User");
			$('#calls .submit_btn').css("top", 122);
			result_txtY = 147;
			break;
		case "Kick user":
			$('#calls .submit_btn').val("Kick User");
			$('#calls .submit_btn').css("top", 72);
			result_txtY = 97;
			break;
		case "Add warning":
		case "Warning note":
			$('#calls .reason_lbl').show();
			$('#calls .reason_lbl').text("Warning:");
			$('#calls .reason_lbl').css("top", 74);
			$('#calls .reason_txt').show();
			$('#calls .reason_txt').val("");
			$('#calls .reason_txt').css("top", 91);
			$('#calls .reason_txt').focus();
			$('#calls .strike_cb').show();
			$('#calls .strike_cb').checked(false);
			$('#calls .strike_cb').css("top", 118);
			$('#calls .strike_lbl').show();
			$('#calls .strike_lbl').css("top", 119);
			$('#calls .strike_lbl').text("Increment Strike Count");
			$('#calls .submit_btn').val("Add Warning");
			$('#calls .submit_btn').css("top", 141);
			result_txtY = 166;
			break;
		case "IP check":
			$('#calls .submit_btn').val("Check IP");
			$('#calls .submit_btn').css("top", 72);
			result_txtY = 97;
			break;
		case "Computer check":
			$('#calls .submit_btn').val("Check Comp");
			$('#calls .submit_btn').css("top", 72);
			result_txtY = 97;
			break;
		case "Get admin":
		case "Admin status":
			$('#calls .submit_btn').val("Admin Status");
			$('#calls .submit_btn').css("top", 72);
			result_txtY = 97;
			break;
		case "Set moderator":
			$('#calls .submit_btn').val("Set Moderator");
			$('#calls .submit_btn').css("top", 72);
			result_txtY = 97;
			break;
		case "Unset moderator":
			$('#calls .submit_btn').val("Unset Moderator");
			$('#calls .submit_btn').css("top", 72);
			result_txtY = 97;
			break;
		case "Mute user":
			$('#calls .submit_btn').val("Mute User");
			$('#calls .submit_btn').css("top", 72);
			result_txtY = 97;
			break;
		case "Unmute user":
			$('#calls .submit_btn').val("Unmute User");
			$('#calls .submit_btn').css("top", 72);
			result_txtY = 97;
			break;
		case "Set beginner":
			$('#calls .days_rb').show();
			$('#calls .days_rb').checked(true);
			$('#calls .days_lbl').show();
			$('#calls .days_txt').show();
			$('#calls .days_txt').val("");
			$('#calls .days_txt').focus();
			$('#calls .forever_rb').show();
			$('#calls .forever_rb').css("top", 100);
			if (admin < 3 && moderator < 2) {
				$('#calls .forever_rb').disable(true);
			}
			$('#calls .forever_lbl').show();
			$('#calls .forever_rb').checked(false);
			
			/*$('#calls .all_accounts_cb').show();
			$('#calls .all_accounts_cb').checked(true);
			$('#calls .all_accounts_cb').css("left", 80);
			$('#calls .all_accounts_cb').css("top", 100);
			$('#calls .all_accounts_lbl').show();
			$('#calls .all_accounts_lbl').css("left", 103);
			$('#calls .all_accounts_lbl').css("top", 102);
			
			$('#calls .reason_lbl').show();
			$('#calls .reason_lbl').text("Reason:");
			$('#calls .reason_lbl').css("top", 122);
			$('#calls .reason_txt').show();
			$('#calls .reason_txt').val("");
			$('#calls .reason_txt').css("top", 141);
			$('#calls .submit_btn').val("Set Beginner");
			$('#calls .submit_btn').css("top", 166);
			result_txtY = 191;*/
			
			$('#calls .all_accounts_cb').show();
			$('#calls .all_accounts_cb').checked(true);
			$('#calls .all_accounts_cb').css("top", 125);
			$('#calls .all_accounts_lbl').show();
			$('#calls .all_accounts_lbl').css("top", 127);
			
			$('#calls .reason_lbl').show();
			$('#calls .reason_lbl').text("Reason:");
			$('#calls .reason_lbl').css("top", 147);
			$('#calls .reason_txt').show();
			$('#calls .reason_txt').val("");
			$('#calls .reason_txt').css("top", 166);
			$('#calls .submit_btn').val("Set Beginner");
			$('#calls .submit_btn').css("top", 191);
			result_txtY = 216;
			
			/*$('#calls .reason_lbl').show();
			$('#calls .reason_lbl').text("Reason:");
			$('#calls .reason_lbl').css("top", 122);
			$('#calls .reason_txt').show();
			$('#calls .reason_txt').val("");
			$('#calls .reason_txt').css("top", 141);
			$('#calls .submit_btn').val("Set Beginner");
			$('#calls .submit_btn').css("top", 166);
			result_txtY = 191;*/
			break;
		case "Unset beginner":
			$('#calls .all_accounts_cb').show();
			$('#calls .all_accounts_cb').checked(true);
			$('#calls .all_accounts_cb').css("left", 3);
			$('#calls .all_accounts_cb').css("top", 75);
			$('#calls .all_accounts_lbl').show();
			$('#calls .all_accounts_lbl').css("left", 26);
			$('#calls .all_accounts_lbl').css("top", 76);
			
			$('#calls .submit_btn').val("Unset Beginner");
			$('#calls .submit_btn').css("top", 97);
			result_txtY = 122;
		
			/*$('#calls .submit_btn').val("Unset Beginner");
			$('#calls .submit_btn').css("top", 72);
			result_txtY = 97;*/
			break;
		case "Set ignored":
			$('#calls .days_rb').show();
			$('#calls .days_rb').checked(true);
			$('#calls .days_lbl').show();
			$('#calls .forever_rb').css("top", 72);
			$('#calls .forever_lbl').show();
			$('#calls .days_txt').val("0");
			$('#calls .submit_btn').val("Set Ignored");
			$('#calls .submit_btn').css("top", 97);
			result_txtY = 122;
			break;
		case "Unset ignored":
			$('#calls .submit_btn').val("Unset Ignored");
			$('#calls .submit_btn').css("top", 72);
			result_txtY = 97;
			break;
		case "Grant customs":
			$('#calls .days_rb').show();
			$('#calls .days_rb').checked(true);
			$('#calls .days_txt').show();
			$('#calls .days_txt').val("");
			$('#calls .days_txt').focus();
			$('#calls .days_lbl').show();
			$('#calls .submit_btn').val("Grant Customs");
			$('#calls .submit_btn').css("top", 97);
			result_txtY = 122;
			break;
	}
	$('#calls .result_txt').css("top", result_txtY);
	$('#calls .result_txt').css("height", RESULT_BOTTOM - result_txtY);
	if ($('#calls .tools .username_txt').val() == "") {
		$('#calls .tools .username_txt').focus();
	}
}

function performAction() {
	if ($('#calls .tools .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	awaiting_response = true;
	switch ($('#calls .action_cb').val()) {
		case "Ban status":
			getBanStatus($('#calls .tools .username_txt').val());
			break;
		case "Freeze user":
			if ($('#calls .forever_rb').is(":checked")) {
				banUser($('#calls .tools .username_txt').val(), ~~$('#calls .days_txt').val(), ~~$('#calls .forever_rb').is(":checked"), ~~$('#calls .strike_cb').is(":checked"), $('#calls .reason_txt').val(), $('#calls .all_accounts_cb').is(":checked"));
				return;
			}
			if ($('#calls .days_rb').is(":checked") && $('#calls .days_txt').val() == "") {
				errorE("Days is blank");
				return;
			}
			freezeUser($('#calls .tools .username_txt').val(), ~~$('#calls .days_txt').val(), ~~$('#calls .forever_rb').is(":checked"), ~~$('#calls .strike_cb').is(":checked"), $('#calls .reason_txt').val(), $('#calls .all_accounts_cb').is(":checked"));
			break;
		case "Unban user":
			unbanUser($('#calls .tools .username_txt').val(), ~~$('#calls .strike_cb').is(":checked"), $('#calls .all_accounts_cb').is(":checked"));
			break;
		case "Kick user":
			kickUser($('#calls .tools .username_txt').val());
			break;
		case "Add warning":
		case "Warning note":
			addWarning($('#calls .tools .username_txt').val(), $('#calls .reason_txt').val(), ~~$('#calls .strike_cb').is(":checked"));
			break;
		case "IP check":
			checkIP($('#calls .tools .username_txt').val());
			break;
		case "Computer check":
			checkComp($('#calls .tools .username_txt').val());
			break;
		case "Get admin":
		case "Admin status":
			getAdmin($('#calls .tools .username_txt').val());
			break;
		case "Set moderator":
			setModerator($('#calls .tools .username_txt').val());
			break;
		case "Unset moderator":
			unsetModerator($('#calls .tools .username_txt').val());
			break;
		case "Mute user":
			muteUserE($('#calls .tools .username_txt').val());
			break;
		case "Unmute user":
			unmuteUser($('#calls .tools .username_txt').val());
			break;
		case "Set beginner":
			if (~~$('#calls .days_txt').val() == 0 && $('#calls .days_rb').is(":checked")) {
				errorE("You must set for at least 1 day");
				return;
			}
			if ($('#calls .days_rb').is(":checked") && $('#calls .days_txt').val() == "") {
				errorE("Days is blank");
				return;
			}
			setBeginner($('#calls .tools .username_txt').val(), ~~$('#calls .days_txt').val(), $('#calls .reason_txt').val(), ~~$('#calls .forever_rb').is(":checked"), $('#calls .all_accounts_cb').is(":checked"));
			break;
		case "Unset beginner":
			unsetBeginner($('#calls .tools .username_txt').val(), $('#calls .all_accounts_cb').is(":checked"));
			break;
		case "Set ignored":
			setIgnored($('#calls .tools .username_txt').val(), $('#calls .forever_rb').is(":checked"));
			break;
		case "Unset ignored":
			unsetIgnored($('#calls .tools .username_txt').val());
			break;
		case "Grant customs":
			grantCustoms($('#calls .tools .username_txt').val(), ~~$('#calls .days_txt').val());
			break;
	}
}

function resetAdminTools() {
	$('#calls .action_cb').selectedIndex(0);
	$('#calls .action_cb').change();
}

function getBanStatusE() {
	if ($('#ban_status .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	getBanStatus($('#ban_status .username_txt').val());
}

function getBanStatus(str) {
	showDim();
	Send({"action":"Ban status", "username":str});
}

function muteUser(str, seconds, forever) {
	Send({"action":"Mute user", "username":str, "seconds":seconds, "forever":!!forever});
}

function unmuteUser(str) {
	Send({"action":"Unmute user", "username":str});
}

function setIgnored(str, forever, status_id) {
	Send({"action":"Set ignored", "username":str, "forever":!!forever, "status":~~status_id});
}

function unsetIgnored(str) {
	Send({"action":"Unset ignored", "username":str});
}

function setModerator(str) {
	showDim();
	Send({"action":"Set moderator", "username":str});
}

function unsetModerator(str) {
	showDim();
	Send({"action":"Unset moderator", "username":str});
}

function setBeginner(str, days, reason, forever, all_accounts) {
	showDim();
	Send({"action":"Set beginner", "username":str, "days":days, "reason":reason, "forever":forever, "all":all_accounts});
}

function unsetBeginner(str, all_accounts) {
	showDim();
	Send({"action":"Unset beginner", "username":str, "all":all_accounts});
}

function grantCustoms(str, days) {
	showDim();
	Send({"action":"Grant customs", "username":str, "days":days});
}

function getUserID(str) {
	Send({"action":"Get user id", "username":str});
}

function getActionsE(str) {
	Send({"action":"Get actions", "username":str});
}

function repairGame(str) {
	Send({"action":"Repair game", "username":str});
}

function timeOutE(str) {
	Send({"action":"Time out", "username":str});
}

function addRestrictedPhraseE() {
	getInput("Restrict Phrase", "Enter a phrase to be ignored:", "", 0, function(){
		addRestrictedPhrase($('#input .input_txt').val())
	});
}

function addRestrictedPhraseE2() {
	getInput("Ban Phrase", "Enter a phrase to be ignored forever:", "", 0, function(){
		addRestrictedPhrase($('#input .input_txt').val(), true)
	});
}

function addIllegalPhraseE() {
	getInput("Illegal Phrase", "Enter a phrase to make illegal:", "", 0, function(){
		addIllegalPhrase($('#input .input_txt').val())
	});
}

function addRestrictedPhrase(str, forever) {
	Send({"action":"Add restricted phrase", "message":str, "forever":!!forever});
}

function addIllegalPhrase(str, forever) {
	if (forever !== false) {
		forever = true;
	}
	Send({"action":"Add illegal phrase", "message":str, "forever":forever});
}
		
function checkDecks(str) {
	Send({"action":"Check decks", "username":str});
}

function checkStatuses(str) {
	Send({"action":"Check statuses", "username":str});
}

function getDuelInfo(str) {
	Send({"action":"Get duel info", "username":str});
}

function freezeUserE() {
	if ($('#freeze_user .forever_rb').is(":checked")) {
		banUser($('#freeze_user .username_txt').val(), ~~$('#freeze_user .days_txt').val(), ~~$('#freeze_user .forever_rb').is(":checked"), ~~$('#freeze_user .strike_cb').is(":checked"), $('#freeze_user .reason_txt').val(), $('#freeze_user .all_accounts_cb').is(":checked"));
		return;
	}
	freezeUser($('#freeze_user .username_txt').val(), ~~$('#freeze_user .days_txt').val(), ~~$('#freeze_user .forever_rb').is(":checked"), ~~$('#freeze_user .strike_cb').is(":checked"), $('#freeze_user .reason_txt').val(), $('#freeze_user .all_accounts_cb').is(":checked"));
}

function freezeUser(str, days, forever, strike, reason, all) {
	if (str == "") {
		errorE("Username is blank");
		return;
	}
	if (forever == false && days == 0) {
		errorE("You must freeze a user for at least 1 day");
		return;
	}
	Send({"action":"Freeze user", "username":str, "days":days, "forever":forever, "strike":strike, "reason":reason, "all":all});
	showDim();
}

function banUser(str, days, forever, strike, reason, all) {
	Send({"action":"Ban user", "username":str, "days":days, "forever":forever, "strike":strike, "reason":reason, "all":all});
	showDim();
}

function unbanUserE() {
	if ($('#unban_user .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	unbanUser($('#unban_user .username_txt').val(), ~~$('#unban_user .strike_cb').is(":checked"), $('#unban_user .all_accounts_cb').is(":checked"));
}

function unbanUser(str, strike, all, discreet) {
	Send({"action":"Unban user", "username":str, "strike":strike, "all":all, "discreet":!!discreet});
	showDim();
}

function kickUserE() {
	if ($('#kick_user .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	kickUser($('#kick_user .username_txt').val());
}

function kickUser(str) {
	showDim();
	Send({"action":"Kick user", "username":str});
}

function addWarningE() {
	if ($('#warning_note .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	addWarning($('#warning_note .username_txt').val(), $('#warning_note .warning_txt').val(), ~~$('#warning_note .strike_cb').is(":checked"));
}

function addWarning(str, warning, strike) {
	showDim();
	Send({"action":"Add warning", "username":str, "warning":warning, "strike":strike});
}

function checkIPE() {
	if ($('#ip_check .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	checkIP($('#ip_check .username_txt').val(), $('#ip_check .super_cb').is(":checked"));
}

function checkIP(str, super_check) {
	showDim();
	Send({"action":"IP check", "username":str, "super":!!super_check});
}

function checkCompE() {
	if ($('#computer_check .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	checkComp($('#computer_check .username_txt').val());
}

function checkComp(str) {
	showDim();
	Send({"action":"Comp check", "username":str});
}

function setAdminE() {
	if ($('#admin_status .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	setAdmin($('#admin_status .username_txt').val(), ~~$('#admin_status .status_cb').val(), ~~$('#admin_status .judge_cb').is(":checked"));
}

function setAdmin(str, status, judge) {
	showDim();
	Send({"action":"Set admin", "username":str, "status":status, "judge":judge});
}

function getAdminE() {
	if ($('#admin_status .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	getAdmin($('#admin_status .username_txt').val());
}

function getAdmin(str) {
	showDim();
	Send({"action":"Get admin", "username":str});
}

function resetStatsE() {
	if ($('#reset_stats .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	getConfirmation("Reset Stats", "Are you sure you want to reset stats for " + $('#reset_stats .username_txt').val() + "?", resetStats);
	showDim();
}

function resetStats() {
	showDim();
	Send({"action":"Reset stats", "username":$('#reset_stats .username_txt').val()});
}

function superBanE() {
	if ($('#super_ban .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	if ($('#super_ban .reason_txt').val() == "") {
		errorE("Reason is blank");
		return;
	}
	getConfirmation("Super Ban", "Are you sure you want to super ban " + $('#super_ban .username_txt').val() + "?", superBan);
	showDim();
}

function superBan() {
	showDim();
	Send({"action":"Super ban", "username":$('#super_ban .username_txt').val(), "reason":$('#super_ban .reason_txt').val()});
}

function loadAlerts() {
	Send({"action":"Load alerts"});
	showDim();
}

function loadAlertsResponse(data) {
	hideDim();
	$('#alerts .users .cell').detach();
	for (var i = 0; i < data.length; i++) {
		var cell = $(new Cell2(data[i]));
		//cell.removeAttr("ondblclick");
		cell.dblclick(removeAlertE);
		$('#alerts .users').append(cell);
	}
}

function removeAlertE() {
	var str = $(this).text();
	getConfirmation("Remove Alert", "Remove alerts for " + str + "?", function(){
		removeAlert(str);
	});
	showDim();
}

function removeAlert(str) {
	log(str);
	showDim();
	Send({"action":"Remove alert", "username":str});
}

function addAlert() {
	if ($('#alerts .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	Send({"action":"Add alert", "username":$('#alerts .username_txt').val()});
	showDim();
}

function addRestrictedPhrase1() {
	if ($('#restricted_phrases .phrase_txt').val() == "") {
		errorE("Phrase is blank");
		return;
	}
	Send({"action":"Add restricted phrase", "message":$('#restricted_phrases .phrase_txt').val(), "forever":$('#restricted_phrases .forever_cb').is(":checked")});
	showDim();
}

function loadRestrictedPhrases() {
	Send({"action":"Load restricted phrases"});
	showDim();
}

function loadRestrictedPhrasesResponse(data) {
	hideDim();
	$('#restricted_phrases .phrases .cell').detach();
	for (var i = 0; i < data.length; i++) {
		var cell = $(new Cell2(data[i]));
		//cell.removeAttr("ondblclick");
		cell.dblclick(removeRestrictedPhraseE);
		$('#restricted_phrases .phrases').append(cell);
	}
}

function removeRestrictedPhraseE() {
	var str = $(this).text();
	$('#restricted_phrases .phrase_txt').val(str);
	getConfirmation("Remove Phrase", "Remove " + str + "?", function(){
		removeRestrictedPhrase(str);
	});
	showDim();
}

function removeRestrictedPhrase(str) {
	Send({"action":"Remove restricted phrase", "message":str});
}

function changeUsername() {
	if ($('#change_username .current_txt').val() == "") {
		errorE("Current username is blank");
		return;
	}
	if ($('#change_username .new_txt').val() == "") {
		errorE("New username is blank");
		return;
	}
	showDim();
	Send({"action":"Change username", "current":$('#change_username .current_txt').val(), "new":$('#change_username .new_txt').val()});
}

function terminateAccountE() {
	if ($('#terminate_account .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	getConfirmation("Terminate Account", "Are you sure you want to terminate " + $('#terminate_account .username_txt').val() + "'s account?", terminateAccount);
	showDim();
}

function terminateAccount() {
	showDim();
	Send({"action":"Terminate account", "username":$('#terminate_account .username_txt').val()});
}

function getEmail() {
	showDim();
	Send({"action":"Get email", "username":$('#change_email .username_txt').val()});
}

function getEmailResponse(data) {
	hideDim();
	$('#change_email .email_txt').val(data.email);
}

function changeEmail() {
	if ($('#change_email .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	if ($('#change_email .email_txt').val() == "") {
		errorE("Email is blank");
		return;
	}
	showDim();
	Send({"action":"Change email", "username":$('#change_email .username_txt').val(), "email":$('#change_email .email_txt').val(), "deactivate":~~!$('#change_email .deactivate_cb').is(":checked")});
}

function muteUserE() {
	if ($('#mute_user .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	if ($('#mute_user .seconds_txt').val() == "") {
		errorE("Seconds is blank");
		return;
	}
	muteUser($('#mute_user .username_txt').val(), ~~$('#mute_user .seconds_txt').val(), $('#mute_user .forever_cb').is(":checked"));
	showDim();
}

function unmuteUserE() {
	if ($('#unmute_user .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	unmuteUser($('#unmute_user .username_txt').val());
	showDim();
}

function setIgnoredE() {
	if ($('#set_ignored .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	setIgnored($('#set_ignored .username_txt').val(), $('#set_ignored .forever_cb').is(":checked"));
	showDim();
}

function unsetIgnoredE() {
	if ($('#unset_ignored .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	unsetIgnored($('#unset_ignored .username_txt').val());
	showDim();
}

function checkStatusesE() {
	if ($('#check_statuses .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	checkStatuses($('#check_statuses .username_txt').val());
	showDim();
}

function hideMessagesE() {
	if ($('#hide_messages .username_txt').val() == "") {
		errorE("Username is blank");
		return;
	}
	hideMessages($('#hide_messages .username_txt').val())
	showDim();
}

function hideMessages(str) {
	Send({"action":"Hide public messages", "username":$('#hide_messages .username_txt').val()});
}

function banStatusResponse(data) {
	hideDim();
	if (awaiting_response) {
		$('#calls .status_txt').text("Status: " + data.status);
		setText($('#calls .status_txt'));
		$('#calls .strikes_txt').text("Strikes: " + data.strikes);
		$('#calls .result_txt').html(arrayToNotes(data.notes));
		awaiting_response = false;
		return;
	}
	$('#ban_status .ban_note_txt').html(arrayToNotes(data.notes));
	$('#ban_status .strikes_txt').text(data.strikes);
	$('#ban_status .status_txt').text(data.status);
	setText($('#ban_status .status_txt'));
}

function arrayToNotes(arr) {
	var notes = "";
	var times2 = 0;
	for (var i = 0; i < arr.length; i++) {
		var note = "";
		if (admin >= 3 || moderator >= 2) {
			var pieces = separateLinks(escapeHTMLWithLinks(arr[i].note), '<a', '</a>');
			for (var j = 0; j < pieces.length; j++) {
				if (pieces[j].indexOf('<a') != 0) {
					var callback = 'hideBanNote';
					if (awaiting_response) {
						callback = 'hideBanNote2';
					}
					var reason = arr[i].note.substring(0, arr[i].note.lastIndexOf(" - ")).replace(/\'/g, "");
					if (arr[i].note.indexOf("Blacklisted IP/Comp") == 0) {
						reason = arr[i].note.substring(22, arr[i].note.lastIndexOf(" | ")).replace(/\'/g, "");
					}
					note += '<a class="eventtext" href="javascript:' + callback + '(' + arr[i].id + ', ' + arr[i].hidden + ', \'' + reason + '\');">';
					//note += '<font onclick="hideBanNote(' + arr[i].id + ');" style="cursor: pointer;">';
					note += '<font color="#000000">' + pieces[j] + '</font>';
					if (j != pieces.length - 1) {
						note += '</a>';
						//note += '</font>';
					}
				}
				else {
					note += pieces[j];
				}
			}
		}
		else {
			note += '<font color="#000000">' + escapeHTMLWithLinks(arr[i].note) + '</font>';
		}
		if (arr[i].strike == 1) {
			note += '<font color="#FF0000"> (with strike)</font>';
		}
		if (admin >= 3 || moderator >= 2) {
			note += '</a>';
		}
		if (arr[i].hidden) {
			note = note.replace(/<font color="#FF0000"/g, '<font color="#AAAAAA"');
			note = note.replace(/<font color="#0000FF"/g, '<font color="#AAAAAA"');
			note = note.replace(/<font color="#000000"/g, '<font color="#AAAAAA"');
		}
		notes += note;
		if (i < arr.length - 1) {
			notes += '<br>';
		}
	}
	log(notes);
	return notes;
}

function separateLinks(str, startsWith, endsWith) {
	var arr = [];
	var new_str = "";
	var index = 0;
	var starting = true;
	while (index < str.length) {
		if (starting) {
			if (str.substring(index, str.length).indexOf(startsWith) != 0) {
				new_str += str.substring(index, index + 1);
				index++;
			}
			else {
				arr.push(new_str);
				new_str = "";
				starting = false;
			}
		}
		else {
			if (str.substring(index, str.length).indexOf(endsWith) != 0) {
				new_str += str.substring(index, index + 1);
				index++;
			}
			else {
				arr.push(new_str + endsWith);
				new_str = "";
				starting = true;
				index += endsWith.length;
			}
		}
		
	}
	if (new_str != "") {
		arr.push(new_str);
	}
	return arr;
}

function hideBanNote2(id, hidden, note) {
	hideBanNote(id, hidden, note, true);
}

function hideBanNote(id, hidden, note, b) {
	var str = "Hide Note";
	if (hidden) {
		str = "Unhide Note";
	}
	var options = '<option value="Hide note">' + str + '</option>';
	options += '<option value="Edit note with strike">Edit Note (with strike)</option>';
	options += '<option value="Edit note without strike">Edit Note (without strike)</option>';
	getComboBox("Edit Ban Note", "Select an option:", options, 0, function(){
		if (b) {
			awaiting_response = true;
		}
		log('awaiting_response = ' + awaiting_response);
		switch ($('#combo .combo_cb').val()) {
			case "Hide note":
				Send({"action":"Hide ban note", "id":id});
				showDim();
				break;
			case "Edit note with strike":
				editBanNote(id, 1, note);
				break;
			case "Edit note without strike":
				editBanNote(id, 0, note);
				break;
		}
	});
	showDim();
}

function editBanNote(id, strike, note) {
	getInput("Edit Ban Note", "Enter the new note:", note, 0, function(){
		Send({"action":"Edit ban note", "id":id, "strike":strike, "note":$('#input .input_txt').val()});
		showDim();
	});
	showDim();
}
		
function getAdminResponse(data) {
	hideDim();
	if (!data.username) {
		messageE(data.message);
		return;
	}
	admin_username = data.username;
	if (data.admin < 3 || admin > 3 || moderator > 1) {
		$('#admin2 .status_cb').disable(false);
		$('#admin2 .status_cb').selectedIndex(data.admin);
		$('#admin2 .save_btn').disable(false);
		$('#admin2 .judge_cb').disable(false);
	}
	if (data.admin >= admin && moderator < 2 || (data.admin >= 4 && moderator >= 2)) {
		$('#admin2 .status_cb').disable(true);
		$('#admin2 .status_cb').selectedIndex(-1);
		$('#admin2 .save_btn').disable(true);
		$('#admin2 .judge_cb').disable(true);
		if (data.admin == 3) {
			$('#admin2 .status_cb').val("Head Administrator");
		}
	}
	if (data.admin == 4) {
		$('#admin2 .status_cb').val("Owner");
	}
	//$('#admin2 .judge_cb').checked(data.judge || !data.admin);
	$('#admin2 .judge_cb').checked(data.judge);
}

function showCalls(e) {
	callsTabChange(e);
	$('#calls .calls').show();
	$('#calls .tools').hide();
	$('#calls .log').hide();
}

function showTools(e) {
	callsTabChange(e);
	$('#calls .calls').hide();
	$('#calls .tools').show();
	$('#calls .log').hide();
	$('#calls .tools .username_txt').focus();
	$('#calls .tools .username_txt').select();
}

function showLog(e) {
	callsTabChange(e);
	$('#calls .calls').hide();
	$('#calls .tools').hide();
	$('#calls .log').show();
	$('#calls .log .search_txt').focus();
	$('#calls .log .search_txt').select();
}

function callsTabChange(e) {
	$('#calls .tab_btn').removeClass("selected");
	$('#calls .tab_btn').css("pointer-events", "auto");
	$(e.currentTarget).addClass("selected");
	$(e.currentTarget).css("pointer-events", "none");
}

/*function cellDoubleClickE(cell) {
	openPrivateE(cell.textContent);
}*/
function cellDoubleClickE(e) {
	if (!$(e.target).hasClass("cell")) {
		return;
	}
	openPrivateE($(e.target).text());
}

function savePublicVSP() {
	publicVSP = $('#public_chat .cout_txt').scrollTop();
	var maxVSP = $('#public_chat .cout_txt').scrollMax();
	if (publicVSP >= maxVSP - 40 || maxVSP < 0) {
		//publicVSP = Infinity;
		publicVSP += 1000;
	}
}

function restorePublicVSP() {
	$('#public_chat .cout_txt').scrollTop(publicVSP);
}

function loadPublicChatE() {
	if ($('#public_chat_cycle').is(":visible")) {
		return;
	}
	startChatCycle($('#public_chat_cycle'));
	publicChatLimit += 50;
	loadPublicChat();
}

function loadPublicChat() {
	Send({"action":"Load public chat", "limit":publicChatLimit});
}

function hideMessage(id) {
	var hidden = 1;
	if ($('#public_message' + id).hasClass("hidden")) {
		hidden = 0;
	}
	Send({"action":"Hide public message", "id":id, "hidden":hidden});
}

/*function hideMessage(id) {
	Send({"action":"Hide public message", "id":id, "hidden":1});
}

function unhideMessage(id) {
	Send({"action":"Hide public message", "id":id, "hidden":0});
}*/

function expandPublicChat() {
	$('#public_chat').addClass("moderator");
	$('#public_chat .expand_btn').hide();
	$('#public_chat .minimize2_btn').show();
	startChatCycle($('#public_chat_cycle'));
	loadPublicChat();
	setupInput($('#public_chat .cin_txt'));
}

function minimizePublicChat() {
	$('#public_chat').removeClass("moderator");
	$('#public_chat .expand_btn').show();
	$('#public_chat .minimize2_btn').hide();
	startChatCycle($('#public_chat_cycle'));
	loadPublicChat();
	setupInput($('#public_chat .cin_txt'));
}

function publicChatPrint(data) {
	//if (blocked_arr.indexOf(data.username) >= 0) {
	if (isBlocked(data.username) && !moderator) {
		return;
	}
	savePublicVSP();
	if (publicHTMLLines > 100) {
		publicHTMLText = $('#public_chat .cout_txt').html();
	}
	else {
		publicHTMLLines++;
		publicChatLimit++;
	}
	var color = "#0000FF";
	if (data.color) {
		color = "#" + data.color;
	}
	if (username == data.username && color == "#0000FF") {
		color = "#FF0000";
	}
	var str = '<span id="public_message' + data.id + '" class="public_message">';
	if ($('#public_chat .minimize2_btn').is(":visible")) {
		str += '<a href="javascript:hideMessage(' + data.id + ');">';
	}
	
	
	if (streaming) {
		if (isOffensive(data.username)) {
			color = "white";
		}
		data.message = censor(data.message);
	}
	
	
	if (data.donator == 2) {
		str += '<b>' + colorize(data.username) + '</b> ';
	}
	else {
		str += '<b><font color="' + color + '" class="username">' + escapeHTML(data.username) + ': </font></b>';
	}
	if ($('#public_chat .minimize2_btn').is(":visible")) {
		str += '</a>';
	}
	if (!data.html) {
		data.message = escapeHTMLWithLinks(data.message);
	}
	str += '<font>' + data.message + '</font><br></span>';
	$('#public_chat .cout_txt').append(str);
	publicHTMLText = $('#public_chat .cout_txt').html();
	restorePublicVSP();
}

function publicChatLoaded(data) {
	stopChatCycle($('#public_chat_cycle'));
	savePublicVSP();
	publicHTMLText = "";
	var currentDate = loginDate;
	var moderator = $('#public_chat .minimize2_btn').is(":visible");
	for (var i = 0; i < data.messages.length; i++) {
		//if (blocked_arr.indexOf(data.messages[i].username) >= 0 && !moderator) {
		if (isBlocked(data.messages[i].username) && !moderator) {
			continue;
		}
		if (data.messages[i].hidden && !moderator) {
			continue;
		}
		if (data.messages[i].date != currentDate) {
			currentDate = data.messages[i].date;
			publicHTMLText += '<font color="#AAAAAA"><i> ' + data.messages[i].date + '</i></font><br>';
		}
		if (!data.messages[i].color) {
			data.messages[i].color = "0000FF";
		}
		if (data.messages[i].username == username && data.messages[i].color == "0000FF") {
			data.messages[i].color = "FF0000";
		}
		if (data.messages[i].hidden) {
			data.messages[i].color = "CCCCCC";
		}
		if (!data.messages[i].html) {
			data.messages[i].message = escapeHTMLWithLinks(data.messages[i].message);
		}
		publicHTMLText += '<span id="public_message' + data.messages[i].id + '" class="public_message">';
		if (moderator) {
			publicHTMLText += '<a class="eventtext" href="javascript:hideMessage(' + data.messages[i].id + ');">';
			/*publicHTMLText += '<a class="eventtext" href="javascript:';
			if (data.messages[i].hidden) {
				publicHTMLText += 'hideMessage(this, ';
			}
			else {
				publicHTMLText += 'hideMessage(this, ';
			}
			publicHTMLText += data.messages[i].id + ');">';*/
		}
		publicHTMLText += '<b>';
		if (data.messages[i].color == 'FFCCFF') {
			publicHTMLText += colorize(data.messages[i].username);
		}
		else {
			publicHTMLText += '<font class="username" color="#' + data.messages[i].color + '">' + escapeHTML(data.messages[i].username) + ': </font>';
		}
		publicHTMLText += '</b>';
		if (moderator) {
			publicHTMLText += '</a>';
		}
		if (data.messages[i].hidden) {
			publicHTMLText += '<font color="#CCCCCC">';
		}
		//publicHTMLText += data.messages[i].message;
		publicHTMLText += '<font>' + data.messages[i].message + '</font>';
		if (data.messages[i].hidden) {
			publicHTMLText += '</font>';
		}
		publicHTMLText += '<br></span>';
	}
	$('#public_chat .cout_txt').html(publicHTMLText);
	restorePublicVSP();
}

function hidePublicMessage(data) {
	if (data.username) {
		public_chat.find('.username').each(function(i,e){
			if ($(this).text() == data.username + ": ") {
				$(this).parents('.public_message').detach();
			}
		});
		return;
	}
	var message = public_chat.find('#public_message' + data.id);
	if (data.hidden) {
		message.find('.username').attr("data-color", message.find('.username').attr("color"));
		message.find('.username').attr("color", "#AAAAAA");
		message.find('.username').removeAttr("color");
		message.addClass("hidden");
		return;
	}
	message.find('.username').attr("color", message.find('.username').attr("data-color"));
	message.removeClass("hidden");
}

function openPrivateE(str) {
	if (str == username) {
		errorE("You cannot open a private chat with yourself");
		return;
	}
	if (!str) {
		displayBox("Private Chat", "To send a private message to a user, visit their profile and click Message");
		return;
	}
	if (!$('#private_chat').is(":visible")) {
		togglePrivate();
	}
	openPrivate(str);
}

function openPrivate(str, limit) {
	if (!limit) {
		limit = 50;
	}
	savePrivateVSP();
	if (!str) {
		return;
	}
	var cell;
	for (var i = 0; i < private_chat.find('.cell').length; i++) {
		if (private_chat.find('.cell').eq(i).data("username") == str) {
			cell = private_chat.find('.cell').eq(i);
			break;
		}
	}
	if (i == private_chat.find('.cell').length) {
		cell = new PrivateChatCell(str);
		cell.data("limit", limit); // ??
	}
	cell.parent().find('.cell.selected').removeClass("selected");
	cell.addClass("selected");
	private_chat.find('.cin_txt').val(cell.data("cin"));
	private_chat.find('.cout_txt').html(cell.data("cout"));
	private_chat.find('.cout_txt').scrollTop(cell.data("vsp"));
	cell.data("new_msg", false);
	cell.removeClass("glowing");
	determineAnimate();
	updatePrivateList();
	checkBlocked(str);
	private_chat.find('.cin_txt').focus();
	private_chat.find('.cin_txt').select();
	if (!cell.data("loaded")) {
		if (auto_load_messages) {
			loadPrivateChat();
			return;
		}
		checkOnline(str);
		stopChatCycle($('#private_chat_cycle'));
		cell.data("loaded", true);
		cell.data("cout", private_chat.find('.cout_txt').html());
	}
	restorePrivateVSP();
	active_scrollpane = private_chat.find('.cout_txt');
}

function privateOnlineE(data) {
	for (var i = 0; i < private_chat.find('.cell').length; i++) {
		if (data.username == private_chat.find('.cell').eq(i).data("username")) {
			var cell = private_chat.find('.cell').eq(i);
			if (cell.hasClass("selected")) {
				private_chat.find('.cout_txt').append('<b><font color="#000000">' + data.username + ' has logged in</font></b><br>');
				cell.data("cout", private_chat.find('.cout_txt').html())
				private_chat.find('.cout_txt').scrollTop(cell.data("vsp")); // doesn't seem right
				break;
				
			}
			cell.data("cout", cell.data("cout") + '<b><font color="#000000">' + data.username + ' has logged in</font></b><br>')
		}
	}
}

function privateOfflineE(data) {
	for (var i = 0; i < private_chat.find('.cell').length; i++) {
		if (data.username == private_chat.find('.cell').eq(i).data("username")) {
			var cell = private_chat.find('.cell').eq(i);
			if (cell.hasClass("selected")) {
				private_chat.find('.cout_txt').append('<b><font color="#000000">' + data.username + ' has logged out</font></b><br>');
				cell.data("cout", private_chat.find('.cout_txt').html())
				private_chat.find('.cout_txt').scrollTop(cell.data("vsp")); // doesn't seem right
				break;
				
			}
			cell.data("cout", cell.data("cout") + '<b><font color="#000000">' + data.username + ' has logged out</font></b><br>')
		}
	}
}

function updatePrivateList() {
	switch(private_chat.find('.cell').length) {
		case 0:
			private_chat.hide();
			break;
		case 1:
			private_chat.find('.users').css("height", 20);
			private_chat.find('.users').css("top", 409); // -32
			private_chat.find('.cin_txt').css("top", 383.5); // -31
			private_chat.find('.cout_txt').css("height", 370); // -11
			break;
		case 2:
			private_chat.find('.users').css("height", 40);
			private_chat.find('.users').css("top", 389);
			private_chat.find('.cin_txt').css("top", 364);
			private_chat.find('.cout_txt').css("height", 350);
			break;
		case 3:
			private_chat.find('.users').css("height", 60);
			private_chat.find('.users').css("top", 369);
			private_chat.find('.cin_txt').css("top", 343.5);
			private_chat.find('.cout_txt').css("height", 330);
			break;
		case 4:
			private_chat.find('.users').css("height", 80);
			private_chat.find('.users').css("top", 349);
			private_chat.find('.cin_txt').css("top", 324);
			private_chat.find('.cout_txt').css("height", 310);
			break;
		default:
			private_chat.find('.users').css("height", 100);
			private_chat.find('.users').css("top", 329);
			private_chat.find('.cin_txt').css("top", 303.45);
			private_chat.find('.cout_txt').css("height", 290);
			break;
	}
	if (private_chat.find('.cell').length > 5) {
		private_chat.find('.users').removeClass("unscrollable");
		return;
	}
	private_chat.find('.users').addClass("unscrollable");
}

function changePrivate(e) {
	var cell = $(e.target);
	cell.data("loaded", true);
	openPrivate(cell.data("username"));
	checkBlocked(cell.data("username"));
	setupInput(private_chat.find('.cin_txt'));
}

function endPrivate() {
	var index = private_chat.find('.cell.selected').index();
	private_chat.find('.cell.selected').remove();
	updatePrivateList();
	if (private_chat.find('.cell').length > 0) {
		if (index == 0) {
			index++;
		}
		private_chat.find('.cell').eq(index - 1).trigger("click");
	}
}

function determineAnimate() {
	var total = 0;
	var usernames = [];
	var cells = private_chat.find('.cell');
	for (var i = 0; i < cells.length; i++) {
		if (cells.eq(i).data("new_msg")) {
			total++;
			usernames.push(cells.eq(i).data("username"));
		}
	}
	if (total) {
		next_title = usernames[0] + " says...";
		title_timer.reset();
		title_timer.start();
		startPrivateAnimation();
		return;
	}
	stopPrivateAnimation();
	title_timer.stop();
	setTitle("Duelingbook");
}

/*function startPrivateAnimation() {
	TweenMax.fromTo($('#private_btn_anim'), 0.5, {scale:1, opacity:0}, {scale:1.35, opacity:1, ease:Linear.easeNone});
	TweenMax.fromTo($('#private_btn'), 0.5, {scale:1}, {scale:1.35, ease:Linear.easeNone, onComplete:function(){
		TweenMax.fromTo($('#private_btn_anim'), 0.5, {scale:1.35, opacity:1}, {scale:1, opacity:0, ease:Linear.easeNone});
		TweenMax.fromTo($('#private_btn'), 0.5, {scale:1.35}, {scale:1, ease:Linear.easeNone, onComplete:function(){
			startPrivateAnimation();
		}});
	}});
}*/

function startPrivateAnimation() {
	TweenMax.fromTo($('#private_btn_anim'), 0.5, {width:40, height:36, opacity:0}, {width:54, height:49, opacity:1, ease:Linear.easeNone});
	TweenMax.fromTo($('#private_btn'), 0.5, {width:40, height:36}, {width:54, height:49, ease:Linear.easeNone, onComplete:function(){
		TweenMax.fromTo($('#private_btn_anim'), 0.5, {width:54, height:49, opacity:1}, {width:40, height:36, opacity:0, ease:Linear.easeNone});
		TweenMax.fromTo($('#private_btn'), 0.5, {width:54, height:49}, {width:40, height:36, ease:Linear.easeNone, onComplete:function(){
			startPrivateAnimation();
		}});
	}});
}

/*function stopPrivateAnimation() {
	TweenMax.killTweensOf($('#private_btn'));
	TweenMax.killTweensOf($('#private_btn_anim'));
	$('#private_btn, #private_btn_anim').css("transform", "scale(1)");
	$('#private_btn').css("opacity", "1");
	$('#private_btn_anim').css("opacity", "0");
}*/

function stopPrivateAnimation() {
	TweenMax.killTweensOf($('#private_btn'));
	TweenMax.killTweensOf($('#private_btn_anim'));
	TweenMax.set($('#private_btn, #private_btn_anim'), {width:40, height:36, opacity:1});
	TweenMax.set($('#private_btn_anim'), {opacity:0});
}

function privateChatPrint(data) {
	var cell;
	var from;
	var fromMe = false;
	var otherPerson = data.username;
	if (username != data.receiver) {
		otherPerson = data.receiver;
		from = username;
		fromMe = true;
		playSound(ChatOutbound);
	}
	else {
		from = otherPerson;
		playSound(ChatInbound);
	}
	var color = '#0000FF';
	if (data.color) {
		color = '#' + data.color;
	}
	if (fromMe && color == "#0000FF") {
		color = "#FF0000";
	}
	var message = data.message;
	
	
	
	if (streaming) {
		if (isOffensive(from)) {
			color = "white";
		}
		message = censor(message);
	}
	
	
	
	if (!data.html) {
		message = escapeHTMLWithLinks(message);
	}
	message = '<font>' + message + '</font>';
	var content = '<b><font color="' + color + '">' + escapeHTML(from) + ": </font></b>" + message;
	if (data.donator) {
		content = '<b>' + colorize(from) + '</b> ' + message;
	}
	content += '<br>';
	var users = private_chat.find('.cell');
	for (var i = 0; i < users.length; i++) {
		if (users.eq(i).text() == otherPerson) {
			cell = users.eq(i);
			break;
		}
	}
	if (!cell) {
		cell = new PrivateChatCell(from);
	}
	if (private_chat.find('.cell.selected').text() == otherPerson) {
		//console.log('appending. content = ' + content);
		savePrivateVSP();
		private_chat.find('.cout_txt').append(content);
		cell.data("cout", private_chat.find('.cout_txt').html());
		restorePrivateVSP();
	}
	if (!fromMe && !private_chat.is(":visible") || private_chat.find('.cell.selected').text() != otherPerson) {
		cell.data("new_msg", true);
		if (private_chat.find('.cell.selected').text() != otherPerson) {
			cell.data("cout", cell.data("cout") + content);
		}
		cell.addClass("glowing");
		determineAnimate();
	}
}

function loadPrivateChatE() {
	console.log('loadPrivateChatE');
	private_chat.find('.cell.selected').data("limit", private_chat.find('.cell.selected').data("limit") + 50);
	startChatCycle($('#private_chat_cycle'));
	private_chat.find('.cell.selected').data("loaded", false);
	loadPrivateChat();
}

function loadPrivateChat() {
	Send({"action":"Load private chat", "username":private_chat.find('.cell.selected').data("username"), "limit":private_chat.find('.cell.selected').data("limit")});
}

function privateChatLoaded(data) {
	var cell = private_chat.find('.cell.selected');
	cell.data("loaded", true);
	stopChatCycle($('#private_chat_cycle'));
	var str = "";
	if (data.messages.length > 0) {
		var date = loginDate;
		for (var i = 0; i < data.messages.length; i++) { 
			if (data.messages[i].date != date) {
				date = data.messages[i].date;
				str += '<font color="#AAAAAA"><i> ' + data.messages[i].date + '</i></font><br>';
			}
			if ((data.messages[i].username == username || data.messages[i].username == alt_username) && data.messages[i].color == "0000FF") {
				data.messages[i].color = "FF0000";
			}
			var message = data.messages[i].message;
			if (!data.messages[i].html) {
				message = escapeHTMLWithLinks(data.messages[i].message);
			}
			message = '<font>' + message + '</font>';
			if (data.messages[i].hidden) {
				message = '<font color="#AAAAAA">[Deleted]</font>';
			}
			var content = '<b><font color="#' + data.messages[i].color + '">' + escapeHTML(data.messages[i].username) + ': </font></b>' + message + '<br>';
			if (data.messages[i].color == 'FFCCFF') {
				content = '<b>' + colorize(data.messages[i].username) + '</b> ' + message + '<br>';
			}
			str += content;
		}
	}
	if (!isOnline(data.username)) {
		str += '<font color="#000000"><b>' + escapeHTML(data.username) + ' is offline</b></font><br>';
	}
	if (cell.data("username") == data.username) {
		private_chat.find('.cout_txt').html(str);
		cell.data("cout", str); // why was this disabled?
		private_chat.find('.cout_txt').scrollTop(cell.data("vsp"));
		return;
	}
	var users = private_chat.find('.cell');
	for (i = 0; i < users.length; i++) {
		if (users.eq(i).data("username") == data.username) {
			users.eq(i).data("cout", str);
		}
	}
}

function privateMessage(e) {
	if (locked) {
		return;
	}
	if ($('#private_chat .cin_txt').val() == "" || $('#private_chat .cin_txt').val() == "Posting as " + username + "...") {
		return;
	}
	if (e.currentTarget == $('#messages .cin_txt')[0]) {
		console.log('yes, in messages');
		if ($('#private_chat .users .cell.selected').text() == clickedMessageUsername) {
			awaiting_message = true;
		}
	}
	else {
		console.log('no, in private chat');
	}
	Send({"action":"Private message", "username":$('#private_chat .users .cell.selected').text(), "message":$('#private_chat .cin_txt').val(), "html":~~$('#private_chat .html_cb').is(":checked")});
	$('#private_chat .cin_txt').val("");
	$('#private_chat .users .cell.selected').data("cin", "");
	lock();
}

function offlineMessage() {
	if ($('#private_chat .cin_txt').val() == "") {
		return;
	}
	Send({"action":"Offline message", "username":$('#private_chat .users .cell.selected').text(), "message":$('#private_chat .cin_txt').val(), "html":~~$('#private_chat .html_cb').is(":checked")});
	$('#private_chat .users .cell.selected').data("cin", "");
	$('#private_chat .cin_txt').val("");
	$('#private_chat .cin_txt').focus();
	//awaiting_message = true;
}

function offlineMessage2() {
	if ($('#messages .cin_txt').val() == "") {
		return;
	}
	Send({"action":"Offline message", "username":clickedMessageUsername, "message":$('#messages .cin_txt').val(), "html":~~$('#messages .html_cb').is(":checked")});
	$('#messages .cin_txt').val("");
	awaiting_message = true;
}

function startChatCycle(p) {
	p.show();
	p.data("cycle").play();
	TweenMax.fromTo(p, 0.25, {opacity:0}, {opacity:1, ease:Linear.easeNone});
}

function stopChatCycle(p) {
	TweenMax.fromTo(p, 0.25, {opacity:1}, {opacity:0, ease:Linear.easeNone, onComplete:function(){
		p.hide();
		p.css("opacity", 1);
		p.data("cycle").stop();
	}});
}

function PrivateChatCell(str) {
	var cell = new $(Cell(str));
	//cell.removeAttr("ondblclick");
	cell.data("username", str);
	cell.data("cout", "");
	cell.data("cin", "");
	cell.data("blocked", isBlocked(str));
	cell.data("loaded", false); // if this is true, then it won't say if a user if offline when you open private
	cell.data("new_msg", true);
	cell.data("limit", 50);
	cell.data("vsp", 0);
	var f = $(':focus');
	private_chat.find('.users').append(cell);
	sortCells(private_chat.find('.cell'));
	updatePrivateList();
	cell.attr("tabindex", "0");
	cell.focus();
	cell.removeAttr("tabindex");
	f.focus();
	return cell;
}

function savePrivateInput() {
	private_chat.find('.cell.selected').data("cin", private_chat.find('.cin_txt').val());
}

function savePrivateVSP() {
	var vsp = private_chat.find('.cout_txt').scrollTop();
	var maxVSP = private_chat.find('.cout_txt').scrollMax();
	if (vsp >= maxVSP - 50 || maxVSP < 0) {
		//vsp = Infinity;
		vsp += 1000;
	}
	private_chat.find('.cell.selected').data("vsp", vsp);
}

function restorePrivateVSP() {
	private_chat.find('.cout_txt').scrollTop(private_chat.find('.cell.selected').data("vsp"));
}

function checkOnline(str) {
	if (!isOnline(str)) {
		private_chat.find('.cout_txt').append('<font color="#000000"><b>' + escapeHTML(str) + ' is offline</b></font><br>');
	}
}

function checkBlocked(str) {
	private_chat.find('.cin_txt').disable(false);
	if (private_chat.find('.cell.selected').data("loaded") == false) {
		startChatCycle($('#private_chat_cycle'));
	}
	if (frozen) {
		if (!isAdmin(str) && !isFriend(str)) {
			private_chat.find('.cin_txt').val("You are frozen");
			private_chat.find('.cin_txt').disable(true);
		}
	}
	if (isBlocked(str)) {
		private_chat.find('.cin_txt').val("You are blocked");
		private_chat.find('.cin_txt').disable(true);
	}
}

function isAdmin(str) {
	if (!online_users_data) { // occasionally kept happening for loadOfflineMessages in connectedE
		return false;
	}
	for (var i = 0; i < online_users_data.length; i++) {
		if (online_users_data[i].username == str) {
			if (online_users_data[i].admin) {
				return true;
			}
			break;
		}
	}
	return false;
}

function hideActionList(e) {
	action_list.hide();
	$('body').off('mouseup', hideActionList);
	$('#online_users .users').on('click', showActionList);
}

function showActionList(e) {
	if (!$(e.target).hasClass("cell")) {
		return;
	}
	clickedUsername = e.target.textContent;
	$('#online_users .users').data("selectedItem", $(e.target));
	var index = 0;
	$('#online_users .users .cell:visible').each(function(i,e){
		if (e.textContent == clickedUsername) {
			return false;
		}
		index++;
	});
	var arr = [];
	//var blocked = isBlocked(clickedUsername);
	var blocked = blocked_arr.indexOf(clickedUsername) >= 0;
	if (clickedUsername != username) {
		if (!blocked) {
			arr.push("Send message");
		}
	}
	if (!(duel_active && duelist) && !unsavedChanges) {
		arr.push("View profile");
	}
	if (!isFollowing(clickedUsername) && !isJudge(clickedUsername)) {
		arr.push("Follow user");
	}
	else if (isFollowing(clickedUsername)) {
		arr.push("Unfollow user");
	}
	if (clickedUsername != username) {
		if (!blocked) {
			if (isFriend(clickedUsername)) {
				arr.push("Delete friend");
			}
			else if (isFriendSent(clickedUsername)) {
				arr.push("Revoke request");
			}
			else if (isFriendReceived(clickedUsername)) {
				arr.push("Accept request");
			}
			else if (!isJudge(clickedUsername) && !judge) {
				arr.push("Add friend");
			}
		}
		if (!blocked && !isJudge(clickedUsername)) {
			arr.push("Block user");
		}
		else {
			if (isBlockedByYou(clickedUsername)) {
				arr.push("Unblock user");
			}
		}
	}
	if (moderator) {
		arr.push("Mute user");
		arr.push("Unmute user");
		arr.push("Set ignored");
		arr.push("Unset ignored");
		arr.push("Check statuses");
	}
	if (moderator > 1) {
		arr.push("Check decks");
		arr.push("Duel info");
		arr.push("Get user id");
		arr.push("Get log");
	}
	if (moderator > 1 || admin > 2) {
		arr.push("Get actions");
	}
	if (moderator > 1) {
		arr.push("Get screenshot");
		if (duelId) {
			arr.push("Repair game");
		}
		arr.push("Refresh user");
		arr.push("Time out");
		arr.push("Restrict phrase");
		arr.push("Ban phrase");
		arr.push("Illegal phrase");
		arr.push("Skim queries");
		arr.push("Eval");
		arr.push("QPS");
	}
	//if ((admin || adjudicator) && moderator < 2) {
	if (admin && moderator < 2) {
		if (player1 && player2 && duelId != 0) {
			if (clickedUsername == player1.username || clickedUsername == player2.username) {
				if (!adjudicator) {
					arr.push("Get duel info");
				}
				if (adjudicator) {
					arr.push("Get log");
				}
				arr.push("Get actions");
				arr.push("Get screenshot");
				arr.push("Repair game");
			}
		}
	}
	if (admin && moderator < 2) {
		arr.push("Get log");
	}
	action_list.html("");
	for (var i = 0; i < arr.length; i++) {
		var cell = new $(Cell(upperCamelCase(arr[i])));
		cell.data("data", arr[i]);
		action_list.append(cell);
	}
	$('#chats').append(action_list);
	action_list.css("left", parseInt($('#online_users').css("left")) + parseInt($('#online_users').css("width")) - 1);
	action_list.css("top", index * 20 + parseInt($('#online_users').css("top")) + parseInt($('#online_users .chat_background').css("top")) - $('#online_users .users').scrollTop() - 0.5);
	action_list.css("height", arr.length * 20);
	action_list.show();
	if (!mobile) {
		$('body').on('mouseup', hideActionList);
	}
	$('#online_users .users').off('click', showActionList);
}

function needsDeckHelp(str) {
	var arr = private_chat.find('.cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i).data("username") == str) {
			if (arr.eq(i).data("cout") != "") {
				return true;
			}
		}
	}
	for (i = 0; i < status_arr.length; i++) {
		if (status_arr[i].data("username") == str) {
			return true;
		}
	}
	if (public_chat.find('.cout_txt').text().indexOf(clickedUsername + ":") >= 0) {
		return true;
	}
	return false;
}

function idToString(id) {
	var str = id.toString();
	if (str.length < 4) {
		while (str.length < 4) {
			str = "0" + str;
		}
	}
	else {
		str = str.substring(str.length - 4, str.length);
	}
	return str;
}

function isJudge(str) {
	if (str.indexOf("Resource Judge") == 0) {
		return true;
	}
	return false;
}

function isFollowing(str) {
	if (following_arr.indexOf(str) >= 0) {
		return true;
	}
	return false;
}

function isFriend(str) {
	if (friends_arr.indexOf(str) >= 0) {
		return true;
	}
	return false;
}

function isFriendSent(str) {
	if (sent_friend_requests_arr.indexOf(str) >= 0) {
		return true;
	}
	return false;
}

function isFriendReceived(str) {
	if (received_friend_requests_arr.indexOf(str) >= 0) {
		return true;
	}
	return false;
}

/*function isBlocked(str) {
	if (blocked_arr.indexOf(str) >= 0) {
		return true;
	}
	return false;
}*/

function isBlocked(str) {
	if (admin) {
		return false;
	}
	if (isAdmin(str)) {
		if (blocked_by_you_arr.indexOf(str) >= 0) {
			//return true;
		}
		return false;
	}
	if (blocked_arr.indexOf(str) >= 0) {
		return true;
	}
	return false;
}

function isBlockedByYou(str) {
	if (blocked_by_you_arr.indexOf(str) >= 0) {
		return true;
	}
	return false;
}

function restrictIntATK(obj) {
	obj.on('input', function() {
		this.value = this.value.replace(/[^0-9\?]/g, '');
		if (this.value.indexOf("?") == 0 && this.value.length > 0) {
			this.value = "?";
		}
		else if (this.value.indexOf("?") > 0) {
			this.value = this.value.replace("?", "");
		}
	});
}

function goatFormatInfo() {
	displayBox("Goat Format", 'Only cards that were released before August 2005 are legal in this format. <font color="#0077FF"><a href="' + URL_START + 'goat-format" target="_blank"><u>More Info</u></a></font>', null, true);
}

function speedDuelsInfo() {
	displayBox("Speed Duels", 'In this format, only certain cards are allowed, and your deck must contain between 20 and 30 cards. <font color="#0077FF"><a href="' + URL_START + 'speed-duels" target="_blank"><u>Speed Duel Rules</u></a></font>', null, true);
}

function rushDuelsInfo() {
	displayBox("Rush Duels", 'In this format, only Rush cards can be used. <font color="#0077FF"><a href="' + URL_START + 'rush-duels" target="_blank"><u>More Info</u></a></font>', null, true);
}

function showNextFilters() {
	$('#filter1').hide();
	$('#filter2').show();
	$('#filter2 .rating_lower_txt').focus();
}

function showPrevFilters() {
	$('#filter1').show();
	$('#filter2').hide();
	$('#filter1 .username_txt').focus();
}

function searchOptionsNext() {
	$('#search .more_options_btn').hide();
	$('#search .prev_options_btn').show();
	$('#search1').hide();
	$('#search2').show();
}

function searchOptionsPrev() {
	$('#search .more_options_btn').show();
	$('#search .prev_options_btn').hide();
	$('#search1').show();
	$('#search2').hide();
}
		
/*function poolsNextE(fast) {
	var left = 1024;
	if ($('#formats').scrollLeft() >= 1022 || TweenMax.isTweening($('#formats'))) {
		left = 1368;
		$('#pools_next_btn').hide();
	}
	$('#pools_prev_btn').show();
	var speed = 1;
	if (simple || fast == true) {
		speed = 0;
	}
	console.log(left);
	//TweenMax.to($('#formats'), speed, {scrollLeft:left, ease:Circ.easeInOut});
	TweenMax.to($('#formats_inner'), speed, {"left":-left, ease:Circ.easeInOut});
}

function poolsPrevE(fast) {
	var left = 1024;
	if ($('#formats').scrollLeft() <= 1024 || TweenMax.isTweening($('#formats'))) {
		left = 0;
		$('#pools_prev_btn').hide();
	}
	$('#pools_next_btn').show();
	var speed = 1;
	if (simple || fast == true) {
		speed = 0;
	}
	//TweenMax.to($('#formats'), speed, {scrollLeft:left, ease:Circ.easeInOut});
	TweenMax.to($('#formats_inner'), speed, {"left":-left, ease:Circ.easeInOut});
}*/

/*function poolsNextE(fast) {
	var left = 1024;
	if (parseInt($('#formats_inner').css("left")) < -1022 || TweenMax.isTweening($('#formats_inner'))) {
		left = 1368;
		$('#pools_next_btn').hide();
	}
	$('#pools_prev_btn').show();
	var speed = 1;
	if (simple || fast == true) {
		speed = 0;
	}
	console.log(left);
	TweenMax.to($('#formats_inner'), speed, {"left":-left, ease:Circ.easeInOut});
}

function poolsPrevE(fast) {
	var left = 1024;
	if (parseInt($('#formats_inner').css("left")) >= -1024 || TweenMax.isTweening($('#formats_inner'))) {
		left = 0;
		$('#pools_prev_btn').hide();
	}
	$('#pools_next_btn').show();
	var speed = 1;
	if (simple || fast == true) {
		speed = 0;
	}
	TweenMax.to($('#formats_inner'), speed, {"left":-left, ease:Circ.easeInOut});
}*/

function poolsNextE(fast) {
	var left = 1024;
	if ($('#formats').scrollLeft() >= 1022 || TweenMax.isTweening($('#formats'))) {
		//left = 1368;
		left = 1708;
		$('#pools_next_btn').hide();
	}
	$('#pools_prev_btn').show();
	var speed = 1;
	if (simple || fast == true) {
		speed = 0;
	}
	tweenScrollbar($('#formats'), speed, {"scrollLeft":left, ease:Circ.easeInOut});
}

function poolsPrevE(fast) {
	var left = 1024;
	if ($('#formats').scrollLeft() <= 1024 || TweenMax.isTweening($('#formats'))) {
		left = 0;
		$('#pools_prev_btn').hide();
	}
	//$('#pools_next_btn').show();
	var speed = 1;
	if (simple || fast == true) {
		speed = 0;
	}
	tweenScrollbar($('#formats'), speed, {"scrollLeft":left, ease:Circ.easeInOut, onComplete:function(){
		//if ($('#formats').scrollLeft() <= 1368) {
		if ($('#formats').scrollLeft() <= 1708) {
			$('#pools_next_btn').show();
		}
	}});
}

/*function DuelButton(data) {
	var duel_button = $('<div class="duelbutton"><div class="background"></div></div>');
	var format = getFormat(data.f);
	duel_button.data("note", str(data.n));
	duel_button.data("type", data.t);
	duel_button.data("format", format);
	duel_button.data("format_str", data.f);
	duel_button.data("rules", data.r);
	duel_button.data("links", true);
	duel_button.data("friends", ~~data.fr);
	
	var note_txt = document.createElement("span");
	note_txt.className = "note_txt";
	duel_button[0].appendChild(note_txt);
	
	if (data.p) {
		duel_button.data("password", data.p);
		var key = document.createElement("img");
		key.className = "key";
		key.setAttribute("src", IMAGES_START + 'svg/key.svg');
		duel_button[0].appendChild(key);
	}
	if (data.r == "TCG") {
		duel_button.data("tcg", 1);
		var tcg_title = document.createElement("div");
		tcg_title.className = "tcg_title";
		tcg_title.textContent = "TCG";
		duel_button[0].appendChild(tcg_title);
	}
	else if (data.r == "OCG") {
		duel_button.data("ocg", 1);
		var ocg_title = document.createElement("div");
		ocg_title.className = "ocg_title";
		ocg_title.textContent = "OCG";
		duel_button[0].appendChild(ocg_title);
	}
	else {
		note_txt.style.left = "0px";
		if (key) {
			note_txt.style.left = "3px";
		}
	}
	var game_type = document.createElement("div");
	game_type.className = "game_type";
	game_type.textContent = getGameType(data.t);
	duel_button[0].appendChild(game_type);
	
	note_txt.style.width = (parseInt(game_type.style.left) - parseInt(note_txt.style.left) - 2) + "px";
	
	var glow = document.createElement("div");
	glow.className = "glow";
	
	var background = document.createElement("div");
	background.className = "background";
	glow.appendChild(background);
	glow.style.opacity = "0.7";
	duel_button[0].appendChild(glow);
	
	duel_button.mouseenter(function(){
		glow.style.display = "block";
	});
	duel_button.mouseout(function(){
		glow.style.display = "none";
		glow.style.opacity = "0.7";
	});
	duel_button.mousedown(function(){
		glow.style.opacity = "0.4";
	});
	duel_button.mouseup(function(){
		glow.style.opacity = "0.7";
	});
	return duel_button; // 480
}*/

function DuelButton(data) {
	var duel_button = $('<div class="duelbutton"><div class="background"></div></div>');
	var format = getFormat(data.f);
	duel_button.data("note", str(data.n));
	duel_button.data("type", data.t);
	duel_button.data("format", format);
	duel_button.data("format_str", data.f);
	duel_button.data("rules", data.r);
	duel_button.data("links", true);
	duel_button.data("friends", ~~data.fr);
	
	var note_txt = $('<span class="note_txt"></span>');
	note_txt.text(data.n);
	duel_button.append(note_txt);
	
	if (data.p) {
		duel_button.data("password", data.p);
		var key = $('<img class="key" src="' + IMAGES_START + 'svg/key.svg">');
		duel_button.append(key);
	}
	if (data.r == "TCG") {
		duel_button.data("tcg", 1);
		var tcg_title = $('<div class="tcg_title">TCG</div>');
		duel_button.append(tcg_title);
	}
	else if (data.r == "OCG") {
		duel_button.data("ocg", 1);
		var ocg_title = $('<div class="ocg_title">OCG</div>');
		duel_button.append(ocg_title);
	}
	else {
		note_txt.css("left", 0);
		if (key) {
			key.css("left", 3);
		}
	}
	var game_type = $('<div class="game_type">' + getGameType(data.t) + '</div>');
	duel_button.append(game_type);
	
	note_txt.css("width", parseInt(game_type.css("left")) - parseInt(note_txt.css("left")) - 2);
	
	var glow = $('<div class="glow"><div class="background"></div></div>');
	glow.css("opacity", 0.7);
	duel_button.append(glow);
	
	duel_button.mouseenter(function(){
		glow.show();
	});
	duel_button.mouseleave(function(){
		glow.hide();
		glow.css("opacity", 0.7);
	});
	duel_button.mousedown(function(){
		glow.css("opacity", 0.4);
	});
	duel_button.mouseup(function(){
		glow.css("opacity", 0.7);
	});
	return duel_button;
}

function JoinButton(data) {
	var join_button = new DuelButton(data);
	join_button.addClass("joinbutton");
	join_button.data("username", data.u);
	join_button.data("username2", str(data.u2));
	join_button.data("rating_low", data.ra);
	join_button.data("rating_high", data.ra);
	join_button.data("experience_low", data.e);
	join_button.data("experience_high", data.e);
	join_button.data("format", data.f);
	if (data.l == false) {
		join_button.data("links", data.l);
	}
	if (data.tag) {
		join_button.data("tag", true);
		join_button.data("tag_duel", true);
	}
	
	$('body').append(join_button); // something like this is needed for the arr stuff below
	
	var username_txt = $('<span class="username_txt"></span>');
	username_txt.text(data.u);
	join_button.append(username_txt);
	
	var rating_txt = $('<span class="rating_txt"></span>');
	rating_txt.text(data.ra + "/" + data.e);
	join_button.append(rating_txt);
	
	if (rating_txt[0].scrollWidth > rating_txt.width()) {
		rating_txt.css("left", 273 - rating_txt[0].scrollWidth);
	}
	
	var arr = [rating_txt];
	if (data.partner) {
		join_button.data("tag_duel", true);
		var partner = $('<div class="partner">TAG PARTNER</div>');
		partner.insertBefore(join_button.find('.glow'));
		//join_button.append(partner);
		arr.push(partner);
	}
	if (data.l == false && data.f != "gu" && data.f != "su" && data.f != "ru") {
		var classic = $('<div class="classic">CLASSIC</div>');
		classic.insertBefore(join_button.find('.glow'));
		//join_button.append(classic);
		arr.push(classic);
	}
	if (data.j) {
		var expert = $('<div class="expert">EXPERT</div>');
		expert.insertBefore(join_button.find('.glow'));
		//join_button.append(expert);
		arr.push(expert);
	}
	if (data.tag) {
		rating_txt.hide();
		username_txt.text(data.u + " (" + data.ra + "/" + data.e + ") & " + data.u2 + " (" + data.ra2 + "/" + data.e2 + ")");
		var tag_team = $('<div class="tag_team">TAG TEAM</div>');
		tag_team.insertBefore(join_button.find('.glow'));
		//join_button.append(tag_team);
		arr.push(tag_team);
		arr.splice(arr.indexOf(rating_txt), 1);
		username_txt.css("width", 213);
	}
	
	for (var i = 0; i < arr.length; i++) {
		if (i >= 1) {
			arr[i].css("left", parseInt(arr[i - 1].css("left")) - parseInt(arr[i][0].scrollWidth) - 7);
		}
	}
	rating_txt.css("left", "unset");
	rating_txt.css("right", "15px");
	rating_txt.css("width", "100%");
	if (arr.length > 1) {
		username_txt.css("width", parseInt(arr[arr.length - 1].css("left")) - 5);
	}
	if (data.p) {
		join_button.find('.note_txt').css("left", parseInt(join_button.find('.note_txt').css("left")) + 35);
	}
	if (data.w == false) {
		join_button.find('.game_type').css("left", 230);
	}
	else {
		join_button.data("watching", true);
		var watching = $('<img class="watching" src="' + IMAGES_START + 'svg/watching.svg" />');
		join_button.append(watching);
	}
	if (data.legality == "Illegal" || data.legality == "Small") {
		if (data.f != "su") {
			join_button.find('.note_txt').html(escapeHTML(str(data.n)) + '<font color="#FF0000"> (Under 40 cards)  </font>');
		}
	}
	else if (data.f == "cu" && data.legality && data.legality != "Advanced") {
		//join_button.find('.note_txt').html(escapeHTML(str(data.n)) + '<font color="#FF0000"> (Bypassing card limits)  </font>');
		join_button.find('.note_txt').html(escapeHTML(str(data.n)) + '<font color="#777777"> (Unlimited)  </font>');
	}
	join_button.click(function(){
		joinDuelE($(this));
	});
	
	
	
	
	if (streaming) {
		if (isOffensive(data.u)) {
			join_button.find('.username_txt').text(censor(data.u));
		}
	}	
	
	
	
	
	return join_button;
}

/*function WatchButton(data) {
	var watch_button = new DuelButton(data);
	watch_button.addClass("watchbutton");
	
	var title_txt = document.createElement("span");
	title_txt.className = "title_txt";
	watch_button[0].appendChild(title_txt);
	
	watch_button.data("id", data.id);
	watch_button.data("username", data.p1.u);
	if (data.p1.u > data.p2.u) {
		watch_button.data("username", data.p2.u);
	}
	watch_button.data("username1", data.p1.u);
	watch_button.data("username2", data.p2.u);
	if (data.tag) {
		var tag_duel = document.createElement("div");
		tag_duel.className = "tag_duel";
		tag_duel.textContent = "TAG DUEL";
		watch_button[0].appendChild(tag_duel);
		watch_button.data("tag_duel", true);
		watch_button[0].appendChild(tag_duel);
		watch_button.data("username3", data.p3.u);
		watch_button.data("username4", data.p4.u);
		title_txt.style.width = "211px";
	}
	else {
		watch_button.data("username3", "");
		watch_button.data("username4", "");
	}
	watch_button.data("password", !!data.p);
	watch_button.data("rating_high", data.p1.r);
	watch_button.data("rating_low", data.p2.r);
	if (data.p2.r > data.p1.r) {
		watch_button.data("rating_high", data.p2.r);
		watch_button.data("rating_low", data.p1.r);
	}
	watch_button.data("experience_high", data.p1.e);
	watch_button.data("experience_low", data.p2.e);
	if (data.p2.e > data.p1.e) {
		watch_button.data("experience_high", data.p2.e);
		watch_button.data("experience_low", data.p1.e);
	}
	if (data.l) {
		watch_button.data("links", data.l);
	}
	if (data.w == false) { // don't change
		watch_button.data("watching", false);
		watch_button.css("opacity", 0.5);
	}
	if (data.tag) {
		title_txt.textContent = data.p1.u + " (" + data.p1.r + "/" + data.p1.e + ") & " + data.p3.u + " (" + data.p3.r + "/" + data.p3.e + ")";
	}
	else {
		title_txt.textContent = data.p1.u + " (" + data.p1.r + "/" + data.p1.e + ") | " + data.p2.u + " (" + data.p2.r + "/" + data.p2.e + ")";
	}
	if (data.tag) {
		var title2_txt = document.createElement("span");
		title2_txt.className = "title2_txt";
		title2_txt.textContent = data.p2.u + " (" + data.p2.r + "/" + data.p2.e + ") & " + data.p4.u + " (" + data.p4.r + "/" + data.p4.e + ")";
		watch_button[0].appendChild(title2_txt);
		watch_button.find('.tcg_title').hide();
		watch_button.find('.ocg_title').hide();
		watch_button.find('.note_txt').css("left", 0);
		if (data.p) {
			watch_button.find('.key').css("left", 3);
		}
	}
	if (data.p) {
		watch_button.find('.note_txt').css("left", parseInt(watch_button.find('.note_txt').css("left")) + 33);
		if (title2_txt) {
			title2_txt.css("left", parseInt(title2_txt.css("left")) + 33);
			title2_txt.css("width", parseInt(title2_txt.css("width")) - 33);
		}
	}
	if (data.l == false && data.f != "gu" && data.f != "su") {
		watch_button.data("links", false);
		
		var classic = document.createElement("div");
		classic.className = "classic";
		classic.textContent = "CLASSIC";
		watch_button[0].appendChild(classic);
		watch_button.find('.note_txt').css("width", (parseInt(watch_button.find('.note_txt').css("width")) - parseInt(classic.style.width)) - 5);
		if (title2_txt) {
			title2_txt.css("width", 169);
		}
	}
	watch_button.click(watchDuelE);
	return watch_button;
}*/

function WatchButton(data) {
	for (var i = 0; i < watch_buttons_arr.length; i++) {
		if (watch_buttons_arr[i].data("id") == data.id) {
			return watch_buttons_arr[i];
		}
	}
	var watch_button = new DuelButton(data);
	watch_button.addClass("watchbutton");
	
	var title_txt = $('<span class="title_txt"></span>');
	watch_button.append(title_txt);
	
	watch_button.data("id", data.id);
	watch_button.data("username", data.p1.u);
	if (data.p1.u > data.p2.u) {
		watch_button.data("username", data.p2.u);
	}
	watch_button.data("username1", data.p1.u);
	watch_button.data("username2", data.p2.u);
	if (data.tag) {
		var tag_duel = $('<div class="tag_duel">TAG DUEL</div>');
		watch_button.data("tag_duel", true);
		//watch_button.append(tag_duel);
		tag_duel.insertBefore(watch_button.find('.glow'));
		watch_button.data("username3", data.p3.u);
		watch_button.data("username4", data.p4.u);
		title_txt.css("width", 211);
	}
	else {
		watch_button.data("username3", "");
		watch_button.data("username4", "");
	}
	watch_button.data("password", !!data.p);
	watch_button.data("rating_high", data.p1.r);
	watch_button.data("rating_low", data.p2.r);
	if (data.p2.r > data.p1.r) {
		watch_button.data("rating_high", data.p2.r);
		watch_button.data("rating_low", data.p1.r);
	}
	watch_button.data("experience_high", data.p1.e);
	watch_button.data("experience_low", data.p2.e);
	if (data.p2.e > data.p1.e) {
		watch_button.data("experience_high", data.p2.e);
		watch_button.data("experience_low", data.p1.e);
	}
	if (data.l) {
		watch_button.data("links", data.l);
	}
	if (data.w == false) { // don't change
		watch_button.data("watching", false);
		watch_button.css("opacity", 0.5);
	}
	if (data.tag) {
		title_txt.text(data.p1.u + " (" + data.p1.r + "/" + data.p1.e + ") & " + data.p3.u + " (" + data.p3.r + "/" + data.p3.e + ")");
	}
	else {
		title_txt.text(data.p1.u + " (" + data.p1.r + "/" + data.p1.e + ") | " + data.p2.u + " (" + data.p2.r + "/" + data.p2.e + ")");
	}
	if (data.tag) {
		var title2_txt = $('<span class="title2_txt"></span>');
		title2_txt.text(data.p2.u + " (" + data.p2.r + "/" + data.p2.e + ") & " + data.p4.u + " (" + data.p4.r + "/" + data.p4.e + ")");
		watch_button.append(title2_txt);
		watch_button.find('.tcg_title').hide();
		watch_button.find('.ocg_title').hide();
		watch_button.find('.note_txt').css("left", 0);
		if (data.p) {
			watch_button.find('.key').css("left", 3);
		}
	}
	if (data.p) {
		watch_button.find('.note_txt').css("left", parseInt(watch_button.find('.note_txt').css("left")) + 33);
		if (title2_txt) {
			title2_txt.css("left", parseInt(title2_txt.css("left")) + 33);
			title2_txt.css("width", parseInt(title2_txt.css("width")) - 33);
		}
	}
	
	if (data.l == false && data.f != "gu" && data.f != "gr" && data.f != "su" && data.f != "sr" && data.f != "ru" && data.f != "rr") {
		watch_button.data("links", false);
		var classic = $('<div class="classic">CLASSIC</div>');
		watch_button.append(classic);
		watch_button.find('.note_txt').css("width", (parseInt(watch_button.find('.note_txt').css("width")) - parseInt(classic.css("width"))) - 5);
		if (title2_txt) {
			title2_txt.css("width", 169);
		}
	}
	watch_button.click(watchDuelE);
	watch_buttons_arr.push(watch_button);
	
	
	
	
	if (streaming) {
		if (isOffensive(watch_button.find('.title_txt').text())) {
			watch_button.find('.title_txt').text(censor(watch_button.find('.title_txt').text()));
		}
	}	
	
	
	
	if (data.f == "gr" || data.f == "sr") {
		watch_button.find('.note_txt').text("(Rated)");
		watch_button.find('.note_txt').css("color", "#555555");
	}
	
	
	
	return watch_button; // 508
}

function watchDuelE() {
	clickedDuel = $(this).data("id");
	if ($(this).data("password") && !admin) {
		getInput("Watch Password", "Enter the watch password to watch this duel:", "", 50, watchDuel, null, true);
		showDim();
	}
	else if ($(this).data("watching") == false) {
		getConfirmation("Watch Duel", "Watching was disallowed for this duel. Proceed?", watchDuel);
		showDim();
	}
	else {
		watchDuel();
	}
}

function watchDuel() {
	showDim();
	Send({"action":"Watch duel", "id":clickedDuel, "password":$('#input .input_txt').val()});
}

function watchDuelFromProfileE() {
	if ($('#' + currentLabel + ' .key').is(":visible") && !admin) {
		getInput("Watch Password", "Enter the watch password to watch this duel:", "", 50, watchDuel, null, true);
		showDim();
		return;
	}
	watchDuel();
}

function getGameType(str) {
	switch (str) {
		case "s":
			return "SINGLE<br>(w/ siding)";
		case "n":
			return "SINGLE<br>(no siding)";
		default:
			return "MATCH<br>(2 out of 3)";
	}
}

/*function Friend(data) {
	var friend = $('<div class="friend"></div>');
	var avatar = new Avatar(data);
	friend.append(avatar);
	
	var username_txt = $('<span class="username_txt bisque"></span>');
	username_txt.text(data.username);
	friend.append(username_txt);
	
	setText(username_txt);
	return friend;
}*/

function BrowseItem(data) {
	var item = $('<div class="browse_item selectable"></div>');
	var avatar = new Avatar(data);
	
	var username_txt = $('<span class="username_txt bisque"></span>');
	username_txt.text(data.username);
	
	var desc_txt = $('<div class="desc_txt"></div>');
	desc_txt.html('<font color="#FFFFCC">' + data.rating + "/" + data.experience + '</font><br>');
	if (data.orientation) {
		desc_txt.append(data.orientation + '<br>');
	}
	if (data.location) {
		desc_txt.append(data.location + '<br>');
	}
	if (data.distance) {
		desc_txt.append(data.distance + '<br>');
	}
	if (data.last_seen) {
		desc_txt.append("Last seen: " + data.last_seen );
	}
	item.append(avatar);
	item.append(username_txt);
	if (data.gender == "Male") {
		item.append($('<img class="male" src="' + IMAGES_START + 'svg/male.svg" />'));
		desc_txt.css("top", 63);
	}
	else if (data.gender == "Female") {
		item.append($('<img class="female" src="' + IMAGES_START + 'svg/female.svg" />'));
		desc_txt.css("top", 63);
	}
	item.append(desc_txt);
	return item;
}

function DuelRecord(data) {
	var record = $('<div class="duel_record selectable"></div>');
	record.data("id", data.id);
	record.data("user_id", userId);
	//record.data("master", $('#duel_records .username_txt').val() == "");
	record.data("username", data.username);
	var master = $('#duel_records .username_txt').val() == "";
	
	var avatar = new Avatar(data);
	
	var username_txt = $('<span class="username_txt bisque"></span>');
	username_txt.text(data.username);
	if (data.username2) {
		record.data("username2", data.username2);
		username_txt.append(" & " + escapeHTML(data.username2));
	}

	var rating_txt = $('<span class="rating_txt"></span>');
	rating_txt.text(data.opp_rating + "/" + data.opp_exp);

	var rules_txt = $('<span class="rules_txt bisque"></span>');
	if (data.rules != "*") {
		rules_txt.text(data.rules);
	}

	var result_txt = $('<span class="result_txt"></span>');
	if (data.winner_id == data.user_id || data.winner_id == userId && data.username != username) {
		result_txt.text("WIN");
		result_txt.css("color", "#009900");
	}
	else if (data.winner_id != 0) {
		result_txt.text("LOSE");
		result_txt.css("color", "#FF0000");
	}
	else if (data.draw == 1) {
		result_txt.text("DRAW");
		result_txt.css("color", "#FFFFFF");
	}
	if (admin >= 3 || moderator >= 2) {
		result_txt.css("cursor", "pointer");
		result_txt.click(removeLossE);
	}

	var points_txt = $('<span class="points_txt"></span>');
	points_txt.text(data.points);
	if (data.points > 0) {
		points_txt.prepend("+");
		points_txt.css("color", "#009900");
	}
	else if (data.points < 0) {
		points_txt.css("color", "#FF0000");
	}

	var new_rating_txt = $('<span class="new_rating_txt"></span>');
	new_rating_txt.text(data.new_rating + "/" + data.new_exp);

	var date_txt = $('<span class="date_txt"></span>');
	date_txt.text(data.date);

	record.append(avatar);
	record.append(username_txt);
	record.append(rating_txt);
	record.append(rules_txt);
	record.append(result_txt);
	record.append(points_txt);
	record.append(new_rating_txt);
	record.append(date_txt);
	
	if (data.id >= 521841) {
		var url = URL_START + "replay?id=" + data.id;
		if (master) {
			if (data.user_id) {
				url = URL_START + "replay?id=" + data.user_id + "-" + data.id;
			}
			else {
				url = URL_START + "replay?id=" + userId + "-" + data.id;
			}
		}
		if (data.game) {
			url += "&game=" + data.game;
		}
		else if (data.match) {
			url += "&match=" + data.match;
		}
		var replay_btn = $('<span class="replay_btn cyan"><a href="' + url + '" target="_blank">Replay</a></span>');
		record.append(replay_btn);
	}
	if (admin || moderator >= 2) {
		if (data.id >= 521841) {
			var url = URL_START + "log?id=" + data.id;
			if (master) {
				if (data.user_id) {
					url = URL_START + "log?id=" + data.user_id + "-" + data.id;
				}
				else {
					url = URL_START + "log?id=" + userId + "-" + data.id;
				}
			}
			var log_btn = $('<span class="log_btn cyan"><a href="' + url + '" target="_blank">Log</a></span>');
			record.append(log_btn);
		}
	}
	return record;
}

function Store(data) {
	var store = $('<div class="store selectable"></div>');
	store.data("id", data.id);
	
	var number_txt = $('<span class="number_txt"></span>');
	
	var name_txt = $('<span class="name_txt"></span>');
	name_txt.text(data.name);
	name_txt.click(function(){
		storeClickE($(this).parent());
	});

	var address_txt = $('<div class="address_txt"></div>');
	address_txt.text(data.address);
	if (data.city) {
		address_txt.append('<br>' + data.city);
		if (data.state) {
			address_txt.append(', ' + data.state);
			if (data.zip) {
				address_txt.append(' ' + data.zip);
			}
		}
	}
	if (data.country != data.city && data.country != data.state) {
		address_txt.append('<br>' + data.country);
	}
	if (data.phone) {
		store.data("phone", data.phone);
	}
	
	var distance_txt = $('<div class="distance_txt"></div>');

	var contact_txt = $('<div class="contact_txt"></div>');
	
	if (data.date) {
		contact_txt.html(data.date + '<br>');
		if (data.time) {
			contact_txt.append('Time: ' + data.time + '<br>');
		}
		if (data.rtime) {
			var rtime = data.rtime;
			if (data.rtime.indexOf("-") == 0 || data.rtime == "Today") {
				rtime = 'Today';
			}
			else if (data.rtime.indexOf("ago") < 0) {
				rtime += ' away';
			}
			
			if (rtime.indexOf("day") >= 0 && rtime.indexOf("ago") < 0) {
				rtime = '<font color="#FFFF00">' + rtime + '</font>';
			}
			contact_txt.append(rtime + '<br>');
		}
		if (data.email) {
			store.data("email", data.email);
		}
	}
	else if (data.email) {
		contact_txt.append(data.email.toLowerCase());
		/*if (contact_txt.width > 240) {
			var num = store.contact_txt.x;
			var dif = store.contact_txt.width - num;
			while (store.contact_txt.width > 240) {
				store.contact_txt.scaleX -= 0.01
			}
			store.contact_txt.x = 818 - store.contact_txt.width;
		}*/
	}
	else if (data.phone) {
		contact_txt.text("phone: " + data.phone);
		store.data("phone", null);
	}
	store.data("latitude", data.lat);
	store.data("longitude", data.lng);
	
	store.append(number_txt);
	store.append(name_txt);
	store.append(distance_txt);
	store.append(contact_txt);
	store.append(address_txt);
	return store;
}

function AdminAction(data) {
	var item = $('<div class="admin_action selectable"></div>');
	item.data("username", data.admin_username);
	
	data.username = data.admin_username;
	var avatar = new Avatar(data);
	
	var username_txt = $('<span class="username_txt"></span>');
	username_txt.text(data.admin_username);
	switch (data.admin) {
		case 1:
			username_txt.css("color", "#009900");
			break;
		case 2:
			username_txt.css("color", "#707070");
			break;
		case 3:
		case 4:
			username_txt.css("color", "#CC9900");
			break;
	}
	if (data.judge == 2) {
		username_txt.css("color", "#AA06B0");
	}
	
	var judge_username_txt = $('<span class="judge_username_txt bisque"></span>');
	if (data.judge_username) {
		judge_username_txt.text(data.judge_username);
		judge_username_txt.click(function(){
			loadProfile(data.judge_username);
		});
		judge_username_txt.css("cursor", "pointer");
	}
	if (data.moderator) {
		if (data.judge_username) {
			judge_username_txt.append('<br>');
		}
		if (data.moderator == 2) {
			judge_username_txt.append('<font color="#0077FF">Super Moderator</font>');
		}
		else {
			judge_username_txt.append('<font color="#66FFFF">Moderator</font>');
		}
	}

	var action_txt = $('<span class="action_txt bisque"></span>');
	action_txt.text(data.action);

	var details_txt = $('<span class="details_txt cyan"></span>');
	var details = escapeHTMLWithLinks(data.details);
	if (data.duel_id) {
		details += ' | <a href="' + URL_START + 'log?id=' + data.duel_id + '" target="_blank">Log</a> | <a href="' + URL_START + 'replay?id=' + data.duel_id + '" target="_blank">Replay</a>';
	}
	details_txt.html(details);
	
	var date_txt = $('<span class="date_txt"></span>');
	date_txt.text(data.date);

	item.append(avatar);
	item.append(username_txt);
	item.append(action_txt);
	item.append(date_txt);
	item.append(judge_username_txt);
	item.append(details_txt);
	return item;
}
		
function Donation(data) {
	var item = $('<div class="donation selectable"></div>');
	
	var email_txt = $('<span class="email_txt bisque"></span>');
	email_txt.text(data.email);
	
	var amount_txt = $('<span class="amount_txt"></span>');
	amount_txt.text("$" + data.amount);
	
	var id_txt = $('<span class="id_txt"></span>');
	id_txt.text(data.transaction_id);
	
	var status_txt = $('<span class="status_txt"></span>');
	status_txt.text(data.status);
	if (data.status != "Completed") {
		status_txt.css("color", "red");
	}
	
	var date_txt = $('<span class="date_txt"></span>');
	date_txt.text(data.date);
	
	var username_txt = $('<span class="username_txt bisque"></span>');
	if (data.username) {
		username_txt.text(data.username);
	}
	
	item.append(email_txt);
	item.append(amount_txt);
	item.append(id_txt);
	item.append(status_txt);
	item.append(date_txt);
	item.append(username_txt);
	return item;
}

function Testimonial(data) {
	var testimonial = $('<div class="testimonial"></div>');
	testimonial.data("id", data.id);
	testimonial.data("receiver_id", data.receiver_id);
	testimonial.data("username", data.username);
	
	if (data.reply_to) {
		testimonial.addClass("reply");
	}
	
	var avatar = new Avatar(data);
	
	var username_txt = $('<span class="username_txt bisque selectable"></span>');
	username_txt.text(data.username);
	
	var date_txt = $('<div class="date_txt arial_rounded18"></div>');
	date_txt.text(data.date);
	
	var like_btn = new FeedbackButton(data);
	
	var testimonial_txt = $('<div class="testimonial_txt arial_rounded18 selectable cyan"></div>');
	testimonial_txt.html(escapeHTMLWithLinks(data.comment));
	
	testimonial.append(avatar);
	testimonial.append(username_txt);
	testimonial.append(date_txt);
	testimonial.append(like_btn);
	testimonial.append(testimonial_txt);
	
	if (moderator || data.username == username) {
		var delete_btn = $('<div class="delete_btn arial_rounded25">Delete</div>');
		delete_btn.click(deleteCommentE2);
		delete_btn.insertAfter(username_txt);
	}
	
	if (moderator || currentProfile == username && data.username != username) {
		var reply_btn = $('<div class="reply_btn arial_rounded25">Reply</div>');
		reply_btn.click(replyToTestimonialE);
		reply_btn.insertBefore(date_txt);
	}
	
	return testimonial;
}

function FeedbackButton(data) {
	var feedback_btn = $('<div class="feedback_btn"></div>');
	var img;
	if (data.rating > 0) {
		img = $('<img src="' + IMAGES_START + 'svg/like_btn_up.svg" />');
	}
	else if (data.rating < 0) {
		img = $('<img src="' + IMAGES_START + 'svg/dislike_btn_up.svg" />');
		img.css("top", 4);
	}
	feedback_btn.append(img);
	return feedback_btn;
}

function Comment(data) {
	var comment = $('<div class="comment"></div>');
	comment.data("id", data.id);
	comment.data("receiver_id", data.receiver_id);
	comment.data("receiver_username", data.receiver_username);
	comment.data("username", data.username);
	
	var date_txt = $('<div class="date_txt arial_rounded18"></div>');
	date_txt.text(data.date);
	
	var avatar = new Avatar(data);
	
	var username_txt = $('<span class="username_txt bisque selectable"></span>');
	username_txt.text(data.username);
	
	var like_btn = new LikeButton(data);
	like_btn.data("type", "comment");
	like_btn.data("likeX", 126);
	addButton(like_btn);
	
	var likes = new Likes(data);
	likes.text("0");
	likes.data("likeX", 132);
	
	var comment_txt = $('<div class="comment_txt arial_rounded18 selectable cyan"></div>');
	if (data.reply_to_username) {
		comment_txt.html('<font color="#00CCFF" onclick="loadProfileByID(' + data.reply_to + ');" style="cursor: pointer;">@' + escapeHTML(data.reply_to_username) + ' </font>' + escapeHTMLWithLinks(data.comment));
	}
	else {
		comment_txt.html(escapeHTMLWithLinks(data.comment));
	}
	comment.append(date_txt);
	comment.append(avatar);
	comment.append(username_txt);
	comment.append(likes);
	comment.append(like_btn);
	comment.append(comment_txt);
	
	if (currentLabel == "comments" || currentLabel == "profile_viewer" && currentProfile == username || data.username == username || admin > 2 || moderator > 1) {
		var delete_btn = $('<div class="delete_btn arial_rounded25">Delete</div>');
		delete_btn.click(deleteCommentE2);
		delete_btn.insertAfter(username_txt);
	}
	if (currentLabel == "profile_viewer" && !$('#profile_viewer #all_comments').is(":visible")) {
		var reply_btn = $('<div class="reply_btn arial_rounded25">Reply</div>');
		reply_btn.click(replyToCommentE);
		reply_btn.insertBefore(likes);
	}
	return comment;
}

function LikeButton(data) {
	var like_btn = $('<div class="like_btn"></div>');
	like_btn.data("id", data.id);
	like_btn.click(function(e){
		if (like_btn.css("opacity") < 1) {
			unlikeComment(like_btn);
			like_btn.css("opacity", 1);
		}
		else {
			likeComment(like_btn);
			like_btn.css("opacity", 0.4);
		}
	});
	
	var img = $('<img class="img" src="' + IMAGES_START + 'svg/like_btn_up.svg" />');
	like_btn.append(img);
	return like_btn;
}

function Likes(data) {
	var likes = $('<div class="likes"></div>');
	likes.data("total", ~~data.likes);
	return likes;
}

function moveLeft(obj) {
	obj.css("left", obj.data("likeX") - 8.7);
}

function moveRight(obj) {
	obj.css("left", obj.data("likeX"));
}

function moveCenter(obj) {
	if (obj.hasClass("like_btn")) {
		moveRight(obj);
		return;
	}
	obj.css("left", obj.data("likeX") - 11.85);
}

function getStatus(id) {
	for (var i = 0; i < status_arr.length; i++) {
		if (status_arr[i].data("id") == id) {
			return status_arr[i];
		}
	}
	return null;
}

function likeComment(obj) {
	var comment_id = obj.data("id");
	if (obj.parent().data("usernames").indexOf(username) >= 0) {
		return;
	}
	var likes = obj.parent().find('.likes');
	likes.data("total", likes.data("total") + 1);
	likes.text(obj.parent().find('.likes').data("total"));
	likes.show();
	likes.css("pointer-events", "auto");
	obj.parent().data("usernames").push(username);
	moveLeft(obj);
	if (liked_comments.indexOf(comment_id) >= 0 && liked_comments.length > 5) {
		return;
	}
	liked_comments.push(comment_id);
	Send({"action":"Like " + obj.data("type"), "comment":comment_id, "id":comment_id, "username":obj.parent().data("username"), "receiver_id":obj.parent().data("receiver_id")});
}

function unlikeComment(obj) {
	var comment_id = obj.data("id");
	var likes = obj.parent().find('.likes');
	likes.data("total", likes.data("total") - 1);
	likes.text(obj.parent().find('.likes').data("total"));
	removeFromArray(obj.parent().data("usernames"), username);
	if (likes.data("total") == 0) {
		likes.text("");
		likes.css("pointer-events", "none");
		moveCenter(obj);
	}
	if (liked_comments.indexOf(comment_id) >= 0 && liked_comments.length > 5) {
		return;
	}
	Send({"action":"Unlike " + obj.data("type"), "id":comment_id, "comment":comment_id, "username":obj.parent().data("username"), "receiver_id":obj.parent().data("receiver_id")});
}

function manageLikes(p, data) {
	if (p == null) {
		return;
	}
	var like_btn = p.find('.like_btn');
	var likes = p.find('.likes');
	like_btn.show();
	likes.show();
	like_btn.data("id", data.id);
	likes.data("id", data.id);
	if (data.username == username || p.data("username") == username) {
		like_btn.css("opacity", 0.25);
		like_btn.css("pointer-events", "none");
		like_btn.hide();
		moveCenter(likes);
	}
	else {
		moveRight(likes);
	}
	if (data.usernames && data.usernames.length > 0) {
		likes.data("total", data.usernames.length);
		likes.text(data.usernames.length);
		likes.css("pointer-events", "auto");
		likes.css("cursor", "pointer");
		likes.show();
		moveLeft(like_btn);
		if (data.liked) {
			like_btn.css("opacity", 0.5);
		}
	}
	else {
		likes.text("");
		likes.hide();
		moveCenter(like_btn);
	}
	p.data("usernames", array(data.usernames));
	likes.click(showLikes);
	if (statuses_data) {
		for (var i = 0; i < statuses_data.length; i++) {
			if (statuses_data[i].id == p.data("id")) {
				statuses_data[i].usernames = array(data.usernames);
				break;
			}
		}
	}
}

function cautionE() {
	//Send({"action":"Caution"});
	websocket.send(JSON.stringify({"action":"Caution"}));
	resend();
}

function FriendRequest(data) {
	var request = $('<div class="friend_request"></div>');
	var date_txt = $('<div class="date_txt bisque arial_rounded18"></div>');
	date_txt.text(data.date);
	
	var avatar = new Avatar(data);
	var username_txt = $('<span class="username_txt bisque selectable"></span>');
	username_txt.text(data.username);
	
	var accept_btn = $('<div class="accept_btn arial_rounded25">Accept</div>');
	accept_btn.click(function(){
		acceptFriend(data.username);
	});
	
	var revoke_btn = $('<div class="revoke_btn arial_rounded25">Revoke Request</div>');
	revoke_btn.click(function(){
		revokeFriend(data.username);
	});
	
	var deny_btn = $('<div class="deny_btn arial_rounded25">Deny</div>');
	deny_btn.click(function(){
		rejectFriend(data.username);
	});
	
	var message_btn = $('<div class="message_btn arial_rounded25">Message</div>');
	message_btn.click(function(){
		openPrivateE(data.username);
	});
	
	/*function friendE() {
		request.css("opacity", 0.5);
		accept_btn.hide();
		revoke_btn.hide();
		deny_btn.hide();
		message_btn.hide();
		if ($('#friend_requests .content').children('[style*="opacity: 1"]').length == 0) {
			$('#friend_requests .accept_all_btn').hide();
		}
	}*/
	
	request.append(date_txt);
	request.append(avatar);
	request.append(username_txt);
	request.append(accept_btn);
	request.append(revoke_btn);
	request.append(deny_btn);
	request.append(message_btn);
	return request;
}

function removeFriendRequest(str) {
	$('.friend_request').filter(function(){
		return $(this).find('.username_txt').text() === str;
	}).each(function(){
		$(this).css("opacity", 0.5);
		$(this).find('.accept_btn').hide();
		$(this).find('.revoke_btn').hide();
		$(this).find('.deny_btn').hide();
		$(this).find('.message_btn').hide();
		if ($('#friend_requests .content').children('[style*="opacity: 1"]').length == 0) {
			$('#friend_requests .accept_all_btn').hide();
		}
	});
}

function loadNews() {
	news_loaded = true;
	var url = "https://static.duelingbook.com/news.txt";
	if (cards_fingerprint) {
		url += "?version=" + cards_fingerprint;
	}
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			$('#bulletin_txt').html(xhr.responseText.replace(/\n/g, '<br>'));
			if (degenerate) {
				$('#bulletin_txt').prepend('<font color="#FF0000" style="font-size: 14px;">Notice: You are currently using the site in degenerate mode, meaning you will see status updates that are deemed too degenerate for all users to see. To view the site in normal mode, use this link: ' + escapeHTMLWithLinks('https://www.duelingbook.com/') + '</font><br><br>');
			}
			/*if (blackFridayTimer.active) {
				var bf = $('<font id="black_friday"><b><font color="#FF7700">Black Friday Special:</font></b> All donations purchased today will give you twice as many days of benefits! <b><font id="black_friday_time" color="#FF0000"></font></b><br><br></font>');
				$('#bulletin_txt').prepend(bf);
			}*/
		}
	}
	xhr.send();	
}

function getShared() {
	if (!localStorage.getItem("sound")) {
		localStorage.setItem("sound", "on");
	}
	if (!localStorage.getItem("regular")) {
		localStorage.setItem("regular", "");
	}
	if (!localStorage.getItem("hostname")) {
		localStorage.setItem("hostname", "");
	}
	if (!localStorage.getItem("city")) {
		localStorage.setItem("city", "");
	}
	if (!localStorage.getItem("region")) {
		localStorage.setItem("region", "");
	}
	if (!localStorage.getItem("zip_code")) {
		localStorage.setItem("zip_code", "");
	}
	if (!localStorage.getItem("country_code")) {
		localStorage.setItem("country_code", "");
	}
	if (!localStorage.getItem("latitude")) {
		localStorage.setItem("latitude", "");
	}
	if (!localStorage.getItem("longitude")) {
		localStorage.setItem("longitude", "");
	}
	if (!localStorage.getItem("skill")) {
		localStorage.setItem("skill", "");
	}
	if (!localStorage.getItem("rules")) {
		localStorage.setItem("rules", "false");
	}
	regular = localStorage.getItem("regular") == "true";
	hostname = localStorage.getItem("hostname");
	city = localStorage.getItem("city");
	region = localStorage.getItem("region");
	zip_code = localStorage.getItem("zip_code");
	country_code = localStorage.getItem("country_code");
	latitude = localStorage.getItem("latitude");
	longitude = localStorage.getItem("longitude");
	skill = localStorage.getItem("skill");
	//read_new_rules = localStorage.getItem("rules") == "true";
	db_id = getDbId();
}

/*function checkLoggedInResponse(resp) {
	//console.log(resp);
	var data = JSON.parse(resp);
	checked_logged_in = true;
	if (data.regular) {
		regular = !!data.regular;
	}
	if (data.db_id) {
		db_id = str(data.db_id);
		localStorage.setItem("db_id", db_id);
	}
	if (data.action == "Not logged in") {
		administrate = false;
		return;
	}
	else if (data.action == "Logged in") {
		if (logged_in) {
			return;
		}
		if (data.username && data.password) {
			username = data.username;
			user_username = data.username;
			password = data.password;
			logged_in = true;
			administrate = !!data.admin;
			regular = true;
			if (data.admin) {
				show_admin_arrow = true;
			}
			else {
				show_admin_arrow = false;
			}
		}
		showLoggedIn();
	}
	else if (data.action == "Banned") {
		logged_in = false;
		show_admin_arrow = false;
		banned = true;
		errorE(data.message);
		$('#login').detach();
		$('#register').detach();
		$('#logged_in').detach();
		$('#forgot_password').detach();
	}
	else if (currentLabel == "all_loaded") {
		showLogin();
	}
}*/

function checkLoggedInResponse(resp) {
	//console.log(resp);
	var data = JSON.parse(resp);
	checked_logged_in = true;
	if (data.regular) {
		regular = !!data.regular;
	}
	if (data.db_id) {
		db_id = str(data.db_id);
		localStorage.setItem("db_id", db_id);
	}
	//logins = array(data.logins);
	array(data.logins).forEach(function(e,i){
		addLogin(e);
	});
	switch(data.action) {
		case "Not logged in":
			administrate = false;
			break;
		case "Logged in":
			if (logged_in) {
				return;
			}
			if (data.username && data.password) {
				/*username = data.username;
				user_username = data.username;
				password = data.password;
				logged_in = true;
				administrate = !!data.admin;
				regular = true;
				if (data.admin) {
					show_admin_arrow = true;
				}
				else {
					show_admin_arrow = false;
				}*/
				
				addLogin(data);
				var lastUsername = str(window.localStorage.getItem("lastUsername"));
				for (var i = 0; i < logins.length; i++) {
					if (logins[i].username == lastUsername && data.username != lastUsername) {
						data = logins[i];
						data.admin = logins[i].administrate;
						break;
					}
				}
				username = data.username;
				user_username = data.username;
				password = data.password;
				logged_in = true;
				administrate = !!data.admin;
				regular = true;
				if (administrate) {
					show_admin_arrow = true;
				}
				else {
					show_admin_arrow = false;
				}
			}
			showLoggedIn();
			break;
		case "Banned":
			logged_in = false;
			show_admin_arrow = false;
			banned = true;
			errorE(data.message);
			$('#login').detach();
			$('#register').detach();
			$('#logged_in').detach();
			$('#forgot_password').detach();
			break;
		default:
			if (currentLabel == "all_loaded") {
				showLogin();
			}
			break;
	}
	if (regular && !$('.privacy_policy').is(":visible")) {
		$('.privacy_policy').detach();
	}
}

function showLogin(e) {
	$('#login').show();
	$('#register').hide();
	$('#forgot_password').hide();
	$('#logged_in').hide();
	$('#login .username_txt').focus();
	$('#login .username_txt').select();
	if (!banned && checked_logged_in && !logged_in && e !== false && logins.length > 0) {
		switchAccountE();
	}
}

function showRegister() {
	$('#login').hide();
	$('#register').show();
	$('#forgot_password').hide();
	$('#logged_in').hide();
	$('#register .username_txt').focus();
	$('#register .username_txt').select();
}

function showForgotPassword() {
	$('#login').hide();
	$('#register').hide();
	$('#forgot_password').show();
	$('#logged_in').hide();
	$('#forgot_password .email_txt').focus();
	$('#forgot_password .email_txt').select();
}

function showLoggedIn() {
	if (!username || !password) {
		showLogin();
		return;
	}
	TweenMax.set($('#logged_in .username_txt'), {width:222, scale:1});
	$('#login').hide();
	$('#register').hide();
	$('#forgot_password').hide();
	$('#logged_in').show();
	username = user_username;
	$('#logged_in .username_txt').text(username);
	if (show_admin_arrow) {
		$('#admin_admin_btn').show();
		$('#admin_duel_btn').show();
	}
	else {
		$('#duel_btn').show();
	}
	setText($('#logged_in .username_txt'));
}

function performRegisterE() {
	if ($('#register .username_txt').val() == "") {
		errorE("Username not specified");
		return;
	}
	if ($('#register .password_txt').val() == "") {
		errorE("Password not specified");
		return;
	}
	if ($('#register .email_txt').val() == "") {
		errorE("E-mail not specified");
		return;
	}
	if ($('#register .email_txt').val().indexOf("@") < 0) {
		errorE("Invalid E-mail");
		return;
	}
	performRegister();
}

function performRegister(token) {
	var fd = new FormData();
	fd.append("username", $('#register .username_txt').val());
	fd.append("password", $('#register .password_txt').val());
	fd.append("email", $('#register .email_txt').val());
	fd.append("db_id", db_id);
	fd.append("browser", getBrowser());
	if (token) {
		fd.append("token", token);
	}
		
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/insert-user.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			performRegisterResponse(xhr.responseText);
		}
	}
	xhr.onerror = ioError;
	xhr.send(fd);
	showDim();
}

function performRegisterResponse(str) {
	console.log(str);
	hideDim();
	var data = parse(str);
	switch(data.action) {
		case "Registered":
			messageE(data.message);
			$('#register .username_txt').val("");
			$('#register .password_txt').val("");
			$('#register .email_txt').val("");
			showLogin(false);
			confirmation_sent = true;
			return;
		case "Recaptcha":
			$('#recaptcha_bg').show();
			grecaptchaTimer.start();
			grecaptcha.reset();
			//$('.grecaptcha-badge:last').css("visibility", "hidden");
			//grecaptcha.render($('#recaptcha_bg .recaptcha')[0], {"sitekey":"6LdgBP8fAAAAAE7oh2Qc-MqjzJhS0qUwBSE0o8NJ", "callback":"recaptchaCallback"});
			return;
		case "Error":
			errorE(data.message);
			return;
	}
	errorE("Unknown Error");
}

function recaptchaCallback(token) {
	performRegister(token);
	hideRecaptcha();
}

function hideRecaptcha() {
    $('#recaptcha_bg').hide();
    grecaptcha.reset();
}

function performResetPassword() {
	var phone = $('#forgot_password .email_txt').val();
	phone = phone.replace(/\(/g, '');
	phone = phone.replace(/\)/g, '');
	phone = phone.replace(/-/g, '');
	phone = phone.replace(/ /g, '');
	phone = phone.replace(/\./g, '');
	if ($('#forgot_password .email_txt').val() == "") {
		errorE("Email not specified");
		return;
	}
	if ($('#forgot_password .email_txt').val().indexOf("@") < 0 && phone != (~~phone).toString()) {
		errorE("Invalid E-mail");
		return;
	}
	if ($('#forgot_password .email_txt').val().indexOf("@") < 0 && phone.indexOf("0") == 0) {
		errorE("Phone verification is only available to USA and Canada");
		return;
	}
	if (phone == (~~phone).toString() && phone.length != 10) {
		errorE("Phone must be 10 digits and a USA/Canada number");
		return;
	}
	var fd = new FormData();
	fd.append("email", $('#forgot_password .email_txt').val());
	fd.append("confirmation_id", confirmation_id);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/reset-password.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resetPasswordComplete(xhr.responseText);
		}
	}
	xhr.send(fd);
	showDim();
}

function resetPasswordComplete(str) {
	console.log(str);
	hideDim();
	confirmation_id = null;
	var data = JSON.parse(str);
	if (data.action == "Reset password sent") {
		messageE(data.message);
		$('#forgot_password .email_txt').val("");
		showLogin(false);
		return;
	}
	if (data.action == "Phone error") {
		userId = ~~data.user_id;
		confirmation_id = data.confirmation_id;
		getConfirmation("Error", "We were unable to send a message to your phone. Try resetting with an email instead?", function(){
			getInput("Reset Password", "Enter the email you would like to use", data.email, 50, function(){
				$('#forgot_password .email_txt').val($('#input .input_txt').val());
				performResetPassword();
			});
		});
		return;
	}
	else if (data.action == "Error") {
		errorE(data.message);
		return;
	}
	errorE("Unknown Error");
}

function performLogin() {
	if (logging_in) {
		return;
	}
	if ($('#login .username_txt').val() == "") {
		errorE("Username not specified");
		return;
	}
	if ($('#login .password_txt').val() == "") {
		errorE("Password not specified");
		return;
	}
	logging_in = true;
	var fd = new FormData();
	fd.append("username", $('#login .username_txt').val());
	fd.append("password", $('#login .password_txt').val());
	fd.append("remember_me", ~~$('#login .remember_cb').is(":checked"));
	fd.append("db_id", db_id);
	fd.append("session", session_id);
	fd.append("browser", getBrowser());
	/*fd.append("regular", regular);
	//fd.append("capabilities", Capabilities.version);
	fd.append("date", new Date());
	fd.append("hostname", hostname);
	fd.append("city", city);
	fd.append("region", region);
	fd.append("zip_code", zip_code);
	fd.append("country_code", country_code);
	fd.append("latitude", latitude);
	fd.append("longitude", longitude);
	fd.append("fingerprint", canvas_fingerprint);*/
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/login-user.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			performLoginResponse(xhr.responseText);
		}
	}
	xhr.onerror = ioError;
	xhr.send(fd);
	showDim();
}

function addLogin(data) {
	var login = {"username":data.username, "password":data.password, "administrate":!!data.admin};
	for (var i = 0; i < logins.length; i++) {
		if (logins[i].username == login.username) {
			return;
		}
	}
	logins.push(login);
	window.localStorage.setItem("logins", JSON.stringify(logins));
}

function performLoginResponse(str) {
	//console.log(str);
	hideDim();
	logging_in = false;
	var data = JSON.parse(str);
	if (data.action == "Logged in") {
		userId = ~~data.user_id;
		username = data.username;
		user_username = data.username;
		password = data.password;
		logged_in = true;
		regular = true;
		administrate = !!data.admin;
		show_admin_arrow = false;
		if (data.admin) {
			show_admin_arrow = true;
		}
		firstLogin = !!data.firstLogin;
		//logins = array(data.logins);
		addLogin(data);
		if (data.message) {
			messageE(data.message);
		}
		showLoggedIn();
		status_arr = []; // just helps with making sure its contents are correct
		status_cb_index = 0;
		return;
	}
	if (data.action == "Not confirmed") {
		reconfirm_email = data.email;
		//getConfirmation("E-mail Confirmation", data.message, performReconfirmA);
		//getInput("E-mail Confirmation", data.message, "", 50, performReconfirm, null, null, null, true);
		getInput("E-mail Confirmation", data.message, reconfirm_email, 50, performReconfirm, null, null, null, true);
		return;
	}
	if (data.action == "Not confirmed 2") {
		reconfirm_email = data.email;
		getConfirmation("Account Confirmation", data.message, performReconfirmB);
		return;
	}
	if (data.action == "Error") {
		errorE(data.message);
		return;
	}
	if (data.action == "Message") {
		messageE(data.message);
		return;
	}
	errorE("Unknown Error");
}

function performReconfirmA() {
	if (confirmation_sent) {
		errorE("Please try again later");
		return;
	}
	getInput("E-mail Confirmation", "Enter the email you would like to use", "", 50, performReconfirm);
}

function performReconfirmB() {
	var options = ["phone", "email"];
	getComboBox("Account Confirmation", "Select the method you would like to receive your confirmation code", options, 0, performReconfirmC);
}

function performReconfirmC() {
	if ($('#combo .combo_cb').val() == "phone") {
		getInput("Phone Verification", "Enter the number to send to:", reconfirm_email, 10, performReconfirm, /[^0-9]/g);
		return;
	}
	performReconfirmA();
}

function performReconfirm() {
	reconfirm_email = null;
	var fd = new FormData();
	if (currentLabel == "confirm_email") {
		fd.append("username", username);
		fd.append("password", password);
		fd.append("email", $('#confirm_email .confirm_email .email_txt').val());
		fd.append("action", "Confirm email 2");
	}
	else {
		fd.append("username", $('#login .username_txt').val());
		fd.append("password", $('#login .password_txt').val());
		fd.append("email", $('#input .input_txt').val());
		fd.append("action", "Confirm email");
	}
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/reconfirm.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			reconfirmComplete(xhr.responseText);
		}
	}
	xhr.send(fd);
	showDim();
}

function reconfirmComplete(str) {
	console.log(str);
	hideDim();
	var data = JSON.parse(str);
	if (data.action == "Reconfirm sent") {
		messageE(data.message);
		confirmation_sent = true;
		return;
	}
	if (data.action == "Error") {
		errorE(data.message);
		return;
	}
	errorE("Unknown Error");
}

function performLogout(e) {
	$('#login .username_txt').val("");
	$('#login .password_txt').val("");
	$('#duel_btn').hide();
	$('#admin_duel_btn').hide();
	$('#admin_admin_btn').hide();
	$('#screenshot_btn').hide();
	show_admin_arrow = false;
	return_to_deck = false;
	TweenMax.set($('#logged_in .username_txt'), {width:222, scaleX:1});
	already_sent_friend_requests_arr = [];
	showLogin(false);
	loggedOut(e !== false);
}

function loggedOut(b) {
	if (b) {
		var fd = new FormData();
		fd.append("username", username);
		fd.append("password", password);
		fd.append("db_id", db_id);
		fd.append("session", session_id);
		
		var xhr = new XMLHttpRequest();
		xhr.open("POST", URL_START + "logged-out.php", true);
		xhr.send(fd);
		
		for (var i = 0; i < logins.length; i++) {
			if (logins[i].username == username) {
				logins.splice(i, 1);
				break;
			}
		}
		window.localStorage.setItem("logins", JSON.stringify(logins));
	}
	
	username = null;
	user_username = null;
	password = null;
	administrate = false;
	regular = false;
	logged_in = false;
}

function donateE() {
	window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FKD9M4W8VBRXA");
}

function isFollowing(str) {
	if (following_arr.indexOf(str) >= 0) {
		return true;
	}
	return false;
}

function sortOnlineUsers() {
	online_users_data.sort(function(a,b){
		if (~~a.following > ~~b.following) {
			return -1;
		}
		if (~~a.following < ~~b.following) {
			return 1;
		}
		if (~~a.donator > ~~b.donator) {
			return -1;
		}
		if (~~a.donator < ~~b.donator) {
			return 1;
		}
		if (~~!!a.admin > ~~!!b.admin) {
			return -1;
		}
		if (~~!!a.admin < ~~!!b.admin) {
			return 1;
		}
		if (!!a.firstLogin < !!b.firstLogin) {
			return -1;
		}
		if (!!a.firstLogin > !!b.firstLogin) {
			return 1;
		}
		if (a.u.toLowerCase() < b.u.toLowerCase()) {
			return -1;
		}
		if (a.u.toLowerCase() > b.u.toLowerCase()) {
			return 1;
		}
		return 0;
	});
}

function loadOnlineUsers(data) {
	online_users_data = data.users;
	for (var i = 0; i < online_users_data.length; i++) {
		if (isFollowing(online_users_data[i].u) && !online_users_data[i].admin) {
			online_users_data[i].following = 1;
		}
	}
	sortOnlineUsers();
	var frag = "";
	for (var i = 0; i < online_users_data.length; i++) {
		frag += onlineUser(online_users_data[i], true); // 31ms for 880 users
	}
	$('#online_users .users').html(frag);
	$('#online_users .total_txt').text('Users online: ' + $('#online_users .cell').length);
}

function saveOnlineVSP() {
	online_vsp = $('#online_users .users').scrollTop();
}

function restoreOnlineVSP() {
	$('#online_users .users').scrollTop(online_vsp);
}

function sortCells(list) {
	list.sortElements(function(a, b){
		if (a.textContent.toLowerCase() < b.textContent.toLowerCase()) {
			return -1;
		}
		if (a.textContent.toLowerCase() > b.textContent.toLowerCase()) {
			return 1;
		}
		return 0;
	});
}


// fragment
function filterOnlineUsers(e) {
	if ($('#online_users .search_txt').val() != "") {
		var u = $('#online_users input').val();
		var users = $('#online_users .users').clone(true);
		
		
		/*users.addClass("blahhh");
		
		
		console.log($('.blahhh'));
		console.log($('> .users:nth-child(1):first'));
		
		
		users.css("display", "none");
		users.css("background", "red");
		users.css("text-decoration", "underline");

		//users.children().css("display", "none");
		users.children().css("background", "red");
		users.children().css("text-decoration", "underline");
		users.children().css("font-weight", "bold");
		*/
		
		
		users.find('.cell').each(function(i,e){
			if (e.textContent.toLowerCase().indexOf(u.toLowerCase()) < 0) {
				e.style.display = "none";
			}
			//else {
			else if (e.style.display == "none") {
				e.style.display = "block";
			}
		});
		console.log(users);
		console.log(cssPath(users[0]));
		
		var fragment = $(document.createDocumentFragment());
		fragment.append(users);
		
		console.log(cssPath(users[0]));
		
		console.log(users[0].innerHTML.length);
		//$('#online_users .users').replaceWith(users);
		$('#online_users .users')[0].innerHTML = users[0].innerHTML;
	}
	else if (e) {
		$('#online_users .users').find(":hidden").each(function(i,e){
			e.style.display = "block";
		});
	}
}

// nothing
function filterOnlineUsers(e) {
	if ($('#online_users .search_txt').val() != "") {
		$('#online_users').addClass("blahhh");
	}
	else if (e) {
		$('#online_users').removeClass("blahhh");
	}
}

//username attribute
function filterOnlineUsers(e) {
	$('#online_users_style').detach();
	if ($('#online_users .search_txt').val() != "") {
		var u = $('#online_users input').val();
		var online_users_style = $('<style id="online_users_style">.cell:not([username*="' + escapeHTML(u) + '" i]) { display: none; }</style>');
		$('head').append(online_users_style);
	}
}

// original
function filterOnlineUsers(e) {
	if ($('#online_users .search_txt').val() != "") {
		var u = $('#online_users input').val();
		$('#online_users .cell').each(function(i,e){
			if (e.textContent.toLowerCase().indexOf(u.toLowerCase()) < 0) {
				e.style.display = "none";
			}
			else if (e.style.display == "none") {
				e.style.display = "block";
			}
		});
	}
	else if (e) {
		$('#online_users .users').find(":hidden").each(function(i,e){
			e.style.display = "block";
		});
	}
}

//class
function filterOnlineUsers(e) {
	if ($('#online_users .search_txt').val() != "") {
		var u = $('#online_users input').val();
		$('#online_users .cell').each(function(i,e){
			if (e.textContent.toLowerCase().indexOf(u.toLowerCase()) < 0) {
				e.classList.add("hidden");
			}
			else if (e.classList.contains("hidden")) {
				e.classList.remove("hidden");
			}
		});
	}
	else if (e) {
		$('#online_users .users').find(":hidden").each(function(i,e){
			e.classList.remove("hidden");
		});
	}
}

function isOnline(str) {
	var online = true;
	online_users.find('.cell').each(function(i,e){
		if (e.textContent == str) {
			return online = false;
		}
	});
	return !online;
}

function onlineUser(data, b) {
	if (data.u) {
		data.username = data.u;
	}
	if (!b && isOnline(data.username)) {
		return;
	}
	var cell = new Cell(data.username);
		//cell.setAttribute("username", escapeHTML(data.username).toLowerCase());
	var online = document.createElement("div");
	if (data.away) {
		online.className = "online away";
	}
	else {
		online.className = "online";
	}
	cell.appendChild(online);
	if (data.admin > 0) {
		addClass(cell, "isAdmin");
		addClass(cell, "admin" + data.admin);
	}
	//if (isFollowing(data.username) && !data.admin) {
	if ((isFollowing(data.username) || data.following) && !data.admin) {
		data.following = 1;
		addClass(cell, "following");
	}
	if (data.donator) {
		addClass(cell, "donator");
		$(cell).find('span').html(colorize(data.username));
	}
	
	if (data.firstLogin && moderator) {
		//$(cell).find('span').append('<font color="#FF0000">*</font>');
		addClass(cell, "firstLogin");
	}
	
	if (b) {
		return cell.outerHTML;
	}
	data.u = data.username;
	online_users_data.push(data);
	sortOnlineUsers();
	insertAt(online_users_data.indexOf(data), cell, $('#online_users .users'));
	$('#online_users .total_txt').text('Users online: ' + $('#online_users .cell').length);
	filterOnlineUsers();
	privateOnlineE(data);
}

function awayE(data) {
	var arr = online_users.find('.cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i)[0].textContent == data.username) {
			arr.eq(i).find('.online').addClass("away");
			break;
		}
	}
}

function backE(data) {
	var arr = online_users.find('.cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i)[0].textContent == data.username) {
			arr.eq(i).find('.online').removeClass("away");
			break;
		}
	}
}

function offlineUser(data) {
	var arr = online_users.find('.cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i)[0].textContent == data.username) {
			arr.eq(i).remove();
			break;
		}
	}
	$('#online_users .total_txt').text('Users online: ' + $('#online_users .cell').length);
	privateOfflineE(data);
	for (i = 0; i < online_users_data.length; i++) {
		if (online_users_data[i].username == data.username) {
			online_users_data.splice(i, 1);
			break;
		}
	}
}
		
function colorize(str) {
	//var arr = [16711680, 16737792, 16750848, 39168, 255, 10027263];
	var arr = ["FF0000", "FF6600", "FF9900", "009900", "0000FF", "9900FF"];
	var index = 0;
	var new_str = "";
	for (var i = 0; i < str.length; i++) {
		new_str += '<font color="#' + arr[index] + '">' + escapeHTML(str[i]) + '</font>';
		//new_str += '<span style="color: #' + arr[index] + '; position: relative; margin: 0px; padding: 0px; line-height: 11px;">' + escapeHTML(str[i]) + '</span>';
		index++;
		if (index >= arr.length) {
			index = 0;
		}
	}
	return new_str;
}

function toggleOnline() {
	if ($('#online_users').is(':visible')) {
		saveOnlineVSP();
		$('#online_users').hide();
	}
	else {
		determineChatX($('#online_users'));
		$('#online_users').show();
		$('#chats').append($('#online_users'));
		restoreOnlineVSP();
		online_users.find('.search_txt').focus();
		online_users.find('.search_txt').select();
		active_scrollpane = online_users.find('.scrollpane');
	}
}

function toggleCalls() {
	if ($('#calls').is(':visible')) {
		$('#calls').hide();
	}
	else {
		determineChatX($('#calls'));
		$('#calls').show();
		$('#chats').append($('#calls'));
		if ($('#calls .log').is(':visible')) {
			$('#calls .search_txt').focus();
			$('#calls .search_txt').select();
			active_scrollpane = $('#calls .log_txt');
		}
		else if ($('#calls .tools').is(':visible')) {
			$('#calls .tools .username_txt').focus();
			$('#calls .tools .username_txt').select();
		}
	}
}

function togglePublic() {
	determineChatX($('#public_chat'));
	if ($('#public_chat').is(':visible')) {
		$('#public_chat').hide();
	}
	else {
		$('#public_chat').show();
		$('#chats').append($('#public_chat'));
		restorePublicVSP();
		$('#public_chat .cin_txt').focus();
		$('#public_chat .cin_txt').select();
		setupInput($('#public_chat .cin_txt'));
		active_scrollpane = $('#public_chat .cout_txt');
	}
}

function togglePrivate(e) {
	determineChatX($('#private_chat'));
	if (e && private_chat.find('.cell').length == 0) {
		displayBox("Private Chat", "To send a private message to a user, visit their profile and click Message");
		return;
	}
	if ($('#private_chat').is(':visible')) {
		$('#private_chat').hide();
	}
	else {
		$('#private_chat').show();
		$('#chats').append($('#private_chat'));
		restorePrivateVSP();
		if (private_chat.find('.cell.selected').length == 0) {
			private_chat.find('.cell').eq(0).addClass("selected");
		}
		private_chat.find('.cell.selected').trigger("click");
	}
}

function updateRebootSeconds() {
	rebootSeconds--;
	if (rebootSeconds == 0) {
		rebootTimer.reset();
		Close();
		goto('closed');
	}
	$('.announcement .title_txt').text("Server Reboot");
	$('.announcement .body_txt').text("The server will restart in " + rebootSeconds + " seconds");
}

function gotoCustomCards(e) {
	upload_card.find('.privacy_cb option:contains("Official Card")').remove();
	edit_card.find('.privacy_cb option:contains("Official Card")').remove();
	$('#custom_cards .id_txt').hide();
	if (uploader >= 2 || moderator) {
		upload_card.find('.privacy_cb').append('<option value="0">Official Card</option>');
		edit_card.find('.privacy_cb').append('<option value="0">Official Card</option>');
		$('#custom_cards .id_txt').show();
	}
	$('#search').insertAfter($('#edit_card'));
	goto('custom_cards');
	
	resetCustomCards();
	$('.uploader:visible .name_txt, #search:visible .name_txt').focus();
}

function resetCustomCards() {
	resetSearch();
	searchOptionsPrev();
	
	
	
	edit_card.data("id", 0); // 11/09/19
	clearCard();
	
	
	
	showUploader(true);
	toggleLink();
	
	cardChangeE();
	
	searched = false;
	my_card.find('.passcode_txt').text(username);
		//setupBuildACard();
		//stEnable3();
		//upload_mc.type_cb.enabled = false;
		//searchOptionsPrev();
		//hideArrows(search_mc);
		//showArrows(search_mc);
	$('#search .custom_cb').selectedIndex(1);
	$('#search .custom_cb').disable(uploader < 2 && moderator < 2);
	preview.hide();
	$('#custom_cards .cards').append(preview);	
	$('#custom_cards .card_tcg_cb').checked(false);
	$('#custom_cards .is_effect_cb').checked(false);
	$('#custom_cards .card_ocg_cb').checked(false);
	$('#upload_card .pendulum_cb').checked(false);
	$('#edit_card .pendulum_cb').checked(false);
	preview_txt.insertAfter(preview);
	preview_txt.hide();
	
	//preview_txt.hide();
		//$('.search_card').hide();
	
	
	if (moderator) {
		//$('#upload_card .rush_lbl, #edit_card .rush_lbl').show();
		//$('#upload_card .rush_cb, #edit_card .rush_cb').show();
		$('#upload_card .legend_lbl, #edit_card .legend_lbl').show();
		$('#upload_card .legend_cb, #edit_card .legend_cb').show();
	}
	else {
		//$('#upload_card .rush_lbl, #edit_card .rush_lbl').hide();
		//$('#upload_card .rush_cb, #edit_card .rush_cb').hide();
		$('#upload_card .legend_lbl, #edit_card .legend_lbl').hide();
		$('#upload_card .legend_cb, #edit_card .legend_cb').hide();
	}
}

function showUploader(e) {
	$('#upload_card').show();
	$('#upload_card').data("username", username);
	$('#edit_card').hide();
	$('#search').hide();
	removeSearchCards();
	$('#upload_card_btn').disable(true);
	$('#edit_card_btn').disable(true);
	if (~~$('#edit_card').data("id") != 0) {
		$('#edit_card_btn').disable(false);
	}
	$('#my_cards_btn').disable(false);
	$('#custom_cards .clear_btn').show();
	$('#custom_cards .delete_btn').hide();
	$('#custom_cards .prev_btn, #custom_cards .next_btn').hide();
	if (e) {
		my_card.removeImage();
		updateCard();
		/*if (upload_mc.mc != null) {
			if (upload_mc.mc.percentLoaded == 100) {
				build_a_card.image = new Bitmap(Bitmap(upload_mc.mc.content).bitmapData,"auto",true);
				build_a_card.setImage();
				return;
			}
			build_a_card.loadImage();
		}
		else {
			build_a_card.image = null;
		}*/
	}
	
	updatePrivacyE();
	$('#upload_card .name_txt').focus();
}

function showEditor(e) {
	$('#upload_card').hide();
	$('#edit_card').show();
	$('#search').hide();
	removeSearchCards();
	$('#upload_card_btn').disable(false);
	$('#edit_card_btn').disable(true);
	$('#my_cards_btn').disable(false);
	$('#custom_cards .clear_btn').hide();
	$('#custom_cards .delete_btn').show();
	$('#custom_cards .prev_btn, #custom_cards .next_btn').hide();
	if (e) {
		my_card.removeImage();
		updateCard();
		/*if (edit_card_mc.mc != null) {
			if (edit_card_mc.mc.percentLoaded == 100) {
				build_a_card.image = new Bitmap(Bitmap(edit_card_mc.mc.content).bitmapData,"auto",true);
				build_a_card.setImage();
				return;
			}
			build_a_card.loadImage();
		}
		else {
			build_a_card.image = null;
		}*/
	}
	
	if ($('#edit_card').data("custom") == 1) {
		$('#edit_card .privacy_cb').selectedIndex(1);
	}
	else if ($('#edit_card').data("custom") == 2) {
		$('#edit_card .privacy_cb').selectedIndex(0);
	}
	else {
		$('#edit_card .privacy_cb').selectedIndex(2);
		$('#custom_cards .prev_btn, #custom_cards .next_btn').show();
	}
	updatePrivacyE();
}

function showMyCards(e) {
	$('#upload_card').hide();
	$('#edit_card').hide();
	$('#search').show();
	
	//$('#custom_cards').append($('#search'));
		//$('#search').insertAfter($('#edit_card'));
	//$('#custom_cards .cards').insertAfter($('#search')); // done because taking screenshots sometimes messes up this element's index
	$('#upload_card_btn').disable(false);
	$('#edit_card_btn').disable(true);
	if (~~$('#edit_card').data("id") != 0) {
		$('#edit_card_btn').disable(false);
	}
	$('#my_cards_btn').disable(true);
	$('#custom_cards .clear_btn').hide();
	$('#custom_cards .delete_btn').hide();
	
	
	
	
	for (var i = 0; i < search_arr.length; i++) {
		$('#custom_cards .cards').append(search_arr[i]);
	}
	if (!searched) {
		searchCardsE(e);
		searched = true;
	}
	updatePrivacyE();
	
	
	$('#search .name_txt').focus();
}

function clearCard() {
	upload_card.find('.name_txt').val("")
	upload_card.find('.level_txt').val("")
	upload_card.find('.atk_txt').val("")
	upload_card.find('.def_txt').val("")
	upload_card.find('.scale_txt').val("")
	upload_card.find('textarea').val("");
	upload_card.find('select').selectedIndex(0);
	upload_card.find('.limit_sel').selectedIndex(3);
	upload_card.find('.pendulum_cb').checked(false);
	upload_card.find('.rush_cb').checked(false);
	upload_card.find('.legend_cb').checked(false);
	upload_card.data("id", 0);
	upload_card.data("pic", "0");
	toggleLink();
	//upload_card.mc = null;
	updateCard();
	my_card.data("pic", "0");
	my_card.removeImage();
	$('#custom_cards .card_passcode_txt').val("");
	$('#custom_cards .card_tcg_cb').checked(false);
	$('#custom_cards .card_ocg_cb').checked(false);
	$('#custom_cards .is_effect_cb').checked(false);
	updatePrivacyE();
	upload_card.find('.name_txt').focus();
	cardChangeE();
}

function deleteCardE() {
	if (uploader >= 2 || moderator >= 2) {
		var options = ["Delete Card", "Change Card", "Count Decks", "Update decks"];
		getComboBox("Delete Card", "Select an option:", options, 0, function(){
			switch ($('#combo .combo_cb').val()) {
				case "Delete Card":
					deleteCard();
					break;
				case "Change Card":
					changeCardE();
					break;
				case "Count Decks":
					Send({"action":"Count decks", "id":my_card.data("id")});
					showDim();
					break;
				case "Update decks":
					var fd = new FormData();
					fd.append("id", my_card.data("id"));
					fd.append("user_id", userId);
					fd.append("password", password);
					
					var xhr = new XMLHttpRequest();
					xhr.open("POST", URL_START + "php-scripts/update-decks.php", true);
					xhr.onreadystatechange = function() {
						if (xhr.readyState == 4 && xhr.status == 200) {
							console.log(xhr.responseText);
							onData(JSON.parse(xhr.responseText));
						}
					}
					xhr.send(fd);
					showDim();
					break;
			}
		});
	}
	else {
		getConfirmation("Delete Card", "Are you sure you want to delete " + my_card.data("name") + "?", deleteCard);
	}
	showDim();
}

function deleteCard() {
	Send({"action":"Delete card", "id":my_card.data("id")});
	if (upload_card.data("id") == my_card.data("id")) {
		upload_card.data("pic", "0");
	}
	edit_card.data("pic", "0");
	showDim();
	searchCards();
}

function changeCardE() {
	var prev_id = my_card.data("id");
	getInput("Change Card", "Enter the ID of the official card:", "", 0, function(){
		Send({"action":"Change card", "prev_id":prev_id, "new_id":~~$('#input .input_txt').val()});
	}, /[^0-9]/g);
}

function removeSearchCards() {
	$('.search_card').detach();
	/*for (var i = 0; i < search_arr.length; i++) {
		if (search_arr[i].stage) {
			card_stage_mc.removeChild(search_arr[i]);
		}
	}*/
}

function editCardE(e) {
	if (currentLabel != "custom_cards") {
		return;
	}
	var card = $(e.currentTarget);
	my_card.copyCard(card);
	my_card.clearLimit();
	edit_card.data("custom", ~~card.data("custom"));
	edit_card.data("username", card.data("username"));
	edit_card.data("id", card.data("id"));
	edit_card.data("pic", card.data("pic"));
	$('#custom_cards .card_tcg_cb').checked(!!card.data("tcg"));
	$('#custom_cards .card_ocg_cb').checked(!!card.data("ocg"));
	$('#custom_cards .is_effect_cb').checked(!!card.data("is_effect"));
	$('#custom_cards .card_passcode_txt').val(card.data("passcode"));
	showEditor();
	//edit_card_mc.mc = card.mc;
	edit_card.find('.name_txt').val(card.data("name"));
	edit_card.find('.desc_txt').val(card.data("effect"));
	edit_card.find('.card_cb').selectedIndex(edit_card.find('.card_cb option:contains("' + card.data("card_type") + '")').index());
	//cardChangeE2();
	cardChangeE();
	edit_card.find('.card2_cb').selectedIndex(edit_card.find('.card2_cb option:contains("' + card.data("monster_color") + '")').index());
	toggleLink();
	//edit_card.find('.type_cb').selectedIndex(edit_card.find('.type_cb option:contains("' + card.data("type") + '")').index());
	edit_card.find('.type_cb').selectedIndex(edit_card.find('.type_cb option[value="' + card.data("type") + '"]').index());
	//edit_card.find('.type2_cb').selectedIndex(edit_card.find('.type2_cb option:contains("' + card.data("ability") + '")').index());
	fillAbilities(edit_card, str(card.data("ability")));
	edit_card.find('.attrib_cb').selectedIndex(edit_card.find('.attrib_cb option:contains("' + card.data("attribute") + '")').index());
	edit_card.find('.level_txt').val(card.data("level"));
	edit_card.find('.atk_txt').val(card.data("atk"));
	edit_card.find('.def_txt').val(card.data("def"));
	edit_card.find('.pendulum_cb').checked(!!card.data("pendulum"));
	//toggleCustomPendulum();
	togglePendulum();
	edit_card.find('.scale_txt').val(card.data("scale"));
	edit_card.find('.pendulum_effect_txt').val(card.data("pendulum_effect"));
	$('#edit_card .arrows div').each(function(i,e){
		var src = $(this).find('img').attr("src");
		if (card.data("monster_color") == "Link" && card.data("arrows").substring(i, i + 1) == "1") {
			src = src.replace('black', 'red');
		}
		else {
			src = src.replace('red', 'black');
		}
		$(this).find('img').attr("src", src);
	});
	edit_card.find('.rush_cb').checked(!!card.data("rush"));
	edit_card.find('.legend_cb').checked(card.data("rush") == 2);
	edit_card.find('.limit_sel').selectedIndex(card.data("tcg_limit"));
	toggleRush();
	updateCard();
}

function openCard() {
	if (!my_card.data("id")) {
		return;
	}
	window.open('https://www.duelingbook.com/card?id=' + my_card.data("id"));
}

function searchCardsDownE(e) {
	if (e.which == 3) {
		return;
	}
	var down = true;
	//$(this).mouseleave(function(){
	$(this).mouseup(function(){
		down = false;
		$(this).off("mouseup");
	});
	setTimeout(function(){
		if (!down) {
			return;
		}
		if (!saved_search) {
			return;
		}
		getInput("Search Cards", "Enter the desired page number:", "", 0, function(){
			searchCardsPageE(e, $('#input .input_txt').val());
		}, /[^0-9]/g);
		showDim();
	}, 500);
}

function initSearcher() {
	//$('#search .name_txt, #search .desc_txt').data("regex", /[^ -~●\r\nÜúΩβα☆★ñéÉ#∞ä①②③④⑤⑥⑦⑧⑨・×áⱯ]/g);
	$('#search .search_btn').click(searchCardsE);
	$('#search .search_prev_btn').mousedown(searchCardsDownE);
	$('#search .search_next_btn').mousedown(searchCardsDownE);
	addButton($('#search .search_prev_btn'), searchCardsPrevPage);
	addButton($('#search .search_next_btn'), searchCardsNextPage);
	$('#search').mouseenter(showMoreSearchOptions);
	$('#search').mouseleave(function(e){
		updateMouse(e);
		if (!inBounds($('#search'))) {
			showPrevSearchOptions();
		}
	});
	$('#search .more_options_btn').click(searchOptionsNext);
	$('#search .prev_options_btn').click(searchOptionsPrev);
	$('#search .card_cb').change(cardChangeE);
	//$('#search .name_txt, #search .desc_txt').on("keyup", searchCardsE2);
	$('#search .name_txt, #search .desc_txt').on("input", searchCardsE2);
	$('#search .card_cb, #search .card2_cb, #search .type_cb, #search .type2_cb, #search .attrib_cb, #search .lvll_txt, #search .lvlh_txt, #search .atkl_txt, #search .atkh_txt, #search .defl_txt, #search .defh_txt, #search .pendulum_cb, #search .scalel_txt, #search .scaleh_txt, #search .limit_cb, #search .order_cb, #search .search_btn').on("input change", searchCardsE2);
	restrictInt($('#search .lvll_txt'));
	restrictInt($('#search .lvlh_txt'));
	restrictIntATK($('#search .atkl_txt'));
	restrictIntATK($('#search .atkh_txt'));
	restrictIntATK($('#search .defl_txt'));
	restrictIntATK($('#search .defh_txt'));
}

function initUploader() {
	$('#upload_card .name_txt, #edit_card .name_txt').keydown(loadCard);
	//$('.uploader .name_txt, .uploader .desc_txt, .uploader .pendulum_effect_txt').data("regex", /[^ -~●\r\nÜúΩβα☆★ñéÉ#∞ä①②③④⑤⑥⑦⑧⑨・×áⱯ]/g);
	//$('.uploader .name_txt, .uploader .desc_txt, .uploader .pendulum_effect_txt').data("regex", /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu); // causing a syntax error in IE
	//$('.uploader .name_txt, .uploader .desc_txt, .uploader .pendulum_effect_txt').data("regex", new RegExp('(\\p{Emoji_Presentation}|\\p{Extended_Pictographic})', 'gu'));
	$('.uploader .card2_cb').disable(true);
	$('.uploader .type_cb').disable(true);
	//$('.uploader .type2_cb').disable(true);
	$('.uploader .ability_btn').disable(true);
	$('.uploader .attrib_cb').disable(true);
	$('.uploader .level_txt').disable(true);
	$('.uploader .atk_txt').disable(true);
	$('.uploader .def_txt').disable(true);
	$('.uploader .pendulum_cb').disable(true);
	$('.uploader .scale_txt').disable(true);
	$('.uploader .pendulum_effect_txt').prop("disabled", true);
	$('.uploader .name_txt').on("input", updateCardE);
	$('.uploader .desc_txt').on("input", updateCardE);
	$('.uploader .card_cb').change(cardChangeE);
	$('.uploader .card_cb').change(updateCard);
	$('.uploader .card2_cb').change(toggleLink);
	$('.uploader .card2_cb').change(updateCard);
	$('.uploader .type_cb').change(updateCard);
	//$('.uploader .type2_cb').change(updateCard);
	//$('.uploader .type2_cb').change(showAbilities);
	$('.uploader').data("ability", []);
	//$('.uploader .ability_btn').click(showAbilities);
	$('.uploader .ability_btn').on('click mousedown', showAbilities);
	$('.uploader .abilities input[type=checkbox]').checked(false);
	$('.uploader .abilities input[type=checkbox]').change(updateAbilitiesE);
	$('.uploader .ability_item').click(updateAbilities2);
	$('.uploader .abilities').mouseleave(hideAbilities);
	$('.uploader .abilities').focusout(hideAbilities2);
	//$('.uploader .abilities').on('mouseleave focusout', hideAbilities);
	//addButton($('.uploader .abilities .exit_btn'), hideAbilities);
	$('.uploader .attrib_cb').change(updateCard);
	$('.uploader .level_txt').keyup(updateCard);
	restrictInt($('.uploader .level_txt'));
	$('.uploader .atk_txt').on("input", updateCard);
	restrictIntATK($('.uploader .atk_txt'));
	$('.uploader .def_txt').on("input", updateCard);
	restrictIntATK($('.uploader .def_txt'));
	$('.uploader .pendulum_cb').change(updateCard);
	$('.uploader .pendulum_cb').change(togglePendulum);
	$('.uploader .scale_txt').on("input", updateCard);
	restrictInt($('.uploader .scale_txt'));
	$('.uploader .pendulum_effect_txt').on("input", updateCardE);
	//$('#custom_cards .passcode_txt').disable(false);
	//$('#custom_cards .passcode_txt').keyup(updateCard);
	$('.uploader .rush_cb').change(updateCard);
	$('.uploader .rush_cb').change(toggleRush);
	$('.uploader .legend_cb').change(updateCard);
	$('.uploader .limit_sel').change(updateCard);
	
	$('#upload_card .upload_btn').click(uploadCardE);
	$('#edit_card .upload_btn').click(saveEditCard);
	$('#custom_cards .browse_btn').click(uploadCustomPicE);
	$('#custom_cards .browse2_btn').change(uploadCustomPic);
	if (!$('#custom_cards .browse2_btn').data("proxy")) { // delete
		$('#custom_cards .browse2_btn').data("proxy", $('<div></div>'))
	}
	$('#custom_cards .browse2_btn').data("proxy").hide();
	$('#custom_cards .privacy_cb').change(updatePrivacyE);
}

function showAbilities() {
	$(this).parents('.uploader').find('.abilities').show();
}

function hideAbilities() {
	$('.uploader:visible').each(function(i,e){
		$(this).find('.abilities').hide();
		$(this).find('.ability_btn').val(getAbilities($(this).data("ability")));
	});
}

function hideAbilities2(e) {
	var obj = $(this);
	setTimeout(function(){
		if (obj.find($(':focus')).length == 1) {
			return;
		}
		hideAbilities();
	}, 5);
}

function fillAbilities(div, data) {
	div.find('.abilities').find('input[type=checkbox]').each(function(){
		$(this).checked(data.includes($(this).val()));
	});
	updateAbilities(div);
	hideAbilities();
}

function removeAbilities(obj) {
	obj.find('.abilities input[type=checkbox]').each(function(i,e){
		$(this).checked(false);
	});
	obj.data("ability", []);
}

function updateAbilitiesE(e) {
	var obj = $(e.target).parents('.uploader');
	updateAbilities(obj);
}

function updateAbilities(obj) {
	var arr = [];
	obj.find('.abilities').find('input[type=checkbox]:checked').each(function(i,e){
		arr.push($(this).val());
	});
	obj.data("ability", arr);
	updateCard();
}

function updateAbilities2(e) {
	if (e.target instanceof HTMLInputElement) {
		return;
	}
	$(this).find('input[type=checkbox]').checked(!$(this).find('input[type=checkbox]').is(":checked"));
	updateAbilitiesE(e);
}

/*function getAbilities(arr) {
	if (!arr || !(arr instanceof Array)) {
		return "";
	}
	var str = "";
	for (var i = 0; i < arr.length; i++) {
		str += arr[i];
		if (i < arr.length - 1) {
			str += " / ";
		}
	}
	return str;
}*/

function getAbilities(arr) {
	return arr.join(" / ");
}

function updateCardE() {
	setTimeout(function(){
		updateCard();
	}, 5);
}

function updateCard() {
	searching = true;
	var obj = upload_card;
	if (edit_card.is(':visible')) {
		obj = edit_card;
	}
	var id = obj.data("id");
	//console.log('id = ' + id);
	var name = obj.find('.name_txt').val();
	var effect = obj.find('.desc_txt').val();
	var pendulum_effect = obj.find('.pendulum_effect_txt').val();
	var card_type = obj.find('.card_cb').val();
	var monster_color = obj.find('.card2_cb').val();
	var is_effect = ~~((monster_color == "Normal" || monster_color == "Effect") || monster_color == "Ritual" && effect.indexOf(". ") >= 0 || ((monster_color == "Fusion" || monster_color == "Synchro" || monster_color == "Xyz" || monster_color == "Link") && (effect.indexOf("\n") >= 0 || effect.indexOf("\r") >= 0 || effect.indexOf(". ") >= 0)));
	//$('.is_effect_cb').attr("checked", "checked");
	var type = obj.find('.type_cb').val();
	var attribute = obj.find('.attrib_cb').val();
	var level = ~~obj.find('.level_txt').val();
	//var ability = str(obj.find('.type2_cb').val());
	//var ability = str(obj.find('.type2_cb').data("ability"));
	//var ability = getAbilities(obj.find('.type2_cb').data("ability"));
	var ability = getAbilities(obj.data("ability"));
	var flip = ~~(effect.toUpperCase().indexOf("FLIP:") >= 0);
	var pendulum = obj.find('.pendulum_cb').prop("checked")
	var scale = ~~(obj.find('.scale_txt').val());
	var arrows = "";
	arrows += ~~(obj.find('.arrow1 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow2 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow3 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow4 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow5 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow6 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow7 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow8 img').attr("src").indexOf("red") >= 0);
	var rush = ~~(obj.find('.rush_cb').is(":checked"));
	if (rush && obj.find('.legend_cb').is(":checked")) {
		rush = 2;
	}
	var atk = obj.find('.atk_txt').val();
	var def = obj.find('.def_txt').val();
	var pic = obj.data("pic");
	var custom = obj.data("custom");
	var passcode = "";
	if (obj.find('.privacy_cb').val() == 0) {
		passcode = $('#custom_cards .card_passcode_txt').val();
	}
	var limit = ~~(obj.find('.limit_sel').val());
	
	// you need to use initializeFromData in order for the card to set the data
		
	my_card.initializeFromData({"id":id, "name":name, "treated_as":name, "effect":effect, "pendulum_effect":pendulum_effect, "card_type":card_type, "monster_color":monster_color, "is_effect":is_effect, "type":type, "attribute":attribute, "level":level, "ability":ability, "flip":flip, "pendulum":pendulum, "scale":scale, "arrows":arrows, "atk":atk, "def":def, "tcg_limit":limit, "ocg_limit":limit, "passcode":passcode, "tcg":1, "ocg":1, "pic":pic, "custom":custom, "username":obj.data("username"), "rush":rush});
	//my_card.initialize(id, name, name, effect, pendulum_effect, card_type, monster_color, is_effect, type, attribute, level, ability, flip, pendulum, scale, arrows, atk, def, 3, 3, passcode, 1, 1, pic, custom, obj.data("username"));
	//my_card.initialize(id, name, name, effect, pendulum_effect, card_type, monster_color, is_effect, type, attribute, level, ability, flip, pendulum, scale, arrows, atk, def, 3, 3, "", 1, 1, pic, custom, obj.data("username"));
	//console.log('my_card.data("id") = ' + my_card.data("id"));
}

function updatePrivacyE() {
	var obj = upload_card;
	if (edit_card.is(":visible")) {
		obj = edit_card;
	}
	if (obj.find('.privacy_cb').prop("selectedIndex") == 2) {
		$('#custom_cards .card_passcode_lbl').show();
		$('#custom_cards .card_passcode_txt').show();
		$('#custom_cards .card_tcg_lbl').show();
		$('#custom_cards .card_tcg_cb').show();
		$('#custom_cards .card_ocg_lbl').show();
		$('#custom_cards .card_ocg_cb').show();
		$('#custom_cards .show_effect_lbl').show();
		$('#custom_cards .is_effect_cb').show();
		if (obj == upload_card) {
			$('#custom_cards .card_ocg_cb').checked(true);
			$('#custom_cards .is_effect_cb').checked(true);
			$('#custom_cards .card_passcode_txt').focus();
		}
		obj.find('.browse_btn').disable(true);
	}
	else {
		$('#custom_cards .card_passcode_lbl').hide();
		$('#custom_cards .card_passcode_txt').hide();
		$('#custom_cards .card_tcg_lbl').hide();
		$('#custom_cards .card_tcg_cb').hide();
		$('#custom_cards .card_ocg_lbl').hide();
		$('#custom_cards .card_ocg_cb').hide();
		$('#custom_cards .show_effect_lbl').hide();
		$('#custom_cards .is_effect_cb').hide();
		obj.find('.browse_btn').disable(false);
	}
	switch(obj.find('.privacy_cb').prop("selectedIndex")) {
		case 0:
			obj.data("custom", 2);
			break;
		case 1:
			obj.data("custom", 1);
			break;
		case 2:
			obj.data("custom", 0);
			break;
	}
	/*if (obj.find('.privacy_cb').prop("selectedIndex") == 0) {
		obj.data("custom", 2);
	}
	else if (obj.find('.privacy_cb').prop("selectedIndex") == 1) {
		obj.data("custom", 1);
	}
	obj.data("custom", obj.find('.privacy_cb').prop("selectedIndex") == 0 ? 2 : 1);*/
}

function uploadCardE() {
	if (!uploader) {
		errorE("You cannot upload custom cards");
		return;
	}
	saveCustomCard("Upload card");
}

function saveEditCard() {
	if (!uploader) {
		errorE("You cannot edit custom cards");
		return;
	}
	saveCustomCard("Edit card");
	
	//deck.deckData = null;
	deck_arr = []; // doing this makes that edited card in the deck look right the next time you view your deck. not sure if it has ramifications tho
	side_arr = [];
	extra_arr = [];
}

function saveCustomCard(action) {
	var obj = upload_card;
	if (edit_card.is(":visible")) {
		obj = edit_card;
	}
	if (obj.find('.name_txt').val() == "") {
		errorE("Name is blank");
		return;
	}
	if (obj.find('.desc_txt').val() == "") {
		errorE("Effect is blank");
		return;
	}
	if (obj.find('.card_cb').val() == "") {
		errorE("Card Type is blank");
		return;
	}
	if (obj.find('.type_cb').val() == "") {
		errorE("Type is blank");
		return;
	}
	if (obj.find('.card_cb').val() == "Monster") {
		if (obj.find('.card2_cb').val() == "") {
			errorE("Monster Category is blank");
			return;
		}
		if (obj.find('.attrib_cb').val() == "") {
			errorE("Attribute is blank");
			return;
		}
		if (obj.find('.level_txt').val() == "" && obj.find('.card2_txt').val() == "Link") {
			errorE("Link Rating is blank");
			return;
		}
		if (obj.find('.level_txt').val() == "" && obj.find('.card2_txt').val() == "Xyz") {
			errorE("Rank is blank");
			return;
		}
		if (obj.find('.level_txt').val() == "") {
			errorE("Level is blank");
			return;
		}
		if (obj.find('.atk_txt').val() == "") {
			errorE("ATK is blank");
			return;
		}
		if (obj.find('.def_txt').val() == "") {
			errorE("DEF is blank");
			return;
		}
	}
	if (obj.find('.pendulum_cb').is(":checked") && obj.find('.scale_txt').val() == "") {
		errorE("Pendulum Scale is blank");
		return;
	}
	var effect = obj.find('.desc_txt').val();
	var monster_color = obj.find('.card2_cb').val();
	var is_effect = ~~((monster_color == "Normal" || monster_color == "Effect") || monster_color == "Ritual" && effect.indexOf(". ") >= 0 || ((monster_color == "Fusion" || monster_color == "Synchro" || monster_color == "Xyz" || monster_color == "Link") && (effect.indexOf("\n") >= 0 || effect.indexOf("\r") >= 0 || effect.indexOf(". ") >= 0)));
	if ($('#custom_cards .is_effect_cb').is(":visible")) {
		is_effect = ~~$('#custom_cards .is_effect_cb').is(":checked");
	}
	var arrows = "";
	arrows += ~~(obj.find('.arrow1 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow2 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow3 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow4 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow5 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow6 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow7 img').attr("src").indexOf("red") >= 0);
	arrows += ~~(obj.find('.arrow8 img').attr("src").indexOf("red") >= 0);
	var rush = ~~obj.find('.rush_cb').is(":checked");
	if (rush && obj.find('.legend_cb').is(":checked")) {
		rush = 2;
	}
	Send({
		"action":action,
		"id":obj.data("id"),
		"name":obj.find('.name_txt').val(),
		"effect":effect,
		"card_type":obj.find('.card_cb').val(),
		"monster_color":monster_color,
		"type":obj.find('.type_cb').val(),
		//"ability":str(obj.find('.type2_cb').val()),
		"ability":getAbilities(obj.data("ability")),
		"attribute":str(obj.find('.attrib_cb').val()),
		"level":~~obj.find('.level_txt').val(),
		"atk":obj.find('.atk_txt').val(),
		"def":obj.find('.def_txt').val(),
		"flip":~~(obj.find('.desc_txt').val().toUpperCase().indexOf("FLIP:") >= 0),
		"is_effect":is_effect,
		"pendulum":~~obj.find('.pendulum_cb').is(":checked"),
		"scale":~~obj.find('.scale_txt').val(),
		"pendulum_effect":obj.find('.pendulum_effect_txt').val(),
		"arrows":arrows,
		"rush":rush,
		"serial_number":~~$('#custom_cards .card_passcode_txt').val(),
		"tcg":~~$('#custom_cards .card_tcg_cb').is(":checked"),
		"ocg":~~$('#custom_cards .card_ocg_cb').is(":checked"),
		//"tcg_limit":~~obj.find('.limit_sel').val(),
		//"ocg_limit":~~obj.find('.limit_sel').val(),
		"limit":~~obj.find('.limit_sel').val(),
		"custom":~~(obj.find('.privacy_cb').val() != 0),
		"privacy":~~obj.find('.privacy_cb').val()
	});
	showDim();
}

function editCustomCardComplete(data) {
	messageE(data.message);
	my_card.data("custom", edit_card.find('.privacy_cb').prop("selectedIndex") == 0 ? 2 : 1);
	preview.copyCard(my_card);
	for (var i = 0; i < search_arr.length; i++) {
		if (search_arr[i].data("id") == my_card.data("id")) {
			search_arr[i].copyCard(my_card);
			search_arr[i].setLimit();
		}
	}
	clearDecks();
}

function uploadCustomPicE() {
	if (~~my_card.data("id") == 0) {
		errorE("You can upload an image after uploading a card");
		return;
	}
	if (frozen) {
		errorE("You cannot use this feature while frozen");
		return;
	}
	if (!uploader) {
		errorE("You cannot upload custom images");
		return;
	}
	$('#custom_cards .browse2_btn').click();
}

function uploadCustomPic() {
	var file = this.files[0];
	if (file.size > 4294967296) {
		errorE("File is too large");
		return;
	}
	var fd = new FormData();
	fd.append("card_id", my_card.data("id"));
	fd.append("user_id", userId);
	fd.append("username", username);
	fd.append("password", password);
	fd.append("date", new Date());
	fd.append("Filedata", file);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/upload-custom-pic.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText);
			var data = JSON.parse(xhr.responseText);
			if (data.action == "Error") {
				errorE(data.message);
				return;
			}
			customCompleteE();
			$('input[type="file"]').val(null);
		}
	}
	xhr.send(fd);
	$(':focus').blur();
	showDim();
}

function customCompleteE() {
	hideDim();
	var obj = upload_card;
	if (edit_card.is(":visible")) {
		obj = edit_card;
	}
	obj.data("pic", (~~obj.data("pic") + 1).toString());
	my_card.data("pic", obj.data("pic"));
	//build_a_card.mc = getCardImage(mc);
	my_card.loadImage();
		updateCustomCards(my_card);
	
	/*build_a_card.mc.addEventListener(Event.COMPLETE, function(){
		var cardFront = newCardFront();
		card.copyCard(build_a_card);
		updateCustomCards(card);
	});*/
}

function updateCustomCards(card) {
	/*if (upload_card.is(":visible")) {
		upload_mc.mc = build_a_card.mc;
	}
	else if (edit_card.is(":visible")) {
		edit_card.mc = build_a_card.mc;
	}*/
	if (preview.data("id") == card.data("id")) {
		preview.copyCard(card);
	}
	for (var i = 0; i < search_arr.length; i++) {
		if (search_arr[i].data("id") == card.data("id")) {
			search_arr[i].copyCard(card);
			search_arr[i].setLimit();
		}
	}
	clearDecks();
}

function hideArrows(obj) {
	obj.find('.arrows').css("opacity", 0.5);
	obj.find('.arrows div').each(function(){
		var src = $(this).find('img').attr("src");
		if (src.indexOf('red') >= 0) {
			src = src.replace('red', 'black');
		}
		$(this).find('img').attr("src", src);
	});
	obj.find('.arrows').css("pointer-events", "none");
}

function showArrows(obj) {
	obj.find('.arrows').css("opacity", 1);
	obj.find('.arrows').css("pointer-events", "auto");
}

function cardChangeE() {
	var obj = $('#search');
	if (currentLabel == "custom_cards") {
		if ($('#upload_card').is(':visible')) {
			obj = $('#upload_card');
		}
		if ($('#edit_card').is(':visible')) {
			obj = $('#edit_card');
		}
	}
	var arr = [];
	switch(obj.find('.card_cb').val()) {
		case "":
			obj.find('.card2_cb').selectedIndex(0);
			obj.find('.card2_cb').disable(true);
			obj.find('.type_cb').selectedIndex(0);
			obj.find('.type_cb').disable(true);
			obj.find('.type2_cb').selectedIndex(0);
			obj.find('.type2_cb').disable(true);
				obj.find('.ability_btn').disable(true);
				removeAbilities(obj);
			obj.find('.attrib_cb').selectedIndex(0);
			obj.find('.attrib_cb').disable(true);
			obj.find('.level_txt').val("");
			obj.find('.level_txt').disable(true);
			obj.find('.lvll_txt').val("");
			obj.find('.lvll_txt').disable(true);
			obj.find('.lvlh_txt').val("");
			obj.find('.lvlh_txt').disable(true);
			obj.find('.atk_txt').val("");
			obj.find('.atk_txt').disable(true);
			obj.find('.atkl_txt').val("");
			obj.find('.atkl_txt').disable(true);
			obj.find('.atkh_txt').val("");
			obj.find('.atkh_txt').disable(true);
			obj.find('.def_txt').val("");
			obj.find('.def_txt').disable(true);
			obj.find('.defl_txt').val("");
			obj.find('.defl_txt').disable(true);
			obj.find('.defh_txt').val("");
			obj.find('.defh_txt').disable(true);
			obj.find('.pendulum_cb').disable(true);
			obj.find('.pendulum_cb').checked(false);
			obj.find('.scale_txt').disable(true);
			obj.find('.scalel_txt').disable(true);
			obj.find('.scalel_txt').val("");
			obj.find('.scaleh_txt').disable(true);
			obj.find('.scaleh_txt').val("");
			obj.find('.pendulum_effect_txt').prop("disabled", true);
			obj.find('.pendulum_effect_txt').val("");
			
			obj.find('.rush_cb').disable(true);
			obj.find('.rush_cb').checked(false);
			obj.find('.legend_cb').disable(true);
			obj.find('.legend_cb').checked(false);
			//showArrows(obj);
			// passcode
			break;
		case "Monster":
			obj.find('.card2_cb').selectedIndex(0);
			obj.find('.card2_cb').disable(false);
			obj.find('.type_cb').selectedIndex(0);
			obj.find('.type_cb').disable(false);
			obj.find('.type2_cb').selectedIndex(0);
			obj.find('.type2_cb').disable(false);
				obj.find('.ability_btn').disable(false);
			obj.find('.attrib_cb').selectedIndex(0);
			obj.find('.attrib_cb').disable(false);
			obj.find('.level_txt').disable(false);
			obj.find('.lvll_txt').disable(false);
			obj.find('.lvlh_txt').disable(false);
			obj.find('.atk_txt').disable(false);
			obj.find('.atkl_txt').disable(false);
			obj.find('.atkh_txt').disable(false);
			obj.find('.def_txt').disable(false);
			obj.find('.defl_txt').disable(false);
			obj.find('.defh_txt').disable(false);
			obj.find('.pendulum_cb').disable(false);
			obj.find('.scale_txt').disable(true);
			obj.find('.scalel_txt').disable(false);
			obj.find('.scaleh_txt').disable(false);
			obj.find('.pendulum_effect_txt').prop("disabled", true);
			
			obj.find('.rush_cb').disable(false);
			
			showArrows(obj);
			// passcode
			arr = ["", "Aqua", "Beast", "Beast-Warrior", "Celestial Warrior", "Cyberse", "Cyborg", "Dinosaur", "Divine-Beast", "Dragon", "Fairy", "Fiend", "Fish", "Galaxy", "High Dragon", "Illusionist", "Insect", "Machine", "Magical Knight", "Omega Psychic", "Plant", "Psychic", "Pyro", "Reptile", "Rock", "Sea Serpent", "Spellcaster", "Thunder", "Warrior", "Winged Beast", "Wyrm", "Zombie"];
			break;
		case "Spell":
			arr = ["", "Normal", "Continuous", "Equip", "Quick-Play", "Field", "Ritual"];
			stEnable();
			break;
		case "Trap":
			arr = ["", "Normal", "Continuous", "Counter"];
			stEnable();
			break;
	}
	fillCombobox(obj.find('.type_cb'), arr);
	toggleLink();
	hideAbilities();
}

function stEnable() {
	var obj = $('#search');
	if (currentLabel == "custom_cards") {
		if ($('#upload_card').is(':visible')) {
			obj = $('#upload_card');
		}
		if ($('#edit_card').is(':visible')) {
			obj = $('#edit_card');
		}
	}
	obj.find('.card2_cb').selectedIndex(0);
	obj.find('.card2_cb').disable(true);
	obj.find('.type_cb').selectedIndex(0);
	obj.find('.type_cb').disable(false);
	obj.find('.type2_cb').selectedIndex(0);
	obj.find('.type2_cb').disable(true);
		obj.find('.ability_btn').disable(true);
		removeAbilities(obj);
	obj.find('.attrib_cb').selectedIndex(0);
	obj.find('.attrib_cb').disable(true);
	obj.find('.level_txt').val("");
	obj.find('.level_txt').disable(true);
	obj.find('.lvll_txt').val("");
	obj.find('.lvll_txt').disable(true);
	obj.find('.lvlh_txt').val("");
	obj.find('.lvlh_txt').disable(true);
	obj.find('.atk_txt').val("");
	obj.find('.atk_txt').disable(true);
	obj.find('.atkl_txt').val("");
	obj.find('.atkl_txt').disable(true);
	obj.find('.atkh_txt').val("");
	obj.find('.atkh_txt').disable(true);
	obj.find('.def_txt').val("");
	obj.find('.def_txt').disable(true);
	obj.find('.defl_txt').val("");
	obj.find('.defl_txt').disable(true);
	obj.find('.defh_txt').val("");
	obj.find('.defh_txt').disable(true);
	obj.find('.pendulum_cb').checked(false);
	obj.find('.pendulum_cb').disable(true);
	obj.find('.scale_txt').val("");
	obj.find('.scale_txt').disable(true);
	obj.find('.scalel_txt').val("");
	obj.find('.scalel_txt').disable(true);
	obj.find('.scaleh_txt').val("");
	obj.find('.scaleh_txt').disable(true);
	obj.find('.pendulum_effect_txt').val("");
	obj.find('.pendulum_effect_txt').prop("disabled", true);
	
	obj.find('.rush_cb').disable(false);
	
	hideArrows(obj);
	// passcode
}

function togglePendulum() {
	var obj = $('#upload_card');
	if ($('#edit_card').is(':visible')) {
		obj = $('#edit_card');
	}
	if (obj.find('.pendulum_cb').prop("checked")) {
		obj.find('.scale_txt').disable(false);
		obj.find('.pendulum_effect_txt').prop("disabled", false);
		
		obj.find('.rush_cb').disable(true);
	}
	else {
		obj.find('.scale_txt').val("");
		obj.find('.scale_txt').disable(true);
		obj.find('.pendulum_effect_txt').val("");
		obj.find('.pendulum_effect_txt').prop("disabled", true);
		
		if (obj.find('.card_cb').val() != "" && obj.find('.card2_cb').val() != "Link") {
			obj.find('.rush_cb').disable(false);
		}
	}
	//updateCard();
}

function toggleLink() {
	var obj;
	if ($('#upload_card').is(':visible')) {
		obj = $('#upload_card');
	}
	else if ($('#edit_card').is(':visible')) {
		obj = $('#edit_card');
	}
	else {
		return;
	}
	if (obj.find('.card2_cb').val() == "Link") {
		obj.find('.def_txt').val("?");
		obj.find('.def_txt').disable(true);
		obj.find('.pendulum_cb').checked(false);
		obj.find('.pendulum_cb').disable(true);
		obj.find('.scale_txt').val("");
		obj.find('.scale_txt').disable(true);
		obj.find('.pendulum_effect_txt').val("");
		obj.find('.pendulum_effect_txt').prop("disabled", true);
		showArrows(obj);
		updateCard();
		
		obj.find('.rush_cb').disable(true);
		obj.find('.rush_cb').checked(false);
		obj.find('.legend_cb').disable(true);
		obj.find('.legend_cb').checked(false);
		
	}
	else {
		// arrows
		if (obj.find('.card_cb').val() == "Monster") {
			obj.find('.def_txt').disable(false);
			if (obj.find('.def_txt').val() == "?") {
				obj.find('.def_txt').val("");
			}
			if (!obj.find('.rush_cb').is(":checked")) {
				obj.find('.pendulum_cb').disable(false);
			}
			
			obj.find('.rush_cb').disable(false);
		}
		togglePendulum();
		hideArrows(obj);
	}
}

function toggleRush() {
	var obj = $('#upload_card');
	if ($('#edit_card').is(':visible')) {
		obj = $('#edit_card');
	}
	if (obj.find('.rush_cb').prop("checked")) {
		obj.find('.legend_cb').disable(false);
		
		obj.find('.pendulum_cb').disable(true);
	}
	else {
		obj.find('.legend_cb').disable(true);
		obj.find('.legend_cb').checked(false);
		
		if (obj.find('.card_cb').val() == "Monster" && obj.find('.card2_cb').val() != "Link") {
			obj.find('.pendulum_cb').disable(false);
		}
	}
	//updateCard();
}

function searchCardsResponse(data) {
	console.log('searchCardsResponse');
	console.log(JSON.stringify(data));
	if (data.full_search != undefined) {
		full_search = data.full_search;
	}
	hideDim();
	countSearch();
	var ocg = $('#' + currentLabel + ' .ocg_limit_rb').is(":checked");
	for (var i = 0; i < data.cards.length; i++) {
		if (i >= 20) {
			break;
		}
		if (search_arr.length < i + 1) {
			search_arr.push(new SearchCard(i));
		}
		if (search_arr[i].parent().length == 0 && $('#search').is(":visible")) {
			$('#' + currentLabel + ' .cards').append(search_arr[i]);
		}
		//search_arr[i].show();
		search_arr[i][0].style.display = "block";
		search_arr[i].initializeAndLimit(data.cards[i], ocg);
		
		/*var card = search_arr[i];
		TweenMax.set(card, {delay:0.005, onComplete:function(card){
			card[0].style.display = "block"; // search cards won't show up the first time without this
		}, onCompleteParams:[card, "card"]});*/
	}
	totalCardsSearched = data.total;
	$('#search').find('.page_txt').text(pageNumber);
	$('#search').find('.tot_pages_txt').text(Math.ceil(totalCardsSearched / 20));
	if ((pageNumber * 20) < totalCardsSearched) {
		$('#search').find('.search_next_btn').css("pointer-events", "all");
	}
	else {
		$('#search').find('.search_next_btn').css("pointer-events", "none");
	}
	if (pageNumber == 1) {
		$('#search').find('.search_prev_btn').css("pointer-events", "none");
	}
	else {
		$('#search').find('.search_prev_btn').css("pointer-events", "all");
	}
	if (awaiting_cards) {
		allCards = data.cards;
		awaiting_cards = false;
		//filterCards(); // why was this disabled? // because it was just the same as external interface searchCards but for flash
	}
}

function countSearch() {
	//$('.search_card').hide(); does not work if #search is hidden
	for (var i = 0; i < search_arr.length; i++) {
		search_arr[i].hide();
	}
}

function cardDownE(e) {
	if (currentLabel == "custom_cards") {
		editCardE(e);
		return;
	}
	var card = $(this);
	if (e.which == 3) {
		cardRightClickE(e, card);
		return;
	}
	draggedCard = newCardFront();
	draggedCard.css("transform", card.css("transform"));
	draggedCard.copyCard(card);
	draggedCard.setLimit($('#deck_constructor .ocg_limit_rb').prop("checked"));
}

function addCardDragging(card, start_callback, end_callback) {
	//card.mouseenter(previewE);
	card.on("mouseenter mousedown", previewE);
	card.mousedown(cardDownE);
	card.draggable({
		"scroll":false,
		"start":function(e, ui){
			draggedCard.find('.name_txt').css("transform", card.find('.name_txt').css("transform"));
			draggedCard = newCardFront(); // moved from down below 9/16/19
			draggedCard.copyCard(card);
			if (card.hasClass("search_card") && limitReached(card)) {
				$('#limit_reached').show();
				$('#limit_reached').css("left", card.css("left"));
				$('#limit_reached').css("top", card.css("top"));
				$('html').mouseup(hideLimitReached);
				e.preventDefault();
				return;
			}
			if (start_callback) {
				start_callback(card);
			}
			updateMouse(e);
			dragXOffset = mouseXScaled - parseInt(card.css("left"));
			dragYOffset = mouseYScaled - parseInt(card.css("top"));
			ui.position = {"left":mouseXScaled - dragXOffset, "top":mouseYScaled - dragYOffset};
		}, "helper":function(e, ui){
			return draggedCard;
		}, "drag":function(e, ui){
			updateMouse(e);
			ui.position = {"left":mouseXScaled - dragXOffset, "top":mouseYScaled - dragYOffset};
		}, "stop":function(){
			//draggedCard = newCardFront();
			//draggedCard.copyCard(card);
			end_callback(draggedCard);
		}
	});
	if (!mobile) {
		card.contextmenu(function(e){
			return false;
		});
	}
}

function addCounterDragging(el) {
    el.css("cursor", "pointer");
    el.draggable({
		"scroll":false,
		"start":function(e, ui){
            removedCounterCardId = 0;
            var cards;
            if (rush) {
                cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell];
            }
            else if (speed) {
                cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player1.skillCard, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell, player2.skillCard];
            }
            else if (links) {
                cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.fieldSpell, linkLeft, linkRight];
            }
            else {
                cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell];
            }
            for (var i = 0; i < counters.length; i++) {
                if (this == counters[i][0]) {
                    if (cards[i].data("controller") != Player1() || player1 != Player1()) {
                        return;
                    }
                    cards[i].data("counters", ~~cards[i].data("counters") - 1);
                    removedCounterCardId = cards[i].data("id");
                    updateCounters();
                }
            }
            $('#viewing').append(counter);
			//if (start_function) {
			//	start_function(e, $(ui));
			//}
			updateMouse(e);
			dragXOffset = mouseXScaled - parseInt($(this).css("left"));
			dragYOffset = mouseYScaled - parseInt($(this).css("top"));
		},
		"helper":function(e, ui){
			return counter;
		},
		"drag":function(e, ui){
			updateMouse(e);
			ui.position = {"left":mouseXScaled - dragXOffset, "top":mouseYScaled - dragYOffset};
		},
		"stop":function(e, ui){
            var addingCounter = false;
            counter.detach();
            var cards;
            if (rush) {
                cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell];
            }
            else if (speed) {
                cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player1.skillCard, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell, player2.skillCard];
            }
            else if (links) {
                cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.fieldSpell, linkLeft, linkRight];
            }
            else {
                cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell];
            }
            for (var i = 0; i < cards.length; i++) {
                if (cards[i]) {
                    if (cards[i].data("controller") == Player1() && !cards[i].data("face_down")) {
                        if (inBounds(cards[i].find('.content:first'))) {
                            if (removedCounterCardId == cards[i].data("id")) {
                                cards[i].data("counters", ~~cards[i].data("counters") + 1);
                                updateCounters();
                                removedCounterCardId = 0;
                                return;
                            }
                            addingCounter = true;
                            break;
                        }
                    }
                }
            }
            if (removedCounterCardId > 0) {
                Send({"action":"Duel", "play":"Remove counter", "card":removedCounterCardId});
            }
            if (addingCounter) {
                Send({"action":"Duel", "play":"Add counter", "card":cards[i].data("id")});
            }
			//if (end_function) {
			//	end_function(e, $(ui));
			//}
		}
	});
}

function enterHandler(e) {
	switch(e.which) {
		case 16: // shift
			shiftDown = true;
			$('html').keyup(onKeyUp);
			break;
		case 17: // control
		case 91: // command chrome
		case 224: // command firefix
			log('controlDown');
			controlDown = true;
			$('html').keyup(onKeyUp);
			break;
		case 65: // a
			if (controlDown) {
				setTimeout(function(){
					if (controlFocus[0] instanceof HTMLSpanElement || controlFocus[0] instanceof HTMLDivElement || controlFocus[0] instanceof HTMLFontElement) {
						if ($(':focus').length == 0 || $(':focus').attr("tabindex") == "0") {
							clearSelection();
							selectText(controlFocus[0]);
						}
					}
				}, 5);
			}
			break;
		case 32: // spacebar
			if ($(':focus').length == 1 && $(':focus').attr("tabindex") == "0") {
				$(':focus').click(); // intuitively triggers an exit btn that is in focus
			}
			break;
		case 37: // left
		case 38: // up
		case 39: // right
		case 40: // down
			arrowKeyE(e);
			break;
		case 33: // page up
		case 34: // page down
			e.preventDefault();
			$('html').trigger({type:"keydown", which:e.which == 33 ? 38 : 40});
			break;
		case 86: // v
			/*if (controlDown) {
				if (currentLabel == "deck_constructor" && !$(':focus').is('input[type="text"]') && !$(':focus').is('textarea') && navigator.clipboard && navigator.clipboard.readText) {
					navigator.clipboard.readText().then(function(clipText) {
						console.log(clipText);
						if (currentLabel == "deck_constructor" && isYDKE(clipText)) {
							importDeck(e, function(){
								importYDKE(clipText);
							});
						}
					});
				}
				//ydke://Uku8AlJLvAKiLhECoi4RAqIuEQIP53EFD+dxBQ/ncQU7GrUAOxq1ADsatQDooB8D6KAfA+igHwOVEMYAlRDGAJUQxgAqlWUB8O2NBSsKxgV6sp8Bn1ROANQnHAAWpdUAFqXVABal1QC5tZoDubWaA+8nUQDvJ1EA9H1bBfR9WwV99r8ALSP8Ai0j/AKwWWkBAC4NBaHVKgL7mjEDXqPAAQ==!cbIJAZoNGQDSG0EBRFO3AKQLewURubgFJn5DACZ+QwCVI6QCVRU3AlUVNwJes+cCw//YBNlqFQPXk6gE!47AqA2QJjwVkCY8FtcqUA7XKlAMh7i0DIe4tAyHuLQMHCMEEuxgRA7sYEQOD1/EFg9fxBYPX8QU6CWME!
			}*/
			break;
		case 13: // enter
			if (!$(':focus')[0]) {
				if ($('#msg').is(":visible")) {
					msgOK();
				}
				if ($('#link').is(":visible")) {
					msgOK();
				}
				if ($('#input').is(":visible")) {
					inputOK();
				}
				if ($('#input2').is(":visible")) {
					input2OK();
				}
				if ($('#confirm').is(":visible")) {
					confirmYes();
				}
				if ($('#confirm2').is(":visible")) {
					confirmYes();
				}
				if ($('#combo').is(":visible")) {
					comboOK();
				}
				if ($('#recaptcha_box').is(":visible")) {
					cancelCallback();
				}
				console.log('returning');
				return;
			}
			switch(currentLabel) {
				case "front_page":
					switch(document.activeElement) {
						case $('#login .username_txt')[0]:
						case $('#login .password_txt')[0]:
							performLogin();
							break;
						case $('#register .username_txt')[0]:
						case $('#register .password_txt')[0]:
						case $('#register .email_txt')[0]:
							performRegisterE();
							break;
						case $('#forgot_password .email_txt')[0]:
							performResetPassword();
							break;
					}
					break;
				case "duel_room":
					switch(document.activeElement) {
						case $('#filter .name_txt')[0]:
							loadGames();
							break;
					}
					break;
				case "custom_cards":
					switch(document.activeElement) {
						case $('#custom_cards .id_txt')[0]:
							loadCard(e);
							break;
					}
					break;
				case "profile_viewer":
				case "profile_viewer2":
					switch(document.activeElement) {
						case $('#profile_username_txt')[0]:
							loadProfile($('#profile_username_txt').val());
							break;
					}
					break;
				case "confirm_email":
					switch(document.activeElement) {
						case $('#confirm_email .confirm_email .email_txt')[0]:
							reconfirmEmailE();
								break;
					}
					break;
				case "messages":
					switch(document.activeElement) {
						case $('#messages .search_messages_txt')[0]:
							loadMessages();
							break;
					}
					break;
				case "browse_users":
					switch(document.activeElement) {
						//case document.querySelector('#browse_users .username_txt');
						case $('#browse_users .username_txt')[0]:
						case $('#browse_users .online_cb')[0]:
						case $('#browse_users .pics_cb')[0]:
						case $('#browse_users .all_genders_rb')[0]:
						case $('#browse_users .male_rb')[0]:
						case $('#browse_users .female_rb')[0]:
						case $('#browse_users .all_orientations_rb')[0]:
						case $('#browse_users .straight_rb')[0]:
						case $('#browse_users .gay_rb')[0]:
						case $('#browse_users .bi_rb')[0]:
						case $('#browse_users .matches_rb')[0]:
						case $('#browse_users .singles_rb')[0]:
						case $('#browse_users .rating_lower_txt')[0]:
						case $('#browse_users .rating_upper_txt')[0]:
						case $('#browse_users .rep_lower_txt')[0]:
						case $('#browse_users .rep_upper_txt')[0]:
						case $('#browse_users .location_txt')[0]:
						case $('#browse_users .language_txt')[0]:
						case $('#browse_users .social_cb')[0]:
						case $('#browse_users .distance_cb')[0]:
						case $('#browse_users .last_seen_txt')[0]:
						case $('#browse_users .order_cb')[0]:
						case $('#browse_users .following_cb')[0]:
						case $('#browse_users .friends_cb')[0]:
							browseUsers();
							break;
					}
					break;
				case "change_password":
					switch(document.activeElement) {
						case $('#change_password .current_txt')[0]:
						case $('#change_password .new_txt')[0]:
						case $('#change_password .confirm_txt')[0]:
							changePassword();
							break;
					}
					break;
				case "duel_records":
					switch(document.activeElement) {
						case $('#duel_records .username_txt')[0]:
						case $('#duel_records .type_cb')[0]:
						case $('#duel_records .period_cb')[0]:
							loadDuelRecords();
							break;
					}
				case "tournament_locator":
					switch(document.activeElement) {
						case $('#tournament_locator .store_search .tourney_cb')[0]:
						case $('#tournament_locator .store_search .location_txt')[0]:
						case $('#tournament_locator .store_search .position_cb')[0]:
							tourneySearchE();
							break;
					}
					break;
				case "moderator":
					switch(document.activeElement) {
						case $('#mute_user .username_txt')[0]:
						case $('#mute_user .seconds_txt')[0]:
						case $('#mute_user .forever_cb')[0]:
							muteUserE();
							break;
						case $('#unmute_user .username_txt')[0]:
							unmuteUserE();
							break;
						case $('#set_ignored .username_txt')[0]:
						case $('#set_ignored .forever_cb')[0]:
							setIgnoredE();
							break;
						case $('#unset_ignored .username_txt')[0]:
							unsetIgnoredE();
							break;
						case $('#check_statuses .username_txt')[0]:
							checkStatusesE();
							break;
						case $('#hide_messages .username_txt')[0]:
							hideMessagesE();
							break;
					}
					break;
				case "admin":
					switch(document.activeElement) {
						case $('#ban_status .username_txt')[0]:
							getBanStatusE();
							break;
						case $('#freeze_user .username_txt')[0]:
						case $('#freeze_user .days_rb')[0]:
						case $('#freeze_user .days_txt')[0]:
						case $('#freeze_user .forever_rb')[0]:
						case $('#freeze_user .reason_txt')[0]:
						case $('#freeze_user .strike_cb')[0]:
						case $('#freeze_user .all_accounts_cb')[0]:
							freezeUserE();
							break;
						case $('#unban_user .username_txt')[0]:
						case $('#unban_user .strike_cb')[0]:
						case $('#unban_user .all_accounts_cb')[0]:
							unbanUserE();
							break;
						case $('#kick_user .username_txt')[0]:
							kickUserE();
							break;
						case $('#warning_note .username_txt')[0]:
						case $('#warning_note .warning_txt')[0]:
						case $('#warning_note .strike_cb')[0]:
							addWarningE();
							break;
					}
					break;
				case "admin2":
					switch(document.activeElement) {
						case $('#ip_check .username_txt')[0]:
						case $('#ip_check .super_cb')[0]:
							checkIPE();
							break;
						case $('#computer_check .username_txt')[0]:
							checkCompE();
							break;
						case $('#admin_status .username_txt')[0]:
						case $('#admin_status .status_cb')[0]:
						case $('#admin_status .judge_cb')[0]:
							getAdminE();
							break;
						case $('#reset_stats .username_txt')[0]:
							resetStatsE();
							break;
						case $('#super_ban .username_txt')[0]:
						case $('#super_ban .reason_txt')[0]:
							superBanE();
							break;
					}
					break;
				case "admin3":
					switch(document.activeElement) {
						case $('#alerts .username_txt')[0]:
							loadAlerts();
							break;
						case $('#restricted_phrases .phrase_txt')[0]:
							loadRestrictedPhrases();
							break;
						case $('#change_username .current_txt')[0]:
						case $('#change_username .new_txt')[0]:
							changeUsername();
							break;
						case $('#terminate_account .username_txt')[0]:
							terminateAccountE();
							break;
						case $('#change_email .username_txt')[0]:
							getEmail();
							break;
						case $('#change_email .email_txt')[0]:
							changeEmail();
							break;
					}
					break;
				case "admin_actions":
					switch(document.activeElement) {
						case $('#admin_actions .admin_txt')[0]:
						case $('#admin_actions .user_txt')[0]:
						case $('#admin_actions .action_cb')[0]:
						case $('#admin_actions .limit_cb')[0]:
							loadAdminActions();
							break;
					}
					break;
				case "rps_start":
				case "tp_start":
				case "tp_start2":
				case "duel_start":
				case "duel_start2":
				case "duel_start3":
				case "duel_start4":
				case "siding":
					switch(document.activeElement) {
						case $('#duel .cin_txt')[0]:
							if ($('#duel .cin_txt').val() == "") {
								return;
							}
							Send({"action":"Duel", "play":"Duel message", "message":$('#duel .cin_txt').val(), "html":~~$('#duel .html_cb').is(":checked")});
							$('#duel .cin_txt').val("");
							break;
						case $('#duel #life_txt')[0]:
							lifeEnterHandler(e);
							break;
					}
					break;
			}
			switch(document.activeElement) {
				case $('#combo .combo_cb')[0]:
					comboOK();
					break;
				case $('#input .input_txt')[0]:
					inputOK();
					break;
				case $('#input2 .atk_txt')[0]:
				case $('#input2 .def_txt')[0]:
					input2OK();
					break;
				case $('#private_chat .cin_txt')[0]:
					privateMessage(e);
					break;
				case $('#public_chat .cin_txt')[0]:
					publicMessage();
					break;
				case $('#watch_chat .cin_txt')[0]:
					watcherMessage();
					break;
				case $('#calls .tools .username_txt')[0]:
				case $('#calls .days_rb')[0]:
				case $('#calls .days_txt')[0]:
				case $('#calls .forever_rb')[0]:
				case $('#calls .reason_txt')[0]:
				case $('#calls .strike_cb')[0]:
				case $('#calls .strikes_txt')[0]:
				case $('#calls .status_txt')[0]:
				case $('#calls .all_accounts_cb')[0]:
				case $('#calls .forever_rb')[0]:
					performAction();
					break;
				case $('#calls .search_txt')[0]:
					lookupCard($('#calls .search_txt').val());
					break;
				case $('#duel_log .search_txt')[0]:
					lookupCard($('#duel_log .search_txt').val());
					break;
				case $('#search .name_txt')[0]:
				case $('#search .desc_txt')[0]:
				case $('#search .lvll_txt')[0]:
				case $('#search .lvlh_txt')[0]:
				case $('#search .atkl_txt')[0]:
				case $('#search .atkh_txt')[0]:
				case $('#search .defl_txt')[0]:
				case $('#search .defh_txt')[0]:
				case $('#search .scalel_txt')[0]:
				case $('#search .scaleh_txt')[0]:
					searchCardsE(e);
					break;
			}
			break;
	}
}

function setCardImageStart(str) {
	if (str == "l") {
		CARD_IMAGES_START = IMAGES_START + 'small/';
	}
	if (str == "h") {
		CARD_IMAGES_START = IMAGES_START + 'card-pics/';
	}
	else {
		CARD_IMAGES_START = IMAGES_START + 'low-res/';
	}
}


function cardFavoriteE(id, name) {
	if (favorites.includes(id)) {
		getConfirmation("Remove Favorite Card", "Remove " + name + " from your favorite cards?", function(){
			removeFromArray(favorites, id);
			//messageE(name + " was removed from your favorite cards");
			Send({"action":"Remove favorite", "card":id});
			showDim();
		});
	}
	else {
		getConfirmation("Add Favorite Card", "Add " + name + " to your favorite cards?", function(){
			favorites.push(id);
			//messageE(name + " was added to your favorite cards");
			Send({"action":"Add favorite", "card":id});
			showDim();
		});
	}
	showDim();
}

function cardRightClickE(e, card) {
	$('html').contextmenu(function(){
		return false;
	});
	var holding = true;
	setTimeout(function(){
		if (holding) {
			$('html').off("mouseup");
			cardFavoriteE(card.data("id"), card.data("name"));
		}
	//}, 500); // received complaints
	}, 650);
	$('html').mouseup(function(){
		holding = false;
		if (card.attr("class").indexOf("search") >= 0) {
			if (!limitReached(card)) {
				draggedCard = newCardFront();
				draggedCard.copyCard(card);
				searchCardDrop(card, false);
			}
		}
		else {
			removeCardE(card);
		}
		setTimeout(function(){
			$('html').off("mouseup");
		}, 5);
	});
	setTimeout(function(){
		$('html').off("contextmenu");
	}, 5);
}

function removeCardE(card) {
	if (card.attr("class").indexOf("deck_card") >= 0) {
		removeCardFromMain(card);
	}
	else if (card.attr("class").indexOf("side_card") >= 0) {
		removeCardFromSide(card);
	}
	else if (card.attr("class").indexOf("extra_card") >= 0) {
		removeCardFromExtra(card);
	}
	else if (card.attr("class").indexOf("search_card") >= 0) {
		if (isExtraDeckCard(card)) {
			addCardToExtra(card);
		}
		else {
			addCardToMain(card);
		}
	}
}

function limitReached(card) {
	var amountAlreadyInDeck = 0;
	for (var i = 0; i < deck_filled_arr.length; i++) {
		if (deck_filled_arr[i].data("treated_as") == card.data("treated_as")) {
			amountAlreadyInDeck++;
		}
	}
	for (i = 0; i < side_filled_arr.length; i++) {
		if (side_filled_arr[i].data("treated_as") == card.data("treated_as")) {
			amountAlreadyInDeck++;
		}
	}
	for (i = 0; i < extra_filled_arr.length; i++) {
		if (extra_filled_arr[i].data("treated_as") == card.data("treated_as")) {
			amountAlreadyInDeck++;
		}
	}
	var restriction = card.data("tcg_limit");
	if ($('#deck_constructor .ocg_limit_rb').prop("checked")) {
		restriction = card.data("ocg_limit");
	}
	if (amountAlreadyInDeck >= restriction && amountAlreadyInDeck > 0 && !$('.bypass_limit_cb').prop("checked") || amountAlreadyInDeck >= 3) {
		return true;
	}
	return false;
}

function hideLimitReached() {
	$('#limit_reached').hide();
	$('html').off("mouseup", hideLimitReached);
}

function searchCardDrop(card, adding) {
	if (currentLabel == "tournaments") {
		if (inBounds($('.forbidden_section .banlist_cards'))) {
			addToBanlist(card, $('.forbidden_section .banlist_cards'));
		}
		if (inBounds($('.limited_section .banlist_cards'))) {
			addToBanlist(card, $('.limited_section .banlist_cards'));
		}
		if (inBounds($('.semi_limited_section .banlist_cards'))) {
			addToBanlist(card, $('.semi_limited_section .banlist_cards'));
		}
		if (inBounds($('.unlimited_section .banlist_cards'))) {
			addToBanlist(card, $('.unlimited_section .banlist_cards'));
		}
		return;
	}
	
	if (adding !== false) {
		adding = true;
	}
	if ($('#delete_deck_btn').prop("disabled")) {
		return;
	}
	if (adding) {
		if (inBounds($('#deck_mask')) && !isExtraDeckCard(card)) {
			addCardToMain(draggedCard, getUnderlyingDeckCard());
		}
		if (inBounds($('#side_mask'))) {
			addCardToSide(draggedCard, getUnderlyingSideCard());
		}
		if (inBounds($('#extra_mask')) && isExtraDeckCard(card)) {
			addCardToExtra(draggedCard, getUnderlyingDeckCard());
		}
	}
	else {
		if (shiftDown || controlDown) {
			addCardToSide(draggedCard);
		}
		else if (isExtraDeckCard(draggedCard)) {
			addCardToExtra(draggedCard);
		}
		else {
			addCardToMain(draggedCard);
		}
	}
	$('#clear_btn').val("Clear Deck");
}

function deckCardDrop(card, adding) {
	if (adding !== false) {
		adding = true;
	}
	if (adding) {
		if (inBounds($('#deck_mask')) && !isExtraDeckCard(card)) {
			addCardToMain(card, getUnderlyingDeckCard());
		}
		if (inBounds($('#side_mask'))) {
			addCardToSide(card, getUnderlyingSideCard());
		}
		if (inBounds($('#extra_mask')) && isExtraDeckCard(card)) {
			addCardToExtra(card, getUnderlyingDeckCard());
		}
	}
	$('#clear_btn').val("Clear Deck");
}

function sideCardDrop(card, adding) {
	if (adding !== false) {
		adding = true;
	}
	if (adding) {
		if (inBounds($('#deck_mask')) && !isExtraDeckCard(card)) {
			addCardToMain(card, getUnderlyingDeckCard());
		}
		if (inBounds($('#side_mask'))) {
			addCardToSide(card, getUnderlyingSideCard());
		}
		if (inBounds($('#extra_mask')) && isExtraDeckCard(card)) {
			addCardToExtra(card, getUnderlyingExtraCard());
		}
	}
	$('#clear_btn').val("Clear Deck");
}

function extraCardDrop(card, adding) {
	if (adding !== false) {
		adding = true;
	}
	if (adding) {
		if (inBounds($('#deck_mask')) && !isExtraDeckCard(card)) {
			addCardToMain(card, getUnderlyingDeckCard());
		}
		if (inBounds($('#side_mask'))) {
			addCardToSide(card, getUnderlyingSideCard());
		}
		if (inBounds($('#extra_mask')) && isExtraDeckCard(card)) {
			addCardToExtra(card, getUnderlyingExtraCard());
		}
	}
	$('#clear_btn').val("Clear Deck");
}

function removeCardFromMain(card) {
	cardsInMain--;
	var ocg = $('#' + currentLabel + ' .ocg_limit_rb').is(":checked");
	for (var i = 0; i < deck_filled_arr.length; i++) {
		if (card.attr("id") == "deck_card" + (i + 1)) {
			deck_filled_arr.splice(i, 1);
			for (var j = i; j < deck_filled_arr.length; j++) {
				if (deck_arr[j].data("id") != deck_filled_arr[j].data("id")) {
					deck_arr[j].copyCard(deck_filled_arr[j]);
					deck_arr[j].setLimit(ocg);
				}
			}
			break;
		}
	}
	countMain();
	setUnsavedChanges();
}

function removeCardFromSide(card) {
	cardsInSide--;
	var ocg = $('#' + currentLabel + ' .ocg_limit_rb').is(":checked");
	for (var i = 0; i < side_filled_arr.length; i++) {
		if (card.attr("id") == "side_card" + (i + 1)) {
			side_filled_arr.splice(i, 1);
			for (var j = i; j < side_filled_arr.length; j++) {
				if (side_arr[j].data("id") != side_filled_arr[j].data("id")) {
					side_arr[j].copyCard(side_filled_arr[j]);
					side_arr[j].setLimit(ocg);
				}
			}
			break;
		}
	}
	countSide();
	setUnsavedChanges();
}

function removeCardFromExtra(card) {
	cardsInExtra--;
	var ocg = $('#' + currentLabel + ' .ocg_limit_rb').is(":checked");
	for (var i = 0; i < extra_filled_arr.length; i++) {
		if (card.attr("id") == "extra_card" + (i + 1)) {
			extra_filled_arr.splice(i, 1);
			for (var j = i; j < extra_filled_arr.length; j++) {
				if (extra_arr[j].data("id") != extra_filled_arr[j].data("id")) {
					extra_arr[j].copyCard(extra_filled_arr[j]);
					extra_arr[j].setLimit(ocg);
				}
			}
			break;
		}
	}
	countExtra();
	setUnsavedChanges();
}

function setUnsavedChanges() {
	if (currentLabel != "siding") {
		unsavedChanges = true;
		active = true;
	}
}

function trace(str) {
	console.log(str);
}

function confirmExit() {
	if (active) {
		return "You are leaving Duelingbook!";
	}
	/*if (websocket) {
		websocket.onclose = null;
		websocket.onerror = null;
		websocket.close();
	}*/
	if (websocket) {
		websocket.onclose = function(){};
		websocket.onerror = function(){};
		websocket.close();
	}
	console.log('cleaning up');
	$('.cardfront').detach();
	$('.card').detach();
}

function searchCardsE(e) {
	var arrows = "";
	arrows += ~~($('#search').find('.arrow1 img').attr("src").indexOf("red") >= 0);
	arrows += ~~($('#search').find('.arrow2 img').attr("src").indexOf("red") >= 0);
	arrows += ~~($('#search').find('.arrow3 img').attr("src").indexOf("red") >= 0);
	arrows += ~~($('#search').find('.arrow4 img').attr("src").indexOf("red") >= 0);
	arrows += ~~($('#search').find('.arrow5 img').attr("src").indexOf("red") >= 0);
	arrows += ~~($('#search').find('.arrow6 img').attr("src").indexOf("red") >= 0);
	arrows += ~~($('#search').find('.arrow7 img').attr("src").indexOf("red") >= 0);
	arrows += ~~($('#search').find('.arrow8 img').attr("src").indexOf("red") >= 0);
	var order = $('#search').find('.order_cb').val();
	saved_search = {
		"name": $('#search').find('.name_txt').val().trim(),
		"effect": $('#search').find('.desc_txt').val(),
		"card_type": $('#search').find('.card_cb').val(),
		"monster_color": $('#search').find('.card2_cb').val(),
		"type": str($('#search').find('.type_cb').val()),
		"ability": $('#search').find('.type2_cb').val(),
		"attribute": $('#search').find('.attrib_cb').val(),
		"level_low": $('#search').find('.lvll_txt').val(),
		"level_high": $('#search').find('.lvlh_txt').val(),
		"atk_low": $('#search').find('.atkl_txt').val(),
		"atk_high": $('#search').find('.atkh_txt').val(),
		"def_low": $('#search').find('.defl_txt').val(),
		"def_high": $('#search').find('.defh_txt').val(),
		"limit": $('#search').find('.limit_cb').val(),
		//"order": $('#search').find('.order_cb').val(),
		"order": order != "Alpha" ? order : null,
		"pendulum": ~~($('#search').find('.pendulum_cb').prop("checked")),
		"scale_low": $('#search').find('.scalel_txt').val(),
		"scale_high": $('#search').find('.scaleh_txt').val(),
		"tcg": ~~($('#search').find('.tcg_cb').prop("checked")),
		"ocg": ~~($('#search').find('.ocg_cb').prop("checked")),
		"ocg_list": ~~($('#' + currentLabel + ' .ocg_limit_rb').prop("checked")),
		//"arrows":arrows,
		"arrows": arrows.includes("1") ? arrows : null,
		"custom": ~~($('#search').find('.custom_cb').val()),
	};
	pageNumber = 1;
	if ($('#search .name_txt').val().length >= 3 || $('#search .desc_txt').val().length >= 3) {
		update_search = false;
	}
	searchCards(e);
}

function searchCardsE2(e) {
	if ($('#search .custom_cb').val() != 0) {
		return;
	}
	if (this === $('#search .name_txt')[0] || this === $('#search .desc_txt')[0]) {
		if ($(this).val().length >= 3) {
			//update_search = true;
			searchCardsE();
		}
		if ($(this).val().length < 3 && search_arr.length > 0 && search_arr[0].is(":visible")) {
			if (e.which != 8) {
				return;
			}
			countSearch();
			return;
		}
	}
}



function searchCards(e) {
	if (saved_search == null) {
		log('g');
		return;
	}
	log('h');
	if (e) {
		showDim();
		$('#dim').css("pointer-events", "none");
	}
	if (awaiting_cards) {
		return;
	}
	awaiting_cards = true;
	var search = {"action":"Search cards", "search":saved_search, "page":~~pageNumber};
	//if (!cards_fingerprint || saved_search.custom > 0) {
	if (!cards_fingerprint || saved_search.custom != 0 && saved_search.custom != 6) {
		filterObject(search.search);
		Send(search);
		return;
	}
	console.log(search);
	console.log(search.search);
	searching = true;
	var name = saved_search.name;
	var effect = saved_search.effect;
	var card_type = saved_search.card_type;
	var monster_color = saved_search.monster_color;
	var type = str(saved_search.type);
	var ability = saved_search.ability;
	var attribute = saved_search.attribute;
	var level_low = saved_search.level_low;
	var level_high = saved_search.level_high;
	var atk_low = saved_search.atk_low;
	var atk_high = saved_search.atk_high;
	var def_low = saved_search.def_low;
	var def_high = saved_search.def_high;
	var limit = saved_search.limit;
	var order = saved_search.order ?? "Alpha";
	var pendulum = saved_search.pendulum;
	var scale_low = saved_search.scale_low;
	var scale_high = saved_search.scale_high;
	var tcg = saved_search.tcg;
	var ocg = saved_search.ocg;
	var ocg_list = saved_search.ocg_list;
	var arrows = saved_search.arrows ?? "00000000";
	var custom_cards = saved_search.custom;
	/*	var name = saved_search.name ?? "";
	var effect = saved_search.effect ?? "";
	var card_type = saved_search.card_type ?? "";
	var monster_color = saved_search.monster_color ?? "";
	var type = str(saved_search.type) ?? "";
	var ability = saved_search.ability ?? "";
	var attribute = saved_search.attribute ?? "";
	var level_low = saved_search.level_low ?? "";
	var level_high = saved_search.level_high ?? "";
	var atk_low = saved_search.atk_low ?? "";
	var atk_high = saved_search.atk_high ?? "";
	var def_low = saved_search.def_low ?? "";
	var def_high = saved_search.def_high ?? "";
	var limit = saved_search.limit ?? "";
	var order = saved_search.order ?? "";
	var pendulum = saved_search.pendulum ?? 0;
	var scale_low = saved_search.scale_low ?? "";
	var scale_high = saved_search.scale_high ?? "";
	var tcg = saved_search.tcg ?? 0;
	var ocg = saved_search.ocg ?? 0;
	var ocg_list = saved_search.ocg_list ?? 0;
	var arrows = saved_search.arrows ?? "";
	var custom_cards = saved_search.custom ?? 0; // not even used here*/
	var total = 0;
	var page = pageNumber;
		page = (20 * page) - 20;
	var full_search = false;
	var cards = [];
	if (name.length >= 3 || effect.length >= 3) {
		//full_search = true;
	}
	var names = name.toLowerCase().split('*');
	var effects = effect.toLowerCase().split('*');
	var cards0 = Cards.slice();
	switch(order) {
		case "Date":
		case "Release Date":
			cards0.sort(sortCardsByDate);
			break;
		case "Updated":
		case "Last Updated":
			cards0.sort(sortCardsByUpdated);
			break;
		case "Alpha":
			cards0.sort(sortCards);
			break;
		default:
		case "New First":
			cards0.reverse();
			break;
	}
	outerloop:
	for (var i = 0; i < cards0.length; i++) {
		if (cards0[i].name == null) {
			continue;
		}
		if (cards0[i].name == "") {
			continue;
		}
		if (cards0[i].hidden == 1) {
			continue;
		}
		if (saved_search.custom == 0 && cards0[i].rush) {
			continue;
		}
		if (saved_search.custom == 6 && !cards0[i].rush) {
			continue;
		}
		for (var j = 0; j < names.length; j++) {
			if (cards0[i].name_lowercase.indexOf(names[j]) < 0) {
				continue outerloop;
			}
		}
		for (var j = 0; j < effects.length; j++) {
			if (cards0[i].effect_lowercase.indexOf(effects[j]) < 0 && (!cards0[i].pendulum_effect || cards0[i].pendulum_effect_lowercase.indexOf(effects[j]) < 0)) {
				continue outerloop;
			}
		}
		if (full_search == true) {
			cards.push(cards0[i]);
			total++;
			continue;
		}
		if (card_type != "") {
			if (cards0[i].card_type.indexOf(card_type) < 0) {
				continue;
			}
		}
		if (monster_color != "") {
			if (monster_color == "Pendulum") {
				if (cards0[i].pendulum != 1) {
					continue;
				}
			}
			else if (!cards0[i].monster_color || cards0[i].monster_color.indexOf(monster_color) < 0) {
				continue;
			}
		}
		if (type != "") {
			if (cards0[i].type != type) {
				continue;
			}
		}
		if (ability != "") {
			if (!cards0[i].ability || cards0[i].ability.indexOf(ability) < 0) {
				continue;
			}
		}
		if (attribute != "") {
			if (cards0[i].attribute.indexOf(attribute) < 0) {
				continue;
			}
		}
		if (level_low != "") {
			if (cards0[i].card_type != "Monster" || cards0[i].level < parseInt(level_low)) {
				continue;
			}
		}
		if (level_high != "") {
			if (cards0[i].card_type != "Monster" || cards0[i].level > parseInt(level_high)) {
				continue;
			}
		}
		if (atk_low != "") {
			if (atk_low == "?") {
				if (cards0[i].atk != "?") {
					continue;
				}
			}
			else {
				if (cards0[i].atk == "?") {
					continue;
				}
				if (cards0[i].card_type != "Monster" || cards0[i].atk < parseInt(atk_low)) {
					continue;
				}
			}
		}
		if (atk_high != "") {
			if (atk_high == "?") {
				if (cards0[i].atk != "?") {
					continue;
				}
			}
			else {
				if (cards0[i].atk == "?") {
					continue;
				}
				if (cards0[i].card_type != "Monster" || cards0[i].atk > parseInt(atk_high)) {
					continue;
				}
			}
		}
		if (def_low != "") {
			if (def_low == "?") {
				if (cards0[i].def != "?") {
					continue;
				}
			}
			else {
				if (cards0[i].def == "?") {
					continue;
				}
				if (cards0[i].card_type != "Monster" || cards0[i].def < parseInt(def_low)) {
					continue;
				}
			}
		}
		if (def_high != "") {
			if (def_high == "?") {
				if (cards0[i].def != "?") {
					continue;
				}
			}
			else {
				if (cards0[i].def == "?") {
					continue;
				}
				if (cards0[i].card_type != "Monster" || cards0[i].def > parseInt(def_high)) {
					continue;
				}
			}
		}
		if (pendulum == 1) {
			if (cards0[i].pendulum != 1) {
				continue;
			}
		}
		if (scale_low != "") {
			if (cards0[i].pendulum != 1 || cards0[i].scale < parseInt(scale_low)) {
				continue;
			}
		}
		if (scale_high != "") {
			if (cards0[i].pendulum != 1 || cards0[i].scale > parseInt(scale_high)) {
				continue;
			}
		}
		if (tcg == 1 || ocg == 1) {
			if (tcg == 1 && cards0[i].tcg == 0) {
				continue;
			}
			if (ocg == 1 && cards0[i].ocg == 0) {
				continue;
			}
		}
		if (limit != "") {
			if (saved_search.custom == 6) {
				if (cards0[i].ocg_limit == null) {
					cards0[i].ocg_limit = 3;
				}
				if (cards0[i].ocg_limit != parseInt(limit)) {
					if (cards0[i].rush != 2) {
						continue;
					}
				}
			}
			else if (ocg_list == 1) {
				if (cards0[i].ocg_limit == null) {
					cards0[i].ocg_limit = 3;
				}
				if (cards0[i].ocg_limit != parseInt(limit)) {
					continue;
				}
			}
			else {
				if (cards0[i].tcg_limit == null) {
					cards0[i].tcg_limit = 3;
				}
				if (cards0[i].tcg_limit != parseInt(limit)) {
					continue;
				}
			}
		}
		if (arrows != "00000000") {
			if (!cards0[i].arrows) {
				continue;
			}
			if (arrows.substring(0, 1) == "1" && cards0[i].arrows.substring(0, 1) != "1") {
				continue;
			}
			if (arrows.substring(1, 2) == "1" && cards0[i].arrows.substring(1, 2) != "1") {
				continue;
			}
			if (arrows.substring(2, 3) == "1" && cards0[i].arrows.substring(2, 3) != "1") {
				continue;
			}
			if (arrows.substring(3, 4) == "1" && cards0[i].arrows.substring(3, 4) != "1") {
				continue;
			}
			if (arrows.substring(4, 5) == "1" && cards0[i].arrows.substring(4, 5) != "1") {
				continue;
			}
			if (arrows.substring(5, 6) == "1" && cards0[i].arrows.substring(5, 6) != "1") {
				continue;
			}
			if (arrows.substring(6, 7) == "1" && cards0[i].arrows.substring(6, 7) != "1") {
				continue;
			}
			if (arrows.substring(7, 8) == "1" && cards0[i].arrows.substring(7, 8) != "1") {
				continue;
			}
		}
		total++;
		if ((total > page && total <= page + 20) && full_search == false) {
			cards.push(cards0[i]);
		}
	}
	var result = {
		"action":"Search cards",
		"cards":cards,
		"total":total,
		"full_search":full_search
	};
	searchCardsResponse(result);
}

function searchCardsNextPage(e) {
	if (!saved_search) {
		return;
	}
	if ((pageNumber * 20) < totalCardsSearched) {
		pageNumber++;
		/*if (full_search) {
			filterCards(null, false); // doesn't work, so don't use full_search
		}
		else {
			searchCards(e);
		}*/
		searchCards(e);
	}
}

function searchCardsPageE(e, n) {
	if (saved_search == null) {
		return;
	}
	if (n < 1) {
		n = 1;
	}
	if (n > ~~$('.tot_pages_txt').text()) {
		n = ~~$('.tot_pages_txt').text();
	}
	pageNumber = n;
	if (pageNumber == ~~$('.page_txt')) {
		return;
	}
	searchCards(e);
}

function searchCardsPrevPage(e) {
	if (saved_search == null) {
		return;
	}
	if (pageNumber > 1) {
		pageNumber--;
		/*if (full_search) {
			filterCards(null, false);
		}
		else {
			searchCards(e);
		}*/
		searchCards(e);
	}
}

function loadCards(fingerprint) {
	cards_fingerprint = fingerprint;
	$.getJSON('https://static.duelingbook.com/cards.json?version=' + fingerprint, function(data) {
		Cards = data;
		for (var i = 0; i < Cards.length; i++) {
			if (Cards[i].n == "") {
				Cards.splice(i, 1);
				i--;
			}
			fixCardData(Cards[i]);
		}
	});
}

function cardsLoaded() {
	return cards_fingerprint;
}

function sortCards(a,b) {
	/*if (a == null) {
		return 0;
	}
	if (b == null) {
		return 0;
	}
	if (a.name == null) {
		return 0;
	}
	if (b.name == null) {
		return 0;
	}*/
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
}

function sortCardsByDate(a,b) {
	if (a.date && !b.date) {
		return -1;
	}
	if (!a.date && b.date) {
		return 1;
	}
	if (!a.date && !b.date) {
		//return sortCards(a,b);
		return 0;
	}
	
	if (a.date < b.date) {
		return -1;
	}
	if (a.date > b.date) {
		return 1;
	}
	return sortCards(a,b);
}

function sortCardsByUpdated(a,b) {
	if (a.updated && !b.updated) {
		return -1;
	}
	if (!a.updated && b.updated) {
		return 1;
	}
	if (!a.updated && !b.updated) {
		return 0;
	}
	if (a.updated > b.updated) {
		return -1;
	}
	if (a.updated < b.updated) {
		return 1;
	}
	return sortCards(a,b);
}

function lookupCard(str) {
	if (!str) {
		return;
	}
	var card = null;
	for (var i = 0; i < Cards.length; i++) {
		if (Cards[i] == null || Cards[i].name == null) {
			continue;
		}
		if (Cards[i].name.toLowerCase() == str.toLowerCase()) {
			card = Cards[i];
			break;
		}
		else if (Cards[i].name.toLowerCase().indexOf(str.toLowerCase()) >= 0) {
			card = Cards[i];
		}
	}
	if (card) {
		var cardfront = newCardFront();
		cardfront.initializeFromData(card);
		previewFront(cardfront);
	}
}

function getCard(id) { // is this ever used?
	//return JSON.stringify(Cards[id - 1]);
	return Cards[id - 1];
}

function getCard(id) {
	for (var i = 0; i < Cards.length; i++) {
		if (Cards[i].id == id) {
			return Cards[i];
		}
	}
	return null;
}

function getCard(id) {
	//return Cards.find(card => card.id === id) || null;
}

function getCard(id) {
	return Cards.find(function(card){
		return card.id == id;
	});
}

function getCardByPasscode(passcode) {
	return Cards.find(function(card){
		return card.serial_number == passcode;
	});
}






function lengthen(str, length) {
	while (str.length < length) {
		str += " ";
	}
	return str;
}

function exitKDE() {
	$('#kde').hide();
}

function updateDecklist() {
	$('#decklist_form .fullname_txt').text($('#kde_decklist .fullname_txt').val());
	var month = lengthen($('#kde_decklist .month_txt').val(), 2);
	$('#decklist_form .date1_txt').text(month[0]);
	$('#decklist_form .date2_txt').text(month[1]);
	var day = lengthen($('#kde_decklist .day_txt').val(), 2);
	$('#decklist_form .date3_txt').text(day[0]);
	$('#decklist_form .date4_txt').text(day[1]);
	var year = lengthen($('#kde_decklist .year_txt').val(), 4);
	$('#decklist_form .date5_txt').text(year[0]);
	$('#decklist_form .date6_txt').text(year[1]);
	$('#decklist_form .date7_txt').text(year[2]);
	$('#decklist_form .date8_txt').text(year[3]);
	$('#decklist_form .initial_txt').text($('#kde_decklist .initial_txt').val().toUpperCase());
	var id = lengthen($('#kde_decklist .id_txt').val(), 10);
	$('#decklist_form .id1_txt').text(id[0]);
	$('#decklist_form .id2_txt').text(id[1]);
	$('#decklist_form .id3_txt').text(id[2]);
	$('#decklist_form .id4_txt').text(id[3]);
	$('#decklist_form .id5_txt').text(id[4]);
	$('#decklist_form .id6_txt').text(id[5]);
	$('#decklist_form .id7_txt').text(id[6]);
	$('#decklist_form .id8_txt').text(id[7]);
	$('#decklist_form .id9_txt').text(id[8]);
	$('#decklist_form .id10_txt').text(id[9]);
	$('#decklist_form .event_txt').text($('#kde_decklist .event_txt').val());
	if ($('#kde_decklist .show_totals_cb').is(":checked")) {
		$('#decklist_form .total_monsters_txt').show();
		$('#decklist_form .total_spells_txt').show();
		$('#decklist_form .total_traps_txt').show();
		$('#decklist_form .total_side_txt').show();
		$('#decklist_form .total_extra_txt').show();
		$('#decklist_form .total_main_txt').show();
	}
	else {
		$('#decklist_form .total_monsters_txt').hide();
		$('#decklist_form .total_spells_txt').hide();
		$('#decklist_form .total_traps_txt').hide();
		$('#decklist_form .total_side_txt').hide();
		$('#decklist_form .total_extra_txt').hide();
		$('#decklist_form .total_main_txt').hide();
	}
	setText($('#decklist_form .fullname_txt'));
	setText($('#decklist_form .event_txt'));
}

function updateRegistration() {
	var firstname = lengthen($('#kde_registration .firstname_txt').val().toUpperCase(), 13);
	$('#registration_form .firstname1_txt').text(firstname[0]);
	$('#registration_form .firstname2_txt').text(firstname[1]);
	$('#registration_form .firstname3_txt').text(firstname[2]);
	$('#registration_form .firstname4_txt').text(firstname[3]);
	$('#registration_form .firstname5_txt').text(firstname[4]);
	$('#registration_form .firstname6_txt').text(firstname[5]);
	$('#registration_form .firstname7_txt').text(firstname[6]);
	$('#registration_form .firstname8_txt').text(firstname[7]);
	$('#registration_form .firstname9_txt').text(firstname[8]);
	$('#registration_form .firstname10_txt').text(firstname[9]);
	$('#registration_form .firstname11_txt').text(firstname[10]);
	$('#registration_form .firstname12_txt').text(firstname[11]);
	$('#registration_form .firstname13_txt').text(firstname[12]);
	$('#registration_form .middlename_txt').text($('#kde_registration .middlename_txt').val().toUpperCase());
	var lastname = lengthen($('#kde_registration .lastname_txt').val().toUpperCase(), 26);
	$('#registration_form .lastname1_txt').text(lastname[0]);
	$('#registration_form .lastname2_txt').text(lastname[1]);
	$('#registration_form .lastname3_txt').text(lastname[2]);
	$('#registration_form .lastname4_txt').text(lastname[3]);
	$('#registration_form .lastname5_txt').text(lastname[4]);
	$('#registration_form .lastname6_txt').text(lastname[5]);
	$('#registration_form .lastname7_txt').text(lastname[6]);
	$('#registration_form .lastname8_txt').text(lastname[7]);
	$('#registration_form .lastname9_txt').text(lastname[8]);
	$('#registration_form .lastname10_txt').text(lastname[9]);
	$('#registration_form .lastname11_txt').text(lastname[10]);
	$('#registration_form .lastname12_txt').text(lastname[11]);
	$('#registration_form .lastname13_txt').text(lastname[12]);
	$('#registration_form .lastname14_txt').text(lastname[13]);
	$('#registration_form .lastname15_txt').text(lastname[14]);
	$('#registration_form .lastname16_txt').text(lastname[15]);
	$('#registration_form .lastname17_txt').text(lastname[16]);
	$('#registration_form .lastname18_txt').text(lastname[17]);
	$('#registration_form .lastname19_txt').text(lastname[18]);
	$('#registration_form .lastname20_txt').text(lastname[19]);
	$('#registration_form .lastname21_txt').text(lastname[20]);
	$('#registration_form .lastname22_txt').text(lastname[21]);
	$('#registration_form .lastname23_txt').text(lastname[22]);
	$('#registration_form .lastname24_txt').text(lastname[23]);
	$('#registration_form .lastname25_txt').text(lastname[24]);
	$('#registration_form .lastname26_txt').text(lastname[25]);
	var id = lengthen($('#kde_registration .id_txt').val().toUpperCase(), 10);
	$('#registration_form .id1_txt').text(id[0]);
	$('#registration_form .id2_txt').text(id[1]);
	$('#registration_form .id3_txt').text(id[2]);
	$('#registration_form .id4_txt').text(id[3]);
	$('#registration_form .id5_txt').text(id[4]);
	$('#registration_form .id6_txt').text(id[5]);
	$('#registration_form .id7_txt').text(id[6]);
	$('#registration_form .id8_txt').text(id[7]);
	$('#registration_form .id9_txt').text(id[8]);
	$('#registration_form .id10_txt').text(id[9]);
	var month = lengthen($('#kde_registration .month_txt').val(), 2);
	$('#registration_form .dob1_txt').text(month[0]);
	$('#registration_form .dob2_txt').text(month[1]);
	var day = lengthen($('#kde_registration .day_txt').val(), 2);
	$('#registration_form .dob3_txt').text(day[0]);
	$('#registration_form .dob4_txt').text(day[1]);
	var year = lengthen($('#kde_registration .year_txt').val(), 4);
	$('#registration_form .dob5_txt').text(year[0]);
	$('#registration_form .dob6_txt').text(year[1]);
	$('#registration_form .dob7_txt').text(year[2]);
	$('#registration_form .dob8_txt').text(year[3]);
	$('#registration_form .event_txt').text($('#kde_registration .event_txt').val());
	$('#registration_form .country_txt').text($('#kde_registration .residence_txt').val());
	var email = lengthen($('#kde_registration .email_txt').val().toUpperCase(), 22);
	$('#registration_form .email1_txt').text(email[0]);
	$('#registration_form .email2_txt').text(email[1]);
	$('#registration_form .email3_txt').text(email[2]);
	$('#registration_form .email4_txt').text(email[3]);
	$('#registration_form .email5_txt').text(email[4]);
	$('#registration_form .email6_txt').text(email[5]);
	$('#registration_form .email7_txt').text(email[6]);
	$('#registration_form .email8_txt').text(email[7]);
	$('#registration_form .email9_txt').text(email[8]);
	$('#registration_form .email10_txt').text(email[9]);
	$('#registration_form .email11_txt').text(email[10]);
	$('#registration_form .email12_txt').text(email[11]);
	$('#registration_form .email13_txt').text(email[12]);
	$('#registration_form .email14_txt').text(email[13]);
	$('#registration_form .email15_txt').text(email[14]);
	$('#registration_form .email16_txt').text(email[15]);
	$('#registration_form .email17_txt').text(email[16]);
	$('#registration_form .email18_txt').text(email[17]);
	$('#registration_form .email19_txt').text(email[18]);
	$('#registration_form .email20_txt').text(email[19]);
	$('#registration_form .email21_txt').text(email[20]);
	$('#registration_form .email22_txt').text(email[21]);
	var month2 = lengthen($('#kde_registration .month2_txt').val(), 2);
	$('#registration_form .date1_txt').text(month2[0]);
	$('#registration_form .date2_txt').text(month2[1]);
	var day2 = lengthen($('#kde_registration .day2_txt').val(), 2);
	$('#registration_form .date3_txt').text(day2[0]);
	$('#registration_form .date4_txt').text(day2[1]);
	var year2 = lengthen($('#kde_registration .year2_txt').val(), 4);
	$('#registration_form .date5_txt').text(year2[0]);
	$('#registration_form .date6_txt').text(year2[1]);
	$('#registration_form .date7_txt').text(year2[2]);
	$('#registration_form .date8_txt').text(year2[3]);
	setText($('#registration_form .middlename_txt'));
	setText($('#registration_form .event_txt'));
	setText($('#registration_form .country_txt'));
}

function printRegistration0() {
	var mywindow = window.open('', 'PRINT', 'height=1091, width=843');
	mywindow.document.write('<html><head>');
	var css = '@page { size: auto; margin: 0mm; } @font-face { font-family: "Arial"; src: url("fonts/Arial.eot"); src: url("fonts/Arial.eot?#iefix") format("embedded-opentype"),  url("fonts/Arial.svg#Arial") format("svg"),  url("fonts/Arial.ttf") format("truetype"),  url("fonts/Arial.woff") format("woff"),  url("fonts/Arial.woff2") format("woff2"); } ';
	var css = ' span, .content { position: absolute; left: 0px; top: 0px; font-family: "Arial", sans-serif; } .content { transform: scale(1.44); transform-origin: top left; } ';
	//css += ' .content { transform: scale(1.63); left: 7px; top: 8px; }'; // looks good at first, but prints badly
	//css += ' .content { transform: scale(1.3); left: 1px; top: 4px; }'; // looks good at first, but prints badly
	css += ' #registration_form span { width: 258px; font-size: 11.5px; width: 18px; height: 17px; margin-left: -3px; text-align: center; font-size: 14px; } #registration_form .firstname1_txt { left: 66px; top: 33.5px; } #registration_form .firstname2_txt { left: 86px; top: 33.5px; } #registration_form .firstname3_txt { left: 106px; top: 33.5px; } #registration_form .firstname4_txt { left: 126px; top: 33.5px; } #registration_form .firstname5_txt { left: 146px; top: 33.5px; } #registration_form .firstname6_txt { left: 166px; top: 33.5px; } #registration_form .firstname7_txt { left: 186px; top: 33.5px; } #registration_form .firstname8_txt { left: 206px; top: 33.5px; } #registration_form .firstname9_txt { left: 226px; top: 33.5px; } #registration_form .firstname10_txt { left: 246px; top: 33.5px; } #registration_form .firstname11_txt { left: 266px; top: 33.5px; } #registration_form .firstname12_txt { left: 286px; top: 33.5px; } #registration_form .firstname13_txt { left: 306px; top: 33.5px; } #registration_form .middlename_txt { left: 366px; top: 33.5px; width: 218px; text-align: left; margin-left: 1px; } #registration_form .lastname1_txt { left: 66px; top: 56px; } #registration_form .lastname2_txt { left: 86px; top: 56px; } #registration_form .lastname3_txt { left: 106px; top: 56px; } #registration_form .lastname4_txt { left: 126px; top: 56px; } #registration_form .lastname5_txt { left: 146px; top: 56px; } #registration_form .lastname6_txt { left: 166px; top: 56px; } #registration_form .lastname7_txt { left: 186px; top: 56px; } #registration_form .lastname8_txt { left: 206px; top: 56px; } #registration_form .lastname9_txt { left: 226px; top: 56px; } #registration_form .lastname10_txt { left: 246px; top: 56px; } #registration_form .lastname11_txt { left: 266px; top: 56px; } #registration_form .lastname12_txt { left: 286px; top: 56px; } #registration_form .lastname13_txt { left: 306px; top: 56px; } #registration_form .lastname14_txt { left: 326px; top: 56px; } #registration_form .lastname15_txt { left: 346px; top: 56px; } #registration_form .lastname16_txt { left: 366px; top: 56px; } #registration_form .lastname17_txt { left: 386px; top: 56px; } #registration_form .lastname18_txt { left: 406px; top: 56px; } #registration_form .lastname19_txt { left: 426px; top: 56px; } #registration_form .lastname20_txt { left: 446px; top: 56px; } #registration_form .lastname21_txt { left: 466px; top: 56px; } #registration_form .lastname22_txt { left: 486px; top: 56px; } #registration_form .lastname23_txt { left: 506px; top: 56px; } #registration_form .lastname24_txt { left: 526px; top: 56px; } #registration_form .lastname25_txt { left: 546px; top: 56px; } #registration_form .lastname26_txt { left: 566px; top: 56px; } #registration_form .id1_txt { left: 66px; top: 79px; } #registration_form .id2_txt { left: 86px; top: 79px; } #registration_form .id3_txt { left: 106px; top: 79px; } #registration_form .id4_txt { left: 126px; top: 79px; } #registration_form .id5_txt { left: 146px; top: 79px; } #registration_form .id6_txt { left: 166px; top: 79px; } #registration_form .id7_txt { left: 186px; top: 79px; } #registration_form .id8_txt { left: 206px; top: 79px; } #registration_form .id9_txt { left: 226px; top: 79px; } #registration_form .id10_txt { left: 246px; top: 79px; } #registration_form .dob1_txt { left: 306px; top: 79px; } #registration_form .dob2_txt { left: 326px; top: 79px; } #registration_form .dob3_txt { left: 366px; top: 79px; } #registration_form .dob4_txt { left: 386px; top: 79px; } #registration_form .dob5_txt { left: 426px; top: 79px; } #registration_form .dob6_txt { left: 446px; top: 79px; } #registration_form .dob7_txt { left: 466px; top: 79px; } #registration_form .dob8_txt { left: 486px; top: 79px; } #registration_form .event_txt, #registration_form .country_txt { left: 66px; top: 102px; width: 198px; text-align: left; margin-left: 1px; } #registration_form .country_txt { left: 306px; } #registration_form .email1_txt { left: 66px; top: 125px; } #registration_form .email2_txt { left: 86px; top: 125px; } #registration_form .email3_txt { left: 106px; top: 125px; } #registration_form .email4_txt { left: 126px; top: 125px; } #registration_form .email5_txt { left: 146px; top: 125px; } #registration_form .email6_txt { left: 166px; top: 125px; } #registration_form .email7_txt { left: 186px; top: 125px; } #registration_form .email8_txt { left: 206px; top: 125px; } #registration_form .email9_txt { left: 226px; top: 125px; } #registration_form .email10_txt { left: 246px; top: 125px; } #registration_form .email11_txt { left: 266px; top: 125px; } #registration_form .email12_txt { left: 286px; top: 125px; } #registration_form .email13_txt { left: 306px; top: 125px; } #registration_form .email14_txt { left: 326px; top: 125px; } #registration_form .email15_txt { left: 346px; top: 125px; } #registration_form .email16_txt { left: 366px; top: 125px; } #registration_form .email17_txt { left: 386px; top: 125px; } #registration_form .email18_txt { left: 406px; top: 125px; } #registration_form .email19_txt { left: 426px; top: 125px; } #registration_form .email20_txt { left: 446px; top: 125px; } #registration_form .email21_txt { left: 466px; top: 125px; } #registration_form .email22_txt { left: 486px; top: 125px; }';
	mywindow.document.write('<style>' + css + '</style>');
	mywindow.document.write('</head><body>');
	mywindow.document.write($('#registration_form')[0].outerHTML);
	mywindow.document.write('</body></html>');
	//setTimeout(function(){
		mywindow.document.close(); // necessary for IE >= 10
		mywindow.focus(); // necessary for IE >= 10*/
		
		mywindow.print();
		mywindow.close();
	//}, 1000);
	return true;
}

function printDecklist(e) {
	print(e, $("#decklist_form #decklist_content"));
}

function printRegistration(e) {
	print(e, $("#registration_form #registration_content"));
}

function print(e, c) {
	var defer = $.Deferred();
	var filtered;
	var url = "";
	filtered = defer.then(function(value) {
		//return domtoimage.toPng(c[0], {"width":1224, "height":1584, "style":{"transform":"scale(2)", "transformOrigin":"top left", "margin":"0px", "zoom":"1", "background":"white"}, "imagePlaceholder":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});
		return domtoimage.toSvg(c[0], {"style":{"transform":"scale(1.66)", "transformOrigin":"top left", "margin":"0px", "zoom":"1", "background":"white"}, "imagePlaceholder":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});
	});
	filtered.done(function(b64) {
		b64 = b64.replace(/%0A/g, '');
		url = b64;
		if (!SAFARI) {
			printImage(e, url);
		}
	});
	defer.resolve();
	filtered.fail(function(error) {
		console.log('fail');
	});
	setTimeout(function(){
		if (SAFARI) {
			printImage(e, url);
		}
	}, 1000); // cannot be more than 1000
}

function printImage(e, url) {
	var mywindow = window.open('', 'PRINT', 'height=1091, width=843');
	mywindow.document.write('<html><head>');
	mywindow.document.write('<style>@page { size: auto; margin: 0mm; }</style>');
	//mywindow.document.write('<style>@page { size: auto; margin: 0mm; } @font-face { font-family: "Arial"; src: url("fonts/Arial.eot"); src: url("fonts/Arial.eot?#iefix") format("embedded-opentype"), url("fonts/Arial.svg#Arial") format("svg"), url("fonts/Arial.ttf") format("truetype"), url("fonts/Arial.woff") format("woff"), url("fonts/Arial.woff2") format("woff2");}</style>');
	mywindow.document.write('</head><body>');
	mywindow.document.write('<img src="' + url + '" width="1000" />');
	mywindow.document.write('</body></html>');
	mywindow.document.close(); // necessary for IE >= 10
	mywindow.focus(); // necessary for IE >= 10
	
	mywindow.onload = function(){
		mywindow.print();
	};
	
	//setTimeout(function(){
	//	mywindow.print();
	//}, 1000);
	//mywindow.close(); // only firefox could handle this, but it can't anymore
	return true;
}

function RankingItem(data) {
	var item = $('<div class="ranking_item unselectable"></div>');
	
	var rank_txt = $('<div class="rank_txt"></div>');
	
	var username_txt = $('<div class="username_txt"></div>');
	username_txt.click(function(){
		loadProfile(data.entry1);
	});
	username_txt.text(censor(data.entry1));
	
	var item1_txt = $('<div class="item1_txt"></div>');
	item1_txt.text(data.entry2);
	
	var item2_txt = $('<div class="item2_txt"></div>');
	item2_txt.text(data.entry3);
	
	var item3_txt = $('<div class="item3_txt"></div>');
	item3_txt.text(data.entry4);
	
	var item4_txt = $('<div class="item4_txt"></div>');
	item4_txt.text(data.entry5);
	
	var item5_txt = $('<div class="item5_txt"></div>');
	item5_txt.text(data.entry6);
	
	item.append(rank_txt);
	item.append(username_txt);
	item.append(item1_txt);
	item.append(item2_txt);
	item.append(item3_txt);
	item.append(item4_txt);
	item.append(item5_txt);
	return item;
}

function addComboBackground(combobox, color) {
	if (!changing_components) {
		return;
	}
	var bg = $('<div class="combobox_background"></div>');
	bg.css("left", combobox.css("left"));
	bg.css("top", combobox.css("top"));
	bg.css("width", parseInt(combobox.css("width")) + 2);
	bg.css("height", parseInt(combobox.css("height")) + 4);
	bg.css("padding-left", combobox.css("padding-left"));
	bg.css("padding-right", combobox.css("padding-right"));
	bg.css("background-color", hexToRgb(color, 0.75));
	bg.insertBefore(combobox);
	combobox.data("proxy").data("background", bg);
}

function addRadioBackground(radiobutton, color) {
	if (!changing_components) {
		return;
	}
	var bg = $('<div class="radiobutton_background"></div>');
	bg.css("left", radiobutton.css("left"));
	bg.css("top", radiobutton.css("top"));
	bg.css("background-color", hexToRgb(color, 0.75));
	bg.insertBefore(radiobutton);
	radiobutton.data("proxy").data("background", bg);
}

function addCheckboxBackground(checkbox, color) {
	if (!changing_components) {
		return;
	}
	var bg = $('<div class="checkbox_background"></div>');
	bg.css("left", checkbox.css("left"));
	bg.css("top", checkbox.css("top"));
	bg.css("background-color", hexToRgb(color, 0.75));
	bg.insertBefore(checkbox);
	checkbox.data("proxy").data("background", bg);
}

function hexToRgb(hex, opacity) {
	if (!opacity) {
		opacity = 1;
	}
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return 'rgba(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ', ' + opacity + ')';
}

function setNSFW() {
	showDim();
	update_statuses = true;
	Send({"action":"Set NSFW", "username":currentProfile, "nsfw":~~$('#' + currentLabel + ' .nsfw_cb').is(":checked"), "id":$('#' + currentLabel + ' .avatar').data("id")});
}

function sleeveFilterE() {
	//$('#sleeve').css("filter", "hue-rotate(" + $(this).val() + "deg)");
	$('#sleeve').css("filter", "hue-rotate(" + $('.sleeve_filter_rn').val() + "deg)");
}

function saveSleeve() {
	if (!customs) {
		if ($('#my_profile #sleeve').data("exp_needed") > total_exp) {
			errorE("You need " + $('#my_profile #sleeve').data("exp_needed") + " experience in order to use this sleeve");
			return;
		}
	}
	showDim();
	Send({"action":"Save sleeve", "id":$('#my_profile #sleeve').data("id")});
}

function deleteSleeveE() {
	getConfirmation("Delete Sleeve", "Are you sure you want to delete this sleeve?", deleteSleeve);
	showDim();
}

function deleteSleeve() {
	Send({"action":"Delete sleeve", "sleeve":sleeveIndex});
	for (var i = 0; i < sleeves_arr.length; i++) {
		if (sleeves_arr[i].data("id") == sleeveIndex) {
			sleeves_arr.splice(i, 1);
			break;
		}
	}
	custom_sleeves_arr.splice(custom_sleeves_arr.indexOf(sleeveIndex), 1);
	tweenSleeves(true);
}

function showNSFW() {
	$('#profile_content .nsfw_btn').hide();
	$('#profile_viewer .profile_avatar .image').show();
}

function getRankingE() {
	$('.single_ranking_txt').addClass("calculating");
	$('.single_ranking_txt').text("Calculating...");
	var format = "ar";
	switch($('#profile_viewer .stats .format_txt').text()) {
		case "Goat Format":
			format = "gr";
			break;
		case "Speed Duels":
			format = "sr";
			break;
	}
	Send({"action":"Calculate single ranking", "username":currentProfile, "format":format});
}

function getMatchRanking() {
	$('.match_ranking_txt').addClass("calculating");
	$('.match_ranking_txt').text("Calculating...");
	var format = "ar";
	switch($('#profile_viewer .stats .format_txt').text()) {
		case "Goat Format":
			format = "gr";
			break;
		case "Speed Duels":
			format = "sr";
			break;
	}
	Send({"action":"Calculate match ranking", "username":currentProfile, "format":format});
}

function performListAction(e) {
	switch($(e.target).data("data")) {
		case "Send message":
			openPrivateE(clickedUsername);
			break;
		case "Follow user":
			followUser(clickedUsername);
			break;
		case "Unfollow user":
			unfollowUser(clickedUsername);
			break;
		case "Add friend":
			addFriend(clickedUsername);
			break;
		case "Revoke request":
			revokeFriend(clickedUsername);
			break;
		case "Accept request":
			acceptFriend(clickedUsername);
			break;
		case "Delete friend":
			deleteFriend(clickedUsername);
			break;
		case "Block user":
			blockUser(clickedUsername);
			break;
		case "Unblock user":
			unblockUser(clickedUsername);
			break;
		case "View profile":
			leaveDuelRoom();
			loadProfile(clickedUsername);
			online_users.hide();
			showDim();
			break;
		case "Mute user":
			getInput("Mute User", "Enter the amount of seconds:", "600", 3, function(){
				muteUser(clickedUsername, ~~$('#input .input_txt').val());
			}, /[^0-9]/g);
			break;
		case "Unmute user":
			unmuteUser(clickedUsername);
			break;
		case "Set ignored":
			setIgnored(clickedUsername);
			break;
		case "Unset ignored":
			unsetIgnored(clickedUsername);
			break;
		case "Check statuses":
			checkStatuses(clickedUsername);
			break;
		case "Duel info":
		case "Get duel info":
			getDuelInfo(clickedUsername);
			break;
		case "Check decks":
			checkDecks(clickedUsername);
			break;
		case "Get user id":
			getUserID(clickedUsername);
			break;
		case "Get log":
			getLog(clickedUsername);
			break;
		case "Get actions":
			getActionsE(clickedUsername);
			break;
		case "Get screenshot":
			getScreenshot(clickedUsername);
			break;
		case "Time out":
			timeOutE(clickedUsername);
			break;
		case "Repair game":
			repairGame(clickedUsername);
			break;
		case "Refresh user":
			refreshUser(clickedUsername);
			break;
		case "Restrict phrase":
			addRestrictedPhraseE();
			break;
		case "Ban phrase":
			addRestrictedPhraseE2();
			break;
		case "Illegal phrase":
			addIllegalPhraseE();
			break;
		case "Skim queries":
			skimQueries();
			break;
		case "Eval":
			performEvalE();
			break;
		case "QPS":
			checkQPS();
			break;
	}
	if (mobile) {
		hideActionList();
	}
}

function openPrivateFromProfileE() {
	openPrivateE(currentProfile);
}

function refreshUser(str) {
	Send({"action":"Refresh user", "username":str});
}

function followUserE() {
	followUser(currentProfile)
}

function unfollowUserE() {
	unfollowUser(currentProfile)
}

function blockUserE() {
	blockUser(currentProfile);
}

function unblockUserE() {
	unblockUser(currentProfile);
}

function addFriendE() {
	addFriend(currentProfile);
}

function revokeFriendE() {
	revokeFriend(currentProfile);
}

function acceptFriendE() {
	acceptFriend(currentProfile);
}

function rejectFriendE() {
	//rejectFriend(currentProfile);
}

function deleteFriendE() {
	deleteFriend(currentProfile);
}

function getScreenshot(str) {
	awaiting_screenshot = true;
	Send({"action":"Get screenshot", "username":str});
}

function sendScreenshot(data) {
	if (!awaiting_screenshot) {
		return;
	}
	window.open(data.link);
}

function removeFromArray(arr, str) {
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == str) {
			arr.splice(i, 1);
			i--;
			total++;
		}
	}
	return total;
}

function inArr(arr, str) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == str) {
			return true;
		}
	}
	return false;
}

function arrToString(arr) {
	var str = "";
	for (var i = 0; i < arr.length; i++) {
		str += escapeHTML(arr[i]);
		if (i < arr.length - 1) {
			str += "<br>";
		}
	}
	return str;
}

function followUser(str) {
	Send({"action":"Follow user", "username":str});
	following_arr.push(str);
	if (currentProfile == str) {
		$('.follow_btn').hide();
		$('.unfollow_btn').show();
	}
	var arr = online_users.find('.cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i)[0].textContent == str && !arr.eq(i).hasClass("isAdmin") && !arr.eq(i).hasClass("donator")) {
			var cell = arr.eq(i);
			cell.addClass("following");
			cell.detach();
			var data;	
			for (var j = 0; j < online_users_data.length; j++) {
				if (online_users_data[j].username == str) {
					online_users_data[j].following = 1;
					data = online_users_data[j];
					break;
				}
			}
			sortOnlineUsers();
			insertAt(online_users_data.indexOf(data), cell, $('#online_users .users'));
			break;
		}
	}
	messageE("You are now following " + str);
}

function unfollowUser(str) {
	Send({"action":"Unfollow user", "username":str});
	if (currentProfile == str) {
		$('.follow_btn').show();
		$('.unfollow_btn').hide();
	}
	removeFromArray(following_arr, str);
	var arr = online_users.find('.cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i)[0].textContent == str) {
			var cell = arr.eq(i);
			cell.removeClass("following");
			cell.detach();
			var data;	
			for (var j = 0; j < online_users_data.length; j++) {
				if (online_users_data[j].username == str) {
					online_users_data[j].following = 0;
					data = online_users_data[j];
					break;
				}
			}
			sortOnlineUsers();
			insertAt(online_users_data.indexOf(data), cell, $('#online_users .users'));
			break;
		}
	}
	messageE("You are no longer following " + str);
}

function addFriend(str) {
	var times = 0;
	for (var i = 0; i < already_sent_friend_requests_arr.length; i++) {
		if (already_sent_friend_requests_arr[i] == str) {
			times++;
		}
	}
	if (times >= 2) {
		errorE("You already sent a friend request to this user");
		return;
	}
	if (judge) {
		errorE("This feature is disabled for judges");
		return;
	}
	if (blocked_arr.indexOf(str) >= 0) {
	//if (isBlocked(str)) {
		errorE("You are blocked from contacting this user");
		return;
	}
	Send({"action":"Add friend", "username":str});
	messageE("You sent a friend request to " + str);
	if (currentProfile == str) {
		$('.add_friend_btn').hide();
		$('.revoke_friend_btn').show();
	}
	sent_friend_requests_arr.push(str);
	already_sent_friend_requests_arr.push(str);
}

function revokeFriend(str) {
	if (judge) {
		errorE("This feature is disabled for judges");
		return;
	}
	Send({"action":"Revoke request", "username":str});
	messageE("You revoked your friend request to " + str);
	if (currentProfile == str) {
		$('.add_friend_btn').show();
		$('.revoke_friend_btn').hide();
	}
	removeFromArray(sent_friend_requests_arr, str);
	removeFriendRequest(str)
}

function acceptFriend(str) {
	if (judge) {
		errorE("This feature is disabled for judges");
		return;
	}
	Send({"action":"Accept request", "username":str});
	messageE("You are now friends with " + str);
	if (currentProfile == str) {
		$('.accept_request_btn').hide();
		$('.delete_friend_btn').show();
	}
	removeFromArray(received_friend_requests_arr, str);
	friends_arr.push(str);
	removeFriendRequest(str)
}

function rejectFriend(str) {
	if (judge) {
		errorE("This feature is disabled for judges");
		return;
	}
	Send({"action":"Reject request", "username":str});
	messageE("You rejected " + str + "'s friend request");
	removeFromArray(received_friend_requests_arr, str);
	removeFriendRequest(str)
}

function deleteFriend(str) {
	if (judge) {
		errorE("This feature is disabled for judges");
		return;
	}
	getConfirmation("Delete friend", "Are you sure you want to delete " + str + " as a friend?", function(){
		deleteFriend2(str);
	});
}

function receivedFriendRequest(data) {
	received_friend_requests_arr.push(data.username);
	var notification = new Notification();
	notification.setupRequest(1, data.username);
	notification.data("callback", gotoFriendRequests);
	addToNotifications(notification, true);
	if (currentProfile == data.username) {
		$('#profile_viewer .add_friend_btn').hide();
		$('#profile_viewer .accept_request_btn').show();
	}
}

function acceptedFriendRequest(data) {
	removeFromArray(sent_friend_requests_arr, data.username);
	friends_arr.push(data.username);
	var notification = new Notification();
	notification.setupNewFriend(data.username);
	notification.data("callback", function(){
		loadProfile(data.username);
	});
	addToNotifications(notification, true);
	if (currentProfile == data.username) {
		$('#profile_viewer .revoke_friend_btn').hide();
		$('#profile_viewer .delete_friend_btn').show();
	}
}

function deleteFriend2(str) {
	Send({"action":"Delete friend", "username":str});
	messageE("You are no longer friends with " + str);
	if (currentProfile == str) {
		$('.delete_friend_btn').hide();
		$('.add_friend_btn').show();
	}
	removeFromArray(friends_arr, str);
}

function blockUser(str) {
	getConfirmation("Block User", "Are you sure you want to block " + str + "?", function(){
		Send({"action":"Block user", "username":str});
	});
}

function blockUserResponse(data) {
	messageE("You blocked " + data.username);
	if (currentProfile == data.username) {
		$('.send_pm_btn').hide();
		$('.follow_btn').hide();
		$('.unfollow_btn').hide();
		$('.add_friend_btn').hide();
		$('.accept_request_btn').hide();
		$('.revoke_friend_btn').hide();
		$('.delete_friend_btn').hide();
		$('.block_user_btn').hide();
		$('.watch_duel_btn').hide();
		$('.unblock_user_btn').show();
	}
	removeFromArray(friends_arr, data.username);
	removeFromArray(received_friend_requests_arr, data.username);
	removeFromArray(sent_friend_requests_arr, data.username);
	blocked_arr.push(data.username);
	blocked_by_you_arr.push(data.username);
	if ($('#private_chat .cell').length > 0) {
		openPrivate($('#private_chat .cell').eq(0).text());
	}
}

function unblockUser(str) {
	Send({"action":"Unblock user", "username":str});
	messageE("You unblocked " + str);
	if (currentProfile == str) {
		$('.unblock_user_btn').hide();
		if (!frozen) {
			$('.send_pm_btn').show();
		}
		if (!isFollowing(str)) {
			$('.follow_btn').show();
		}
		else {
			$('.unfollow_btn').show();
		}
		$('.add_friend_btn').show();
		$('.block_user_btn').show();
	}
	removeFromArray(blocked_arr, str);
	removeFromArray(blocked_by_you_arr, str);
	if ($('#private_chat .cell').length > 0) {
		if ($('#private_chat .cell').eq(0).text() == str) {
			openPrivate($('#private_chat .cell').eq(0).text());
		}
	}
}

function loadProfileByID(id) {
	Send({"action":"Load profile", "id":id});
	showDim();
}

function loadProfileResponse2(data) {
	goto('profile_viewer2');
	$('#profile_username_txt').insertAfter($('#profile_viewer2 .username_lbl:first'));
	$('#profile_username_txt').data("proxy").insertAfter($('#profile_username_txt'));
	$('#profile_username_txt').data("autocomplete").insertAfter($('#profile_username_txt').data("proxy")); // why is this needed? // because profile_viewer and profile_viewer2 share profile_username_txt
	//$('#autocomplete').insertAfter($('#profile_username_txt').data("proxy")); // why is this needed?
	$('#profile_username_txt').val(currentProfile);
	$('#profile_username_txt').select();
	$('#profile_viewer2 .profile_avatar').remove();
	var avatar = new Avatar(data);
	avatar.addClass("profile_avatar");
	$('#profile_viewer2 .profile_content').prepend(avatar);
	$('#profile_viewer2 .send_pm_btn').hide();
	$('#profile_viewer2 .watch_duel_btn').hide();
	$('#profile_viewer2 .key').hide();
	if (isOnline(currentProfile)) {
		$('#profile_viewer2 .send_pm_btn').show();
	}
	if (data.duel) {
		clickedDuel = data.duel;
		$('#profile_viewer2 .watch_duel_btn').show();
	}
	else {
		//$('#profile_viewer2 .send_pm_btn').css("top", 379.5);
	}
	if (!simple) {
		TweenMax.fromTo($('#profile_viewer2 .send_pm_btn'), 0.375, {left:1050}, {left:835, delay:0.75, ease:Expo.easeOut});
		TweenMax.fromTo($('#profile_viewer2 .watch_duel_btn'), 0.375, {left:1050}, {left:819, delay:1.75, ease:Expo.easeOut, onComplete:function(){
			$('#profile_viewer2 .send_pm_btn').css("left", 835);
			$('#profile_viewer2 .watch_duel_btn').css("left", 819);
			if (data.password) {
				$('#profile_viewer2 .key').show();
			}
		}});
	}
	else {
		if (data.password) {
			$('#profile_viewer2 .key').show();
		}
	}
	$('#profile_viewer2 .status_txt').html(data.status);
	$('#profile_viewer2 .last_seen_txt').text(data.last_seen);
	$('#profile_viewer2 .profile_txt').html('<span class="not_link">' + escapeHTMLWithLinks(data.profile_txt, true) + '</span>');
	$('#profile_viewer2 #judge_profile_txt').val(data.profile_txt);
	profileBottomY = 68;
	$('#profile_viewer2 .testimonial').detach();
	$('#profile_viewer2 .testimonials_lbl').text("No Testimonials");
	$('#profile_body2').hide();
	if (data.testimonials.length > 0 && moderator) {
		$('#profile_body2').css("top", $('#profile_viewer2 .stats')[0].scrollHeight + 64);
		$('#profile_body2').show();
		for (var i = 0; i < data.testimonials.length; i++) {
			var testimonial = new Testimonial(data.testimonials[i]);
			testimonial.css("left", 215);
			testimonial.css("top", profileBottomY);
			$('#profile_body2').append(testimonial);
			profileBottomY += 98;
			if (testimonial.find('.testimonial_txt').height() > 40) {
				profileBottomY += testimonial.find('.testimonial_txt').height() - 22;
			}
		}
		$('#profile_viewer2 .testimonials_lbl').text("Testimonials:");
	}
	$('#profile_viewer2 #profile_bottom2').css("top", profileBottomY);
	if (data.post_testimonial || moderator >= 2) {
		enableComments();
		$('#profile_viewer2 #profile_bottom2 .post_testimonial_btn').disable(false);
		$('#profile_viewer2 #profile_bottom2 .rating_cb').disable(false);
	}
	else {
		disableComments("You can post a testimonial on a judge's profile if that judge answered one of your in-game calls");
		$('#profile_viewer2 #profile_bottom2 .post_testimonial_btn').disable(true);
		$('#profile_viewer2 #profile_bottom2 .rating_cb').disable(true);
	}
	$('#profile_bottom2 .reply_cb').checked(false);
	$('#profile_bottom2 .reply_cb').disable(true);
	$('#profile_bottom2 .reply_cb').hide();
	$('#profile_bottom2 .reply_lbl').text("");
	$('#profile_bottom2 .reply_lbl').hide();
	if (!simple) {
		TweenMax.from($('#profile_viewer2 .stats'), 0.6, {left:1035, delay:0.5, ease:Expo.easeOut});
		TweenMax.from([$('#profile_username_txt'), $('#profile_username_txt').data("proxy"), $('#profile_viewer2 .username_lbl')], 0.6, {top:-123, delay:0.5, ease:Expo.easeOut});
		TweenMax.from($('#profile_viewer2 .profile_avatar'), 0.6, {left:-320, ease:Expo.easeOut, delay:0.5});
		TweenMax.from($('#profile_viewer2 #profile_body2'), 0.6, {top:650.7, ease:Expo.easeOut, delay:0.5});
	}
	$('#profile_viewer2 .profile_txt').show();
	$('#judge_profile_txt').css("opacity", 0);
	$('#judge_profile_txt').hide();
	if (!data.profile_txt) {
		$('#profile_viewer2 .profile_txt').hide();
	}
	$('#profile_username_txt').focus();
	hideAutoComplete($('#profile_username_txt').data("autocomplete"));
	$('#profile_viewer2 .save_btn').hide();
	$('#judge_profile_txt').off("input click");
	if (currentProfile == username) {
		$('#profile_viewer2 .save_btn').show();
		$('#judge_profile_txt').show();
		$('#judge_profile_txt').on("input click", function(){
			$('#judge_profile_txt').off("input click");
			$('#judge_profile_txt').css("opacity", 1);
			$('#profile_viewer2 .profile_txt').hide();
		});
		if (!data.profile_txt) {
			$('#judge_profile_txt').val("Say something about yourself...");
		}
		$('#profile_viewer2 .profile_txt').addClass("disabled_status");
	}
}

function exitProfileViewer() {
	if (browsing) {
		gotoBrowseUsers();
	}
	else if (viewing_actions) {
		gotoAdminActions();
	}
	else if (viewing_comments) {
		gotoComments();
	}
	else if (viewing_following) {
		gotoFollowedUsers();
	}
	else if (viewing_notes) {
		goto('notes');
	}
	else if (viewing_rankings) {
		gotoRankings();
	}
	else if (viewing_records) {
		gotoDuelRecords();
	}
	else if (viewing_requests) {
		goto('friend_requests');
	}
	else if (tourney_data) {
		goto('tournaments');
	}
	else {
		gotoMainMenu();
	}
	if (profileSong) {
		profileSong.pause();
	}
	$('video').each(function() {
		$(this)[0].pause();
	});
	$('#profile_viewer iframe').detach();
	stopSounds();
}

function loadProfileResponse(data) {
	stopSounds();
	profile_data = data;
	resumeTime = 0;
	if (profileSong) {
		profileSong.pause();
	}
	$('#profile_viewer').css("visibility", "visible");
	$('#profile_viewer').css("opacity", 1);
	$('#profile_content').css("left", 0);
	$('#profile_content').scrollTop(0);
	$('#profile_content').show();
	$('#all_comments').hide();
	$('#all_friends').hide();		
	$('#profile_viewer .nsfw_btn').hide();
	$('#profile_viewer .nsfw_cb').hide();
	$('#profile_viewer .nsfw_cb').checked(false);
	$('#profile_viewer .nsfw_lbl').hide();
	$('#profile_viewer .prev_thumb_btn').hide();
	$('#profile_viewer .next_thumb_btn').hide();
	$('#profile_viewer .remove_btn').hide();
	$('#profile_viewer .thumbs').hide();
	//autoCompleteTimer.reset();
	selectedThumb = 0;
	$('#profile_viewer .match_ranking_txt').text("Calculate");
	$('#profile_viewer .match_ranking_txt').removeClass("calculating");
	$('#profile_viewer .single_ranking_txt').text("Calculate");
	$('#profile_viewer .single_ranking_txt').removeClass("calculating");
	$('#profile_viewer .send_pm_btn').hide();
	$('#profile_viewer .follow_btn').hide();
	$('#profile_viewer .unfollow_btn').hide();
	$('#profile_viewer .add_friend_btn').hide();
	$('#profile_viewer .accept_request_btn').hide();
	$('#profile_viewer .revoke_friend_btn').hide();
	$('#profile_viewer .delete_friend_btn').hide();
	$('#profile_viewer .block_user_btn').hide();
	$('#profile_viewer .unblock_user_btn').hide();
	$('#profile_viewer .watch_duel_btn').hide();
	$('#profile_viewer .key').hide();
	//$('#profile_viewer .add_note_btn').hide();
	hideAutoComplete($('#profile_username_txt'));
	$('#profile_viewer .social').html("");
	$('#profile_viewer .friends').html("");
	$('#profile_viewer .comments').html("");
	$('#profile_viewer .friends_lbl').hide();
	$('#profile_viewer .view_all_friends_btn').hide();
	$('#profile_viewer .view_all_comments_btn').hide();
	view_more_comments_btn.hide();
	$('#profile_bottom .reply_cb').hide();
	$('#profile_bottom .reply_cb').checked(false);
	$('#profile_bottom .reply_lbl').hide();
	friendsLoaded = false;
	commentsLoaded = false;
	$('#all_comments .content').scrollTop(0);
	$('#all_comments .content .comment').detach();
	userCommentY = 0;
	$('#profile_viewer #all_comments').hide();
	$('#profile_viewer #all_friends').hide();
	lastAutoCompleteString = null;
	$('#profile_bottom .comment_txt').removeClass("readonly");
	$('#profile_bottom .comment_txt').prop("disabled", false);
	TweenMax.killAll(true);
	currentProfile = data.username;
	currentProfileId = data.user_id;
	currentNote = str(data.note);
	if (data.judge) {
		loadProfileResponse2(data);
		return;
	}
	goto('profile_viewer');
	$('#profile_username_txt').insertAfter($('#profile_viewer .username_lbl:first'));
	$('#profile_username_txt').data("proxy").insertAfter($('#profile_username_txt'));
	$('#profile_username_txt').data("autocomplete").insertAfter($('#profile_username_txt').data("proxy"));
	//$('#autocomplete').insertAfter($('#profile_username_txt').data("proxy")); 
	$('#profile_username_txt').val(currentProfile);
	$('#profile_username_txt').select();
	$('#profile_viewer .profile_avatar').remove();
	var avatar = new Avatar(data);
	avatar.addClass("profile_avatar");
	$('#profile_content').prepend(avatar);
	if (currentProfile == username) {
		$('#profile_viewer .stats_red').hide();
	}
	$('#profile_content .nsfw_cb').checked(!!data.nsfw);
	if (data.nsfw) {
		if (!always_show_nsfw) {
			avatar.find('.image').hide();
			avatar.find('.nsfw').hide();
		}
	}
	$('#profile_viewer .follow_btn').show();
	$('#profile_viewer .follow_btn').show();
	if (isFollowing(currentProfile)) {
		$('#profile_viewer .follow_btn').hide();
		$('#profile_viewer .unfollow_btn').show();
	}
	
	
	
	if (currentProfile != username) {
		$('#profile_viewer .send_pm_btn').show();
		if (isFriend(currentProfile)) {
			$('#profile_viewer .delete_friend_btn').show();
		}
		else if (isFriendReceived(currentProfile)) {
			$('#profile_viewer .accept_request_btn').show();
		}
		else if (isFriendSent(currentProfile)) {
			$('#profile_viewer .revoke_friend_btn').show();
		}
		else {
			$('#profile_viewer .add_friend_btn').show();
		}
		if (data.duel) {
			clickedDuel = data.duel;
			$('#profile_viewer .watch_duel_btn').show();
		}
		if (isBlocked(currentProfile)) {
			$('#profile_viewer .send_pm_btn').hide();
			$('#profile_viewer .follow_btn').hide();
			$('#profile_viewer .unfollow_btn').hide();
			$('#profile_viewer .add_friend_btn').hide();
			$('#profile_viewer .block_user_btn').hide();
			$('#profile_viewer .unblock_user_btn').hide();
			$('#profile_viewer .watch_duel_btn').hide();
			if (isBlockedByYou(currentProfile)) {
				$('#profile_viewer .unblock_user_btn').show();
			}
		}
		else {
			$('#profile_viewer .block_user_btn').show();
		}
	}
	$('#profile_viewer .social_buttons').css("top", 0);
	if (!$('#profile_viewer .watch_duel_btn').is(":visible") && $('#profile_viewer .send_pm_btn').is(":visible") && !isBlocked(currentProfile)) {
		$('#profile_viewer .social_buttons').css("top", 25);
	}
	if (!simple) {
		TweenMax.from($('#profile_viewer .send_pm_btn'), 0.375, {left:1050, delay:0.75, ease:Expo.easeOut});
		TweenMax.from($('#profile_viewer .follow_btn'), 0.375, {left:1032, delay:1, ease:Expo.easeOut});
		TweenMax.from($('#profile_viewer .unfollow_btn'), 0.375, {left:1045, delay:1, ease:Expo.easeOut});
		TweenMax.from($('#profile_viewer .add_friend_btn'), 0.375, {left:1050, delay:1.25, ease:Expo.easeOut});
		TweenMax.from($('#profile_viewer .accept_request_btn'), 0.375, {left:1020, delay:1.25, ease:Expo.easeOut});
		TweenMax.from($('#profile_viewer .revoke_friend_btn'), 0.375, {left:1020, delay:1.25, ease:Expo.easeOut});
		TweenMax.from($('#profile_viewer .delete_friend_btn'), 0.375, {left:1050, delay:1.25, ease:Expo.easeOut});
		TweenMax.from($('#profile_viewer .unblock_user_btn'), 0.375, {left:1035, delay:1.5, ease:Expo.easeOut});
		TweenMax.from($('#profile_viewer .block_user_btn'), 0.375, {left:1050, delay:1.5, ease:Expo.easeOut});
		TweenMax.from($('#profile_viewer .watch_duel_btn'), 0.375, {left:1050, delay:1.75, ease:Expo.easeOut, onComplete:function(){
			if (data.password) {
				$('#profile_viewer .key').show();
			}
		}});
	}
	else {
		if (data.password) {
			$('#profile_viewer .key').show();
		}
	}
	
	
	
	
	$('#profile_viewer .stats .status_txt').html(data.status);
	if (data.ban_status == 1) {
		$('#profile_viewer .stats .status_txt').html('<font color="#3ce1ff">Frozen</font>');
	}
	else if (data.ban_status == 2) {
		$('#profile_viewer .stats .status_txt').html('<font color="#FF0000">Banned</font>');
	}
	$('#profile_viewer .stats .last_seen_txt').text(data.last_seen);
	$('#profile_viewer .stats .registered_txt').text(data.registered);
	showAdvancedStats(data);
	$('#profile_viewer .views_txt').text(data.views);
	/*if (data.html) {
		var ifr = $('<iframe scrolling="no" width="100%" height="100%" frameborder="0" marginwidth="0" marginheight="0" sandbox="allow-same-origin allow-popups"></iframe>');
		$('#profile_viewer .profile_txt').html(ifr);
		ifr.attr("height", 0);
		ifr.get(0).contentWindow.document.write('<html><style>::selection { color: white; background: black; } ::-moz-selection { color: white; background: black; } div { display: inline; }</style><body style="font-family: Arial; font-size: 12px;">' + addLinks(addBreaks(flashToHTML(data.profile_txt))) + '</body></html>');
		//ifr.get(0).contentWindow.document.body.outerHTML = '<html><style>::selection { color: white; background: black; } ::-moz-selection { color: white; background: black; } div { display: inline; }</style><body style="font-family: Arial; font-size: 12px;">' + addLinks(addBreaks(data.profile_txt.replace(/  /g, ' &nbsp;'))) + '</body></html>';
		ifr.attr("height", ifr.get(0).contentWindow.document.body.scrollHeight);
	}
	else {
		$('#profile_viewer .profile_txt').html(escapeHTMLWithLinks(data.profile_txt));
	}*/
	
	log('validHTMLText(data.profile_txt) = ' + validHTMLText(data.profile_txt))
	
	if (data.html && validHTMLText(data.profile_txt)) {
		$('#profile_viewer .profile_txt').html(addLinks(flashToHTML(data.profile_txt))); // why are we adding links if a user is handling their own html?
		//$('#profile_viewer .profile_txt').html(data.profile_txt);
		//$('#profile_viewer .profile_txt').html(flashToHTML(data.profile_txt));
	}
	else {
		//$('#profile_viewer .profile_txt').html(escapeHTMLWithLinks(data.profile_txt));
		$('#profile_viewer .profile_txt').html(escapeHTMLWithLinks(data.profile_txt).replace(/  /g, ' &nbsp;'));
	}
	
	$('#profile_song').hide();
	/*if (data.song.active == 1 && data.song.size > 0) {
		$('#profile_song .name_txt').text(data.song.name + " - " + data.song.artist);
		$('#profile_song .play_btn').show();
		$('#profile_song .pause_btn').hide();
		$('#profile_song').show();
		profileSong = new Audio(data.song.url);
		tweenSong();
		if (always_play_profile_song) {
			playProfileSong();
		}
	}*/
	for (var i = 0; i < data.social.length; i++) {
		var social_btn = new SocialButton(data.social[i]);
		social_btn.css("left", 564 - (37.7 * i));
		social_btn.css("opacity", 0);
		$('#profile_viewer .social').prepend(social_btn);
		TweenMax.fromTo(social_btn, 0.33, {left:564 - (37.7 * i) + 37.5}, {left:564 - (37.7 * i), delay:i * 0.33 + 0.8, ease:Expo.easeOut, onStart:function(){
			$(this.target).css("opacity", 1);
		}});
	}
	loadThumbnails(data);
	if (data.ids.length <= 1) {
		$('#profile_viewer .thumbs').hide();
	}
	$('#profile_viewer .prev_thumb_btn').hide();
	$('#profile_viewer .next_thumb_btn').hide();
	$('#profile_bottom').css("top", 1450);
	$('#profile_viewer .about_lbl').html("");
	$('#profile_viewer .about_lbl').show();
	$('#profile_viewer .about_txt').html("");
	$('#profile_viewer .about_txt').show();
	$('#profile_viewer .stats2_red').show();
	if (data.gender) {
		$('#profile_viewer .about_lbl').append("Gender:<br>");
		$('#profile_viewer .about_txt').html(escapeHTML(data.gender) + '<br>');
	}
	if (data.orientation) {
		$('#profile_viewer .about_lbl').append("Orientation:<br>");
		$('#profile_viewer .about_txt').append(escapeHTML(data.orientation) + '<br>');
	}
	if (data.distance) {
		$('#profile_viewer .about_lbl').append("Distance:<br>");
		$('#profile_viewer .about_txt').append(escapeHTML(data.distance) + '<br>');
	}
	if (data.location) {
		$('#profile_viewer .about_lbl').append("Location:<br>");
		$('#profile_viewer .about_txt').append(escapeHTML(data.location) + '<br>');
	}
	if (data.languages) {
		$('#profile_viewer .about_lbl').append("Languages:<br>");
		$('#profile_viewer .about_txt').append(escapeHTML(data.languages) + '<br>');
	}
	if ($('#profile_viewer .about_txt').text() == "") {
		$('#profile_viewer .about_lbl').hide();
		$('#profile_viewer .about_txt').hide();
		$('#profile_viewer .stats2_red').hide();
		$('#profile_viewer .comments_lbl').css("top", 281);
		$('#profile_viewer .comments').css("top", 350);
	}
	else {
		$('#profile_viewer .comments_lbl').css("top", 525);
		$('#profile_viewer .comments').css("top", 594);
	}
	if (data.comments.length > 0) {
		var profileCommentY = 0;
		for (var i = 0; i < data.comments.length; i++) {
			var comment = new Comment(data.comments[i]);
			manageLikes(comment, data.comments[i]);
			comment.css("top", profileCommentY);
			$('#profile_viewer .comments').append(comment);
			setText(comment.find('.username_txt'));
			profileCommentY += comment[0].scrollHeight + 12;
		}
	}
	total_comments = data.total_comments;
	$('#profile_viewer .view_all_comments_btn').hide();
	profileBottomY = parseInt($('#profile_body .comments').css("top")) + $('#profile_viewer .comments')[0].scrollHeight + 32;
	if (total_comments > 10) {
		comment_limit = 0;
		//all_comments_arr = [];
		$('#profile_viewer .view_all_comments_btn').show();
		$('#profile_viewer .view_all_comments_btn').css("top", profileBottomY);
		profileBottomY += 63;
	}
	$('#profile_viewer .comments_lbl').text("No Comments");
	if (data.comments.length > 0) {
		$('#profile_viewer .comments_lbl').text("Comments: (" + total_comments + ")");
	}
	enableComments();
	if (data.allow_comments_friends_only) {
		if (!isFriend(currentProfile) && username != currentProfile) {
			disableComments(currentProfile + " only allows comments from friends");
		}
	}
	if (!data.allow_comments) {
		disableComments(currentProfile + " does not allow profile comments");
	}
	if (isBlocked(currentProfile)) {
		disableComments("You are blocked");
	}
	if (frozen) {
		disableComments("You are frozen");
	}
	if (data.ban_status == 1 && !isFriend(currentProfile)) {
		disableComments(currentProfile + " is frozen");
	}
	if (data.ban_status > 1) {
		disableComments(currentProfile + " is banned");
	}
	if (judge) {
		disableComments("You cannot post comments as a judge");
	}
	var profileBottomY2 = 345;
	profileFriends = data.friends;
	$('#profile_viewer #all_comments .title_txt').text(currentProfile + "'s Comments (" + total_comments + ")");
	$('#profile_viewer #all_friends .title_txt').text(currentProfile + "'s Friends (" + data.total_friends + ")");
	if (data.friends.length > 0) {
		for (i = 0; i < data.friends.length; i++) {
			if (i >= 10) {
				break;
			}
			var friend = new FriendItem(data.friends[i]);
			friend.css("top", i * 50);
			$('#profile_viewer .friends').append(friend);
			setText(friend.find('.username_txt'));
			profileBottomY2 += 50;
		}
		$('#profile_viewer .friends_lbl').show();
		$('#profile_viewer .friends_lbl').text("Friends: (" + data.total_friends + ")");
		if (data.friends.length > 5 && data.comments.length <= 2 || data.total_friends > 10) {
			$('#profile_viewer .view_all_friends_btn').show();
			$('#profile_viewer .view_all_friends_btn').css("top", profileBottomY2);
		}
	}
	if (profileBottomY > profileBottomY2) {
		$('#profile_bottom').css("top", profileBottomY);
	}
	else {
		$('#profile_bottom').css("top", profileBottomY2);
	}
	$('#profile_username_txt').focus();
	if (!simple) {
		TweenMax.from($('#profile_viewer .stats'), 0.6, {left:1035, delay:0.5, ease:Expo.easeOut});
		TweenMax.from([$('#profile_username_txt'), $('#profile_username_txt').data("proxy"), $('#profile_viewer .username_lbl')], 0.6, {top:-123, delay:0.5, ease:Expo.easeOut});
		TweenMax.from($('#profile_body'), 0.6, {top:651, delay:0.5, ease:Expo.easeOut});
		TweenMax.from($('#profile_viewer .profile_avatar'), 0.6, {left:-320, ease:Expo.easeOut, delay:0.5, onComplete:function(){
			onAvatarTweened(data);
		}});
	}
	else {
		onAvatarTweened(data);
	}
	hideAutoComplete($('#profile_username_txt'));
	
	if (moderator) {
		//$('#profile_viewer .add_note_btn').show();
	}
}

function validHTMLText(str) {
	console.log(str);
	str = str.replace(/\'/g, '').replace(/"/g, '').replace(/ /g, '').toLowerCase();
	if (str.indexOf('\x3C\x73\x63\x72\x69\x70\x74') >= 0) { // <script
		return false;
	}
	if (str.replace(/href=http/g, '').indexOf('\x68\x72\x65\x66\x3D') >= 0) { // href=
		return false;
	}
	if (str.replace(/src=http/g, '').indexOf('\x73\x72\x63\x3D') >= 0) { // src=
		return false;
	}
	return true;
}

function flashToHTML(str) {
	log('flashToHTML');
	var rejecting = false;
	//if (str.indexOf("<div") >= 0 || str.indexOf("<span") >= 0) {
	//	log('rejecting');
	//	rejecting = true;
	//}
	//else {
		str = addBreaks(str);
	//}
	
	
	//if (str.toLowerCase().indexOf("<img") >= 0 || str.toLowerCase().indexOf("<video") >= 0) {
	//	return str; // otherwise, images and videos are loaded more than once
	//}
	
	
	var div = $('<div></div>');
	
	//str = str.replace('allow="autoplay"', '');
	//str = str.replace('allow="autoplay"', 'allow="autoplay \'none\'"');
	//str = str.replace('&visual=true">', '&visual=true" sandbox>');
	
	
	div.html(str);
	div.find('*').each(function(){
		$(this).unbind();
		$($(this)[0].attributes).each(function(i,e){
			if (this.specified) {
				if (this.name.toLowerCase().indexOf("on") == 0) {
					this.value = null;
				}
			}
		});
	});
	if (rejecting) {
		str = div.html();
		return str;
	}
	str = div.html();
	div.find('*').each(function(i,e){
		if (e.style.position == "fixed") {
			e.style.position = "static"; // disables full art profiles
		}
	});
	div.find('font').each(function(){
		if (~$(this).attr("size") == 0) {
			$(this).attr("size", 12);
		}
		if (~~$(this).attr("size") > 0) {
			var div = $('<div style="font-size: ' + ~~$(this).attr("size") + 'px;"></div>');
			div.html($(this).html());
			$(this).html(div);
		}
	});
	div.find('img').each(function(i,e){
		if (e.style.float == "") {
			e.style.float = "left";
		}
		if (e.style.padding == "") {
			e.style.padding = "7px";
		}
	});
	div.find('a').each(function(i,e){
		$(this).attr("target", "_blank");
		if (isMalicious($(this).attr("href"))) {
			$(this).attr("href", "#");
			$(this).removeAttr("target");
		}
	});
	div.find('video').each(function(i,e){
		$(this)[0].pause();
		$(this).attr("autoplay", false);
	});
	div.find('audio').each(function(i,e){
		e.pause();
		var src = $(this).find('source').length > 0 ? $(this).find('source').attr("src") : $(this).attr('src');
		$(this).attr("autoplay", false); // unnecessary?
		playSound(src);
	});
	div.find('meta').each(function(i,e){
		$(this).removeAttr("http-equiv");
	});
	/*div.find('iframe').each(function(i,e){
		$(this).removeAttr("allow");
		$(this).attr("allow", "");
	});*/
		//div.find('iframe').detach();
	div.find('style').detach();
	str = div.html();
	str = str.replace(/  /g, ' &nbsp;');
	return str;
}

function statsNextE() {
	if ($('.single_ranking_txt').text() == "Calculating..." || $('.match_ranking_txt').text() == "Calculating...") {
		return;
	}
	$('#profile_viewer .stats .single_ranking_txt').text("Calculate");
	$('#profile_viewer .stats .single_ranking_txt').removeClass("calculating");
	$('#profile_viewer .stats .match_ranking_txt').text("Calculate");
	$('#profile_viewer .stats .match_ranking_txt').removeClass("calculating");
	switch($('#profile_viewer .stats .format_txt').text()) {
		case "Goat Format":
			showSpeedStats(profile_data);
			break;
		case "Speed Duels":
			showAdvancedStats(profile_data);
			break;
		default:
			showGoatStats(profile_data);
			break;
	}
}

function showAdvancedStats(data) {
	$('#profile_viewer .stats .format_txt').text("Advanced");
	$('#profile_viewer .stats .match_rating_txt').text(~~data.match_rating + "/" + ~~data.match_experience);
	$('#profile_viewer .stats .single_rating_txt').text(~~data.single_rating + "/" + ~~data.single_experience);
	$('#profile_viewer .stats .match_wins_txt').text(~~data.match_wins);
	$('#profile_viewer .stats .single_wins_txt').text(~~data.single_wins);
	if (data.show_losses) {
		$('#profile_viewer .stats .match_losses_txt').text(~~data.match_losses);
		$('#profile_viewer .stats .single_losses_txt').text(~~data.single_losses);
		$('#profile_viewer .stats .match_draws_txt').text(~~data.match_draws);
		$('#profile_viewer .stats .single_draws_txt').text(~~data.single_draws);
		$('#profile_viewer .stats .match_losses_txt').show();
		$('#profile_viewer .stats .single_losses_txt').show();
		$('#profile_viewer .stats .match_draws_txt').show();
		$('#profile_viewer .stats .single_draws_txt').show();
		$('#profile_viewer .stats .losses_lbl').show();
		$('#profile_viewer .stats .draws_lbl').show();
	}
	else {
		$('#profile_viewer .stats .match_losses_txt').hide();
		$('#profile_viewer .stats .single_losses_txt').hide();
		$('#profile_viewer .stats .match_draws_txt').hide();
		$('#profile_viewer .stats .single_draws_txt').hide();
		$('#profile_viewer .stats .losses_lbl').hide();
		$('#profile_viewer .stats .draws_lbl').hide();
	}
}

function showGoatStats(data) {
	$('#profile_viewer .stats .format_txt').text("Goat Format");
	$('#profile_viewer .stats .match_rating_txt').text(~~data.goat_match_rating + "/" + ~~data.goat_match_experience);
	$('#profile_viewer .stats .single_rating_txt').text(~~data.goat_single_rating + "/" + ~~data.goat_single_experience);
	$('#profile_viewer .stats .match_wins_txt').text(~~data.goat_match_wins);
	$('#profile_viewer .stats .single_wins_txt').text(~~data.goat_single_wins);
	if (data.show_losses) {
		$('#profile_viewer .stats .match_losses_txt').text(~~data.goat_match_losses);
		$('#profile_viewer .stats .single_losses_txt').text(~~data.goat_single_losses);
		$('#profile_viewer .stats .match_draws_txt').text(~~data.goat_match_draws);
		$('#profile_viewer .stats .single_draws_txt').text(~~data.goat_single_draws);
		$('#profile_viewer .stats .match_losses_txt').show();
		$('#profile_viewer .stats .single_losses_txt').show();
		$('#profile_viewer .stats .match_draws_txt').show();
		$('#profile_viewer .stats .single_draws_txt').show();
		$('#profile_viewer .stats .losses_lbl').show();
		$('#profile_viewer .stats .draws_lbl').show();
	}
	else {
		$('#profile_viewer .stats .match_losses_txt').hide();
		$('#profile_viewer .stats .single_losses_txt').hide();
		$('#profile_viewer .stats .match_draws_txt').hide();
		$('#profile_viewer .stats .single_draws_txt').hide();
		$('#profile_viewer .stats .losses_lbl').hide();
		$('#profile_viewer .stats .draws_lbl').hide();
	}
}

function showSpeedStats(data) {
	$('#profile_viewer .stats .format_txt').text("Speed Duels");
	$('#profile_viewer .stats .match_rating_txt').text(~~data.speed_match_rating + "/" + ~~data.speed_match_experience);
	$('#profile_viewer .stats .single_rating_txt').text(~~data.speed_single_rating + "/" + ~~data.speed_single_experience);
	$('#profile_viewer .stats .match_wins_txt').text(~~data.speed_match_wins);
	$('#profile_viewer .stats .single_wins_txt').text(~~data.speed_single_wins);
	if (data.show_losses) {
		$('#profile_viewer .stats .match_losses_txt').text(~~data.speed_match_losses);
		$('#profile_viewer .stats .single_losses_txt').text(~~data.speed_single_losses);
		$('#profile_viewer .stats .match_draws_txt').text(~~data.speed_match_draws);
		$('#profile_viewer .stats .single_draws_txt').text(~~data.speed_single_draws);
		$('#profile_viewer .stats .match_losses_txt').show();
		$('#profile_viewer .stats .single_losses_txt').show();
		$('#profile_viewer .stats .match_draws_txt').show();
		$('#profile_viewer .stats .single_draws_txt').show();
		$('#profile_viewer .stats .losses_lbl').show();
		$('#profile_viewer .stats .draws_lbl').show();
	}
	else {
		$('#profile_viewer .stats .match_losses_txt').hide();
		$('#profile_viewer .stats .single_losses_txt').hide();
		$('#profile_viewer .stats .match_draws_txt').hide();
		$('#profile_viewer .stats .single_draws_txt').hide();
		$('#profile_viewer .stats .losses_lbl').hide();
		$('#profile_viewer .stats .draws_lbl').hide();
	}
}

/*function enableComments(str) {
	$('#profile_bottom .comment_txt').val("");
	$('#profile_bottom .post_comment_btn').disable(false);
	$('#profile_bottom .comment_txt').removeAttr("readonly");
	$('#profile_bottom .comment_txt').css("color", "black");
	$('#profile_bottom .comment_txt').prop("disabled", false);
}

function disableComments(str) {
	$('#profile_bottom .comment_txt').val(str);
	$('#profile_bottom .post_comment_btn').disable(true);
	$('#profile_bottom .comment_txt').attr("readonly", "readonly");
	$('#profile_bottom .comment_txt').css("color", "#999999");
	$('#profile_bottom .comment_txt').prop("disabled", true);
}*/

function enableComments() {
	$('#profile_bottom .comment_txt, #profile_bottom2 .post_testimonial_txt').val("");
	$('#profile_bottom .comment_txt, #profile_bottom2 .post_testimonial_txt').removeAttr("readonly");
	$('#profile_bottom .comment_txt, #profile_bottom2 .post_testimonial_txt').css("color", "black");
	$('#profile_bottom .comment_txt, #profile_bottom2 .post_testimonial_txt').prop("disabled", false);
	$('#profile_bottom .post_comment_btn, #profile_bottom2 .post_testimonial_btn').disable(false);
}

function disableComments(str) {
	$('#profile_bottom .comment_txt, #profile_bottom2 .post_testimonial_txt').val(str);
	$('#profile_bottom .comment_txt, #profile_bottom2 .post_testimonial_txt').attr("readonly", "readonly");
	$('#profile_bottom .comment_txt, #profile_bottom2 .post_testimonial_txt').css("color", "#999999");
	$('#profile_bottom .comment_txt, #profile_bottom2 .post_testimonial_txt').prop("disabled", true);
	$('#profile_bottom .post_comment_btn, #profile_bottom2 .post_testimonial_btn').disable(true);
}
		
function onAvatarTweened(data) {
	if (currentLabel != "profile_viewer") {
		return;
	}
	if (admin > 2 || moderator) {
		if (data.pics.length > 0) {
			$('#profile_viewer .remove_btn').show();
			$('#profile_viewer .nsfw_cb').show();
			$('#profile_viewer .nsfw_lbl').show();
		}
	}
	if (!always_show_nsfw) {
		if (data.nsfw) {
			$('#profile_viewer .nsfw_btn').show();
		}
	}
	if (data.pics.length > 1) {
		for (var i = 0; i < data.pics.length; i++) {
			if (data.pics[i] == data.pic) {
				$('#profile_viewer .profile_avatar').data("id", data.ids[i]);
				selectedThumb = i;
			}
		}
		if (selectedThumb > 0) {
			$('#profile_viewer .prev_thumb_btn').show();
		}
		if (selectedThumb < data.pics.length - 1) {
			$('#profile_viewer .next_thumb_btn').show();
		}
	}
	if (simple) {
		$('#profile_viewer .thumbs .thumbnail').css("opacity", 1);
	}
}

function SocialButton(data) {
	var src = 'svg/' + data.site + '.svg"';
	switch(data.site) {
		case "pokemon_go":
		case "duel_links":
		case "youtube":
		case "master_duel":
		case "facebook":
		case "twitter":
		case "instagram":
		case "discord":
		case "twitch":
		case "snapchat":
		case "skype":
		case "kik":
		case "tumblr":
			//src = data.site + '_btn.jpg" width="30" height="30"';
			src = data.site + '.jpg" width="30" height="30"';
			break;
	}
	var img = $('<img src="' + IMAGES_START + src + ' />');
	var social_btn = $('<div class="social_btn"></div>');
	social_btn.addClass(data.site + "_btn");
	var social_bg = $('<div class="social_bg"></div>');
	social_btn.data("site", data.site);
	social_btn.data("link", data.link);
	social_btn.click(socialClickE);
	social_btn.append(social_bg);
	social_btn.append(img);
	return social_btn;
}

function socialClickE(e) {
	switch($(this).data("site")) {
		case "facebook":
		case "twitter":
		case "youtube":
		case "instagram":
		case "tumblr":
		case "twitch":
			window.open($(this).data("link"));
			return;
		case "skype":
			displayBox("Skype Username", $(this).data("link"));
			break;
		case "snapchat":
			displayBox("Snapchat Username", $(this).data("link"));
			break;
		case "kik":
			displayBox("Kik Username", $(this).data("link"));
			break;
		case "discord":
			displayBox("Discord Username", $(this).data("link"));
			break;
		case "duel_links":
			displayBox("Duel Links Duelist ID", $(this).data("link"));
			break;
		case "pokemon_go":
			displayBox("Pokemon Go Trainer Go", $(this).data("link"));
			break;
		case "master_duel":
			displayBox("Master Duel Duelist ID", $(this).data("link"));
			break;
	}
}
		
function playProfileSong() {
	console.log('playProfileSong');
	if ($('#cross').is(":visible")) {
		muteE();
	}
	$('#profile_song .pause_btn').show();
	$('#profile_song .play_btn').hide();
	playSound(profileSong, false);
}

function stopProfileSong() {
	$('#profile_song .pause_btn').hide();
	$('#profile_song .play_btn').show();
	profileSong.pause();
}
		
function tweenSong() {
	if (!$('#profile_song').is(":visible")) {
		return;
	}
	var width = $('#profile_song .name_txt')[0].scrollWidth;
	var time = width / 100 * 2;
	TweenMax.to($('#profile_song .name_txt'), time, {left:-width, ease:Linear.easeNone, onComplete:function(){
		TweenMax.fromTo($('#profile_song .name_txt'), 2, {left:103}, {left:0, delay:2, ease:Linear.easeNone, onComplete:function(){
			tweenSong();
		}});
	}});
}

function prevSleeveE() {
	createSleeves();
	//sleeveIndex--;
	for (var i = 0; i < sleeves_arr.length; i++) {
		if (sleeves_arr[i].data("id") == sleeveIndex) {
			sleeveIndex = sleeves_arr[i - 1].data("id");
			break;
		}
	}
	displaySleeve();
}

function nextSleeveE() {
	createSleeves();
	//sleeveIndex++;
	for (var i = 0; i < sleeves_arr.length; i++) {
		if (sleeves_arr[i].data("id") == sleeveIndex) {
			sleeveIndex = sleeves_arr[i + 1].data("id");
			break;
		}
	}
	displaySleeve();
}

function showSleeves() {
	createSleeves();
	tweenSleeves();
	$('#sleeve_select').show();
	$('#sleeve_select .content').scrollTop(0);
}

function hideSleeves() {
	$('#sleeve_select').hide();
}

function exitMyProfile() {
	updateActive(false);
	callback = gotoMainMenu;
	if (unsavedChanges && profileBodyState != $('#my_profile .profile_txt').val()) {
		getConfirmation2("Save Profile", "Do you want to save your profile before exiting?", saveProfileAndExit, callback);
		showDim();
		return;
	}
	callback();
}

function saveProfileAndExit() {
	exitAfterSave = true;
	unsavedChanges = false;
	saveProfile();
}

function updateSavedState() {
	unsavedChanges = true;
}

function redeemDonationE() {
	getInput("Redeem Donation", "Enter your PayPal transaction ID:", "", 18, redeemDonation, /[^A-Za-z0-9]/g);
	showDim();
}

function redeemDonation() {
	if ($('#input .input_txt').val() == "") {
		errorE("Transaction ID not specified");
		return;
	}
	Send({"action":"Redeem donation", "id":$('#input .input_txt').val()});
	showDim();
}

function removeImageE() {
	getConfirmation("Remove Image", "Are you sure you want to delete the selected image?", removeImage);
	showDim();
}

function removeImage() {
	showDim();
	Send({"action":"Remove image", "id":$('#' + currentLabel + ' .profile_avatar').data("id"), "username":currentProfile});
}

function loadMyProfileResponse(data) {
	hideDim();
	$('#my_profile .profile_txt').val(data.profile_txt);
	profileBodyState = data.profile_txt;
	unsavedChanges = false;
	if (data.html) {
		$('#my_profile .html_cb').show();
		$('#my_profile .html_lbl').show();
	}
	$('#my_profile .html_cb').checked(!!data.use_html_txt);
	if (data.customs) {
		customs = ~~data.customs;
	}
	sleeveIndex = 0;
	if (data.admin) {
		$('#my_profile .donation_txt').show();
		if (data.calls) {
			$('#my_profile .donation_txt').text(data.calls + " calls/day (" + (admin_status >= 2 ? "5" : "10") + " Required)");
		}
		else {
			$('#my_profile .donation_txt').text("Insufficient calls");
		}
	}
	$('#my_profile .thumbs').hide();
	if (data.customs) {
		loadThumbnails(data);
		if (data.days) {
			$('#my_profile .donation_txt').show();
			$('#my_profile .donation_txt').text("Donation Reward: " + data.days + " left");
		}
		$('#my_profile .upload_btn').show();
		$('#my_profile .html_cb').show();
		$('#my_profile .html_lbl').show();
	}
	if (data.sleeve) {
		sleeveIndex = ~~data.sleeve.substring(0, data.sleeve.indexOf("."));
		
		$('#sleeve .image').attr("src", SLEEVE_START + data.sleeve);
		$('#my_profile #sleeve').data("id", sleeveIndex);
		//if (sleeveIndex <= 132) {
			//if (sleeveIndex < 132) {
			if (sleeveIndex < sleeve_images_arr[sleeve_images_arr.length - 1] || custom_sleeves_arr.length > 0 && sleeveIndex < custom_sleeves_arr[custom_sleeves_arr.length - 1]) {
				$('#next_sleeve_btn').show();
			}
			if (sleeveIndex > 1) {
				$('#prev_sleeve_btn').show();
			}
		//}
		
		displaySleeve();
	}
	else {
		sleeveIndex = 1;
		$('#my_profile .next_sleeve_btn').show();
	}
	if (data.nsfw) {
		if (!always_show_nsfw) {
			$('#my_profile .nsfw_btn').show();
		}
		$('#my_profile .nsfw_cb').checked(true);
	}
	$('#my_profile .profile_avatar .image').attr("src", getAvatarStart(data.pic));
	if (data.pic.indexOf(".") >= 5) {
		$('#my_profile .nsfw_cb').show();
		$('#my_profile .nsfw_lbl').show();
		$('#my_profile .remove_btn').show();
	}
}

function removeImageResponse(data) {
	hideDim();
	if (currentLabel == "my_profile") {
		loadThumbnails(data);
		$('#my_profile .nsfw_cb').checked(!!data.nsfw);
		$('#my_profile .profile_avatar .image').attr("src", getAvatarStart(data.default));
		$('#my_profile .profile_avatar').data("id", data.id);
		if (data.pics.length == 0) {
			$('#my_profile .remove_btn').hide();
			$('#my_profile .nsfw_cb').hide();
			$('#my_profile .nsfw_lbl').hide();
		}
	}
	else if (currentLabel == "profile_viewer") {
		loadProfile(currentProfile);
	}
}

function getDonationInfoE() {
	getInput("Redeem Donation", "Don't know your transaction ID? Enter the email you used below:", "", 50, getDonationInfo);
	showDim();
}

function getDonationInfo() {
	if ($('#input .input_txt').val() == "") {
		errorE("Email cannot be blank");
		return;
	}
	showDim();
	Send({"action":"Get donation info", "email":$('#input .input_txt').val()});
}
		
function uploadSleeve() {
	var file = this.files[0];
	if (file.size > 4294967296) {
		errorE("max upload size is 4 GB");
		return;
	}
	var fd = new FormData();
	fd.append("user_id", userId);
	fd.append("username", username);
	fd.append("password", password);
	fd.append("Filedata", file);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/upload-sleeve.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText);
			var data = JSON.parse(xhr.responseText);
			if (data.action == "Success") {
				if (!remote) {
					//Send({"action":"Get sleeve"});
				}
				return;
			}
			errorE(data.message);
		}
	}
	xhr.send(fd);
}

function uploadAvatarE() {
	if (currentLabel != "my_profile") {
		return;
	}
	$('.upload_avatar_btn').click();
}

function uploadAvatar() {
	var file = this.files[0];
	if (file.size > 4294967296) {
		errorE("File is too large");
		return;
	}
	var fd = new FormData();
	fd.append("user_id", userId);
	fd.append("username", username);
	fd.append("password", password);
	fd.append("Filedata", file);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/upload-profile-pic.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText);
			var data = JSON.parse(xhr.responseText);
			if (data.action == "Success") {
				Send({"action":"Get profile pic"});
				return;
			}
			errorE(data.message);
			$('input[type="file"]').val(null);
		}
	}
	xhr.send(fd);
}

function loadProfilePic(data) {
	$('#my_profile .profile_avatar .image').attr("src", getAvatarStart(data.pic));
	$('#my_profile .profile_avatar').data("id", data.id);
	var thumb = getNextThumb();
	if (thumb) {
		thumb.data("id", data.id);
		thumb.find('img').attr("src", getAvatarStart(data.pic));
		thumb.find('.no_image').hide();
		thumb.off("click", uploadAvatarE);
		thumb.click(onThumbClick);
	}
	simple = data.simple;
}

function loadSleeve(data) {
	$('#sleeve .image').attr("src", SLEEVE_START + data.pic);
	$('#sleeve').data("id", data.id);
		sleeveIndex = data.id;
}

function getNextThumb() {
	var arr = $('#my_profile .thumbs').children();
	for (var i = 0; i < arr.length; i++) {
		if (~~arr.eq(i).data("id") == 0) {
			return arr.eq(i);
		}
	}
	return null;
}

function commentReceived(data) {
	var notification = new Notification();
	notification.setupComment(1);
	if (data.require_comment_approval) {
		notification.data("callback", gotoComments);
	}
	else {
		notification.data("callback", function(){
			reloadProfile(data.username);
		});
	}
	addToNotifications(notification);
}

function testimonialReceived(data) {
	if (username.indexOf('Resource Judge') < 0 || moderator < 2) {
		return;
	}
	var notification = new Notification();
	notification.setupTestimonial(1);
	notification.data("callback", gotoProfileViewer);
	addToNotifications(notification);
}

/*function loadCommentsResponse(data) {
	$('#comments .title_txt').text("Profile Comments (" + data.length + ")");
	$('#comments .content').html("");
	item_arr = [];
	var bottomY = 0;
	var subject = $('#comments .received_cb').val();
	for (var i = 0; i < data.length; i++) {
		data[i].delay = true;
		var comment = new Comment(data[i]);
		manageLikes(comment, data[i]);
		$('#comments .content').append(comment);
		if (subject == "sent") {
			var arrow = $('<img class="arrow" src="' + IMAGES_START + 'svg/arrow.svg" />');
			arrow.insertAfter(comment.find('.date_txt'));
			comment.addClass("sent_comment");
			comment.find('.arrow').show();
			comment.find('.like_btn').hide();
			comment.find('.likes').data("likeX", parseInt(comment.find('.likes').css("left")) + 55);
			moveCenter(comment.find('.likes'));
		}
		if (!data[i].approved && subject == "received") {
			var approve_btn = $('<div class="approve_btn arial_rounded25">Approve</div>');
			approve_btn.click(approveComment);
			approve_btn.insertAfter(comment.find('.delete_btn'));
		}
		comment.css("top", bottomY);
		item_arr.push(comment);
		if (!simple && i < 50) {
			TweenMax.fromTo(comment, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
		bottomY += comment[0].scrollHeight + 12;
	}
	$('#comments .content').trigger("scroll");
}*/

function loadCommentsResponse(data) {
	//commentY = 0;
	viewing_comments = true;
	comments_data = JSON.parse(JSON.stringify(data));
	$('#comments .title_txt').text("Profile Comments (" + data.length + ")");
	$('#comments .content').trigger("scroll");
	for (var i = 0; i < data.length; i++) {
		if (!simple && i < 50) {
			TweenMax.fromTo($('#comments .content .comment').eq(i), 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	}
}

function appendComment() {
	if (comments_data.length == 0) {
		return;
	}
	console.log('a');
	if ($('#comments .content').scrollTop() >= $('#comments .content').scrollMax() - 5) {
		var data = comments_data[0];
		comments_data.splice(0, 1);
		var comment = new Comment(data);
		manageLikes(comment, data);
		$('#comments .content').append(comment);
		setText(comment.find('.username_txt'));
		var subject = $('#comments .received_cb').val();
		console.log('b');
		if (subject == "sent") {
			console.log('c');
			var arrow = $('<img class="arrow" src="' + IMAGES_START + 'svg/arrow.svg" />');
			arrow.insertAfter(comment.find('.date_txt'));
			comment.addClass("sent_comment");
			comment.find('.arrow').show();
			comment.find('.like_btn').hide();
			comment.find('.likes').data("likeX", parseInt(comment.find('.likes').css("left")) + 55);
			//moveCenter(comment.find('.likes')); // use line at bottom of this function
		}
		if (!data.approved && subject == "received") {
			var approve_btn = $('<div class="approve_btn arial_rounded25">Approve</div>');
			approve_btn.click(approveComment);
			approve_btn.insertAfter(comment.find('.delete_btn'));
		}
		comment.css("top", commentY);
		commentY += comment[0].scrollHeight + 12;
		$('#comments .content').trigger("scroll");
	}
	$('.sent_comment .likes').css("left", 175); // because the Avatar and Likes in sent comments are indented to the right further than usual, moveCenter doesn't give the correct position
}

function postComment(e) {
	var str = $('#profile_bottom .comment_txt').val();
	if (str == "") {
		errorE("Comment is blank");
		return;
	}
	str = stripSpaces(str);
	str = replaceReturns(str);
	if (str.split('\n').length - 1 > 8) {
		errorE("There are too many line breaks in this comment");
		return;
	}
	Send({"action":"Post comment", "username":currentProfile, "comment":str, "reply":~~$('#profile_bottom .reply_cb').is(":checked"), "reply_to_username":commentReplyTo});
	showDim();
	$(':focus').blur();
}

function postTestimonial() {
	if ($('#profile_bottom2 .post_testimonial_txt').val() == "") {
		displayBox("Error", "Testimonial is blank");
		return;
	}
	showDim();
	if ($('#profile_bottom2 .rating_cb').prop("selectedIndex") == 0	&& !$('#profile_bottom2 .reply_cb').is(":checked")) {
		var options = '<option value="0"></option>';
		options += '<option value="1">Good Experience</option>';
		options += '<option value="-1">Bad Experience</option>';
		getComboBox("Post Testimonial", "How was your experience with this judge:", options, 1, function(){
			$('#profile_bottom2 .rating_cb').selectedIndex($('#combo .combo_cb').prop("selectedIndex"));
			postTestimonial();
		});
		return;
	}
	var str = $('#profile_bottom2 .post_testimonial_txt').val();
	str = stripSpaces(str);
	str = replaceReturns(str);
	if (str.split('\n').length - 1 > 8) {
		displayError("There are too many line breaks in this testimonial");
		return;
	}
	Send({"action":"Post testimonial", "receiver_id":currentProfileId, "username":currentProfile, "testimonial":str, "reply":~~$('#profile_bottom2 .reply_cb').is(":checked"), "reply_to":replyToId, "rating":~~$('#profile_bottom2 .rating_cb').val()});
}

function toggleReply() {
	if ($(this).is(":checked")) {
		$('#profile_bottom .reply_lbl, #profile_bottom2 .reply_lbl').show();
		return;
	}
	$('#profile_bottom .reply_lbl, #profile_bottom2 .reply_lbl').hide();
}

function replyToCommentE(e) {
	commentReplyTo = $(this).parent().find('.username_txt').text();
	$('#profile_bottom .reply_cb').show();
	$('#profile_bottom .reply_cb').checked(true);
	$('#profile_bottom .reply_lbl').text("Reply to: " + commentReplyTo);
	$('#profile_bottom .reply_lbl').show();
	setText($('#profile_bottom .reply_lbl'));
	var maxVSP = $('#profile_content').scrollMax();
	tweenScrollbar($('#profile_content'), 0.7, {scrollTop:maxVSP, ease:Expo.easeInOut, onComplete:function(){
		$('#profile_bottom .comment_txt').focus();
	}});
}

function replyToTestimonialE() {
	console.log(replyToTestimonialE);
	commentReplyTo = $(this).parent().data("username");
	replyToId = $(this).parent().data("id");
	$('#profile_bottom2 .reply_cb').show();
	$('#profile_bottom2 .reply_cb').disable(false);
	$('#profile_bottom2 .reply_cb').checked(true);
	$('#profile_bottom2 .reply_lbl').text("Reply to: " + commentReplyTo);
	$('#profile_bottom2 .reply_lbl').show();
	setText($('#profile_bottom2 .reply_lbl'));
	var maxVSP = $('.profile_content:visible').scrollMax();
	tweenScrollbar($('.profile_content:visible'), 0.7, {scrollTop:maxVSP, ease:Expo.easeInOut, onComplete:function(){
		$('#profile_bottom2 .post_testimonial_txt').focus();
	}});
	//enableComments();
}

/*function loadUserCommentsResponse(data) {
	commentsLoaded = true;
	var content = $('#all_comments .content');
	for (var i = 0; i < data.length; i++) {
		var comment = new Comment(data[i]);
		comment.find('.delete_btn')
		manageLikes(comment, data[i]);
		content.append(comment);
		setText(comment.find('.username_txt'));
		comment.css("top", commentY);
		if (!simple && i < 50) {
			TweenMax.fromTo(comment, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
		commentY += comment[0].scrollHeight + 12;
		all_comments_arr.push(comment);
	}
	if (total_comments > all_comments_arr.length) {
		view_more_comments_btn.css("top", commentY);
		view_more_comments_btn.show();
		$('#all_comments .content').append(view_more_comments_btn);
	}
}*/

function loadUserCommentsResponse(data) {
	commentsLoaded = true;
	comments_data = JSON.parse(JSON.stringify(data));
	$('#all_comments .content').trigger("scroll");
	for (var i = 0; i < data.length; i++) {
		if (!simple && i < 50) {
			TweenMax.fromTo($('#all_comments .content .comment').eq(i), 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	}
}

function appendUserComment(data) {
	if (comments_data.length == 0) {
		return;
	}
	if ($('#all_comments .content').scrollTop() >= $('#all_comments .content').scrollMax() - 5) {
		var data = comments_data[0];
		comments_data.splice(0, 1);
		var comment = new Comment(data);
		comment.find('.delete_btn')
		manageLikes(comment, data);
		$('#all_comments .content').append(comment);
		setText(comment.find('.username_txt'));
		comment.css("top", userCommentY);
		userCommentY += comment[0].scrollHeight + 12;
		//all_comments_arr.push(comment);
		//$('#all_comments .content').append(comment);
		$('#all_comments .content').trigger("scroll");
	}
}

function viewAllComments() {
	$('#all_comments').show();
	TweenMax.fromTo($('#profile_content'), 1, {left:0}, {left:1024, ease:Circ.easeInOut});
	TweenMax.fromTo($('#all_comments'), 1, {left:-1024}, {left:0, ease:Circ.easeInOut, onComplete:function(){
		$('#profile_content').hide();
		if (!commentsLoaded) {
			loadUserComments();
		}
	}});
}

function loadUserComments() {
	Send({"action":"Load user comments", "user_id":currentProfileId, "limit":comment_limit});
}

function loadMoreUserComments() {
	view_more_comments_btn.hide();
	comment_limit += 50;
	loadUserComments();
}

function approveComment() {
	showDim();
	selectedComment = $(this).parent();
	Send({"action":"Approve comment", "comment":selectedComment.data("id")});
	selectedComment.find('.approve_btn').hide();
}

function deleteCommentE2() {
	selectedComment = $(this).parent();
	getConfirmation("Delete Comment", "Are you sure you want to delete the selected comment?", deleteComment2);
	showDim();
}

function deleteComment2() {
	deleteComment(selectedComment);
}

function deleteCommentE(comment) {
	selectedComment = comment;
	getConfirmation("Delete Comment", "Are you sure you want to delete the selected comment?", deleteComment2);
	showDim();
}

function deleteComment(comment) {
	comment.css("opacity", 0.5);
	comment.find('.delete_btn').hide();
	comment.find('.reply_btn').hide();
	comment.find('.approve_btn').hide();
	comment.find('.like_btn').hide();
	comment.find('.likes').hide();
	var action = "Delete comment";
	if (comment.hasClass("testimonial")) {
		action = "Delete testimonial";
	}
	Send({"action":action, "comment":comment.data("id"), "receiver_id":comment.data("receiver_id"), "receiver_username":comment.data("receiver_username"), "sender_username":comment.find('.username_txt').text()});
}

function viewAllFriends() {
	$('#all_friends').show();
	if (!friendsLoaded) {
		$('#all_friends .content .friend_item').detach();
	}
	TweenMax.fromTo($('#profile_content'), 1, {left:0}, {left:-1024, ease:Circ.easeInOut});
	TweenMax.fromTo($('#all_friends'), 1, {left:1024}, {left:0, ease:Circ.easeInOut, onComplete:function(){
		$('#profile_content').hide();
		if (!friendsLoaded) {
			loadUserFriends();
		}
	}});
}

function backToProfile() {
	$('#profile_content').show();
	TweenMax.to($('#all_comments'), 1, {left:-1024, ease:Circ.easeInOut});
	TweenMax.to($('#all_friends'), 1, {left:1024, ease:Circ.easeInOut});
	TweenMax.to($('#profile_content'), 1, {left:0, ease:Circ.easeInOut, onComplete:function(){
		$('#all_comments').hide();
		$('#all_friends').hide();
	}});
	$(':focus').blur();
}

function loadUserFriends() {
	Send({"action":"Load user friends", "user_id":currentProfileId, "username":currentProfile});
}

/*function loadUserFriendsResponse(data) {
	profileFriends = data.friends;
	friendsLoaded = true;
	var friendX = 16;
	var friendY = 0;
	item_arr = [];
	for (var i = 0; i < profileFriends.length; i++) {
		profileFriends[i].delay = true;
		var friend = new FriendItem(profileFriends[i]);
		friend.css("left", friendX);
		friend.css("top", friendY);
		if (!simple && i < 40) {
			TweenMax.fromTo(friend, 0.7, {left:friendX + 200, top:friendY + 100, alpha:0}, {left:friendX, top:friendY, alpha:1, delay:0.04 * i, ease:Expo.easeInOut});
		}
		friendY += 50;
		if (friendY > 450) {
			friendX += 254;
			friendY = 0;
		}
		item_arr.push(friend);
		all_friends_arr.push(friend);
	}
	$('#all_friends .content').scroll(horizontalScrollE);
	$('#all_friends .content').trigger("scroll");
}*/

function loadUserFriendsResponse(data) {
	//profileFriends = data.friends;
	profileFriends = JSON.parse(JSON.stringify(data.friends));
	friendsLoaded = true;
	var friendX = 16;
	var friendY = 0;
	$('#all_friends .content').trigger("scroll");
	for (var i = 0; i < profileFriends.length; i++) {
		if (simple || i >= 50) {
			break;
		}
		TweenMax.fromTo($('#all_friends .content .friend_item').eq(i), 0.7, {left:friendX + 200, top:friendY + 100, alpha:0}, {left:friendX, top:friendY, alpha:1, delay:0.04 * i, ease:Expo.easeInOut});
		friendY += 50;
		if (friendY > 450) {
			friendX += 254;
			friendY = 0;
		}
	}
}

function appendUserFriend(data) {
	if (profileFriends.length == 0) {
		return;
	}
	if ($('#all_friends .content').scrollLeft() >= $('#all_friends .content').scrollLeftMax()) {
		var friendX = Math.floor($('#all_friends .content .friend_item').length / 10) * 254;
		var friendY = 0;
		for (var i = 0; i < 10; i++) {
			if (profileFriends.length == 0) {
				return;
			}
			var data = profileFriends[0];
			profileFriends.splice(0, 1);
			var friend = new FriendItem(data);
			friend.css("left", friendX);
			friend.css("top", friendY);
			friendY += 50;
			$('#all_friends .content').append(friend);
			setText(friend.find('.username_txt'));
		}
		$('#all_friends .content').trigger("scroll");
	}
}

function loadThumbnails(data) {
	$('#' + currentLabel + ' .prev_thumb_btn').hide();
	$('#' + currentLabel + ' .next_thumb_btn').hide();
	$('#' + currentLabel + ' .thumbs .thumbnail').css("opacity", 0);
	$('#' + currentLabel + ' .thumbs .thumbnail .nsfw').hide();
	totalThumbs = data.pics.length;
	var thumbs = $('#' + currentLabel + ' .thumbs .thumbnail');
	for (var i = 0; i < thumbs.length; i++) {
		var thumb = thumbs.eq(i);
		thumb.off("click", uploadAvatarE);
		thumb.off("click", onThumbClick);
		if (data.pics.length >= i + 1) {
			thumb.data("index", i);
			thumb.data("id", data.ids[i]);
			thumb.data("nsfw", data.nsfws[i]);
			thumb.find('img').attr("src", IMAGES_START + "blank.png");
			thumb.find('img').attr("src", getAvatarStart(data.pics[i]));
			thumb.click(onThumbClick);
			if (selectedThumb > 1) {
				$('#' + currentLabel + ' .prev_thumb_btn').show();
			}
			if (i < data.pics.length - 1) {
				$('#' + currentLabel + ' .next_thumb_btn').show();
			}
			if (data.pic == data.pics[i]) {
				$('#' + currentLabel + ' .profile_avatar').data("id", data.ids[i]);
			}
			if (data.nsfws[i]) {
				if (!always_show_nsfw || currentLabel != "my_profile") {
					thumb.find('.nsfw').show();
				}
			}
			thumb.find('.no_image').hide();
		}
		else {
			thumb.find('img').attr("src", IMAGES_START + "blank.png");
			thumb.find('.no_image').show();
			thumb.click(uploadAvatarE);
		}
		thumb.data("index", i);
		TweenMax.to(thumb, (i * 200 + 342) / 1000, {onComplete:function(){
			$(this.target).css("opacity", 1);
		}});
	}
	$('#' + currentLabel + ' .thumbs').show();
}

function onThumbClick() {
	selectedThumb = $(this).data("index");
	$('#' + currentLabel + ' .profile_avatar').data("id", $(this).data("id"));
	$('#' + currentLabel + ' .profile_avatar').data("nsfw", $(this).data("nsfw"));
	$('#' + currentLabel + ' .profile_avatar').data("pic", $(this).data("pic"));
	$('#' + currentLabel + ' .nsfw_cb').checked(!!$(this).data("nsfw"));
	displayThumb();
}

function prevThumb() {
	selectedThumb--;
	$('.profile_avatar .wins').hide();
	displayThumb();
}

function nextThumb() {
	selectedThumb++;
	$('.profile_avatar .wins').hide();
	displayThumb();
}

function displayThumb() {
	$('#' + currentLabel + ' .prev_thumb_btn').hide();
	$('#' + currentLabel + ' .next_thumb_btn').hide();
	if (selectedThumb > 0) {
		$('#' + currentLabel + ' .prev_thumb_btn').show();
	}
	if (selectedThumb < totalThumbs - 1) {
		$('#' + currentLabel + ' .next_thumb_btn').show();
	}
	$('#my_profile .nsfw_cb').show();
	$('#my_profile .nsfw_lbl').show();
	$('#my_profile .remove_btn').show();
	if ($('#' + currentLabel + ' .profile_avatar').data("nsfw")) {
		$('#' + currentLabel + ' nsfw_cb').checked(true);
	}
	else {
		$('#' + currentLabel + ' nsfw_cb').checked(false);
	}
	var thumbs = $('#' + currentLabel + ' .thumbs .thumbnail');
	$('#' + currentLabel + ' .profile_avatar .image').attr("src", thumbs.eq(selectedThumb).find('img').attr("src"));
	$('#' + currentLabel + ' .profile_avatar .nsfw').hide();
}

function saveProfile() {
	var id = ~~$('#my_profile .profile_avatar').data("id");
	if (!customs) {
		if (avatar_images_arr.indexOf(id) >= 0) {
			if (total_wins < avatar_wins_arr[avatar_images_arr.indexOf(id)]) {
				errorE("You need " + avatar_wins_arr[avatar_images_arr.indexOf(id)] + " wins in order to use this avatar");
				return;
			}
		}
		if ($('#my_profile #sleeve').data("exp_needed") > total_exp) {
			errorE("You need " + $('#my_profile #sleeve').data("exp_needed") + " experience in order to use this sleeve");
			return;
		}
	}
	showDim();
	unsavedChanges = false;
	updateActive(false);
	var str = $('#my_profile .profile_txt').val();
	str = replaceReturns(str);
	Send({"action":"Save profile", "profile_txt":str, "html":~~$('#my_profile .html_cb').is(":checked"), "pic":id, "nsfw":~~$('#my_profile .nsfw_cb').is(":checked"), "sleeve":~~$('#my_profile #sleeve').data("id")});
	update_statuses = true;
}

function saveJudgeProfile() {
	var str = $('#judge_profile_txt').val();
	str = replaceReturns(str);
	Send({"action":"Save judge profile", "profile_txt":str});
	unsavedChanges = false;
	updateActive(false);
	showDim();
}

function rankingsResponse(data) {
	hideDim();
	rankings_data = data;
	viewing_rankings = true;
	$('#by_rating_btn_activated').hide();
	$('#by_wins_btn_activated').hide();
	$('#by_experience_btn_activated').hide();
	$('#by_total_experience_btn_activated').hide();
	var color = "#33FF66";
	switch (data.action) {
		case "Ranking by rating":
			$('#by_rating_btn_activated').show();
			$('.ranking_item').eq(0).find('.item1_txt').text("Rating");
			$('.ranking_item').eq(0).find('.item2_txt').text("Wins");
			$('.ranking_item').eq(0).find('.item3_txt').text("Losses");
			$('.ranking_item').eq(0).find('.item4_txt').text("Draws");
			$('.ranking_item').eq(0).find('.item5_txt').text("Experience");
			break;
		case "Ranking by wins":
			$('#by_wins_btn_activated').show();
			color = "#FF9999";
			break;
		case "Ranking by rep":
			$('#by_experience_btn_activated').show();
			color = "#6699FF";
			break;
		case "Ranking by total rep":
			$('#by_total_experience_btn_activated').show();
			color = "#FFFF00";
			break;
	}
	if (data.matches) {
		$('#rankings .matches_rb').checked(true);
		$('#rankings .singles_rb').checked(false);
	}
	else {
		$('#rankings .matches_rb').checked(false);
		$('#rankings .singles_rb').checked(true);
	}
	$('#rankings .content').html("");
	var header = new RankingItem({"entry1":"Username", "entry2":"Rating", "entry3":"Wins", "entry4":"Losses", "entry5":"Draws", "entry6":"Experience"});
	switch (data.action) {
		case "Ranking by wins":
			header.find('.item1_txt').text("Wins");
			header.find('.item2_txt').text("Losses");
			header.find('.item3_txt').text("Draws");
			header.find('.item4_txt').text("Rating");
			header.find('.item5_txt').text("Experience");
			break;
		case "Ranking by rep":
			header.find('.item1_txt').text("Experience");
			header.find('.item2_txt').text("Rating");
			header.find('.item3_txt').text("Wins");
			header.find('.item4_txt').text("Losses");
			header.find('.item5_txt').text("Draws");
			break;
		case "Ranking by total rep":
			header.find('.item1_txt').text("Total Exp");
			header.find('.item2_txt').text("Single Exp");
			header.find('.item3_txt').text("Match Exp");
			header.find('.item4_txt').text("S. Rating");
			header.find('.item5_txt').text("M. Rating");
			break;
	}
	header.css("font-weight", "bold");
	header.css("background-color", color);
	header.css("pointer-events", "none");
	$('#rankings .content').append(header);
	for (var i = 0; i < data.results.length; i++) {
		var item = new RankingItem(data.results[i]);
		item.css("top", (i + 1) * 30);
		item.find('.rank_txt').text((i + 1) + '.');
		$('#rankings .content').append(item);
		if (i < 50) {
			TweenMax.fromTo(item, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.02 * i, ease:Expo.easeInOut});
		}
	}
}

function rankingsE(e) {
	var action = "Ranking by rating";
	if (e) {
		switch(e.currentTarget) {
			case $('#by_rating_btn')[0]:
				action = "Ranking by rating";
				break;
			case $('#by_wins_btn')[0]:
				action = "Ranking by wins";
				break;
			case $('#by_experience_btn')[0]:
				action = "Ranking by rep";
				break;
			case $('#by_total_experience_btn')[0]:
				action = "Ranking by total rep";
				break;
		}
	}
	else {
		if ($('#by_rating_btn_activated').is(":visible")) {
			action = "Ranking by rating";
		}
		else if ($('#by_wins_btn_activated').is(":visible")) {
			action = "Ranking by wins";
		}
		else if ($('#by_experience_btn_activated').is(":visible")) {
			action = "Ranking by rep";
		}
		else if ($('#by_total_experience_btn_activated').is(":visible")) {
			action = "Ranking by total rep";
		}
	}
	Send({"action":action, "matches":$('#rankings .matches_rb').is(":checked"), "period":$('#rankings .period_cb').val(), "format":$('#rankings .format_cb').val(), "location":""});
	showDim();
}

function gotoRankings() {
	$('#rankings .matches_rb').checked(true);
	$('#rankings .singles_rb').checked(false);
	//$('#rankings .format_cb').selectedIndex(0);
	//$('#rankings .period_cb').selectedIndex(0);
	$('#rankings .content').html("");
	goto('rankings');
	if (viewing_rankings) {
		rankingsResponse(rankings_data);
		return;
	}
	rankingsE();
}

function gotoMessages() {
	$('#messages .cin_txt').disable(true);
	$('#messages .cout_txt').addClass("disabled");
	$('#messages .cout_txt').html("");
	$('#messages .timestamps_cb').checked(false);
	$('#messages .timestamps_cb').disable(true);
	$('#messages .html_cb').checked(false);
	$('#messages .html_cb').disable(true);
	$('#messages .html_cb').hide();
	$('#messages .html_lbl').hide();
	$('#messages .filter_users_tx').disable(true);
	$('#messages .search_messages_txt').disable(true);
	$('#messages .messages_content').html("");
	$('#messages input[type=text]').val("");
	goto('messages');
	loadMessages();
}

function gotoBrowseUsers() {
	$('#browse_users .friends_cb').hide();
	$('#browse_users .friends_lbl').hide();
	$('#browse_users .following_cb').hide();
	$('#browse_users .following_lbl').hide();
	if (moderator) {
		$('#browse_users .friends_cb').show();
		$('#browse_users .friends_lbl').show();
		$('#browse_users .following_cb').show();
		$('#browse_users .following_lbl').show();
	}
	goto('browse_users');
	$('#browse_users .username_txt').focus();
	if (browsing) {
		browseUsersResponse(browse_data);
		return;
	}
	browseUsers();
}

function browseUsers() {
	showDim();
	browsing = true;
	Send({"action":"Browse users", "username":$('#browse_users .username_txt').val(), "online":$('#browse_users .online_cb').is(":checked"), "pics":$('#browse_users .pics_cb').is(":checked"), "all_genders":$('#browse_users .all_genders_rb').is(":checked"), "male":$('#browse_users .male_rb').is(":checked"), "female":$('#browse_users .female_rb').is(":checked"), "all_orientations":$('#browse_users .all_orientations_rb').is(":checked"), "straight":$('#browse_users .straight_rb').is(":checked"), "gay":$('#browse_users .gay_rb').is(":checked"), "bi":$('#browse_users .bi_rb').is(":checked"), "matches":$('#browse_users .matches_rb').is(":checked"), "singles":$('#browse_users .singles_rb').is(":checked"), "rating_lower":$('#browse_users .rating_lower_txt').val(), "rating_upper":$('#browse_users .rating_upper_txt').val(), "rep_lower":$('#browse_users .rep_lower_txt').val(), "rep_upper":$('#browse_users .rep_upper_txt').val(), "location":$('#browse_users .location_txt').val(), "language":$('#browse_users .language_txt').val(), "social":$('#browse_users .social_cb').val(), "distance":~~$('#browse_users .distance_cb').val(), "last_seen":$('#browse_users .last_seen_cb').val(), "order":$('#browse_users .order_cb').val(), "following":$('#browse_users .following_cb').is(":checked"), "friends":$('#browse_users .friends_cb').is(":checked")});
}

function gotoFollowedUsers() {
	$('#followed_users .title_txt').text("Followed Users");
	$('#followed_users .content').html("");
	goto('followed_users');
	if (viewing_following) {
		loadFollowedUsersResponse(following_data);
		return;
	}
	loadFollowedUsers();
}

function loadFollowedUsers() {
	Send({"action":"Load following"});
	showDim();
}

function loadBlockedUsers() {
	Send({"action":"Load blocked users"});
	showDim();
}
		
function gotoBlockedUsers() {
	goto('blocked_users');
	$('#blocked_users .title_txt').text("Blocked Users");
	$('#blocked_users .content').html("");
	loadBlockedUsers();
}
		
function loadFriends() {
	Send({"action":"Load friends"});
	showDim();
}
		
function gotoFriends() {
	goto('friends');
	$('#friends .title_txt').text("Friends");
	$('#friends .content').html("");
	loadFriends();
}

function gotoFriendRequests() {
	goto('friend_requests');
	$('#friend_requests .title_txt').text("Friend Requests");
	$('#friend_requests .accept_all_btn').hide();
	$('#friend_requests .content').html("");
	loadFriendRequests();
}

function loadFriendRequests() {
	Send({"action":"Load friend requests", "received":$('#friend_requests .received_cb').val()});
	showDim();
}

function acceptAllFriendRequests() {
	for (var i = 0; i < received_friend_requests_arr.length; i++) {
		friends_arr.push(received_friend_requests_arr[i]);
	}
	$('#friend_requests .content').html("");
	$('#friend_requests .title_txt').text("Friend Requests (0)");
	$('#friend_requests .accept_all_btn').hide();
	received_friend_requests_arr = [];
	Send({"action":"Accept all requests"});
	showDim();
}

function gotoComments() {
	goto('comments');
	if (viewing_comments) {
		loadCommentsResponse(comments_data);
		return;
	}
	loadComments();
}

function loadComments() {
	commentY = 0;
	$('#comments .content .comment').detach();
	Send({"action":"Load comments", "received":$('#comments .received_cb').val()});
	showDim();
}

function gotoChangePassword() {
	goto('change_password');
	$('#change_password .current_txt').val("");
	$('#change_password .new_txt').val("");
	$('#change_password .confirm_txt').val("");
	if (!simple) {
		TweenMax.fromTo($('#change_password .boss_key'), 0.7, {left:-630}, {left:64.5, ease:Expo.easeInOut});
		TweenMax.fromTo($('#change_password .change_password'), 0.7, {top:660}, {top:377, ease:Expo.easeInOut, onComplete:function(){
			$('#change_password .current_txt').focus();
		}});
	}
}

function changePassword() {
	if ($('#change_password .current_txt').val() == "") {
		errorE("Current password is blank");
		return;
	}
	if ($('#change_password .new_txt').val() == "") {
		errorE("New password is blank");
		return;
	}
	if ($('#change_password .confirm_txt').val() == "") {
		errorE("New password confirmation is blank");
		return;
	}
	if ($('#change_password .new_txt').val() != $('#change_password .confirm_txt').val()) {
		errorE("New password does not match new password confirmation");
		return;
	}
	var fd = new FormData();
	fd.append("user_id", userId);
	fd.append("current_password", $('#change_password .current_txt').val());
	fd.append("new_password", $('#change_password .new_txt').val());
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/change-password.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			changePasswordComplete(xhr.responseText);
		}
	}
	xhr.send(fd);
	showDim();
}

function changePasswordComplete(str) {
	hideDim();
	var data = JSON.parse(str);
	if (data.action == "Change password") {
		$('#change_password .current_txt').val("");
		$('#change_password .new_txt').val("");
		$('#change_password .confirm_txt').val("");
		messageE(data.message);
	}
	else {
		errorE(data.message);
	}
}

function gotoDuelRecords() {
	goto('duel_records');
	$('#duel_records .content').html("");
	$('#duel_records .username_lbl').hide();
	$('#duel_records .username_txt').hide();
	$('#duel_records .username_txt').val("");
	$('#duel_records .filter_lbl').hide();
	$('#duel_records .filter_txt').hide();
	var arr = ["", "Rated Matches", "Rated Singles", "Unrated Matches", "Unrated Singles"];
	//if ((admin || admin_status >= 3 || moderator >= 2) && judge != 2) {
	//if (admin || admin_status >= 3 || moderator >= 2 || adjudicator) {
	if (admin || admin_status >= 3 || moderator >= 2) {
		if (adjudicator) {
			arr = ["Unrated", "Unrated Matches", "Unrated Singles"];
		}
		else if (moderator < 2 && admin_status < 2) {
			arr = ["Rated", "Rated Matches", "Rated Singles"];
		}
		else {
			arr.splice(1, 0, "Rated");
		}
		$('#duel_records .username_lbl').show();
		$('#duel_records .username_txt').show();
		$('#duel_records .username_txt').focus();
	}
	fillCombobox($('#duel_records .type_cb'), arr);
	$('#duel_records .type_cb').selectedIndex(records_index);
	if (viewing_records) {
		duelRecordsResponse(records_data);
		return;
	}
	viewing_records = true;
	$('#duel_records .type_cb').selectedIndex(0);
	$('#duel_records .period_cb').selectedIndex(0);
	loadDuelRecords();
}

function loadDuelRecords() {
	Send({"action":"Duel records", "type":$('#duel_records .type_cb').val(), "period":$('#duel_records .period_cb').val(), "username":$('#duel_records .username_txt').val()});
	showDim();
}

function messagesEnterHandler(e) {
	if (e.which != 13) {
		return;
	}
	if ($('#messages .cin_txt').val() != "") {
		var arr = $('#private_chat .cell');
		for (var i = 0; i < arr.length; i++) {
			if (arr.eq(i).data("username") == clickedMessageUsername) {
				break;
			}
		}
		if (i == arr.length) {
			var cell = PrivateChatCell(clickedMessageUsername);
			//cell.addClass("selected"); // idk yet
		}
		awaiting_message = true;
		Send({"action":"Private message", "username":clickedMessageUsername, "message":$('#messages .cin_txt').val(), "html":~~$('#messages .html_cb').is(":checked")});
		$('#messages .cin_txt').val("");
	}
}

function loadAllMessagesResponse(data) {
	hideDim();
	$('#messages .search_messages_txt').disable(false);
	if (data.html) {
		$('#messages .html_cb').show();
		$('#messages .html_lbl').show();
	}
	item_arr = [];
	if (data.users.length > 0) {
		for (var i = 0; i < data.users.length; i++) {
			data.users[i].delay = true;
			var item = new MessageItem(data.users[i]);
			setText(item.find('.username_txt'));
			item_arr.push(item);
		}
		$('#messages .filter_users_txt').disable(false);
	}
	filterMessageItems();
	if (!simple) {
		tweenMessageItems();
	}
	$('#messages .messages_content').trigger("scroll");
}

function filterMessageItems() {
	$('.message_item').hide();
	var messageY = 0;
	for (var i = 0; i < item_arr.length; i++) {
		if (item_arr[i].find('.username_txt').text().toLowerCase().indexOf($('.filter_users_txt').val().toLowerCase()) >= 0) {
			item_arr[i].css("top", messageY);
			item_arr[i].show();
			messageY += 55;
		}
	}
	$('.messages_content').scrollTop(0);
	$('.messages_content').trigger("scroll");
}

function tweenMessageItems() {
	for (var i = 0; i < item_arr.length; i++) {
		if (i < 50) {
			TweenMax.fromTo(item_arr[i], 0.7, {left:400, alpha:0}, {left:0, alpha:1, delay:0.05 * i, ease:Expo.easeInOut});
		}
		else {
			item_arr[i].x = 0;
		}
	}
}

function loadMessages() {
	showDim();
	Send({"action":"Load all messages", "message":$('#messages .search_messages_txt').val()});
}

function getMessages() {
	startChatCycle($('#dim'));
	$('#messages .cout_txt').removeClass("disabled");
	$('#messages .cin_txt').disable(false);
	$('#messages .timestamps_cb').disable(false);
	$('#messages .html_cb').disable(false);
	clickedMessageUsername = $(this).parent().find('.username_txt').text();
	console.log('clickedMessageUsername = ' + clickedMessageUsername);
	Send({"action":"Load all private chat", "username":clickedMessageUsername});
}

function loadAllPrivateChatResponse(data) {
	stopChatCycle($('#dim'));
	$('#messages .filter_messages_txt').val("");
	$('#messages .filter_messages_txt').disable(false);
	messages_obj = data;
	filterMessages();
	$('#messages .cout_txt').scrollTop(Infinity);
	$('#messages .cin_txt').focus();
}

function filterMessages() {
	var data = messages_obj;
	var str = "";
	saveMessagesVSP();
	var currentPrivateDate = loginDate;
	var searchingFor = $('#messages .filter_messages_txt').val().toLowerCase();
	var timestamps = $('#messages .timestamps_cb').is(":checked");
	for (var i = 0; i < data.messages.length; i++) { 
		if (data.messages[i].message.toLowerCase().indexOf(searchingFor) >= 0) {
			if (timestamps && data.messages[i].timestamp) {
				str += '<font color="#AAAAAA"><i> ' + data.messages[i].timestamp + ' </i></font>';
			}
			else if (data.messages[i].date != currentPrivateDate) {
				currentPrivateDate = data.messages[i].date;
				str += '<font color="#AAAAAA"><i> ' + data.messages[i].date + '</i></font><br>';
			}
			if ((data.messages[i].username == username || data.messages[i].username == alt_username) && (data.messages[i].color == "0000FF" || !data.messages[i].color)) {
				data.messages[i].color = "FF0000";
			}
			var message = data.messages[i].message;
			if (!data.messages[i].html) {
				message = escapeHTMLWithLinks(data.messages[i].message);
			}
			message = '<font>' + message + '</font>';
			if (data.messages[i].hidden) {
				message = '<font color="#AAAAAA">[Deleted]</font>';
			}
			if (moderator >= 2) {
				str += '<a href="javascript:deletePrivateMessageE(' + data.messages[i].id + ')"><font color="#' + data.messages[i].color + '"><b>' + escapeHTML(data.messages[i].username) + ': </b></font></a>' + message + '<br>';
			}
			else {
				str += '<font color="#' + data.messages[i].color + '"><b>' + escapeHTML(data.messages[i].username) + ': </b></font>' + message + '<br>';
			}
		}
	}
	if (!isOnline(data.username)) {
		str += '<font color="#000000"><b>' + escapeHTML(data.username) + ' is offline</b></font><br>';
	}
	$('#messages .cout_txt').html(str);
	restoreMessagesVSP();
}

function deletePrivateMessageE(id) {
	getConfirmation("Delete Message", "Are you sure you want to delete the specified message?", function(){
		deletePrivateMessage(id);
		for (var i = 0; i < messages_obj.messages.length; i++) {
			if (id == messages_obj.messages[i].id) {
				messages_obj.messages[i].message = "[Deleted]";
				messages_obj.messages[i].hidden = 1;
				break;
			}
		}
		filterMessages();
	});
	showDim();
}

function deletePrivateMessage(id) {
	Send({"action":"Delete private message", "id":id});
}

function addMessageLine(data) {
	awaiting_message = false;
	var color = "#" + data.color;
	var i = 0;
	saveMessagesVSP();
	if (data.username == username) {
		if (color == "#0000FF") {
			color = "#FF0000";
		}	
	}
	if (!data.html) {
		data.message = escapeHTMLWithLinks(data.message);
	}
	$('#messages .cout_txt').append('<b><font color="' + color + '">' + escapeHTML(data.username) + ": </font></b><font>" + data.message + '</font><br>');
	restoreMessagesVSP();
	var arr = $('#private_chat .cell');
	for (i = 0; i < arr.length; i++) {
		if (arr.eq(i).data("username") == data.username) {
			arr.eq(i).data("new_msg", false);
			determineAnimate();
		}
	}
}

function saveMessagesVSP() {
	messagesVSP = $('#messages .cout_txt').scrollTop();
	var maxVSP = $('#messages .cout_txt').scrollMax();
	if (messagesVSP >= maxVSP) {
		//messagesVSP = Infinity;
		messagesVSP += 1000;
	}
}

function restoreMessagesVSP() {
	$('#messages .cout_txt').scrollTop(messagesVSP);
}

function loadFriendRequestsResponse(data) {
	viewing_requests = true;
	$('#friend_requests .title_txt').text("Friend Requests (" + data.length + ")");
	$('#friend_requests .accept_all_btn').hide();
	$('#friend_requests .content').html("");
	if ($('#friend_requests .received_cb').val() == "received" && data.length > 0) {
		$('#friend_requests .accept_all_btn').show();
	}
	item_arr = [];
	for (var i = 0; i < data.length; i++) {
		data[i].delay = true;
		var request = new FriendRequest(data[i]);
		if ($('#friend_requests .received_cb').val() == "sent") {
			request.find('.accept_btn').hide();
			request.find('.deny_btn').hide();
		}
		else {
			request.find('.revoke_btn').hide();
		}
		request.css("top", 50 * i);
		$('#friend_requests .content').append(request);
		setText(request.find('.username_txt'));
		TweenMax.fromTo(request, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		item_arr.push(request);
	}
	//$('#' + currentLabel + ' .content').scroll(horizontalScrollE);
	$('#' + currentLabel + ' .content').scroll(verticalScrollE);
	$('#' + currentLabel + ' .content').trigger("scroll");
}

function loadFollowedUsersResponse(data) {
	following_data = data;
	viewing_following = true;
	$('#' + currentLabel + ' .title_txt').text(data.title);
	var friendX = 0;
	var friendY = 0;
	item_arr = [];
	for (var i = 0; i < data.users.length; i++) {
		data.users[i].delay = true;
		var item = new FriendItem2(data.users[i]);
		switch(currentLabel) {
			case "followed_users":
				item.find('.unfollow_btn').click(function(){
					unfollowUser($(this).parent().find('.username_txt').text());
					$(this).parent().css("opacity", 0.5);
					$(this).hide();
					hideDisplayBoxes();
				});
				break;
			case "friends":
				item.find('.unfollow_btn').val("Delete Friend");
				item.find('.unfollow_btn').click(function(e){
					var item = $(this).parent();
					getConfirmation("Delete friend", "Are you sure you want to delete " + item.find('.username_txt').text() + " as a friend?", function(){
						item.css("opacity", 0.5);
						item.find('.unfollow_btn').hide();
						hideDisplayBoxes();
						deleteFriend2(item.find('.username_txt').text());
					});		
					showDim();		
				});
				break;
			case "blocked_users":
				item.find('.unfollow_btn').val("Unblock User");
				item.find('.unfollow_btn').click(function(){
					unblockUser($(this).parent().find('.username_txt').text());
					$(this).parent().css("opacity", 0.5);
					$(this).hide();
					hideDisplayBoxes();
				});
				break;
		}
		item.css("left", friendX);
		item.css("top", friendY);
		friendY += 50;
		if (friendY > 450) {
			friendX += 346;
			friendY = 0;
		}
		if (!simple && i < 30) {
			TweenMax.fromTo(item, 0.7, {"left":parseInt(item.css("left")) + 200, "top":parseInt(item.css("top")) + 100, opacity:0}, {"left":item.css("left"), "top":item.css("top"), opacity:1, delay:0.04 * i, ease:Expo.easeInOut});
		}
		item_arr.push(item);
	}
	$('#' + currentLabel + ' .content').scroll(horizontalScrollE);
	$('#' + currentLabel + ' .content').trigger("scroll");
}

function horizontalScrollE(e) {
	var sp = $(e.currentTarget);
	for (var i = 0; i < item_arr.length; i++) {
		if (parseInt(item_arr[i].css("left")) < (sp.scrollLeft() + 1024) || i == item_arr.length - 1 || i < 30) {
			if (item_arr[i].parent().length == 0) {
				sp.append(item_arr[i]);
				setText(item_arr[i].find('.username_txt'));
				changeButton(item_arr[i].find('input[type=submit]'));
			}
			if (!item_arr[i].find('.avatar').data("started")) {
				item_arr[i].find('.avatar').find('.image').attr("src", item_arr[i].find('.avatar').data("pic"));
				item_arr[i].find('.avatar').data("started", true);
				if (item_arr[i].find('.avatar').data("nsfw")) {
					stopGif(item_arr[i].find('.avatar .image')[0]);
				}
			}
		}
	}
}

function verticalScrollE(e) {
	var sp = $(e.currentTarget);
	for (var i = 0; i < item_arr.length; i++) {
		if (parseInt(item_arr[i].css("top")) < sp.scrollTop() + sp.height() || i == item_arr.length - 1) {
			if (item_arr[i].parent().length == 0) {
				sp.append(item_arr[i]);
				setText(item_arr[i].find('.username_txt'));
				changeButton(item_arr[i].find('input[type=submit]'));
			}
			if (!item_arr[i].find('.avatar').data("started")) {
				item_arr[i].find('.avatar').find('.image').attr("src", item_arr[i].find('.avatar').data("pic"));
				item_arr[i].find('.avatar').data("started", true);
				if (item_arr[i].find('.avatar').data("nsfw")) {
					stopGif(item_arr[i].find('.avatar .image')[0]);
				}
			}
		}
	}
}

function browseUsersResponse(data) {
	hideDim();
	browse_data = data;
	$('#browse_users .content').html("");
	var browseX = 0;
	var browseY = 0;
	item_arr = [];
	for (var i = 0; i < data.length; i++) {
		data[i].delay = true;
		var item = new BrowseItem(data[i]);
		item.css("left", browseX);
		item.css("top", browseY);
		if (!simple) {
			TweenMax.from(item, 0.75, {left:browseX + 80, top:browseY + 80, alpha:0, delay:i * 0.05, ease:Circ.easeInOut});
		}
		browseX += 245;
		if (browseX > 490) {
			browseX = 0;
			browseY += 151;
		}
		item_arr.push(item);
	}
	$('#browse_users .content').trigger("scroll");
}

function duelRecordsResponse(data) {
	if (!data.reversed) {
		var game = 1;
		var match = 1;
		var last_duel_id = 0;
		for (var i = data.length - 1; i >= 0; i--) {
			if (data[i].id == last_duel_id) {
				if (data[i].type == "m") {
					match++;
					data[i].match = match;
				}
				else {
					game++;
					data[i].game = game;
				}
			}
			else {
				game = 1;
				match = 1;
			}
			last_duel_id = data[i].id;
		}
		data.reversed = true;
	}
	hideDim();
	records_index = $('#duel_records .type_cb').prop("selectedIndex");
	records_data = data;
	$('#duel_records .content').html("");
	$('#duel_records .filter_lbl').hide();
	$('#duel_records .filter_txt').hide();
	if (data.length > 10) {
		$('#duel_records .filter_lbl').show();
		$('#duel_records .filter_txt').show();
	}
	$('#duel_records .filter_txt').val(""); // without this, it looks messed up
	duel_records_arr = [];
	for (var i = 0; i < data.length; i++) {
		data[i].delay = true;
		var record = new DuelRecord(data[i]);
		duel_records_arr.push(record);
		if (i < 20 && !simple) {
		//if (i < 20 && !simple && !($('#duel_records .filter_txt').is(":visible") && $('#duel_records .filter_txt').val() != "")) {
			TweenMax.fromTo(record, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	}
	//$('#' + currentLabel + ' .content').scroll(duelRecordsScrollE);
	filterDuelRecords();
}

function filterDuelRecords() {
	//$('.duel_record').hide(); // not reliable
	var recordY = 0;
	var num = 0;
	var v = $('#duel_records .filter_txt').is(":visible");
	var text = $('#duel_records .filter_txt').val();
	for (var i = 0; i < duel_records_arr.length; i++) {
		if (v) {
			if (duel_records_arr[i].data("username").toLowerCase().indexOf(text.toLowerCase()) < 0) {
				if (str(duel_records_arr[i].data("username2")).toLowerCase().indexOf(text.toLowerCase()) < 0) {
					duel_records_arr[i].hide();
					continue;
				}
			}
		}
		duel_records_arr[i].css("top", recordY);
		duel_records_arr[i].show();
		recordY += 50;
		num++;
	}
	$('#duel_records .content').scrollTop(0);
	$('#duel_records .content').trigger("scroll");
}

function duelRecordsScrollE() {
	var vsp = $('#duel_records .content').scrollTop();
	for (var i = 0; i < duel_records_arr.length; i++) {
		if (parseInt(duel_records_arr[i].css("top")) < vsp + 500 || i == duel_records_arr.length - 1) {
			if (duel_records_arr[i].parent().length == 0) {
				$('#duel_records .content').append(duel_records_arr[i]);
				setText(duel_records_arr[i].find('.username_txt'));
				setText(duel_records_arr[i].find('.rating_txt'));
				setText(duel_records_arr[i].find('.new_rating_txt'));
				setText(duel_records_arr[i].find('.date_txt'));
			}
			if (!duel_records_arr[i].find('.avatar').data("started")) {
				duel_records_arr[i].find('.avatar').find('.image').attr("src", duel_records_arr[i].find('.avatar').data("pic"));
				duel_records_arr[i].find('.avatar').data("started", true);
			}
		}
	}
}

function gotoTournamentLocator() {
	goto('tournament_locator');
	$('#tournament_locator .content').hide();
	$('#tournament_locator .store_header').hide();
	$('#tournament_locator .store_search').show()
	$('#tournament_locator .store_search .location_txt').val("");
	$('#tournament_locator #post_review_btn').hide();
	$('#tournament_locator .back_btn').hide();
	$('#tournament_locator .location_txt').focus();
	$('#tournament_locator .content').html("");
	$('#tournament_locator .reviews_content').hide();
	$('#tournament_locator .reviews_lbl').hide();
	$('#tournament_locator #map').hide();
	selectedStore = null;
	post_review.hide();
}

function tourneySearchE() { 
	try {
		if ($('#tournament_locator .store_search .position_cb').is(":checked")) {
			useCurrentPosition();
			//tourneySearch('33.757054', '-84.384236'); // atlanta
			//tourneySearch('-36.760784', '144.278835'); // AU
			//tourneySearch('-34.613295', '-58.382361'); // Argentina
			//tourneySearch('34.151451', '-118.450600'); // beverly hills
			//tourneySearch('55.378052', '-3.435973'); // UK
		}
		else if ($('#tournament_locator .location_txt').val() != "") {
			getLatLong($('#tournament_locator .location_txt').val());
		}
		else {
			errorE("Please enter a location");
		}
	}
	catch(e) {
		console.log(e);
		errorE("Unable to geolocate");
	}
}

function tourneySearch(lat, lng, acc) {
	Send({"action":"Load stores", "lat":parseFloat(lat), "lng":parseFloat(lng), "radius":500, "store_type":$('#tournament_locator .tourney_cb').val(), "accuracy":~~acc});
	showDim();
	if (acc) {
		currentPositionReceived(lat, lng);
	}
}

function updatePosition() {
	getCurrentPosition();
}

function currentPositionReceived(lat, lng) {
	latitude = lat;
	longitude = lng;
	var fd = new FormData();
	fd.append("user_id", userId);
	fd.append("password", password);
	fd.append("latitude", latitude);
	fd.append("longitude", longitude);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/update-position.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			updatePositionComplete(xhr.responseText);
		}
	}
	xhr.send(fd);
}

function updatePositionComplete(str) {
	console.log(str);
	var data = JSON.parse(str);
	if (data.action == "Success") {
		if (currentLabel == "browse_users") {
			messageE(data.message);
		}
		Send({"action":"Update position", "city":data.city, "region":data.region, "country_code":data.country_code, "country":data.country, "zip_code":data.zip_code, "latitude":data.latitude, "longitude":data.longitude});
	}
	else if (data.action == "Error") {
		errorE(data.message);
	}
	else {
		errorE("Unknown Error");
	}
}

function tourneySearchResponse(data) {
	hideDim();
	store_data = data;
	$('#tournament_locator .back_btn').show();
	$('#tournament_locator .store_search').hide();
	$('#tournament_locator .store_header').show();
	var type = $('.store_search .tourney_cb').val();
	var position = $('.store_search .position_cb').is(":checked");
	var location = $('.store_search .location_txt').val();
	if (type == "rts") {
		$('#tournament_locator .store_header .contact_lbl').text("DATE");
	}
	else {
		$('#tournament_locator .store_header .contact_lbl').text("CONTACT");
	}
	$('#tournament_locator .content').show();
	$('#tournament_locator .content').html("");
	for (var i = 0; i < data.length; i++) {
		var store = new Store(data[i]);
		if (data[i].store_id && type == "ots") {
			store.data("store_id", data[i].store_id);
		}
		if (data[i].kde_id && type == "ots") {
			store.data("kde_id", data[i].kde_id);
		}
		store.find('.number_txt').text((i + 1) + '.');
		if (position) {
			store.find('.distance_txt').text(data[i].distance + ' away');
		}
		else {
			store.find('.distance_txt').text(data[i].distance + ' from ' + location);
		}
		store.css("top", i * 95);
		$('#tournament_locator .content').append(store);
		setText(store.find('.name_txt'));
		if (!simple) {
			TweenMax.fromTo(store, 1, {left:500, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	}
}

function storeClickE(e) {
	if (selectedStore) {
		return;
	}
	var vsp = $('#tournament_locator .content').scrollTop();
	selectedStore = e.clone(true);
	$('#tournament_locator .content').html(selectedStore);
	TweenMax.fromTo(selectedStore, 0.8, {"top":parseInt(selectedStore.css("top")) - vsp}, {"top":0, ease:Expo.easeInOut, onComplete:function(){
		var directions_btn = $('<span class="directions_btn">Get Directions</span>');
		directions_btn.click(function(){
			getDirections(selectedStore.find('.name_txt').text(), selectedStore.find('.address_txt').text());
		});
		selectedStore.append(directions_btn);	
		if (selectedStore.data("phone")) {
			log('duing');
			selectedStore.find('.contact_txt').append('<br><br>phone: ' + selectedStore.data("phone"));
		}
		else if (selectedStore.data("email")) {
			selectedStore.find('.contact_txt').append('<br>' + selectedStore.data("email"));
		}
		if (selectedStore.data("store_id") || selectedStore.data("kde_id")) {
			var url = "https://cardgame-network.konami.net/store/detail/" + selectedStore.data("kde_id") + "/en";
			if (selectedStore.data("store_id")) {
				url = "https://yugiohblog.konami.com/locator/store?stype=ots&id=" + selectedStore.data("store_id");
			}
			selectedStore.find('.contact_txt').html(selectedStore.find('.contact_txt').html() + '<br><br><a href="' + url + '" target="_blank">KDE Page</a>');
		}
	}});
	Send({"action":"Load reviews", "store_id":selectedStore.data("id"), "store_type":$('#tournament_locator .store_search .tourney_cb').val()});
}

function storeBackE() {
	if (selectedStore) {
		tourneySearchResponse(store_data);
	}
	else {
		$('#tournament_locator .content').hide();
		$('#tournament_locator .content').html("");
		$('#tournament_locator .back_btn').hide();
		$('#tournament_locator .store_header').hide();
		$('#tournament_locator .store_search').show();
		$('#tournament_locator .store_search .location_txt').focus();
	}
	selectedStore = null;
	$('#tournament_locator .reviews_lbl').hide();
	$('#tournament_locator .reviews_content').hide();
	$('#tournament_locator #post_review_btn').hide();
	hideMap();
}

function Review(data) {
	var review = $('<div class="review selectable"></div>');
	review.data("id", data.id);
	
	var avatar = new Avatar(data);
	var username_txt = $('<span class="username_txt bisque"></span>');
	username_txt.text(data.username);
	
	var date_txt = $('<span class="date_txt"></span>');
	date_txt.text(data.date);
	
	var review_txt = $('<div class="review_txt"></div>');
	review_txt.html(escapeHTMLWithLinks(data.review));
	
	review.append(avatar);
	review.append(username_txt);
	review.append(date_txt);
	review.append(review_txt);
	if (username == data.username || moderator) {
		var delete_btn = $('<span class="delete_btn">Delete</span>');
		delete_btn.click(deleteReviewE);
		review.append(delete_btn);
	}
	return review;
}

function tourneyReviewsResponse(data) {
	if (!selectedStore) {
		return;
	}
	post_review.detach();
	$('#tournament_locator .reviews_content').html("");
	$('#tournament_locator .reviews_content').show();
	var reviewY = 30;
	for (var i = 0; i < data.length; i++) {
		var review = new Review(data[i]);
		review.css("top", reviewY);
		$('#tournament_locator .reviews_content').append(review);
		reviewY += review[0].scrollHeight + 20;
		TweenMax.fromTo(review, 1, {left:400, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
	}
	if (data.length > 0) {
		$('#tournament_locator .reviews_lbl').text("Comments: (" + data.length + ")");
		$('#tournament_locator #post_review_btn').show();
	}
	else {
		$('#tournament_locator .reviews_lbl').text("No Comments");
		reviewY = 87;
	}
	$('#tournament_locator .reviews_lbl').show();
	$('#tournament_locator .reviews_content').append(post_review);
	post_review.show();
	post_review.css("top", reviewY);
	post_review.find('.review_txt').focus();
	hideDim();
}

function postReviewE() {
	var maxVSP = $('#tournament_locator .reviews_content').scrollMax();
	tweenScrollbar($('#tournament_locator .reviews_content'), 1, {scrollTop:maxVSP, ease:Expo.easeInOut, onComplete:function(){
		post_review.find('.review_txt').focus();
	}});
}

function postReview() {
	if (frozen) {
		errorE("You are frozen");
		return;
	}
	if (post_review.find('.review_txt').val() == "") {
		errorE("Review is blank");
		return;
	}
	Send({"action":"Post review", "store_id":selectedStore.data("id"), "review":post_review.find('.review_txt').val(), "rating":0, "store_type":$('#tournament_locator .store_search .tourney_cb').val()});
	post_review.find('.review_txt').val("");
	showDim();
}

function deleteReviewE() {
	var store_id = selectedStore.data("id");
	var review_id = $(this).parent().data("id"); 	
	getConfirmation("Delete Review", "Are you sure you want to delete this review?", function(){
		Send({"action":"Delete review", "id":review_id, "store_id":store_id, "store_type":$('#tournament_locator .store_search .tourney_cb').val()});
		showDim();
	});
	showDim();
}

function useCurrentPositionE() {
	if ($(this).is(":checked")) {
		$('#tournament_locator .store_search .location_txt').disable(true);
	}
	else {
		$('#tournament_locator .store_search .location_txt').disable(false);
		$('#tournament_locator .store_search .location_txt').focus();
	}
}

function gotoCustoms() {
	$('#customs .title_txt').text("Customs");
	$('#customs .content').html("");
	goto('customs');
	loadCustoms();
}

function loadCustoms() {
	Send({"action":"Load customs"});
	showDim();
}

function loadCustomsResponse(data) {
	hideDim();
	item_arr = [];
	$('#customs .content').html("");
	$('#customs .title_txt').text("Customs (" + data.length + ")");
	for (var i = 0; i < data.length; i++) {
		data[i].delay = true;
		var custom = new Custom(data[i]);
		custom.find('.remove_btn').click(function(){
			removeCustoms($(this).parent().find('.username_txt').text());
			$(this).parent().css("opacity", 0.5);
			$(this).hide();
			hideDisplayBoxes();
		});
		custom.css("top", 50 * i);
		item_arr.push(custom);
		if (i < 50 && !simple) {
			TweenMax.fromTo(custom, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	}
	$('#customs .content').trigger("scroll");
}

function removeCustoms(str) {
	Send({"action":"Remove customs", "username":str});
	showDim();
}

function gotoAdminActions() {
	goto('admin_actions');
	if (viewing_actions) {
		loadAdminActionsResponse(actions_data);
		return;
	}
	var options = admin_actions.slice();
	if (moderator >= 2) {
		options = options.concat(["Set moderator", "Unset moderator", "Check decks", "Delete card"]);
	}
	options.sort();
	fillCombobox($('#admin_actions .action_cb'), options);
	$('#admin_actions .admin_txt').val("");
	$('#admin_actions .user_txt').val("");
	$('#admin_actions .action_cb').selectedIndex(0);
	$('#admin_actions .limit_cb').selectedIndex(0);
	$('#admin_actions .content').html("");
	loadAdminActions();
}

function loadAdminActions() {
	showDim();
	Send({"action":"Load admin actions", "admin_username":$('#admin_actions .admin_txt').val(), "targeted_username":$('#admin_actions .user_txt').val(), "admin_action":$('#admin_actions .action_cb').val(), "limit":~~$('#admin_actions .limit_cb').val()});
}

function loadAdminActionsResponse(data) {
	hideDim();
	actions_data = data;
	viewing_actions = true;
	item_arr = [];
	var bottomY = 0;
	$('#admin_actions .content').html("");
	for (var i = 0; i < data.length; i++) {
		data[i].delay = true;
		var admin_action = new AdminAction(data[i]);
		$('#admin_actions .content').append(admin_action);
		admin_action.css("top", bottomY);
		bottomY += admin_action[0].scrollHeight + 10;
		admin_action.detach();
		item_arr.push(admin_action);
		if (i < 50 && !simple) {
			TweenMax.fromTo(admin_action, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.05 * i, ease:Expo.easeInOut});
		}
	}
	$('#admin_actions .content').trigger("scroll");
}

function gotoFrozenUsers() {
	$('#frozen_users .title_txt').text("Frozen Users");
	$('#frozen_users .content').html("");
	goto('frozen_users');
	loadFrozenUsers();
}

function loadFrozenUsers() {
	Send({"action":"Load frozen users"});
	showDim();
}

function loadFrozenUsersResponse(data) {
	hideDim();
	$('#frozen_users .title_txt').text("Frozen Users: (" + data.length + ")");
	item_arr = [];
	for (var i = 0; i < data.length; i++) {
		data[i].delay = true;
		var item = new Custom(data[i]);
		item.find('.remove_btn').val("Unban User");
		item.find('.remove_btn').click(function(){
			unbanUser($(this).parent().find('.username_txt').text(), 0, false, true);
			$(this).parent().find('.remove_btn').hide();
			$(this).parent().css("opacity", 0.5);
		});
		if (!data[i].time) {
			if (data[i].reason) {
				item.find('.date_txt').text(data[i].reason);
			}
			item.find('.date_txt').css("color", "red");
		}
		item.css("top", 50 * i);
		item_arr.push(item);
		if (!simple && i < 10) {
			TweenMax.fromTo(item, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	}
	$('#frozen_users .content').trigger("scroll");
}

function gotoBeginners() {
	$('#beginners .title_txt').text("Beginners");
	$('#beginners .content').html("");
	goto('beginners');
	loadBeginners();
}

function loadBeginners() {
	Send({"action":"Load beginners"});
	showDim();
}

function loadBeginnersResponse(data) {
	hideDim();
	$('#beginners .title_txt').text("Beginners: (" + data.length + ")");
	item_arr = [];
	for (var i = 0; i < data.length; i++) {
		data[i].delay = true;
		var item = new Custom(data[i]);
		item.find('.remove_btn').val("Unset Beginner");
		item.find('.remove_btn').click(function(){
			unsetBeginner($(this).parent().find('.username_txt').text());
			$(this).parent().find('.remove_btn').hide();
			$(this).parent().css("opacity", 0.5);
		});
		if (!data[i].time) {
			if (data[i].reason) {
				item.find('.date_txt').text(data[i].reason);
			}
			item.find('.date_txt').css("color", "red");
		}
		item.css("top", 50 * i);
		item_arr.push(item);
		if (!simple && i < 10) {
			TweenMax.fromTo(item, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	}
	$('#beginners .content').trigger("scroll");
}

function gotoNotes() {
	$('#notes .title_txt').text("Notes");
	$('#notes .content').html("");
	goto('notes');
	loadNotes();
}

function loadNotes() {
	Send({"action":"Load notes"});
	showDim();
}

function loadNotesResponse(data) {
	hideDim();
	viewing_notes = true;
	$('#notes .title_txt').text("Notes: (" + data.length + ")");
	item_arr = [];
	var Top = 0;
	for (var i = 0; i < data.length; i++) {
		data[i].delay = true;
		var item = new Note(data[i]);
		item.find('.edit_btn').click(function(){
			var note_txt = $(this).parent().find('.note_txt');
			addNote("Edit note", $(this).parent().find('.username_txt').text(), note_txt.text(), function(){
				//note_txt.text($('#input .input_txt').val());
				note_txt.html(escapeHTMLWithLinks($('#input .input_txt').val()));
			});
		});
		item.find('.remove_btn').click(function(){
			var item = $(this).parent();
			getConfirmation("Delete Note", "Are you sure you want to delete this note?", function(){
				item.css("opacity", 0.5);
				item.find('.note_txt').hide();
				item.find('.edit_btn').hide();
				item.find('.remove_btn').hide();
				saveNote("Edit note", item.find('.username_txt').text(), "");
			});		
			showDim();		
		});
		
		$('#notes .content').append(item);
		changeButton(item.find('.edit_btn'));
		changeButton(item.find('.remove_btn'));
		setText(item.find('.username_txt'));
		
		item.css("top", Top);
		item_arr.push(item);
		Top += 10 + item.scrollHeight();
		if (!simple && i < 10) {
			TweenMax.fromTo(item, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	}
	$('#notes .content').trigger("scroll");
	if (data.length == 0) {
		messageE("You can create a note about another user by using the Add Note button at the bottom of their profile");
	}
}

function getDonationsResponse(data) {
	if (data.length == 0) {
		$('#donations .title_txt').text("Donations (0)");
	}
	hideDim();
	$('#donations .title_txt').text("Donations");
	$('#donations .content').html("");
	goto("donations");
	for (var i = 0; i < data.length; i++) {
		var donation = new Donation(data[i]);
		$('#donations .content').append(donation);
		setText(donation.find('.email_txt'));
		setText(donation.find('.date_txt'));
		setText(donation.find('.username_txt'));
		donation.css("top", 50 * i);
		if (i < 50 && !simple) {
			TweenMax.fromTo(donation, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	}
}

function FriendItem2(data) {
	var obj = new FriendItem(data);
	obj.addClass("friend_item2");
	var unfollow_btn = $('<input type="submit" class="unfollow_btn" value="Unfollow" />');
	obj.append(unfollow_btn);
	return obj;
}

function Custom(data) {
	var obj = $('<div class="custom selectable"></div>');
	var avatar = new Avatar(data);
	var username_txt = $('<span class="username_txt bisque selectable"></span>');
	username_txt.text(data.username);
	var date_txt = $('<span class="date_txt arial_rounded18"></span>');
	if (data.date) {
		date_txt.text(data.date);
	}
	else if (data.time) {
		date_txt.text(data.time);
	}
	if (date_txt.text().indexOf("-") == 0) {
		date_txt.css("color", "red");
	}
	var remove_btn = $('<input type="submit" class="remove_btn" value="Remove Customs" />');
	obj.append(avatar);
	obj.append(username_txt);
	obj.append(date_txt);
	obj.append(remove_btn);
	return obj;
}

function Note(data) {
	var obj = $('<div class="note selectable"></div>');
	var avatar = new Avatar(data);
	var username_txt = $('<span class="username_txt bisque selectable"></span>');
	username_txt.text(data.username);
	
	var note_txt = $('<span class="note_txt arial_rounded18 cyan"></span>');
	note_txt.html(escapeHTMLWithLinks(data.note));
	
	var edit_btn = $('<input type="submit" class="edit_btn" value="Edit Note" />');

	var remove_btn = $('<input type="submit" class="remove_btn" value="Remove Note" />');
	
	obj.append(avatar);
	obj.append(username_txt);
	obj.append(note_txt);
	obj.append(edit_btn);
	obj.append(remove_btn);
	return obj;
}

function watchDuelResponse(data) {
	
	
	
	
	selectedTourney = null;
	adjudicator = ~~data.adjudicator;
	if (adjudicator) {
		$('#tools_btn').show();
		$('#calls .log_btn').click();
		$('#calls .tab_btn').css("pointer-events", "none");
		$('#calls .tab_btn:not(#calls .log_btn)').css("opacity", 0.5);
	}
	else if (!admin) {
		$('#tools_btn').hide();
	}
	startDuel(data);
	if (data.player1.username == username || data.player2.username == username || tag_duel && (data.player3.username == username || data.player4.username == username)) {
		duelist = true;
	}
	
	rpsWinner = data.rpsWinner;
	show_cards = 0;
	paused = data.paused;
	turn_player = getPlayer(data.turn_player);
	if (data.order) {
		players = [];
		for (var i = 0; i < data.order.length; i++) {
			players.push(getPlayer(data.order[i]));
		}
	}
	else {
		players = [getPlayer(data.turn_player), getPlayer(data.turn_player).opponent];
	}
	if (players.length > 2) {
		turn_player.opponent = players[players.length - 1];
		turn_player.opponent.opponent = turn_player;
	}
	initWatcher();
	if (data.status == "RPS") {
		initRPSStart();
	}
	else if (data.status == "Pick first") {
		initTPStart();
	}
	else if (data.status == "Dueling") {
		gotoDueling();
			if (duelist) {
				Send({"action":"Duel", "play":"Ready", "status":"Dueling", "shuffle":$('#auto_shuffle_cb').is(":checked") || !$('#auto_shuffle_cb').is(":visible")});
			}
	}
	else if (data.status == "Siding") {
		initSiding();
	}
	
	
	initPlayers(data);
	if (data.status == "Dueling") {
		initDuel(data);
		TweenMax.fromTo($('#field_content'), 0.75, {alpha:0}, {alpha:1, delay:0.5, ease:Linear.easeNone});
		deckData = null;
		turnCount++; // helps with moveDecks for watchers
		initPhases();
		showStartTurn();
		if (!data.turnCount) {
			turnCount = 2;
		}
	}
	if (data.status == "Siding") {
		deckData = null;
		if (data.player1.done_siding) {
			$('#done_siding1').show();
		}
		if (data.player2.done_siding) {
			$('#done_siding2').show();
		}
	}
	if (data.player1.countdown) {
		$('#gone1').show();
		updateCountdown(player1, data.player1);
	}
	if (data.player2.countdown) {
		$('#gone2').show();
		updateCountdown(player2, data.player2);
	}
	
	
	if ((admin || adjudicator) && !duelist) {
		initAdmin();
	}
	if (admin || adjudicator) {
		logs = data.log;
		updateLog();
		$('#calls .log_txt').scrollTop(Infinity);
	}
	if (duelist && solo) {
		initSoloModeButtons();
	}
	initSleeves();
	addAllWatchers(data);
	shiftPlayer(turn_player.opponent);
	if (moderator && data.opponent && turn_player.opponent.username != data.opponent) {
		errorE("Client opponent: " + turn_player.opponent.username + ", Server opponent: " + data.opponent);
	}
	
	if (data.score) {
		addLine(data.score);
	}
	
	players.forEach(function(e,i){
		e.all_cards_arr.forEach(function(f,j){
			f.onRotate();
		});
	});
	/*$('#duel .card').each(function(){
		$(this).onRotate();
		//TweenMax.to($(this), 0, {rotationY:getRotationY($(this)[0])});
	});*/
}

function startRPS(data) {
	console.log('startRPS');
	if (duelId != 0) {
		return;
	}
	
	if (username == "n****r") {
		//automatic = true;
	}
	
	startDuel(data);
	hosting = false;
	joining = false;
	inPool = false;
	duelist = true;
	tagging_up = false;
	duel_logs = [];
	duel_log.find('.log_txt').html("");
	initRPSStart();
	initWatcher();
	initPlayers(data);
	initSleeves();
	poolTimer.reset();
	duel_logs = data.logs;
	updateDuelLog();
	updateActive(true);
	used_allotted_rematch = 0;
}

function chooseRPS(e) {
	pickedRPS = true;
	rock1.off("click", chooseRPS);
	paper1.off("click", chooseRPS);
	scissors1.off("click", chooseRPS);

	rock1.css("pointer-events", "none");
	paper1.css("pointer-events", "none");
	scissors1.css("pointer-events", "none");
	rock1.find('.content:first').css("pointer-events", "none");
	paper1.find('.content:first').css("pointer-events", "none");
	scissors1.find('.content:first').css("pointer-events", "none");
	
	var choice;
	if (this == rock1[0]) {
		choice = "Rock";
		bottomChoice = rock1;
	}
	else if (this == paper1[0]) {
		choice = "Paper";
		bottomChoice = paper1;
	}
	else {
		choice = "Scissors";
		bottomChoice = scissors1;
	}
	for (var i = 0; i < bottomChoices.length; i++) {
		if (this != bottomChoices[i][0]) {
			TweenMax.fromTo(bottomChoices[i], 0.5, {top:478}, {top:794, rotationY:360 + ABOUT_ZERO});
		}
		else {
			TweenMax.fromTo(bottomChoices[i], 0.5, {left:parseInt(bottomChoices[i].css("left"))}, {left:523});
		}
	}
	Send({"action":"Duel", "play":"RPS", "choice":choice});
}

function pickFirst() {
	var choice;
	if (this == first.find('.content')[0]) {
		choice = "First";
	}
	else {
		choice = "Second";
	}
	Send({"action":"Duel", "play":"Pick first", "choice":choice});
	if (!duelist) {
		$('#draw_btn').hide();
			$('#mulligan_btn').hide();
	}
}

function menuRollOutE(e) {
	if (!menu_card || menu_card.parent()[0] == $('#view > .content')[0]) {
		return;
	}
	updateMouse(e);
	var top = parseInt(menu.css("top"));
	var height = menu[0].scrollHeight;
	var mY = e.pageY / contentScale - marginTop / contentScale;
	if (mY >= top + height - 5) {
		return;
	}
	removeCardMenu();
}

function cardMenuClicked(card, data, e) {
	console.log('cardMenuClicked. data = ' + data);
	if (!$('#cig1_txt').is(":visible")) {
		return; // this prevents users from shuffling during simultaneousDraw
	}
	removeCardMenu();
	hideSelectZones();
	if (data == "Choose card") {
		player1.temp_arr.push(card.data("id"));
		if (player1.temp_arr.length == 4 && viewing == "Deck (Picking 4 Cards)" || player1.temp_arr.length == 3 && viewing == "Deck (Picking 3 Cards)" || player1.temp_arr.length == 2 && viewing == "Deck (Picking 2 Cards)" || player1.temp_arr.length == 1 && viewing == "Deck (Picking Card)") {
			Send({"action":"Duel", "play":next_callback, "cards":player1.temp_arr});
			exitViewing();
		}
		return;
	}
	if (data == "Overlay" || data == "OL ATK" || data == "OL DEF" || data == "Attach") {
		olPlay = data;
		overlaying_card = card;
		if (countOverlayOptions(player1) == 0) {
			overlaying_card = null;
			return;
		}
		else if (countOverlayOptions(player1) == 1) {
			Send({"action":"Duel", "play":olPlay, "start_card":overlaying_card.data("id"), "end_card":getOnlyOverlayId(player1)});
			overlaying_card = null;
		}
		else if (countOverlayOptions(player1) == 2 && data == "Overlay") {
			Send({"action":"Duel", "play":olPlay, "start_card":overlaying_card.data("id"), "end_card":getOnlyOverlayId(player1)});
			overlaying_card = null;
		}
		else {
			startOverlay(e);
			if (linkCardChosen(player1)) {
				exitViewing();
			}
		}
		return;
	}
	
	
	/*else if (data == "Attach") {
		if (countOverlayOptions(player1) == 0) {
			overlaying_card = null;
			return;
		}
		return;
	}*/
	
	
	
	else if (data == "Attack") {
		attacking_card = card;
		if (countMonsters(Player2()) == 0) {
			return;
		}
		else if (countMonsters(Player2()) == 1) {
			Send({"action":"Duel", "play":"Attack", "attacking_card":attacking_card.data("id"), "attacked_card":getOnlyAttackId(Player2())});
			attacking_card = null;
		}
		else {
			startAttack(e);
		}
		return;
	}
	else if (data == "Show deck") {
		getConfirmation("Show Deck", "Are you sure you want to show your opponent your deck?", showDeck);
		return;
	}
	else if (data == "Show ED") {
		getConfirmation("Show Extra", "Are you sure you want to show your opponent your extra deck?", showExtra);
		return;
	}
	if (links && isIn(card, player1.extra_arr) >= 0 && (data == "SS ATK" || data == "SS DEF")) {
		if (!bothLinkCardsChosen(player1)) {
			if (!linkCardChosen(player1) || $('#choose_zones_cb').is(":checked")) {
				exitViewing();
				summoning_card = card;
				summoning_play = data;
				startChooseExtraZones();
				startChooseMonsterZones();
				return;
			}
		}
	}
	if (data == "Move") {
		summoning_card = card;
		summoning_play = data;
		startChooseMonsterZones();
		startChooseSTZones();
		if (card.data("cardfront").data("type") == "Field") {
			startChooseFieldSpellZones();
		}
		if (links) {
			startChooseExtraZones();
		}
		startChooseMonsterZones2();
		return;
	}
	if (data == "Activate Pendulum") {
		summoning_card = card;
		summoning_play = "Activate ST";
		$('#s1_select').show();
		s1_select.play();
		$('#s5_select').show();
		s5_select.play();
		return;
	}
	if (data == "Swap") {
		addAutoComplete($('#input .input_txt'), "card");
		getInput("Swap Card", "Enter the name of the new card:", "", 100, function(){
			removeAutoComplete($('#input .input_txt'));
			Send({"action":"Duel", "play":"Swap", "card":card.data("id"), "name":$('#input .input_txt').val()});
		}, null, null, function(){
			removeAutoComplete($('#input .input_txt'));
		});
		return;
	}
	/*if (data == "Resolve Small World") {
		var arr = [];
		player1.hand_arr.forEach(function(e,i){
			if (e.data("cardfront").data("card_type") == "Monster") {
				addIfNotExists(arr, e.data("cardfront").data("name"));
			}
		});
		addAutoComplete($('#input .input_txt'), "card");
		getInput("Small World", "Enter a card name from the hand:", "", 100, function(){
			//removeAutoComplete($('#input .input_txt'));
			Send({"action":"Duel", "play":"Check Small World 1", "name":$('#input .input_txt').val()});
		}, null, null, function(){
			//removeAutoComplete($('#input .input_txt'));
		});
		autoCompleteReponse({"names":arr, "selector":"#input .input_txt"});
		removeAutoComplete($('#input .input_txt'));
		showDim();
		return;
	}*/
	if (data == "Resolve Small World") {
		var arr = [];
		player1.hand_arr.forEach(function(e,i){
			if (e.data("cardfront").data("card_type") == "Monster") {
				addIfNotExists(arr, e.data("cardfront").data("name"));
			}
		});
		getComboBox("Small World", "Select a card in your hand:", arr, 0, function(){
			Send({"action":"Duel", "play":"Check Small World 1", "name":$('#combo .combo_cb').val()});
			showDim();
		});
		showDim();
		return;
	}
	
	
	
	/*if (data == "Swap") {
		getInput("Swap Card", "Enter the ID of the new card:", "", 0, function(){
			Send({"action":"Duel", "play":"Swap", "prev_id":card.data("id"), "new_id":~~$('#input .input_txt').val()});
		}, /[^0-9]/g);
		return;
	}*/
	if ($('#choose_zones_cb').is(":checked")) {
		if (data.indexOf("SS ATK") >= 0 || data.indexOf("SS DEF") >= 0 || data == "Normal Summon" || data == "Summon token" || (data == "Set monster" && isIn(card, player1.hand_arr) >= 0)) {
			if (links || countMonsters(player1) != 4) {
				summoning_card = card;
				summoning_play = data;
				startChooseMonsterZones();
				return;
			}
		}
		switch (data) {
			case "Activate ST":
			case "Set ST":
				if (player1.s1 && player1.s1[0] == card[0] || player1.s2 && player1.s2[0] == card[0] || player1.s3 && player1.s3[0] == card[0] || player1.s4 && player1.s4[0] == card[0] || player1.s5 && player1.s5[0] == card[0]) {
					break;
				}
			case "To ST":
				if (countSpells(player1) != 4) {
					summoning_card = card;
					summoning_play = data;
					startChooseSTZones();
					return;
				}
				break;
			case "Change control":
				summoning_card = card;
				summoning_play = data;
				startChooseMonsterZones2();
				return;
		}
	}
	$('#sword').hide();
	if (data == "Summon token") {
		awaiting_token = true;
	}
	if (data == "Lilith effect" || data == "Alphan effect") {
		exitViewing();
	}
	if (data == "Shuffle deck" && $('#avatar2 .status_txt').text().indexOf("Opponent's Hand") >= 0) {
		return;
	}
	if (data == "View materials") {
		viewing_card_with_materials = card;
		//viewing = "Xyz Materials";
		//$('#view .title_txt').text("Viewing Xyz Materials");
		//viewCards(card.data("xyz_arr"));
		viewingE("Xyz Materials");
		//return;
	}
	if (data == "Fiber effect") {
		getConfirmation2("Resolve Fiber Jar", "Return Fiber Jar as well?", function(){
			fiberEvent(card.data("id"), true);
		}, function(){
			fiberEvent(card.data("id"), false);
		});
		showDim();
		return;
	}
	Send({"action":"Duel", "play":data, "card":card.data("id")});
	if (!paused) {
		if (data == "View deck" && seen_deck) {
			viewingE("Deck");
		}
		if (data == "View ED" && seen_extra) {
			if ($('#avatar2 .status_txt').text() != "Viewing Opponent's Extra Deck") {
				viewingE("Extra Deck");
			}
		}
	}
	if (data == "Upside Down effect 2") {
		exitViewing(null, true);
	}
}

function fiberEvent(id, b) {
	Send({"action":"Duel", "play":"Fiber event", "card":id, "include":b});
}

/*function checkSmallWorld1(data) {
	addAutoComplete($('#input .input_txt'), "card");
	getInput("Small World", "Enter a card name from the Deck:", "", 100, function(){
		//removeAutoComplete($('#input .input_txt'));
		Send({"action":"Duel", "play":"Check Small World 2", "name":$('#input .input_txt').val()});
	}, null, null, function(){
		//removeAutoComplete($('#input .input_txt'));
	});
	autoCompleteReponse({"names":data.names, "selector":"#input .input_txt"});
	removeAutoComplete($('#input .input_txt'));
	showDim();
}

function checkSmallWorld2(data) {
	addAutoComplete($('#input .input_txt'), "card");
	getInput("Small World", data.names.length + " matches found", "", 100);
	autoCompleteReponse({"names":data.names, "selector":"#input .input_txt"});
	removeAutoComplete($('#input .input_txt'));
}*/

function checkSmallWorld1(data) {
	getComboBox("Small World", "Select a card in your Deck:", data.names, 0, function(){
		Send({"action":"Duel", "play":"Check Small World 2", "name":$('#combo .combo_cb').val()});
		showDim();
	});
	showDim();
}

function checkSmallWorld2(data) {
	getComboBox("Small World", data.names.length + " matches found", data.names, 0);
}

function tokenE(e) {
	if (player1.m1 == null || player1.m2 == null || player1.m3 == null || (!speed && !rush && (player1.m4 == null || player1.m5 == null))) {
		if (!awaiting_token) {
			cardMenuClicked(new Card(), "Summon token", e);
		}
	}
}

function dieE() {
	Send({"action":"Duel", "play":"Die"});
}

function targetCard() {
	var card = $(this);
	if (TweenMax.isTweening(card)) {
		return;
	}
	if (getScale(card[0]) >= 0.5) {
		return;
	}
	if (!viewing) {
		if (!overlaying_card && !attacking_card) {
			Send({"action":"Duel", "play":"Target", "card":card.data("id")});
		}
	}
	else {
		if (viewing == "Opponent's Hand") {
			Send({"action":"Duel", "play":"Target", "card":card.data("id")});
		}
	}
}

function initDuelist() {
	console.log('initDuelist');
	$('#duel .cin_txt').show();
	//$('#duel .cin_txt').setWidth(159.5);
	$('#duel .cin_txt').setWidth(getCinWidth());
	$('#duel .cin_txt').val("");
	$('#duel .cin_txt').focus();
	$('#duel .html_cb').checked(false);
	if (html) {
		$('#duel .html_cb').show();
	}
	$('#duel .cout_txt').css("height", 221);
	$('#log_btn').show();
	//if (duelFormat == "ar" || duelFormat == "gr" || duelFormat == "sr") {
	if (rated || automaticTourney) {
		$('#call_admin_btn').disable(false);
	}
	$('#call_admin_btn').show();
	//$('#mulligan_btn').show();
	$('#mulligan_btn').css("top", 565);
	$('#draw_btn').show();
	$('#draw_btn').css("top", 565);
	$('#defeat_btn').show();
	$('#watch_chat .cout_txt').html("");
	$('#watch_chat .cin_txt').val("");
	duel_log_vsp = 1000;
	$('#end_turn').css("cursor", "pointer");
	$('#think_btn').show();
	
	$('#field_stats > span').css("pointer-events", rated || !duelist ? "none" : "auto");
	
	show_cards = 1;
}

function getCinWidth() {
	if (FIREFOX) {
		if (MAC) {
			return 162;
		}
	}
	if (SAFARI) {
		if (mobile) {
			return 167;
		}
		return 160;
	}
	if (CHROME) {
		if (MAC) {
			return 157;
		}
		return 156;
	}
	return 156;
	//return 157;
}

function initAdmin() {
	console.log('initAdmin');
	$('#duel .cin_txt').show();
	$('#duel .cin_txt').val("");
	$('#duel .cin_txt').focus();
	$('#duel .html_cb').checked(false);
	if (html) {
		$('#duel .html_cb').show();
	}
	$('#duel .cout_txt').css("height", 221);
	$('#cancel_duel_btn').show();
	$('#host_loss_btn').show();
	$('#opponent_loss_btn').show();
	resetDuelButtons();
}

function initAdminDuelStart() {
	console.log('initAdminDuelStart');
	$('#field_content').prepend($('#pause_btn'));
	$('#pause_btn').data("proxy").insertAfter($('#pause_btn'));
	$('#pause_btn').data("proxy").css("opacity", 1);
	$('#pause_btn').show();
	$('#pause_btn').val("Pause Game");
	if (paused) {
		$('#pause_btn').val("Resume Game");
	}
	if (links) {
		$('#pause_btn').css("left", 476);
		$('#pause_btn').css("top", 313.5);
		$('#pause_btn').setWidth(87);
	}
	else {
		$('#pause_btn').css("left", 470.5);
		$('#pause_btn').css("top", 311.2);
		$('#pause_btn').setWidth(98);
	}
}

function pauseGameE() {
	if ($(this).val() == "Pause Game") {
		if (paused) {
			return;
		}
		paused = true;
		$(this).val("Resume Game");
		if (duelist) {
			$('#avatar1 .status_txt').text("Paused Game");
		}
	}
	else {
		if (!paused) {
			return;
		}
		paused = false;
		$(this).val("Pause Game");
	}
	Send({"action":"Duel", "play":"Pause game"});
}

function exitDuelE() {
	if (awaiting_defeat) {
		return;
	}
	if (duelist && duel_active && !solo) {
		if (rated) {
			getConfirmation("Quit Duel", "Are you sure you want to quit the duel? Doing so will result in a loss and rating reduction.", exitDuel);
		}
		else {
			getConfirmation("Quit Duel", "Are you sure you want to quit the duel?", exitDuel);
		}
		showDim();
	}
	else {
		exitDuel();
	}
}

function exitDuel(b) {
	showDim();
	if (duelist) {
		Send({"action":"Duel", "play":"Quit duel"});
	}
	else if (duelId) {
		Send({"action":"Exit duel"});
	}
	else {
		return;
	}
	stopCountdown();
	actionsQueue = [];
	updateActive(false);
	duelist = false;
	duel_active = false;
	paused = false;
	resetting = false;
	rpsWinner = null;
	exitRPS();
	exitTP();
	exitDueling();
	exitSiding();
	//TweenMax.killAll(); // doesn't change anything
	if (b !== false) {
		if (tourney_data) {
			gotoPairings(tourney_data);
		}
		else {
			gotoDuelRoom();
		}
	}
	watch_chat.hide();
	duel_log.hide();
	player1.resetDeck();
	player2.resetDeck();
	if (tag_duel) {
		player3.resetDeck();
		player4.resetDeck();
	}
	partner = null;
	player1 = null;
	player2 = null;
	player3 = null;
	player4 = null;
	duelId = 0;
	duelHash = null;
	if (lastJudge != "") {
		//gotoProfile(lastJudge);
		lastJudge = "";
		//return;
	}
	/*if (CHROME || SAFARI || EDGE) {
		//TweenMax.set($('#content'), {scale:1});
		$('#content').css("transform", "unset");
		$("#content").css("margin-left", "0px");
		zooming = true;
		getZoomValues();
		resizeE();
	}*/
	
	adjudicator = 0;
	if (!admin) {
		$('#tools_btn').hide();
	}
}

function initCards(player, player_arr, data) {
	for (var i = 0; i < data.length; i++) {
		if (data[i]) {
			var card = newDuelCard(player);
			initCard(card, data[i], player);
			if (data[i].back) {
				var skillback = getSkillBack(SKILL_BACKS_START + data[i].back + '.jpg', data[i].activation);
				card.find('.cardback').append(skillback);
				card.data("isSkill", true);
			}
			if (data[i].xyz_arr) {
				for (var j = 0; j < data[i].xyz_arr.length; j++) {
					var material = newDuelCard();
					initCard(material, data[i].xyz_arr[j], player);
					card.data("xyz_arr").push(material);
				}
			}
			player_arr.push(card);
		}
		else {
			player_arr.push(null);
		}
	}
}

function initCard(card, data, player) {
	card.data("id", data.id);
	card.data("face_up", !!data.face_up);
	card.data("face_down", !!data.face_down);
	card.data("inATK", !!data.inATK);
	card.data("inDEF", !!data.inDEF);
	card.data("new_atk", data.new_atk);
	card.data("new_def", data.new_def);
	card.data("counters", ~~data.counters);
	card.data("controller", getController(data.controller, player));
	card.data("owner", getController(data.owner, player));
	if (data.data) {
		card.data("cardfront").initializeFromData(data.data);
		if (card.data("cardfront").data("monster_color") == "Token") {
			card.data("cardfront").find('.image').attr("src", TOKEN_START + player.token_id + '.jpg');
		}
		if (!data.face_down) {
			TweenMax.to(card, 0, {rotationY:ABOUT_ZERO});
		}
	}
	card.onRotate(true);
	card.data("owner").all_cards_arr.push(card);
	updateController(card.data("controller"), card);
}

function initField(player) {
	var xPoints = [player.m1X, player.m2X, player.m3X, player.m4X, player.m5X, player.s1X, player.s2X, player.s3X, player.s4X, player.s5X, player.pendulumLeftX, player.pendulumRightX, player.fieldSpellX, linkLeftX, linkRightX, player.skillCardX];
	var yPoints = [player.m1Y, player.m2Y, player.m3Y, player.m4Y, player.m5Y, player.s1Y, player.s2Y, player.s3Y, player.s4Y, player.s5Y, player.pendulumY, player.pendulumY, player.fieldSpellY, linkY, linkY, player.skillCardY];
	player.m1 = player.field_arr[0];
	player.m2 = player.field_arr[1];
	player.m3 = player.field_arr[2];
	player.m4 = player.field_arr[3];
	player.m5 = player.field_arr[4];
	player.s1 = player.field_arr[5];
	player.s2 = player.field_arr[6];
	player.s3 = player.field_arr[7];
	player.s4 = player.field_arr[8];
	player.s5 = player.field_arr[9];
	player.pendulumLeft = player.field_arr[10];
	player.pendulumRight = player.field_arr[11];
	player.fieldSpell = player.field_arr[12];
	if (player.field_arr[13]) {
		if (player1.start == 201) {
			linkRight = player.field_arr[13];
		}
		else {
			linkLeft = player.field_arr[13];
		}
	}
	if (player.field_arr[14]) {
		if (player1.start == 201) {
			linkLeft = player.field_arr[14];
		}
		else {
			linkRight = player.field_arr[14];
		}
	}
	player.skillCard = player.field_arr[15];
	if (tag_duel) {
		player.partner.m1 = player.field_arr[0];
		player.partner.m2 = player.field_arr[1];
		player.partner.m3 = player.field_arr[2];
		player.partner.m4 = player.field_arr[3];
		player.partner.m5 = player.field_arr[4];
		player.partner.s1 = player.field_arr[5];
		player.partner.s2 = player.field_arr[6];
		player.partner.s3 = player.field_arr[7];
		player.partner.s4 = player.field_arr[8];
		player.partner.s5 = player.field_arr[9];
		player.partner.pendulumLeft = player.field_arr[10];
		player.partner.pendulumRight = player.field_arr[11];
		player.partner.fieldSpell = player.field_arr[12];
		if (player.field_arr[13]) {
			linkLeft = player.field_arr[13];
		}
		if (player.field_arr[14]) {
			linkRight = player.field_arr[14];
		}
		player.partner.skillCard = player.field_arr[15];
	}
	for (var i = 0; i < player.field_arr.length; i++) {
		if (player.field_arr[i]) {
			TweenMax.to(player.field_arr[i], 0, {rotation:player.rot});
			player.field_arr[i].css("left", xPoints[i]);
			player.field_arr[i].css("top", yPoints[i]);
			if (player.field_arr[i].data("inDEF")) {
				TweenMax.to(player.field_arr[i], 0, {rotation:player.defRot});
			}
			$('#field').append(player.field_arr[i]);
			if (i < 5) {
				updateXyzMaterials(player, player.field_arr[i]);
			}
			else if (links && i > 12) {
				updateXyzMaterials(player, player.field_arr[i]);
			}
		}
	}
	updateCounters();
	updateStats();
}

function initDuel(data) {
	player1.deck_face_up = data.player1.deck_face_up;
	player2.deck_face_up = data.player2.deck_face_up;
	initCards(player1, player1.main_arr, data.player1.main, false);
	initCards(player1, player1.grave_arr, data.player1.grave, false);
	initCards(player1, player1.banished_arr, data.player1.banished, false);
	initCards(player1, player1.extra_arr, data.player1.extra, false);
	initCards(player1, player1.hand_arr, data.player1.hand);
	initCards(player1, player1.field_arr, data.player1.field);
	initCards(player2, player2.main_arr, data.player2.main, false);
	initCards(player2, player2.grave_arr, data.player2.grave, false);
	initCards(player2, player2.banished_arr, data.player2.banished, false);
	initCards(player2, player2.extra_arr, data.player2.extra, false);
	initCards(player2, player2.hand_arr, data.player2.hand);
	initCards(player2, player2.field_arr, data.player2.field);
	if (tag_duel) {
		player3.deck_face_up = data.player3.deck_face_up;
		player4.deck_face_up = data.player4.deck_face_up;
		initCards(player3, player3.main_arr, data.player3.main, false);
		initCards(player4, player4.main_arr, data.player4.main, false);
		initCards(player3, player3.extra_arr, data.player3.extra, false);
		initCards(player4, player4.extra_arr, data.player4.extra, false);
		initCards(player3, player3.hand_arr, data.player3.hand);
		initCards(player4, player4.hand_arr, data.player4.hand);
	}
	shiftDecks();
	if (tag_duel) {
		shiftDeck(Player1().partner);
		shiftDeck(Player2().partner);
		shiftExtra(Player1().partner);
		shiftExtra(Player2().partner);
		removeDeck(Player1().partner);
		removeDeck(Player2().partner);
		removeExtra(Player1().partner);
		removeExtra(Player2().partner);
		if (data.player3.viewing) {
			$('#avatar1 .status_txt').text("Viewing " + data.player3.viewing);
		}
		if (data.player4.viewing) {
			$('#avatar2 .status_txt').text("Viewing " + data.player4.viewing);
		}
	}
	shiftPlayersE();
	initHand(Player1(), true);
	initHand(Player2(), true);
	initField(player1);
	initField(player2);
	updateLifePointsNow(player1, data.player1);
	updateLifePointsNow(player2, data.player2);
	updatePhase(data.phase);
	if (data.player1.viewing) {
		$('#avatar1 .status_txt').text("Viewing " + data.player1.viewing);
	}
	if (data.player2.viewing) {
		$('#avatar2 .status_txt').text("Viewing " + data.player2.viewing);
	}
	if (Player1().fieldSpell && Player1().fieldSpell.data("cardfront").data("initialized")) {
		setFieldSpellPic(player1, player1.fieldSpell);
	}
	else if (Player2().fieldSpell && Player2().fieldSpell.data("cardfront").data("initialized")) {
		setFieldSpellPic(player2, player2.fieldSpell);
	}
	$('#cig2_txt').show();
	$('#cib2_txt').show();
	$('#cig1_txt').show();
	$('#cib1_txt').show();
	stopQueue = false;
	restoreHandCards();
	
	if (player1.username == username) {
		viewing = str(data.player1.viewing);
	}
}

function enableAdminE() {
	var arr = $('#watchers .cell');
	for (var i = 0; i < arr.length; i++) {
		if (arr.eq(i).hasClass("isAdmin")) {
			return;
		}
	}
	if (duelist && duel_active && rated && $('#call_admin_btn').prop("disabled") && !awaiting_admin) {
		$('#call_admin_btn').disable(false);
		if (paused) {
			resumeGame();
		}
	}
}

function publicMessage() {
	if (locked) {
		return;
	}
	if ($('#public_chat .cin_txt').val() == "Posting as " + username + "...") {
		return;
	}
	if ($('#public_chat .cin_txt').val() != "") {
		Send({"action":"Public message", "message":$('#public_chat .cin_txt').val(), "html":~~$('#public_chat .html_cb').is(":checked"), "moderator":~~$('#public_chat .minimize2_btn').is(":visible")});
		$('#public_chat .cin_txt').val("");
		lock();
	}
}

function watcherMessage() {
	if (locked) {
		return;
	}
	if ($('#watch_chat .cin_txt').val() == "Posting as " + username + "...") {
		return;
	}
	if ($('#watch_chat .cin_txt').val() != "") {
		Send({"action":"Watcher message", "message":$('#watch_chat .cin_txt').val(), "html":~~$('#watch_chat .html_cb').is(":checked")});
		$('#watch_chat .cin_txt').val("");
		lock();
	}
}

function duelChatLoaded(data) {
	var str = "";
	if (data.messages.length > 0) {
		$('#duel .cout_txt').html("");
		for (var i = 0; i < data.messages.length; i++) {
			var color = "0000FF";
			if (data.messages[i].color) {
				color = data.messages[i].color;
			}
			if (color == "0000FF" && isPlayer1(data.messages[i].username)) {
				color = "FF0000";
			}
			
			
			
			
			if (streaming) {
				data.messages[i].username = censor(data.messages[i].username);
			}
			
			
			
			str += '<font color="#' + color + '"><b>' + escapeHTML(data.messages[i].username) + ': </b></font><font>' + escapeHTMLWithLinks(data.messages[i].message) + '</font><br>';
		}
	}
	$('#duel .cout_txt').html(str);
	$('#duel .cout_txt').scrollTop(Infinity);
	$('#duel .refresh_btn').hide();
}

function hostLossE() {
	var options = ["Game loss"];
	if (match) {
		options.push("Match loss");
	}
	getComboBox("Host Loss", "Give loss to " + player1.username + "?", options, 0, hostLoss);
	showDim();
}

function opponentLossE() {
	var options = ["Game loss"];
	if (match) {
		options.push("Match loss");
	}
	getComboBox("Opponent Loss", "Give loss to " + player2.username + "?", options, 0, opponentLoss);
	showDim();
}

function hostLoss() {
	showDim();
	Send({"action":"Host loss", "type":$('#combo .combo_cb').val()});
}

function opponentLoss() {
	showDim();
	Send({"action":"Opponent loss", "type":$('#combo .combo_cb').val()});
}

function cancelGameE() {
	var options = '<option value="Duel">Cancel Game</option>';
	options += '<option value="Match">Cancel Match</option>';
	getComboBox("Cancel Duel", "Cancel?", options, 0, cancelGame);
	showDim();
}

function cancelGame() {
	Send({"action":"Cancel game", "type":$('#combo .combo_cb').val()});
}

function admitDefeatE() {
	getConfirmation("Admit Defeat", "Are you sure you want to admit defeat?", admitDefeat);
}

function admitDefeat() {
	showDim();
	$('#defeat_btn').disable(true);
	if (!awaiting_defeat) {
		Send({"action":"Duel", "play":"Admit defeat"});
		awaiting_defeat = true;
	}
}

function callAdminE() {
	if ($('#call_admin_btn').val() == "Cancel Call") {
		Send({"action":"Duel", "play":"Cancel call"});
		return;
	}
	var options = ["Ruling", "Cheating", "AFK", "Glitch"];
	getComboBox("Call Judge", "Select your issue:", options, 0, callAdmin);
	showDim();
}

function callAdmin() {
	Send({"action":"Duel", "play":"Call admin", "issue":$('#combo .combo_cb').val()});
}

function drawE() {
	switch ($('#draw_btn').val()) {
		case "Offer Draw":
			getConfirmation("Offer Draw","Are you sure you want to make a draw offer?", offerDraw);
			break;
		case "Accept Draw":
			getConfirmation("Accept Draw Offer", "Are you sure you want to accept?", acceptDrawE);
			break;
		case "Revoke Draw":
			Send({"action":"Duel", "play":"Revoke draw"});
			break;
		case "View Replay":
			viewReplayE();
			break;
	}
}

function offerDraw() {
	Send({"action":"Duel", "play":"Offer draw"});
}

function acceptDrawE() {
	Send({"action":"Duel", "play":"Accept draw"});
}

function rematchE() {
	var message = "";
	if (rated) {
		switch(match_type) {
			case "s":
				message = " Your rematch will be a rated single (with siding).";
				break;
			case "n":
				message = " Your rematch will be a rated single (no siding).";
				break;
			case "m":
				message = " Your rematch will be a rated match.";
				break;
			default:
				message = "";
		}
	}
	switch ($('#rematch_btn').val()) {
		case "Offer Rematch":
			if (rated && used_allotted_rematch) {
				errorE("You are only permitted to rematch this opponent once");
				return;
			}
			getConfirmation("Offer Rematch", "Are you sure you want to make a rematch offer?" + message, offerRematchE);
			break;
		case "Revoke Rematch":
			Send({"action":"Duel", "play":"Revoke rematch"});
			break;
		case "Accept Rematch":
			getConfirmation("Accept Rematch Offer", "Are you sure you want to accept?" + message, acceptRematchE);
			break;
	}
}

function offerRematchE() {
	Send({"action":"Duel", "play":"Offer rematch"});
	$('#rematch_btn').val("Revoke Rematch")
}

function acceptRematchE() {
	Send({"action":"Duel", "play":"Accept rematch"});
}

function endTurnOver() {
	$('#end_turn .green').show();
}

function endTurnOut() {
	$('#end_turn .green').hide();
}

function showHandE() {
	if (solo) {
		return;
	}
	getConfirmation("Show Hand", "Are you sure you want to show your opponent your hand?", showHand);
}

function showHand() {
	Send({"action":"Duel", "play":"Show hand"});
}

function coinE() {
	Send({"action":"Duel", "play":"Coin"});
}






















/*function counterE(e) {
	e.preventDefault(); // prevents unwanted text selection
	removedCounterCardId = 0;
	var cards;
	if (rush) {
		cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell];
	}
	else if (speed) {
		cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player1.skillCard, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell, player2.skillCard];
	}
	else if (links) {
		cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.fieldSpell, linkLeft, linkRight];
	}
	else {
		cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell];
	}
	for (var i = 0; i < counters.length; i++) {
		if (this == counters[i][0]) {
			if (cards[i].data("controller") != Player1() || player1 != Player1()) {
				return;
			}
			cards[i].data("counters", ~~cards[i].data("counters") - 1);
			removedCounterCardId = cards[i].data("id");
			updateCounters();
		}
	}
	$('#viewing').append(counter);
	$('body').mouseup(counterDrop);
	$('body').mousemove(moveCounter);
	moveCounter(e);
}

function moveCounter(e) {
	updateMouse(e);
	var scl = getScale($('#content')[0]);
	var zoom = parseFloat($('#content')[0].style.zoom) * scl;
	var mX = mouseX / scl - marginLeft / scl;
	var mY = mouseY / scl - marginTop / scl;
	TweenMax.to(counter, 0, {"left":mX, "top":mY});
}

function counterDrop() {
	console.log('counterDrop');
	var addingCounter = false;
	$('body').off("mouseup", counterDrop);
	$('body').off("mousemove", moveCounter);
	counter.detach();
	var cards;
	if (rush) {
		cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell];
	}
	else if (speed) {
		cards = [player1.m1, player1.m2, player1.m3, player1.s1, player1.s2, player1.s3, player1.fieldSpell, player1.skillCard, player2.m1, player2.m2, player2.m3, player2.s1, player2.s2, player2.s3, player2.fieldSpell, player2.skillCard];
	}
	else if (links) {
		cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.fieldSpell, linkLeft, linkRight];
	}
	else {
		cards = [player1.m1, player1.m2, player1.m3, player1.m4, player1.m5, player1.s1, player1.s2, player1.s3, player1.s4, player1.s5, player1.pendulumLeft, player1.pendulumRight, player1.fieldSpell, player2.m1, player2.m2, player2.m3, player2.m4, player2.m5, player2.s1, player2.s2, player2.s3, player2.s4, player2.s5, player2.pendulumLeft, player2.pendulumRight, player2.fieldSpell];
	}
	for (var i = 0; i < cards.length; i++) {
		if (cards[i]) {
			if (cards[i].data("controller") == Player1() && !cards[i].data("face_down")) {
				if (inBounds(cards[i].find('.content:first'))) {
					if (removedCounterCardId == cards[i].data("id")) {
						cards[i].data("counters", ~~cards[i].data("counters") + 1);
						updateCounters();
						removedCounterCardId = 0;
						return;
					}
					addingCounter = true;
					break;
				}
			}
		}
	}
	if (removedCounterCardId > 0) {
		Send({"action":"Duel", "play":"Remove counter", "card":removedCounterCardId});
	}
	if (addingCounter) {
		Send({"action":"Duel", "play":"Add counter", "card":cards[i].data("id")});
	}
}*/

function allGoodE() {
	if (!duelist) {
		return;
	}
	if ($('#good_btn').data("holding")) {
		return;
	}
	if (player1.still_good || parseFloat($('#good_btn').css("opacity")) < 0.5) {
		Send({"action":"Duel", "play":"Stop good"});
		$('#good_btn').css("opacity", 1);
		return;
	}
	setTimeout(function(){
		$('#good_btn').css("opacity", 1);
		$('#good_btn').css("pointer-events", "auto");
	}, 1500);
	$('#good_btn').css("pointer-events", "none");
	$('#good_btn').css("opacity", 0.4);
	Send({"action":"Duel", "play":"Good"});
}

function stillGoodE() {
	if (!duelist) {
		return;
	}
	if ($('#good_btn').data("holding")) {
		$('#good_btn').data("holding", false);
	}
 	
	var holding = true;
	setTimeout(function(){
		if (holding) {
			if (parseFloat($('#good_btn').css("opacity")) < 0.5) {
				return;
			}
			$('html').off("mouseup");
			$('#good_btn').css("opacity", 0.4);
			$('#good_btn').data("holding", true);
			Send({"action":"Duel", "play":"Good", "long":true});
		}
	//}, 650); // received complaints
	}, 1500);
	$('html').mouseup(function(){
		holding = false;
		setTimeout(function(){
			$('html').off("mouseup");
		}, 5);
	});
}

function thinkingE() {
	if (!duelist) {
		return;
	}
	setTimeout(function(){
		$('#think_btn').css("opacity", 1);
		$('#think_btn').css("pointer-events", "auto");
	}, 1500);
	$('#think_btn').css("pointer-events", "none");
	$('#think_btn').css("opacity", 0.4);
	Send({"action":"Duel", "play":"Thinking"});
	
	$('#good_btn').css("opacity", 1);
	$('#good_btn').css("pointer-events", "auto");
}

function autoShuffleE() {
	Send({"action":"Duel", "play":"Auto shuffle", "shuffle":$('#auto_shuffle_cb').is(":checked")});
}

function shuffleHandE() {
	Send({"action":"Duel", "play":"Shuffle hand"});
}







function enterDPE() {
	Send({"action":"Duel", "play":"Enter DP"});
}

function enterSPE() {
	Send({"action":"Duel", "play":"Enter SP"});
}

function enterM1E() {
	Send({"action":"Duel", "play":"Enter M1"});
}

function enterBPE() {
	if (turnCount < 2 && !solo) {
		return;
	}
	currentPhase = "BP";
	Send({"action":"Duel", "play":"Enter BP"});
}

function enterM2E() {
	if (turnCount < 2 && !solo) {
		return;
	}
	Send({"action":"Duel", "play":"Enter M2"});
}

function enterEPE() {
	Send({"action":"Duel", "play":"Enter EP"});
}

function endTurnE() {
	Send({"action":"Duel", "play":"End turn"});
}








function startTurnE() {
	if (awaiting_start_turn) {
		return;
	}
	Send({"action":"Duel", "play":"Start turn", "draw":$('#auto_draw_cb').is(":checked")});
}

function permissionDeniedE() {
	Send({"action":"Duel", "play":"Permission denied"});
}

function permissionCallback(str) {
	Send({"action":"Duel", "play":str, "granted":true});
}

function showPlus() {
	$('#minus_btn').hide();
	$('#plus_btn').show();
	$('#life_txt').focus();
}

function showMinus() {
	$('#minus_btn').show();
	$('#plus_btn').hide();
	$('#life_txt').focus();
}

function lifeEnterHandler() {
	if ($('#life_txt').val() == "") {
		return;
	}
	var amount;
	if ($('#plus_btn').is(":visible")) {
		amount = ~~$('#life_txt').val();
	}
	else {
		amount = -~~$('#life_txt').val();
	}
	$('#life_txt').val("");
	if (amount == 0) {
		return;
	}
	Send({"action":"Duel", "play":"Life points", "amount":amount});
	
}

function showDeck() {
	Send({"action":"Duel", "play":"Show deck"});
}

function showExtra() {
	Send({"action":"Duel", "play":"Show ED"});
}


function resetMenu() {
	menu_card = null;
}

function drawCardE() {
	Send({"action":"Duel", "play":"Draw card"});
}

function hasAvailableMonsterZones(player) {
	if (player.m1 == null || player.m2 == null || player.m3 == null) {
		return true;
	}
	if (!speed && !rush) {
		if (player.m4 == null || player.m5 == null) {
			return true;
		}
	}
	return false;
}

function linkCardChosen(player) {
	if (linkLeft) {
		if (linkLeft.data("controller") == player) {
			return true;
		}
	}
	if (linkRight) {
		if (linkRight.data("controller") == player) {
			return true;
		}
	}
	return false;
}

function bothLinkCardsChosen(player) {
	if (linkLeft) {
		if (linkLeft.data("controller") == player) {
			if (linkRight) {
				if (linkRight.data("controller") == player) {
					return true;
				}
			}
		}
	}
	return false;
}

function startChooseOverlayZones() {
	if (player1.m1) {
		if (player1.m1.data("cardfront").data("monster_color") != "Token" && !player1.m1.data("face_down") && player1.m1 != overlaying_card) {
			$('#m1_select').show();
			m1_select.play();
		}
	}
	if (player1.m2) {
		if (player1.m2.data("cardfront").data("monster_color") != "Token" && !player1.m2.data("face_down") && player1.m2 != overlaying_card) {
			$('#m2_select').show();
			m2_select.play();
		}
	}
	if (player1.m3) {
		if (player1.m3.data("cardfront").data("monster_color") != "Token" && !player1.m3.data("face_down") && player1.m3 != overlaying_card) {
			$('#m3_select').show();
			m3_select.play();
		}
	}
	if (player1.m4) {
		if (player1.m4.data("cardfront").data("monster_color") != "Token" && !player1.m4.data("face_down") && player1.m4 != overlaying_card) {
			$('#m4_select').show();
			m4_select.play();
		}
	}
	if (player1.m5) {
		if (player1.m5.data("cardfront").data("monster_color") != "Token" && !player1.m5.data("face_down") && player1.m5 != overlaying_card) {
			$('#m5_select').show();
			m5_select.play();
		}
	}
	if (linkLeft) {
		if (linkLeft.data("cardfront").data("monster_color") != "Token" && !linkLeft.data("face_down") && linkLeft != overlaying_card && linkLeft.data("controller") == player1) {
			$('#link_left_select').show();
			link_left_select.play();
		}
	}
	if (linkRight) {
		if (linkRight.data("cardfront").data("monster_color") != "Token" && !linkRight.data("face_down") && linkRight != overlaying_card && linkRight.data("controller") == player1) {
			$('#link_right_select').show();
			link_right_select.play();
		}
	}
}

function startChooseExtraZones() {
	if (linkLeft == null) {
		$('#link_left_select').show();
		link_left_select.play();
	}
	if (linkRight == null) {
		$('#link_right_select').show();
		link_right_select.play();
	}
}

function swap(player, data) {
	for (var i = 0; i < player.hand_arr.length; i++) {
		if (player.hand_arr[i].data("id") == data.id) {
			var card = player.hand_arr[i];
			card.data("cardfront").initializeFromData(data.card);
			break;
		}
	}
}

function getOnlyAttackId(player) {
	var id = 0;
	if (player.m1) {
		id = player.m1.data("id");
	}
	if (player.m2) {
		id = player.m2.data("id");
	}
	if (player.m3) {
		id = player.m3.data("id");
	}
	if (player.m4) {
		id = player.m4.data("id");
	}
	if (player.m5) {
		id = player.m5.data("id");
	}
	if (linkLeft) {
		if (linkLeft.data("controller") == player) {
			id = linkLeft.data("id");
		}
	}
	if (linkRight) {
		if (linkRight.data("controller") == player) {
			id = linkRight.data("id");
		}
	}
	return id;
}

function countOverlayOptions(player) {
	var total = 0;
	if (player.m1) {
		if (player.m1.data("cardfront").data("monster_color") != "Token" && !player.m1.data("face_down")) {
			total++;	
		}
	}
	if (player.m2) {
		if (player.m2.data("cardfront").data("monster_color") != "Token" && !player.m2.data("face_down")) {
			total++;	
		}
	}
	if (player.m3) {
		if (player.m3.data("cardfront").data("monster_color") != "Token" && !player.m3.data("face_down")) {
			total++;	
		}
	}
	if (player.m4) {
		if (player.m4.data("cardfront").data("monster_color") != "Token" && !player.m4.data("face_down")) {
			total++;	
		}
	}
	if (player.m5) {
		if (player.m5.data("cardfront").data("monster_color") != "Token" && !player.m5.data("face_down")) {
			total++;	
		}
	}
	if (linkLeft) {
		if (linkLeft.data("controller") == player1 || linkLeft.data("controller") == player3) {
			if (linkLeft.data("cardfront").data("monster_color") != "Token" && !linkLeft.data("face_down")) {
				total++;	
			}
		}
	}
	if (linkRight) {
		if (linkRight.data("controller") == player1 || linkRight.data("controller") == player3) {
			if (linkRight.data("cardfront").data("monster_color") != "Token" && !linkRight.data("face_down")) {
				total++;	
			}
		}
	}
	return total;
}

function getOnlyOverlayId(player) {
	var card_id = 0;
	if (player.m1) {
		if (player.m1.data("cardfront").data("monster_color") != "Token" && !player.m1.data("face_down") && player.m1[0] != overlaying_card[0]) {
			return player.m1.data("id");
		}
	}
	if (player.m2) {
		if (player.m2.data("cardfront").data("monster_color") != "Token" && !player.m2.data("face_down") && player.m2[0] != overlaying_card[0]) {
			return player.m2.data("id");
		}
	}
	if (player.m3) {
		if (player.m3.data("cardfront").data("monster_color") != "Token" && !player.m3.data("face_down") && player.m3[0] != overlaying_card[0]) {
			return player.m3.data("id");
		}
	}
	if (player.m4) {
		if (player.m4.data("cardfront").data("monster_color") != "Token" && !player.m4.data("face_down") && player.m4[0] != overlaying_card[0]) {
			return player.m4.data("id");
		}
	}
	if (player.m5) {
		if (player.m5.data("cardfront").data("monster_color") != "Token" && !player.m5.data("face_down") && player.m5[0] != overlaying_card[0]) {
			return player.m5.data("id");
		}
	}
	if (linkLeft) {
		if (linkLeft.data("controller") == player1 || linkLeft.data("controller") == player3) {
			if (linkLeft.data("cardfront").data("monster_color") != "Token" && !linkLeft.data("face_down") && linkLeft[0] != overlaying_card[0]) {
				return linkLeft.data("id");
			}
		}
	}
	if (linkRight) {
		if (linkRight.data("controller") == player1 || linkRight.data("controller") == player3) {
			if (linkRight.data("cardfront").data("monster_color") != "Token" && !linkRight.data("face_down") && linkRight[0] != overlaying_card[0]) {
				return linkRight.data("id");
			}
		}
	}
	return 0;
}

function startOverlay(e) {
	updateMouse(e);
	$('#overlay').show();
	$('body').mousemove(moveXyzTargetE);
	moveXyzTargetE(e);
	e.stopPropagation();
	$('body').click(checkOverlay);
}

function checkOverlay(e) {
	updateMouse(e);
	$('body').off("click", checkOverlay);
	$('body').off("mousemove", moveXyzTargetE);
	$('#overlay').hide();
	if (player1.m1) {
		if (overlaying_card != player1.m1) {
			if (inBounds($('#m1_hidden'))) {
				overlayCard(player1.m1);
				return;
			}
		}
	}
	if (player1.m2) {
		if (overlaying_card != player1.m2) {
			if (inBounds($('#m2_hidden'))) {
				overlayCard(player1.m2);
				return;
			}
		}
	}
	if (player1.m3) {
		if (overlaying_card != player1.m3) {
			if (inBounds($('#m3_hidden'))) {
				overlayCard(player1.m3);
				return;
			}
		}
	}
	if (player1.m4) {
		if (overlaying_card != player1.m4) {
			if (inBounds($('#m4_hidden'))) {
				overlayCard(player1.m4);
				return;
			}
		}
	}
	if (player1.m5) {
		if (overlaying_card != player1.m5) {
			if (inBounds($('#m5_hidden'))) {
				overlayCard(player1.m5);
				return;
			}
		}
	}
	if (linkLeft) {
		if (overlaying_card != linkLeft && linkLeft.data("controller") == player1) {
			if (inBounds($('#link_left_hidden'))) {
				overlayCard(linkLeft);
				return;
			}
		}
	}
	if (linkRight) {
		if (overlaying_card != linkRight && linkRight.data("controller") == player1) {
			if (inBounds($('#link_right_hidden'))) {
				overlayCard(linkRight);
				return;
			}
		}
	}
	overlaying_card = null;
}

function checkAttack(e) {
	updateMouse(e);
	$('body').off("click", checkAttack);
	$('body').off("mousemove", moveSword);
	$('#sword').hide();
	if (player2.m1) {
		if (inBounds($('#opp_m1_hidden'))) {
			attackCard(player2.m1);
			return;
		}
	}
	if (player2.m2) {
		if (inBounds($('#opp_m2_hidden'))) {
			attackCard(player2.m2);
			return;
		}
	}
	if (player2.m3) {
		if (inBounds($('#opp_m3_hidden'))) {
			attackCard(player2.m3);
			return;
		}
	}
	if (player2.m4) {
		if (inBounds($('#opp_m4_hidden'))) {
			attackCard(player2.m4);
			return;
		}
	}
	if (player2.m5) {
		if (inBounds($('#opp_m5_hidden'))) {
			attackCard(player2.m5);
			return;
		}
	}
	if (linkLeft) {
		if (inBounds($('#link_left_hidden'))) {
			if (isPlayer1(linkLeft.data("controller").username)) {
				return;
			}
			attackCard(linkLeft);
			return;
		}
	}
	if (linkRight) {
		if (inBounds($('#link_right_hidden'))) {
			if (isPlayer1(linkRight.data("controller").username)) {
				return;
			}
			attackCard(linkRight);
			return;
		}
	}
}

function overlayCard(dest_card) {
	if (dest_card.data("cardfront").data("monster_color") == "Token") {
		overlaying_card = null;
		return;
	}
	if (overlaying_card.data("id") == dest_card.data("id")) {
		return;
	}
	Send({"action":"Duel", "play":olPlay, "start_card":overlaying_card.data("id"), "end_card":dest_card.data("id")});
	overlaying_card = null;
}

function attackCard(attacked_card) {
	Send({"action":"Duel", "play":"Attack", "attacking_card":attacking_card.data("id"), "attacked_card":attacked_card.data("id")});
	attacking_card = null;
}

function moveXyzTargetE(e) {
	if (!overlaying_card) {
		return;
	}
	updateMouse(e);
	var scl = getScale($('#content')[0]);
	//var zoom = parseFloat($('#content')[0].style.zoom) * scl;
	var mX = mouseX / scl - marginLeft / scl;
	var mY = mouseY / scl - marginTop / scl;
	var rotation = Math.atan2(mY - parseInt(overlaying_card.css("top")), mX - parseInt(overlaying_card.css("left"))) * 180 / Math.PI;
	/*if (zooming) {
		var zoom = parseFloat($('#content')[0].style.zoom);
		log('first, mX = ' + mX);
		mX = zoom * mX;
		log('then, mX = ' + mX);
		mY = zoom * mY;
		//mX += parseInt($('#overlay').css("width"));
	}*/
	TweenMax.to($('#overlay'), 0, {"left":mX, "top":mY, "rotation":rotation});
}

function refreshDuelChat() {
	Send({"action":"Load duel chat"});
}

function isMonster(player, card) {
	if (linkLeft && linkLeft[0] == card[0] && linkLeft.data("controller") == player) {
		return true;
	}
	if (linkRight && linkRight[0] == card[0] && linkRight.data("controller") == player) {
		return true;
	}
	if (player1.m1 && player1.m1[0] == card[0]) {
		return true;
	}
	if (player1.m2 && player1.m2[0] == card[0]) {
		return true;
	}
	if (player1.m3 && player1.m3[0] == card[0]) {
		return true;
	}
	if (player1.m4 && player1.m4[0] == card[0]) {
		return true;
	}
	if (player1.m5 && player1.m5[0] == card[0]) {
		return true;
	}
	return false;
}

function isST(player, card) {
	if (player1.s1 && player1.s1[0] == card[0]) {
		return true;
	}
	if (player1.s2 && player1.s2[0] == card[0]) {
		return true;
	}
	if (player1.s3 && player1.s3[0] == card[0]) {
		return true;
	}
	if (player1.s4 && player1.s4[0] == card[0]) {
		return true;
	}
	if (player1.s5 && player1.s5[0] == card[0]) {
		return true;
	}
	return false;
}

function resetGameE() {
	if (viewing || resetting) {
		return;
	}
	Send({"action":"Duel", "play":"Reset game"});
}

function updatePhase(str) {
	currentPhase = str;
	$('#turn .red').hide();
	if (isPlayer1(turn_player.username)) {
		$('#turn .red').show();
	}
	switch (currentPhase) {
		case "DP":
			enterDP();
			break;
		case "SP":
			enterSP();
			break;
		case "M1":
			enterM1();
			break;
		case "BP":
			enterBP();
			break;
		case "M2":
			enterM2();
			break;
		case "EP":
			enterEP();
			break;
		default:
			if (currentLabel.indexOf("duel") == 0) {
				players.push(players.splice(0, 1)[0]);
			}
			hidePhases();
			break;
	}
}

function updateLifePointsNow(player, data) {
	var wid = 0;
	var life_tween;

	player.lifepoints = data.lifepoints;
	if (player.lifepoints < 0) {
		player.lifepoints = 0;
	}
	wid = 154 - player.lifepoints / lifepointMax * 154;
	if (player.lifepoints >= lifepointMax) {
		wid = 0;
	}
	if (player == Player1()) {
		$('#lifepoints1 .black_bar').css("width", wid);
		$('#lifepoints1 .life_txt').text(player.lifepoints);
	}
	else {
		$('#lifepoints2 .black_bar').css("width", wid);
		$('#lifepoints2 .life_txt').text(player.lifepoints);
	}
}

function moveDuelFocus(e) {
	if (e.which >= 65 && e.which <= 90) {
		$('#duel .cin_txt').focus();
	}
	else if ((e.which >= 49 && e.which <= 57) || (e.which >= 97 && e.which <= 105)) {
		$('#duel #life_txt').focus();
	}
}

function resetDeckE() {
	if (currentLabel == "siding") {
		$('#swap_btn').disable(true);
		$('#reset_btn').disable(true);
		Send({"action":"Duel", "play":"Reset deck"});
		return;
	}
	if (viewing) {
		return;
	}
	Send({"action":"Duel", "play":"Reset game"});
}

function hideMap() {
	map_div.hide();
	map_div.detach();
}

function getDirections(name, str) {
	store_name = name;
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({address: str}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			showMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());
		} else {
			errorE("Could not find the location");
		}
	});
}

function showMap(lat, lng) {
	map_div.insertAfter($('#post_review_btn'));
	map_div.show();
	var googleLatAndLong = new google.maps.LatLng(lat, lng);
	var mapOptions = {
		zoom: 10,
		center: googleLatAndLong,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map($('#map .map_content')[0], mapOptions);
	addMarker(map, googleLatAndLong, store_name, store_name + ": " + lat + ", " + lng);
}

function addMarker(map, latlong, title, content) {
	var markerOptions = {
		position: latlong,
		map: map,
		title: title,
		clickable: true
	};
	var marker = new google.maps.Marker(markerOptions);
	var infoWindowOptions = {
		content: content,
		position: latlong
	};
	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(map);
	});
}

function getLatLong(str) {
	showDim();
	$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCqQoQ3PGTEyg8vGyYlwQJP0MXZ_mOXI4o&address=' + escape(str), function(data) {
		hideDim();
		tourneySearch(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng)
	});
}

function useCurrentPosition() {
	var millis = new Date().getTime();
	showDim();
	if (location_confirmed > 0) {
		tourneySearch(latitude, longitude, location_confirmed);
		return;
	}
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(useCurrentPositionComplete, function(){
			hideDim();
			if (new Date().getTime() - millis < 1000) {
				errorE("Geolocation is currently disabled by this browser.");
			}
		}, {timeout:10000});
	}
	else {
		hideDim();
		alert("Geolocation is not supported by this browser.");
	}
}

function useCurrentPositionComplete(position) {
	location_confirmed = 2;
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	tourneySearch(latitude, longitude, location_confirmed);
}

function getLocation() { // idk
	locationReceived(hostname, city, region, zip_code, country_code, latitude, longitude);
}
			
function locationReceived(hostname, city, region, zip_code, country_code, latitude, longitude) {
	this.hostname = hostname;
	this.city = city;
	this.region = region;
	this.zip_code = zip_code;
	this.country_code = country_code;
	this.latitude = latitude;
	this.longitude = longitude;
	
	/*hostname_so.data.hostname = hostname;
	city_so.data.city = city;
	region_so.data.region = region;
	zip_code_so.data.zip_code = zip_code;
	country_code_so.data.country_code = country_code;
	latitude_so.data.latitude = latitude;
	longitude_so.data.longitude = longitude;*/
}
	
function getCurrentPosition() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else {
		alert("Geolocation is not supported by this browser.");
	}
}

function showPosition(position) {
	currentPositionReceived(position.coords.latitude, position.coords.longitude);
}

function viewLog() {
	window.open(URL_START + 'log?id=' + userId + '-' + duelId);
}

/*function viewReplayE() {
	var url = URL_START + 'replay?id=' + userId + '-' + duelId;
	if (!duelist) {
		url = URL_START + 'replay?id=' + duelId;
	}
	window.open(url);
}*/

function viewReplayE() {
	window.open(URL_START + 'replay?id=' + (duelist ? userId + "-" : "") + duelId);
}

/*function viewReplayE() {
	window.open(URL_START + 'replay?id=' + (duelist ? userId + "-" : "") + (duelHash ? duelHash : duelId));
}*/

/*function viewReplayE() {
	if (duelHash) {
		viewReplay();
		return;
	}
	loadRecaptcha();
}

function viewReplay() {
	var url = URL_START + 'replay?id=' + userId + '-' + duelHash;
	if (!duelist) {
		url = URL_START + 'replay?id=' + duelHash;
	}
	window.open(url);
}

function hideRecaptcha() {
	$('#recaptcha_bg').hide();
}*/


















/*function recaptchaE(title) {
	hideDisplayBoxes();
	$(':focus').blur();
	//$('#recaptcha .cancel_btn').focus();
	$('#recaptcha_box').show();
	$('#recaptcha_box .title_txt').text(title);
	//$('.grecaptcha-badge:last').css("visibility", "hidden");
	//$('#recaptcha_box .recaptcha').html("");
	grecaptcha.reset();
	try {
		grecaptcha.render($('#recaptcha_box .recaptcha')[0], {"sitekey":"6LcwzlIlAAAAAHlxDi-6x9fzGhyfUXnAaYOyW0KD", "callback":"recaptchaCallback"});
	}
	catch(err) {
	}
}

function recaptchaCallback(token) {
	$('#recaptcha_box').hide();
	Send({"action":"Recaptcha", "token":token});
	showDim();
	
	//$('#recaptcha_box').hide();
	//private_chat_source.trigger($.Event("keypress", {"which":13}));
	//loadReplay(token);
}*/

function recaptchaE(title) {
	hideDisplayBoxes();
	$(':focus').blur();
	$('#recaptcha_bg').show();
	try {
		grecaptcha.render($('#recaptcha_bg .recaptcha')[0], {"sitekey":"6LcwzlIlAAAAAHlxDi-6x9fzGhyfUXnAaYOyW0KD", "callback":"recaptchaCallback"});
	}
	catch(err) {
	}
}

function recaptchaCallback(token) {
	Send({"action":"Recaptcha", "token":token});
	$('#recaptcha_bg').hide();
	grecaptcha.reset();
}










function answerCallE(e) {
	/*private_chat.find('.cell').each(function(i,e){
		console.log($(this).data());
		if ($(this).data("new_msg")) {
			errorE("Slow down, you have unanswered private messages.");
			return false;
		}
	});*/
	var id = $(e.target).data("id");
	if (!id) {
		return;
	}
	showDim();
	if (duelId) {
		exitDuel(false);
	}
	Send({"action":"Answer call", "id":id});
}

function addAllWatchers(data) {
	watchers_data = data.watchers;
	sortWatchers();
	var frag = "";
	for (var i = 0; i < watchers_data.length; i++) {
		frag += addWatcher(watchers_data[i], true);
	}
	$('#watchers .users').html(frag)
	$('#watchers .watchers_txt').text('Watchers: ' + $('#watchers .cell').length);
}

function loadWatchChatE() {
	watch_chat_limit += 50;
	startChatCycle($('#watch_chat_cycle'));
	loadWatchChat();
}

function loadWatchChat() {
	Send({"action":"Load watchers chat", "limit":watch_chat_limit});
}

function swapCardsE() {
	var str = "";
	var mainIds = [];
	var sideIds = [];
	var extraIds = [];
	for (var i = 0; i < deck_holes_arr.length; i++) {
		if (parseFloat(deck_holes_arr[i].css("opacity")) > 0) {
			mainIds.push(deck_filled_arr[i].data("object_id"));
			str += "Sided out " + deck_filled_arr[i].data("name") + "\n";
		}
	}
	for (i = 0; i < extra_holes_arr.length; i++) {
		if (parseFloat(extra_holes_arr[i].css("opacity")) > 0) {
			extraIds.push(extra_filled_arr[i].data("object_id"));
			str += "Sided out " + extra_filled_arr[i].data("name") + "\n";
		}
	}
	for (i = 0; i < side_holes_arr.length; i++) {
		if (parseFloat(side_holes_arr[i].css("opacity")) > 0) {
			sideIds.push(side_filled_arr[i].data("object_id"));
			str += "Sided in " + side_filled_arr[i].data("name") + "\n";
		}
	}
	var cards = {"main":mainIds, "side":sideIds, "extra":extraIds};
	$('#swap_btn').disable(true);
	$('#reset_btn').disable(true);
	Send({"action":"Duel", "play":"Swap cards", "cards":cards, "log":str});
}

function clearHoles() {
	for (var i = 0; i < deck_holes_arr.length; i++) {
		deck_holes_arr[i].css("opacity", 0);
	}
	for (i = 0; i < side_holes_arr.length; i++) {
		side_holes_arr[i].css("opacity", 0);
	}
	for (i = 0; i < extra_holes_arr.length; i++) {
		extra_holes_arr[i].css("opacity", 0);
	}
}

function doneSidingE() {
	if (solo) {
		doneSiding();
		return;
	}
	getConfirmation("Done Siding", "Are you sure you are done siding? Further siding may not be possible.", doneSiding);
}

function doneSiding() {
	Send({"action":"Duel", "play":"Done siding"});
}

function initSideCardFromData(data) {
	clearDeck();
	loading_deck = true;
	for (var i = 0; i < data.main.length; i++) {
		draggedCard = new CardFront();
		draggedCard.data("object_id", data.main[i].id);
		//if (draggedCard.id != data.main[i].data.id) {
			draggedCard.initializeFromData(data.main[i].data);
		//}
		draggedCard.clearLimit();
		addCardToMain(draggedCard);
		sidingMainArr.push(draggedCard);
		sidingMainTotal++;
	}
	for (i = 0; i < data.side.length; i++) {
		draggedCard = new CardFront();
		draggedCard.data("object_id", data.side[i].id);
		//if (draggedCard.id != data.side[i].data.id) {
			draggedCard.initializeFromData(data.side[i].data);
		//}
		draggedCard.clearLimit();
		addCardToSide(draggedCard);
		sidingSideArr.push(draggedCard);
		sidingSideTotal++;
	}
	for (i = 0; i < data.extra.length; i++) {
		draggedCard = new CardFront();
		draggedCard.data("object_id", data.extra[i].id);
		//if (draggedCard.id != data.extra[i].data.id) {
			draggedCard.initializeFromData(data.extra[i].data);
		//}
		draggedCard.clearLimit();
		addCardToExtra(draggedCard);
		sidingExtraArr.push(draggedCard);
		sidingExtraTotal++;
	}
	initializeDeckCards();
	loading_deck = false;
	clearLimits();
}

function clearLimits() {
	for (var i = 0; i < deck_arr.length; i++) {
		deck_arr[i].clearLimit();
	}
	for (i = 0; i < side_arr.length; i++) {
		side_arr[i].clearLimit();
	}
	for (i = 0; i < extra_arr.length; i++) {
		extra_arr[i].clearLimit();
	}
}

function setLimits() {
	for (var i = 0; i < deck_arr.length; i++) {
		deck_arr[i].setLimit();
	}
	for (i = 0; i < side_arr.length; i++) {
		side_arr[i].setLimit();
	}
	for (i = 0; i < extra_arr.length; i++) {
		extra_arr[i].setLimit();
	}
}

function updateSideCards(data) {
	log('udpateSidecards');
	loading_deck = true;
	var main0 = deck_filled_arr.concat();
	var side0 = side_filled_arr.concat();
	var extra0 = extra_filled_arr.concat();
	try {
		var main = [];
		var side = [];
		var extra = [];
		for (var i = 0; i < data.main.length; i++) {
			if (deck_filled_arr[i].data("object_id") == data.main[i]) {
				main.push(deck_filled_arr[i]);
			}
			else {
				for (var j = 0; j < side_filled_arr.length; j++) {
					if (side_filled_arr[j].data("object_id") == data.main[i]) {
						main.push(side_filled_arr[j]);
						break;
					}
				}
			}
		}
		for (i = 0; i < data.extra.length; i++) {
			if (extra_filled_arr[i].data("object_id") == data.extra[i]) {		
				extra.push(extra_filled_arr[i]);
			}
			else {
				for (j = 0; j < side_filled_arr.length; j++) {
					if (side_filled_arr[j].data("object_id") == data.extra[i]) {
						extra.push(side_filled_arr[j]);
						break;
					}
				}
			}
		}
		for (i = 0; i < data.side.length; i++) {
			if (side_filled_arr[i].data("object_id") == data.side[i]) {
				side.push(side_filled_arr[i]);
			}
			else {
				for (j = 0; j < deck_filled_arr.length; j++) {
					if (deck_filled_arr[j].data("object_id") == data.side[i]) {
						side.push(deck_filled_arr[j]);
						break;
					}
				}
				if (j == deck_filled_arr.length) {
					for (j = 0; j < extra_filled_arr.length; j++) {
						if (extra_filled_arr[j].data("object_id") == data.side[i]) {
							side.push(extra_filled_arr[j]);
							break;
						}
					}
				}
			}
		}
		clearDeck();
		for (i = 0; i < main.length; i++) {
			addCardToMain(main[i]);
		}
		for (i = 0; i < side.length; i++) {
			addCardToSide(side[i]);
		}
		for (i = 0; i < extra.length; i++) {
			addCardToExtra(extra[i]);
		}
	}
	catch (e) {
		console.log("catch entered");
		console.log(e);
		deck_filled_arr = main0;
		side_filled_arr = side0;
		extra_filled_arr = extra0;
	}
	clearHoles();
	initializeDeckCards();
	loading_deck = false;
}

function SidingHole() {
	var hole = $('<div class="siding_hole"></div>');
	hole.click(sidingClick);
	hole.on("mouseenter click", sidePreviewE);
	return hole;
}

function createSidingHoles(data) {
	for (var i = 0; i < data.main.length; i++) {
		var hole = new SidingHole();
		TweenMax.to(hole, 0, {"left":mainXArray[i], "top":mainYArray[i], "width":mainWidth, "height":mainHeight});
		deck_holes_arr.push(hole);
		$('#viewing').append(hole);
	}
	for (i = 0; i < data.side.length; i++) {
		var hole = new SidingHole();
		hole.css("background-color", "#0000FF");
		TweenMax.to(hole, 0, {"left":sideXArray[i], "top":489.1, "width":sideWidth, "height":sideHeight});
		side_holes_arr.push(hole);
		$('#viewing').append(hole);
	}
	for (i = 0; i < data.extra.length; i++) {
		var hole = new SidingHole();
		TweenMax.to(hole, 0, {"left":sideXArray[i], "top":571.6, "width":sideWidth, "height":sideHeight});
		extra_holes_arr.push(hole);
		$('#viewing').append(hole);
	}
}

function sidingClick() {
	if (parseFloat($(this).css("opacity")) > 0) {
		$(this).css("opacity", 0);
	}
	else {
		$(this).css("opacity", 0.5);
	}
	var totalDeckClicked = 0;
	var totalSideClicked = 0;
	var totalSideExtra = 0;
	var totalExtraExtra = 0;
	var totalExtra = 0;
	var totalNonExtra = 0;
	for (var i = 0; i < deck_holes_arr.length; i++) {
		if (parseFloat(deck_holes_arr[i].css("opacity")) > 0) {
			totalDeckClicked++;
			totalNonExtra++;
		}
	}
	for (i = 0; i < side_holes_arr.length; i++) {
		if (parseFloat(side_holes_arr[i].css("opacity")) > 0) {
			totalSideClicked++;
			if (side_filled_arr[i].data("monster_color") == "Fusion" || side_filled_arr[i].data("monster_color") == "Link" || side_filled_arr[i].data("monster_color") == "Synchro" || side_filled_arr[i].data("monster_color") == "Xyz") {
				totalExtra++;
				totalSideExtra++;
			}
			else {
				totalNonExtra++;
			}
		}
	}
	for (i = 0; i < extra_holes_arr.length; i++) {
		if (parseFloat(extra_holes_arr[i].css("opacity")) > 0) {
			totalDeckClicked++;
			totalExtra++;
			totalExtraExtra++;
		}
	}
	if (totalDeckClicked > 0 && totalDeckClicked == totalSideClicked && totalSideExtra == totalExtraExtra) {
		$('#swap_btn').disable(false);
	}
	else {
		$('#swap_btn').disable(true);
	}
}

function sidePreviewE(e) {
	for (var i = 0; i < deck_holes_arr.length; i++) {
		if (e.currentTarget == deck_holes_arr[i][0]) {
			previewFront(deck_filled_arr[i]);
			break;
		}
	}
	for (i = 0; i < side_holes_arr.length; i++) {
		if (e.currentTarget == side_holes_arr[i][0]) {
			previewFront(side_filled_arr[i]);
			break;
		}
	}
	for (i = 0; i < extra_holes_arr.length; i++) {
		if (e.currentTarget == extra_holes_arr[i][0]) {
			previewFront(extra_filled_arr[i]);
			break;
		}
	}
}

function checkSidingCards() {
	var mainTotal = 0;
	var sideTotal = 0;
	var extraTotal = 0;
	for (var i = 0; i < deck_arr.length; i++) {
		if (deck_arr[i].is(":visible")) {
			mainTotal++;
		}
		else {
			if (mainTotal != sidingMainTotal) {
				repairSide();
				return;
			}
			break;
		}
	}
	for (i = 0; i < side_arr.length; i++) {
		if (side_arr[i].is(":visible")) {
			sideTotal++;
		}
		else {
			if (sideTotal != sidingSideTotal) {
				repairSide();
				return;
			}
			break;
		}
	}
	for (i = 0; i < extra_arr.length; i++) {
		if (extra_arr[i].is(":visible")) {
			extraTotal++;
		}
		else {
			if (extraTotal != sidingExtraTotal) {
				repairSide();
				return;
			}
			break;
		}
	}
}

function repairSide() {
	console.log("repairSide entered");
	clearDeck();
	clearHoles();
	deck_filled_arr = sidingMainArr.concat();
	side_filled_arr = sidingSideArr.concat();
	extra_filled_arr = sidingExtraArr.concat();
	initializeDeckCards();
	$('#swap_btn').disable(true);
	$('#reset_btn').disable(false);
	$('#done_siding_btn').show();
	if (lastAction != "Reset deck") {
		errorE("There was a problem. Your deck has been reset");
		Send({"action":"Duel", "play":"Reset deck", "error":true});
	}
}

function skipIntro() {
	$('#spiral').hide();
	$('#skip_intro_btn').hide();
	clearInterval(twinkle_interval);
	clearInterval(card_interval);
	TweenMax.killTweensOf($('#cards > *'));
	TweenMax.killTweensOf($('#monsters > *'));
	TweenMax.killTweensOf($('#spiral'));
	TweenMax.killTweensOf($('.twinkle'));
	TweenMax.killTweensOf($('.flying_card'));
	TweenMax.killTweensOf($('.cardback'));
	TweenMax.killTweensOf($('#spiral'));
	$('#start .flying_card').remove();
	$('#start .twinkle').remove();
	gotoFrontPage();
	setTimeout(function(){
		loadGuild();
	}, 200);
}

function gotoFrontPage() {
	goto('front_page');
	$('#front_page').css("perspective", "unset");
	$('#welcome_buttons').show();
	tweenLogos(true);
	mes1.show();
	if (logged_in) {
		showLoggedIn();
		return;
	}
	//$('#login .username_txt').focus();
	showLogin();
}

function tweenLogos(b) {
	if (!b && (currentLabel != "front_page" || !activated)) {
		return;
	}
	TweenMax.fromTo($('#db_logo_top'), 0.83, {alpha:0}, {alpha:0.75, ease:Linear.easeNone, onComplete:function(){
		TweenMax.fromTo($('#db_logo_top'), 0.83, {alpha:0.75}, {alpha:0, delay:1.667, onComplete:function(){
			tweenLogos();
		}});
	}});
}

function stopCircuitAnimation() {
	
}

function mainExitE() {
	Close();
	gotoFrontPage();
}

function performStart(e) {
	if (!e) {
		administrate = show_admin_arrow;
		return;
	}
	administrate = e.currentTarget == $('#admin_admin_btn')[0];
	goto("connecting");
	lastFrame = "connecting";
	$('#screenshot_btn').show();
	$('#welcome_buttons').hide();
	//playCircuitAnimation();
	
	if (audio_arr.length > 0) {
		if (mobile && SAFARI) {
			audio_arr[0].volume = 0;
		}
		else {
			var volume = audio_arr[0].volume;
			var interval = setInterval(function(){
				if (audio_arr[0].volume <= 0.01) {
					clearInterval(interval);
					audio_arr[0].volume = 0;
					audio_arr[0].pause(); // if sound is muted, the theme song will continuing playing without this
					return;
				}
				audio_arr[0].volume -= 0.01;
				
				/*//audio_arr[0].volume = audio_arr[0].volume - 0.01;
				
				$('#mobile_txt').append('first, volume = ' + audio_arr[0].volume);
				var v = parseFloat(audio_arr[0].volume);
				v -= 0.02;
				$('#mobile_txt').append('v = ' + v);
				audio_arr[0].volume = v;
				
				volume -= 0.01;
				$('#mobile_txt').append('volume = ' + volume + '<br>');
				$('#mobile_txt').append('audio_arr.length = ' + audio_arr.length);
				audio_arr[0].volume = volume;
				
				//audio_arr[0].volume = 0;
				$('#mobile_txt').append('vol:' + audio_arr[0].volume + '<br>');*/
			}, 5);
		}
	}
	Connect();
	resizeE();
}

function playIntroSong(e) {
	$('html').off("mousedown", playIntroSong);
	if (e.target == $('#skip_intro_btn')[0]) {
		return;
	}
	if (mobile) {
		return;
	}
	playSound(IntroSong);
}

function checkQPS() {
	Send({"action":"QPS"});
}

function toggleRated() {
	Send({"action":"Toggle rated"});
}

function toggleAlphabetizing() {
	Send({"action":"Toggle alphabetizing"});
}




function toggleCustomCard1() {
	Send({"action":"Toggle custom card 1"});
}

function toggleCustomCard2() {
	Send({"action":"Toggle custom card 2"});
}




function toggleDoingThreads() {
	Send({"action":"Toggle doing threads"});
}

function toggleKickingWebsockets() {
	Send({"action":"Toggle kicking websockets"});
}

function togglePrintQueries() {
	Send({"action":"Toggle print queries"});
}

function repairStatuses() {
	Send({"action":"Repair status updates"});
}

function toggleRatings() {
	Send({"action":"Toggle ratings"});
}

function toggleTourneys() {
	Send({"action":"Toggle tourneys"});
}

function gcE() {
	getConfirmation("GC", "Are you sure you want to do this?", function(){
		Send({"action":"GC"});
	});
}

function restrictByExp() {
	Send({"action":"Restrict by exp"});
}

function restrictNewUsers() {
	Send({"action":"Restrict new users"});
}

function skimDuels() {
	Send({"action":"Skim duels"});
}

function emptyUsers() {
	Send({"action":"Empty users"});
}

function updateUserE() {
	getInput("Update User", "Enter a username:", "", 35, updateUser);
}

function updateUser() {
	Send({"action":"Update user", "username":$('#input .input_txt').val()});
}

function skimSockets() {
	Send({"action":"Skim sockets"});
}

function addBotE() {
	getInput("Add Bot", "Enter a number:", "50", 3, addBot, /[^0-9]/g);
}

function addBot() {
	Send({"action":"Add bot", "limit":~~($('#input .input_txt').val())});
}

function removeBotE() {
	getInput("Remove Bot", "Enter a username:", "", 35, removeBot);
}

function removeBot() {
	Send({"action":"Remove bot", "username":$('#input .input_txt').val()});
}

function loadAnnouncement() {
	Send({"action":"Load announcement"});
}

function reportLostConnections() {
	Send({"action":"Report lost connections"});
}

function resetDecksE() {
	Send({"action":"Reset decks"});
}

function reportActions() {
	Send({"action":"Report actions"});
}

function reportQueries() {
	Send({"action":"Report queries"});
}

function updateCardsFingerprintE() {
	getInput("Cards Fingerprint", "Enter a number:", cards_fingerprint, 3, updateCardsFingerprint, /[^0-9]/g);
}

function updateCardsFingerprint() {
	Send({"action":"Cards fingerprint", "fingerprint":~~($('#input .input_txt').val())});
}

function jsonErrorsE() {
	Send({"action":"JSON errors"});
}

function skimVersions() {
	Send({"action":"Skim versions"});
}

function skimQueries() {
	Send({"action":"Skim queries", "limit":1000});
}

function skimDuelErrors() {
	Send({"action":"Skim duel errors"});
}

function addDuelE() {
	Send({"action":"Add duel"});
}

function resetSearching() {
	Send({"action":"Reset searching"});
}

function addBannedIPE() {
	getInput("Add Banned IP", "Enter an IP to ban:", "", 0, addBannedIP);
}

function addBannedIP() {
	Send({"action":"Add banned IP", "ip":$('#input .input_txt').val()});
}

function removeBannedIPs() {
	Send({"action":"Remove banned IPs"});
}

function allowSpecialCharacters() {
	Send({"action":"Allow special characters"});
}

function bypassAvatarWins() {
	Send({"action":"Bypass avatar wins"});
}

function watchThreads() {
	Send({"action":"Watch threads"});
}

function checkDeckCards() {
	Send({"action":"Check deck cards"});
}

function updateVersionE() {
	getInput("Update Version", "Enter a number:", "", 0, updateVersion, /[^0-9]/g);
}

function updateVersion() {
	Send({"action":"Update version", "version":~~($('#input .input_txt').val())});
}

function skimErrors() {
	Send({"action":"Skim errors"});
}

function rebootE() {
	getInput("Reboot Server", "Enter the amount of minutes to remain:", "30", 4, rebootServer, /[^0-9]/g);
}

function rebootServer() {
	Send({"action":"Reboot server", "minutes":~~($('#input .input_txt').val())});
}

function cancelReboot() {
	Send({"action":"Cancel reboot"});
}

function retryActions() {
	Send({"action":"Toggle retry actions"});
}

function retryActions2() {
	Send({"action":"Toggle retry actions 2"});
}

function skimClients() {
	Send({"action":"Skim clients"});
}

function skimPausedGames() {
	Send({"action":"Skim paused games"});
}

function loadIllegalPhrases() {
	Send({"action":"Load illegal phrases"});
}

function kickInactive() {
	Send({"action":"Kick inactive"});
}

function refreshCardsE() {
	var options = '<option value="0">Exclude Custom Cards</option>';
	options += '<option value="1">Include Custom Cards</option>';
	getComboBox("Refresh Cards", "Select an option:", options, 0, function(){
		showDim();
		Send({"action":"Refresh cards", "custom":!!~~$('#combo .combo_cb').val()});
	});
}

function refreshTourneysE() {
	getConfirmation("Refresh Tourneys", "Refresh tourneys?", function(){
		Send({"action":"Refresh tourneys"});
	});
}

function refreshVideosE() {
	getConfirmation("Refresh Videos", "Refresh videos?", function(){
		Send({"action":"Refresh videos"});
	});
}

function getDetailedActionsE() {
	getInput("Get Detailed Actions", "Enter a username:", "", 50, function(){
		Send({"action":"Get detailed actions", "username":$('#input .input_txt').val()});
	});
	showDim();
}

function getUserIDE() {
	getInput("Get User ID", "Enter a username:", "", 50, function(){
		Send({"action":"Get user id 2", "username":$('#input .input_txt').val()});
	});
	showDim();
}

function checkMentionsE() {
	getInput("Check Mentions", "Enter a phrase:", "", 50, function(){
		Send({"action":"Check mentions", "phrase":$('#input .input_txt').val()});
	});
	showDim();
}

function crashE() {
	getInput("Crash", "Enter a username:", "", 50, function(){
		Send({"action":"Crash", "username":$('#input .input_txt').val()});
	});
	showDim();
}

function createAutoTourney() {
	Send({"action":"Create auto tourney"});
}

function daysOldE() {
	getInput("Days Old", "Enter a number of days:", "", 4, daysOld, /[^0-9]/g);
}

function daysOld() {
	Send({"action":"Set days old", "days":~~$('#input .input_txt').val()});
}

function deleteAllCardsE() {
	getInput("Delete All Custom Cards", "Enter a username:", "", 50, function(){
		Send({"action":"Delete all custom cards", "username":$('#input .input_txt').val()});
	});
	showDim();
}

function performEvalE() {
	getInput("Eval", "Enter a script:", "", null, performEval);
}

function performEval() {
	Send({"action":"Eval", "username":clickedUsername, "script":$('#input .input_txt').val()});
}

function startSidingE() {
	Send({"action":"Duel", "play":"Start siding"});
}

function addNoteE() {
	addNote("Add note", currentProfile, currentNote, function(){
		currentNote = $('#input .input_txt').val();
	});
}

function addNote(action, str, note, callback) {
	getInput("Add Note", "Make a note about this user:", note, 500, function(){
		saveNote(action, str, $('#input .input_txt').val(), callback);
	});
	showDim();
}

function saveNote(action, str, note, callback) {
	Send({"action":action, "username":str, "note":note});
	if (callback) {
		callback();
	}
}

function forbidPhrase() {
	getInput("Forbid Phrase", "Enter a username:", "", 50, function(){
		var u = $('#input .input_txt').val();
		getInput("Forbid Phrase", "Enter a phrase:", "", 500, function(){
			Send({"action":"Forbid phrase", "username":u, "phrase":$('#input .input_txt').val()});
		});
		showDim();
	});
	showDim();
}

/*$('#formats_inner').bind('mousewheel', function(e) {
	e.preventDefault();
	var left = parseInt($(this).css("left"));
	var value = (left + ((e.deltaX * e.deltaFactor) * -1));
	if (value > 0) {
		value = 0;
	}
	if (value < -1368) {
		value = -1368;
	}
	$('#formats_inner').css("left", value);
	if (left == 0) {
		$('#pools_prev_btn').hide();
	}
	else {
		$('#pools_prev_btn').show();
	}
	if (left == -1368) {
		$('#pools_next_btn').hide();
	}
	else {
		$('#pools_next_btn').show();
	}
});

$('.format_inner').bind('mousewheel', function(e) {
	e.preventDefault();
	var scrollTop = this.scrollTop;
	this.scrollTop = (scrollTop + ((e.deltaY * e.deltaFactor) * -1));
});*/


function takeScreenshot2() {
	takeScreenshot3($('#content')[0]);
}

function takeScreenshot3(element) {
	html2canvas(element, {scale:1 / contentScale}).then(function(canvas) {
		console.log(canvas.toDataURL());
		window.open(canvas.toDataURL());
	});
}

/*function addProxyE() {
	var options = '<option>Black Skull Dragon</option><option>Bickuribox</option><option>Charubin the Fire Knight</option><option>Cyber Saurus</option><option>Dark Balter the Terrible</option><option>Dark Blade the Dragon Knight</option><option>Dark Flare Knight</option><option>Dark Paladin</option><option>Darkfire Dragon</option><option>Deepsea Shark</option><option>Dragoness the Wicked Knight</option><option>Elemental HERO Flame Wingman</option><option>Elemental HERO Thunder Giant</option><option>Empress Judge</option><option>Fiend Skull Dragon</option><option>Flame Ghost</option><option>Flame Swordsman</option><option>Flower Wolf</option><option>Fusionist</option><option>Gaia the Dragon Champion</option><option>Gatling Dragon</option><option>Giltia the D. Knight</option><option>Humanoid Worm Drake</option><option>Kaminari Attack</option><option>Karbonala Warrior</option><option>King Dragun</option><option>Kwagar Hercules</option><option>Labyrinth Tank</option><option>Master of Oz</option><option>Metal Dragon</option><option>Mokey Mokey King</option><option>Musician King</option><option>Ojama King</option><option>Punished Eagle</option><option>Rabid Horseman</option><option>Reaper on the Nightmare</option><option>Roaring Ocean Snake</option><option>Ryu Senshi</option><option>Sanwitch</option><option>Skull Knight</option><option>St. Joan</option><option>Super Robolady</option><option>Super Roboyarou</option><option>The Last Warrior from Another Planet</option><option>Thousand Dragon</option><option>Thousand-Eyes Restrict</option><option>Twin-Headed Thunder Dragon</option><option>Warrior of Tradition</option><option>XY-Dragon Cannon</option><option>XYZ-Dragon Cannon</option><option>XZ-Tank Cannon</option><option>YZ-Tank Dragon</option>';
	getComboBox("Add Card", "Select the card you want to add to your Extra Deck:", options, 0, function(){
		Send({"action":"Duel", "play":"Add proxy", "name":$('#combo .combo_cb option:selected').text()});
	});
	showDim();
}*/

//takeScreenshot3($('#content')[0])

//takeScreenshot3($('.widget')[0])

function addProxyE() {
	addAutoComplete($('#input .input_txt'), "goat");
	getInput("Add Card", "Enter the card you want to add to your Extra Deck:", "", 100, function(){
		removeAutoComplete($('#input .input_txt'));
		Send({"action":"Duel", "play":"Add proxy", "name":$('#input .input_txt').val()});
	}, null, null, function(){
		removeAutoComplete($('#input .input_txt'));
	});
	showDim();
}

function sendReport(str) {
	if (typeof(str) == "number") {
		str = str.toString();
	}
	else if (typeof(str) == "boolean") {
		str = str.toString();
	}
	else if (typeof(str) == "object") {
		str = JSON.stringify(str);
	}
	Send({"action":"Error report", "message":str});
}

function addAutoComplete(txt, subject) {
	if (!changing_components) {
		return; // eh
	}
	if (txt.data("autocomplete")) {
		return;
	}
	var autocomplete = $('<div class="autocomplete"></div>')
	var t = parseInt(txt.css("top"));
	var h = parseInt(txt.data("proxy").css("height"));
	var ac1_txt = txt.data("proxy").clone(true);
	ac1_txt.css("opacity", 1);
	ac1_txt.css("top", 0);
	ac1_txt.text("Username");
	ac1_txt.click(gotoAC);
	var ac2_txt = ac1_txt.clone(true);
	ac2_txt.css("top", h);
	var ac3_txt = ac1_txt.clone(true);
	ac3_txt.css("top", h * 2);
	var ac4_txt = ac1_txt.clone(true);
	ac4_txt.css("top", h * 3);
	var ac5_txt = ac1_txt.clone(true);
	ac5_txt.css("top", h * 4);
	autocomplete.append(ac1_txt);
	autocomplete.append(ac2_txt);
	autocomplete.append(ac3_txt);
	autocomplete.append(ac4_txt);
	autocomplete.append(ac5_txt);
	autocomplete.mouseleave(hideAutoCompleteE);
	autocomplete.css("top", t + h);
	autocomplete.insertAfter(txt.data("proxy"));
	txt.data("autocomplete", autocomplete);
	txt.keyup(autoCompleteE);
	txt.data("subject", "username");
	if (subject) {
		txt.data("subject", subject);
	}
	txt.on("paste", function(){
		setTimeout(function(){
			autoCompleteTimer.reset();
		}, 100);
	});	
	hideAutoComplete(autocomplete);
}

function removeAutoComplete(txt) {
	txt.removeData("autocomplete");
	txt.removeData("subject");
	txt.off("keyup paste");
}

function gotoAC() {
	var txt = $(this).data("proxy");
	txt.val($(this).text());
	if (txt[0] == $('#profile_username_txt')[0]) {
		showDim();
		loadProfile(txt.val());
		return;
	}
	$(this).parent().hide();
	txt.focus();
}

function autoCompleteE() {
	autoCompleteTimer.reset();
	var txt = $(this);
	if ($('#dim').is(":visible") && txt[0] != $('#input .input_txt')[0]) {
		return;
	}
	if (txt.val().length < 3) {
		hideAutoComplete(txt);
		return;
	}
	autoCompleteTimer.start();
	ac_txt = txt
}
function autoCompleteTimerE(txt) {
	autoCompleteTimer.reset();
	if (!ac_txt.is(":focus")) {
		return;
	}
	if (ac_txt.val().length < 3) {
		return;
	}
	if (lastAutoCompleteString == ac_txt.val()) {
		//return; // when would this realistically happen?
	}
	awaiting_auto_complete = true;
	Send({"action":"Auto complete", "subject":ac_txt.data("subject"), "name":ac_txt.val(), "selector":cssPath(ac_txt[0])});
	lastAutoCompleteString = ac_txt.val();
}

function autoCompleteReponse(data) {
	console.log('a');
	//if ($('#dim').is(":visible") || $('#actions').is(":visible")) {
	//	return;
	//}
	var txt = $(data.selector);
	if (!txt.is(":focus")) {
		console.log('b');
		return;
	}
	hideAutoComplete(txt);
	var div = txt.data("autocomplete");
	if (!div) {
		console.log('c');
		return;
	}
	console.log('d');
	for (var i = 0; i < data.names.length; i++) {
		div.children().eq(i).text(data.names[i]);
		div.children().eq(i).show();
	}
	div.show();
}

function hideAutoCompleteE() {
	hideAutoComplete($(this))
}

function hideAutoComplete(div) {
	if (div.data("autocomplete")) {
		div = div.data("autocomplete");
	}
	if (!div.hasClass("autocomplete")) {
		return;
	}
	div.hide();
	div.children().hide();
}

function loadCard(e) {
	if (uploader < 2) {
		return;
	}
	var id = ~~my_card.data("id");
	switch(e.target) {
		case $('#upload_card .name_txt:visible, #edit_card .name_txt:visible')[0]:
			if (e.which != 13) {
				return;
			}
			Send({"action":"Load card", "name":$('#upload_card .name_txt:visible, #edit_card .name_txt:visible').val()});
			showDim();
			return;
		case $('#custom_cards .prev_btn')[0]:
			id--;
			break;
		case $('#custom_cards .next_btn')[0]:
			id++;
			break;
		case $('#custom_cards .id_txt')[0]:
			id = ~~$('#custom_cards .id_txt').val();
			break;
	}
	Send({"action":"Load card", "id":id});
	showDim();
}

function removeLossE() {
	var result_txt = $(this);
	var duel_record = result_txt.parents('.duel_record:first');
	var points_txt = duel_record.find('.points_txt');
	var new_rating_txt = duel_record.find('.new_rating_txt');
	var points = ~~points_txt.text();
	if (result_txt.text() != "LOSE") {
		return;
	}
	getConfirmation("Remove Loss", "Are you sure you want to remove this loss?", function(){
		result_txt.hide();
		points_txt.css("color", "gray");
		points_txt.text("0");
		if (points < 0) {
			var rating = ~~new_rating_txt.text().substring(0, new_rating_txt.text().indexOf("/"));
			var exp = ~~new_rating_txt.text().substring(new_rating_txt.text().indexOf("/") + 1, new_rating_txt.text().length);
			new_rating_txt.text((rating - points) + "/" + exp);
		}
		removeLoss(duel_record.data("id"));
	});
	showDim();
}

function removeLoss(id) {
	Send({"action":"Reverse loss", "id":id});
}

function startRegistrationE() {
	if ($('#tournaments #create_tourney .name_txt').val() == "") {
		errorE("Name is blank");
		return;
	}
	var max = ~~$('#tournaments #create_tourney .max_txt').val();
	var action = "Create tourney";
	var id = 0;
	if (selectedTourney && selectedTourney.data("id")) {
		action = "Edit tourney";
		id = selectedTourney.data("id")
	}
	var obj = {
		"action":action, 
		"name":$('#tournaments #create_tourney .name_txt').val(), 
		"desc":$('#tournaments #create_tourney .desc_txt').val(), 
		"max":max, 
		"id":id, 
		"format":$('#create_tourney .match_format_sel').val(), 
		"match_type":$('#create_tourney .match_type_sel').val(), 
		"restrict":~~$('#create_tourney .restrict_cb').is(":checked"), 
		"deck":~~$('#create_tourney .deck_check_cb').is(":checked"), 
		"signups":~~$('#create_tourney .signups_sel').val(), 
		//"max_date":$('#create_tourney .max_date_dp').val()
		"banlist":~~$('#create_tourney .banlist_sel').val()
	};
	if (moderator >= 2 && action == "Create tourney") {
		getComboBox("Tourney Member", "Select a tourney type:", ["Normal Tourney", "Automatic Tourney"], 0, function(){
			switch($('#combo .combo_cb').val()) {
				case "Normal Tourney":
					obj.action = "Create tourney"
					break;
				case "Automatic Tourney":
					obj.action = "Create automatic tourney"
					break;
			}
			startRegistration(obj);
		});
		showDim();
		return;
	}
	startRegistration(obj);
}

function startRegistration(obj) {
	Send(obj);
	if (action == "Create tourney") {
		showDim();
		return;
	}
	tourneys_data = null;
	showDim();
}

function createTourneyE() {
	showCreateTourney();
	$('#create_tourney').data("id", 0);
	$('#create_tourney .title_txt').text("Create Tourney");
	$('#create_tourney .start_registration_btn').val("Create Tourney");
	$('#create_tourney .start_registration_btn').disable(false);
	$('#create_tourney .format_cb').selectedIndex(0);
	$('#create_tourney .match_type_cb').selectedIndex(0);
	$('#create_tourney .restrict_cb').checked(false);
	$('#create_tourney .max_txt').val(8);
	fillAllBanlists();
	$('#create_tourney .preview').html("");
	$('#create_tourney .browse_btn').disable(true);
}

function showCreateTourney() {
	$('#tournaments #create_tourney').show();
	$('#tournaments #create_tourney .name_txt').focus();
}

function showBanlists() {
	$('#tournaments #create_tourney').hide();
	$('#tournaments #my_banlists').show();
	$('#my_banlists .banlists1').show();
	$('#my_banlists .banlists2').hide();
	$('#my_banlists .banlists3').hide();
	fillMyBanlists();
	$('#my_banlists .banlists1 .edit_sel').disable(my_banlists.length == 0);
	$('#my_banlists .banlists1 .edit_sel').selectedIndex(0);
	$('.banlist_sections .cardfront').detach();
	sortBanlistCards();
}

function hideBanlists() {
	$('#tournaments #create_tourney').show();
	$('#tournaments #my_banlists').hide();
}

function banlistBackE() {
	if ($('#my_banlists .banlists2').is(":visible")) {
		if (unsavedChanges) {
			getConfirmation2("Save Changes", "You have made unsaved changes to your banlist. Do you want to save?", function(){
				saveBanlistE();
			}, function(){
				unsavedChanges = false;
				banlistBackE();
			});
			showDim();
			return;
		}
		showBanlists();
		//$('#my_banlists .banlists1').show();
		//$('#my_banlists .banlists2').hide();
		//$('#my_banlists .banlists3').hide();
		return;
	}
	if ($('#my_banlists .banlists3').is(":visible")) {
		$('#my_banlists .banlists1').hide();
		$('#my_banlists .banlists2').show();
		$('#my_banlists .banlists3').hide();
		return;
	}
	$('#search').hide();
	removeSearchCards();
	preview.hide();
	preview_txt.hide();
	hideBanlists();
}

function newBanlistE() {
	//loadBanlistResponse({"id":0, "name":"", "extends":"", "official":1});
	loadBanlistResponse({"id":0, "name":"", "extends":0, "cardpool":1});
}

function loadBanlistE() {
	if (~~$(this).val() == 0) {
		return;
	}
	Send({"action":"Load banlist", "id":~~$('#my_banlists .edit_sel').val()});
	showDim();
}

function loadBanlistResponse(data) {
	hideDim();
	$('#my_banlists .banlists1').hide();
	$('#my_banlists .banlists2').show();
	$('#my_banlists .banlists3').hide();	
	$('#search').show();
	for (var i = 0; i < search_arr.length; i++) {
		$('#tournaments .cards').append(search_arr[i]);
	}
	
	banlistId = ~~data.id;
	$('#my_banlists .banlists2 .banlist_name_txt').val(data.name);
	$('#my_banlists .banlists2 .banlist_name_txt').focus();
	
	console.log('data.cardpool = ' + data.cardpool);
	
	$('#my_banlists .banlists2 .extends_sel').selectedIndex($('#my_banlists .banlists2 .extends_sel option[value="' + data.extends + '"]').index());
	//$('#my_banlists .banlists2 .official_cb').checked(!!data.official);
	$('#my_banlists .banlists2 .cardpool_sel').selectedIndex($('#my_banlists .banlists2 .cardpool_sel option[value="' + data.cardpool + '"]').index());
	$('#my_banlists .banlists2 .tcg_cb').checked(!!data.tcg);
	$('#my_banlists .banlists2 .ocg_cb').checked(!!data.ocg);
	$('#my_banlists .banlists2 .min_date_cb').checked(!!data.min);
	$('#my_banlists .banlists2 .min_date_dp').disable(!data.min);
	$('#my_banlists .banlists2 .min_date_dp').val(data.min ? data.min : "2002-03-08");
	$('#my_banlists .banlists2 .max_date_cb').checked(!!data.max);
	$('#my_banlists .banlists2 .max_date_dp').disable(!data.max);
	$('#my_banlists .banlists2 .max_date_dp').val(data.max ? data.max : new Date().toLocaleDateString('en-CA'));
	$('#my_banlists .banlist_secions .cardfront').detach();
	array(data.forbidden).forEach(function(e,i){
		var c = new CardFront();
		c.reinitialize(data.forbidden[i]);
		addToBanlist(c, $('.forbidden_section .banlist_cards'));
	});
	array(data.limited).forEach(function(e,i){
		var c = new CardFront();
		c.reinitialize(data.limited[i]);
		addToBanlist(c, $('.limited_section .banlist_cards'));
	});
	array(data.semi_limited).forEach(function(e,i){
		var c = new CardFront();
		c.reinitialize(data.semi_limited[i]);
		addToBanlist(c, $('.semi_limited_section .banlist_cards'));
	});
	array(data.unlimited).forEach(function(e,i){
		var c = new CardFront();
		c.reinitialize(data.unlimited[i]);
		addToBanlist(c, $('.unlimited_section .banlist_cards'));
	});
	$('#my_banlists .banlists2 .delete_btn').disable(!data.id);
	$('#my_banlists .banlists2').scrollTop(0);
	unsavedChanges = false;
	$('.banlist_link').html(banlistId ? '<font color="#0000FF"><a href="' + URL_START + 'banlist?id=' + banlistId + '" target="_blank">' + URL_START + 'banlist?id=' + banlistId + '</a></font>' : "");
}

function saveBanlistResponse(data) {
	//hideDim();
	messageE($('#my_banlists .banlists2 .banlist_name_txt').val() + " has been saved");
	banlistId = data.id;
	for (var i = 0; i < my_banlists.length; i++) {
		if (my_banlists[i].id == banlistId) {
			my_banlists.splice(i, 1);
			break;
		}
	}
	my_banlists.push({"id":banlistId, "name":data.name});
	fillMyBanlists();
	$('#my_banlists .banlists2 .delete_btn').disable(false);
	$('.banlist_link').html(banlistId ? '<font color="#0000FF"><a href="' + URL_START + 'banlist?id=' + banlistId + '" target="_blank">' + URL_START + 'banlist?id=' + banlistId + '</a></font>' : "");
	$('#my_banlists .banlists2').scrollTop(9999);
	fillAllBanlists();
}

function fillAllBanlists() {
	var v = $('#create_tourney .banlist_sel').val();
	var arr = banlists.concat(my_banlists).reverse();
	//var arr = my_banlists.concat().reverse();
	var options = '<option value="0">(No banlist specified)</option>';
	arr.forEach(function(e,i){
		options += '<option value="' + e.id + '">' + escapeHTML(e.name) + '</option>';
		//options += '<option value="' + e.id + '" style="color: ' + (e.id < 1000 ? 'gray' : 'black') + ';">' + escapeHTML(e.name) + '</option>';
	});
	$('#create_tourney .banlist_sel').html(options);
	$('#create_tourney .banlist_sel').selectedIndex($('#create_tourney .banlist_sel option[value="' + v + '"]').length > 0 ? $('#create_tourney .banlist_sel option[value="' + v + '"]').index() : 0);
}

function fillOfficialBanlists() {
	var options = '<option value="0">(No banlist selected)</option>';
	for (var i = banlists.length - 1; i >= 0; i--) {
		options += '<option value="' + banlists[i].id + '">' + escapeHTML(banlists[i].name) + '</option>';
	}
	$('.banlists2 .extends_sel').html(options);
	$('.banlists2 .extends_sel').selectedIndex(0);
}

function fillMyBanlists() {
	my_banlists.sort(function(a,b){
		return a.name < b.name;
	});
	var options = '<option value="0">(No banlist selected)</option>';
	for (var i = 0; i < my_banlists.length; i++) {
		options += '<option value="' + my_banlists[i].id + '">' + escapeHTML(my_banlists[i].name) + '</option>';
	}
	$('.banlists1 .edit_sel').html(options);
	$('.banlists1 .edit_sel').selectedIndex(0);
}

function banlistAdvancedE() {
	$('#my_banlists .banlists1').hide();
	$('#my_banlists .banlists2').hide();
	$('#my_banlists .banlists3').show();
	switch($(this)[0]) {
		case $('#my_banlists .forbidden_section .advanced_btn')[0]:
			$('.banlist_sections').data("div", $('#my_banlists .forbidden_section'));
			$('#my_banlists .banlists3 .name_lbl').text("Forbidden Cards:");
			break;
		case $('#my_banlists .limited_section .advanced_btn')[0]:
			$('.banlist_sections').data("div", $('#my_banlists .limited_section'));
			$('#my_banlists .banlists3 .name_lbl').text("Limited Cards:");
			break;
		case $('#my_banlists .semi_limited_section .advanced_btn')[0]:
			$('.banlist_sections').data("div", $('#my_banlists .semi_limited_section'));
			$('#my_banlists .banlists3 .name_lbl').text("Semi-Limited Cards:");
			break;
		case $('#my_banlists .unlimited_section .advanced_btn')[0]:
			$('.banlist_sections').data("div", $('#my_banlists .unlimited_section'));
			$('#my_banlists .banlists3 .name_lbl').text("Unlimited Cards:");
			break;
	}
}

function updateBanlistAdvanced() {
	var div = $('.banlist_sections').data("div");
	div.data("all", !!$('#my_banlists .banlists3 .all_cards_cb').is(":checked"));
	div.data("min", $('#my_banlists .banlists3 .min_date_dp:enabled').val());
	div.data("max", $('#my_banlists .banlists3 .max_date_dp:enabled').val());
}

function addToBanlist(card, div) {
	if (div.parents('.banlist_sections').find('.cardfront').filter(function(){
		return $(this).data("id") == card.data("id");
	}).length > 0) {
		return;
	}
	var c = new CardFront();
	c.copyCard(card);
	TweenMax.set(c, {"scale":0.0588});
	div.append(c);
	sortBanlistCards();
	c.setCardName();
	c.contextmenu(function(){
		removeFromBanlist(c);
		return false;
	});
	c.click(function(){
		getConfirmation("Remove Card", "Remove " + c.data("name") + " from this list?", function(){
			removeFromBanlist(c);
		});
		showDim();
	});
	c.on("mouseenter mousedown", previewE);
	unsavedChanges = true;
}

function removeFromBanlist(c) {
	c.detach();
	sortBanlistCards();
	unsavedChanges = true;
}

function sortBanlistCards() {
	$('.banlist_cards').each(function(){
		var x = 0;
		var y = 0;
		var h = 70;
		$(this).find('.cardfront').each(function(i,e){
			if (i > 0 && i % 10 == 0) {
				x = 0;
				y += 72;
				h += 70;
			}
			$(this).css("left", x);
			$(this).css("top", y);
			x += 51;
		});
		$(this).css("height", h);
		$(this).parents('.banlist_sections:first > div').css("height", h + 22);
	});
	
	/*{
		"name":"",
		"extends":$('.banlists2 .extends_sel').val(),
		"forbidden":{
			"cards":[getCardIds($('.forbidden_section .banlist_cards'))],
			"all":$('.forbidden_section').data("all"),
			"min":$('.forbidden_section').data("min"),
			"max":$('.forbidden_section').data("max"),
		},
	}*/
}
//sortBanlistCards();

function getCardIds(div) {
	var arr = [];
	div.find('.cardfront').each(function(i,e){
		arr.push(~~$(this).data("id"));
	});
	return arr;
}

function saveBanlistE() {
	if ($('#my_banlists .banlists2 .banlist_name_txt').val() == "") {
		errorE("Name is blank");
		return;
	}
	Send({
		"action":"Save banlist",
		"id":banlistId,
		"name":$('#my_banlists .banlists2 .banlist_name_txt').val(),
		"extends":~~$('.banlists2 .extends_sel').val(),
		//"official":~~$('.banlists2 .official_cb').is(":checked"),
		"cardpool":~~$('.banlists2 .cardpool_sel').val(),
		"tcg":~~$('.banlists2 .tcg_cb').is(":checked"),
		"ocg":~~$('.banlists2 .ocg_cb').is(":checked"),
		"min":$('.banlists2 .min_date_cb').is(":checked") ? $('.banlists2 .min_date_dp').val() : null,
		"max":$('.banlists2 .max_date_cb').is(":checked") ? $('.banlists2 .max_date_dp').val() : null,
		"forbidden":{
			"cards":getCardIds($('.forbidden_section .banlist_cards')),
		},
		"limited":{
			"cards":getCardIds($('.limited_section .banlist_cards')),
		},
		"semi_limited":{
			"cards":getCardIds($('.semi_limited_section .banlist_cards')),
		},
		"unlimited":{
			"cards":getCardIds($('.unlimited_section .banlist_cards')),
		}
	});
	showDim();
	unsavedChanges = false;
}

function deleteBanlistE() {
	getConfirmation("Delete Banlist", "Are you sure you want to delete this banlist?", deleteBanlist);
	showDim();
}

function deleteBanlist() {
	Send({"action":"Delete banlist", "id":banlistId});
	unsavedChanges = false;
	for (var i = 0; i < my_banlists.length; i++) {
		if (my_banlists[i].id == banlistId) {
			my_banlists.splice(i, 1);
			break;
		}
	}
	fillAllBanlists();
	fillMyBanlists();
	banlistBackE();
}










function gotoTournaments() {
	tourneys_data = null;
	selectedTourney = null;
	tourney_data = null;
	tourney_ready = false;
	
	$('#search').insertAfter($('#my_banlists'));
	for (var i = 0; i < search_arr.length; i++) {
		$('#tournaments .cards').append(search_arr[i]);
	}
	countSearch();
	
	goto('tournaments');
	$('#tournaments .period_sel').selectedIndex(0);
	loadTournaments();
	
	$('#tournaments .cards').append(preview);
	$('#tournaments .cards').append(preview_txt);
	resetSearch();
	searchOptionsPrev();
	removeSearchCards();
	preview.hide();
	preview_txt.hide();
	$('#search').hide();
}

function loadTournamentsE() {
	tourneys_data = null;
	loadTournaments();
}

function loadTournaments() {
	selectedTourney = null;
	tourney_data = null;
	tourney_ready = false;
	accept_members.detach();
	pairings.detach();
	standings.detach();
	$('#tournaments .period_sel').show();
	$('#tournaments .content:first').html(""); // we do this instead of .children().detach() so that os-host and company don't get removed
	$('#tournaments .back_btn').hide();
	$('#tournaments .create_tourney_btn').show();
	$('#tournaments .subtitle').text("");
	
	$('#create_tourney .name_txt').val("");
	$('#create_tourney .desc_txt').val("");
	$('#create_tourney .max_txt').val("");
	$('#create_tourney .deck_check_cb').checked(false);
	$('#create_tourney .max_date_dp').disable(true);
	//$('#create_tourney .banlist_sel').disable(true);
	
	$('#my_banlists .min_date_dp').disable(true);
	$('#my_banlists .max_date_dp').disable(true);
	
	if (tourneys_data) {
		loadTourneysResponse(tourneys_data)
		return;
	}
	Send({"action":"Load tourneys", "period":$('#tournaments .period_sel').val()});
	showDim();
}

function createTourneyResponse(data) {
	hideDim();
	messageE(data.name + " has been created!");
	$('#create_tourney').data("id", data.id);
	$('#create_tourney .browse_btn').disable(false);
	$('#create_tourney .start_registration_btn').disable(true);
}

/*function loadTourneysResponse(data) {

	if (currentLabel == "tournaments" && tourneys_data && !$('#create_tourney').is(":visible")) {
		return; // when the server refreshes tournaments for everyone, i don't want someone who is already viewing a tourney to be shown the new tourneys
	}
	else {
		console.log(currentLabel);
		console.log(tourneys_data);
		console.log($('#create_tourney').is(":visible"));
		console.log(!$('#create_tourney').is(":visible"));
	}
	

	hideDim();
	//hideCreateTourney();
	if (data.period != "past") {
		tourneys_data = data.tourneys; // unfinshed
	}
	//$('#tourneys').html("");
	$('#tourneys .tourney').detach();
	$('#tourney_sidebar').data("set", false);
	$('#tourney_sidebar .content:first').html("");
	for (var i = 0; i < data.tourneys.length; i++) {
		var tourney = new Tournament(data.tourneys[i]);
		$('#tourneys').append(tourney);
		$('#tourney_sidebar .content').append(tourney.clone(true));
	}
	tweenTourneys(true);
	tweenTourneys2(true);
	if (currentLabel != "tournaments") {
		return;
	}
	var Y = 5;
	$('#tournaments .content:first').html(""); // we do this instead of .children().detach() so that os-host and company don't get removed
	$('#tourneys .tourney').each(function(i,e){
		var tourney = $(e).clone(true);
		$('#tournaments .content:first').append(tourney);
		setText(tourney.find('.name_txt'));
		tourney.css("top", Y);
		Y += tourney[0].scrollHeight + 20;
		if (i < 10 && !simple) {
			TweenMax.fromTo(tourney, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	});
}*/

function loadTourneysResponse(data) {
	hideDim();
	tourneys_data = data.tourneys;
	var Y = 5;
	$('#tournaments .content:first').html(""); // we do this instead of .children().detach() so that os-host and company don't get removed
	for (var i = 0; i < data.tourneys.length; i++) {
		var tourney = new Tournament(data.tourneys[i]);
		$('#tournaments .content:first').append(tourney);
		setText(tourney.find('.name_txt'));
		tourney.css("top", Y);
		Y += tourney[0].scrollHeight + 20;
		if (i < 10 && !simple) {
			TweenMax.fromTo(tourney, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	}
	/*$('#tourneys .tourney').each(function(i,e){
		var tourney = $(e).clone(true);
		$('#tournaments .content:first').append(tourney);
		setText(tourney.find('.name_txt'));
		tourney.css("top", Y);
		Y += tourney[0].scrollHeight + 20;
		if (i < 10 && !simple) {
			TweenMax.fromTo(tourney, 0.7, {left:300, alpha:0}, {left:0, alpha:1, delay:0.1 * i, ease:Expo.easeInOut});
		}
	});*/
	updateTourneySeconds();
}

function loadOfficialTourneysResponse(data) {
	official_tourneys_data = data;
	$('#tourney_sidebar').data("set", false);
	$('#tourney_sidebar .content:first').html("");
	$('#tourneys .tourney').detach();
	for (var i = 0; i < data.tourneys.length; i++) {
		var tourney = new Tournament(data.tourneys[i]);
		$('#tourney_sidebar .content').append(tourney);
		$('#tourneys').append(tourney.clone(true));
	}
	tweenTourneys(true);
	tweenTourneys2(true);
	updateTourneySeconds();
}

function tourneyClickE() {
	//if (selectedTourney) {
	if (selectedTourney && currentLabel == "tournaments") {
		return;
	}
	if (currentLabel == "main_menu") {
		showDim();
	}
	$('#tournaments .back_btn').show();
	$('#tournaments .create_tourney_btn').hide();
	var vsp = $('#tournaments .content:first').scrollTop();
	selectedTourney = $(this).parents('.tourney:first').clone(true);
	$('#tournaments .content:first').html("");
	$('#tournaments .content:first').html(selectedTourney);
	//TweenMax.fromTo(selectedTourney, 0.8, {"top":parseInt(selectedTourney.css("top")) - vsp}, {"top":0, ease:Expo.easeInOut, onComplete:function(){
	TweenMax.fromTo(selectedTourney, 0.8, {"top":parseInt(selectedTourney.css("top")) - vsp}, {"top":40, ease:Expo.easeInOut, onComplete:function(){
		tourney_ready = true;
		showTournament();
	}});
	Send({"action":"View tourney", "id":selectedTourney.data("id")});
}

function joinTourneyResponse(data) {
	if (!selectedTourney || selectedTourney.data("id") != data.id) {
		return;
	}
	if (data.username == username) {
		$('#tournaments .join_tourney_btn').val("Leave Tournament");
	}
	addMemberCell(data.username);
}

function addMemberCell(str) {
	var cell = $(new Cell2(str));
	//cell.removeAttr("ondblclick");
	cell.data("username", str);
	cell.click(function(){
		accept_members.find('.accept_btn').disable(false);
		accept_members.find('.reject_btn').disable(false);
		accept_members.find('.check_btn').disable(!tourney_data.deck_check);
	});
	$('#accept_members .joinlist').append(cell);
}

function removePlayerE() {
	return removePlayer($(this).find('.username_txt').text());
}

function dropPlayerE(e) {
	if (!$(e.target).hasClass("avatar")) {
		return true;
	}
	return removePlayer($(e.target).siblings('.username_txt').text());
}

function removePlayer(str) {
	var arr = [];
	if (tourney_data.deck_check) {
		if (tourney_data.adjudicator || str == username) {
			arr.push("Check Deck");
		}
	}
	if (tourney_data.adjudicator) {
		arr.push("Drop Player");
	}
	switch(arr.length) {
		case 2:
			getComboBox("Tourney Member", "Select an action:", arr, 0, function(){
				switch($('#combo .combo_cb').val()) {
					case "Drop Player":
						dropPlayer();
						break;
					case "Check Deck":
						checkTourneyDeck(str);
						break;
				}
			});
			showDim();
			return false;
		case 0:
			return true;
		case 1:
			switch(arr[0]) {
				case "Drop Player":
					dropPlayer();
					break;
				case "Check Deck":
					getComboBox("Tourney Member", "Select an action:", arr, 0, function(){
						switch($('#combo .combo_cb').val()) {
							case "Check Deck":
								checkTourneyDeck(str);
								break;
						}
					});
					showDim();
					break;
			}
			return false;
	}
	
	function dropPlayer() {
		getConfirmation("Drop Player", "Are you sure you want to drop " + str + " from this tourney?", function(){
			Send({"action":"Remove player", "username":str, "id":tourney_data.id});
			showDim();
		});
		showDim();
	}
}

function joinTourneyE() {
	switch($(this).val()) {
		case "Join Tournament":
			if (tourney_data.signups_at) {
				errorE("You can sign up for this tourney in " + tourney_data.signups_at);
				return;
			}
			if (tourney_data.deck_check) {
				fillDecklists(false);
				getComboBox("Join Tourney", "Select a deck to use for this tourney: ", decklist_cb.html(), decklist_cb.prop("selectedIndex"), function(){
					joinTourney($('#combo .combo_cb').val());
				});
				showDim();
				return;
			}
			if (!tourney_data.approve_signups) {
				$('#tournaments .join_tourney_btn').val("Leave Tournament"); // meh
			}
			joinTourney();
			break;
		default:
			$('#tournaments .join_tourney_btn').val("Join Tournament");
			messageE("You have left this tournament");
			Send({"action":"Leave tourney", "id":selectedTourney.data("id")});
			break;
	}
}

function joinTourney(d) {
	Send({"action":"Join tourney", "id":selectedTourney.data("id"), "deck":d});
	showDim();
}

function acceptMemberE() {
	console.log('a');
	var cell = $('#accept_members .joinlist .cell2.selected'); 
	var str = cell.data("username");
	if (!str) {
		console.log('b');
		return;
	}
	console.log('c');
	Send({"action":"Accept tourney member", "username":str, "id":selectedTourney.data("id")});
	console.log('d');
	cell.detach();
	accept_members.find('.accept_btn').disable(true);
	accept_members.find('.reject_btn').disable(true);
	accept_members.find('.check_btn').disable(true);
	console.log('e');
}

function rejectMemberE() {
	var cell = $('#accept_members .joinlist .cell2.selected'); 
	var str = cell.data("username");
	if (!str) {
		return;
	}
	Send({"action":"Reject tourney member", "username":str, "id":selectedTourney.data("id")});
	cell.detach();
	accept_members.find('.accept_btn').disable(true);
	accept_members.find('.reject_btn').disable(true);
	accept_members.find('.check_btn').disable(true);
}

function rejectMemberResponse(data) {
	$('#accept_members .joinlist .cell2').filter(function() {
		return $(this).text() === data.username;
	}).detach();
	if (data.username == username) {
		var notification = new Notification();
		notification.data("callback", function(){
			gotoPairings(data);
		});
		notification.setupRejected(data.name);
		addToNotifications(notification, true);
		/*if (!selectedTourney || selectedTourney.data("id") != data.id) {
			return;
		}
		if (data.username == username) {
			$('#tournaments .join_tourney_btn').val("Join Tournament");
		}*/
	}
}

function checkTourneyDeckE() {
	var cell = $('#accept_members .joinlist .cell2.selected'); 
	var str = cell.data("username");
	if (!str) {
		return;
	}
	checkTourneyDeck(str);
}

function checkTourneyDeck(str) {
	Send({"action":"Check tourney deck", "id":tourney_data.id, "username":str});
}

function inviteFriendsE() {
	getConfirmation("Invite Friends", "Send an invitation to all your online friends to this tourney?", function(){
		Send({"action":"Invite friends", "id":tourney_data.id});
		showDim();
	});
	showDim();
}

function startTourneyResponse(data) {
	if (data.usernames && data.usernames.includes(username)) {
		var notification = new Notification();
		notification.data("callback", function(){
			gotoPairings(data);
		});
		notification.setupStarted(data.name);
		notification.data("perma", true);
		addToNotifications(notification, true, true);
	}
	if (!selectedTourney || selectedTourney.data("id") != data.id || currentLabel != "tournaments") {
		return;
	}
	//Send({"action":"View tourney", "id":selectedTourney.data("id")}); // by sending this requests, you sometimes (if not always) receive that data twice in a row
}

function pairingsResponse(data) {
	var notification = new Notification();
	notification.data("callback", function(){
		gotoPairings(data);
	});
	notification.setupStarted(data.name);
	notification.data("perma", true);
	addToNotifications(notification, true, true);
}

function gotoPairings(data) {
	if (unsavedChanges || (duel_active && (duelist || admin)) || (selectedTourney != null && selectedTourney.data("id") == data.id)) { // this is here in addition to notificationClick because escapeHTMLWithLinks can call this directly
		window.open(URL_START + "tourney?id=" + data.id);
		return;
	}
	tourney_data = null;
	selectedTourney = $('<div></div>');
	selectedTourney.data("id", data.id);
	tourney_ready = true;
	Send({"action":"View tourney", "id":selectedTourney.data("id")});
	showDim();
}

function editTourneyE() {
	showCreateTourney();
	$('#create_tourney').data("id", tourney_data.id);
	$('#create_tourney .title_txt').text("Edit Tourney");
	$('#create_tourney .name_txt').val(tourney_data.name);
	$('#create_tourney .desc_txt').val(tourney_data.description);
	//$('#create_tourney .match_format_sel').val(tourney_data.format);
	$('#create_tourney .match_format_sel').selectedIndex(~~(tourney_data.format == "swiss"));
	//$('#create_tourney .match_type_sel').val(tourney_data.match_type);
	$('#create_tourney .match_type_sel').selectedIndex(~~(tourney_data.match_type == "m"));
	$('#create_tourney .restrict_cb').checked(!!tourney_data.restrict);
	$('#create_tourney .max_txt').val(~~tourney_data.max);
	//$('#create_tourney .no_limit_cb').checked(!tourney_data.max);
	$('#create_tourney .deck_check_cb').checked(!!tourney_data.deck_check);
	//$('#create_tourney .max_date_dp').disable(!tourney_data.deck_check);
	//$('#create_tourney .banlist_sel').disable(!tourney_data.deck_check);
	
	fillAllBanlists();
	console.log('tourney_data.banlist = ' + tourney_data.banlist);
	console.log($('#create_tourney .banlist_sel option[value="' + tourney_data.banlist + '"]').index());
	
	$('#create_tourney .banlist_sel').selectedIndex($('#create_tourney .banlist_sel option[value="' + tourney_data.banlist + '"]').index());
	$('#create_tourney .start_registration_btn').val("Save Changes");
	$('#create_tourney .start_registration_btn').disable(false);
	$('#create_tourney .browse_btn').disable(false);
	$('#create_tourney .preview').html("");
	showTourneyPic(tourney_data.id, tourney_data.image);
}

function showCreateTourney() {
	$('#tournaments #create_tourney').show();
	$('#tournaments #create_tourney .name_txt').focus();
}

function setEndOfContenteditable(contentEditableElement) {
    var range,selection;
    if (document.createRange) { //Firefox, Chrome, Opera, Safari, IE 9+
        range = document.createRange(); //Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection(); //get the selection object (allows you to change selection)
        selection.removeAllRanges(); //remove any selections already made
        selection.addRange(range); //make the range you have just created the visible selection
    }
    else if (document.selection) { //IE 8 and lower
        range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
        range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
        range.select(); //Select the range (make it the visible selection
    }
}

function startTourneyE() {
	if (tourney_data.total < 2) {
		errorE("You need at least 2 players to start a tourney");
		return;
	}
	if (tourney_data.total < tourney_data.max) {
		getConfirmation("Start Tourney", "There are only " + tourney_data.total + " players in this tourney. Start anyway?", startTourney);
		showDim();
		return;
	}
	getConfirmation("Start Tourney", "Are you sure you are ready to start the tourney?", startTourney);
	//getConfirmation("Start Tourney", "Finalize players and start the tourney?", startTourney);
	showDim();
}

function startTourney() {
	Send({"action":"Start tourney", "id":tourney_data.id});
	showDim();
}

/*function resetTourneyE() {
	getConfirmation("Reset Tourney", "Clear all scores and reset this tourney?", resetTourney);
	showDim();
}

function resetTourney() {
	Send({"action":"Reset tourney", "id":tourney_data.id});
	showDim();
}*/

function resetTourneyE() {
	var options = ["Reset tourney", "Delete tourney"];
	getComboBox("Suspend Tourney", "Select an option: ", options, 0, function(){
		var action = $('#combo .combo_cb').val();
		if (action == "Reset tourney" && !tourney_data.started) {
			errorE("Tourney has not started yet");
			return;
		}
		Send({"action":action, "id":tourney_data.id});
		showDim();
	});
	showDim();
}

function updateWinnerE() {
	if ($(this).css("opacity") < 1) {
		return;
	}
	$(this).mouseleave();
	var bracket = $(this).parents('.bracket:first');
	var str = bracket.find('.player1 .username_txt').text();
	if ($(this).hasClass("checkmark2")) {
		str = bracket.find('.player2 .username_txt').text();
	}
	var action = "Mark winner";
	if (parseInt(bracket.find('.winner:visible').css("top")) == parseInt($(this).css("top"))) {
		action = "Unmark winner";
	}
	else {
		console.log(parseInt(bracket.find('.winner:visible').css("top")));
		console.log(parseInt($(this).css("top")));
	}
	var score = "1-0";
	getConfirmation(upperCamelCase(action), action.substring(0, action.indexOf(" ") + 1) + str + " as the winner of this match?", function(){
		if (tourney_data.match_type == "m" && action == "Mark winner") {
			var options = ["2-1", "2-0", "1-0", "0-0"];
			getComboBox(upperCamelCase(action), "Select the score for this match:", options, 2, function(){
				score = $('#combo .combo_cb').val();
				updateWinner(action, tourney_data.id, str, bracket.data("round"), bracket.data("id"), score);
			});
			showDim();
			return;
		}
		updateWinner(action, tourney_data.id, str, bracket.data("round"), bracket.data("id"), score);
	});
	showDim();
}

function updateWinner(action, id, str, round, match, score) {
	Send({"action":action, "id":id, "username":str, "round":round, "score":score});
	updateWinnerResponse({"action":action, "id":id, "username":str, "round":round, "match":match, "local":true});
}

/*function endTourneyE() {
	$('.end_tourney_btn').disable(true);
	//$('.reset_tourney_btn').disable(true);
	Send({"action":"End tourney", "id":tourney_data.id});
	showDim();
}*/

function endTourneyE() {
	if (!canEndTourney()) {
		getConfirmation("End Tourney", "There are matches that have not completed yet. End tourney anyway?", endTourney);
		showDim();
		return;
	}
	endTourney();
}

function endTourney() {
	tourneys_data = null;
	$('.end_tourney_btn').disable(true);
	Send({"action":"End tourney", "id":tourney_data.id});
	showDim();
}

function uploadTourneyPicE() {
	if (~~$('#create_tourney').data("id") == 0) {
		errorE("You can upload an image after creating a tourney");
		return;
	}
	if (frozen) {
		errorE("You cannot use this feature while frozen");
		return;
	}
	if (!uploader) {
		errorE("You cannot upload custom images");
		return;
	}
	$('#create_tourney .browse2_btn').click();
}

function uploadTourneyPic() {
	var file = this.files[0];
	if (file.size > 4294967296) {
		errorE("File is too large");
		return;
	}
	var fd = new FormData();
	fd.append("id", $('#create_tourney').data("id"));
	fd.append("user_id", userId);
	fd.append("username", username);
	fd.append("password", password);
	fd.append("date", new Date());
	fd.append("Filedata", file);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", URL_START + "php-scripts/upload-tourney-pic.php", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			hideDim();
			console.log(xhr.responseText);
			var data = JSON.parse(xhr.responseText);
			if (data.action == "Error") {
				errorE(data.message);
				return;
			}
			if (tourney_data) {
				tourney_data.image = data.image;
			}
			showTourneyPic(data.id, data.image)
			$('input[type="file"]').val(null);
			tourneys_data = null;
		}
	}
	xhr.send(fd);
	$(':focus').blur();
	showDim();
}

function showTourneyPic(id, image) {
	if (!image) {
		return;
	}
	var img = new Thumbnail();
	img.find('img').attr("src", IMAGES_START + "loading.gif");
	img.find('img').attr("src", IMAGES_START + "tourneys/" + id + ".jpg?v=" + image);
	img.css("width", "100%");
	img.css("height", "100%");
	$('#create_tourney .preview').html(img);
	
	var avatar = $('.tourney').filter(function(){
		return $(this).data("id") == id;
	}).find('.avatar:first .image');
	avatar.attr("src", IMAGES_START + "loading.gif");
	avatar.attr("src", IMAGES_START + "tourneys/" + id + ".jpg?v=" + image);
}

function addAdjudicatorE() {
	if (tourney_data.adjudicator < 2) {
		return true;
	}
	addAutoComplete($('#input .input_txt'));
	getInput("Add Adjudicator", "Enter a username:", "", 25, function(){
		removeAutoComplete($('#input .input_txt'));
		if ($('#input .input_txt').val() == "") {
			errorE("Name is blank");
			return;
		}
		Send({"action":"Add adjudicator", "id":tourney_data.id, "username":$('#input .input_txt').val()});
		//Send({"action":"Add player", "id":tourney_data.id, "username":$('#input .input_txt').val()});
		//showDim();
	}, /[^ -~●]/g, null, function(){
		removeAutoComplete($('#input .input_txt'));
	});
	showDim();
	return false;
}

function addPlayerE() {
	if (tourney_data.adjudicator < 2) {
		return true;
	}
	addAutoComplete($('#input .input_txt'));
	//getInput("Add Player", "Enter a user to send an invite for this tourney:", "", 25, function(){
	getInput("Add Player", "Send an invitation to an online user to join this tourney:", "", 25, function(){
		removeAutoComplete($('#input .input_txt'));
		if ($('#input .input_txt').val() == "") {
			errorE("Name is blank");
			return;
		}
		Send({"action":"Send tourney invite", "id":tourney_data.id, "username":$('#input .input_txt').val()});
		showDim();
	}, /[^ -~●]/g, null, function(){
		removeAutoComplete($('#input .input_txt'));
	});
	showDim();
	return false;
}

function deleteTourneyResponse(data) {
	if (!selectedTourney || selectedTourney.data("id") != data.id || currentLabel != "tournaments") {
		return;
	}
	tourneys_data = null;
	messageE("Tourney has been deleted", loadTournaments);
	showDim();
}

/*function tourneyInviteResponse(data) {
	var notification = new Notification();
	notification.data("callback", function(){
		gotoPairings(data);
	});
	notification.setupInvite(data.name, data.username);
	notification.data("urgent", true);
	addToNotifications(notification, true);
}*/

function tourneyInviteResponse(data) {
	var notification = new Notification();
	if (duelId && friends_arr.includes(data.username)) {
		var str = escapeHTML(data.username) + " invited you to join " + escapeHTML(data.name) + "<br><br>";
		str += '<a href="javascript:gotoPairings({id:' + data.id + '})"><u>View Tourney</u></a>';
		str += '&nbsp;&nbsp;<a href="javascript:joinTourneyFromInvite(' + data.id + ', ' + data.deck_check + ')"><u>Join Tourney</u></a>';
		notification = showAnnouncement("Tourney Invite", str);
	}
	else {
		notification.data("callback", function(){
			gotoPairings(data);
		});
		notification.setupInvite(data.name, data.username);
		addToNotifications(notification, true);
	}
}

function joinTourneyFromInvite(id, deck_check) {
	//if (!selectedTourney) {
		selectedTourney = $('<div></div>');
		selectedTourney.data("id", id);
		
		tourney_data = {};
		tourney_data.deck_check = deck_check;
	//}
	var btn = $('<input type="submit" value="Join Tournament" />');
	btn.click(joinTourneyE);
	btn.click();
	
	if (duelId) {
		tourney_data = null;
	}
}

/*function mulliganE() {
	if (player1.main_arr.length == 0) {
		return;
	}
	var ids = [];
	for (var card of player1.hand_arr) { // of loops cause syntax erros in IE
		ids.push(card.data("id"));
	}
	ids.reverse();
	for (var id of ids) {
		onData({"play":"To T Deck","action":"Duel","id":id,"username":username});
	}
	actionsQueue.push(function(){
		//var Deck = ids.concat();
		var Deck = [];
		for (var card of player1.main_arr) {
			Deck.push(card.data("id"));
		}
		onData({"play":"Shuffle deck","action":"Duel","deck":Deck,"username":username});
		
		actionsQueue.push(function(){
			ids.reverse();
			for (var id of ids) {
				onData({"play":"Draw card","action":"Duel","id":id,"username":username});
			}
			actionsQueue.push(function(){
				messageE("April Fools!");
				endAction();
			});
			endAction();
		});
		endAction();
	});
}*/

function viewingScrollE0(e) {
	var vsp = $(this).scrollTop();
	
	var top = parseInt(menu.css("top"));
	
	console.log('viewingVSP = ' + viewingVSP);
	console.log('vsp = ' + vsp);
	console.log('top = ' + top);
	
	
	
	
	//menu.css("top", top + vsp - viewingVSP);
	//menu.css("top", top + vsp);
	//menu.css("top", top - viewingVSP);
	menu.css("top", top - vsp);
	
	viewingVSP = vsp;
	

	/*//viewingVSP
	console.log(e);
	console.log(this);
	console.log($(this));
	console.log($(e));*/
}

function viewingScrollE(e) {
	var vsp = $(this).scrollTop();
	var top = menu.data("top");
	menu.css("top", top - viewingVSP);
	viewingVSP = vsp;
	
	/*
	58 + 33 = 91
		
	279+58
	
	
	56 - 43 = 13
	
	if (menu.y + menu.height > 43
	
	if (menu.y + menu.height > 91*/
	
	var y = parseInt(menu.css("top"));
	var h = parseInt(menu.css("height"));
	if (y + h < 91 || y + h > 330) {
		removeCardMenu();
	}
	
	
}

function loadGuild() {
	if (!revamped) {
		return;
	}
	var millis = new Date().getTime();
	if (guild_load_time >= millis - 600000) { // 10 min
		return;
	}
	guild_load_time = millis;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://discord.com/api/guilds/274074062354120704/widget.json", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			loadGuildResponse(xhr.responseText);
		}
	}
	xhr.send();
}

function loadGuildResponse(str) {
	console.log(str);
	var data = JSON.parse(str);
	data.channels.sort(function(a,b){
		if (a.position < b.position) {
			return -1;
		}
		if (a.position > b.position) {
			return 1;
		}
		return 0;
	});
	$('#widget .members_txt').html('<strong>' + ~~data.presence_count + '</strong> Members Online');
	$('#widget .voice_channels').children().detach();
	$('#widget .members').children().detach();
	$('#widget .members_online_txt').show();
	for (var i = 0; i < data.channels.length; i++) {
		var voice_channel = $('<div class="voice_channel"></div>');
		var channel_name = $('<div class="channel_name"></div>');
		channel_name.text(data.channels[i].name);
		var members = $('<div class="members"></div>');
		members.addClass("channel" + data.channels[i].id);
		voice_channel.append(channel_name);
		voice_channel.append(members);
		$('#widget .voice_channels').append(voice_channel);
	}
	var total = 0;
	for (var i = 0; i < data.members.length; i++) {
		if (total >= 25) {
			break;
		}
		var member = $('<div class="member"></div>');
		var img = $('<img class="image" src="' + data.members[i].avatar_url + '" />');
		var status = $('<div class="status"></div>');
		switch(data.members[i].status) {
			case "dnd":
				status.css("background", "#f04747");
				break;
			case "idle":
				status.css("background", "#faa61a");
				break;
		}
		var name = $('<span class="name"></span>');
		name.text(data.members[i].username);
		member.append(img);
		member.append(status);
		member.append(name);
		if (data.members[i].game) {
			var game = $('<span class="game"></span>');
			game.text(data.members[i].game.name);
			member.append(game);
		}
		if (data.members[i].self_mute) {
			var mute = $('<img class="mute" src="' + IMAGES_START + 'svg/mute.svg" />');
			member.append(mute);
		}
		if (data.members[i].self_deaf) {
			var deaf = $('<img class="deaf" src="' + IMAGES_START + 'svg/deaf.svg" />');
			member.append(deaf);
			member.find('.mute').addClass("moved");
		}
		if (data.members[i].channel_id) {
			status.detach();
			$('.channel' + data.members[i].channel_id).append(member);
			$('.channel' + data.members[i].channel_id).css("margin-bottom", 4);
			continue;
		}
		$('#widget .body > .members').append(member);
		total++;
	}
	setTimeout(function(){
		if ($('#widget .free')[0].getBoundingClientRect().height > 18 || $('#widget .free')[0].getBoundingClientRect().height == 0) {
			$('#widget .free').css("top", 7);
		}
		if ($('#widget .members_txt')[0].getBoundingClientRect().height > 18 || $('#widget .members_txt')[0].getBoundingClientRect().height == 0) {
			$('#widget .members_txt').css("top", 24);
		}
	}, 50);
}

function rainbowMenu() {
	var index = 0;
	var arr = [180, 220, 240, 300, 40, 80];
	$('.menu_btn img').attr("src", "images/svg/menu_btn_up.svg");
	$('.menu_btn').css("filter", "hue-rotate(0deg)");
	$('.menu_btn').each(function(i,e){
		console.log(e.style.display);
		if (e.style.display == "none") {
			return;
		}
		$(this).css("filter", "hue-rotate(" + arr[index] + "deg)");
		index++;
		if (index >= 6) {
			index = 0;
		}
	});
}

function switchAccountE() {
	performLogout(false);
	if (logins.length == 0) {
		return;
	}
	logins.sort(function(a,b){
		if (a.username.toLowerCase() < b.username.toLowerCase()) {
			return -1;
		}
		if (a.username.toLowerCase() > b.username.toLowerCase()) {
			return 1;
		}
		return 0;
	});
	var index = 0;
	var options = '';
	var lastUsername = window.localStorage.getItem("lastUsername");
	for (var i = 0; i < logins.length; i++) {
		options += '<option>' + escapeHTML(logins[i].username) + '</option>';
		if (logins[i].username == lastUsername) {
			index = i;
		}
	}
	getComboBox("Switch Account", "Select an account to login with:", options, index, function(){
		for (var i = 0; i < logins.length; i++) {
			if (logins[i].username == $('#combo .combo_cb').val()) {
				username = logins[i].username;
				user_username = logins[i].username;
				password = logins[i].password;
				logged_in = true;
				administrate = !!logins[i].administrate;
				regular = true;
				show_admin_arrow = !!logins[i].administrate;
				showLoggedIn();
				window.localStorage.setItem("lastUsername", username);
				break;
			}
		}
	});
	showDim();
}

function menuTimerE() {
	if ($('.main_menu_circle').eq(0).data("active")) {
		showVideos();
	}
	else if ($('.main_menu_circle').eq(1).data("active")) {
		showTourneys();
	}
	else if ($('.main_menu_circle').eq(2).data("active")) {
		showStatuses();
	}
	if (currentLabel != "main_menu") {
		menuTimer.reset();
	}
}

/*function updateActiveCircle(e) {
	if (e.data("active")) {
		return false;
	}
	$('.main_menu_circle').data("active", false);
	e.data("active", true);
	TweenMax.to($('.main_menu_circle'), 0.8, {"alpha":0.3, ease:Circ.easeInOut});
	TweenMax.to(e, 0.8, {"alpha":1, ease:Circ.easeInOut});
	return true;
}*/

function updateActiveCircle(e) {
	if (e.data("active")) {
		return false;
	}
	$('.main_menu_circle').data("active", false);
	e.data("active", true);
	TweenMax.to($('.main_menu_circle .background'), 0.8, {"alpha":0, ease:Circ.easeInOut});
	TweenMax.to(e.find('.background'), 0.8, {"alpha":1, ease:Circ.easeInOut});
	return true;
}

function showStatuses(e) {
	if (!updateActiveCircle($('.main_menu_circle').eq(0))) {
		return;
	}
	if (e) {
		endCircleCycle();
		//menuTimer.reset();
	}
	var left = revamped ? 9 : 7;
		left = 0;
	var width = parseInt($('#circle_content').css("width"));
	TweenMax.to($('#videos0, #tourneys0'), currentLabel == "main_menu" ? 1 : 0, {"left":-width, ease:Expo.easeInOut});
	TweenMax.fromTo($('#statuses0'), currentLabel == "main_menu" ? 1 : 0, {"left":width}, {"left":left, ease:Expo.easeInOut, onComplete:function(){
		$('#status_cb').show();
		$('#post_status_btn').show();
	}});
	tweenTourneys();
}

function showVideos(e) {
	if (!updateActiveCircle($('.main_menu_circle').eq(1))) {
		return;
	}
	if (e) {
		endCircleCycle();
		//menuTimer.reset();
	}
	$('#status_cb').hide();
	$('#post_status_btn').hide();
	var width = parseInt($('#circle_content').css("width"));
	TweenMax.to($('#statuses0, #tourneys0'), currentLabel == "main_menu" ? 1 : 0, {"left":-width, ease:Expo.easeInOut});
	TweenMax.fromTo($('#videos0'), currentLabel == "main_menu" ? 1 : 0, {"left":width}, {"left":1, ease:Expo.easeInOut});
	$('#videos0').show();
}

function showTourneys(e) {
	if (!updateActiveCircle($('.main_menu_circle').eq(2))) {
		return;
	}
	if (e) {
		endCircleCycle();
		//menuTimer.reset();
	}
	$('#status_cb').hide();
	$('#post_status_btn').hide();
	var width = parseInt($('#circle_content').css("width"));
	TweenMax.to($('#statuses0, #videos0'), currentLabel == "main_menu" ? 1 : 0, {"left":-width, ease:Expo.easeInOut});
	TweenMax.fromTo($('#tourneys0'), currentLabel == "main_menu" ? 1 : 0, {"left":width}, {"left":0, ease:Expo.easeInOut});
	$('#tourneys0').show();
	tweenTourneys2();
}

function tweenTourneys2(b) {
	if (!$('#tourneys0').is(":visible")) {
		console.log('returning');
		return;
	}
	//var tourneyY = 5;
	var tourneyY = 40;
	var arr = $('#tourneys .tourney').toArray();
	for (var i = 0; i < arr.length; i++) {
		var tourney = $(arr[i]);
		if (!tourney.data("set")) {
			tourney.data("set", true);
			tourney.css("top", tourneyY);
			tourneyY += tourney[0].scrollHeight + 20;
		}
		if (!simple && b && i < 10) {
			var tourneyX = parseInt(tourney.css("left"));
			TweenMax.fromTo(tourney, 1, {left:tourneyX + 600, alpha:0}, {left:tourneyX, alpha:1, ease:Expo.easeInOut, delay:0.08 * i});
		}
		//setText(tourney.find('.name_txt'));
	}
}

function circleContentScrollE(e) {
	if ($(e.target).scrollTop() > 0) {
		//endCircleCycle();
		menuTimer.reset();
	}
}

function endCircleCycle() {
	$('#statuses0, #videos0, #tourneys0').off("scroll");
	menuTimer.destroy();
}

  $(function() {
    $('.deck_total_sl').slider({
      range: true,
      min: 20,
      max: 60,
      values: [40, 60],
      slide: function( event, ui ) {
        $('.deck_total_lbl').text("Deck may contain " + ui.values[0] + "-" + ui.values[1] + " cards");
      }
    });
    //$('.deck_total_lbl').val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  });
  
function jumpyText() {
	console.log('jumpyText');
	$('.jumpy').each(function(){
		var index = 0;
		var str = $(this).text();
		var fontSize = parseInt($(this).css("font-size"));
		var distance = fontSize / 9;
		var beziers = [{x:0, y:distance}, {x:distance, y:0}, {x:0, y:-distance}, {x:0, y:-distance}];
		$(this).html("");
		for (var i = 0; i < str.length; i++) {
			var f = $('<font style="display: inline-block;">' + (str[i] == " " ? "&nbsp;" : str[i]) + '</font>');
			$(this).append(f);
			f.data("bezier", beziers);
			beziers = beziers.concat(beziers.splice(0, 1));
			spinAround(f);
		}
	
		function spinAround(f) {
			if (!f.is(":visible")) {
				return;
			}
			TweenMax.to(f, 0.2, {"bezier":f.data("bezier"), "ease":Linear.easeNone, "onComplete":function(){
				spinAround(f);
			}});
		}
	});
}

function onPaste(e) {
	var clipText = e.originalEvent.clipboardData.getData('text/plain');
	if (currentLabel == "deck_constructor" && isYDKE(clipText)) {
		importDeck(e, function(){
			importYDKE(clipText);
		});
	}
}

function input2OK() {
	hideDisplayBoxes();
	Send({"action":"Duel", "play":"Edit stats", "card":edit_stats_card.data("id"), "atk":$('#input2 .atk_txt').val(), "def":$('#input2 .def_txt').val()});
}

function editStatsE(e) {
	var edit_stats_card0;
	switch($(this)[0]) {
		case hm1_txt:
			edit_stats_card0 = player1.m1;
			break;
		case hm2_txt:
			edit_stats_card0 = player1.m2;
			break;
		case hm3_txt:
			edit_stats_card0 = player1.m3;
			break;
		case hm4_txt:
			edit_stats_card0 = player1.m4;
			break;
		case hm5_txt:
			edit_stats_card0 = player1.m5;
			break;
		case om1_txt:
			edit_stats_card0 = player2.m1;
			break;
		case om2_txt:
			edit_stats_card0 = player2.m2;
			break;
		case om3_txt:
			edit_stats_card0 = player2.m3;
			break;
		case om4_txt:
			edit_stats_card0 = player2.m4;
			break;
		case om5_txt:
			edit_stats_card0 = player2.m5;
			break;
		case hl_txt:
			edit_stats_card0 = linkRight;
			break;
		case ol_txt:
			edit_stats_card0 = linkLeft;
			break;
		default:
			return;
	}
	var active_input = $('#input2 .atk_txt');
	if (edit_stats_card0 == edit_stats_card) {
		active_input = edit_stats_card0.data("active_input");
	}
	edit_stats_card = edit_stats_card0;
	if (edit_stats_card.data("face_down")) {
		return;
	}
	hideDisplayBoxes();
	$('#input2').show();
	$('#input2 .body_txt').text("Editing stats for " + edit_stats_card.data("cardfront").data("name"));
	$('#input2 .atk_txt').val(edit_stats_card.data("new_atk") ?? edit_stats_card.data("cardfront").data("atk"));
	$('#input2 .def_txt').val(edit_stats_card.data("new_def") ?? edit_stats_card.data("cardfront").data("def"));
	active_input.focus();
	active_input.select();
	showDim();
}

function saveEditStat(e) {
	edit_stats_card.data("active_input", $(this)[0] == $('#input2 .atk_txt')[0] ? $('#input2 .atk_txt') : $('#input2 .def_txt'));
}





/*



<font style="font-family: Andy Bold; text-transform: uppercase;">Grunty wears a <font class="jumpy">flea circus</font> under that repulsive dress of hers!</font>
<script>jumpyText();</script>


<font style="font-family: Andy Bold; text-transform: uppercase;">Grunty brushes her rotten teeth with <font class="jumpy">salted slug</font> flavored tooth paste!</font>
<script>jumpyText();</script>

<font style="font-family: Andy Bold; text-transform: uppercase;">She also washes her hair with <font class="jumpy">rancid milk</font>. Yuk!</font>
<script>jumpyText();</script>

<font style="font-family: Andy Bold; text-transform: uppercase;">And she gets her clothes from <font class="jumpy">the trash can</font>!</font>
<script>jumpyText();</script>





<font style="font-family: Andy Bold; text-transform: uppercase;">Ugly Grunty's nickname was <font class="jumpy">Jelly Belly</font>!</font>
<script>jumpyText();</script>

<font style="font-family: Andy Bold; text-transform: uppercase;">I also know that <font class="jumpy">sweaty gorilla feet</font> is her favorite smell!</font>
<script>jumpyText();</script>

<font style="font-family: Andy Bold; text-transform: uppercase;">And the old hag's favorite color is <font class="jumpy">dung brown</font>!</font>
<script>jumpyText();</script>






<font style="font-family: Andy Bold; text-transform: uppercase;">Grunty wears a <font class="jumpy">flea circus</font> under that repulsive dress of hers!</font>
<script>jumpyText();</script>

<font style="font-family: Andy Bold; text-transform: uppercase;">She's also got this nasty pet dog whose name is <font class="jumpy">Ripper</font>!</font>
<script>jumpyText();</script>

<font style="font-family: Andy Bold; text-transform: uppercase;">My sister sings in her own band, <font class="jumpy">Grunty and the Broomstick Boys</font>. They're awful!</font>
<script>jumpyText();</script>












<font style="font-family: Andy Bold; text-transform: uppercase;">My lazy sister often sleeps <font class="jumpy">in a dumpster</font>, the dirty hag!</font>
<script>jumpyText();</script>

<font style="font-family: Andy Bold; text-transform: uppercase;">The only thing she's ever won was the <font class="jumpy">biggest butt</font> competition at witch school!</font>
<script>jumpyText();</script>

<font style="font-family: Andy Bold; text-transform: uppercase;">She often boasts of <font class="jumpy">appearing on the cover of Fat Hag Monthly</font>!</font>
<script>jumpyText();</script>



<font style="font-family: Andy Bold; text-transform: uppercase;"></font>
<font class="jumpy"></font>
<script>jumpyText();</script>






        "My lazy sister often sleeps in a pig sty/on a pile of treasure/in a dumpster, the dirty hag!"
        "The only thing she's ever won was the biggest butt/dirtiest undies/sweatiest socks competition at witch school!"
        "She often boasts of appearing on the cover of Fat Hag Monthly, posing in her long-johns/sitting on her broomstick/polishing her crystal ball!"

        "My fat old sister's favorite sport is broomstick racing/belly barging/loogie flicking!"
        "Although she's dim, she attended Fat Hag High/St. Dungball's School/Cauldron College!"
        "You won't believe that Gruntilda's party trick is blowing balloons up with her butt/performing a scary striptease/eating a bucket of beans!"

        "Grunty's best friend at witch school was the awful Fatty Hatty/Sweaty Betty/Saggy Maggy!"
        "When relaxing, she usually reads Fat Hag Monthly/Big Butts and Guts/Warty Girls Weekly magazine!"
        "While sipping a glass of her favorite camel spit milkshake/cold worm juice/smoothie elephant sweat!"

        "The disgusting Gruntilda has spider pancakes/rat bagels/tadpoles on toast for breakfast!"
        "Then she usually has slug stew/maggot pie/dog dung burgers for dinner. Yuk!"
        "Wartbags then finishes with eyeball ice cream/cockroaches and cream/rat sorbet for dessert. How horrid!"

        "Revolting Gruntilda's bedroom has smelly socks/rotting fish/dirty undies hanging from the ceiling!"
        "She also has an eyeball flower/a loogie bush/a verruca plant growing in a pot beside her bed! Filthy old bag!"
        "And you'd be sick if you saw her enormous spotty purple/sweaty yellow/streaky brown undies!"

        "Did you know Wartbags keeps a dragon's foot/loogie filled hanky/shrunken head in her pocket for luck?"
        "I've also seen my sister cuddling a huge sweaty baboon/her dirty undies/a scary teddy bear in bed at night!"
        "She's really proud of her broomstick. It's a top of the range Super Gutlifter Pro/Lardmaster 2000/Rough Rider Deluxe!"

        "Gruesome Gruntilda's favorite pastime is flying radio controlled bats/bursting boils/collecting dragon teeth!"
        "This poor guy called Dirty Berty/Undead Ed/Greasy Grant, was her first and only boyfriend!"
        "When she was younger, Grunty used to have a baby dragon/a greasy warthog/a mad vulture as a pet."











        "Grunty wears a flea circus/a reinforced girdle/massive bloomers under that repulsive dress of hers!"
        "She's also got this nasty pet dog whose name is Ripper/Legchomper/Bignacka!"
        "My sister sings in her own band, Grunty and the Cauldron Crew/Grunty and the Broomstick Boys/Grunty and the Monster Mob. They're awful!"


*/


jumpyText();

/*
$('span:visible').each(function(){
	if (onScreen($(this)[0])) {
		$(this).addClass("jumpy");
	}
}); jumpyText();*/



/*var blackFridayTimer = new Timer(1000);
	blackFridayTimer.callback = blackFridayE;
	blackFridayTimer.start();

var DATE = new Date("2022/11/26 00:00:00");
	DATE.toLocaleString('en-US', { timeZone: 'America/Denver'});

function blackFridayE() {
	var date = new Date();
		date.toLocaleString('en-US', { timeZone: 'America/Denver'});
	if (date.getTime() > DATE.getTime()) {
		blackFridayTimer.reset();
		$('#black_friday').detach();
		return;
	}
	var r = DATE.getTime() - date.getTime();
	var h = Math.floor(r / 3600000);
	var m = Math.floor((r - h * 3600000) / 60000);
	var s = Math.floor((r - h * 3600000 - m * 60000) / 1000);
	$('#black_friday_time').text("Time remaining: " + h.toString().padStart(2, '0') + ":" + m.toString().padStart(2, '0') + ":" + s.toString().padStart(2, '0'));
}*/






