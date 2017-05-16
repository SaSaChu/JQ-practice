

$(function() {

  $('.downboxs').empty();
  // console.log('12345');

  $('button').click(function() {

    var type = $('#in').val();

    if (type !== '') {

      var $div = $('<div />').addClass('downbox');
      var $span = $('<span />').text(type);
      var $linkboxs = $('<div />').addClass('typebox');
      var $a = $('<div />').append($('<a />').addClass('a').text('變色'));
      var $b = $('<div />').append($('<a />').addClass('b').text('修改'));
      var $c = $('<div />').append($('<a />').addClass('c').text('刪除'));

      $('.downboxs').append($div
        .append($span)
        .append($linkboxs
          .append($a).append($b).append($c)
          )
        );

      // 變色
      $a.click(function(){

        if ($div.hasClass ('ch')) {
          $div.removeClass('ch');
        } else {
          $div.addClass('ch');
        }
      });


      // 修改
      $b.click(function(){
        var e = prompt('請輸入你要修改的');

        if (e !== '') {
          $span.text(e);
        }
      });


      // 刪除 
      $c.click(function() {
        $div.remove();
      });


      $('#in').val('');

    }
  });

});





