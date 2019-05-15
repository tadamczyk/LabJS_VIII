export default class Team {
  constructor(id, name, city, country, yearOfEstablished, inCurrentSeason, players) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.country = country;
    this.yearOfEstablished = yearOfEstablished;
    this.inCurrentSeason = inCurrentSeason;
    this.players = players;
  };
}