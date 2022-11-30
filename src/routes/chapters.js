const express = require('express');
const { Op } = require("sequelize");
const router = express.Router();

router.get('/:translation_id/:book_number', (req, res) => {
  const { translation_id, book_number } = req.params;
  const { models: { Chapters } } = req.app.get('bibleDb');

  Chapters.findAll({
    where: { translation_id, book_number },
    raw: true,
    order: [['number', 'ASC']],
  })
    .then(data => {
      res.json(data.map(({ text, updatedAt, createdAt, id, book_id, ...rest }) => rest));
    });
});

router.get('/translations-texts/:book_number/:chapter_number', (req, res) => {
  const { book_number, chapter_number } = req.params;
  const translationIds = req.query.translationIds?.split(',');
  const { models: { Chapters } } = req.app.get('bibleDb');
  if(!translationIds?.length) {
    return  res.send('Please send translationIds in query as a sting separated with "," .');
  }

  Chapters.findAll({
    where: { translation_id: { [Op.or]: translationIds }, book_number, number: chapter_number },
    raw: true,
  })
    .then(data => {
      res.json(data.map(({ updatedAt, createdAt, id, book_id, ...rest }) => rest));
    });
});

router.get('/:translation_id/:book_number/:chapter_number', (req, res) => {
  const { translation_id, book_number, chapter_number } = req.params;
  const { models: { Chapters } } = req.app.get('bibleDb');

  Chapters.findOne({
    where: { translation_id, book_number, number: chapter_number },
    raw: true,
  })
    .then(({ updatedAt, createdAt, id, book_id,...rest }) => {
      res.json(rest);
    });
});

module.exports = router;