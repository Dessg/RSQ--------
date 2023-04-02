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

  async function getPlayerInfo(id) {
    try {
      let infopref = await fetch("https://api.opendota.com/api/players/"+ id);
      let wlpref = await fetch("https://api.opendota.com/api/players/" + id + "/wl");
      let info = await infopref.json();
      let wl = await wlpref.json();
      let exitUrl1 = null;
      let exitUrl2 = null;
      let exitUrl3 = null;
      switch (id){
        case 1196955551:
          exitUrl1 = "sti_name";
          exitUrl2 = "sti_mmr";
          exitUrl3 = "sti_wl";
          break;
        case 125325708:
          exitUrl1 = "tony_name";
          exitUrl2 = "tony_mmr";
          exitUrl3 = "tony_wl";
          break;
        case 167874436:
          exitUrl1 = "rodyan_name";
          exitUrl2 = "rodyan_mmr";
          exitUrl3 = "rodyan_wl";
          break;
        case 192089161:
          exitUrl1 = "mastiv_name";
          exitUrl2 = "mastiv_mmr";
          exitUrl3 = "mastiv_wl";
          break;
        case 226799449:
          exitUrl1 = "atom_name";
          exitUrl2 = "atom_mmr";
          exitUrl3 = "atom_wl";
          break;
        case 1200198064:
          exitUrl1 = "dragon_name";
          exitUrl2 = "dragon_mmr";
          exitUrl3 = "dragon_wl";
          break;
        case 323474403:
          exitUrl1 = "poni_name";
          exitUrl2 = "poni_mmr";
          exitUrl3 = "poni_wl";
          break;
      }

      document.getElementById(exitUrl1).innerHTML = info.profile.personaname;
      document.getElementById(exitUrl2).innerHTML = info.mmr_estimate.estimate;
      document.getElementById(exitUrl3).innerHTML = (wl.win/(wl.win+wl.lose))*100 + " %";

    } catch (error) {
      console.log("error , dude ");
    }
  }

  function calcBday(date){
    let now = new Date();
    var inputDate = new Date(date);
    let diffDays = now.getFullYear() - inputDate.getFullYear();
    alert (diffDays);

  }