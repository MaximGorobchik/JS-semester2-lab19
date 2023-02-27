import React, { useState } from 'react'

function Task_5() {
    const [input, setInput] = useState("");
    const [display, setDisplay] = useState("");

    const handleSetInput = (event) => {
        event.preventDefault();
        setDisplay(input);
    };

        return (
            <div className="Task">
                <form onSubmit={handleSetInput}>
                    <input type="text" placeholder="Enter text" onChange={(e) => setInput(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
                <p>{display}</p>
            </div>
        );
}
export default Task_5;