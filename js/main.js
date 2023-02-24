// Define the URL for fetching random drinks
const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

// Define an array to store the randomly generated drinks
const drinks = [];

// Fetch 3 random drinks and add them to the drinks array
for (let i = 0; i < 3; i++) {
  fetch(url)
    .then(response => response.json())
    .then(data => drinks.push(data.drinks[0]))
    .then(() => {
      // If all 3 drinks have been fetched, update the carousel
      if (drinks.length === 3) {
        updateCarousel(drinks);
      }
    });
}

// Define a function to update the carousel with the fetched drinks
function updateCarousel(drinks) {
  // Get the carousel items
  const slide1 = document.getElementById('slide-1');
  const slide2 = document.getElementById('slide-2');
  const slide3 = document.getElementById('slide-3');

  // Update the carousel items with the fetched drinks
  slide1.innerHTML = `
    <img src="${drinks[0].strDrinkThumb}" class="d-block w-100" alt="${drinks[0].strDrink}">
    <div class="carousel-caption d-none d-md-block">
      <h5>${drinks[0].strDrink}</h5>
      <p>${drinks[0].strInstructions}</p>
    </div>
  `;
  slide2.innerHTML = `
    <img src="${drinks[1].strDrinkThumb}" class="d-block w-100" alt="${drinks[1].strDrink}">
    <div class="carousel-caption d-none d-md-block">
      <h5>${drinks[1].strDrink}</h5>
      <p>${drinks[1].strInstructions}</p>
    </div>
  `;
  slide3.innerHTML = `
    <img src="${drinks[2].strDrinkThumb}" class="d-block w-100" alt="${drinks[2].strDrink}">
    <div class="carousel-caption d-none d-md-block">
      <h5>${drinks[2].strDrink}</h5>
      <p>${drinks[2].strInstructions}</p>
    </div>
  `;
}
