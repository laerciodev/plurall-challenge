import React from 'react'
import styles from './InfoArtist.module.css'

class InfoArtist extends React.Component {
    
    render() {
        
        const { artist } = this.props;
        
        let urlImage = '';

        for (let index in artist.images) {
            
            if ( index === '2' ) {
                urlImage = artist.images[index].url
            }

        }

        let listGenres = [];
        
        for (let index in artist.genres) {
            listGenres.push(artist.genres[index]);
        }
 
        return (

            <div className={ styles.infoArtist }>
                <h2 className={ styles.nameArtist }>{ artist.name }</h2>
                <p className={ styles.popularity }>Popularidade: { artist.popularity }</p>
                { urlImage !== '' ? ( <img src={ urlImage } alt={ artist.name } /> ) : <p>Nenhuma imagem disponível</p> }
                <p className={ styles.genres }>Gêneros musicais:</p>
                <ul className={ styles.listGenres }> 
                    { listGenres.map( (genre, index) => (
                        <li key={ index } className={ styles.genre } >{ genre }</li>            
                    ))}
                </ul> 
            </div>

        );
    }
}

export default InfoArtist