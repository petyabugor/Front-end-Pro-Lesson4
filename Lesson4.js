const starWarCharacters = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      films: ["2", "6", "3", "1", "7"],
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a",
      films: ["1", "2", "3", "4", "5", "6"],
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male",
      films: ["1", "2", "3", "6"],
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female",
      films: ["1", "2", "3", "6"],
    },
    {
      name: "Obi-Wan Kenobi",
      height: "182",
      mass: "77",
      hair_color: "auburn, white",
      skin_color: "fair",
      eye_color: "blue-gray",
      birth_year: "57BBY",
      gender: "male",
      films: ["1", "2", "3", "4", "5", "6"],
    },
  ];

//1)
let genderStarWarCharacters= JSON.parse(JSON.stringify(starWarCharacters))
genderStarWarCharacters=genderStarWarCharacters.map(item => item.gender)
console.log(genderStarWarCharacters)


//2)
let filmRecordStarWarCharacters=JSON.parse(JSON.stringify(starWarCharacters))
filmRecordStarWarCharacters=filmRecordStarWarCharacters.reduce((acc,curr)=> acc.films.length< curr.films.length? curr:acc)
let filmsRecordStarWarCharacters=starWarCharacters.filter((elem)=>{
  if(elem.films.length === filmRecordStarWarCharacters.films.length){
    return elem.films
  }
})
console.log(filmsRecordStarWarCharacters)


//3)
let massStarWarCharacters= JSON.parse(JSON.stringify(starWarCharacters))
massStarWarCharacters=massStarWarCharacters.reduce((acc, curr )=> acc.mass > curr.mass? curr:acc)
console.log(massStarWarCharacters)


//4)
let filmsStarWar= JSON.parse(JSON.stringify(starWarCharacters))
filmsStarWar= filmsStarWar.map((elem)=> elem.films)
console.log(filmsStarWar)
let[LukeSkywalker,C3PO,DarthVader,LeiaOrgana,ObiWanKenobi] = filmsStarWar
const duplicatedFilms = [...new Set(LukeSkywalker,C3PO,DarthVader,LeiaOrgana)].filter(item => ObiWanKenobi.includes(item));
console.log(duplicatedFilms); 


//5)
starWarCharacters.length= 0;
console.log(starWarCharacters)



