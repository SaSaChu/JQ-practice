
$(function(){

  $('button').click(function(){

    var $v = $('#in').val();
    var $div = $('<div />').addClass('rbox');
    var $p = $('<p />').addClass('se').text($v);
    var $a = $('<a />').text('Detel');


    $('.rboxs')
      .append($div
        .append($p).append($a)
      );

    $p.click(function() {

      prompt("請輸入你想說的");

    });

    $a.click(function() {
      $div.remove();
    });

    $('#in').val('');

  });

});



      // console.log('adf');
