import React from 'react';
import SearchBar from './components/SearchBar';
import Api from './components/Api';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import './Style.css';

class App extends React.Component {

    state={
        videos:[],
        selectedVideo:null
    }

    onSubmit = async (search) =>
    {
        const response = await Api.get('',
            {       
                params:
                    {
                        q:search
                    }
            }
        )

        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    }


    handleClick=(e)=>
    {
        this.setState({selectedVideo: e});
    }

    render(){
        return(
            <div className="ui container">
                <div className="ui relaxed grid">
                    <div className="sixteen wide column">
                        <SearchBar onSubmit={this.onSubmit}/>
                    </div>
                </div>
                
                <div className="ui relaxed grid">
                    <div className="ten wide column">
                        <VideoPlayer videoToPlay={this.state.selectedVideo}/>
                    </div>

                    <div className="six wide column">
                        <VideoList responseProps={this.state.videos} handleClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;