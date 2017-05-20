
$(function() {

  $('button').click(function() {
    // console.log('1234');
    var type = $('#in').val();

    if(type === '' && type === null) {
      $('.down').text('請輸入數字呦！');
    }

    if (type == 55) {
      $('.down').text('恭喜你答對了！');
    }

    if (type > 55) {
      $('.down').text('終極密碼在0 ~ ' + type + '的數字喔！');
    }

    if (type < 55) {
      $('.down').text('終極密碼在' + type + ' ~ 100的數字喔！');
    }
    // else {
    //   $('.down').text('終極密碼在'+'55-100'+'的數字喔！');
    // }

    $('#in').val('');

  });

});
