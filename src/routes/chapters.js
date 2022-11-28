const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { translation_id, book_number } = req.query;

  if (!translation_id || !book_number) {
    return res.send("Please give the translation_id and book_number together:\n.../chapters?translation_id=#&book_number=#");
  }

  const { models: { Chapters } } = req.app.get('bibleDb');

  Chapters.findAll({ translation_id, book_number })
    .then(data => {
      res.json(data);
    });
});

module.exports = router;