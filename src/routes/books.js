var express = require('express');
var router = express.Router();


module.exports = (models) => {
  /* GET users listing. */
  router.get('/', function (req, res, next) {
    models.Books.findAll()
      .then(data => {
        res.json(data);
      });

  });

  router.get('/:language', function (req, res, next) {
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