const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

const events = [
    { id: 1, name: 'Music Concert', date: '2025-01-30' },
    { id: 2, name: 'Tech Conference', date: '2025-02-15' },
];

// GET endpoint to fetch events
app.get('/api/events', (req, res) => {
    res.json(events);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
