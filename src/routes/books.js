var express = require('express');
var router = express.Router();


module.exports = (models) => {
  router.get('/', (req, res, next) => {

    const where={};
    if(req.query.translation_id){
      where.translation_id=req.query.translation_id;
    }

    models.Books.findAll({ where })
      .then(data => {
        res.json(data);
      });
  });

  return router;
}