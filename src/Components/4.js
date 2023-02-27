import React from 'react'

class Task_4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Fullname:''};
    }
    handleFullname = (event) => {
        this.setState({ Fullname: event.target.value });
    }
    render() {
        const [firstname, lastname, surname] = this.state.Fullname.split(' ');
        return (
            <div className="Task">
                <input type="text" placeholder="Enter FLS" onChange={this.handleFullname} />
                <p>{firstname || 'unknown firstname'}</p>
                <p>{lastname || 'unknown lastname'}</p>
                <p>{surname || 'unknown surname'}</p>
            </div>
        );
    }
}
export default Task_4;