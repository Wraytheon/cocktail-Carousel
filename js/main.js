// const randomApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

// function getDrinkData(url) {

//   // Fetch the drink data from the API.
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       //Log the data retrieved
//       console.log(data.drinks[0])

//     });
// }

// const randomApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
// const drinkData = [];

// function getDrinkData(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.drinks[0])
//       // Add the retrieved drink data to the array.
//       drinkData.push(data.drinks[0]);
//       // If we have retrieved data for 3 drinks, create the carousel.
//       if (drinkData.length === 3) {
//         createCarousel();
//       }
//     });
// }

// function createCarousel() {
//   const carouselContainer = document.getElementById("carousel-container");

//   // Loop through the drink data array and create a carousel item for each drink.
//   for (let i = 0; i < drinkData.length; i++) {
//     const drink = drinkData[i];
//     const carouselItem = document.createElement("div");
//     carouselItem.classList.add("carousel-item");

//     // Add the drink information to the carousel item.
//     const drinkInfo = document.createElement("div");
//     drinkInfo.classList.add("drink-info");

//     const drinkName = document.createElement("h2");
//     drinkName.classList.add("drink-name");
//     drinkName.textContent = drink.strDrink;

//     const ingredients = document.createElement("ul");
//     ingredients.classList.add("ingredients");

//     for (let i = 1; i <= 15; i++) {
//       const ingredient = drink[`strIngredient${i}`];
//       const measurement = drink[`strMeasure${i}`];

//       if (ingredient) {
//         const ingredientItem = document.createElement("li");
//         const measurementSpan = document.createElement("span");
//         measurementSpan.classList.add("measurement");
//         measurementSpan.textContent = measurement;
//         ingredientItem.textContent = ingredient;
//         ingredientItem.insertBefore(measurementSpan, ingredientItem.firstChild);
//         ingredients.appendChild(ingredientItem);
//       }
//     }

//     const instructions = document.createElement("p");
//     instructions.classList.add("instructions");
//     instructions.textContent = drink.strInstructions;

//     drinkInfo.appendChild(drinkName);
//     drinkInfo.appendChild(ingredients);
//     drinkInfo.appendChild(instructions);

//     // Add the drink image to the carousel item.
//     const drinkImage = document.createElement("div");
//     drinkImage.classList.add("drink-image");

//     const image = document.createElement("img");
//     image.src = drink.strDrinkThumb;
//     image.alt = drink.strDrink;

//     drinkImage.appendChild(image);

//     carouselItem.appendChild(drinkInfo);
//     carouselItem.appendChild(drinkImage);

//     carouselContainer.appendChild(carouselItem);
//   }

//   // Set the first carousel item to be the active slide.
//   carouselContainer.firstElementChild.classList.add("active");
// }
const randomApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const carouselInner = document.querySelector('.carousel-inner');
const carousel = document.querySelector('.carousel');
  
  function getDrinkData(url) {
    // Fetch the drink data from the API.
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Create a new carousel item.
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        if (carouselInner.childElementCount === 0) {
          carouselItem.classList.add('active');
        }
  
        // Create a new drink info element.
        const drinkInfo = document.createElement('div');
        drinkInfo.classList.add('drink-info');
  
        // Add the drink name to the drink info element.
        const drinkName = document.createElement('h2');
        drinkName.classList.add('drink-name');
        drinkName.textContent = data.drinks[0].strDrink;
        drinkInfo.appendChild(drinkName);
  
        // Add the ingredients and measurements to the drink info element.
        const ingredientsList = document.createElement('ul');
        ingredientsList.classList.add('ingredients');
        for (let i = 1; i <= 15; i++) {
          if (data.drinks[0][`strIngredient${i}`]) {
            const ingredient = document.createElement('li');
            const measurement = document.createElement('span');
            measurement.classList.add('measurement');
            measurement.textContent = data.drinks[0][`strMeasure${i}`];
            ingredient.appendChild(measurement);
            ingredient.textContent += ` ${data.drinks[0][`strIngredient${i}`]}`;
            ingredientsList.appendChild(ingredient);
          }
        }
        drinkInfo.appendChild(ingredientsList);
  
        // Add the instructions to the drink info element.
        const instructions = document.createElement('p');
        instructions.classList.add('instructions');
        instructions.textContent = data.drinks[0].strInstructions;
        drinkInfo.appendChild(instructions);
  
        // Add the drink info element to the carousel item.
        carouselItem.appendChild(drinkInfo);
  
        // Create a new drink image element.
        const drinkImage = document.createElement('div');
        drinkImage.classList.add('drink-image');
  
        // Add the drink image to the drink image element.
        const image = document.createElement('img');
        image.src = data.drinks[0].strDrinkThumb;
        image.alt = data.drinks[0].strDrink;
        drinkImage.appendChild(image);
  
        // Add the drink image element to the carousel item.
        carouselItem.appendChild(drinkImage);
  
        // Add the carousel item to the carousel.
        carousel.appendChild(carouselItem);
      });
  }
  
  // Get the data for the first carousel item on page load.
  getDrinkData(randomApiUrl);
window.addEventListener("load", function () {
  getDrinkData(randomApiUrl)
})

setInterval(() => {
  const firstItem = carousel.firstElementChild;
  carousel.appendChild(firstItem);
}, 5000);
