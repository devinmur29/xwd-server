const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/xwd-info', async (req, res) => {
    let date = req.query.date;
    let domStuff = await fetch("https://nytcrosswordanswers.org/nyt-crossword-answers-07-23-23/");
    console.log(domStuff)
    res.json({'message': 'ok', "domInfo": domStuff});
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});