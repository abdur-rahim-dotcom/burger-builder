import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';
const BuildControls = (props) => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
        { label: 'Bacon', type: 'bacon' },
    ]
    return (
        <div className='build-controls'>
            <p>Current Price: <strong>$ {props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    addIngredient={() => props.addIngredient(ctrl.type)}
                    removeIngredient={() => props.removeIngredient(ctrl.type)}
                    disabledInfo={props.disabledInfo[ctrl.type]}
                ></BuildControl>
            })}
        </div >
    );
};

export default BuildControls;