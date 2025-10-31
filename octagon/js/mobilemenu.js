$(document).ready(function() {
  $('#mobileMenuBtn').on('click', function() {
    const $mobileMenu = $('#mobileMenu');
    const $icon = $(this).find('svg');
    
    if ($mobileMenu.hasClass('hidden')) {
      $mobileMenu.removeClass('hidden').hide().slideDown(300);
      $icon.html('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>');
    } else {
      $mobileMenu.slideUp(300, function() {
        $(this).addClass('hidden');
      });
      $icon.html('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>');
    }
  });
});
