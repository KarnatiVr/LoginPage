const express= require('express')




const mysql=require('mysql2')
const app= express()

const pool= mysql.createPool({
    host:"127.0.0.1",
    user:'root',
    password:'Karnati20012611',
    database:'login'
}).promise()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+'/public'))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const con_password=req.body.con_password;
        const result= await create(username,password)
        console.log(result)
    
    
   
})

app.post('/login', async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const result = await get(username,password)
    if (result.length != 0){
        console.log('logged in')
    }
})

app.listen(8004, ()=>{
    console.log('listening on 3000')
})


//insert into a table

async function create(user,pass){
    const result=await pool.query(`INSERT INTO new_user (email, password)
    VALUES (?,?) `,[user,pass])
    return result
}

//get data from table
async function get(user,pass){
    const result = await pool.query(`SELECT * FROM new_user WHERE email=? AND password = ?`,[user,pass])
    return result[0]
}