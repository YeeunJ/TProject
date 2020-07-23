/*document.getElementById('showROI').addEventListener('click', function() {
  document.getElementById('adminROI').style.display = 'block';
});*/
document.getElementById('image1').onload = function() {
  new Cropper(this, {
    update: function(coordinates) {
      // your code here!
      document.getElementById('x').value = this.coordinates.x;
      document.getElementById('y').value = this.coordinates.y;
      document.getElementById('width').value = this.coordinates.width;
      document.getElementById('height').value = this.coordinates.height;
    }
  });
}
document.getElementById('image2').onload = function() {
  new Cropper(this, {
    update: function(coordinates) {
      // your code here!
      document.getElementById('x2').value = this.coordinates.x;
      document.getElementById('y2').value = this.coordinates.y;
      document.getElementById('width2').value = this.coordinates.width;
      document.getElementById('height2').value = this.coordinates.height;
    }
  });
}

document.getElementById('cam1').addEventListener('click', function() {
  document.getElementById('camera2').style.display = 'none';
  document.getElementById('camera1').style.display = 'block';
});
document.getElementById('cam2').addEventListener('click', function() {
  document.getElementById('camera1').style.display = 'none';
  document.getElementById('camera2').style.display = 'block';
});
