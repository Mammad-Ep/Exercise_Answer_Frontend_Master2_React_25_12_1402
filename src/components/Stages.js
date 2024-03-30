import React, { useState, useEffect, useReducer } from 'react';
import '../css/main_style3.scss';
import Chair from './Chair';

const initState = {
    chairs: [],
    error: ''
};

const Stages = () => {
    const [sum, setSum] = useState(0);
    const [count, setCount] = useState(0);

    const reducer = (state, action) => {
        switch (action.type) {
            case 'success':
                return { ...state, chairs: action.data }

            case 'field':
                return { ...state, error: action.errorMessage }

            default:
                return initState;
        }
    };

    const [data, dispatch] = useReducer(reducer, initState);

    const cost_of_reservations = (price) => {
        setSum(prevSum => prevSum + price);
        setCount(prevCount => prevCount + 1)
    };


    useEffect(() => {
        fetch('/json/chairs.json')
            // .then(response => setData1(response.json()))
            .then(response => response.json())
            .then(response => dispatch({ type: 'success', data: response.chairs }))
            .catch(error => dispatch({ type: 'field', errorMessage: error.message }))
    }, []);

    
    return (
        < div >
            <div className='stage-container'>
                <div className='stage-title'>Stage Concert</div>
                <div className='reservation-box'>
                    <div className='reservation-count'>
                        Count : <span>{count}</span>
                    </div>
                    <div className='reservation-amount'>
                        Sum : <span>{sum}</span>
                    </div>
                </div>

                <div className="concert-chairs-container">

                    <div className='section-B'>
                        {data.chairs.map((chair) => (
                            chair.section == 'B' && (
                                <Chair key={chair.number} number={chair.number} stateChair={chair.state} price={chair.price} cost={cost_of_reservations} />
                            )
                        ))}
                    </div>

                    <div className='section-A'>
                        {data.chairs.map((chair) => (
                            chair.section == 'A' && (
                                <Chair key={chair.number} number={chair.number} stateChair={chair.state} price={chair.price} cost={cost_of_reservations} />
                            )
                        ))}

                    </div>

                    <div className='section-C'>
                        {data.chairs.map((chair) => (
                            chair.section == 'C' && (
                                <Chair key={chair.number} number={chair.number} stateChair={chair.state} price={chair.price} cost={cost_of_reservations} />
                            )
                        ))}
                    </div>

                    <div className='section-D'>
                        {data.chairs.map((chair) => (
                            chair.section == 'D' && (
                                <Chair key={chair.number} number={chair.number} stateChair={chair.state} price={chair.price} cost={cost_of_reservations} />
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Stages;