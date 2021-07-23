import React from 'react'


function FoodItem(props){
    return(
        <div className="food-item">
            <h5>{props.item.foodName}</h5>
            <p>Sides: {props.item.sides}</p>
            <p className="food-price">{props.item.price}</p>
        </div>
    )
}



export default FoodItem