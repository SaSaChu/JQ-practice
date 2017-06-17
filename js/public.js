
$(function () {
    
  function ans (a, b) {
    b = b / 100;
    var t = a / (b * b);
    return t;
  }

  $('button').click(function () {
    var w = $('#weight').val();
    var h = $('#height').val();
    var bmi = ans(w, h);
    $('.d_boxs').text (bmi);
  });


});
