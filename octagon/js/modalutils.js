const ModalUtils = {
  getScrollbarWidth: function() {
    return window.innerWidth - document.documentElement.clientWidth;
  },

  lockScroll: function() {
    const scrollbarWidth = this.getScrollbarWidth();
    const $body = $('body');
    const $header = $('header[class*="fixed"]');
    
    if (scrollbarWidth > 0) {
      if ($header.length) {
        $header.css('transition', 'none');
      }
      
      $body.css('padding-right', scrollbarWidth + 'px');
      
      if ($header.length) {
        $header.css('right', scrollbarWidth + 'px');
      }
      
      if ($header.length) {
        $header[0].offsetHeight;
      }
      
      setTimeout(() => {
        if ($header.length) {
          $header.css('transition', '');
        }
      }, 50);
    }
    
    $body.css('overflow', 'hidden');
  },

  unlockScroll: function() {
    const $body = $('body');
    const $header = $('header[class*="fixed"]');
    
    if ($header.length) {
      $header.css('transition', 'none');
    }
    
    $body.css({
      'overflow': '',
      'padding-right': ''
    });
    
    if ($header.length) {
      $header.css('right', '');
      $header[0].offsetHeight;
      
      setTimeout(() => {
        $header.css('transition', '');
      }, 50);
    }
  }
};
