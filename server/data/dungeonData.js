const DungeonData = [
  {
    id: 1,
    name: "Malenia",
    date: "April 7, 2022", // PAST
    location: "Elden Ring",
    level: "10",
    type: "demigod",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Elden_Ring_Box_art.jpg",
    description: "Blade of Miquella from Elden Ring who uses fast lifesteal attacks",
    Health: "200",
    Attack: "25"
  },
  {
    id: 2,
    name: "Radahn",
    date: "April 7, 2022", // PAST
    location: "Elden Ring",
    level: "20",
    type: "demigod",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    description: "War general of Caelid with gravity magic and meteor dive attacks",
    Health: "290",
    Attack: "41"
  },
  {
    id: 3,
    name: "Morgott",
    date: "June 15, 2022", // PAST
    location: "Elden Ring",
    level: "20",
    type: "omen king",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_1.jpg",
    description: "Leyndell ruler who chains holy blades with fast spear throws",
    Health: "255",
    Attack: "36"
  },
  {
    id: 4,
    name: "Mohg",
    date: "August 20, 2022", // PAST
    location: "Elden Ring",
    level: "20",
    type: "blood lord",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_2.jpg",
    description: "Lord of Blood with ritual phase transition and flame arcs",
    Health: "300",
    Attack: "43"
  },
  {
    id: 5,
    name: "Maliketh",
    date: "December 1, 2022", // PAST
    location: "Elden Ring",
    level: "20",
    type: "beast clergyman",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_3.jpg",
    description: "Fast dual-phase boss with aerial slashes and destined death",
    Health: "305",
    Attack: "44"
  },
  {
    id: 6,
    name: "Eredin",
    date: "May 19, 2023", // PAST
    location: "The Witcher 3",
    level: "20",
    type: "warlord",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    description: "Wild Hunt king from The Witcher 3 with teleporting sword combos",
    Health: "260",
    Attack: "35"
  },
  {
    id: 7,
    name: "Caranthir",
    date: "July 12, 2023", // PAST
    location: "The Witcher 3",
    level: "15",
    type: "wild hunt general",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
    description: "Heavy-armored Wild Hunt warrior with shield and mace pressure",
    Health: "250",
    Attack: "34"
  },
  {
    id: 8,
    name: "Imlerith",
    date: "October 5, 2023", // PAST
    location: "The Witcher 3",
    level: "15",
    type: "wild hunt mage",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_1.jpg",
    description: "Mage commander who uses portals and ranged frost bursts",
    Health: "230",
    Attack: "33"
  },
  {
    id: 9,
    name: "Dettlaff",
    date: "February 14, 2024", // PAST
    location: "The Witcher 3",
    level: "20",
    type: "higher vampire",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_2.jpg",
    description: "Blood and Wine boss with high-speed dive attacks and bat swarms",
    Health: "295",
    Attack: "42"
  },
  {
    id: 10,
    name: "The Toad Prince",
    date: "September 10, 2025", // PAST
    location: "The Witcher 3",
    level: "15",
    type: "cursed monster",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_3.jpg",
    description: "Large poison-based beast fight from Hearts of Stone",
    Health: "220",
    Attack: "30"
  },
  {
    id: 11,
    name: "Sephiroth",
    date: "June 20, 2026", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "swordsman",
    image: "https://upload.wikimedia.org/wikipedia/en/1/15/Final_Fantasy_VII_Remake_cover_art.jpg",
    description: "One-Winged Angel from Final Fantasy known for fast, heavy strikes",
    Health: "280",
    Attack: "42"
  },
  {
    id: 12,
    name: "Kefka",
    date: "June 25, 2026", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "mad god",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Final_Fantasy_VI_box.jpg",
    description: "Final stage villain with chaotic spell patterns and phase shifts",
    Health: "285",
    Attack: "40"
  },
  {
    id: 13,
    name: "Ultimecia",
    date: "July 2, 2026", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "sorceress",
    image: "https://upload.wikimedia.org/wikipedia/en/0/08/Final_Fantasy_VIII_box.jpg",
    description: "Time-compression boss using chained magic and summon attacks",
    Health: "270",
    Attack: "39"
  },
  {
    id: 14,
    name: "Jecht",
    date: "July 10, 2026", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "brute",
    image: "https://upload.wikimedia.org/wikipedia/en/6/60/Final_Fantasy_X_cover.jpg",
    description: "Braska's Final Aeon duel with sweeping melee combos",
    Health: "260",
    Attack: "37"
  },
  {
    id: 15,
    name: "Ardyn",
    date: "July 20, 2026", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "immortal",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5a/Final_Fantasy_XV_cover_art.jpg",
    description: "Final antagonist with warp mobility and shadow summons",
    Health: "290",
    Attack: "41"
  },
  {
    id: 16,
    name: "Mithrix",
    date: "August 1, 2026", // FUTURE
    location: "Risk of Rain 2",
    level: "20",
    type: "lunar king",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6f/Risk_of_Rain_2_cover.jpg",
    description: "Final boss of Risk of Rain 2 who chains hammer slams and projectiles",
    Health: "300",
    Attack: "40"
  },
  {
    id: 17,
    name: "Aurelionite",
    date: "August 5, 2026", // FUTURE
    location: "Risk of Rain 2",
    level: "20",
    type: "titan",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/632360/header.jpg",
    description: "Massive golden titan with beam barrages and shockwave stomps",
    Health: "285",
    Attack: "39"
  },
  {
    id: 18,
    name: "Alloy Worship Unit",
    date: "August 12, 2026", // FUTURE
    location: "Risk of Rain 2",
    level: "15",
    type: "mechanical boss",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/632360/ss_1.jpg",
    description: "Aerial machine fight with explosive drone patterns",
    Health: "250",
    Attack: "34"
  },
  {
    id: 19,
    name: "Wandering Vagrant",
    date: "August 18, 2026", // FUTURE
    location: "Risk of Rain 2",
    level: "15",
    type: "void creature",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/632360/ss_2.jpg",
    description: "Floating boss with homing orbs and area detonation burst",
    Health: "235",
    Attack: "32"
  },
  {
    id: 20,
    name: "Imp Overlord",
    date: "August 25, 2026", // FUTURE
    location: "Risk of Rain 2",
    level: "20",
    type: "teleporter boss",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/632360/ss_3.jpg",
    description: "Teleporting demon that chains swipes and summon pressure",
    Health: "265",
    Attack: "36"
  },
  {
    id: 21,
    name: "Godrick",
    date: "September 1, 2026", // FUTURE
    location: "Elden Ring",
    level: "15",
    type: "demigod",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_4.jpg",
    description: "Stormveil ruler using grafted limbs and wind slashes",
    Health: "215",
    Attack: "29"
  },
  {
    id: 22,
    name: "Rennala",
    date: "September 5, 2026", // FUTURE
    location: "Elden Ring",
    level: "15",
    type: "sorcerer",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_5.jpg",
    description: "Academy queen with summons and moon magic phase",
    Health: "225",
    Attack: "31"
  },
  {
    id: 23,
    name: "Rykard",
    date: "September 10, 2026", // FUTURE
    location: "Elden Ring",
    level: "20",
    type: "serpent lord",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_6.jpg",
    description: "Volcano Manor god-devouring serpent fight",
    Health: "280",
    Attack: "40"
  },
  {
    id: 24,
    name: "Fire Giant",
    date: "September 15, 2026", // FUTURE
    location: "Elden Ring",
    level: "20",
    type: "giant",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_7.jpg",
    description: "Massive area-control fight with rolling fire attacks",
    Health: "275",
    Attack: "38"
  },
  {
    id: 25,
    name: "Astel",
    date: "September 20, 2026", // FUTURE
    location: "Elden Ring",
    level: "15",
    type: "void beast",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_8.jpg",
    description: "Cosmic horror using teleport grabs and meteor showers",
    Health: "260",
    Attack: "37"
  },
  {
    id: 26,
    name: "Commander Niall",
    date: "September 25, 2026", // FUTURE
    location: "Elden Ring",
    level: "15",
    type: "commander",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_9.jpg",
    description: "Summons knights and uses frost lightning pressure",
    Health: "250",
    Attack: "35"
  },
  {
    id: 27,
    name: "Godfrey",
    date: "October 1, 2026", // FUTURE
    location: "Elden Ring",
    level: "20",
    type: "warrior king",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_10.jpg",
    description: "Axe warrior with grab-heavy second phase",
    Health: "295",
    Attack: "42"
  },
  {
    id: 28,
    name: "Radagon",
    date: "October 5, 2026", // FUTURE
    location: "Elden Ring",
    level: "20",
    type: "elden lord",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_11.jpg",
    description: "Holy hammer wielder with delayed AoE bursts",
    Health: "305",
    Attack: "43"
  },
  {
    id: 29,
    name: "Elden Beast",
    date: "October 10, 2026", // FUTURE
    location: "Elden Ring",
    level: "20",
    type: "cosmic entity",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_12.jpg",
    description: "Final entity using ranged holy attacks and chase segments",
    Health: "320",
    Attack: "45"
  },
  {
    id: 30,
    name: "Mimic Tear",
    date: "October 15, 2026", // FUTURE
    location: "Elden Ring",
    level: "10",
    type: "copy boss",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_13.jpg",
    description: "Mirrors player build and weapon setup",
    Health: "210",
    Attack: "28"
  },
  {
    id: 31,
    name: "Godskin Duo",
    date: "October 20, 2026", // FUTURE
    location: "Elden Ring",
    level: "20",
    type: "duo boss",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_14.jpg",
    description: "Shared health duo with black flame attacks",
    Health: "285",
    Attack: "40"
  },
  {
    id: 32,
    name: "Dragonlord Placidusax",
    date: "October 25, 2026", // FUTURE
    location: "Elden Ring",
    level: "25",
    type: "ancient dragon",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_15.jpg",
    description: "Late-game dragon with teleport claw combos and lasers",
    Health: "330",
    Attack: "46"
  },
  {
    id: 33,
    name: "Lichdragon Fortissax",
    date: "October 30, 2026", // FUTURE
    location: "Elden Ring",
    level: "20",
    type: "dragon",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_16.jpg",
    description: "Death lightning dragon encounter in Deeproot",
    Health: "300",
    Attack: "41"
  },
  {
    id: 34,
    name: "Alecto",
    date: "November 1, 2026", // FUTURE
    location: "Elden Ring",
    level: "20",
    type: "black knife",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_17.jpg",
    description: "Fast assassin with health-draining blade arts",
    Health: "270",
    Attack: "39"
  },
  {
    id: 35,
    name: "Loretta",
    date: "November 5, 2026", // FUTURE
    location: "Elden Ring",
    level: "15",
    type: "royal knight",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_18.jpg",
    description: "Mounted knight using glintstone arrows and polearm combos",
    Health: "245",
    Attack: "34"
  },
  {
    id: 36,
    name: "Leshen",
    date: "November 10, 2026", // FUTURE
    location: "The Witcher 3",
    level: "15",
    type: "forest spirit",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_4.jpg",
    description: "Ancient woodland monster summoning roots and wolves",
    Health: "215",
    Attack: "30"
  },
  {
    id: 37,
    name: "Ancient Leshen",
    date: "November 15, 2026", // FUTURE
    location: "The Witcher 3",
    level: "20",
    type: "forest spirit",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_5.jpg",
    description: "Higher-tier spectral leshen with relentless summons",
    Health: "275",
    Attack: "39"
  },
  {
    id: 38,
    name: "Nithral",
    date: "November 20, 2026", // FUTURE
    location: "The Witcher 3",
    level: "15",
    type: "wild hunt warrior",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_6.jpg",
    description: "Early Wild Hunt duel with frost shield mechanics",
    Health: "205",
    Attack: "28"
  },
  {
    id: 39,
    name: "The Crones",
    date: "November 25, 2026", // FUTURE
    location: "The Witcher 3",
    level: "15",
    type: "witch trio",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_7.jpg",
    description: "Multi-target fight featuring synchronized pressure",
    Health: "250",
    Attack: "35"
  },
  {
    id: 40,
    name: "Olgierd",
    date: "December 1, 2026", // FUTURE
    location: "The Witcher 3",
    level: "15",
    type: "cursed swordsman",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_8.jpg",
    description: "Fast sword duel with clone attacks in Hearts of Stone",
    Health: "235",
    Attack: "33"
  },
  {
    id: 41,
    name: "Iris's Greatest Fear",
    date: "December 5, 2026", // FUTURE
    location: "The Witcher 3",
    level: "20",
    type: "specter",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_9.jpg",
    description: "Shadow apparition fight with wave-based pressure",
    Health: "260",
    Attack: "36"
  },
  {
    id: 42,
    name: "Caretaker",
    date: "December 10, 2026", // FUTURE
    location: "The Witcher 3",
    level: "20",
    type: "construct",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_10.jpg",
    description: "Shovel-wielding guardian that heals from summoned shades",
    Health: "280",
    Attack: "38"
  },
  {
    id: 43,
    name: "Hym",
    date: "December 15, 2026", // FUTURE
    location: "The Witcher 3",
    level: "15",
    type: "curse spirit",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_11.jpg",
    description: "Fear-based spirit encountered through quest resolution",
    Health: "225",
    Attack: "31"
  },
  {
    id: 44,
    name: "The Toad Prince",
    date: "December 20, 2026", // FUTURE
    location: "The Witcher 3",
    level: "15",
    type: "cursed monster",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_12.jpg",
    description: "Poison-heavy arena boss with tongue slam patterns",
    Health: "220",
    Attack: "30"
  },
  {
    id: 45,
    name: "Fiend",
    date: "December 25, 2026", // FUTURE
    location: "The Witcher 3",
    level: "15",
    type: "relict",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_13.jpg",
    description: "Large horned beast with charge and fear attacks",
    Health: "215",
    Attack: "29"
  },
  {
    id: 46,
    name: "Botchling",
    date: "December 30, 2026", // FUTURE
    location: "The Witcher 3",
    level: "10",
    type: "curse creature",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_14.jpg",
    description: "Story encounter tied to Bloody Baron questline",
    Health: "195",
    Attack: "26"
  },
  {
    id: 47,
    name: "Ice Giant",
    date: "January 5, 2027", // FUTURE
    location: "The Witcher 3",
    level: "20",
    type: "giant",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_15.jpg",
    description: "Skellige giant fight with heavy club strikes",
    Health: "265",
    Attack: "37"
  },
  {
    id: 48,
    name: "Nekker Warrior",
    date: "January 10, 2027", // FUTURE
    location: "The Witcher 3",
    level: "10",
    type: "monster",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_16.jpg",
    description: "Aggressive cave boss with pack pressure",
    Health: "185",
    Attack: "24"
  },
  {
    id: 49,
    name: "Griffin",
    date: "January 15, 2027", // FUTURE
    location: "The Witcher 3",
    level: "15",
    type: "hybrid",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_17.jpg",
    description: "White Orchard contract monster with aerial attacks",
    Health: "205",
    Attack: "27"
  },
  {
    id: 50,
    name: "Jenny o' the Woods",
    date: "January 20, 2027", // FUTURE
    location: "The Witcher 3",
    level: "15",
    type: "nightwraith",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_18.jpg",
    description: "Nightwraith contract with teleporting and clone attacks",
    Health: "210",
    Attack: "28"
  },
  {
    id: 51,
    name: "Bahamut",
    date: "January 25, 2027", // FUTURE
    location: "Final Fantasy",
    level: "25",
    type: "dragon summon",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6d/Final_Fantasy_XIV_cover_art.jpg",
    description: "Legendary dragon encounter with mega flare bursts",
    Health: "315",
    Attack: "45"
  },
  {
    id: 52,
    name: "Chaos",
    date: "January 30, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "dark knight",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4f/Stranger_of_Paradise_Final_Fantasy_Origin.jpg",
    description: "Classic final boss using elemental phase attacks",
    Health: "280",
    Attack: "40"
  },
  {
    id: 53,
    name: "Exdeath",
    date: "February 5, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "sorcerer",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Final_Fantasy_V_cover.jpg",
    description: "Void mage boss with frequent spell barrages",
    Health: "270",
    Attack: "38"
  },
  {
    id: 54,
    name: "Sin",
    date: "February 10, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "colossus",
    image: "https://upload.wikimedia.org/wikipedia/en/6/60/Final_Fantasy_X_cover.jpg",
    description: "Gigantic multi-stage encounter with sweeping AoE",
    Health: "310",
    Attack: "43"
  },
  {
    id: 55,
    name: "Anima",
    date: "February 15, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "aeon",
    image: "https://upload.wikimedia.org/wikipedia/en/6/60/Final_Fantasy_X_cover.jpg",
    description: "High-damage summon battle featuring chained dark attacks",
    Health: "255",
    Attack: "36"
  },
  {
    id: 56,
    name: "Gilgamesh",
    date: "February 20, 2027", // FUTURE
    location: "Final Fantasy",
    level: "15",
    type: "duelist",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Final_Fantasy_V_cover.jpg",
    description: "Sword collector boss with stance and weapon swaps",
    Health: "245",
    Attack: "34"
  },
  {
    id: 57,
    name: "Cloud of Darkness",
    date: "February 25, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "void entity",
    image: "https://upload.wikimedia.org/wikipedia/en/9/94/Final_Fantasy_III_box.jpg",
    description: "Energy-based final boss with laser zone control",
    Health: "295",
    Attack: "42"
  },
  {
    id: 58,
    name: "Zeromus",
    date: "March 1, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "dark being",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Final_Fantasy_IV_box.jpg",
    description: "High-pressure final encounter with heavy magic output",
    Health: "285",
    Attack: "40"
  },
  {
    id: 59,
    name: "Golbez",
    date: "March 5, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "armored sorcerer",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Final_Fantasy_IV_box.jpg",
    description: "Spell and blade hybrid duel with teleport pressure",
    Health: "260",
    Attack: "37"
  },
  {
    id: 60,
    name: "Neo Exdeath",
    date: "March 10, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "void core",
    image: "https://upload.wikimedia.org/wikipedia/en/5/57/Final_Fantasy_V_cover.jpg",
    description: "Multi-target final form with burst spell mechanics",
    Health: "305",
    Attack: "44"
  },
  {
    id: 61,
    name: "Sephiroth",
    date: "March 15, 2027", // FUTURE
    location: "Final Fantasy",
    level: "25",
    type: "fallen angel",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Sephiroth.png",
    description: "Legendary one-winged angel using devastating magic and blade combos",
    Health: "340",
    Attack: "50"
  },
  {
    id: 62,
    name: "Ultimecia",
    date: "March 20, 2027", // FUTURE
    location: "Final Fantasy",
    level: "25",
    type: "time sorceress",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2d/Ultimecia.png",
    description: "Master of time compression with powerful spell phases",
    Health: "320",
    Attack: "47"
  },
  {
    id: 63,
    name: "Ardyn",
    date: "March 25, 2027", // FUTURE
    location: "Final Fantasy XV",
    level: "20",
    type: "immortal villain",
    image: "https://upload.wikimedia.org/wikipedia/en/7/75/Ardyn_Izunia.png",
    description: "Fast teleporting swordsman with dark energy attacks",
    Health: "295",
    Attack: "43"
  },
  {
    id: 64,
    name: "Ifrit",
    date: "March 30, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "fire summon",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Ifrit_Final_Fantasy.png",
    description: "Fire demon boss using flame pillars and explosive strikes",
    Health: "255",
    Attack: "36"
  },
  {
    id: 65,
    name: "Shiva",
    date: "April 5, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "ice summon",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5a/Shiva_Final_Fantasy.png",
    description: "Ice elemental boss with freezing attacks",
    Health: "250",
    Attack: "35"
  },
  {
    id: 66,
    name: "Titan",
    date: "April 10, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "earth summon",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2c/Titan_Final_Fantasy.png",
    description: "Massive earth giant using ground smash and quake attacks",
    Health: "270",
    Attack: "38"
  },
  {
    id: 67,
    name: "Odin",
    date: "April 15, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "legendary knight",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e0/Odin_Final_Fantasy.png",
    description: "Mounted warrior known for instant-kill Zantetsuken strike",
    Health: "280",
    Attack: "40"
  },
  {
    id: 68,
    name: "Leviathan",
    date: "April 20, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "sea serpent",
    image: "https://upload.wikimedia.org/wikipedia/en/3/37/Leviathan_Final_Fantasy.png",
    description: "Water summon using tidal wave attacks",
    Health: "285",
    Attack: "41"
  },
  {
    id: 69,
    name: "Bahamut Fury",
    date: "April 25, 2027", // FUTURE
    location: "Final Fantasy",
    level: "25",
    type: "dragon",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7d/Bahamut_Fury.png",
    description: "Enhanced Bahamut form with massive flare attacks",
    Health: "330",
    Attack: "48"
  },
  {
    id: 70,
    name: "Alexander",
    date: "April 30, 2027", // FUTURE
    location: "Final Fantasy",
    level: "20",
    type: "holy summon",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Alexander_Final_Fantasy.png",
    description: "Holy fortress summon firing divine lasers",
    Health: "300",
    Attack: "44"
  },
  {
    id: 71,
    name: "Ganon",
    date: "May 5, 2027", // FUTURE
    location: "The Legend of Zelda",
    level: "20",
    type: "demon king",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Ganon.png",
    description: "Classic Zelda villain using dark magic and brute strength",
    Health: "305",
    Attack: "43"
  },
  {
    id: 72,
    name: "Calamity Ganon",
    date: "May 10, 2027", // FUTURE
    location: "Zelda: Breath of the Wild",
    level: "25",
    type: "corruption entity",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3e/Calamity_Ganon.png",
    description: "Malice-infused form using elemental attacks",
    Health: "315",
    Attack: "45"
  },
  {
    id: 73,
    name: "Dark Link",
    date: "May 15, 2027", // FUTURE
    location: "The Legend of Zelda",
    level: "20",
    type: "shadow warrior",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Dark_Link.png",
    description: "Mirror match boss copying the player's moves",
    Health: "250",
    Attack: "35"
  },
  {
    id: 74,
    name: "Thunderblight Ganon",
    date: "May 20, 2027", // FUTURE
    location: "Breath of the Wild",
    level: "20",
    type: "lightning phantom",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Thunderblight_Ganon.png",
    description: "Fast lightning boss with teleport attacks",
    Health: "275",
    Attack: "40"
  },
  {
    id: 75,
    name: "Fireblight Ganon",
    date: "May 25, 2027", // FUTURE
    location: "Breath of the Wild",
    level: "20",
    type: "fire phantom",
    image: "https://upload.wikimedia.org/wikipedia/en/5/58/Fireblight_Ganon.png",
    description: "Flaming boss using explosive fire attacks",
    Health: "265",
    Attack: "38"
  },
  {
    id: 76,
    name: "Waterblight Ganon",
    date: "June 1, 2027", // FUTURE
    location: "Breath of the Wild",
    level: "20",
    type: "water phantom",
    image: "https://upload.wikimedia.org/wikipedia/en/0/04/Waterblight_Ganon.png",
    description: "Spear-wielding boss using ice blocks and water attacks",
    Health: "265",
    Attack: "38"
  },
  {
    id: 77,
    name: "Windblight Ganon",
    date: "June 5, 2027", // FUTURE
    location: "Breath of the Wild",
    level: "20",
    type: "wind phantom",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Windblight_Ganon.png",
    description: "Flying boss using tornado and laser attacks",
    Health: "265",
    Attack: "38"
  },
  {
    id: 78,
    name: "Demise",
    date: "June 10, 2027", // FUTURE
    location: "Zelda: Skyward Sword",
    level: "25",
    type: "demon god",
    image: "https://upload.wikimedia.org/wikipedia/en/9/99/Demise_Zelda.png",
    description: "Ancient demon lord wielding lightning sword attacks",
    Health: "325",
    Attack: "47"
  },
  {
    id: 79,
    name: "Majora",
    date: "June 15, 2027", // FUTURE
    location: "Zelda: Majora's Mask",
    level: "25",
    type: "ancient spirit",
    image: "https://upload.wikimedia.org/wikipedia/en/2/20/Majora%27s_Mask.png",
    description: "Chaotic final boss with unpredictable attack phases",
    Health: "310",
    Attack: "45"
  },
  {
    id: 80,
    name: "Ganondorf",
    date: "June 20, 2027", // FUTURE
    location: "The Legend of Zelda",
    level: "25",
    type: "dark warlock",
    image: "https://upload.wikimedia.org/wikipedia/en/7/70/Ganondorf.png",
    description: "Human form of Ganon using dark magic and sword combat",
    Health: "320",
    Attack: "46"
  }
];

export default DungeonData;