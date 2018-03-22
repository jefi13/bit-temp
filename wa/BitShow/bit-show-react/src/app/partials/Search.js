import React from 'react';


class Search extends React.Component {
    constructor(props) {
        super()
        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        this.props.changeValue(event.target.value);
        
        this.setState({ value: event.target.value });
       
    }

    resetChange = () => {
        this.props.changeValue("");

        this.setState({ value: "" });
    }

    render() {
        return (
            <div>
            <input type="search" onChange={this.handleChange} name="" id="search" placeholder="Search" />
            <ul className="shows">
            </ul>
        </div>
        )
    }
}

export default Search;