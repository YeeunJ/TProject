document.getElementById('showROI').addEventListener('click', function() {
  document.getElementById('adminROI').style.display = 'block';
});
document.getElementById('cam1').addEventListener('click', function() {
  document.getElementById('canvas2').style.display = 'none';
  document.getElementById('canvas1').style.display = 'block';
  var canvas = document.getElementById('canvas1');
  var context = canvas.getContext('2d');
  var image_src = new Image();
  image_src.src = "./config/images/1.jpeg";
  var image_width = image_src.width;
  var image_height = image_src.height;
  context.drawImage(image_src, 0, 0, image_width, image_height, 0, 0, canvas.width, canvas.height);
});
document.getElementById('cam2').addEventListener('click', function() {
  document.getElementById('canvas1').style.display = 'none';
  document.getElementById('canvas2').style.display = 'block';
  var canvas = document.getElementById('canvas2');
  var context = canvas.getContext('2d');
  var image_src = new Image();
  image_src.src = "./config/images/2.jpeg";
  var image_width = image_src.width;
  var image_height = image_src.height;
  context.drawImage(image_src, 0, 0, image_width, image_height, 0, 0, canvas.width, canvas.height);
});
var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d');
var image_src = new Image();
image_src.src = "./config/images/1.jpeg";
var image_width = image_src.width;
var image_height = image_src.height;

image_src.onload = function() {
  context.drawImage(image_src, 0, 0, image_width, image_height, 0, 0, canvas.width, canvas.height);
};
document.getElementById('canvas2').style.display = 'none';
var maxnum_point = 10;
var block_num = 0;
var point_num = 0;
var point_list = new Array();
for (var i = 0; i < maxnum_point; i++) {
  point_list[i] = new Array(4);
}
var x_ratio = image_width / canvas.width;
var y_ratio = image_height / canvas.height;
image_src.onload = function() {
  context.drawImage(image_src, 0, 0, image_width, image_height, 0, 0, canvas.width, canvas.height);
};
var maxnum_point = 10;
var block_num = 0;
var point_num = 0;
var point_list = new Array();
for (var i = 0; i < maxnum_point; i++) {
  point_list[i] = new Array(4);
}
var x_ratio = image_width / canvas.width;
var y_ratio = image_height / canvas.height;


function findCoordinates() {
  point_num++;
  var tmp_x = event.offsetX;
  var tmp_y = event.offsetY;
  var real_x = parseInt(tmp_x * x_ratio);
  var real_y = parseInt(tmp_y * y_ratio);
  if (block_num <= maxnum_point) {
    if (point_num % 2 != 0) {
      point_list[block_num][0] = real_x;
      point_list[block_num][1] = real_y;
    } else {
      point_list[block_num][2] = real_x;
      point_list[block_num][3] = real_y;
      var tmp_plist = point_list[block_num].slice();
      if (tmp_plist[0] < tmp_plist[2] && tmp_plist[1] > tmp_plist[3]) {
        point_list[block_num][1] = tmp_plist[3];
        point_list[block_num][3] = tmp_plist[1];
      } else if (tmp_plist[0] > tmp_plist[2] && tmp_plist[1] > tmp_plist[3]) {
        point_list[block_num][0] = tmp_plist[2];
        point_list[block_num][1] = tmp_plist[3];
        point_list[block_num][2] = tmp_plist[0];
        point_list[block_num][3] = tmp_plist[1];
      } else if (tmp_plist[0] > tmp_plist[2] && tmp_plist[1] < tmp_plist[3]) {
        point_list[block_num][0] = tmp_plist[2];
        point_list[block_num][2] = tmp_plist[0];
      }
      var rec_width = (point_list[block_num][2] - point_list[block_num][0]) / x_ratio;
      var rec_height = (point_list[block_num][3] - point_list[block_num][1]) / y_ratio;
      context.strokeStyle = 'red';
      context.lineWidth = 5;
      context.strokeRect(point_list[block_num][0] / x_ratio, point_list[block_num][1] / y_ratio, rec_width, rec_height);
      block_num++;
    }
  }
}
