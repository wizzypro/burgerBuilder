import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} </li>;
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <h4>Order price: {props.price.toFixed(2)} </h4>
            <p>Continue to checkout?</p>
            <Button 
            clicked={props.cancel}
            btnType={'Danger'} >CANCEL</Button>
            <Button 
            clicked={props.continue}
            btnType={'Success'} >CONTINUE</Button>
            
        </Aux>
    );
}

export default orderSummary;