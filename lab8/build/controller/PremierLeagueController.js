"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _PremierLeagueService = _interopRequireDefault(require("../service/PremierLeagueService"));

var _FakePremierLeague = require("../fake/FakePremierLeague");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = 3001;
app.use(_bodyParser.default.json());
var service = new _PremierLeagueService.default();
service.teams = _FakePremierLeague.fakeTeams;
app.get("/", function (request, response) {
  return response.send("Server listening...");
});
app.get("/api", function (request, response) {
  return response.send("Server listening...");
});
app.get("/api/team", function (request, response) {
  var teams = service.teams;
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(teams, null, 2));
});
app.get("/api/team/:id", function (request, response) {
  var id = parseInt(request.params.id);
  var team = service.getById(id);
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(team, null, 2));
});
app.get("/api/team/:name", function (request, response) {
  var name = parseInt(request.params.name);
  var team = service.getByName(name);
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(team, null, 2));
});
app.post("/api/team", function (request, response) {
  var team = request.body;
  var result = service.insert(team);
  response.send({
    "message": result
  });
});
app.put("/api/team/:id", function (request, response) {
  var id = parseInt(request.params.id);
  var updatedTeam = request.body;
  var result = service.update(id, updatedTeam);
  response.send({
    "message": result
  });
});
app.delete("/api/team/:id", function (request, response) {
  var id = parseInt(request.params.id);
  var result = service.delete(id);
  response.send({
    "message": result
  });
});
app.listen(port, function () {
  return console.log("Server listening on http://localhost:".concat(port));
});