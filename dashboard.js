// Dashboard JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    // Update user name in sidebar
    const userNameElements = document.querySelectorAll('.user-name');
    userNameElements.forEach(element => {
        element.textContent = currentUser.name;
    });
    
    // Update wallet balance
    const walletBalance = document.querySelector('.wallet-balance');
    if (walletBalance) {
        walletBalance.textContent = `$${currentUser.walletBalance.toFixed(2)}`;
    }
    
    // Load order history
    loadOrderHistory();
    
    // Load favorites
    loadFavorites();
    
    // Handle tab navigation
    const navLinks = document.querySelectorAll('.dashboard-nav a');
    const sections = document.querySelectorAll('.dashboard-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the target section
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).style.display = 'block';
        });
    });
    
    // Show the first section by default
    sections.forEach((section, index) => {
        if (index === 0) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
    
    // Handle settings form submission
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            
            // Update user object
            currentUser.name = name;
            currentUser.email = email;
            currentUser.phone = phone;
            currentUser.address = address;
            
            // Save updated user to localStorage
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            // Show success message
            alert('Settings updated successfully!');
            
            // Update displayed name
            userNameElements.forEach(element => {
                element.textContent = name;
            });
        });
    }
    
    // Handle add funds button
    const addFundsBtn = document.querySelector('.add-funds-btn');
    if (addFundsBtn) {
        addFundsBtn.addEventListener('click', () => {
            const amount = prompt('Enter amount to add to your wallet:');
            if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
                // Update wallet balance
                currentUser.walletBalance += parseFloat(amount);
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                // Update displayed balance
                walletBalance.textContent = `$${currentUser.walletBalance.toFixed(2)}`;
                
                alert(`$${parseFloat(amount).toFixed(2)} added to your wallet!`);
            } else if (amount !== null) {
                alert('Please enter a valid amount.');
            }
        });
    }
    
    // Handle add payment method button
    const addPaymentBtn = document.querySelector('.add-payment-btn');
    if (addPaymentBtn) {
        addPaymentBtn.addEventListener('click', () => {
            alert('This feature is not implemented in the demo.');
        });
    }
});

// Load order history
function loadOrderHistory() {
    const orderHistory = document.querySelector('.order-history');
    if (!orderHistory) return;
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser.orders || currentUser.orders.length === 0) {
        orderHistory.innerHTML = '<p>No order history yet.</p>';
        return;
    }
    
    orderHistory.innerHTML = '';
    
    currentUser.orders.forEach(order => {
        const orderDate = new Date(order.date);
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div class="order-header">
                <h4>${order.restaurantName}</h4>
                <span class="order-date">${orderDate.toLocaleDateString()}</span>
            </div>
            <div class="order-details">
                <p>${order.items.length} item${order.items.length > 1 ? 's' : ''} • $${order.total.toFixed(2)}</p>
                <button class="reorder-btn" data-order-id="${order.id}">Reorder</button>
            </div>
        `;
        
        orderHistory.appendChild(orderItem);
    });
    
    // Add event listeners to reorder buttons
    const reorderBtns = document.querySelectorAll('.reorder-btn');
    reorderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Reorder feature is not implemented in the demo.');
        });
    });
}

// Load favorites
function loadFavorites() {
    const favorites = document.querySelector('.favorites-list');
    if (!favorites) return;
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser.favorites || currentUser.favorites.length === 0) {
        favorites.innerHTML = '<p>No favorites yet.</p>';
        return;
    }
    
    // Get restaurant data (in a real app, this would come from an API)
    const restaurants = [
        {
            id: 1,
            name: "Burger Palace",
            image: "assets/images/burger-palace.jpg",
            rating: 4.7,
            deliveryTime: 25
        },
        {
            id: 2,
            name: "Pizza Heaven",
            image: "assets/images/pizza-heaven.jpg",
            rating: 4.5,
            deliveryTime: 35
        },
        {
            id: 3,
            name: "Sushi World",
            image: "assets/images/sushi-world.jpg",
            rating: 4.8,
            deliveryTime: 40
        },
        {
            id: 4,
            name: "Taco Fiesta",
            image: "assets/images/taco-fiesta.jpg",
            rating: 4.3,
            deliveryTime: 20
        },
        {
            id: 5,
            name: "Healthy Greens",
            image: "assets/images/healthy-greens.jpg",
            rating: 4.6,
            deliveryTime: 30
        }
    ];
    
    favorites.innerHTML = '';
    
    currentUser.favorites.forEach(favId => {
        const restaurant = restaurants.find(r => r.id === favId);
        if (restaurant) {
            const favItem = document.createElement('div');
            favItem.className = 'favorite-item';
            favItem.innerHTML = `
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <div class="favorite-info">
                    <h4>${restaurant.name}</h4>
                    <p>★ ${restaurant.rating} • ${restaurant.deliveryTime} min</p>
                </div>
            `;
            
            favItem.addEventListener('click', () => {
                window.location.href = `restaurant.html?id=${restaurant.id}`;
            });
            
            favorites.appendChild(favItem);
        }
    });
} 