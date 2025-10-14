<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Octagon - Home</title>
  <link rel="icon" href="img/icon.png" type="image/x-icon" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</head>
<body>

  <!-- NAVBAR -->
  <nav>
    <header
      class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg transition-all duration-300">
      <div class="px-4">
        <div class="flex items-center justify-between">
          <div class="flex shrink-0">
            <a href="index.php" class="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" class="h-7 w-7 text-blue-600 animate-pulse">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7.86 2h8.28l5.86 5.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z" />
              </svg>
              <span class="text-lg font-semibold text-gray-900">Octagon</span>
            </a>
          </div>

          <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="index.php">Home</a>
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="products.php">Products</a>
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="about.php">About</a>
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="contact.php">Contact</a>
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200"
              href="cart.php">🛒 Cart</a>
          </div>

          <div class="flex items-center justify-end gap-3">
            <button id="signupBtn" type="button"
              class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-50 sm:inline-flex">
              Sign up
            </button>

            <button id="loginBtn" type="button"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  </nav>

  <main style="margin-top: 56px;">
    <section class="bg-dark text-white py-5 mb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 animate__animated animate__fadeIn animate__delay-.5s">
            <h1 class="display-4 fw-bold mb-4">Our Story</h1>
            <p class="lead mb-4">
              Transforming online shopping with innovative solutions and exceptional customer experiences since 2020.
            </p>
            <a href="products.html" class="btn btn-primary btn-lg animate__animated animate__pulse animate__delay-.5s mb-3">
              Explore Our Products
            </a>
          </div>
          <div class="col-lg-6 animate__animated animate__fadeIn animate__delay-.5s">
            <div style="aspect-ratio: 3/2; background-color: #f8f9fa;" class="rounded-3 overflow-hidden">
              <img
                src="./img/laptop-shopping-bags-online-shopping-concept.jpg"
                class="img-fluid rounded-3 shadow-lg w-100 h-100"
                style="object-fit: cover;"
                alt="Team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-5 animate__animated animate__fadeInUp animate__delay-.5s">Our Core Values</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
              <div class="card-body text-center p-4">
                <div class="display-4 text-primary mb-3 animate__animated animate__bounceIn" style="animation-delay: 0.6s">
                  <i class="bi bi-shield-check"></i>
                </div>
                <h3 class="h4 mb-3">Quality First</h3>
                <p class="text-muted">We ensure every product meets our high standards of quality and performance.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
              <div class="card-body text-center p-4">
                <div class="display-4 text-primary mb-3 animate__animated animate__bounceIn" style="animation-delay: 0.7s">
                  <i class="bi bi-heart"></i>
                </div>
                <h3 class="h4 mb-3">Customer Focus</h3>
                <p class="text-muted">Your satisfaction is our priority. We're here to serve and support you.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100 animate__animated animate__fadeInUp" style="animation-delay: 0.5s">
              <div class="card-body text-center p-4">
                <div class="display-4 text-primary mb-3 animate__animated animate__bounceIn" style="animation-delay: 0.8s">
                  <i class="bi bi-globe"></i>
                </div>
                <h3 class="h4 mb-3">Sustainability</h3>
                <p class="text-muted">Committed to eco-friendly practices and sustainable business operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light animate__animated animate__fadeIn animate__delay-2s">
      <div class="container">
        <h2 class="text-center mb-5">Meet Our Team</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card border-0 shadow-sm">
              <div class="ratio ratio-1x1">
                <img src="./img/cat pfp -csgo.jpg" class="object-fit-cover" alt="CEO" />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title mb-1">Carl Rubia</h5>
                <p class="text-muted mb-3">Lead Developer</p>
                <div class="d-flex justify-content-center gap-2">
                  <a href="#" class="btn btn-outline-primary btn-sm"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="btn btn-outline-primary btn-sm"><i class="bi bi-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-0 shadow-sm">
              <div class="ratio ratio-1x1">
                <img src="./img/Wonyoung ♡.jpg" class="object-fit-cover" alt="CTO" />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title mb-1">Jang Wonyoung</h5>
                <p class="text-muted mb-3">Chief Technology Officer</p>
                <div class="d-flex justify-content-center gap-2">
                  <a href="#" class="btn btn-outline-primary btn-sm"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="btn btn-outline-primary btn-sm"><i class="bi bi-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-0 shadow-sm">
              <div class="ratio ratio-1x1">
                <img src="./img/⠀⃝˚✶𓂂 ˳ׄ  𓂂.jpg" class="object-fit-cover" alt="Designer" />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title mb-1">Karina</h5>
                <p class="text-muted mb-3">Lead Designer</p>
                <div class="d-flex justify-content-center gap-2">
                  <a href="#" class="btn btn-outline-primary btn-sm"><i class="bi bi-linkedin"></i></a>
                  <a href="#" class="btn btn-outline-primary btn-sm"><i class="bi bi-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-dark text-white text-center py-3">
    <p class="mb-0">© 2025 E-Shop. Your trusted online shopping destination.</p>
  </footer>

  <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js"></script>
  <script src="./js/login.js"></script>
  <script src="./js/createaccount.js"></script>
</body>
</html>