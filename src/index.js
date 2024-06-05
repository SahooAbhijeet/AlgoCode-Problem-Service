const express = require('express');
const {ServerConfig} = require('./config');
const apiRouter  = require('./routes');
const connectToDB = require('./config/db.config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());


app.use('/api', apiRouter); //If any request comes and route starts with /api we map it to apiRouter

app.listen(ServerConfig.PORT, async () => {
    console.log(`Server started at  ${ServerConfig.PORT}`);
    await connectToDB();
    console.log('Successfully connected to database');
})