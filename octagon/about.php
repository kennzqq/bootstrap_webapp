<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Octagon - About</title>
  <link rel="icon" href="img/icon.png" type="image/x-icon" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <style>
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .animate-slideInLeft {
      animation: slideInLeft 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .animate-slideInRight {
      animation: slideInRight 0.8s ease-out forwards;
      opacity: 0;
    }
    
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
  </style>
</head>
<body class="overflow-x-hidden">

  <?php include 'components/navbar.php'; ?>

  <div class="bg-gradient-to-r from-gray-900 to-blue-900 h-20"></div>

    <header class="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-18">
        <div class="container mx-auto px-6 text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">About Octagon</h1>
            <p class="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fadeInUp delay-200">Where innovation meets everyday essentials to enhance your lifestyle</p>
        </div>
    </header>

    <main class="container mx-auto px-6 py-16">
        <section class="mb-20">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="md:w-1/2 animate-slideInLeft">
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <p class="text-gray-700 mb-4">Octagon was founded with a vision to make premium tech and lifestyle products accessible to everyone. We believe that quality shouldn't be compromised for affordability, and innovation should enhance every aspect of daily life.</p>
                    <p class="text-gray-700 mb-4">Today, we're recognized as a trusted e-commerce platform, offering curated products from top brands across smartphones, laptops, audio equipment, and lifestyle accessories. Our commitment to authenticity and customer satisfaction sets us apart.</p>
                    <p class="text-gray-700">Our name, Octagon, represents the eight core values we uphold: Quality, Innovation, Trust, Accessibility, Speed, Support, Authenticity, and Excellence.</p>
                </div>
                <div class="md:w-1/2 animate-slideInRight delay-200">
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Octagon E-Commerce" class="rounded-lg shadow-xl w-full h-auto">
                </div>
            </div>
        </section>

        <section class="bg-gray-100 rounded-xl p-12 mb-20 animate-fadeInUp delay-300">
            <div class="text-center max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p class="text-xl text-gray-700 mb-8">"To empower people with innovative technology and lifestyle products that enhance their daily experiences while maintaining trust, quality, and exceptional service."</p>
                <div class="flex flex-wrap justify-center gap-8">
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-blue-600 mb-4">
                            <i class="bi bi-shield-check text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-gray-900 mb-2">100% Authentic</h3>
                        <p class="text-gray-600">Every product is verified for authenticity before shipping to you.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-blue-600 mb-4">
                            <i class="bi bi-lightning-charge text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-gray-900 mb-2">Fast Delivery</h3>
                        <p class="text-gray-600">Quick and reliable shipping to get your products to you faster.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-blue-600 mb-4">
                            <i class="bi bi-headset text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-gray-900 mb-2">24/7 Support</h3>
                        <p class="text-gray-600">Our dedicated team is always ready to assist you anytime, anywhere.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-20">
            <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="./img/cat pfp -csgo.jpg" alt="Carl Rubia" class="w-full h-120 object-cover">
                    <div class="p-6 text-center">
                        <h3 class="font-bold text-xl text-gray-900 mb-1">Carl Rubia</h3>
                        <p class="text-blue-600 font-medium mb-3">Lead Developer</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="./img/Wonyoung ♡.jpg" alt="Jang Wonyoung" class="w-full h-120 object-cover">
                    <div class="p-6 text-center">
                        <h3 class="font-bold text-xl text-gray-900 mb-1">Jang Wonyoung</h3>
                        <p class="text-blue-600 font-medium mb-3">Chief Technology Officer</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="./img/⠀⃝˚✶𓂂 ˳ׄ  𓂂.jpg" alt="Karina" class="w-full h-120 object-cover">
                    <div class="p-6 text-center">
                        <h3 class="font-bold text-xl text-gray-900 mb-1">Karina</h3>
                        <p class="text-blue-600 font-medium mb-3">Lead Designer</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-gray-900 text-white rounded-xl p-12 mb-10">
            <h2 class="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div class="text-5xl font-bold text-blue-400 mb-2">50K+</div>
                    <div class="text-gray-300">Happy Customers</div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-blue-400 mb-2">1000+</div>
                    <div class="text-gray-300">Products Available</div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-blue-400 mb-2">24/7</div>
                    <div class="text-gray-300">Customer Support</div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-blue-400 mb-2">99%</div>
                    <div class="text-gray-300">Satisfaction Rate</div>
                </div>
            </div>
        </section>
    </main>

  <?php include 'components/footer.php'; ?>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js"></script>
  <script src="./js/form-validation-utils.js"></script>
  <script src="./js/modal-utils.js"></script>
  <script src="./js/login.js"></script>
  <script src="./js/createaccount.js"></script>
  <script src="./js/mobile-menu.js"></script>
</body>
</html>