module.exports = function(app) {

    const store = require("../db/store");
    const readFileAsync = util.promisify(fs.readFile);
    const writeFileAsync = util.promisify(fs.writeFile);
    const uuidv1 = require('uuid/v1');
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/notes", async function(req, res) {
      //console.log("something");
      res.send(JSON.parse(await readFileAsync("db/db.json", "utf8")))
    });

    app.post("/api/notes", async function(req, res) {
        //console.log(req.body);
      var title = req.body.title;
      var text = req.body.text;
      var newNote = { title, text, id: uuvidv1() }
      var getNotes = await readFileAsync("db/db.json", "utf8");
      var noteArray = JSON.parse(getNotes)
      noteArray.push(newNote)
      res.send(await writeFileAsync("db/db.json", JSON.stringify(noteArray)))
      });

    
}