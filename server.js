// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Use body-parser to parse JSON data
app.use(bodyParser.json());

// Webhook endpoint
app.get("/" ,(req, res)=>{
    return res.json({success: true})
})

// clg
app.post('/webhook', (req, res) => {
    const eventData = req.body;
    console.log(req);
    console.log('🔔 Webhook received:', eventData);

    // You can now process the eventData, e.g., store in DB, trigger something, etc.
    
    res.status(200).send('Webhook received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
