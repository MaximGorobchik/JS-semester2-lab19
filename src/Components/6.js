import React, { useState } from 'react'

function Task_6() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    const handleSum = () => {
        setSum(num1 + num2);
    };

    return (
        <div className="Task">
            <input type="number" placeholder="Enter number" onChange={(e) => setNum1(+e.target.value)} />
            <input type="number" placeholder="Enter number" onChange={(e) => setNum2(+e.target.value)} />
            <button onClick={handleSum}>Sum</button>
            <p>Sum = {sum}</p>
        </div>
    );
}
export default Task_6;