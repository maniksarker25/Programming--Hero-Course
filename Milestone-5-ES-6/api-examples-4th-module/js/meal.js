const loadMeals = (searchText) => {
    const url = `https://themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = meals => {
    // step:1 ---get container element
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal)
        // step: 2 ----- create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // step: 3- set content of the child 
        mealDiv.innerHTML = `
        <div class="col">
                    <div class="card h-100">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>

                                <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meal-details">
                                Details</button>
                        </div>
                    </div>
                </div>
        `
        // step: 4 --- appendchild
        mealsContainer.appendChild(mealDiv);

    })
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);

}

// --------------way one --------------------------
// const loadMealDetail = idMeal => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayMealDetails(data.meals[0]))
//     .catch(error => {
//         console.log(error)
//     })

// }

// way -2-------- async await--------
const loadMealDetail2 = async (idMeal) => {
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals[0]);
    }
    catch (error) {
        console.log(error)
    }
}

const displayMealDetails = meal => {
    console.log(meal)
    document.getElementById('meal-detailsLabel').innerText = meal.strMeal;
    const mealDetails = document.getElementById('meal-detailsBody');
    mealDetails.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    <p>${meal.strMeal}</p>
    <p>${meal.strCategory}</p>
    `


}


loadMeals('fish')