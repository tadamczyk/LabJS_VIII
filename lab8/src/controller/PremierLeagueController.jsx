import Express from "express";
import BodyParser from "body-parser";
import PremierLeagueService from "../service/PremierLeagueService";
import { fakeTeams } from "../fake/FakePremierLeague";

const app = Express();
const port = 3001;
app.use(BodyParser.json());

const service = new PremierLeagueService();
service.teams = fakeTeams;

app.get("/", (request, response) => response.send("Server listening..."));
app.get("/api", (request, response) => response.send("Server listening..."));

app.get("/api/team", (request, response) => {
  const teams = service.teams;
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(teams, null, 2));
});

app.get("/api/team/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const team = service.getById(id);
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(team, null, 2));
});

app.get("/api/team/:name", (request, response) => {
  const name = parseInt(request.params.name);
  const team = service.getByName(name);
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(team, null, 2));
});

app.post("/api/team", (request, response) => {
  const team = request.body;
  const result = service.insert(team);
  response.send({ "message": result });
});

app.put("/api/team/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const updatedTeam = request.body;
  const result = service.update(id, updatedTeam);
  response.send({ "message": result });
});

app.delete("/api/team/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const result = service.delete(id);
  response.send({ "message": result });
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));