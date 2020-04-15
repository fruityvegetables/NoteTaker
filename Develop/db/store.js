const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

class Store {
    read(){
        console.log("read");
        return readFileAsync("db/db.json", "utf8");
    }
    getNotes(){
        console.log("get notes");
        return this.read().then(results => {
            const jsonNotes = [].concat(JSON.parse(results));
            return jsonNotes;
            })
    }
    // write(){
    //     return writeFileAsync("db/db.json", newNote);
    // }
}

module.exports = new Store();

