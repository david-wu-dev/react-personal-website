import React from 'react';

class NavBar extends React.Component {
    constructor() {
        super()
        this.state = {clicks: 0}
    }

    handleClick = () => {
        this.setState({clicks: this.state.clicks + 1})
    }

    render() {
        return (
            <button onClick = {this.handleClick} className='Nav-bar'>
                I have been clicked {this.state.clicks} times
            </button>
        )
    }
}

export default NavBar