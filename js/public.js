
$(function () {

  function create_box(v) { 
  // 這邊是宣告create_box這個盒子內容，做了哪些動作，v=type，（註一）

    var $div = $('<div />');

    var $span = $('<span />');
    $span.text(v);

    var $a = $('<a />');
    $a.text('刪除');
    $a.click(function() {
      $(this).parent().remove();
    });

    var $t = $div.append($span).append($a);

    return $t;
  }


  $('button').click(function() {

    var type = $('#in').val();
    var ans = create_box(type); 
    // 宣告function盒子的名稱，create_box就是盒子的名稱（註一），盒子裡面裝著上一行type的質

    $('.d_boxs').append(ans);

    $('#in').val('');
  });
  
});
