import React, { useState } from 'react'

function Task_7() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [surname, setSurname] = useState("");
    const [fullname, setFullname] = useState("");

    const handleFullname = () => {
        const newFullname = `${firstname} ${lastname} ${surname}`;
        setFullname(newFullname);
    }

    return (
        <div className="Task">
                <input type="text" value={firstname} placeholder="Enter firstname" onChange={(e) => setFirstname(e.target.value)} />
                <input type="text" value={lastname} placeholder="Enter lastname" onChange={(e) => setLastname(e.target.value)} />
                <input type="text" value={surname} placeholder="Enter surname" onChange={(e) => setSurname(e.target.value)} />
            <button onClick={handleFullname}>Display Full name</button>
            {fullname && <p>Your full name is {fullname}</p>}
        </div>
    );
}
export default Task_7;