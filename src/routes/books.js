const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  const { models: { Books } } = req.app.get('bibleDb');

  const where = {};
  if (req.query.translation_id) {
    where.translation_id = req.query.translation_id;
  }

  Books.findAll({ 
    where, 
    raw: true, 
    order: [ ['number', 'ASC'], ['testament', 'ASC'] ] })
    .then(data => {
      res.json(data);
    });
});

module.exports = router;