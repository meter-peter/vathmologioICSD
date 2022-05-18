const express = require('express')
const mongoose = require("mongoose")
const PORT = 5000;
const mongoURI = require('./config/keys.js').mongoURI 

const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json())

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log(`Database connected successfully ${mongoURI}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});


app.get('/', (req, res) =>{
    res.send("hello ")

})

const auth = require('./api/auth');
app.use('/auth',auth);




app.listen(PORT, () => {
    console.log("Server started on port" +PORT);
})

