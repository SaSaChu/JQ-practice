

$(function() {
  $('button').click(function() {

    // $('#in').val() = 意思是，取出id叫做in的input的值。
    // $('#in').val('') = 意思是，取出id叫做in的input的值，塞“空值”，也等同變相地清空值。
    var abc = $('#in').val(); // 設定變數為abc。

    $('#items').prepend($('<div />').addClass('bor').text(abc));
    // .text = 一個元素中間要包的內容，如<div>中間內容</div。
    // $('<div />') ＝ 意思是，新增一個新的元素，可以是p, a, br...等等，但一定要空一格再加 / 。
    // prepend = 意思是，加到前面
    // append = 意思是，加到後面

    // 再輸入完後，把input中間的直清空。
    $('#in').val('');

  });
});