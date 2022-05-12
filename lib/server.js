const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("FizzBuzz!");
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({ mission: request.params.mission, quantity: explorersAmountInMission });
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(explorersUsernamesInMission);
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const fizzbuzz = ExplorerController.getFizzBuzzNumber(score);
    const res = {
        score: score,
        trick: fizzbuzz
    };
    response.json(res);
});

app.listen(port, () => {
    console.log(`FizzBuzz API listening on port ${port}`);
});