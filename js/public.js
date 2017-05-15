
$(function(){
  $('.rboxs').empty(); 
  // 意思等同於 $('.rboxs').text(''); 空值。這用法是需要設定在最外層，用意是為了要在一開始把html裡面清空

  $('button').click(function(){

    var v = $('#in').val(); // 元素？字串？

    var $div = $('<div />').addClass('rbox');
    var $p = $('<p />').addClass('se').text(v);
    var $a = $('<a />').text('Detel');


    $('.rboxs')
      .append($div
        .append($p).append($a)
      );

    $p.click(function() {

      var a = prompt("請輸入你想說的");
      // $(this).text(a); 這也是對的用法
      // $p.appndTo (a); 這也是對的用法
      $p.text(a);

      // a.appendTo ($p); 這是錯誤的用法
      // a 是字串，字串是沒有appendTo的function的
    });

    $a.click(function() {
      $div.remove();
    });

    $('#in').val('');

  });

});



      // console.log('adf');
