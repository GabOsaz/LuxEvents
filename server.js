const express = require('express');

const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

const signup = require('./routes/api/signup');
const login = require('./routes/api/login');

const db = process.env.MONGO_URI;

app.use(express.json());
app.use(cookieParser());

app.use('/api/signup', signup);
app.use('/api/login', login);

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