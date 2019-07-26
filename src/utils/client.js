import { getToken } from 'utils'
import axios from 'axios';

class SomosClient {
  
  constructor() {}
  
  onError = error => {}
  
  async getArtists(artistName) {

    return await axios({
      url: `https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=10`, 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      }
    })
    .then((response) => {
      return response.data;
    }).catch( (err) => console.log(err) )
  }

  async getArtistAlbums(artistID) {

    return await axios({
      url: `https://api.spotify.com/v1/artists/${artistID}/albums?market=BR&limit=10`, 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      }
    })
    .then((response) => {
      return response
    })
    .catch( (err) => console.log(err) )
  
  }

  async getArtistID(artistID) {

    return await axios({
      url: `https://api.spotify.com/v1/artists/${artistID}`, 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      }
    })
    .then((response) => {
      return response
    })
    .catch( (err) => console.log(err) )
  }
  
}

export default SomosClient;

