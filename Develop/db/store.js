const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

class Store {
    read(){
        return readFileAsync("db/db.json", "utf8");
    }
    getNotes(){
        return this.read().then(results => {
            return results;
            })
    }
    // write(){
    //     return writeFileAsync("db/db.json", newNote);
    // }
}

module.export = new Store();

