const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api/status', (req, res) => {
    res.json({ status: "Badgify Server is Up and Running!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
