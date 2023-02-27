import React from 'react'

class Task_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputText:''};
    }
    handleChange = (event) => {
        this.setState({ inputText: event.target.value });
    }
    render() {
        return (
            <div className="Task">
                <input type="text" placeholder = "Enter text" value={this.state.inputText} onChange={this.handleChange} />
                <p>{this.state.inputText.toUpperCase() || 'unknown text'}</p>
            </div>
        );
    }
}
export default Task_2;