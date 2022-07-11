const express = require('express');
const ejs = require('ejs');
const axios = require('axios');


const app = express();

//public folder for css
app.use(express.static('public'));
//views folder for ejs
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => {
        const name = response.data.meals[0].strMeal;
        const image = response.data.meals[0].strMealThumb;
        const cuisine = response.data.meals[0].strArea;
        const category = response.data.meals[0].strCategory;
        const instructions = response.data.meals[0].strInstructions;
        const ingredients = response.data.meals[0].strIngredient1 + ' ' + response.data.meals[0].strIngredient2 + ' ' + response.data.meals[0].strIngredient3 + ' ' + response.data.meals[0].strIngredient4 + ' ' + response.data.meals[0].strIngredient5 + ' ' + response.data.meals[0].strIngredient6 + ' ' + response.data.meals[0].strIngredient7 + ' ' + response.data.meals[0].strIngredient8 + ' ' + response.data.meals[0].strIngredient9 + ' ' + response.data.meals[0].strIngredient10 + ' ' + response.data.meals[0].strIngredient11 + ' ' + response.data.meals[0].strIngredient12 + ' ' + response.data.meals[0].strIngredient13 + ' ' + response.data.meals[0].strIngredient14 + ' ' + response.data.meals[0].strIngredient15 + ' ' + response.data.meals[0].strIngredient16 + ' ' + response.data.meals[0].strIngredient17 + ' ' + response.data.meals[0].strIngredient18 + ' ' + response.data.meals[0].strIngredient19 + ' ' + response.data.meals[0].strIngredient20;
        const src = response.data.meals[0].strSource;
        res.render('index', {name, image, category, instructions, ingredients, cuisine, src});
    })
});

app.listen(port, function() {
    console.log('Server is running on port ' + port);
})