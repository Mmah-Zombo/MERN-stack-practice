const express = require('express');
const path = require('path');

const app = express(); // Create an instance of the express object
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/name', (req, res) => {
    res.json({
        name: "Zombo",
        age: "19"
    });
});
app.listen(3000, () => {
    console.log("App started on port 3000");
});