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

  router.get('/:language', (req, res, next) => {
    models.Books.findAll({
      where: {
        language: req.params.language
      }
    })
      .then(data => {
        res.json(data);
      });

  });

  return router;
}