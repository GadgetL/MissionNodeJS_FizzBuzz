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

    test("'Return number when number is not divisible by 3 or 5", () => {
        const explorerController = ExplorerController.getFizzBuzzNumber(1);
        expect(explorerController).toBe(1);
    });

    test("Return number when number is not divisible by 3 or 5", () => {
        const explorerController = ExplorerController.getFizzBuzzNumber(1);
        expect(explorerController).toBe(1);
    });

    test("Return 'FIZZ' when number is divisible by '3'", () => {
        const explorerController = ExplorerController.getFizzBuzzNumber(3);
        expect(explorerController).toBe("FIZZ");
    });

    test("Return 'BUZZ' when number is divisible by '5'", () => {
        const explorerController = ExplorerController.getFizzBuzzNumber(5);
        expect(explorerController).toBe("BUZZ");
    });

    test("Return 'FIZZBUZZ' when number is divisible by '5' and '3'", () => {
        const explorerController = ExplorerController.getFizzBuzzNumber(15);
        expect(explorerController).toBe("FIZZBUZZ");
    });
});