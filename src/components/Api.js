import axios from 'axios';

export default axios.create({
    baseURL:`https://www.googleapis.com/youtube/v3/search`,
    params:{
        part:'snippet',
        maxResults: 8,
        q:'',
        type:'video',
        key: process.env.REACT_APP_VIDEO_API_KEY
    }
});