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
  const query = `select * from setting where id = 1;`;
  console.log(req);
  db.serialize();

  db.each(query, function(err, row){
    if(err) return res.json(err);
    res.render('admin/index', {data: row, data2: ""});
    console.log(row);
  });

});

router.post('/setting1', function (req, res, next) {
    var {sizeW, sizeH, resizeW, resizeH, camNum, savePeriod, saveInterval, saveNum} = req.body;
    const query = `update setting
    set sizeW = ${sizeW}, sizeH = ${sizeH}, resizeW = ${resizeW}, resizeH = ${resizeH},
    camNum = ${camNum}, savePeriod = ${savePeriod}, saveInterval = ${saveInterval}, saveNum = ${saveNum}, regDate = datetime('now', 'localtime')
    where id = 1;`;
    const cam_query = `select * from camera;`;
    const query2 = `select * from setting where id = 1;`;
    console.log(query);
    console.log(cam_query);

    db.serialize(() => {
      // Queries scheduled here will be serialized.
      db.run(query)
        .all(cam_query, (err, row1) => {
          if (err){
            throw err;
          }
          db.each(query2, function(err, row){
            if(err) return res.json(err);
            res.render('admin/index', {data: row, data2: row1});
            console.log(row1);
          });
        });
    });
    /*db.each(query, (err, row) => {
        if(err) return res.json(err);
    });*/
});

router.post('/setting2', function (req, res, next) {
    var {sizeW, sizeH, resizeW, resizeH, camNum, savePeriod, saveInterval, saveNum} = req.body;
    const query = `update setting
    set sizeW = ${sizeW}, sizeH = ${sizeH}, resizeW = ${resizeW}, resizeH = ${resizeH},
    camNum = ${camNum}, savePeriod = ${savePeriod}, saveInterval = ${saveInterval}, saveNum = ${saveNum}, regDate = datetime('now', 'localtime')
    where id = 1;`;
    const cam_query = `select * from camera;`;
    const query2 = `select * from setting where id = 1;`;
    console.log(query);
    db.serialize(() => {
      // Queries scheduled here will be serialized.
      db.run(query)
        .all(cam_query, (err, row1) => {
          if (err){
            throw err;
          }
          db.each(query2, function(err, row){
            if(err) return res.json(err);
            res.render('admin/index', {data: row, data2: row1});
            console.log(row1);
          });
        });
    });
});

router.get('/submit', function(req, res){
  const {camID, leftX, leftY, rightX, rightY} = req.body;
  console.log("submit");
  console.log(req.query[0]);

  /*const query = `insert into roi(camID, leftX, leftY, rightX, rightY)
    values ("${camID}", "${leftX}", "${leftY}", "${rightX}", "${rightY}");`;
  console.log(query);
  db.serialize();
    db.each(query, (err, row) => {
        if(err) return res.json(err);
        res.redirect('/basic');
        console.log(res);
    });*/
    res.redirect('/basic');
})

module.exports = router;
