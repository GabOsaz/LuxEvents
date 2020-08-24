const express = require('express');

const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

const fileUpload = require('express-fileupload');

const signup = require('./routes/api/signup');
const login = require('./routes/api/login');
const eventCenter = require('./routes/api/eventCenters');
const fileUploadRoute = require('./routes/api/fileupload');


const db = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/signup', signup);
app.use('/api/login', login);
app.use('/api/eventCenters', eventCenter);
app.use('/api/fileUpload', fileUploadRoute);

app.use(fileUpload({
    useTempFiles: true
}));

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    }
)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

const port = process.env.PORT || 5060

app.listen(port, () => console.log(`Server started on port ${port}`));