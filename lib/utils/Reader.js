class Reader {
    static readJsonFile(path) {
        const fs = require("fs");
        if (path == null || path == '') {
            return null
        } else {
            try {
                const rawdata = fs.readFileSync(path);
                return JSON.parse(rawdata);
            } catch (e) {
                return null
            }
        }
    }

    printRead() {
        return "rojo"
    }
}

module.exports = Reader