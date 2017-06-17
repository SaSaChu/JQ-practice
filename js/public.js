
$(function () {

  function AA (a, b) {
    b = b / 100; //m，換算成公尺，因為JS只接受公尺
    var t = a / (b * b);
    return t; //return = 回傳的意思
  }

  var w = 70;
  var h = 170; //cm
  var bmi = AA(w, h);

  console.log(bmi);
  
});
