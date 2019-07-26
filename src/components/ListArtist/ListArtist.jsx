import React from 'react';
import { GetImages } from 'components';
import { Link } from 'react-router-dom';
import styles from './ListArtist.module.css';

class ListArtist extends React.Component {
    
    render() {

        const { artists } = this.props; 


        return (

            <GetImages render={ ( getImages ) => (
                <ul className={styles.containerListArtist}>
                   { artists.map( (element, index) => (
                       
                       <Link 
                            key={index} 
                            to={`/artista/${element.id}`}
                            className={ styles.artistLink }
                            >
                            <li className={ styles.itemArtist } key={index}>
                                <h2 className={ styles.nameArtist }>{ element.name }</h2>
                                <img className={ styles.imageUnavailable } src={ getImages(element.images) } alt={element.name} />
                            </li>
                       </Link>
    
                   )) }
                </ul>

            )} />
            
        );
    }
}

export default ListArtist;