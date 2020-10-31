const { Router } = require('express');

const router = new Router();

router.get('/', function(req, res) {
  res.status(200).send({message: 'hello world'});
});

module.exports = router;
