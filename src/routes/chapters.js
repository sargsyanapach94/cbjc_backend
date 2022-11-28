const express = require('express');
const router = express.Router();

router.get('/:translation_id/:book_number', (req, res) => {
  const { translation_id, book_number } = req.params;
  const { models: { Chapters } } = req.app.get('bibleDb');
  console.log(translation_id, book_number);
  Chapters.findAll({
    where: { translation_id, book_number },
    raw: true,
  })
    .then(data => {
      res.json(data.map(({ text, updatedAt, createdAt, ...rest }) => rest));
    });
});

router.get('/:translation_id/:book_number/:chapter_number', (req, res) => {
  const { translation_id, book_number, chapter_number } = req.params;
  const { models: { Chapters } } = req.app.get('bibleDb');
  console.log(translation_id, book_number);
  Chapters.findOne({
    where: { translation_id, book_number, number: chapter_number },
    raw: true,
  })
    .then(({ updatedAt, createdAt, ...rest }) => {
      res.json(rest);
    });
});

module.exports = router;