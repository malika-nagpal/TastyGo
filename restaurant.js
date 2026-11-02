// Restaurant Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        // Update UI for logged in user
        const authButtons = document.querySelector('.auth-buttons');
        const userMenu = document.querySelector('.user-menu');
        
        if (authButtons && userMenu) {
            authButtons.style.display = 'none';
            userMenu.style.display = 'flex';
            
            const userNameElement = userMenu.querySelector('.user-name');
            if (userNameElement) {
                userNameElement.textContent = currentUser.name;
            }
        }
    }
    
    // Get restaurant ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(urlParams.get('id'));
    
    if (!restaurantId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Load restaurant data
    loadRestaurantData(restaurantId);
    
    // Initialize cart
    initializeCart();
});

// Sample restaurant data (in a real app, this would come from an API)
const restaurants = [
    {
        id: 1,
        name: "Burger Palace",
        image: "assets/images/burger-palace.jpg",
        rating: 4.7,
        deliveryTime: 25,
        categories: ["Burgers", "Fast Food", "American"],
        menu: [
            {
                category: "Burgers",
                items: [
                    {
                        id: 101,
                        name: "Classic Burger",
                        description: "Beef patty, lettuce, tomato, onion, pickles, and our special sauce",
                        price: 7.99,
                        image: "assets/images/classic-burger.jpg"
                    },
                    {
                        id: 102,
                        name: "Cheeseburger",
                        description: "Beef patty, American cheese, lettuce, tomato, onion, pickles, and our special sauce",
                        price: 8.99,
                        image: "assets/images/cheeseburger.jpg"
                    },
                    {
                        id: 103,
                        name: "Bacon Burger",
                        description: "Beef patty, bacon, American cheese, lettuce, tomato, onion, and our special sauce",
                        price: 9.99,
                        image: "assets/images/bacon-burger.jpg"
                    }
                ]
            },
            {
                category: "Sides",
                items: [
                    {
                        id: 201,
                        name: "French Fries",
                        description: "Crispy golden fries seasoned with salt",
                        price: 3.99,
                        image: "assets/images/fries.jpg"
                    },
                    {
                        id: 202,
                        name: "Onion Rings",
                        description: "Crispy battered onion rings",
                        price: 4.99,
                        image: "assets/images/onion-rings.jpg"
                    }
                ]
            },
            {
                category: "Drinks",
                items: [
                    {
                        id: 301,
                        name: "Soda",
                        description: "Choice of Coke, Diet Coke, Sprite, or Dr. Pepper",
                        price: 1.99,
                        image: "assets/images/soda.jpg"
                    },
                    {
                        id: 302,
                        name: "Milkshake",
                        description: "Vanilla, chocolate, or strawberry",
                        price: 4.99,
                        image: "assets/images/milkshake.jpg"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Taco Fiesta",
        image: "assets/images/taco-fiesta.jpg",
        rating: 4.3,
        deliveryTime: 20,
        categories: ["Mexican", "Fast Food"],
        menu: [
            {
                category: "Tacos",
                items: [
                    {
                        id: 401,
                        name: "Beef Taco",
                        description: "Seasoned ground beef, lettuce, cheese, and pico de gallo in a corn tortilla",
                        price: 3.99,
                        image: "assets/images/beef-taco.jpg"
                    },
                    {
                        id: 402,
                        name: "Chicken Taco",
                        description: "Grilled chicken, lettuce, cheese, and pico de gallo in a corn tortilla",
                        price: 3.99,
                        image: "assets/images/chicken-taco.jpg"
                    }
                ]
            },
            {
                category: "Burritos",
                items: [
                    {
                        id: 501,
                        name: "Beef Burrito",
                        description: "Seasoned ground beef, rice, beans, cheese, and pico de gallo wrapped in a flour tortilla",
                        price: 8.99,
                        image: "assets/images/beef-burrito.jpg"
                    },
                    {
                        id: 502,
                        name: "Chicken Burrito",
                        description: "Grilled chicken, rice, beans, cheese, and pico de gallo wrapped in a flour tortilla",
                        price: 8.99,
                        image: "assets/images/chicken-burrito.jpg"
                    }
                ]
            }
        ]
    }
];

// Load restaurant data
function loadRestaurantData(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    
    if (!restaurant) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title
    document.title = `${restaurant.name} - FoodDash`;
    
    // Update restaurant info
    document.getElementById('restaurant-image').src = restaurant.image;
    document.getElementById('restaurant-image').alt = restaurant.name;
    document.getElementById('restaurant-name').textContent = restaurant.name;
    document.getElementById('restaurant-rating').textContent = restaurant.rating;
    document.getElementById('restaurant-delivery-time').textContent = restaurant.deliveryTime;
    
    // Update categories
    const categoriesContainer = document.getElementById('restaurant-categories');
    categoriesContainer.innerHTML = '';
    
    restaurant.categories.forEach(category => {
        const categoryTag = document.createElement('span');
        categoryTag.className = 'category-tag';
        categoryTag.textContent = category;
        categoriesContainer.appendChild(categoryTag);
    });
    
    // Update favorite button
    const favoriteBtn = document.querySelector('.favorite-btn');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser && currentUser.favorites && currentUser.favorites.includes(restaurantId)) {
        favoriteBtn.classList.add('active');
    }
    
    favoriteBtn.addEventListener('click', () => {
        if (!currentUser) {
            alert('Please log in to add favorites.');
            return;
        }
        
        if (!currentUser.favorites) {
            currentUser.favorites = [];
        }
        
        const index = currentUser.favorites.indexOf(restaurantId);
        
        if (index === -1) {
            // Add to favorites
            currentUser.favorites.push(restaurantId);
            favoriteBtn.classList.add('active');
        } else {
            // Remove from favorites
            currentUser.favorites.splice(index, 1);
            favoriteBtn.classList.remove('active');
        }
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    });
    
    // Load menu
    loadMenu(restaurant);
}

// Load menu
function loadMenu(restaurant) {
    const menuNav = document.querySelector('.menu-nav');
    const menuItems = document.querySelector('.menu-items');
    
    menuNav.innerHTML = '';
    menuItems.innerHTML = '';
    
    // Create menu navigation
    restaurant.menu.forEach((section, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'menu-nav-item';
        if (index === 0) navItem.classList.add('active');
        navItem.textContent = section.category;
        navItem.dataset.category = section.category;
        
        navItem.addEventListener('click', () => {
            // Update active nav item
            document.querySelectorAll('.menu-nav-item').forEach(item => {
                item.classList.remove('active');
            });
            navItem.classList.add('active');
            
            // Scroll to category
            const categoryElement = document.getElementById(`category-${section.category}`);
            if (categoryElement) {
                categoryElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        menuNav.appendChild(navItem);
    });
    
    // Create menu items
    restaurant.menu.forEach(section => {
        const categorySection = document.createElement('div');
        categorySection.className = 'menu-category';
        categorySection.id = `category-${section.category}`;
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = section.category;
        categorySection.appendChild(categoryTitle);
        
        const categoryItems = document.createElement('div');
        categoryItems.className = 'menu-items';
        
        section.items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                <div class="menu-item-info">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-price">$${item.price.toFixed(2)}</div>
                    <button class="add-to-cart" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
                </div>
            `;
            
            categoryItems.appendChild(menuItem);
        });
        
        categorySection.appendChild(categoryItems);
        menuItems.appendChild(categorySection);
    });
    
    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemId = parseInt(button.dataset.id);
            const itemName = button.dataset.name;
            const itemPrice = parseFloat(button.dataset.price);
            
            addToCart(itemId, itemName, itemPrice);
        });
    });
}

// Initialize cart
function initializeCart() {
    // Check if cart exists in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart UI
    updateCartUI(cart);
    
    // Add event listener to checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
}

// Add item to cart
function addToCart(itemId, itemName, itemPrice) {
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === itemId);
    
    if (existingItemIndex !== -1) {
        // Increment quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item
        cart.push({
            id: itemId,
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    updateCartUI(cart);
}

// Update cart UI
function updateCartUI(cart) {
    const cartItems = document.querySelector('.cart-items');
    const emptyCart = document.querySelector('.empty-cart');
    const subtotalElement = document.querySelector('.subtotal');
    const taxElement = document.querySelector('.tax');
    const totalElement = document.querySelector('.total-amount');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    if (cart.length === 0) {
        // Show empty cart message
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <p>Add items to get started</p>
            </div>
        `;
        
        // Update totals
        subtotalElement.textContent = '$0.00';
        taxElement.textContent = '$0.00';
        totalElement.textContent = '$0.00';
        
        // Disable checkout button
        checkoutBtn.disabled = true;
    } else {
        // Hide empty cart message
        cartItems.innerHTML = '';
        
        // Add cart items
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Calculate tax and total
        const tax = subtotal * 0.0825; // 8.25% tax rate
        const deliveryFee = 2.99;
        const total = subtotal + tax + deliveryFee;
        
        // Update totals
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        taxElement.textContent = `$${tax.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
        
        // Enable checkout button
        checkoutBtn.disabled = false;
        
        // Add event listeners to quantity buttons
        const decreaseButtons = document.querySelectorAll('.quantity-btn.decrease');
        const increaseButtons = document.querySelectorAll('.quantity-btn.increase');
        
        decreaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = parseInt(button.dataset.id);
                updateCartItemQuantity(itemId, -1);
            });
        });
        
        increaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = parseInt(button.dataset.id);
                updateCartItemQuantity(itemId, 1);
            });
        });
    }
}

// Update cart item quantity
function updateCartItemQuantity(itemId, change) {
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Find item index
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        // Update quantity
        cart[itemIndex].quantity += change;
        
        // Remove item if quantity is 0
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        
        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart UI
        updateCartUI(cart);
    }
} 