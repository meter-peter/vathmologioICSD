//Βιβλιοθήκες - Libraries
const PORT = process.env.PORT || 5000;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const passport = require('passport');

//DB Conn

const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});

//Middlewares
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(cors({ origin: ['http://localhost:8080'], }))

app.use(passport.initialize());


const auth = require('./routes/api/auth');
app.use('/api/auth', auth);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})