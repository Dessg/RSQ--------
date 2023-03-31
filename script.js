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
// vvv  здесь тестовая функция vvv
let data_stat =  null;

const getStatistic = async () => {
    await fetch("https://api.opendota.com/api/players/125325708")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        data_stat = data;
        console.log(data_stat);
        document.getElementById("stats_test").innerHTML = data_stat.profile.personaname;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //  ^^^  здесь тестовая функция ^^^
  
  //здесь будут функции по выводу побед / поражений  
  let wl1,wl2,wl3,wl4,wl5,wl6,wl7 = null;
  let wins_1,wins_2,wins_3,wins_4,wins_5,wins_6,wins_7 = null;
  let loss_1,loss_2,loss_3,loss_4,loss_5,loss_6,loss_7 = null;

  /* id аккаунтов 
  sti - 1196955551
  tony - 125325708
  rodya - 167874436
  mastiv - 192089161
  atom - 226799449
  dragon rage - 1200198064
  Poni - 323474403
  */
 
  async function getWLStats() {
    try {
      const response_1 = await fetch("https://api.opendota.com/api/players/1196955551/wl");
      const response_2 = await fetch("https://api.opendota.com/api/players/125325708/wl");
      const response_3 = await fetch("https://api.opendota.com/api/players/167874436/wl");
      const response_4 = await fetch("https://api.opendota.com/api/players/192089161/wl");
      const response_5 = await fetch("https://api.opendota.com/api/players/226799449/wl");
      const response_6 = await fetch("https://api.opendota.com/api/players/1200198064/wl");
      const response_7 = await fetch("https://api.opendota.com/api/players/323474403/wl");
      

      wl1 = await response_1.json();
      wl2 = await response_2.json();
      wl3 = await response_3.json();
      wl4 = await response_4.json();
      wl5 = await response_5.json();
      wl6 = await response_6.json();
      wl7 = await response_7.json();

      // console.log(wins_1 , wins_2 , wins_3 , wins_4, wins_5, wins_6, wins_7) ;
      document.getElementById("stats_test1").innerHTML =  "STI " + "Побед:" +wl1.win + " /Поражений :" + wl1.lose + " /WR: " + ((wl1.win/(wl1.win+wl1.lose))*100);
      document.getElementById("stats_test2").innerHTML =  "Tony " + "Побед:" +wl2.win + " /Поражений :" + wl2.lose + " /WR: " + ((wl2.win/(wl2.win+wl2.lose))*100);
      document.getElementById("stats_test3").innerHTML =  "Rondo " + "Побед:" +wl3.win + " /Поражений :" + wl3.lose + " /WR: " + ((wl3.win/(wl3.win+wl3.lose))*100);
      document.getElementById("stats_test4").innerHTML =  "Mast1v " + "Побед:" +wl4.win + " /Поражений :" + wl4.lose + " /WR: " + ((wl4.win/(wl4.win+wl4.lose))*100);
      document.getElementById("stats_test5").innerHTML =  "Atom " + "Побед:" +wl5.win + " /Поражений :" + wl5.lose + " /WR: " + ((wl5.win/(wl5.win+wl5.lose))*100);
      document.getElementById("stats_test6").innerHTML =  "dragon rage " + "Побед:" +wl6.win + " /Поражений :" + wl6.lose + " /WR: " + ((wl6.win/(wl6.win+wl6.lose))*100);
      document.getElementById("stats_test7").innerHTML =  "Пони " + "Побед:" +wl7.win + " /Поражений :" + wl7.lose + " /WR: " + ((wl7.win/(wl7.win+wl7.lose))*100);

    } catch(error) {
      console.log("error ,try again");
    }
  }