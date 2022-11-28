const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  const { models: { Bible_translations } } = req.app.get('bibleDb');

  Bible_translations.findAll({ raw: true })
    .then(data => {
      res.json(data);
    });

});

router.get('/:language', (req, res) => {
  const { models: { Bible_translations } } = req.app.get('bibleDb');

  Bible_translations.findAll({
    where: {
      language: req.params.language
    }, 
    raw: true,
  })
    .then(data => {
      res.json(data);
    });

});

module.exports = router;