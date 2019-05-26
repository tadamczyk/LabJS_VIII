"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Team = function Team(id, name, city, country, yearOfEstablished, inCurrentSeason, players) {
  _classCallCheck(this, Team);

  this.id = id;
  this.name = name;
  this.city = city;
  this.country = country;
  this.yearOfEstablished = yearOfEstablished;
  this.inCurrentSeason = inCurrentSeason;
  this.players = players;
};

exports.default = Team;