import React from 'react';

class Task_10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
            indexToShow: '',
            itemToShow: null,
        };
    }

    handleIndexToShowChange = (e) => {
        this.setState({ indexToShow: e.target.value });
    };

    handleShowItem = () => {
        const { items, indexToShow } = this.state;
        const parsedIndexToShow = parseInt(indexToShow);
        if (!isNaN(parsedIndexToShow) && parsedIndexToShow < items.length) {
            const itemToShow = items[parsedIndexToShow];
            this.setState({ itemToShow });
        }
        else {
            this.setState({ itemToShow: 'unknown' });
        }
    };

    render() {
        const { items, indexToShow, itemToShow } = this.state;

        return (
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div>
                    <input
                        type="text"
                        value={indexToShow}
                        placeholder="Enter index to show"
                        onChange={this.handleIndexToShowChange}
                    />
                    <button onClick={this.handleShowItem}>Show Item</button>
                </div>
                {itemToShow && (
                    <div>
                        <p>Item at index {indexToShow}: {itemToShow}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Task_10;
