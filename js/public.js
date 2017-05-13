// 打出外面的東西：$() + function + () + {} + ;

$(function () {

  $('#btn').click(function() {
    // 驗證動作有沒有效
    // console.log('123');
    $('.box').removeClass('a b c d');
  });
});
