// Add event listener to the form submission
function getUserIngredients() {
    const input = document.getElementById("ingredients").value;
    return input.split(",").map(item => item.trim());
}

let recipes = []; // Initialize recipes array to be filled from data.json

// Function to load recipes from data.json file
async function loadRecipes() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Failed to load recipes');
        recipes = await response.json();
    } catch (error) {
        console.error(error, error.message);
    }
}

// Function to find a recipe based on user ingredients
function findRecipe(userIngredients) {
    let foundRecipe = recipes.find(recipe => {
        return recipe.ingredients.every(ingredient => userIngredients.includes(ingredient));
    });
    return foundRecipe ? foundRecipe : 'No matching recipe found';
}

// Random recipe function
function getRandomRecipe() {
    let randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
}

// Display recipe function
function displayRecipe(recipe) {
    if (typeof recipe === 'string') {
        alert(recipe);
    } else {
        alert(`Recipe: ${recipe.name}\nIngredients: ${recipe.ingredients.join(', ')}\nInstructions: ${recipe.instructions}`);
    }
}

// Function to find the best matching recipe based on partial ingredient matches
function findBestMatchingRecipe(userIngredients) {
    let bestMatch = null;
    let highestMatchCount = 0;

    recipes.forEach(recipe => {
        const matchingIngredients = recipe.ingredients.filter(ingredient => userIngredients.includes(ingredient));
        const matchCount = matchingIngredients.length;

        if (matchCount > highestMatchCount) {
            highestMatchCount = matchCount;
            bestMatch = {
                recipe: recipe,
                matchingIngredients: matchingIngredients,
                totalIngredients: recipe.ingredients.length
            };
        }
    });

    return bestMatch ? bestMatch : 'No recipes found based on your ingredients';
}

// Function to display the best matching recipe, even if partially matched
function displayBestMatch(recipeMatch) {
    const resultDiv = document.getElementById('recipe-result');
    resultDiv.textContent = '';

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
document.querySelector('#form-ingredients').addEventListener('submit', async function(event) {
    event.preventDefault();

    if (recipes.length === 0) {
        await loadRecipes(); // Load recipes if not already loaded
    }

    let userIngredients = getUserIngredients();
    let bestMatch = findBestMatchingRecipe(userIngredients);
    displayBestMatch(bestMatch);
});
