import React from 'react';

class VideoItem extends React.Component {

    render() {
        return(
            <div className="item item-cursor" onClick={()=>this.props.handleClick(this.props.video)}>
                <div className="ui tiny image">
                    <img src={this.props.video.snippet.thumbnails.high.url} alt={this.props.video.snippet.title}/>
                </div>
                <div className="middle aligned content">
                    <h5>{this.props.video.snippet.title}</h5>
                </div>
            </div>
        );
    }
}

export default VideoItem;