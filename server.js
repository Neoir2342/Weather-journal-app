// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { allowedNodeEnvironmentFlags } = require('process');
const res = require('express/lib/response');
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 4000

 app.listen(port, ()=> {
    console.log(`running on localhost: ${port}`)
});

app.get('/getWeatherData', (req, res)=> {
    res.send(projectData)
})

app.post('/postWeatherData', (req, res)=> {
    projectData = {...req.body}
    res.send()
})