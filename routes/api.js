var express  = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var multer = require('multer');
var fs = require('fs');
var mime = require('mime');
//var api = require('./apiController');

//roi에 필요한 이미지 받기
var settingStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'config/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
var uploadSetting = multer({ storage: settingStorage })

//결과 값에 필요한 이미지 받기!!
var resultStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'resources/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now());
  }
})
var uploadResult = multer({ storage: resultStorage })

const db = new sqlite3.Database('./resources/db/information.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('success');
    }
});


router.get('/admin/setting', function (req, res){
  const query = `SELECT * FROM setting;`;
  db.serialize();
  db.each(query, (err, row) => {
        res.status(200).json(
          {
            "id": row.id,
            "sizeW": row.sizeW,
            "sizeH": row.sizeH,
            "resize": row.resize,
            "camNum": row.camNum
          }
        );
        console.log(row);
    });
});

router.post('/admin/roi-image', function (req, res){
  //const ip = req.body.ip;
  //const image = req.file.originalname;
  /*
  var base64Data = req.rawBody.replace(/^data:image\/png;base64,/, "");
  require("fs").writeFile("config/images/"+req.body.ip+"_out.png", base64Data, 'base64', function(err) {
    console.log(err);
  });
  const query = `insert into camera(ip, image) values ("${req.body.ip}", "${req.body.ip}_out.png");`;
  */
  console.log(req.body);
    db.each(query, (err, row) => {
        if(err) return res.json(err);
        res.status(201).json(
          {
            "success1": "succeess"
          }
        );
        res.status(204).json(
          {
            "success4": "succeess"
          }
        );
        res.status(200).json(
          {
            "success0": "succeess"
          }
        );
  });
});

router.get('/test', function (req, res){
  const query = `select * from camera;`;
  db.serialize();
    db.all(query2, function(err, row){
      if(err) return res.json(err);
      res.render('admin/index', {data: row});
  });
});

router.get('/admin/roi-info', function (req, res){
  const query = `select ip, leftX, leftY, rightX, rightY from camera as c join roi as r on c.id = r.camID;`;
  db.serialize();
  db.each(query, (err, row) => {
        res.status(200).json(
          {
            "ip": row.ip,
            "leftX": row.leftX,
          	"leftY": row.leftY,
          	"rightX": row.rightX,
          	"rightY": row.rightY,
          }
        );
        console.log(row);
    });
  res.status(200).json(user);
});

router.post('/basic/image-info', uploadResult.single('file'), function (req, res){
  const ip = req.body.ip;
  const name = req.file.originalname;
  const regDate = req.body.regDate;
  const people = req.body.peopleCNT;
  const query = `insert into cam_image (name, peopleCNT, cameraID)
    values ("${name}", "${people}", (select id from camera where ip = "${ip}"));`;
    console.log(query);
    db.serialize();
    db.each(query, (err, row) => {
        if(err) return res.json(err);
        res.status(201).json(
          {
            "camID": id,
            "name": name,
            "regDate": regDate,
            "peopleCNT": people
          }
        );
        console.log(res);
    });
});

module.exports = router;
