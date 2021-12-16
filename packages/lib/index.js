const charaters = [
  {
    name: "Naruto Uzumaki",
    rank: "kage",
    village: "leaf",
    img: "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"
  },
  {
    name: "Boruto Uzumaki",
    rank: "genin",
    village: "leaf",
    img: "https://static.wikia.nocookie.net/naruto/images/6/68/New_Boruto_infobox.png"
  },
  {
    name: "Sasuke Uchiha",
    rank: "genin",
    village: "leaf",
    img: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png"
  },
  {
    name: "Kakashi Hatake",
    rank: "kage",
    village: "leaf",
    img: "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png"
  },
  {
    name: "Kakashi Hatake",
    rank: "kage",
    village: "leaf",
    img: "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png"
  },
  {
    name: "Gaara",
    rank: "kage",
    village: "sand",
    img: "https://static.wikia.nocookie.net/naruto/images/4/4a/Gaara_p1.png"
  },
  {
    name: "Nagato (Pain)",
    rank: "villain",
    village: "rain",
    img: "https://static.wikia.nocookie.net/naruto/images/4/46/Nagato.png"
  }
];

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default ({ name, random } = {}) => {
  if (random) return characters[getRandom(0, charaters.length - 1)];
  if (name) return characters.find((char) => char.name.includes(name));

  return charaters;
};
