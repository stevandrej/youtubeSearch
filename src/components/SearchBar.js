import React from 'react';

class SearchBar extends React.Component{

    state = {
        search:''
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.search);
    }

    changeSearchInput = (e) =>
    {
        this.setState({search: e.target.value});
    }

    render(){
        return(
            <div className="ui segment" id="search-bar">
               <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <div className="ui fluid icon input">
                            <input type="text" placeholder="Search for videos..." value={this.state.search} onChange={this.changeSearchInput}/>
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
