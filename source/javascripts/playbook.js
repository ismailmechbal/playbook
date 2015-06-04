$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() >= 110){
      $(".logo").addClass('small');
    } else {
      $(".logo").removeClass('small');
    }
  });
});
