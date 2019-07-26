import React from 'react';
import { InfoArtist, InfoAlbums } from 'components';
import { SomosClient } from 'utils';

// import styles from './Artist.module.css'

class Artist extends React.Component {
    
    client = new SomosClient();
    
    constructor(props) {
        
        super(props)
        this.state = {
            artist: {},
            albums: []
        }
        
    }
    
    componentDidMount() {
        let path = window.location.pathname;
        let artistID = path.split(/artista\//g)[1];

    
        this.client.getArtistAlbums(artistID).then(
            response => {
                this.setState({ albums: response.data.items })
            }
        )
                                 
        this.client.getArtistID(artistID).then(
            response => {
                this.setState({ artist: response.data })
            }
        )


    }

    render() {
        const { artist, albums } = this.state;

        return (
            <div>
                <InfoArtist artist={ artist } />
                <InfoAlbums albums={ albums } />
            </div>
        )
    }
}

export default Artist;