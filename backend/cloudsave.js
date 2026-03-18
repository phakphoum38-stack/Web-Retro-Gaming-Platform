const db=require("./database")

exports.save=(req,res)=>{

const {user,game,data}=req.body

db.run(
"INSERT INTO saves(user,game,data) VALUES(?,?,?)",
[user,game,data]
)

res.json({status:"saved"})
}

exports.load=(req,res)=>{

const {user,game}=req.query

db.get(
"SELECT data FROM saves WHERE user=? AND game=?",
[user,game],
(err,row)=>{

if(!row) return res.json({})

res.json({data:row.data})

})

}
