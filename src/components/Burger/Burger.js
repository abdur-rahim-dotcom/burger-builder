import React from 'react'
import './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredient).map(igKey => {
        return [...Array(props.ingredient[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey}></BurgerIngredients>
        })
    }).reduce((existArr, newArr) => {
        return existArr.concat(newArr)
    }, [])
    if (transformedIngredient.length === 0) {
        transformedIngredient = 'Please start adding ingredients'
    }
    return (
        <div className='burger'>
            <BurgerIngredients type='bread-top'></BurgerIngredients>
            {transformedIngredient}
            <BurgerIngredients type='bread-bottom'></BurgerIngredients>
        </div>
    )
}
export default Burger;