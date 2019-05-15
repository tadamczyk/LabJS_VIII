"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PremierLeagueService =
/*#__PURE__*/
function () {
  function PremierLeagueService() {
    _classCallCheck(this, PremierLeagueService);

    this.teams = [];
  }

  _createClass(PremierLeagueService, [{
    key: "getById",
    value: function getById(id) {
      return this._teams.find(function (team) {
        return team.id === id;
      });
    }
  }, {
    key: "getByName",
    value: function getByName(name) {
      return this._teams.find(function (team) {
        return team.name === name;
      });
    }
  }, {
    key: "insert",
    value: function insert(team) {
      this._teams.push(team);
    }
  }, {
    key: "update",
    value: function update(id, team) {
      var teamId = this._teams.findIndex(function (team) {
        return team.id === id;
      });

      this._teams[teamId] = team;
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var teamId = this._teams.findIndex(function (team) {
        return team.id === id;
      });

      this._teams.splice(teamId, 1);
    }
  }, {
    key: "teams",
    set: function set(value) {
      this._teams = value;
    },
    get: function get() {
      return this._teams;
    }
  }]);

  return PremierLeagueService;
}();

exports.default = PremierLeagueService;