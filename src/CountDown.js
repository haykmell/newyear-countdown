import React from 'react'
import { GiPineTree } from 'react-icons/gi';

const CountDown = ({ timerComponents }) => {
    return (
        <>
            <h1>New Year<GiPineTree /></h1>
            <div className="time-info">
                {timerComponents.length ? timerComponents : <span>Time's up! Happy new year Hayk!</span>}
            </div>
        </>
    )
}

export default CountDown
