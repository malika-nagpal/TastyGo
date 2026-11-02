// Checkout JavaScript

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
        
        // Update wallet balance
        const walletAmount = document.getElementById('wallet-amount');
        if (walletAmount) {
            walletAmount.textContent = `$${currentUser.walletBalance ? currentUser.walletBalance.toFixed(2) : '0.00'}`;
        }
    } else {
        // Redirect to login if not logged in
        window.location.href = 'login.html';
        return;
    }
    
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        // Redirect to home if cart is empty
        window.location.href = 'index.html';
        return;
    }
    
    // Load order summary
    loadOrderSummary(cart);
    
    // Handle payment method selection
    const creditCardRadio = document.getElementById('credit-card');
    const walletRadio = document.getElementById('wallet');
    const creditCardForm = document.querySelector('.credit-card-form');
    const walletPayment = document.querySelector('.wallet-payment');
    
    creditCardRadio.addEventListener('change', () => {
        creditCardForm.style.display = 'block';
        walletPayment.style.display = 'none';
    });
    
    walletRadio.addEventListener('change', () => {
        creditCardForm.style.display = 'none';
        walletPayment.style.display = 'block';
    });
    
    // Handle place order button
    const placeOrderBtn = document.querySelector('.place-order-btn');
    placeOrderBtn.addEventListener('click', placeOrder);
});

// Load order summary
function loadOrderSummary(cart) {
    const orderItems = document.querySelector('.order-items');
    const subtotalElement = document.querySelector('.subtotal');
    const taxElement = document.querySelector('.tax');
    const totalElement = document.querySelector('.total-amount');
    
    // Clear order items
    orderItems.innerHTML = '';
    
    // Calculate subtotal
    let subtotal = 0;
    
    // Add order items
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div class="order-item-name">
                <span class="order-item-quantity">${item.quantity}x</span>
                ${item.name}
            </div>
            <div class="order-item-price">$${itemTotal.toFixed(2)}</div>
        `;
        
        orderItems.appendChild(orderItem);
    });
    
    // Calculate tax and total
    const tax = subtotal * 0.0825; // 8.25% tax rate
    const deliveryFee = 2.99;
    const total = subtotal + tax + deliveryFee;
    
    // Update totals
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
    
    // Update restaurant name
    const restaurantId = cart[0].restaurantId;
    const restaurantName = document.getElementById('restaurant-name');
    
    // Get restaurant data (in a real app, this would come from an API)
    const restaurants = [
        { id: 1, name: "Burger Palace" },
        { id: 2, name: "Pizza Heaven" },
        { id: 3, name: "Sushi World" },
        { id: 4, name: "Taco Fiesta" },
        { id: 5, name: "Healthy Greens" }
    ];
    
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (restaurant) {
        restaurantName.textContent = restaurant.name;
    }
}

// Place order
function placeOrder() {
    // Get form values
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const instructions = document.getElementById('instructions').value;
    
    // Validate address
    if (!address || !city || !state || !zip) {
        alert('Please fill in all address fields.');
        return;
    }
    
    // Get payment method
    const paymentMethod = document.querySelector('input[name="payment"]:checked').id;
    
    // Validate payment details
    if (paymentMethod === 'credit-card') {
        const cardNumber = document.getElementById('card-number').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        const nameOnCard = document.getElementById('name-on-card').value;
        
        if (!cardNumber || !expiry || !cvv || !nameOnCard) {
            alert('Please fill in all credit card details.');
            return;
        }
    } else if (paymentMethod === 'wallet') {
        // Check if wallet balance is sufficient
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const totalAmount = parseFloat(document.querySelector('.total-amount').textContent.replace('$', ''));
        
        if (currentUser.walletBalance < totalAmount) {
            alert('Insufficient wallet balance. Please add funds or use a different payment method.');
            return;
        }
    }
    
    // Get cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Create order
    const order = {
        id: Date.now(),
        restaurantId: cart[0].restaurantId,
        restaurantName: document.getElementById('restaurant-name').textContent,
        date: new Date().toISOString(),
        items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        total: parseFloat(document.querySelector('.total-amount').textContent.replace('$', '')),
        address: `${address}, ${city}, ${state} ${zip}`,
        instructions: instructions,
        paymentMethod: paymentMethod
    };
    
    // Add order to user's order history
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser.orders) {
        currentUser.orders = [];
    }
    
    currentUser.orders.unshift(order);
    
    // Update wallet balance if paid with wallet
    if (paymentMethod === 'wallet') {
        currentUser.walletBalance -= order.total;
    }
    
    // Save updated user to localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Clear cart
    localStorage.removeItem('cart');
    
    // Show success message and redirect
    alert('Order placed successfully!');
    window.location.href = 'dashboard.html';
} 