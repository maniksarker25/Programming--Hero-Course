import React from "react";

const Meal = ({ meal, handleOrder }) => {
  const { strMealThumb, strCategory, strIngredient4, idMeal } = meal;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={strMealThumb} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strIngredient4}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleOrder(meal)}
              className="btn btn-primary"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
