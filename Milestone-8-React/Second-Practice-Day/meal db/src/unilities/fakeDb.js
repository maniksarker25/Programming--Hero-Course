const addToDb = (id)=>{
    console.log(id)
    let mealCart = [];
    const previousMeal = JSON.parse(localStorage.getItem('meal-cart'));
    if(previousMeal){
        mealCart = [...previousMeal,id]
    }
    else{
        mealCart.push(id);
    }
    localStorage.setItem('meal-cart',JSON.stringify(mealCart))
}

const getMealData = ()=>{
    const previousMeal = localStorage.getItem('meal-cart')
    return JSON.parse(previousMeal);
}
export {addToDb,getMealData};