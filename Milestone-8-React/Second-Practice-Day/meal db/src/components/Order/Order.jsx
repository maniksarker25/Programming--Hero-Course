import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import { addToDb, getMealData } from '../../unilities/fakeDb';

const Order = () => {
    const [meals,setMeals] = useState([]);
    const [cart,setCart] = useState([])
    // even handle 
    const handleOrder = (meal) =>{
        let newCart = [];
     const exists = cart.find(m=>m.idMeal == meal.idMeal);
     if(exists){
        return alert ('Please oder other meal')
     }
     else{
        newCart = [...cart,meal]
     }
     setCart(newCart);
     addToDb(meal.idMeal);

    }
    useEffect(()=>{
        const storedMeal = getMealData();
        let saveMeal = [];
        if(storedMeal){
            storedMeal.forEach(singleMealId => {
                const addMeal = meals.find(p=>p.idMeal == singleMealId);
                if(addMeal){
                    saveMeal.push(addMeal);
                }
            })
        }
        setCart(saveMeal);
    },[meals])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])
    return (
        <div className=' lg:flex justify-between'>
            <div className='lg:w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
                {
                    meals.map(meal=><Meal handleOrder={handleOrder} meal={meal} key={meal.idMeal}></Meal>)
                }

            </div>
            <div className='bg-orange-300  text-center lg:w-3/12'>
                <h1 className=' text-2xl text-center ' >Order summary</h1>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;