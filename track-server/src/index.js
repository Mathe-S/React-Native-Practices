require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://admin-mathe:Yunurati718293@cluster0-3ogh3.mongodb.net/testrn?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Connected to Mongo instane");
});
mongoose.connection.on('error', (err) => {
    console.log("Error connecting to mong", err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log("listening on port 3000")
});