
$(function () {
    
  function ans (a, b) { // 建構ans這個盒子的內容，而後面的a=w,b=h（對應註一）
    b = b / 100; //把公分換算成公尺，因為JS只能以公尺換算
    var t = a / (b * b); //bmi的計算公式
    return t;
  }

  $('button').click(function () {
    var w = $('#weight').val();
    var h = $('#height').val();
    var bmi = ans(w, h); // 宣告ans這個盒子裡面裝什麼（註一）
    $('.d_boxs').text (bmi);
  });


});
