// функция которая выдает рандом на главной странице от 1 до 124 и выдает соответствующего персонажа.
function random_button() {
    let heroes_pull = ["Abaddon", "Alchemist", "Ancient Apparition", "Anti-Mage", "Arc Warden", "Axe", "Bane",
    "Batrider", "Beastmaster", "Bloodseeker", "Bounty Hunter", "Brewmaster", "Bristleback", "Broodmother", 
    "Centaur Warrunner", "Chaos Knight", "Chen", "Clinkz", "Clockwerk", "Crystal Maiden", "Dark Seer",
    "Dark Willow", "Dawnbreaker", "Dazzle", "Death Prophet", "Disruptor", "Doom", "Dragon Knight", 
    "Drow Ranger", "Earth Spirit", "Earthshaker", "Elder Titan", "Ember Spirit", "Enchantress",
    "Enigma", "Faceless Void", "Grimstroke", "Gyrocopter", "Hoodwink", "Huskar", "Invoker", "Io", 
    "Jakiro", "Juggernaut", "Keeper of the Light", "Kunkka", "Legion Commander", "Leshrac", "Lich",
    "Lifestealer", "Lina", "Lion", "Lone Druid", "Luna", "Lycan", "Magnus", "Marci", "Mars", "Medusa",
    "Meepo", "Mirana", "Monkey King", "Morphling", "Muerta", "Naga Siren", "Nature's Prophet", 
    "Necrophos", "Night Stalker", "Nyx Assassin", "Ogre Magi", "Omniknight", "Oracle",
    "Outworld Devourer", "Pangolier", "Phantom Assassin", "Phantom Lancer", "Phoenix", "Primal Beast",
    "Puck", "Pudge", "Pugna", "Queen of Pain", "Razor", "Riki", "Rubick", "Sand King",
    "Shadow Demon", "Shadow Fiend", "Shadow Shaman", "Silencer", "Skywrath Mage", "Slardar", 
    "Slark", "Snapfire", "Sniper", "Spectre", "Spirit Breaker", "Storm Spirit", "Sven", "Techies",
    "Templar Assassin", "Terrorblade", "Tidehunter", "Timbersaw", "Tinker", "Tiny", "Treant Protector", 
    "Troll Warlord", "Tusk", "Underlord", "Undying", "Ursa", "Vengeful Spirit", "Venomancer", "Viper", 
    "Visage", "Void Spirit", "Warlock", "Weaver", "Windranger", "Winter Wyvern", "Witch Doctor", 
    "Wraith King", "Zeus"];
    let number = Math.floor(Math.random() * 124 + 1);
    document.getElementById("result_random").innerHTML = "ROLL(1-124):" + number + " " + heroes_pull[number];
}

  /* id аккаунтов 
  sti - 1196955551
  tony - 125325708
  rodya - 167874436
  mastiv - 192089161
  atom - 226799449
  dragon rage - 1200198064
  Poni - 323474403
  */
 
  async function getWLStats(id) {
    try {
      let nick = null;
      switch (id){
        case 1196955551:
          nick = "STI";
          break;
        case 125325708:
          nick = "Tony SW337";
          break;
        case 167874436:
          nick = "rodyaN";
          break;
        case 192089161:
          nick = "Mast1v";
          break;
        case 226799449:
          nick = "Atom";
          break;
        case 1200198064:
          nick = "dragon rage";
          break;
        case 323474403:
          nick = "Пони";
          break;
      }
      let response = await fetch("https://api.opendota.com/api/players/"+ id +"/wl");
      let wl = await response.json();
      
      document.getElementById(id).innerHTML =  nick + ": Побед:" + wl.win + " /Поражений :" + wl.lose + " /WR: " + Math.round((wl.win/(wl.win+wl.lose))*100) + "%";
    } catch(error) {
      console.log("error ,try again");
    }
  }