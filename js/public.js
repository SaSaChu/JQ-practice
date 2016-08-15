
$(function () {
  $('.box .c, .box .f').click (function () {
    if ($(this).parent ().hasClass ('A')) {
      $(this).parent ().removeClass ('A');
      $(this).parent ().addClass ('B');
    } else {
      $(this).parent ().removeClass ('B');
      $(this).parent ().addClass ('A');
    }
  });
  append




});
