var height = '-' + $('.connect').css('height');
$('.connect').css('margin-top', height);

$(function() {
    $('.connect-btn a').click(function(){
      if($('.connect').css('marginTop') == height) {
        $('.connect').animate({marginTop:'0'},{queue:false,duration:300});
      } else {
        $('.connect').animate({marginTop: height},{queue:false,duration:300});     
      }
    return false;
    });
	
	$('.facebok-comment h3').click(function(){
        $('.facebok-comment .bg').slideToggle('fast');
    return false;
    });
});








