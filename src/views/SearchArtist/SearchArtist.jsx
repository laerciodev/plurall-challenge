import React from 'react';

// import { Button } from '@plurall/elo';
import { Link } from 'react-router-dom';
import { InputArtist } from 'components';

import styles from './SearchArtist.module.css';

class SearchArtist extends React.Component {
    
    render() {

        return (
            <React.Fragment>
                <InputArtist />
                {/* <Link to="/">
                    <Button className={styles.buttonGoBack}>Voltar</Button>
                </Link> */}
            </React.Fragment>  
        )
    }

} 

export default SearchArtist;