const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config()


const playerRouter = require('./routes/player')

const app = express();
const PORT =3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

 app.use('/player', playerRouter);


mongoose.connect(`mongodb+srv://tadeastondl:${process.env.MONGOPWD}@cluster0.srxruuu.mongodb.net/?retryWrites=true&w=majority`)
{
    userNewUrlParser:true;
    useUnifiedTopology: true;

}


app.listen(PORT, () => console.log(`server is running on port ${PORT}`));