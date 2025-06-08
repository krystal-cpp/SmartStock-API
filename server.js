const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(cors());
const upload = multer({dest: 'uploads/'});

app.get('/', (req, res) => {
    res.send('Складской API работает!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});