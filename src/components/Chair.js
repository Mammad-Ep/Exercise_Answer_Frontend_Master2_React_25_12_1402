import React, { useState, useEffect, useReducer } from 'react';
import '../css/main_style3.scss';

// const initStatus = {
//     state_chair: 'unselected',
//     message: ''
// };

const Chair = (props) => {
    const { number, stateChair, price, cost } = props;

    const [state, setState] = useState(stateChair);

    const changeState = (event) => {
        const status = event.target.dataset.status;
        if (status == 'unselected') {
            event.target.style = 'background-color:rgb(18, 242, 70)';
            setState('selected')

        } else if (status == 'selected') {
            event.target.style = 'background-color:orange';
            setState('waiting-payment')

        } else if (status == 'waiting-payment') {
            event.target.style = 'background-color:rgb(242, 45, 45)';
            setState('booked');
            const price = event.target.dataset.price
            cost(Number(price))

        } else if (status == 'booked') {
            alert('این صندلی رزرو شده')
        }
    };

    return (
        <>
            <button className='btn-chair' data-price={price} data-status={state} type="button"
                onClick={changeState}>{number}</button>

        </>
    );
}

export default Chair;