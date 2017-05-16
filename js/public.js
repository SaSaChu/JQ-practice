

$(function() {

  $('.downboxs').empty();
  // console.log('12345');

  $('button').click(function() {

    var type = $('#in').val();
    if (type !== '') {
    // 如果type不是（!== 不是）空值。這樣就不會再沒有輸入東西點擊按鈕後，下方會出現空的東西

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
        // if(ture) {} else {}
        // 如果div有ch，那就移除ch，如果不是，就加入ch
      });


      // 修改
      $b.click(function(){
        var e = prompt('請輸入你要修改的');

        if (e !== '') {
          $span.text(e);
        }
        // 這個if是在判斷如果沒有輸入文字，原本的文字就不動。
        // 如果e不是空值，那就把輸入的值帶入。
      });


      // 刪除 
      $c.click(function() {
        $div.remove();
      });


      $('#in').val('');

    }
  });

});





