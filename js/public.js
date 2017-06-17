
$(function () {

  function create_box(v) {

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

    $('.d_boxs').append(ans);

    $('#in').val('');
  });
  
});
