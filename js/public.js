
$(function () {
  
  $('.down').empty('');

  $('button').click(function () {
    // console.log('11111');
    var type = $('#in').val();
    var $div = $('<div />').addClass('d_boxs');
    var $span = $('<span />').text(type);
    var $aboxs = $('<div />').addClass('a_boxs');
    var $a = $('<div />').addClass('a').text('變色');
    var $b = $('<div />').addClass('b').text('修改');
    var $c = $('<div />').addClass('c').text('刪除');


    $('.down').append($div
      .append($span).append($aboxs
        .append($a).append($b).append($c))
      );

    // 變色
    $a.click(function() {
      if ($div.hasClass('cc')) {
        $div.removeClass('cc');
      } else {
        $div.addClass('cc');
      }
    });

    // 修改
    $b.click(function() {
      var e = prompt('請輸入要修改的字串');
      $span.text(e);
    });

    // 刪除 
    $c.click(function(){
      $div.remove();
    });

    $('#in').val('');

  });

});








