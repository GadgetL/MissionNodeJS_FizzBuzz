const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzBuzzService");

class ExplorerController {
    static explorers = Reader.readJsonFile("explorers.json");

    static getExplorersByMission(mission) {
        return ExplorerService.filterByMission(ExplorerController.explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        return ExplorerService.getExplorersUsernamesByMission(ExplorerController.explorers, mission);
    }

    static getExplorersAmonutByMission(mission) {
        return ExplorerService.getAmountOfExplorersByMission(ExplorerController.explorers, mission);
    }

    static getFizzBuzzNumber(number) {
        return FizzbuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;