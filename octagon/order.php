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
              href="order.php">📦 Order</a>
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

    <section class="mt-15">
    <div class="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
        <div class="data">
          <p class="font-semibold text-base leading-7 text-black">
            Order Id: <span class="text-indigo-600 font-medium">#10234987</span>
          </p>
          <p class="font-semibold text-base leading-7 text-black mt-4">
            Order Payment :
            <span class="text-gray-400 font-medium">18th March 2021</span>
          </p>
        </div>

        <button
          id="openCartBtn"
          class="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"
        >
          🛒 Cart
        </button>
      </div>

      <!-- PRODUCT LIST -->
      <div class="w-full px-3 min-[400px]:px-6">

        <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
          <div class="img-box max-lg:w-full">
            <img
              src="https://pagedone.io/asset/uploads/1701167607.png"
              alt="Premium Watch image"
              class="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover"
            />
          </div>

          <div class="flex flex-row items-center w-full">
            <div class="grid grid-cols-1 lg:grid-cols-2 w-full">

              <div class="flex items-center">
                <div>
                  <h2 class="font-semibold text-xl leading-8 text-black mb-3">Premium Quality Dust Watch</h2>
                  <p class="font-normal text-lg leading-8 text-gray-500 mb-3">Shop Name</p>

                  <div class="flex items-center">
                    <p class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                      Size: <span class="text-gray-500">100 ml</span>
                    </p>
                    <p class="font-medium text-base leading-7 text-black">
                      Qty: <span class="text-gray-500">2</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-5">
                <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                  <div class="flex gap-3 lg:block">
                    <p class="font-medium text-sm leading-7 text-black">Price</p>
                    <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">$100</p>
                  </div>
                </div>

                <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                  <div class="flex gap-3 lg:block">
                    <p class="font-medium text-sm leading-7 text-black">Status</p>
                    <p
                      class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600"
                    >
                      Ready for Delivery
                    </p>
                  </div>
                </div>

                <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                  <div class="flex gap-3 lg:block">
                    <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">Expected Delivery Time</p>
                    <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                      23rd March 2021
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row items-center py-6 gap-6 w-full">
          <div class="img-box max-lg:w-full">
            <img
              src="https://pagedone.io/asset/uploads/1701167621.png"
              alt="Diamond Watch image"
              class="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover"
            />
          </div>

          <div class="flex flex-row items-center w-full">
            <div class="grid grid-cols-1 lg:grid-cols-2 w-full">

              <div class="flex items-center">
                <div>
                  <h2 class="font-semibold text-xl leading-8 text-black mb-3">Diamond Platinum Watch</h2>
                  <p class="font-normal text-lg leading-8 text-gray-500 mb-3">Shop Name</p>

                  <div class="flex items-center">
                    <p class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                      Size: <span class="text-gray-500">Regular</span>
                    </p>
                    <p class="font-medium text-base leading-7 text-black">
                      Qty: <span class="text-gray-500">1</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-5">
                <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                  <div class="flex gap-3 lg:block">
                    <p class="font-medium text-sm leading-7 text-black">Price</p>
                    <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">$100</p>
                  </div>
                </div>

                <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                  <div class="flex gap-3 lg:block">
                    <p class="font-medium text-sm leading-7 text-black">Status</p>
                    <p
                      class="font-medium text-sm leading-6 py-0.5 px-3 whitespace-nowrap rounded-full lg:mt-3 bg-indigo-50 text-indigo-600"
                    >
                      Dispatched
                    </p>
                  </div>
                </div>

                <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                  <div class="flex gap-3 lg:block">
                    <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">Expected Delivery Time</p>
                    <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                      23rd March 2021
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div class="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between">
        <div class="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
          <button
            class="flex outline-0 py-6 sm:pr-6 sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600"
          >
            <svg
              class="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5" stroke-width="1.6" stroke-linecap="round" />
            </svg>
            Cancel Order
          </button>
          <p class="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
            Paid using Credit Card <span class="text-gray-500">ending with 8822</span>
          </p>
        </div>

        <p class="font-semibold text-lg text-black py-6">
          Total Price: <span class="text-indigo-600">$200.00</span>
        </p>
      </div>

    </div>
  </section>


      <!-- FOOTER SECTION -->
  <section class="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
              <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
  
                  <p class="font-bold text-2xl">Octagon</p>

                    <p class="text-base leading-relaxed text-gray-600 mt-7">Octagon brings you the latest in tech and lifestyle essentials, curated for innovation and everyday style. Shop authentic products, enjoy fast delivery, and experience trusted customer support.</p>

                  <ul class="flex items-center space-x-3 mt-9">
                      <li>
                          <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                  <path
                                      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                  ></path>
                              </svg>
                          </a>
                      </li>

                      <li>
                          <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                              </svg>
                          </a>
                      </li>

                      <li>
                          <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                  <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                  <path
                                      d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                  ></path>
                              </svg>
                          </a>
                      </li>

                      <li>
                          <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                  <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                  ></path>
                              </svg>
                          </a>
                      </li>
                  </ul>
              </div>

              <div>
                  <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                  <ul class="mt-6 space-y-4">
                      <li>
                          <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                      </li>

                      <li>
                          <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
                      </li>

                      <li>
                          <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </a>
                      </li>

                      <li>
                          <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </a>
                      </li>
                  </ul>
              </div>

              <div>
                  <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                  <ul class="mt-6 space-y-4">
                      <li>
                          <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
                      </li>

                      <li>
                          <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </a>
                      </li>

                      <li>
                          <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
                      </li>

                      <li>
                          <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
                      </li>
                  </ul>
              </div>

              <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                  <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>

                  <form action="#" method="POST" class="mt-6">
                      <div>
                          <label for="email" class="sr-only">Email</label>
                          <input type="email" name="userEmail" id="userEmail" placeholder="Enter your email" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                      </div>

                      <button type="submit" class="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Subscribe</button>
                  </form>
              </div>
          </div>

          <hr class="mt-16 mb-10 border-gray-200" />

          <p class="text-sm text-center text-gray-600">© Copyright 2025, All Rights Reserved by Octagon</p>
      </div>
  </section>
                                            

  

    <footer class="bg-dark text-white text-center py-3">
      <p class="mb-0">© 2025 E-Shop. Your trusted online shopping destination.</p>
    </footer>

    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js"></script>
    <script src="./js/login.js"></script>
    <script src="./js/createaccount.js"></script>
    <script src="js/cartModal.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        insertCartModal();
      });
    </script>
</body>
</html>