"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _PremierLeagueService = _interopRequireDefault(require("../service/PremierLeagueService"));

var _FakePremierLeague = require("../fake/FakePremierLeague");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var service = new _PremierLeagueService.default();
var host = new _express.default();
var port = 3001;
host.use(_bodyParser.default.json());
service.teams = _FakePremierLeague.fakeTeams;
host.listen(port, function () {
  return console.log("Server listening on http://localhost:".concat(port));
});
host.get("/", function (request, response) {
  return response.send("Server listening...");
});
host.get("/api", function (request, response) {
  return response.send("Server listening...");
});
host.get("/api/team", function (request, response) {
  var teams = service.teams;
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(teams, null, 2));
});
host.get("/api/team/:id", function (request, response) {
  var id = parseInt(request.params.id);
  var team = service.getById(id);
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(team, null, 2));
});
host.get("/api/team/:name", function (request, response) {
  var name = parseInt(request.params.name);
  var team = service.getByName(name);
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(team, null, 2));
});
host.post("/api/team", function (request, response) {
  var team = request.body;
  var result = service.insert(team);
  response.send({
    "message": result
  });
});
host.put("/api/team/:id", function (request, response) {
  var id = parseInt(request.params.id);
  var updatedTeam = request.body;
  var result = service.update(id, updatedTeam);
  response.send({
    "message": result
  });
});
host.delete("/api/team/:id", function (request, response) {
  var id = parseInt(request.params.id);
  var result = service.delete(id);
  response.send({
    "message": result
  });
});