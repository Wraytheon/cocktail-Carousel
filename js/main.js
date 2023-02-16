const randomApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";


function getDrinkData(url) {

  // Fetch the drink data from the API.
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //Log the data retrieved
      console.log(data.drinks[0])
      
    });
}
