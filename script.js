document.addEventListener('DOMContentLoaded', () => {
    // Food items with categories
    const foodItems = [
        { name: 'Burger', category: 'fast-food', image: 'images/burger.jpg' },
        { name: 'Ice Cream', category: 'dessert', image: 'images/icecream.jpg' },
        { name: 'Drinks', category: 'beverages', image: 'images/drinks.jpg' },
        { name: 'Pancakes', category: 'breakfast', image: 'images/pancakes.jpg' },
        { name: 'Salad', category: 'healthy', image: 'images/salad.jpg' },
        { name: 'Sushi', category: 'seafood', image: 'images/sushi.jpg' },
        { name: 'Taco', category: 'mexican', image: 'images/taco.jpg' }
    ];

    const galleryContainer = document.getElementById('gallery-container');
    const categoryButtons = document.getElementById('category-buttons');

    // Create category buttons
    const categories = [...new Set(foodItems.map(item => item.category))];
    
    // Add "All" button
    const allButton = document.createElement('button');
    allButton.textContent = 'All';
    allButton.className = 'category-btn active';
    allButton.onclick = () => filterItems('all');
    categoryButtons.appendChild(allButton);

    // Add category-specific buttons
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        button.className = 'category-btn';
        button.onclick = () => filterItems(category);
        categoryButtons.appendChild(button);
    });

    // Load all food items initially
    loadFoodItems();

    function filterItems(category) {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase() === category || 
               (category === 'all' && btn.textContent === 'All')) {
                btn.classList.add('active');
            }
        });

        document.querySelectorAll('.gallery-item').forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function loadFoodItems() {
        galleryContainer.innerHTML = '';
        
        foodItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.dataset.category = item.category;
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            
            const title = document.createElement('h3');
            title.textContent = item.name;
            
            img.onerror = function() {
                this.src = 'images/placeholder.jpg';
                console.log(`Failed to load ${item.image}`);
            };
            
            galleryItem.appendChild(img);
            galleryItem.appendChild(title);
            galleryContainer.appendChild(galleryItem);
        });
    }
}); 