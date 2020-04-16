const fs = require("fs");
const util = require("util");
const uuidv1 = require("uuid/v1");

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
    write(newNote){
        console.log("write notes");
        return writeFileAsync("db/db.json", JSON.stringify(newNote));
    }
    addNote(note){
        const { title, text } = note;
        const newNote = { title, text };
        return this.getNotes().then(results =>
            [...results, newNote]
        ).then(notesToWrite => {
            this.write(notesToWrite)
        }).then(() => newNote)
    }
}

module.exports = new Store();

