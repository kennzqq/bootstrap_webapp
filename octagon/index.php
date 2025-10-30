<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Octagon - Home</title>
  <link rel="icon" href="img/icon.png" type="image/x-icon" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.77/build/spline-viewer.js"></script>
  <link rel="stylesheet" href="css/tailwind.css" />
</head>

<body class="overflow-x-hidden">
  <?php include 'components/navbar.php'; ?>

  <!-- HERO SECTION -->
  <section class="relative min-h-[600px] pt-24 pb-12 px-6 md:px-12 lg:flex lg:items-center lg:justify-center overflow-hidden" style="background-color: #E3E3E3;">
    <div class="hidden lg:block absolute right-0 bottom-0 w-6/10 h-9/10 pointer-events-auto">
      <spline-viewer url="img/bot.spline" class="w-full h-full"></spline-viewer>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto w-full pointer-events-none mt-10">
      <div class="lg:w-1/2 animate-fadeInUp pointer-events-auto">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
          <span class="block text-gray-900">INSPIRED BY</span>
          <span class="block text-blue-600">INNOVATION</span>
        </h1>

        <p class="text-lg text-gray-700 mb-8 max-w-lg animate-fadeIn delay-700">
          Discover the latest tech and lifestyle essentials, all handpicked to bring innovation and style into your
          everyday life.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-1000">
          <a href="products.php"
            class="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:scale-105 duration-200">
            Shop Now
          </a>
          <a href="about.php"
            class="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:scale-105">
            About Us
          </a>
        </div>

        <div class="mt-12 flex items-center space-x-8 animate-fadeIn delay-1000">
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-gray-900">100%</span>
            <span class="text-gray-600">Authentic Products</span>
          </div>
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-gray-900">24/7</span>
            <span class="text-gray-600">Customer Support</span>
          </div>
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-gray-900">5★</span>
            <span class="text-gray-600">Trusted by Shoppers</span>
          </div>
        </div>
      </div>

      <!-- Mobile: Spline below content -->
      <div class="lg:hidden mt-12 w-full h-[300px] sm:h-[400px] pointer-events-auto">
        <spline-viewer url="img/bot.spline" class="w-full h-full"></spline-viewer>
      </div>
    </div>
  </section>

  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-all duration-300 scroll-fade-up">
          <div class="text-5xl text-blue-600 mb-4"><i class="bi bi-truck"></i></div>
          <h3 class="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p class="text-gray-500 text-sm">Free shipping on orders over $50</p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-all duration-300 scroll-fade-up">
          <div class="text-5xl text-blue-600 mb-4"><i class="bi bi-shield-check"></i></div>
          <h3 class="text-xl font-semibold mb-2">Secure Payment</h3>
          <p class="text-gray-500 text-sm">100% secure processing</p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition-all duration-300 scroll-fade-up">
          <div class="text-5xl text-blue-600 mb-4"><i class="bi bi-arrow-counterclockwise"></i></div>
          <h3 class="text-xl font-semibold mb-2">Easy Returns</h3>
          <p class="text-gray-500 text-sm">30-day return policy</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTENTS -->
  <section>
    <div class="w-full max-w-6xl mx-auto scroll-fade-up delay-400">
      <div class="carousel-container relative">
        <div class="absolute top-0 left-0 right-0 h-1 bg-black/20 rounded-full overflow-hidden z-20">
          <div class="progress-bar absolute top-0 left-0 h-full w-1/3 bg-black"></div>
        </div>

        <button class="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation" onclick="prevSlide()" title="Previous slide">
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button class="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation" onclick="nextSlide()" title="Next slide">
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <div class="carousel-track relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
          <div class="carousel-item active absolute top-0 left-0 w-full h-full">
            <div class="w-full h-full p-4 sm:p-8">
              <div class="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80" alt="Geometric art installation" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-purple-500/40 mix-blend-overlay"></div>
                <div class="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 class="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Digital Prism</h3>
                  <p class="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">Where geometry meets art in a stunning display of light and form.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item next absolute top-0 left-0 w-full h-full">
            <div class="w-full h-full p-4 sm:p-8">
              <div class="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" alt="Futuristic tech setup" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 to-pink-500/40 mix-blend-overlay"></div>
                <div class="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 class="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Tech Haven</h3>
                  <p class="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">Immerse yourself in the cutting edge of technology and innovation.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item hidden absolute top-0 left-0 w-full h-full">
            <div class="w-full h-full p-4 sm:p-8">
              <div class="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80" alt="Abstract digital art" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-br from-pink-500/40 to-rose-500/40 mix-blend-overlay"></div>
                <div class="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 class="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Neural Dreams</h3>
                  <p class="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">AI-generated masterpieces that blur the line between human and machine creativity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
          <button class="w-8 sm:w-12 h-1 sm:h-1.5 rounded-full bg-white/40 hover:bg-white/60 transition-colors" title="Go to slide 1"></button>
          <button class="w-8 sm:w-12 h-1 sm:h-1.5 rounded-full bg-white/20 hover:bg-white/60 transition-colors" title="Go to slide 2"></button>
          <button class="w-8 sm:w-12 h-1 sm:h-1.5 rounded-full bg-white/20 hover:bg-white/60 transition-colors" title="Go to slide 3"></button>
        </div>
      </div>

      <div class="flex justify-center mb-10">
        <a href="products.php" class="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition shadow-lg">
          View All Products
        </a>
      </div>
    </div>
  </section>

    <?php include 'components/footer.php'; ?>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js"></script>
  <script src="js/form-validation-utils.js"></script>
  <script src="js/modal-utils.js"></script>
  <script src="js/login.js"></script>
  <script src="js/createaccount.js"></script>
  <script src="js/carousel.js"></script>
  <script src="js/mobile-menu.js"></script>

  <script>
    const elements = document.querySelectorAll('.scroll-fade-up, .scroll-fade');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
  </script>

</body>
</html>
