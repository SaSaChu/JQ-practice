// console.log('1234');


$(function() {

  $('.d_boxs').empty('');

  $('button').click(function() {

    var a = $("#in").val();

    var $outbox = $('<div />').addClass('boxs');

    var $b = $('<div />').addClass('l_box');
    var $l_all = $b.append(a);

    var $c = $('<div />').addClass('r_box');
    var $d = $('<div />').addClass('aa').text('變色');
    var $e = $('<div />').addClass('bb').text('修改');
    var $f = $('<div />').addClass('cc').text('刪除');
    var $r_all = $c.append($d).append($e).append($f);

    $('.d_boxs').append($outbox.append($l_all).append($r_all));

    $d.click(function() {
      if ($('.boxs').hasClass('change')) {
        $('.boxs').removeClass('change');
      } else {
        $('.boxs').addClass('change');
      }
    });

    $e.click(function() {

      var fixtype = prompt('請輸入您要修改的文字'); // string(字串)
      if (fixtype !== '') {
        $l_all.text(fixtype);
      }
    });

    $f.click(function() {
      // $outbox.remove(); // 可以是這種寫法
      $(this).parent ().parent ().remove(); // 但這種方法正確：這個(this)的爸爸(parent)的爸爸，拿掉
    });


    $("#in").val('');

  });

});