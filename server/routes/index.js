var express = require('express');
var router = express.Router();
var Category = require('../catModel');
var Item = require('../itemModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});
/* GET cats page. */
router.get('/api/categories', function (req, res, next) {
  Category.find({}, function (err, categories) {
    if (err) res.status(400).send(err);
    else {
      res.json(categories);
    }
  });

});
///* GET Items page. */
router.get('/api/items', function (req, res, next) {
  Item.find(function (err, allItems) {
    if (err) res.status(400).send(err);
    else {
      res.send(allItems);
    }
  });
});

///* GET single Item */
router.get('/api/item/:itemId', function (req, res, next) {
  Item.findById(req.params.itemId)
      .exec(function (err, item) {
    if (err) res.status(400).send(err);
    else {
      res.send(item);
    }
  });
});

///* DELETE single Item */
router.delete=function (req, res, next) {
  var item = req.item;
  item.remove(function (err) {
    if(err){
    res.status(400).send(err)}
        else {
          res.send(item);
        }

})};

///*POST to add Item
router.post('api/item/', function(req, res, next){
  var item = new Item(req.body);

  item.save(function(err) {
    if (err) {
      return res.status(400).send(
        err
      );
    } else {
      res.json(item);
    }
  });
})

module.exports = router;
