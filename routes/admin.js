var express  = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./resources/db/information.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('success');
    }
});

router.get('/', function(req, res){
  console.log(req.file);
  const query = `select * from setting where id = 1;`;
  console.log(query);
  db.serialize();

  db.each(query, function(err, row){
    if(err) return res.json(err);
    res.render('admin/index', {data: row});
    console.log(row);
  });

});

router.post('/setting1', function (req, res, next) {
    var {sizeW, sizeH, resizeW, resizeH, camNum, savePeriod, saveInterval, saveNum} = req.body;
    const query = `update setting
    set sizeW = ${sizeW}, sizeH = ${sizeH}, resizeW = ${resizeW}, resizeH = ${resizeH},
    camNum = ${camNum}, savePeriod = ${savePeriod}, saveInterval = ${saveInterval}, saveNum = ${saveNum}, regDate = datetime('now', 'localtime')
    where id = 1;`;
    console.log(query);
    db.serialize();
    db.each(query, (err, row) => {
        if(err) return res.json(err);
    });
    res.redirect('/');
});
/*
router.post('/setting', function(req, res){
  const {sizeW, sizeH, resizeW, resizeH, camNum, savePeriod, saveInterval, saveNum} = req.body;
  console.log(req.body);
  const cam_query = `select * from camera;`;
  console.log(cam_query);
  db.serialize();
  db.all(cam_query, (err, rows) => {
      //res.json(rows);
      console.log("row" + rows);
      res.render('admin/index', {data: row});
  });
  //var responseData = {'result' : 'ok', 'email' : req.body.email}
  //res.json(responseData);
  // 서버에서는 JSON.stringify 필요없음
});*/

router.post('/submit', function(req, res){
  const {camID, leftX, leftY, rightX, rightY} = req.body;
  const query = `insert into roi(camID, leftX, leftY, rightX, rightY)
    values ("${camID}", "${leftX}", "${leftY}", "${rightX}", "${rightY}");`;
  console.log(query);
  db.serialize();
    db.each(query, (err, row) => {
        if(err) return res.json(err);
        res.redirect('/basic');
        console.log(res);
    });
    res.redirect('/basic');
  //var responseData = {'result' : 'ok', 'email' : req.body.email}
  //res.json(responseData);
  // 서버에서는 JSON.stringify 필요없음
})

module.exports = router;
