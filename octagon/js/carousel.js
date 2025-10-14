      let currentSlide = 0;
      const slides = document.querySelectorAll('.carousel-item');
      const indicators = document.querySelectorAll('.bottom-2 button, .bottom-4 button');
      const progressBar = document.querySelector('.progress-bar');
      let autoAdvanceTimer;
      let touchStartX = 0;
      let touchEndX = 0;
      const carousel = document.querySelector('.carousel-track');

      carousel.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
      carousel.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); }, { passive: true });

      function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > swipeThreshold) diff > 0 ? nextSlide() : prevSlide();
      }

      function updateSlides() {
        slides.forEach((slide, index) => {
          slide.className = 'carousel-item absolute top-0 left-0 w-full h-full';
          if (index === currentSlide) slide.classList.add('active');
          else if (index === (currentSlide + 1) % slides.length) slide.classList.add('next');
          else if (index === (currentSlide - 1 + slides.length) % slides.length) slide.classList.add('prev');
          else slide.classList.add('hidden');
        });

        indicators.forEach((indicator, index) => {
          indicator.className = `w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
            index === currentSlide ? 'bg-white/40' : 'bg-white/20'
          } hover:bg-white/60`;
        });

        progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
      }

      function resetAutoAdvance() { clearInterval(autoAdvanceTimer); autoAdvanceTimer = setInterval(nextSlide, 5000); }
      function nextSlide() { currentSlide = (currentSlide + 1) % slides.length; updateSlides(); resetAutoAdvance(); }
      function prevSlide() { currentSlide = (currentSlide - 1 + slides.length) % slides.length; updateSlides(); resetAutoAdvance(); }

      indicators.forEach((indicator, index) => { indicator.addEventListener('click', () => { currentSlide = index; updateSlides(); resetAutoAdvance(); }); });

      resetAutoAdvance();
      updateSlides();
