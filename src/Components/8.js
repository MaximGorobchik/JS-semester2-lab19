import React, { useState } from 'react'

function Task_8() {
    const [userNames, setUserNames] = useState(['Kolya', 'Petya', 'Vasya']);
    const [newUserName, setNewUserName] = useState("");

    const handleAddUser = () => {
        const newUserNames = [...userNames, newUserName];
        setUserNames(newUserNames);
        setNewUserName('');
    }
    const handleDeleteUser = (index) => {
        const newUserNames = userNames.filter((_, i) => i !== index);
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
            <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
            <button onClick={handleAddUser}>Add name</button>
        </div>
    );
}
export default Task_8;