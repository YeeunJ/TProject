/*
document.querySelector('#confirm1').addEventListener('click', function(){
  var s1 = document.getElementById("setting1");
  s1.style.display = "none";
  var s2 = document.getElementById("setting3");
  s2.style.display = "inline-block";
});*/

document.querySelector('#edit_camera').addEventListener('click', function(){
  var btn = document.getElementById("confirm_camera");
  btn.style.display = "inline-block";
  var edit_camera = document.getElementById("edit_camera");
  edit_camera.style.display = "none";
  var edit_image = document.getElementById("edit_image");
  edit_image.style.display = "none";
  var f=document.getElementById("form_setting");
  f.sizeW.readOnly = false;
  f.sizeH.readOnly = false;
  f.resizeW.readOnly = false;
  f.resizeH.readOnly = false;
  f.camNum.readOnly = false;
  f.sizeW.style.color= "white";
  f.sizeH.style.color= "white";
  f.resizeW.style.color= "white";
  f.resizeH.style.color= "white";
  f.camNum.style.color= "white";
});

document.querySelector('#edit_image').addEventListener('click', function(){
  var btn = document.getElementById("confirm_image");
  btn.style.display = "inline-block";
  var edit_camera = document.getElementById("edit_camera");
  edit_camera.style.display = "none";
  var edit_image = document.getElementById("edit_image");
  edit_image.style.display = "none";
  var f=document.getElementById("form_setting");
  f.saveNum.readOnly = false;
  f.savePeriod.readOnly = false;
  f.saveInterval.readOnly = false;
  f.saveNum.style.color= "white";
  f.savePeriod.style.color= "white";
  f.saveInterval.style.color= "white";
});
