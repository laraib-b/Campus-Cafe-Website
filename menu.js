// Menu Page JavaScript (shared by all menu pages)
let currentUser = null;
let currentCafe = null;
let currentCategory = 'eatables';

// Menu Data with 10+ items for each cafe
const menuData = {
    red: {
        eatables: [
            {
                id: 'red-jumbo-roll',
                name: 'Jumbo Roll Paratha',
                description: 'Fresh paratha with your choice of filling',
                image: 'assets/jumbo.jpeg',
                variations: [
                    { name: 'Zinger Filling', price: 150 },
                    { name: 'BBQ Filling', price: 140 },
                    { name: 'Chicken Tikka', price: 160 },
                    { name: 'Beef Filling', price: 170 }
                ]
            },
            {
                id: 'red-chicken-burger',
                name: 'Chicken Zinger Burger',
                description: 'Juicy zinger patty with fresh vegetables',
                image: 'assets/burger.jpg',
                variations: [
                    { name: 'Regular', price: 200 },
                    { name: 'Large', price: 250 },
                    { name: 'Deluxe', price: 300 }
                ]
            },
            {
                id: 'red-chicken-karahi',
                name: 'Chicken Karahi',
                description: 'Spicy chicken curry with naan',
                image: 'assets/chickenkarahi.jpg',
                variations: [
                    { name: 'Half', price: 300 },
                    { name: 'Full', price: 500 }
                ]
            },
            {
                id: 'red-biryani',
                name: 'Chicken Biryani',
                description: 'Fragrant basmati rice with chicken',
                image: 'assets/biryani.jpg',
                variations: [
                    { name: 'Half', price: 250 },
                    { name: 'Full', price: 400 }
                ]
            },
            {
                id: 'red-samosa',
                name: 'Samosa',
                description: 'Crispy fried pastry with spiced filling',
                image: 'assets/samosa.jpg',
                variations: [
                    { name: 'Bara (aaloo)', price: 50 },
                    { name: 'Chota (aaloo)', price: 30 },
                    { name: 'Chota (chicken)', price: 40 }
                ]
            },
            {
                id: 'red-chicken-tikka',
                name: 'Chicken Tikka',
                description: 'Grilled chicken with spices',
                image: 'assets/tikka.jpg',
                variations: [
                    { name: 'Half', price: 200 },
                    { name: 'Full', price: 350 }
                ]
            },
            {
                id: 'red-naan',
                name: 'Fresh Naan',
                description: 'Soft bread baked in tandoor',
                image: 'assets/roti.jpg',
                variations: [
                    { name: 'Plain', price: 20 },
                    { name: 'Garlic', price: 30 },
                    { name: 'Butter', price: 25 }
                ]
            },
            {
                id: 'red-paratha',
                name: 'Paratha',
                description: 'Traditional flatbread',
                image: 'assets/paratha.jpeg',
                price: 80
            },
            {
                id: 'red-cheese-paratha',
                name: 'Cheese Paratha',
                description: 'Paratha with cheese filling',
                image: 'assets/cheeseparatha.jpg',
                price: 180
            },
            {
                id: 'red-chicken-cheese',
                name: 'Chicken Cheese',
                description: 'Chicken with cheese',
                image: 'assets/chickencheese.jpg',
                price: 350
            },
            {
                id: 'red-aaloo-cheese',
                name: 'Aaloo Cheese',
                description: 'Potato with cheese',
                image: 'assets/aaloocheese.jpg',
                price: 200
            },
            {
                id: 'red-fries',
                name: 'Fries',
                description: 'Crispy fries',
                image: 'assets/fries.jpg',
                variations: [
                    { name: 'Small', price: 100 },
                    { name: 'Large', price: 200 }
                ]
            },
            {
                id: 'red-roll',
                name: 'Roll',
                description: 'Wrapped roll with filling',
                image: 'assets/roll.jpg',
                variations: [
                    { name: 'Chicken', price: 40 },
                    { name: 'Aaloo', price: 30 }
                ]
            }
        ],
        drinks: [
            {
                id: 'red-coffee',
                name: 'Coffee',
                description: 'Freshly brewed coffee',
                variations: [
                    { name: 'Small', price: 80 },
                    { name: 'Medium', price: 120 },
                    { name: 'Large', price: 150 }
                ]
            },
            {
                id: 'red-juice',
                name: 'Fresh Juice',
                description: 'Freshly squeezed fruit juice',
                variations: [
                    { name: 'Orange', price: 100 },
                    { name: 'Apple', price: 100 },
                    { name: 'Mango', price: 120 },
                    { name: 'Pineapple', price: 110 }
                ]
            },
            {
                id: 'red-lassi',
                name: 'Lassi',
                description: 'Traditional yogurt drink',
                variations: [
                    { name: 'Sweet', price: 80 },
                    { name: 'Salted', price: 80 },
                    { name: 'Mango', price: 100 }
                ]
            },
            {
                id: 'red-tea',
                name: 'Tea',
                description: 'Traditional Pakistani tea',
                variations: [
                    { name: 'Regular', price: 50 },
                    { name: 'Green Tea', price: 80 },
                    { name: 'Black Tea', price: 60 }
                ]
            },
            {
                id: 'red-milkshake',
                name: 'Milkshake',
                description: 'Creamy milkshake in various flavors',
                variations: [
                    { name: 'Chocolate', price: 120 },
                    { name: 'Vanilla', price: 100 },
                    { name: 'Strawberry', price: 120 }
                ]
            },
            {
                id: 'red-smoothie',
                name: 'Fruit Smoothie',
                description: 'Healthy fruit smoothies',
                variations: [
                    { name: 'Mixed Berry', price: 150 },
                    { name: 'Tropical', price: 140 },
                    { name: 'Green Detox', price: 160 }
                ]
            },
            {
                id: 'red-cold-drink',
                name: 'Cold Drinks',
                description: 'Refreshing cold beverages',
                variations: [
                    { name: 'Coca Cola', price: 60 },
                    { name: 'Sprite', price: 60 },
                    { name: 'Fanta', price: 60 }
                ]
            },
            {
                id: 'red-energy-drink',
                name: 'Energy Drink',
                description: 'Boost your energy',
                variations: [
                    { name: 'Red Bull', price: 200 },
                    { name: 'Monster', price: 180 }
                ]
            },
            {
                id: 'red-iced-tea',
                name: 'Iced Tea',
                description: 'Refreshing iced tea',
                variations: [
                    { name: 'Lemon', price: 80 },
                    { name: 'Peach', price: 90 }
                ]
            },
            {
                id: 'red-hot-chocolate',
                name: 'Hot Chocolate',
                description: 'Rich and creamy hot chocolate',
                variations: [
                    { name: 'Regular', price: 100 },
                    { name: 'Extra Cream', price: 120 }
                ]
            }
        ]
    },
    blue: {
        eatables: [
            {
                id: 'burger-with-fries',
                name: 'Burger',
                description: 'Served with crispy fries',
                image: 'assets/zingerburger.jpg',
                allowNotes: true,   
                variations: [
                    { name: 'Zinger', price: 250 },
                    { name: 'BBQ', price: 250 },
                    { name: 'Chicken Patty', price: 250 },
                    { name: 'Beef', price: 250 }
                ]
            },
            {
                id: 'roll-paratha',
                name: 'Roll Paratha',
                description: '',
                image: 'assets/p3.jpg',
                allowNotes: true,
                variations: [
                    { name: 'BBQ', price: 150 },
                    { name: 'Zinger', price: 150 }
                ]
            },
            {
                id: 'jumbo-roll-paratha',
                name: 'Jumbo Roll Paratha',
                description: 'Medium Sized Roll Paratha',
                allowNotes: true,
                image: 'assets/p1.jpg',
                variations: [
                    { name: 'BBQ', price: 280 },
                    { name: 'Zinger', price: 300 }
                ]
            },
            {
                id: 'boom-boom',
                name: 'Boom Boom',
                description: 'Large Sized Roll Paratha',
                allowNotes: true,
                image: 'assets/boomboom.jpg',
                variations: [
                    { name: 'BBQ', price: 350 },
                    { name: 'Zinger', price: 380 }
                ]
            },
            {
                id: 'afghani',
                name: 'Afghani Burger',
                description: 'includes fries',
                allowNotes: true,
                image: 'assets/afghani.jpg',
                variations: [
                    { name: 'BBQ', price: 250 },
                    { name: 'Zinger', price: 250 }
                ]
            },
            {
                id: 'fries',
                name: 'Fries',
                description: '',
                allowNotes: true,
                image: 'assets/fries.jpeg',
                variations: [
                    { name: 'Simple', price: 100 },
                    { name: 'Plate', price: 200 },
                    { name: 'Special (Zinger topping)', price: 250 }
                ],
                sauceOptions: ['Red sauce', 'Mayo', 'Masala']
            },
            {
                id: 'chicken-sandwich',
                name: 'Chicken Sandwich',
                description: 'Includes anda and chicken',
                allowNotes: true,
                image: 'assets/chickensandwich.jpg',
                price: 250
            },
            {
                id: 'panini',
                name: 'Panini',
                description: 'Grilled panini sandwiches',
                allowNotes: true,
                image: 'assets/panini.jpeg',
                variations: [
                    { name: 'Grill Chicken', price: 250 },
                    { name: 'Grill Zinger', price: 250 },
                    { name: 'Grill BBQ', price: 250 }
                ]
            },
            {
                id: 'wrap',
                name: 'Wrap',
                description: '',
                allowNotes: true,
                image: 'assets/wrap.webp',
                price: 250
            },
            {
                id: 'sheikh-kabab-roll-paratha',
                name: 'Seekh Kabab Roll Paratha',
                allowNotes: true,
                description: '',
                image: 'assets/seekhkababroll.jpeg',
                price: 250
            },
            {
                id: 'chicken-shawarma',
                name: 'Chicken Shawarma',
                image: 'assets/shawarma.jpg',
                description: '',
                allowNotes: true,
                price: 150
            },
            {
                id: 'samosa',
                name: 'Samosa',
                description: '',
                image: 'assets/samosa.jpg',
                allowNotes: true,
                variations: [
                    { name: 'Bara (aaloo)', price: 50 },
                    { name: 'Chota (aaloo)', price: 30 },
                    { name: 'Chota (chicken)', price: 40 }
                ]
            },
            {
                id: 'roll',
                name: 'Roll',
                description: '',
                image: 'assets/roll.jpg',
                allowNotes: true,
                variations: [
                    { name: 'Aaloo', price: 30 },
                    { name: 'Chicken', price: 40 }
                ]
            },
            {
                id: 'biryani',
                name: 'Biryani',
                description: 'One Plate',
                image: 'assets/biryani.avif',
                allowNotes: true,
                price: 200
            },
            {
                id: 'munchurian',
                name: 'Munchurian',
                description: 'One Plate',
                image: 'assets/wtf.jpeg',
                allowNotes: true,
                price: 250
            },
            {
                id: 'spaghetti',
                name: 'Spaghetti',
                description: 'One plate',
                image: 'assets/spaghetti.jpeg',
                allowNotes: true,
                price: 200
            },
            {
                id: 'sada-roti',
                name: 'Sada Roti',
                description: '',
                image: 'assets/roti.jpg',
                allowNotes: true,
                price: 20
            },
            {
                id: 'sada-paratha',
                name: 'Sada Paratha',
                description: '',
                image: 'assets/paratha.jpeg',
                allowNotes: true,
                price: 80
            },
            {
                id: 'chicken-tikka-boti',
                name: 'Chicken Tikka Boti',
                description: 'One Plate of Grilled chicken tikka pieces (5-6 pieces)',
                allowNotes: true,
                image: 'assets/tikkaboti.jpg',
                price: 250
            },
            {
                id: 'chicken-salan',
                name: 'Chicken Salan',
                description: 'One Plate of Traditional chicken curry',
                image: 'assets/salan.jpg',
                allowNotes: true,
                price: 200
            },
            {
                id: 'pizza',
                name: 'Pizza',
                description: '',
                image: 'assets/pizza.jpeg',
                allowNotes: true,
                variations: [
                    { name: 'One slice', price: 150 },
                    { name: 'Full', price: 1200 }
                ]
                
            }
        ],
        drinks: [
            {
                id: 'chai',
                name: 'Chai',
                description: '',   
                image : 'assets/chai.png',
                variations: [
                    { name: 'Simple', price: 60 },
                    { name: 'Cardimum', price: 80 }
                ]
            },
            {
                id: 'coffee',
                name: 'Coffee',
                description: '',
                image : 'assets/coffee.jpg',
                price: 120
            },
            {
                id: 'coffee-shake',
                name: 'Coffee Shake',
                description: '',
                image : 'assets/coffeeshake.jpg',
                price: 150
            },
            {
                id: 'oreo-shake',
                name: 'Oreo Shake',
                description: '',
                image : 'assets/oreoshake.jpg',
                price: 180
            },
            {
                id: 'peach-ice-tea',
                name: 'Peach Ice Tea',
                description: '',
                image : 'assets/peach_ice_tea.png',
                price: 120
            },
            {
                id: 'cola-next',
                name: 'Cola Next',
                description: '',
                image : 'assets/colanext.png',
                variations: [
                    { name: 'Small', price: 50 },
                    { name: 'Medium', price: 70 },
                    { name: 'Large', price: 100 }
                ]
            },
            {
                id: 'fresher',
                name: 'Fresher',
                description: '',
                image : 'assets/fresher.jpg',
                variations: [
                    { name: 'Mango', price: 180 },
                    { name: 'Apple', price: 180 }
                ]
            },
            {
                id: '7up',
                name: '7UP',
                description: '',
                image : 'assets/7up.jpg',
                variations: [
                    { name: 'Small', price: 50 },
                    { name: 'Medium', price: 70 },
                    { name: 'Large', price: 100 }
                ]
            },
            {
                id: 'fresh-up',
                name: 'Fizz Up',
                description: '',
                image : 'assets/fizup.png',
                variations: [
                    { name: 'Small', price: 50 },
                    { name: 'Medium', price: 70 },
                    { name: 'Large', price: 100 }
                ]
            },
            {
                id: 'water',
                name: 'Water',
                description: '',
                image : 'assets/water.jpg',
                variations: [
                    { name: 'Small', price: 50 },
                    { name: 'Large', price: 100 }
                ]
            }
        ]
    },
    dough: {
        filled: [
            { id: 'filled-applecrumble', name: 'Apple Crumble', description: 'Apple crumble filled doughnut', image: 'assets/applecrumble.png', price: 200 },
            { id: 'filled-chocoholic', name: 'Chocoholic', description: 'Rich chocolate cream filling', image: 'assets/chocoholic.png', price: 200 },
            { id: 'filled-browniepoints', name: 'Brownie Points', description: 'Brownie chunks and fudge', image: 'assets/browniepoints.jpg', price: 200 },
            { id: 'filled-lotus', name: 'Lotus', description: 'Lotus biscoff delight', image: 'assets/lotus.jpg', price: 200 },
            { id: 'filled-wakeupcall', name: 'Wakeup call', description: 'Coffee cream filled', image: 'assets/wakeupcall.jpg', price: 200 },
            { id: 'filled-nutella', name: 'Nutella', description: 'Nutella hazelnut filling', image: 'assets/nutella.jpg', price: 200 },
            { id: 'filled-saltedcaramel', name: 'Salted Caramel', description: 'Salted caramel core', image: 'assets/saltedcaramel.jpg', price: 200 }
        ],
        holed: [
            { id: 'holed-lovelotus', name: 'Love Lotus', description: 'Lotus glazed ring', image: 'assets/lovelotus.jpg', price: 150 },
            { id: 'holed-vanillaglaze', name: 'Vanilla Glaze', description: 'Classic vanilla glaze', image: 'assets/vanillaglaze.png', price: 150 },
            { id: 'holed-chocopeanutcaramel', name: 'choco Peanut Caramel', description: 'Chocolate peanut caramel', image: 'assets/chocopeanutcaramel.jpg', price: 150 },
            { id: 'holed-cookiecrunch', name: 'Cookie Crunch', description: 'Cookie crumble and cream', image: 'assets/cookiecrunch.png', price: 150 }
        ],
        deals: [
            { id: 'deal-signatureline', name: 'Signature Line', description: 'Assorted signature box', image: 'assets/signatureline.png', price: 1000 },
            { id: 'deal-chocotrio', name: 'Chocotrio', description: 'Three chocolate flavors', image: 'assets/chocotrio.png', price: 1000 },
            { id: 'deal-chocoduo', name: 'Chocoduo', description: 'Two chocolate favorites', image: 'assets/chocoduo.png', price: 1000 },
            { id: 'deal-caramelizedspecial', name: 'Caramelized Special', description: 'Caramel lovers special', image: 'assets/caramelizedspecial.png', price: 1000 },
            { id: 'deal-cookiespecial', name: 'Cookie Special', description: 'Cookie themed selection', image: 'assets/cookiespecial.png', price: 1000 }
        ],
        other: [
            { id: 'other-cinnamon-rolls', name: 'Cinnamon Rolls', description: 'Warm cinnamon rolls', image: 'assets/cinnamonrolls.png', price: 150 },
            { id: 'other-croissants', name: 'Croissants', description: 'Buttery flaky croissants', image: 'assets/croissants.png', price: 130 }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const userData = localStorage.getItem('currentUser');
    if (!userData) {
        window.location.href = 'index.html';
        return;
    }
    
    currentUser = JSON.parse(userData);
    currentCafe = localStorage.getItem('currentCafe') || 'red';
    
    // Setup event listeners
    setupEventListeners();
    
    // Load menu
    loadMenu();
    
    // Update cart count
    updateCartCount();
});

function setupEventListeners() {
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', function() {
        window.location.href = 'checkout.html';
    });

    // Logout button (present on menu pages)
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        });
    }

    // Category buttons (supports both regular cafes and dough page)
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            if (currentCafe === 'dough') {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                loadDoughMenuCategory(category);
            } else {
                switchCategory(category);
            }
        });
    });

    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || e.target.parentElement.classList.contains('add-to-cart')) {
            const btn = e.target.classList.contains('add-to-cart') ? e.target : e.target.parentElement;
            const itemName = btn.dataset.item;
            addToCart(itemName);
        }
    });

    // Modal close buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Click outside modal to close
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });
}

function loadMenu() {
    if (currentCafe === 'dough') {
        loadDoughMenuCategory('filled');
    } else {
        loadCafeMenu(currentCafe, currentCategory);
    }
}

function loadCafeMenu(cafe, category) {
    const categoriesContainer = document.getElementById('menuCategories');
    const itemsContainer = document.getElementById('menuItems');
    
    // Load categories
    if (categoriesContainer) {
        categoriesContainer.innerHTML = '';
        const categories = ['eatables', 'drinks'];
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `category-btn ${cat === category ? 'active' : ''}`;
            btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
            btn.dataset.category = cat;
            btn.addEventListener('click', function() {
                switchCategory(cat);
            });
            categoriesContainer.appendChild(btn);
        });
    }
    
    // Load items
    const items = menuData[cafe][category];
    itemsContainer.innerHTML = '';
    
    items.forEach(item => {
        const menuItem = createMenuItem(item, cafe);
        itemsContainer.appendChild(menuItem);
    });
}

function loadDoughMenuCategory(categoryKey) {
    const itemsContainer = document.getElementById('menuItems');
    itemsContainer.innerHTML = '';
    const items = menuData.dough[categoryKey] || [];
    items.forEach(item => {
        const menuItem = createMenuItem(item, 'dough');
        itemsContainer.appendChild(menuItem);
    });
}

function switchCategory(category) {
    currentCategory = category;
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Load menu for new category
    loadCafeMenu(currentCafe, category);
}

function createMenuItem(item, cafe) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    
    const iconMap = {
        'Jumbo Roll Paratha': 'fas fa-hamburger',
        'Chicken Burger': 'fas fa-hamburger',
        'Chicken Karahi': 'fas fa-drumstick-bite',
        'Chicken Biryani': 'fas fa-rice',
        'Mutton Biryani': 'fas fa-rice',
        'Samosa': 'fas fa-cookie',
        'Chicken Tikka': 'fas fa-drumstick-bite',
        'Fresh Naan': 'fas fa-bread-slice',
        'Chicken Roll': 'fas fa-burrito',
        'Chicken Korma': 'fas fa-drumstick-bite',
        'Chicken Handi': 'fas fa-drumstick-bite',
        'Chicken Malai Boti': 'fas fa-drumstick-bite',
        'Club Sandwich': 'fas fa-bread-slice',
        'Pasta': 'fas fa-utensils',
        'Pizza': 'fas fa-pizza-slice',
        'Chicken Wraps': 'fas fa-burrito',
        'Caesar Salad': 'fas fa-leaf',
        'Beef Burger': 'fas fa-hamburger',
        'Chicken Tacos': 'fas fa-burrito',
        'Loaded Nachos': 'fas fa-cookie',
        'Chicken Panini': 'fas fa-bread-slice',
        'Vegetable Quiche': 'fas fa-pie-chart',
        'Chicken Lasagna': 'fas fa-utensils',
        'Mushroom Risotto': 'fas fa-rice',
        'Coffee': 'fas fa-coffee',
        'Fresh Juice': 'fas fa-glass-whiskey',
        'Lassi': 'fas fa-mug-hot',
        'Tea': 'fas fa-mug-hot',
        'Milkshake': 'fas fa-glass-whiskey',
        'Fruit Smoothie': 'fas fa-glass-whiskey',
        'Cold Drinks': 'fas fa-glass-whiskey',
        'Energy Drink': 'fas fa-bolt',
        'Iced Tea': 'fas fa-glass-whiskey',
        'Hot Chocolate': 'fas fa-mug-hot',
        'Specialty Coffee': 'fas fa-coffee',
        'Iced Coffee': 'fas fa-coffee',
        'Frappuccino': 'fas fa-coffee',
        'Donuts': 'fas fa-cookie-bite',
        'Croissants': 'fas fa-croissant',
        'Muffins': 'fas fa-cookie',
        'Cookies': 'fas fa-cookie',
        'Cupcakes': 'fas fa-birthday-cake',
        'Brownies': 'fas fa-cookie',
        'Cinnamon Rolls': 'fas fa-cookie',
        'Danish Pastries': 'fas fa-cookie',
        'Eclairs': 'fas fa-cookie',
        'Cheesecake': 'fas fa-birthday-cake',
        'Fruit Tarts': 'fas fa-pie-chart',
        'Bagels': 'fas fa-bread-slice'
    };
    
    const icon = iconMap[item.name] || 'fas fa-utensils';
    const imageHtml = item.image ? `<img src="${item.image}" alt="${item.name}" style="width:100%;max-width:220px;height:150px;object-fit:cover;border-radius:10px;" />` : `<i class="${icon}"></i>`;
    
    const hasVariations = Array.isArray(item.variations) && item.variations.length > 0;
    const priceBlock = !hasVariations ? `
            <div class="variations">
                <div class="variation">
                    <span>Price</span>
                    <span class="price">Rs. ${item.price}</span>
                </div>
            </div>` : `
            <div class="variations">
                ${item.variations.map(variation => `
                    <div class="variation">
                        <span>${variation.name}</span>
                        <span class="price">Rs. ${variation.price}</span>
                    </div>
                `).join('')}
            </div>`;

    menuItem.innerHTML = `
        <div class="item-image">
            ${imageHtml}
        </div>
        <div class="item-details">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            ${priceBlock}
            <button class="add-to-cart" data-item="${item.name}">
                <i class="fas fa-plus"></i>
                Add to Cart
            </button>
        </div>
    `;
    
    return menuItem;
}

function addToCart(itemName) {
    // Find the item in menu data
    let item = null;
    let variations = [];
    
    if (currentCafe === 'dough') {
        const doughSections = ['filled', 'holed', 'deals', 'other'];
        for (const section of doughSections) {
            const found = (menuData.dough[section] || []).find(i => i.name === itemName);
            if (found) {
                item = found;
                break;
            }
        }
        // Dough items have no variations now
        if (item && Array.isArray(item.variations)) {
            variations = item.variations;
        }
    } else {
        const categoryData = menuData[currentCafe][currentCategory];
        item = categoryData.find(i => i.name === itemName);
        if (item) variations = item.variations;
    }
    
    if (!item) return;
    
    // For dough (no variations) add directly; for red/blue eatables prompt notes even without variations
    const shouldPromptNotes = (currentCafe === 'red' || currentCafe === 'blue') && currentCategory === 'eatables';
    if (!variations || variations.length === 0) {
        if (currentCafe === 'dough') {
            const price = item.price;
            const cartItem = {
                id: `${item.id}`,
                name: item.name,
                variation: '',
                price: price,
                cafe: currentCafe,
                quantity: 1
            };
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const existingItem = cart.find(ci => ci.id === cartItem.id && ci.cafe === currentCafe);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(cartItem);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showNotification(`${item.name} added to cart!`);
            return;
        }
        if (shouldPromptNotes) {
            showVariationSelection(item, []);
            return;
        }
    }

    // Otherwise, show variation selection modal
    showVariationSelection(item, variations);
}

function showVariationSelection(item, variations) {
    const modal = document.getElementById('variationModal');
    const content = document.getElementById('variationContent');
    
    // Build sauce options HTML if available
    const sauceOptionsHtml = item.sauceOptions ? `
        <div class="sauce-options">
            <h4>Sauce Options:</h4>
            <div class="sauce-checkboxes">
                ${item.sauceOptions.map(sauce => `
                    <label class="sauce-option">
                        <input type="checkbox" value="${sauce}">
                        <span>${sauce}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    ` : '';
    
    // Build notes input HTML (force notes for red/blue eatables, optional)
    const enableNotes = item.allowNotes || ((currentCafe === 'red' || currentCafe === 'blue') && currentCategory === 'eatables');
    const notesInputHtml = enableNotes ? `
        <div class="notes-section">
            <h4>Additional Notes:</h4>
            <textarea id="itemNotes" placeholder="Any special instructions or preferences..." rows="3"></textarea>
        </div>
    ` : '';
    
    const hasVariations = Array.isArray(variations) && variations.length > 0;
    const singlePriceBlock = !hasVariations ? `
        <div class="variations">
            <div class="variation">
                <span>Price</span>
                <span class="price">Rs. ${item.price}</span>
            </div>
        </div>
    ` : '';

    content.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        ${hasVariations ? `
            <div class="variation-options">
                ${variations.map((variation, index) => `
                    <div class="variation-option" data-index="${index}" data-price="${variation.price}">
                        <span>${variation.name}</span>
                        <span class="price">Rs. ${variation.price}</span>
                    </div>
                `).join('')}
            </div>
        ` : singlePriceBlock}
        ${sauceOptionsHtml}
        ${notesInputHtml}
        <div class="modal-footer">
            <button id="selectVariationBtn" class="checkout-btn" disabled>
                <i class="fas fa-plus"></i>
                Add to Cart
            </button>
        </div>
    `;
    
    // Add event listeners for variation selection
    const variationOptions = content.querySelectorAll('.variation-option');
    const selectBtn = content.querySelector('#selectVariationBtn');
    
    if (variationOptions.length > 0) {
        variationOptions.forEach(option => {
            option.addEventListener('click', function() {
                variationOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                selectBtn.disabled = false;
                selectBtn.dataset.price = this.dataset.price;
                selectBtn.dataset.variation = this.querySelector('span').textContent;
            });
        });
    } else {
        // No variations: enable button with single price
        selectBtn.disabled = false;
        selectBtn.dataset.price = item.price;
        selectBtn.dataset.variation = '';
    }
    
    selectBtn.addEventListener('click', function() {
        const selectedOption = content.querySelector('.variation-option.selected');
        const variationName = selectedOption ? selectedOption.querySelector('span').textContent : '';
        const price = parseInt(this.dataset.price);
            
            // Get selected sauces
            const selectedSauces = [];
            const sauceCheckboxes = content.querySelectorAll('.sauce-option input[type="checkbox"]:checked');
            sauceCheckboxes.forEach(checkbox => {
                selectedSauces.push(checkbox.value);
            });
            
            // Get notes
            const notesInput = content.querySelector('#itemNotes');
            const notes = notesInput ? notesInput.value.trim() : '';
            
            // Add to cart
            const cartItem = {
                id: `${item.id}${variationName ? '-' + variationName.toLowerCase().replace(/\s+/g, '-') : ''}`,
                name: item.name,
                variation: variationName,
                price: price,
                cafe: currentCafe,
                quantity: 1,
                sauces: selectedSauces.length > 0 ? selectedSauces : undefined,
                notes: notes || undefined
            };
            
            // Get existing cart
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            
            // Check if item already exists in cart (considering sauces and notes for uniqueness)
            const existingItem = cart.find(cartItem => 
                cartItem.name === item.name && 
                cartItem.variation === variationName && 
                cartItem.cafe === currentCafe &&
                JSON.stringify(cartItem.sauces) === JSON.stringify(selectedSauces) &&
                cartItem.notes === notes
            );
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(cartItem);
            }
            
            // Save cart
            localStorage.setItem('cart', JSON.stringify(cart));
            
            updateCartCount();
            closeModal(modal);
            
            // Build notification message
            let notificationMessage = `${item.name} (${variationName}) added to cart!`;
            if (selectedSauces.length > 0) {
                notificationMessage += ` with ${selectedSauces.join(', ')}`;
            }
            if (notes) {
                notificationMessage += ` - Notes: ${notes}`;
            }
            
            showNotification(notificationMessage);
    });
    
    modal.classList.add('active');
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function closeModal(modal) {
    modal.classList.remove('active');
}

function showNotification(message) {
    const modal = document.getElementById('notificationModal');
    const text = document.getElementById('notificationText');
    
    text.textContent = message;
    modal.classList.add('active');
    
    setTimeout(() => {
        modal.classList.remove('active');
    }, 3000);
}

function goBack() {
    window.location.href = 'cafe-selection.html';
}
