const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());

const chuckRouter = require(`./routes/chuck`)
const pingRouter = require(`./routes/ping`)
const mathRouter = require(`./routes/math`)


app.use(`/chuck`, chuckRouter)
app.use(`/ping`, pingRouter)
app.use(`/math`, mathRouter)

app.listen(port, () => { 
    console.log(`Server is running on port: ${port}`)
});