const db = require("./database")
const bcrypt = require("bcryptjs")

exports.register = (req,res)=>{

const {username,password}=req.body

const hash=bcrypt.hashSync(password,8)

db.run(
"INSERT INTO users(username,password) VALUES(?,?)",
[username,hash]
)

res.json({status:"registered"})
}

exports.login=(req,res)=>{

const {username,password}=req.body

db.get(
"SELECT * FROM users WHERE username=?",
[username],
(err,row)=>{

if(!row) return res.json({error:"user not found"})

if(!bcrypt.compareSync(password,row.password))
return res.json({error:"wrong password"})

res.json({status:"login success"})
})
}
