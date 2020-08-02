/*
document.querySelector('#confirm1').addEventListener('click', function(){
  var s1 = document.getElementById("setting1");
  s1.style.display = "none";
  var s2 = document.getElementById("setting3");
  s2.style.display = "inline-block";
});*/

document.querySelector('#edit_camera').addEventListener('click', function(){
  var view = document.getElementById("setting3");
  view.style.display = "none";
  var edit = document.getElementById("setting2");
  edit.style.display = "inline-block";
});

document.querySelector('#edit_image').addEventListener('click', function(){
  var view = document.getElementById("setting3");
  view.style.display = "none";
  var edit = document.getElementById("setting2");
  edit.style.display = "inline-block";
});
