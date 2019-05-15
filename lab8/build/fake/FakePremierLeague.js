"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fakeTeams = void 0;

var _Team = _interopRequireDefault(require("../domain/Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fakeTeams = [new _Team.default(1, "Arsenal", "London", "England", 1892, true, ["Cech", "Leno"]), new _Team.default(2, "Tottenham", "London", "England", 1882, true, ["Lloris", "Vorm"]), new _Team.default(3, "Chelsea", "London", "England", 1905, true, ["Kepa", "Caballero"])];
exports.fakeTeams = fakeTeams;