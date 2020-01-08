import axios from 'axios';
const KEY = 'AIzaSyBhl8HEyfNWyrELRGJxA--4yxHCKClY4f0';

export default axios.create({
    baseURL:`https://www.googleapis.com/youtube/v3/search`,
    params:{
        part:'snippet',
        maxResults: 8,
        q:'',
        type:'video',
        key: KEY
    }
});