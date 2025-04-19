document.addEventListener('DOMContentLoaded', function() {
    const recipes = {
        1: {
            title: "Rajma Chawal",
            image: "https://th.bing.com/th/id/OIP.D6vSLSOGd8OR4ak510OE3QHaE6?w=283&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            prepTime: "20 mins",
            cookTime: "40 mins",
            servings: 4,
            difficulty: "Medium",
            rating: "4.7",
            ingredients: [
                "1 cup kidney beans (rajma)",
                "2 cups cooked basmati rice",
                "2 tablespoons oil",
                "1 large onion, finely chopped",
                "2 tomatoes, pureed",
                "1 teaspoon ginger-garlic paste",
                "1 teaspoon cumin seeds",
                "1 teaspoon garam masala",
                "1/2 teaspoon turmeric",
                "1 teaspoon red chili powder",
                "Salt to taste"
            ],
            instructions: [
                "Soak rajma overnight and pressure cook until soft.",
                "Heat oil, sauté cumin seeds, onions, and ginger-garlic paste.",
                "Add tomato puree and spices, cook till oil separates.",
                "Add cooked rajma and simmer for 20 mins.",
                "Serve hot with steamed basmati rice."
            ]
        },
        2: {
            title: "Palak Paneer",
            image: "https://www.indianveggiedelight.com/wp-content/uploads/2017/10/palak-paneer-featured.jpg",
            prepTime: "15 mins",
            cookTime: "25 mins",
            servings: 4,
            difficulty: "Easy",
            rating: "4.6",
            ingredients: [
                "200g paneer (cottage cheese), cubed",
                "3 cups spinach (palak), blanched",
                "2 tablespoons oil",
                "1 onion, chopped",
                "2 tomatoes, chopped",
                "1 teaspoon ginger-garlic paste",
                "1/2 teaspoon cumin seeds",
                "1/2 teaspoon garam masala",
                "Salt to taste"
            ],
            instructions: [
                "Blend blanched spinach to a smooth puree.",
                "Heat oil, sauté cumin, onions, and ginger-garlic paste.",
                "Add tomatoes and cook till soft.",
                "Add spinach puree and simmer with spices.",
                "Add paneer cubes and cook for 5 minutes before serving."
            ]
        },
        3: {
            title: "Chole Bhature",
            image: "https://3.bp.blogspot.com/-uck7Fi_bRfw/UA7ogu0DrzI/AAAAAAAARSI/rmu9iluFJG0/s1600/cb+ten.jpg",
            prepTime: "20 mins",
            cookTime: "30 mins",
            servings: 4,
            difficulty: "Medium",
            rating: "4.8",
            ingredients: [
                "1 cup chickpeas (soaked overnight)",
                "2 onions, chopped",
                "2 tomatoes, chopped",
                "1 teaspoon ginger-garlic paste",
                "1 teaspoon cumin seeds",
                "1 teaspoon chole masala",
                "Salt to taste",
                "For Bhature: 2 cups all-purpose flour, 1/2 cup yogurt, pinch of baking soda, salt, water"
            ],
            instructions: [
                "Cook soaked chickpeas until soft.",
                "Sauté onions, ginger-garlic paste, tomatoes, and spices.",
                "Add chickpeas and simmer.",
                "For bhature, knead a soft dough and let it rest.",
                "Roll and deep fry bhature until puffed.",
                "Serve hot with chole."
            ]
        },
        4: {
            title: "Chickpea Salad",
            image: "https://tse1.mm.bing.net/th?id=OIP.Nfox9puePw82_7xThqXJ7QHaHa&pid=Api&P=0&h=220",
            prepTime: "10 mins",
            cookTime: "0 mins",
            servings: 2,
            difficulty: "Easy",
            rating: "4.5",
            ingredients: [
                "1 cup boiled chickpeas",
                "1 cucumber, diced",
                "1 tomato, diced",
                "1 small onion, chopped",
                "Juice of 1 lemon",
                "Fresh coriander, chopped",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Combine all ingredients in a large bowl.",
                "Mix well and adjust seasoning.",
                "Serve chilled as a refreshing salad."
            ]
        },
        5: {
            title: "Vegan Pad Thai",
            image: "https://fullofplants.com/wp-content/uploads/2022/03/easy-vegan-pad-thai-noodle-dish-with-bean-sprouts-thumb.jpg",
            prepTime: "15 mins",
            cookTime: "15 mins",
            servings: 2,
            difficulty: "Medium",
            rating: "4.6",
            ingredients: [
                "200g rice noodles",
                "1 cup tofu, cubed",
                "1/2 cup bean sprouts",
                "1 bell pepper, sliced",
                "2 tablespoons soy sauce",
                "1 tablespoon peanut butter",
                "1 tablespoon lime juice",
                "1 teaspoon chili flakes",
                "Green onions and peanuts for garnish"
            ],
            instructions: [
                "Cook noodles as per package instructions.",
                "Sauté tofu and vegetables in a pan.",
                "Mix soy sauce, peanut butter, lime juice, and chili flakes.",
                "Add sauce to the pan, toss noodles, and stir-fry.",
                "Garnish with peanuts and green onions before serving."
            ]
        },
        6: {
            title: "Stuffed Bell Peppers",
            image: "https://tse4.mm.bing.net/th?id=OIP.MrLTZMckIv1TFkfh43AN8gHaJ4&pid=Api&P=0&h=220",
            prepTime: "20 mins",
            cookTime: "25 mins",
            servings: 3,
            difficulty: "Medium",
            rating: "4.4",
            ingredients: [
                "3 bell peppers, halved and deseeded",
                "1 cup cooked rice",
                "1/2 cup corn",
                "1/2 cup black beans",
                "1/2 cup grated cheese",
                "1 teaspoon cumin powder",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Mix rice, beans, corn, cheese, and spices.",
                "Stuff the bell peppers with the mixture.",
                "Place on a baking tray and bake at 375°F (190°C) for 20-25 mins.",
                "Serve hot with a dip or salad."
            ]
        },
        7: {
            title: "Instant Ramen Stir Fry",
            image: "https://realhousemoms.com/wp-content/uploads/Ramen-Noodle-Stir-Fry-IG.jpg",
            prepTime: "5 mins",
            cookTime: "10 mins",
            servings: 1,
            difficulty: "Easy",
            rating: "4.3",
            ingredients: [
                "1 packet instant ramen (noodles only)",
                "1/2 cup mixed vegetables",
                "1 tablespoon soy sauce",
                "1 teaspoon sesame oil",
                "1 garlic clove, minced",
                "Green onions for garnish"
            ],
            instructions: [
                "Cook ramen noodles and set aside.",
                "Stir-fry garlic and vegetables in sesame oil.",
                "Add noodles and soy sauce, mix well.",
                "Top with green onions and serve hot."
            ]
        },
        8: {
            title: "Egg Fried Rice",
            image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-fried-rice-recipe.jpg",
            prepTime: "10 mins",
            cookTime: "15 mins",
            servings: 2,
            difficulty: "Easy",
            rating: "4.6",
            ingredients: [
                "2 cups cooked rice",
                "2 eggs, beaten",
                "1/2 cup chopped vegetables",
                "1 tablespoon soy sauce",
                "1 tablespoon oil",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Scramble eggs in a pan and set aside.",
                "Sauté vegetables, add rice and mix well.",
                "Add soy sauce, seasonings, and eggs.",
                "Stir-fry for 2-3 mins and serve hot."
            ]
        },
        9: {
            title: "Grilled Cheese Sandwich",
            image: "https://th.bing.com/th/id/OIP.3jAw0R5b4UGUDZS6nityuAHaE8?rs=1&pid=ImgDetMain",
            prepTime: "5 mins",
            cookTime: "10 mins",
            servings: 1,
            difficulty: "Easy",
            rating: "4.9",
            ingredients: [
                "2 slices of bread",
                "2 slices of cheese",
                "Butter"
            ],
            instructions: [
                "Butter the bread slices on one side.",
                "Place cheese between the unbuttered sides.",
                "Grill on a pan until golden brown on both sides.",
                "Serve hot with ketchup or soup."
            ]
        },
        10: {
            title: "Gulab Jamun",
            image: "https://th.bing.com/th/id/OIP.B32bansRI7RS3yfbUSEBNwHaHa?rs=1&pid=ImgDetMain",
            prepTime: "15 mins",
            cookTime: "25 mins",
            servings: 6,
            difficulty: "Medium",
            rating: "4.8",
            ingredients: [
                "1 cup milk powder",
                "1/4 cup all-purpose flour",
                "1/4 teaspoon baking soda",
                "2 tablespoons ghee",
                "Milk (as needed)",
                "Oil for frying",
                "1 cup sugar",
                "1 cup water",
                "Cardamom pods"
            ],
            instructions: [
                "Mix dry ingredients, add ghee and milk to form soft dough.",
                "Shape into small balls and fry until golden.",
                "Prepare sugar syrup with water and cardamom.",
                "Soak fried balls in warm syrup for 1 hour before serving."
            ]
        },
        11: {
            title: "Chocolate Lava Cake",
            image: "https://bing.com/th?id=OSK.22e35e6896601da85dfe55568476266e",
            prepTime: "10 mins",
            cookTime: "12 mins",
            servings: 2,
            difficulty: "Medium",
            rating: "4.9",
            ingredients: [
                "1/4 cup butter",
                "1/2 cup dark chocolate",
                "1/2 cup powdered sugar",
                "2 eggs",
                "1/4 cup flour",
                "Butter and flour for greasing"
            ],
            instructions: [
                "Melt butter and chocolate together.",
                "Whisk in sugar and eggs.",
                "Fold in flour gently.",
                "Pour into greased ramekins and bake at 425°F (220°C) for 10-12 mins.",
                "Serve warm for molten center."
            ]
        },
        12: {
            title: "Rasgulla",
            image: "https://imgs.search.brave.com/rJTIQD_R_CPBQItbd-CWAxliiWNuCiCodrvLy0Lxiy0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzk1LzE0LzQz/LzM2MF9GXzEyOTUx/NDQzNzhfZ3Bqc3Ni/RkE4azN4QTVKYjJK/M1B4a21jMHJ1c3Fl/dmEuanBn",
            prepTime: "20 mins",
            cookTime: "30 mins",
            servings: 6,
            difficulty: "Hard",
            rating: "4.7",
            ingredients: [
                "1 liter full-fat milk",
                "2 tablespoons lemon juice",
                "1 cup sugar",
                "4 cups water",
                "Cardamom pods"
            ],
            instructions: [
                "Boil milk and curdle it using lemon juice.",
                "Drain, wash, and knead the chenna to make smooth balls.",
                "Boil water and sugar with cardamom.",
                "Add chenna balls and cook covered for 15-20 mins.",
                "Cool and serve chilled."
            ]
        },
        13: {
            title: "Margherita Pizza",
            image: "https://th.bing.com/th/id/OIP.1Xr2OkJdpGuaysQAOtn5YgHaLH?rs=1&pid=ImgDetMain",
            prepTime: "20 mins",
            cookTime: "15 mins",
            servings: 2,
            difficulty: "Medium",
            rating: "4.7",
            ingredients: [
                "Pizza dough (store-bought or homemade)",
                "1/2 cup tomato sauce",
                "Fresh mozzarella",
                "Fresh basil leaves",
                "Olive oil",
                "Salt to taste"
            ],
            instructions: [
                "Preheat oven to 475°F (245°C).",
                "Spread sauce over rolled dough.",
                "Add mozzarella, salt, and olive oil.",
                "Bake for 12-15 mins until crust is golden.",
                "Top with basil leaves before serving."
            ]
        },
        14: {
            title: "Pasta Alfredo",
            image: "https://bing.com/th?id=OSK.f5678246b6267f21e4669407c4dd7053",
            prepTime: "10 mins",
            cookTime: "15 mins",
            servings: 2,
            difficulty: "Easy",
            rating: "4.6",
            ingredients: [
                "200g pasta",
                "2 tablespoons butter",
                "1 cup heavy cream",
                "1/2 cup grated parmesan",
                "Salt and pepper to taste",
                "Parsley for garnish"
            ],
            instructions: [
                "Cook pasta as per instructions.",
                "In a pan, melt butter and add cream.",
                "Stir in parmesan, season with salt and pepper.",
                "Toss cooked pasta in sauce and garnish."
            ]
        },
        15: {
            title: "Tiramisu",
            image: "https://natashaskitchen.com/wp-content/uploads/2019/11/Tiramisu-Cake-5.jpg",
            prepTime: "25 mins",
            cookTime: "0 mins",
            servings: 4,
            difficulty: "Hard",
            rating: "4.9",
            ingredients: [
                "200g ladyfinger biscuits",
                "1 cup strong coffee",
                "3 egg yolks",
                "1/2 cup sugar",
                "250g mascarpone cheese",
                "1/2 cup whipped cream",
                "Cocoa powder for dusting"
            ],
            instructions: [
                "Beat yolks with sugar until pale.",
                "Fold in mascarpone and whipped cream.",
                "Dip ladyfingers in coffee and layer with cream mix.",
                "Repeat layers and chill for 6 hours.",
                "Dust with cocoa before serving."
            ]
        }
        

        
    };

    

    


    // Category filtering functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected category
            const selectedCategory = this.getAttribute('data-category');
            
            // Show all recipes if 'all' is selected, otherwise filter
            recipeCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category').split(' ');
                if (selectedCategory === 'all' || cardCategories.includes(selectedCategory)) {
                    card.style.display = '';
                    // Add a nice fade-in effect
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Get all view recipe buttons
    const viewButtons = document.querySelectorAll('.view-recipe');
    const modal = document.getElementById('recipeModal');
    const modalClose = document.querySelector('.modal-close');
    const ingredientsList = document.getElementById('ingredientsList');
    
    // Add click event to each view recipe button
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the recipe ID from the parent card
            const recipeCard = this.closest('.recipe-card');
            const recipeId = recipeCard.dataset.id;
            
            // Get the recipe data
            const recipe = recipes[recipeId];
            
            if (recipe) {
                // Update modal content with recipe data
                document.querySelector('.modal-recipe-title').textContent = recipe.title;
                document.querySelector('.modal-recipe-image').src = recipe.image;
                document.querySelector('.modal-recipe-image').alt = recipe.title;
                
                document.getElementById('prepTime').textContent = recipe.prepTime;
                document.getElementById('cookTime').textContent = recipe.cookTime;
                document.getElementById('servings').textContent = recipe.servings;
                document.getElementById('difficulty').textContent = recipe.difficulty;
                document.getElementById('rating').textContent = `⭐ ${recipe.rating}`;
                
                // Clear and populate ingredients list
                ingredientsList.innerHTML = '';
                recipe.ingredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    ingredientsList.appendChild(li);
                });
                
                // Add instructions section if it doesn't exist
                let instructionsSection = document.querySelector('.instructions-section');
                if (!instructionsSection) {
                    instructionsSection = document.createElement('div');
                    instructionsSection.className = 'recipe-section instructions-section';
                    
                    const sectionTitle = document.createElement('h3');
                    sectionTitle.className = 'section-title';
                    sectionTitle.textContent = 'Instructions';
                    
                    const notebookPaper = document.createElement('div');
                    notebookPaper.className = 'notebook-paper';
                    
                    const instructionsList = document.createElement('ol');
                    instructionsList.className = 'instructions-list';
                    instructionsList.id = 'instructionsList';
                    
                    notebookPaper.appendChild(instructionsList);
                    instructionsSection.appendChild(sectionTitle);
                    instructionsSection.appendChild(notebookPaper);
                    
                    document.querySelector('.modal-body').appendChild(instructionsSection);
                }
                
                // Populate instructions
                const instructionsList = document.getElementById('instructionsList');
                instructionsList.innerHTML = '';
                recipe.instructions.forEach(instruction => {
                    const li = document.createElement('li');
                    li.textContent = instruction;
                    instructionsList.appendChild(li);
                });
                
                // Show the modal with animation
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
            }
        });
    });
    
    // Close modal when clicking the close button
    modalClose.addEventListener('click', function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Match this with your CSS transition time
    });
    
    // Close modal when clicking outside the content
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });
});


    