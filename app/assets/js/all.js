$(".transactionType").on("click",function(){
  $(".fadeInUpBig").show();
  $("#editor").stop(true,true).animate({height:"300px"},500);         
});


$(".site_item1").on("click", function () {
  $(".fadeInUpBig").hide();
});


//旋轉按鈕樣式的開關 
$('.expandMore').click(function (event) {
  $('.expandMore').toggleClass('expand_less');
});