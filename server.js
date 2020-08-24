const express = require('express');
const cors = require('cors')




const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();


const signup = require('./routes/api/signup');
const login = require('./routes/api/login');
const gallery = require('./routes/api/gallery')

const db = process.env.MONGO_URI;


app.use(cors())

app.use(express.json());
app.use(cookieParser());

app.use('/api/signup', signup);
app.use('/api/login', login);
app.use('/api/gallery', gallery);

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    }
)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server started on port ${port}`));