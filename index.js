const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS

// Define RESTful API routes
app.get('/roll', (req, res) => {
    // Generate random number (e.g., between 1 and 6 for a dice roll)
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    res.json({ number: randomNumber });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});