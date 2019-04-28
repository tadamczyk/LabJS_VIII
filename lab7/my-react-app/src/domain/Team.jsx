import { Model } from 'react-axiom';

export default class Team extends Model {
  constructor(name, city, country, yearOfEstablished, inCurrentSeason, players) {
    super();

    this.name = name;
    this.city = city;
    this.country = country;
    this.yearOfEstablished = yearOfEstablished;
    this.inCurrentSeason = inCurrentSeason;
    this.players = players;
  }

  static defaultState() {
    return {
      id: null,
      name: '',
      city: '',
      country: '',
      yearOfEstablished: 0,
      inCurrentSeason: false,
      players: []
    };
  };
};