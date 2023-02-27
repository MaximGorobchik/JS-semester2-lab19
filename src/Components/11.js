import React from 'react';

class Task_11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: 'kolya', age: 30 },
                { name: 'Basil', age: 40 },
                { name: 'Peter', age: 50 }
            ],
            newName: '',
            newAge: ''
        };
    }

    handleNameChange = event => {
        this.setState({ newName: event.target.value });
    };

    handleAgeChange = event => {
        this.setState({ newAge: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const newUser = { name: this.state.newName, age: this.state.newAge };
        const newUsers = [...this.state.users, newUser];
        this.setState({ users: newUsers, newName: '', newAge: '' });
    };

    render() {
        const userRows = this.state.users.map((user, index) => (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
            </tr>
        ));

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>{userRows}</tbody>
                </table>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.newName}
                        placeholder="Enter name"
                        onChange={this.handleNameChange}
                    />
                    <input
                        type="text"
                        value={this.state.newAge}
                        placeholder="Enter age"
                        onChange={this.handleAgeChange}
                    />
                    <button type="submit">Add User</button>
                </form>
            </div>
        );
    }
}

export default Task_11;
