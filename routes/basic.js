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
  const query = `select * from setting where id = 1; select * from cam_image;`;
  //`select strftime('%d', regDate), sum(peopleCNT) from cam_image where cameraID = 1 GROUP BY strftime('%d', regDate);`

  //const cam_query = `select * from camera;`;
  console.log(query);
  db.serialize();
  db.all(query, (err, rows) => {
      //res.json(rows);
      if(err) return res.json(err);
      res.render('basic/index', {data: rows[1]});
      console.log(rows[0]);
  });
  /*
  db.each(query, function(err, row){
    if(err) return res.json(err);
    //res.render('basic/index', {data: row});
    console.log(row);
  });*/
  //res.render('basic/index');
});

router.get('/search', function(req, res){
  const {starttime, endtime} = req.body;
  console.log(req.file);
  const query = `select * from
  where regDate between '${starttime}' and '${endtime}'`;
  console.log(query);
  db.serialize();
  db.all(query, (err, rows) => {
      res.json(rows);
      console.log(rows);
  });
  res.redirect('/');
});

module.exports = router;
