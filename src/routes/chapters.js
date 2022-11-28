const express = require('express');
const router = express.Router();

router.get('/:translation_id/:book_number', (req, res) => {
  const { translation_id, book_number } = req.params;
  const { models: { Chapters } } = req.app.get('bibleDb');

  Chapters.findAll({
    where: { translation_id, book_number },
    raw: true,
    order: [ ['number', 'ASC'] ],
  })
    .then(data => {
      res.json(data.map(({ text, updatedAt, createdAt, ...rest }) => rest));
    });
});

router.get('/:translation_id/:book_number/:chapter_number', (req, res) => {
  const { translation_id, book_number, chapter_number } = req.params;
  const { models: { Chapters } } = req.app.get('bibleDb');

  Chapters.findOne({
    where: { translation_id, book_number, number: chapter_number },
    raw: true,
  })
    .then(({ updatedAt, createdAt, ...rest }) => {
      res.json(rest);
    });
});

module.exports = router;