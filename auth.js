// Authentication JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Login form handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // In a real app, you would send this to a server
            // For demo purposes, we'll just simulate a successful login
            
            // Create a mock user
            const user = {
                id: 1,
                name: 'John Doe',
                email: email,
                walletBalance: 25.50,
                orders: [
                    {
                        id: 101,
                        restaurantName: 'Burger Palace',
                        date: new Date(2023, 5, 15).toISOString(),
                        items: [
                            { name: 'Cheeseburger', price: 8.99, quantity: 1 },
                            { name: 'Fries', price: 3.99, quantity: 1 }
                        ],
                        total: 12.98
                    },
                    {
                        id: 102,
                        restaurantName: 'Pizza Heaven',
                        date: new Date(2023, 5, 10).toISOString(),
                        items: [
                            { name: 'Pepperoni Pizza', price: 14.99, quantity: 1 }
                        ],
                        total: 14.99
                    }
                ],
                favorites: [1, 4]
            };
            
            // Save user to localStorage (in a real app, you'd use JWT or sessions)
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        });
    }
    
    // Signup form handling
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Validate passwords match
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // In a real app, you would send this to a server
            // For demo purposes, we'll just simulate a successful signup
            
            // Create a new user
            const user = {
                id: 1,
                name: name,
                email: email,
                phone: phone,
                walletBalance: 0,
                orders: [],
                favorites: []
            };
            
            // Save user to localStorage (in a real app, you'd use JWT or sessions)
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        });
    }
}); 