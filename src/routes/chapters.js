var express = require('express');
var router = express.Router();


module.exports = (models) => {
  /* GET users listing. */
  router.get('/', (req, res, next) => {

   if (!(req.query.translation_id && req.query.book_number)){
        res.send("Please give the translation_id and book_number together:\n.../chapters?translation_id=#&book_number=#");
    }
    else{
        const where={
            translation_id : req.query.translation_id,
            book_number : req.query.book_number
        };
        models.Chapters.findAll({ where })
        .then(data => {
            res.json(data);
        });
    }

    });

  return router;
}