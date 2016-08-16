
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
  // parent 意思是：抓取父親，在這個範例來說，就是指.box .c, .box .f




});
