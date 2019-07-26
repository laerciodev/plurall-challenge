import React from 'react';
import { format } from 'date-fns';
import styles  from './InfoAlbums.module.css';

class InfoAlbums extends React.Component {
    
    render() {
        const { albums } = this.props;

        return (
            <div className={ styles.infoArtist }>
        
                <ul className={ styles.listAlbums }>
                    { albums.map( (album, index) => (
                       <li key={index} className={ styles.itemAlbum }>
                            <figure>
                                <img src={ album.images[1].url } alt={ album.name } />
                                <figcaption className={ styles.titleAlbum }>Álbum: { album.name }</figcaption>
                                <time className={ styles.dateRelease }>Data de lançamento: { format( album.release_date, 'DD/MM/YYYY' ) }</time>    
                            </figure>
                        </li>
                    )) }
                </ul>
                
            </div>
        )
    }
}

export default InfoAlbums;