// Add event listener to the form submission
function getUserIngredients() {
    const input = document.getElementById("ingredients").value; // get the value of textarea
    return input.split(",").map(item => item.trim()); // split at commas and clear white spaces.
}

const recipes = [
    // Savory Recipes
    {
        name: 'Fried Chicken',
        ingredients: ['chicken', 'flour', 'eggs', 'bread crumbs', 'oil', 'salt', 'pepper'],
        instructions: 'Season chicken with salt and pepper. Coat with flour, dip in beaten eggs, and cover with breadcrumbs. Fry in hot oil until golden and crispy.'
    },
    {
        name: 'Rice and Chicken',
        ingredients: ['chicken', 'rice', 'onion', 'garlic', 'chicken broth', 'carrot', 'peas', 'salt', 'pepper'],
        instructions: 'Cook chicken until browned. Saute onion and garlic, then add rice, broth, vegetables, and chicken. Simmer until rice is fully cooked.'
    },
    {
        name: 'Pasta',
        ingredients: ['pasta', 'olive oil', 'garlic', 'tomatoes', 'parmesan', 'basil', 'salt', 'pepper'],
        instructions: 'Boil pasta until al dente. In a pan, saute garlic in olive oil, add chopped tomatoes, and simmer. Toss pasta with sauce, add parmesan and basil.'
    },
    {
        name: 'Pizza',
        ingredients: ['pizza dough', 'tomato sauce', 'mozzarella', 'pepperoni', 'olive oil', 'oregano'],
        instructions: 'Roll out pizza dough, spread with tomato sauce, and top with mozzarella and pepperoni. Drizzle with olive oil and bake until crispy.'
    },
    {
        name: 'Salmon',
        ingredients: ['salmon fillets', 'lemon', 'garlic', 'olive oil', 'salt', 'pepper', 'parsley'],
        instructions: 'Season salmon with salt, pepper, and lemon juice. Sear in olive oil until cooked through, then top with garlic and parsley.'
    },

    // Dessert Recipes
    {
        name: 'Brownie',
        ingredients: ['chocolate', 'butter', 'sugar', 'eggs', 'flour', 'cocoa powder', 'vanilla extract'],
        instructions: 'Melt chocolate and butter. Mix in sugar and eggs, then fold in flour and cocoa powder. Bake until edges are set and the center is gooey.'
    },
    {
        name: 'Chocolate Chip Cookies',
        ingredients: ['flour', 'butter', 'sugar', 'brown sugar', 'eggs', 'vanilla extract', 'baking soda', 'chocolate chips'],
        instructions: 'Cream butter and sugars, mix in eggs and vanilla. Stir in dry ingredients and chocolate chips. Bake until golden and crispy on the edges.'
    },
    {
        name: 'Cheesecake',
        ingredients: ['cream cheese', 'sugar', 'eggs', 'vanilla extract', 'graham crackers', 'butter'],
        instructions: 'Mix cream cheese, sugar, eggs, and vanilla. Press graham crackers and butter into a pan for the crust. Pour the filling and bake until set.'
    },

     // Breakfast Recipes
     {
        name: 'Avocado Toast',
        ingredients: ['avocado', 'bread', 'lemon', 'salt', 'pepper', 'olive oil'],
        instructions: 'Toast the bread. Mash avocado with lemon juice, salt, and pepper. Spread the avocado mixture on the toasted bread and drizzle with olive oil.'
    },
    {
        name: 'Pancakes',
        ingredients: ['flour', 'milk', 'eggs', 'sugar', 'baking powder', 'butter'],
        instructions: 'Mix flour, sugar, and baking powder. In another bowl, whisk milk, eggs, and melted butter. Combine and cook on a hot griddle until golden brown on both sides.'
    },
    {
        name: 'Omelette',
        ingredients: ['eggs', 'milk', 'cheese', 'salt', 'pepper', 'butter'],
        instructions: 'Whisk eggs and milk. Heat butter in a pan, pour in the egg mixture. Cook until edges are set. Add cheese, fold the omelette, and cook until cheese melts.'
    },

    // Lunch Recipes
    {
        name: 'Grilled Cheese Sandwich',
        ingredients: ['bread', 'cheese', 'butter'],
        instructions: 'Butter the bread on both sides. Place cheese between two slices of bread. Grill on medium heat until golden brown and cheese is melted.'
    },
    {
        name: 'Caesar Salad',
        ingredients: ['romaine lettuce', 'croutons', 'parmesan cheese', 'Caesar dressing'],
        instructions: 'Toss romaine lettuce with Caesar dressing. Top with croutons and grated parmesan cheese.'
    },
    {
        name: 'Chicken Wrap',
        ingredients: ['chicken breast', 'tortilla', 'lettuce', 'tomato', 'cheese', 'ranch dressing'],
        instructions: 'Cook chicken breast and slice it. Place on a tortilla with lettuce, tomato, cheese, and ranch dressing. Roll up and serve.'
    },

    // Dinner Recipes
    {
        name: 'Beef Stroganoff',
        ingredients: ['beef', 'onion', 'mushrooms', 'sour cream', 'beef broth', 'flour', 'butter'],
        instructions: 'Cook beef in butter until browned. Remove and sauté onions and mushrooms. Return beef to the pan, add flour, and stir. Add beef broth and simmer until thickened. Stir in sour cream before serving.'
    },
    {
        name: 'Vegetable Stir-Fry',
        ingredients: ['mixed vegetables', 'soy sauce', 'garlic', 'ginger', 'vegetable oil', 'rice'],
        instructions: 'Stir-fry vegetables with garlic and ginger in vegetable oil. Add soy sauce and cook until vegetables are tender. Serve over rice.'
    },
    {
        name: 'Baked Ziti',
        ingredients: ['ziti pasta', 'marinara sauce', 'mozzarella cheese', 'parmesan cheese', 'ground beef', 'onion', 'garlic'],
        instructions: 'Cook ziti according to package instructions. Brown ground beef with onion and garlic. Mix with marinara sauce. Combine with cooked ziti, add cheese, and bake until bubbly.'
    },

    // Dessert Recipes
    {
        name: 'Apple Pie',
        ingredients: ['apples', 'sugar', 'cinnamon', 'pie crust', 'butter', 'lemon juice'],
        instructions: 'Mix sliced apples with sugar, cinnamon, and lemon juice. Fill pie crust with the apple mixture and dot with butter. Cover with top crust, bake until golden brown.'
    },
    {
        name: 'Cupcakes',
        ingredients: ['flour', 'sugar', 'butter', 'eggs', 'baking powder', 'vanilla extract', 'milk'],
        instructions: 'Mix flour, sugar, and baking powder. Cream butter and sugar, then add eggs and vanilla. Combine with flour mixture and milk. Bake in cupcake liners until a toothpick comes out clean.'
    },
    {
        name: 'Chocolate Mousse',
        ingredients: ['dark chocolate', 'cream', 'eggs', 'sugar', 'vanilla extract'],
        instructions: 'Melt chocolate and let it cool. Whip cream until stiff. Fold cooled chocolate into the cream. Beat egg yolks with sugar and fold into the mixture. Chill before serving.'
    },

    // Additional Recipes
    {
        name: 'Spaghetti Carbonara',
        ingredients: ['spaghetti', 'eggs', 'parmesan cheese', 'pancetta', 'garlic', 'black pepper'],
        instructions: 'Cook spaghetti according to package instructions. Cook pancetta and garlic in a pan. Toss cooked spaghetti with egg mixture and cheese, then mix in pancetta. Serve with freshly ground black pepper.'
    },
    {
        name: 'Tacos',
        ingredients: ['ground beef', 'taco seasoning', 'taco shells', 'lettuce', 'tomato', 'cheese', 'sour cream'],
        instructions: 'Cook ground beef with taco seasoning. Fill taco shells with beef, then top with lettuce, tomato, cheese, and sour cream.'
    },
    {
        name: 'Chili',
        ingredients: ['ground beef', 'beans', 'tomato sauce', 'onion', 'garlic', 'chili powder', 'cumin'],
        instructions: 'Cook ground beef with onion and garlic. Add tomato sauce, beans, and spices. Simmer until flavors meld.'
    }
];


// Function to find a recipe based on user ingredients
function findRecipe(userIngredients) {
    // Use find() to return the first recipe that matches the user's ingredients
    let foundRecipe = recipes.find(recipe => {
      // Check if every ingredient in the recipe is included in the user's input
      return recipe.ingredients.every(ingredient => userIngredients.includes(ingredient));
    });
    
    // Return the found recipe or a default message if none are found
    return foundRecipe ? foundRecipe : 'No matching recipe found';
}

// Random recipe function (optional use)
function getRandomRecipe(recipes) {
    let randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
}

// Display recipe function (Assumed to be defined elsewhere, but here's a simple example)
function displayRecipe(recipe) {
    if (typeof recipe === 'string') {
        alert(recipe);  // Show the message if no recipe was found
    } else {
        alert(`Recipe: ${recipe.name}\nIngredients: ${recipe.ingredients.join(', ')}\nInstructions: ${recipe.instructions}`);
    }
}
// Function to find the best matching recipe based on partial ingredient matches
function findBestMatchingRecipe(userIngredients) {
    let bestMatch = null;
    let highestMatchCount = 0;

    recipes.forEach(recipe => {
        // Get the number of matching ingredients
        const matchingIngredients = recipe.ingredients.filter(ingredient => userIngredients.includes(ingredient));
        const matchCount = matchingIngredients.length;

        // If the current recipe has more matches, update the best match
        if (matchCount > highestMatchCount) {
            highestMatchCount = matchCount;
            bestMatch = {
                recipe: recipe,
                matchingIngredients: matchingIngredients,
                totalIngredients: recipe.ingredients.length
            };
        }
    });

    // Return the best match, or a default message if no matches at all
    return bestMatch ? bestMatch : 'No recipes found based on your ingredients';
}

// Function to display the best matching recipe, even if partially matched
function displayBestMatch(recipeMatch) {
    const resultDiv = document.getElementById('recipe-result');
    resultDiv.textContent = ''; // Clear previous content

    if (typeof recipeMatch === 'string') {
        resultDiv.innerHTML = `
            <div class="alert alert-warning" role="alert">
                ${recipeMatch}
            </div>
        `;
        return;
    }

    const recipe = recipeMatch.recipe;
    const matchingIngredients = recipeMatch.matchingIngredients;
    const totalIngredients = recipeMatch.totalIngredients;

    resultDiv.innerHTML = `
        <div class="card shadow-sm">
            <div class="card-body">
                <h4 class="card-title">${recipe.name}</h4>
                <p class="card-text"><strong>Matching Ingredients:</strong> ${matchingIngredients.join(', ')}</p>
                <p class="card-text"><strong>Total Ingredients Needed:</strong> ${recipe.ingredients.join(', ')}</p>
                <h6 class="card-subtitle mb-2 text-muted">Instructions</h6>
                <p class="card-text">${recipe.instructions}</p>
            </div>
            <div class="card-footer text-muted">
                You have ${matchingIngredients.length} out of ${totalIngredients} ingredients.
            </div>
        </div>
    `;
}

// Update the event listener for the form submission
document.querySelector('#form-ingredients').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    let userIngredients = getUserIngredients(); // Get the user's input
    let bestMatch = findBestMatchingRecipe(userIngredients); // Find the best matching recipe
    displayBestMatch(bestMatch); // Display the best matching recipe or message
});
