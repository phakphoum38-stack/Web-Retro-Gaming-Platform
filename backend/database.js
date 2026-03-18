const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("games.db")

db.serialize(() => {

db.run(`
CREATE TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY,
username TEXT,
password TEXT
)
`)

db.run(`
CREATE TABLE IF NOT EXISTS saves(
id INTEGER PRIMARY KEY,
user TEXT,
game TEXT,
data TEXT
)
`)

})

module.exports = db
