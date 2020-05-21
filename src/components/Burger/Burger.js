import React from 'react'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
import './Burger.css'

const Burger = (props) => {
    //Variável para armazenar cada elemento e quantidade do objeto props.ingredients
    let transformedIngredients = Object.keys(props.ingredients)//transformando o objeto ingredients em um array
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
            });//quantidades de cada elemento no array
        })
        .reduce((arr,el) => {
            return arr.concat(el);
        } , []);
    if(transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please start inserting ingredients</p>
    }
    return (
        <div className = 'BurgerGeral'>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger