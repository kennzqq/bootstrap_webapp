// Products Filter and Search Functionality
let allProducts = [];
let currentCategory = null;

// Load products from JSON
async function loadProducts() {
  try {
    const response = await fetch('products.json');
    allProducts = await response.json();
    displayProducts(allProducts);
  } catch (error) {
    console.error('Error loading products:', error);
    document.getElementById('noResults').classList.remove('hidden');
  }
}

// Display products
function displayProducts(products) {
  const productsGrid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  
  if (!productsGrid) return;
  
  if (products.length === 0) {
    productsGrid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }
  
  noResults.classList.add('hidden');
  
  productsGrid.innerHTML = products.map(product => `
    <div class="flex flex-col border border-gray-300 shadow-sm rounded-md p-1.5 transition-all relative overflow-hidden hover:shadow-lg">
      <a href="javascript:void(0)" class="block">
        <div class="w-full bg-slate-50">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" 
               alt="${product.name}" 
               class="w-full aspect-square object-cover object-center" />
        </div>
        <div class="py-4 px-2 text-left">
          <h6 class="text-sm sm:text-[15px] font-semibold text-slate-900 line-clamp-2">${product.name}</h6>
          <p class="text-xs text-gray-500 mt-1">${product.category}</p>
          <div class="flex items-center gap-1 mt-2">
            ${generateStars(4)}
            <span class="ml-1.5 text-sm font-medium">(${Math.floor(Math.random() * 100) + 20})</span>
          </div>
          <div class="mt-4">
            <p class="text-slate-900 font-semibold text-sm sm:text-[15px] break-words">
              <span class="mr-1.5">Price:</span>$${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </a>
      <div class="h-[78px]">
        <div class="flex flex-col items-center w-full absolute left-0 right-0 px-2 bottom-3">
          <button type="button"
            class="flex items-center justify-center gap-2 px-2 py-2 cursor-pointer rounded-md text-white text-sm sm:text-[15px] font-medium whitespace-nowrap border-0 outline-0 w-full bg-purple-700 hover:bg-purple-800 transition-all">
            Add to Bag
          </button>
          <button type="button" class="pb-0.5 pt-3 cursor-pointer text-sm sm:text-[15px] text-slate-900 font-medium whitespace-nowrap outline-0 flex items-center gap-2 hover:text-purple-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" width="16px" height="16px" viewBox="0 0 66 66">
              <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" fill="currentColor">
              </path>
            </svg>
            <span>Add to wishlist</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Generate star rating HTML
function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars += `<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" width="14" height="14" viewBox="0 0 511.987 511">
        <path fill="#ffc107" d="M510.652 195.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77c-4.31-10.023-14.122-16.509-25.024-16.509s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 0 0-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0"></path>
      </svg>`;
    } else {
      stars += `<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" width="14" height="14" fill="#ffc107" viewBox="0 0 511.987 511">
        <path d="M114.594 501.14c-5.61 0-11.18-1.75-15.934-5.187a27.223 27.223 0 0 1-10.582-28.094l32.938-145.09L9.312 224.81a27.188 27.188 0 0 1-7.976-28.907 27.208 27.208 0 0 1 23.402-18.71l147.797-13.419L230.97 27.027c4.307-10.047 14.119-16.535 25.022-16.535s20.715 6.488 25.024 16.512l58.433 136.77 147.774 13.417c10.882.98 20.054 8.344 23.425 18.711 3.372 10.368.254 21.739-7.957 28.907L390.988 322.75l32.938 145.086c2.414 10.668-1.727 21.7-10.578 28.098-8.832 6.398-20.61 6.89-29.91 1.3l-127.446-76.16-127.445 76.203c-4.309 2.559-9.11 3.864-13.953 3.864zm141.398-112.874c4.844 0 9.64 1.3 13.953 3.859l120.278 71.938-31.086-136.942a27.21 27.21 0 0 1 8.62-26.516l105.473-92.5-139.543-12.671a27.18 27.18 0 0 1-22.613-16.493L255.992 49.895 200.844 178.96c-3.883 9.195-12.524 15.512-22.547 16.43L38.734 208.062l105.47 92.5c7.554 6.614 10.858 16.77 8.62 26.54l-31.062 136.937 120.277-71.914c4.309-2.559 9.11-3.86 13.953-3.86zm-84.586-221.848s0 .023-.023.043zm169.13-.063.023.043c0-.023 0-.023-.024-.043zm0 0"></path>
      </svg>`;
    }
  }
  return stars;
}

// Filter products by category
function filterByCategory(category) {
  currentCategory = category;
  const filtered = category ? allProducts.filter(p => p.category === category) : allProducts;
  displayProducts(filtered);
}

// Search products
function searchProducts(searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  
  let filtered = allProducts;
  
  // Apply category filter if active
  if (currentCategory) {
    filtered = filtered.filter(p => p.category === currentCategory);
  }
  
  // Apply search filter
  if (term) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(term) || 
      p.category.toLowerCase().includes(term)
    );
  }
  
  displayProducts(filtered);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Load products
  loadProducts();
  
  // Search input real-time filtering
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchProducts(e.target.value);
    });
  }
  
  // Category selection
  const categoryItems = document.querySelectorAll('.category-item');
  categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const category = item.dataset.category;
      filterByCategory(category);
      
      // Close dropdown
      const dropdown = document.getElementById('categoryDropdown');
      if (dropdown) {
        dropdown.classList.add('hidden');
        const icon = document.getElementById('dropdownIcon');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  });
});

// Category Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
const exploreCategoryBtn = document.getElementById('exploreCategoryBtn');
const categoryDropdown = document.getElementById('categoryDropdown');
const categoryContainer = document.getElementById('categoryDropdownContainer');
const closeDropdown = document.getElementById('closeDropdown');
const dropdownIcon = document.getElementById('dropdownIcon');
const categoryItems = document.querySelectorAll('.category-item');

let isDropdownOpen = false;

function openDropdown() {
if (!isDropdownOpen) {
categoryDropdown.classList.remove('hidden');
dropdownIcon.style.transform = 'rotate(180deg)';
isDropdownOpen = true;
}
}

function closeDropdownFunc() {
categoryDropdown.classList.add('hidden');
dropdownIcon.style.transform = 'rotate(0deg)';
isDropdownOpen = false;
}

if (exploreCategoryBtn) {
exploreCategoryBtn.addEventListener('click', (e) => {
e.stopPropagation();
if (isDropdownOpen) {
closeDropdownFunc();
} else {
openDropdown();
}
});
}

if (closeDropdown) {
closeDropdown.addEventListener('click', (e) => {
e.stopPropagation();
closeDropdownFunc();
});
}

document.addEventListener('click', (e) => {
if (categoryContainer && !categoryContainer.contains(e.target)) {
closeDropdownFunc();
}
});

if (categoryDropdown) {
categoryDropdown.addEventListener('click', (e) => {
e.stopPropagation();
});
}

categoryItems.forEach(item => {
item.addEventListener('click', (e) => {
e.preventDefault();
const category = item.dataset.category;
console.log('Selected category:', category);
closeDropdownFunc();
});
});

document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && isDropdownOpen) {
closeDropdownFunc();
}
});
});