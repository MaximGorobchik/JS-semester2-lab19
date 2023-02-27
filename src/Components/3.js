import React from 'react'

class Task_3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Age: null, Year: null };
    }
    handleChange = (event) => {
        const age = parseInt(event.target.value);
        const currentYear = new Date().getFullYear();
        const year = currentYear - age;
        this.setState({ Age: age, Year: year});
    }
    render() {
        return (
            <div className="Task">
                <input type="number" placeholder="Enter age" onChange={this.handleChange} />
                <p>{this.state.Year || 'unknown'} year</p>
            </div>
        );
    }
}
export default Task_3;