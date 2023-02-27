import React from 'react';

class Task_9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hrefs: [
                { href: '1.html', text: 'Link 1' },
                { href: '2.html', text: 'Link 2' },
                { href: '3.html', text: 'Link 3' },
            ],
            newHref: '',
            newText: '',
        };
    }

    handleNewHrefChange = (e) => {
        this.setState({ newHref: e.target.value });
    };

    handleNewTextChange = (e) => {
        this.setState({ newText: e.target.value });
    };

    handleAddLink = () => {
        const { hrefs, newHref, newText } = this.state;
        this.setState({
            hrefs: [...hrefs, { href: newHref, text: newText }],
            newHref: '',
            newText: '',
        });
    };

    render() {
        const { hrefs, newHref, newText } = this.state;

        return (
            <div className = "Task">
                <ul>
                    {hrefs.map(({ href, text }) => (
                        <li key={href}>
                            <a href={href}>{text}</a>
                        </li>
                    ))}
                </ul>
                <div>
                    <input
                        type="text"
                        value={newHref}
                        placeholder="Enter href"
                        onChange={this.handleNewHrefChange}
                    />
                    <input
                        type="text"
                        value={newText}
                        placeholder="Enter link text"
                        onChange={this.handleNewTextChange}
                    />
                    <button onClick={this.handleAddLink}>Add Link</button>
                </div>
            </div>
        );
    }
}

export default Task_9;
