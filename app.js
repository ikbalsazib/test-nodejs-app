
// Main Module Required..
const express = require("express");


// Main Express App Variable..
const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Testing a Nodejs App!</h2><h4>Powered by Sazib!</h4>')
})

// For Main Server..
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running at port:${port}`));