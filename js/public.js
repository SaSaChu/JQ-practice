
$(function () {

  $('.c_m').each(function() {
    var L = $(this).find ('>.a1').length;
    var c = 'n' + L;
    $(this).addClass (c);
  });

});
