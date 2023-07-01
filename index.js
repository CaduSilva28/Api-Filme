import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';

require('dotenv').config({ path: './config/homolog.env' });

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port,(msgError) => {
    if(msgError){
        throw new Error(msgError);
    }else{
        console.warn("Server is running on port " + port);
    }
});