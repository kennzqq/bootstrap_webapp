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
    <section class="bg-dark text-white py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center animate__animated animate__fadeIn">
            <h1 class="display-4 fw-bold mb-4 animate__animated animate__fadeInUp animate__delay-.5s">Get In Touch</h1>
            <p class="lead mb-0 animate__animated animate__fadeInUp animate__delay-1s">We'd love to hear from you. Let us know how we can help.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row animate__animated animate__fadeInUp animate__delay-1s">
          <div class="col-lg-4">
            <div class="p-4 bg-light rounded-3 shadow-sm h-100">
              <h3 class="h4 mb-4">Contact Information</h3>

              <div class="d-flex mb-4">
                <div class="flex-shrink-0 text-primary">
                  <i class="bi bi-geo-alt fs-4"></i>
                </div>
                <div class="ms-3">
                  <h4 class="h6 mb-1">Address</h4>
                  <p class="mb-0 text-muted">San Pedro, Laguna<br />Philippines</p>
                </div>
              </div>

              <div class="d-flex mb-4">
                <div class="flex-shrink-0 text-primary">
                  <i class="bi bi-envelope fs-4"></i>
                </div>
                <div class="ms-3">
                  <h4 class="h6 mb-1">Email</h4>
                  <p class="mb-0"><a href="mailto:info@eshop.com" class="text-muted">info@eshop.com</a></p>
                </div>
              </div>

              <div class="d-flex">
                <div class="flex-shrink-0 text-primary">
                  <i class="bi bi-telephone fs-4"></i>
                </div>
                <div class="ms-3">
                  <h4 class="h6 mb-1">Phone</h4>
                  <p class="mb-0"><a href="tel:+1234567890" class="text-muted">+1 (234) 567-890</a></p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="p-4 bg-white rounded-3 shadow-sm">
              <h3 class="h4 mb-4">Send us a Message</h3>
              <form id="contactForm" novalidate>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="name" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="name" name="name" />
                  </div>
                  <div class="col-md-6">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="contactEmail" name="email" />
                  </div>
                  <div class="col-12">
                    <label for="subject" class="form-label">Subject</label>
                    <input type="text" class="form-control" id="subject" name="subject" />
                  </div>
                  <div class="col-12">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" name="message" rows="5"></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light animate__animated animate__fadeIn animate__delay-2s">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="ratio ratio-21x9 rounded-3 overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61829.711597935675!2d121.0276761582031!3d14.357446499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d746509b9eb7%3A0x2e66c46faa89268c!2sLaram%2C%20San%20Pedro%2C%20Laguna%2C%20Philippines!5e0!3m2!1sen!2s!4v1696237500000!5m2!1sen!2s"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-dark text-white text-center py-3">
    <p class="mb-0">© 2025 E-Shop. Your trusted online shopping destination.</p>
  </footer>

  <!-- Contact Success Modal -->
  <div class="modal fade" id="messageSuccessModal" tabindex="-1" aria-labelledby="messageSuccessModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content border-0 shadow">
        <div class="modal-body text-center p-4">
          <div class="mb-3">
            <i class="bi bi-check-circle-fill text-success" style="font-size: 3rem;"></i>
          </div>
          <h4 class="mb-3 fw-bold">Message Sent!</h4>
          <p class="text-muted mb-4">Thank you for reaching out. We’ll get back to you shortly.</p>
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-success px-4 py-2" data-bs-dismiss="modal">
              <i class="bi bi-check2 me-2"></i>Done
            </button>
            <a href="index.html" class="btn btn-outline-primary px-4 py-2">
              <i class="bi bi-house-door me-2"></i>Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js"></script>
  <script src="./js/validation.js"></script>
  <script src="./js/login.js"></script>
  <script src="./js/createaccount.js"></script>
</body>
</html>
