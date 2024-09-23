const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

// Middleware
app.use(express.json());


app.get("/", function (req, res) {
    res.send('Hello from Edu House')
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
