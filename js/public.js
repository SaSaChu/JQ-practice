
$(function(){

  var a = $('#id').val();


  $('button').click(function(){

    $('.rboxs').append($('<div />').addClass('.rbox')).text(a);

    // console.log('12312');

  });

});
