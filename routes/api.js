var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var multer = require('multer');
var fs = require('fs');
var mime = require('mime');
//var api = require('./apiController');

//roi에 필요한 이미지 받기
var settingStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'config/images/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
})
var uploadSetting = multer({
  storage: settingStorage
})

//결과 값에 필요한 이미지 받기!!
var resultStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'resources/images/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname + '-' + Date.now());
  }
})
var uploadResult = multer({
  storage: resultStorage
})

const db = new sqlite3.Database('./resources/db/information.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});


router.get('/admin/setting', function(req, res) {
  const query = `SELECT * FROM setting;`;
  db.serialize();
  db.each(query, (err, row) => {
    res.status(200).json({
      "sizeW": row.sizeW,
      "sizeH": row.sizeH
    });
  });
});

router.post('/admin/roi-image', function(req, res) {
  //const ip = req.body.ip;
  //const image = req.file.originalname;

  var base64Data = req.body.image.replace(/^data:image\/jpeg;base64,/, "");
  require("fs").writeFile("config/images/" + req.body.ip + "_out.jpeg", base64Data, 'base64', function(err) {
    console.log(err);
  });

  const query1 = `insert into camera(ip, image) values ("${req.body.ip}", "${req.body.ip}_out.jpeg");`;
  const query2 = `select id, datetime('now', 'localtime', '+10 seconds') as date from camera  where ip = "${req.body.ip}";`;
  console.log(req);
  //const query = `insert into camera(ip, image) values ("hello", "hello_out.png");`;
  db.serialize(() => {
    // Queries scheduled here will be serialized.
    db.run(query1)
      .each(query2, (err, row) => {
        if (err) {
          throw err;
        }
        res.status(201).json({
          "cameraID": row.id,
          "originalDate": row.date
        });
      });
  });
});


router.get('/admin/roi-info', function(req, res) {
  const query = `select id, leftX, leftY, rightX, rightY from roi;`;
  db.all(query, (err, rows) => {
    console.log(rows);
    var data = [];
    rows.forEach(function(row) {
      data.push({
        "id": row.id,
        "leftX": row.leftX,
        "leftY": row.leftY,
        "rightX": row.rightX,
        "rightY": row.rightY,
      });
    });
    res.status(200).json(data);
  });
});

router.post('/basic/image-info', function(req, res) {
  const {cameraID, originalDate, image} = req.body;
  var base64Data = image.replace(/^data:image\/jpeg;base64,/, "");
  require("fs").writeFile("resources/images/" + originalDate + "_"+cameraID+".jpeg", base64Data, 'base64', function(err) {
    console.log(err);
  });
  const query1 = `insert into cam_image (name, originalDate, cameraID)
    values ("${originalDate}_${cameraID}.jpeg", "${originalDate}", ${cameraID});`;
  const query2 = `select datetime('${originalDate}', (select saveInterval || ' seconds' from setting)) as date;`;
  db.serialize(() => {
    // Queries scheduled here will be serialized.
    db.run(query1)
      .each(query2, (err, row) => {
        if (err) return res.json(err);
        res.status(201).json({
          "originalDate": row.date
        });
      });
  });

});

module.exports = router;
