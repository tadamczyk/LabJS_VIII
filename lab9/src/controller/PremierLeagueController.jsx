import Express from "express";
import BodyParser from "body-parser";
import Cors from "cors";
import PremierLeagueService from "../service/PremierLeagueService";
import { fakeTeams } from "../fake/FakePremierLeague";

const service = new PremierLeagueService();
const host = new Express();
const port = 3001;

host.use(Cors());
host.use(BodyParser.json());
service.teams = fakeTeams;

host.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
host.get("/", (request, response) => response.send("Server listening..."));
host.get("/api", (request, response) => response.send("Server listening..."));

host.get("/api/team", (request, response) => {
  const teams = service.teams;
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(teams, null, 2));
});

host.get("/api/team/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const team = service.getById(id);
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(team, null, 2));
});

host.post("/api/team", (request, response) => {
  const team = request.body;
  const result = service.insert(team);
  response.send({ "message": result });
});

host.put("/api/team/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const updatedTeam = request.body;
  const result = service.update(id, updatedTeam);
  response.send({ "message": result });
});

host.delete("/api/team/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const result = service.delete(id);
  response.send({ "message": result });
});