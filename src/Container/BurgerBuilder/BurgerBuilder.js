import React, { useState } from 'react';
import HOC from '../../HOC/HOC';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const BurgerBuilder = () => {
    const INGREDIENT_PRICE = {
        salad: 0.5,
        bacon: 0.7,
        meat: 1.3,
        cheese: 1
    }
    const [ingredientDetail, setIngredientDetail] = useState({
        ingredient: { salad: 0, bacon: 0, meat: 0, cheese: 0 },
        basicPrice: 4,
    })
    let ingredient = ingredientDetail.ingredient;
    const addIngredient = (type) => {
        const oldCount = ingredient[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...ingredient
        }
        updatedIngredients[type] = updatedCount;
        const oldPrice = ingredientDetail.basicPrice;
        const priceAddition = INGREDIENT_PRICE[type];
        const updatedPrice = oldPrice + priceAddition;
        setIngredientDetail({ ingredient: updatedIngredients, basicPrice: updatedPrice })
    }
    const removeIngredient = (type) => {
        const oldCount = ingredient[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...ingredient
        }
        updatedIngredients[type] = updatedCount;
        const oldPrice = ingredientDetail.basicPrice;
        const priceSubtraction = INGREDIENT_PRICE[type]
        const updatedPrice = oldPrice - priceSubtraction;
        setIngredientDetail({ ingredient: updatedIngredients, basicPrice: updatedPrice })
    }
    const disabledInfo = {
        ...ingredient
    }
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
        <HOC>
            <Burger ingredient={ingredient}></Burger>
            <BuildControls addIngredient={addIngredient}
                removeIngredient={removeIngredient}
                disabledInfo={disabledInfo}
                price={ingredientDetail.basicPrice}
            ></BuildControls>
        </HOC>
    )
}

export default BurgerBuilder;