$(function() {
  var lastScrollTop = $(this).scrollTop();
  
  //Clicking the window will reset the popout.
  $(window).on('click', function() {
    if ($('.popout img').hasClass('pop-in')) {
      $('.popout img').removeClass('pop-in'); 
      $('.popout .chat-bubble').addClass('fade-out');
    }
  });
  
  $(window).on('scroll', function() {
    
     //Makes the plumber slide up or down 
    //the page based on scroll direction.
    if ($('.header').is(':in-viewport')) {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        $('.plumber').addClass('plumber-slide');
        $('.arrow').addClass('stop-loop');
      } else {
        $('.plumber').removeClass('plumber-slide');
        $('.arrow').removeClass('stop-loop');
      }
      lastScrollTop = st;
    }

     //Controls the popout
    if ($('.contact').is(':in-viewport')) {
      $('.popout img').addClass('pop-in');
      window.setTimeout(function() {
        $('.popout .chat-bubble').removeClass('fade-out');
      }, 2000);
    } else {
      $('.popout img').removeClass('pop-in');
      $('.popout .chat-bubble').addClass('fade-out');
    }
  });
})