const express = require('express');
const router = express.Router();
let {notes} = require('../db/database.js')
router.get('/notes', async (req, res) => {
    // Fetch the items from your data source and send them as a JSON response
   let memoryNotes = await notes.getData()
    res.status(200).json(memoryNotes)
  });

  router.post('/notes', async (req, res) => {
    // Create a new item with the provided data and save it to your data source, then send the created item as a JSON response
const {note} = req.body
    let memoryNotes = await notes.writeData(note)
    res.status(201).json(memoryNotes)
  });
  module.exports = router