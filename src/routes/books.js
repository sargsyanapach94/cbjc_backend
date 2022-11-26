var express = require('express');
var router = express.Router();


module.exports = (models) => {
  /* GET users listing. */
  router.get('/', (req, res, next) => {
    const where={}
    if(req.query.translation_id){
      where.translation_id=req.query.translation_id
    }
    console.log(where)
    models.Books.findAll({where:where})
      .then(data => {
        res.json(data);
      });
  });

  return router;
}