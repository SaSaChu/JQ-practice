

$(function () {

  var ans = 67;
  var max = 100;
  var min = 0;
  
  $('button').click(function() {
    // console.log('1234');

    var type = $('#in').val();
    var $div = $('<div />').addClass('ansbox').attr('id', 'new');
    var $d = $('<div />').addClass('de').text('刪除');
    

    if (isNaN(type)) {
      $('.down').prepend($div.append($('<span />').text('請輸入“數字”呦！')));
    } else {

      if(type == ans) {
        $('.down').prepend($div.append($('<span />').text('恭喜你！！答對了')).append($d));
        $d.click(function() {
          $('#new').remove();
        });
      }

      if(type > ans) {
        $('.down').prepend($div.append($('<span />').text('答案在' + min + '-' + type + '之間呦')).append($d));
        min = type;

        $d.click(function() {
          $('#new').remove();
        });
      }

      if(type < ans) {
        $('.down').prepend($div.append($('<span />').text('答案在' + type + '-' + max + '之間呦')).append($d));
        max = type;

        $d.click(function() {
          $('#new').remove();
        });
      }

    }
    

    $('#in').val('');
  });

});

