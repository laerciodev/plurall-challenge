import React from 'react';
import { SomosClient } from 'utils';

import { InputArtist } from 'components';

import styles from './UserInput.module.css';


class UserInput extends React.Component {
    
    client = new SomosClient();

    constructor() {
        super()
        this.state = {
            value: '',
            artists: []
        }
    }
  

    render() {
        return (
            <React.Fragment>
                <InputArtist onChange={ this.handleChange } />
                <div className={styles.artist}>
                    <h1 className={styles.artistName}>{this.props.value}</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default UserInput;