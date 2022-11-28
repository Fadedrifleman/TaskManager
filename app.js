const express = require('express');
const bodyParser = require('body-parser');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

//routes
app.use('/api/v1/tasks', tasks)

//server
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, console.log(`DB running & server listening to port: ${process.env.PORT}`));
    } catch (error) {
        console.log(error);
    }
};
start();
