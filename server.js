const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// 1. Test server (GET)
app.get('/api/info', (req, res) => {
    res.json({
        message: 'Server is running',
        port: PORT,
        nodeVersion: process.version
    });
});

// 2. Add random files (GET)
app.get('/api/add-file', (req, res) => {
    const clientDetails = req.query.details || 'No details provided';
    const filePath = path.join(__dirname, 'uploads', `file_${Date.now()}.txt`);

    fs.writeFileSync(filePath, clientDetails);
    res.send(`File created: ${filePath}`);
});

// 3. Test POST request
app.post('/api/test-post', (req, res) => {
    res.json({
        message: 'Post request received',
        data: req.body
    });
});

app.get('/', (req, res) => {
    res.json({
        message: 'Server is running',
        port: PORT,
        nodeVersion: process.version,
        req: req,
        res: res
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
