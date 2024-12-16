const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

// dotenv configuration 
dotenv.config()

// rest object 
const app = express()

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/portfolio', require("./routes/portfolioRoute"))

// Static files
app.use(express.static(path.join(__dirname, './portfolio-frontend/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back the React app.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './portfolio-frontend/build/index.html'));
});

// port
const PORT = process.env.PORT || 8080

// listen 
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
