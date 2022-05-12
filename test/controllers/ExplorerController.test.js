const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test for ExplorerController", () => {
    test("Return a filter list by set mission", () => {
        const explorerController = ExplorerController.getExplorersByMission("node");
        const expl = {
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        };
        expect(explorerController).toContainEqual(expl);
    });

    test("Return a filter username's explorer list by set mission", () => {
        const explorerController = ExplorerController.getExplorersUsernamesByMission("node");
        const expl = "ajolonauta1";
        expect(explorerController).toContainEqual(expl);
    });

    test("Return amount of explorers by mission", () => {
        const explorerController = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorerController).toBe(10);
    });
});