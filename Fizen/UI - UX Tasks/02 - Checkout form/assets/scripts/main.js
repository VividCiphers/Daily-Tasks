    $(function() {

      $('input').on('focus', function() {
        var topy = $(this).position().top - 30;
        $('.pointer').css({
          position: 'absolute'
        }).animate({
          top: topy
        }, 250, function() {});
        $(this).siblings('span').css({
          color: '#031926'
        });

      });

      $('input').on('blur', function() {
        $(this).siblings('span').removeAttr('style');
      });

      //In the case of the window resizing, 
      //reset the styles so the pointer element
      //doesnt end up all over the page.
      $(window).resize(function() {
        $('.pointer').removeAttr('style');
      });

    })