const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
  router.get('/notes', (req, res) => {
    console.log(req)
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  module.exports = router;
