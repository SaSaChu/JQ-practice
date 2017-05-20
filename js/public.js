
$(function() {
  var ans = 55;
  var max = 100;
  var min = 0;

  $('button').click(function() {
    // console.log('1234');
    var type = $('#in').val();

    if(type === '') {
      $('.down').text('請輸入數字呦！');
    } else {

      if (isNaN (type)) { // isNaN 是否 不是數字 Not a Number
        $('.down').text('請輸入數字呦！');
      } else {
        if (type == ans) {
          $('.down').text('恭喜你答對了！');
        }

        if (type > ans) {
          $('.down').text('終極密碼在' + min + ' ~ ' + type + '的數字喔！');
          max = type; // 記錄你輸入的最大值
        }

        if (type < ans) {
          $('.down').text('終極密碼在' + type + ' ~ ' + max + '的數字喔！');
          min = type; // 記錄你輸入的最小值
        }
      }
    }


    $('#in').val('');

  });

});
