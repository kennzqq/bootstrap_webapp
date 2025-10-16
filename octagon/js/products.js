export function createProductModal() {
  const modalHTML = `
  <div id="productModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 hidden">
    <div class="bg-gray-100 rounded-2xl shadow-2xl max-w-5xl w-full mx-4 overflow-y-auto max-h-[90vh] p-6 relative animate-fadeInUp">

      <!-- Close Button -->
      <button id="closeProductModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold">&times;</button>

      <div class="container mx-auto">
        <div class="flex flex-wrap -mx-4">
          <!-- Product Images -->
          <div class="w-full md:w-1/2 px-4 mb-8">
            <img id="mainImage"
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              alt="Product"
              class="w-full h-auto rounded-lg shadow-md mb-4">
            <div class="flex gap-4 py-4 justify-center overflow-x-auto">
              <img src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)">
              <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)">
              <img src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)">
              <img src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6"
                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onclick="changeImage(this.src)">
            </div>
          </div>

          <!-- Product Details -->
          <div class="w-full md:w-1/2 px-4">
            <h2 class="text-3xl font-bold mb-2">Premium Wireless Headphones</h2>
            <p class="text-gray-600 mb-4">SKU: WH1000XM4</p>
            <div class="mb-4">
              <span class="text-2xl font-bold mr-2">$349.99</span>
              <span class="text-gray-500 line-through">$399.99</span>
            </div>

            <!-- Rating -->
            <div class="flex items-center mb-4">
              ${'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="size-6 text-yellow-500"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>'.repeat(5)}
              <span class="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>

            <p class="text-gray-700 mb-6">Experience premium sound quality and industry-leading noise cancellation with these wireless headphones. Perfect for music lovers and frequent travelers.</p>

            <!-- Colors -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold mb-2">Color:</h3>
              <div class="flex space-x-2">
                <button class="w-8 h-8 bg-black rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button class="w-8 h-8 bg-gray-300 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button class="w-8 h-8 bg-blue-500 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div>
            </div>

            <!-- Quantity -->
            <div class="mb-6">
              <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
              <input type="number" id="quantity" min="1" value="1"
                class="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>

            <!-- Buttons -->
            <div class="flex space-x-4 mb-6">
              <button class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                🛒 Add to Cart
              </button>
              <button class="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                ❤️ Wishlist
              </button>
            </div>

            <!-- Features -->
            <div>
              <h3 class="text-lg font-semibold mb-2">Key Features:</h3>
              <ul class="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  // Inject into the DOM if not already added
  if (!$('#productModal').length) {
    $('body').append(modalHTML);

    // Add close modal functionality
    $('#closeProductModal').on('click', function() {
      $('#productModal').addClass('hidden');
    });
  }
}

window.changeImage = function (src) {
  $('#mainImage').attr('src', src);
};
