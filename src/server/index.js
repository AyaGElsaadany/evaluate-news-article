// Configure the environment variables
var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

const PORT = 8081

// add Configuration to be able to use env variables
const dotenv = require('dotenv');
dotenv.config();

// Create an instance for the server
const app = express()

// Configure cors to avoid cors-origin issue
app.use(cors())

// Configure express to use body-parser as middle-ware.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))

// Configure express static directory.
app.use(express.static('dist'))

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/article', async function (req, res) {
    const url = req.body.url
    let response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`)
    let post = await response.json()
    if (post && response.ok) {
        /*const data = {
            text: sentence_list[0].text,
            score_tag ,
            agreement ,
            subjectivity ,
            confidence ,
            irony 
        }*/
        res.send(post)
    }
    else {
        res.status(400).send({ message: "server error , please make sure your number is valid" })
    }
})

// export app to use it in the unit testing
module.exports = {
    app
}
