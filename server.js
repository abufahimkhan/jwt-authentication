const express=require("express")
const app=express()


const jwt=require('jsonwebtoken')

app.use(express.json())

const users=[
    {
        username:'shanto',
        title:'post 1'
    },
    {
        username:'fahim',
        title:'post 2'
    }
]

app.get('/users',(request,response)=>{
    response.json(users )
})

app.post('/login',(request,response)=>{
    //Authentification users here

    const username=request.body.username
    const user={
        name:username
    }

    jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
})

app.listen(3001)