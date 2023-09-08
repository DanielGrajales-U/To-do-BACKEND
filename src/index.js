require('dotenv').config()
const express = require('express')
const app = express()
require('./database/conection')

const signupRoutes = require('./routes/v1/Session/Signup.routes')

app.use(express.json())
app.use('/todo/api/v1', signupRoutes)

app.get('/', (req, res) => {
    res.send('Welcom to your TO-DO APP')
})

const port = process.env.PORT
app.listen(port, () => {
    console.log('Todo listo señor Grajales 🔥🔥 on port: ', port)
})