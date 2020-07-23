var express  = require('express');
var router = express.Router();
//var api = require('./apiController');


router.get('/admin/setting', function (req, res){
  var id = 1;
  res.status(200).json(
    {
      "id": 1,
      "sizeW": 416,
      "sizeH": 416,
      "resizeW": 416,
      "resizeH": 416,
      "sizeW": 416,
      "camNum": 2
    }
  );
});

router.post('/admin/roi-image', function (req, res){
  const id = id;
  const ip = req.body.ip;
  const image = req.body.image;
  res.status(201).json(
    {
        "id": id,
        "ip": ip
     }
  );
});

router.get('/admin/roi-info', function (req, res){
  var user = [
    {
      "camID":1,
      "leftX": 60,
      "leftY": 60,
      "rightX": 90,
      "rightY": 90,
    },
    {
      "camID":1,
      "leftX": 90,
      "leftY": 70,
      "rightX": 200,
      "rightY": 160,
    },
    {
      "camID":1,
      "leftX": 60,
      "leftY": 60,
      "rightX": 70,
      "rightY": 70,
    },
    {
      "camID":1,
      "leftX": 80,
      "leftY": 90,
      "rightX": 100,
      "rightY": 110,
    }
  ]
  res.status(200).json(user);
});

router.get('/basic/image-info', function (req, res){
  const id = req.body.id;
  const name = req.body.name;
  const regDate = req.body.regDate;
  const people = req.body.peopleCNT;
  res.status(201).json(
    {
      "camID": id,
      "name": name,
      "regDate": regDate,
      "peopleCNT": people
    }
  );
});

module.exports = router;
