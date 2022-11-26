var express = require('express');
var router = express.Router();


module.exports = (models) => {
  /* GET users listing. */
  router.get('/', (req, res, next) => {
    models.Books.findAll()
      .then(data => {
        res.json(data);
      });

  });

  router.get('/:translationId', (req, res, next) => {
    models.Books.findAll({
      where: {
        translation_id: req.params.translationId
      }
    })
      .then(data => {
        res.json(data);
      });

  });

  return router;
}