import React from 'react';

const VideoPlayer = ({videoToPlay}) =>
{
    if(!videoToPlay)
    {
        return <div>Waiting for you to search for videos</div>
    }

    const videoSRC=`https://www.youtube.com/embed/${videoToPlay.id.videoId}`;

    return(
        <div>
            <div className="ui embed">
               <iframe title="Video Player" src={videoSRC} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe> 
            </div>
            <h4>{videoToPlay.snippet.title}</h4>
            <p>{videoToPlay.snippet.description}</p>
        </div>
    );
}

export default VideoPlayer;