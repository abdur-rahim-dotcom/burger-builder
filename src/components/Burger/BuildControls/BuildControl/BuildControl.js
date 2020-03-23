import React from 'react';
import './BuildControl.css'

const BuildControl = (props) => {
    return (
        <div className='build-control'>
            <div className='label'>{props.label}</div>
            <button onClick={props.removeIngredient}
                disabled={props.disabledInfo}
                className='less btn'>Less</button>
            <button onClick={props.addIngredient} className='more btn'>More</button>
        </div>
    );
};

export default BuildControl;