document.querySelector('#confirm').addEventListener('click', function(){
    // 입력값 위치를 찾아 변수에 담고
    var inputdata = document.forms[0]/*.elements[0].value*/;
    // sendAjax 함수를 만들고 URL과 data를 전달
    // 입력값을 변수에 담고 문자열 형태로 변환
  var data = {'email' : data};
  data = JSON.stringify(data);
  console.log(inputdata);
  // content-type을 설정하고 데이터 송신
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost/roiImage');
  xhr.setRequestHeader('Content-type', "application/json");
  xhr.send(data);

  // 데이터 수신이 완료되면 표시
  xhr.addEventListener('load', function(){
    // 문자열 형식으로 변환
    var result = JSON.parse(xhr.responseText);
    console.log(result[0]);
    for(var i=1; i<= result.length; i++){
      console.log(result[i-1].image);

      console.log(result[i-1].image);
      document.getElementById("image"+i).src = "./config/images/"+result[i-1].image;
      new Cropper(document.getElementById("image"+i), {
        update: function(coordinates) {
          // your code here!
          document.getElementById('x' + i).value = this.coordinates.x;
          document.getElementById('y'+i).value = this.coordinates.y;
          document.getElementById('width'+i).value = this.coordinates.width;
          document.getElementById('height'+i).value = this.coordinates.height;
        }
      });
    }
    document.getElementById('adminROI').style.display = 'block';
  });
});
document.getElementById('adminROI').style.display = 'none';

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
  document.getElementById('cam1').click();
}

document.getElementById('cam1').addEventListener('click', function() {
  document.getElementById('camera2').style.display = 'none';
  document.getElementById('camera1').style.display = 'block';
});
document.getElementById('cam2').addEventListener('click', function() {
  document.getElementById('camera1').style.display = 'none';
  document.getElementById('camera2').style.display = 'block';
});

document.getElementById('submit').addEventListener('click', function() {
  location.href = "localhost:80/submit";
});
