module.exports = function(app) {

    const store = require("../db/store");
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/notes", function(req, res) {
      console.log("something");
      store.getNotes()
      .then(notes => {
          res.json(notes);
      })
    });

    app.post("/api/notes", function(req, res) {
        //console.log(req.body);
        store.addNote(req.body)
        .then(notes => {
            res.json(notes);
        })
      });
    
}