// Add event listener to the form submission
function getUserIngredients() {
    const input = document.getElementById("ingredients").value; // get the value of textarea
    return input.split(",").map(item => item.trim()); // split at commas and clear white spaces.
}

let recipes = []; // Initialize recipes array to be filled from data.json

// Function to load recipes from data.json file
async function loadRecipes() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Failed to load recipes');
        recipes = await response.json();
    } catch (error) {
        console.error(error);
    }
};


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
