const express = require('express');
const {ServerConfig} = require('./config');
const apiRouter  = require('./routes');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());


app.use('/api', apiRouter); //If any request comes and route starts with /api we map it to apiRouter

// last middleware if any error comes
app.use(errorHandler);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server started at  ${ServerConfig.PORT}`);
})