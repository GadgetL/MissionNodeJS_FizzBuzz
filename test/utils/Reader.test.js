const Reader = require('../../lib/utils/Reader')

describe("Test for Reader", () => {
    test("Return null when not receive a null path", () => {
        const explorers = Reader.readJsonFile(null)
        expect(explorers).toBe(null)
    })

    test("Return null when receive a empty path", () => {
        const explorers = Reader.readJsonFile('')
        expect(explorers).toBe(null)
    })

    test("Return null when receive a invalid path", () => {
        const explorers = Reader.readJsonFile('explorer.json')
        expect(explorers).toBe(null)
    })

    test("Return a list when receive an archive", () => {
        const explorers = Reader.readJsonFile('explorers.json')
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
        }
        expect(explorers).toContainEqual(expl)
    })
})