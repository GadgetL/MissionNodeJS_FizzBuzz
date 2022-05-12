const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");

describe("Test for ExplorerService", () => {
    test("Return a filter list by mission when receive a list an a mission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerService = ExplorerService.filterByMission(explorers, "node");
        expect(explorerService).toBeDefined();
    });

    test("Return amount of explorers by mission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerService = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorerService).toBe(10);
    });

    test("Return explorer username by mission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerService = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorerService).toBeDefined();
    });
});