import React from 'react'
import FoodItem from './FoodItem'

const food = [
    {
        id: 1,
        foodName: "Pancakes",
        price: "$4.99",
        sides: "Bacon"        
    },
    {
        id: 2,
        foodName: "Western Omelette",
        price: "$8.99",
        sides: "Home Fries"
    },
    {
        id: 3,
        foodName: "Oatmeal",
        price: "$3.99",
        sides: "Fruit"
    },
    {
        id: 4,
        foodName: "Waffles",
        price: "$6.99",
        sides: "Sausage"
    }
]

function FoodItems(){
    return(
        <div className="food-items-container">
            {food.map(foodObject => <FoodItem key={foodObject.id} item={foodObject} />)}
        </div>
    )
}


export default FoodItems