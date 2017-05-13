
$(function () {
  
  $('button').click(function() {

    var $a = $('#intext').val();
    var $b = $('<div />').addClass('cent_boxs');
    var $c = $('<p />').text($a);
    var $d = $('<a />').text('Detel');

    $('.rightboxs').append(
      $b.append(
        $c
      ).append(
        $d.click(function() {
          $b.remove();
        })
      )
    );


  });

});