

$(function() {
  $('button').click(function() {

    // $('#in').val() = 意思是，取出id叫做in的input的值。
    // $('#in').val('') = 意思是，取出id叫做in的input的值，塞“空值”，也等同變相地清空值。
    var abc = $('#in').val(); // 設定變數為abc。
    var $div = $('<div />').addClass('ccc');

    // var a = 1; 數字
    // var b = 'abc'; 字串
    // var $div = $('<div />'); 元素
    // var $id = $('#id'); 元素
    // var(變數)的種類，通常“元素”的變數，前面會加'$'，沒有特殊意義，只是為了好識別。

    $('#items').append(
      $div.append(
        $("<p />").text(abc)
      ).append(
        $("<a />").text('刪除').click(function(){
          
          div.remove();

          // a這個元素：$(this)的父母親：parent ()，被移除：.remove(); 
          // $(this).parent ().remove();
        })
      )
    );

    // var p = $("<p />").text(abc);
    // var a = $("<a />").text('刪除');
    // var div = $('<div />').addClass('ccc').append (p).append (a);

    // $('#items').append(div);


    // .text = 一個元素中間要包的內容，如<div>中間內容</div。
    // $('<div />') ＝ 意思是，新增一個新的元素，可以是p, a, br...等等，但一定要空一格再加 / 。
    // prepend = 意思是，加到前面
    // append = 意思是，加到後面

    // 再輸入完後，把input中間的直清空。
    $('#in').val('');

  });
});