import React from 'react';
import VideoItem from './VideoItem';


class VideoList extends React.Component{
    render(){
        return(
            <div className="ui divided items">
                    {
                        this.props.responseProps.map((videoItem, index) => {
                            return <VideoItem video={videoItem} key={index} handleClick={this.props.handleClick}/>
                        })
                    }
            </div>
        );
    }
}

export default VideoList;