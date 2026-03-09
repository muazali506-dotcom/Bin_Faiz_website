const products = {
    mens: [
        { id: 'm1', name: 'Oud Majesty', brand: 'Bin Faiz Exclusive', description: 'Deep aged oud.', originalPrice: 15000, price: 13500, image: 'perfume-1.jpg' },
        { id: 'm2', name: 'Chronograph Prestige', brand: 'Bin Faiz Timepieces', description: 'Automatic movement.', originalPrice: 85000, price: 76500, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400' },
    { id: 'm3', name: 'Midnight Citrus', brand: 'Bin Faiz Exclusive', description: 'Zesty bergamot.', originalPrice: 12000, price: 10800, image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=400' }
    ],
    womens: [
        { id: 'w1', name: 'Rose Elixir', brand: 'Bin Faiz Exclusive', description: 'Damascus rose.', originalPrice: 18000, price: 16200, image: 'https://images.unsplash.com/photo-1594035915195-5eecfa402092?auto=format&fit=crop&q=80&w=400' },
    { id: 'w2', name: 'The Minimalist Noir', brand: 'Bin Faiz Timepieces', description: 'Ultra-thin profile.', originalPrice: 65000, price: 58500, image: 'https://images.unsplash.com/photo-1526178619779-22d1f4a9a7d5?auto=format&fit=crop&q=80&w=400' },
        { id: 'w3', name: 'Diamond Bezel', brand: 'Bin Faiz Timepieces', description: 'Elegant luxury.', originalPrice: 120000, price: 108000, image: 'https://images.unsplash.com/photo-1542496658-e33a595180f9?auto=format&fit=crop&q=80&w=400' }
    ],
    kids: [
    { id: 'k1', name: 'Fairy Tale Scent', brand: 'Bin Faiz Kids', description: 'Sweet and gentle.', originalPrice: 5000, price: 4500, image: 'https://images.unsplash.com/photo-1523473827532-6b9f6a8b8b6f?auto=format&fit=crop&q=80&w=400' },
        { id: 'k2', name: 'Hero Cologne', brand: 'Bin Faiz Kids', description: 'Fresh and energetic.', originalPrice: 5500, price: 4950, image: 'https://images.unsplash.com/photo-1512777576244-b846ac3d816f?auto=format&fit=crop&q=80&w=400' }
    ],
    clothing: [
        { id: 'c1', name: 'Classic Chinos', brand: 'Bin Faiz Apparel', description: 'Comfortable fit pants.', originalPrice: 8000, price: 7200, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=400' },
        { id: 'c2', name: 'Linen Button-Down', brand: 'Bin Faiz Apparel', description: 'Breathable shirt.', originalPrice: 6000, price: 5400, image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85f98?auto=format&fit=crop&q=80&w=400' }
    ],
    shoes: [
        { id: 's1', name: 'Leather Loafers', brand: 'Bin Faiz Footwear', description: 'Premium leather.', originalPrice: 15000, price: 13500, image: 'https://images.unsplash.com/photo-1614252235316-8badfccdbfa0?auto=format&fit=crop&q=80&w=400' }
    ],
    jewellery: [
        { id: 'j1', name: 'Gold Pendant', brand: 'Bin Faiz Jewels', description: '24k gold design.', originalPrice: 45000, price: 40500, image: 'https://images.unsplash.com/photo-1599643478514-4a420804ce15?auto=format&fit=crop&q=80&w=400' }
    ],
    electronics: [
        { id: 'e1', name: 'iPhone 15 Pro Max', brand: 'Apple (Latest)', description: 'Titanium design.', originalPrice: 450000, price: 405000, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400' },
        { id: 'e2', name: 'iPhone 13', brand: 'Apple (Previous)', description: 'Classic design.', originalPrice: 200000, price: 180000, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400' },
        { id: 'e3', name: 'MacBook Air M2', brand: 'Apple (Latest)', description: 'Supercharged by M2.', originalPrice: 320000, price: 288000, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400' }
    ]
};

let cart = [];

// DOM Elements
const mensGrid = document.getElementById('mensGrid');
const womensGrid = document.getElementById('womensGrid');
const kidsGrid = document.getElementById('kidsGrid');
const clothingGrid = document.getElementById('clothingGrid');
const shoesGrid = document.getElementById('shoesGrid');
const jewelleryGrid = document.getElementById('jewelleryGrid');
const electronicsGrid = document.getElementById('electronicsGrid');

const cartToggle = document.getElementById('cartToggle');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalValue = document.getElementById('cartTotalValue');
const cartBadge = document.getElementById('cartBadge');
const checkoutBtn = document.getElementById('checkoutBtn');

// Initialize
function init() {
    if (mensGrid) renderProducts(products.mens, mensGrid);
    if (womensGrid) renderProducts(products.womens, womensGrid);
    if (kidsGrid) renderProducts(products.kids, kidsGrid);
    if (clothingGrid) renderProducts(products.clothing, clothingGrid);
    if (shoesGrid) renderProducts(products.shoes, shoesGrid);
    if (jewelleryGrid) renderProducts(products.jewellery, jewelleryGrid);
    if (electronicsGrid) renderProducts(products.electronics, electronicsGrid);

    setupEventListeners();
    updateCartUI();
}

function renderProducts(productArray, container) {
    container.innerHTML = productArray.map(p => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${p.image}" alt="${p.name}" class="product-image" onerror="this.src='https://images.unsplash.com/photo-1594035915195-5eecfa402092?auto=format&fit=crop&q=80&w=400';">
            </div>
            <div class="product-info">
                <div class="product-brand">${p.brand}</div>
                <h3 class="product-name">${p.name}</h3>
                <p class="product-desc">${p.description}</p>
                <div class="product-price-row">
                    <span class="price-original">Rs. ${p.originalPrice.toLocaleString()}</span>
                    <span class="price-discounted">Rs. ${p.price.toLocaleString()}</span>
                </div>
                <button class="btn btn-primary add-to-cart-btn" onclick="addToCart('${p.id}')">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function setupEventListeners() {
    cartToggle.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', processCheckout);
}

// Cart Logic
function addToCart(productId) {
    const allProducts = Object.values(products).flat();
    const product = allProducts.find(p => p.id === productId);

    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
        openCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;

    // Render Items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
    } else {
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1594035915195-5eecfa402092?auto=format&fit=crop&q=80&w=100';">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">Rs. ${(item.price * item.quantity).toLocaleString()}</div>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                        </div>
                        <button class="remove-item" onclick="removeFromCart('${item.id}')">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update Total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalValue.textContent = `Rs. ${total.toLocaleString()}`;
}

function openCart() {
    cartOverlay.classList.add('active');
    cartDrawer.classList.add('active');
}

function closeCart() {
    cartOverlay.classList.remove('active');
    cartDrawer.classList.remove('active');
}

function processCheckout() {
    if (cart.length === 0) return;

    let message = "Hello Bin Faiz! I would like to place an order:%0A%0A";

    cart.forEach(item => {
        message += `- ${item.quantity}x ${item.name} (Rs. ${(item.price * item.quantity).toLocaleString()})%0A`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `%0A*Total: Rs. ${total.toLocaleString()}*`;

    // Replace with actual WhatsApp number
    const whatsappNumber = "1234567890";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
}

// Start
document.addEventListener('DOMContentLoaded', init);
