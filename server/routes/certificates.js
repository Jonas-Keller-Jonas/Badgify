const express = require('express');
const router = express.Router();

// Route to issue a new certificate
router.post('/issue', (req, res) => {
    // Logic to issue a new certificate on Solana
    res.json({ status: "Certificate issued" });
});

// Route to verify a certificate
router.get('/verify/:certificateId', (req, res) => {
    // Logic to verify a certificate on Solana
    res.json({ status: "Certificate verified" });
});

module.exports = router;
