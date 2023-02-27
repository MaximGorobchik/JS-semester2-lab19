import React, { useState } from 'react'

function Task_1() {
    const [userNames, setUserNames] = useState(['Kolya', 'Vasya', 'Petro', 'Ivan', 'Dmytro']);

    const handleAddUser = () => {
        const newUserNames = [...userNames, 'punkt'];
        setUserNames(newUserNames);
    }
    const handleDeleteUser = (index) => {
        const newUserNames = userNames.filter((_, i) => i !== index);
        setUserNames(newUserNames);
    }
    const handleDeleteLastUser = () => {
        const newUserNames = userNames.slice(0,-1);
        setUserNames(newUserNames);
    }
    return (
        <div className="Task">
            <ul>
                {userNames.map((userName, i) => (<li key={i}>
                    {userName}
                    <button onClick={() => handleDeleteUser(i)}>Delete</button>
                </li>))}
            </ul>
            <button onClick={handleAddUser}>Add name</button>
            <button onClick={handleDeleteLastUser}>Delete last name</button>
        </div>
    );
}
export default Task_1;