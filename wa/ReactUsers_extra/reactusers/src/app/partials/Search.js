import React from 'react';

class Search extends React.Component {

    state = {
        inputValue: ""
    }
    
    

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <div class="row">
                <div className="col s1">
                    <i className="material-icons">search</i>
                </div>
                <div className="col s6">
                    <input type="search" name="search" id="" />
                </div>
            </div>
        )
    }

}

export default Search;