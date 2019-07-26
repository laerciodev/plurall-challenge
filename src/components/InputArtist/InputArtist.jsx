import React from 'react';
import { ListArtist } from 'components';
import { SomosClient } from 'utils';

import styles from './InputArtist.module.css'

class InputArtist extends React.Component {

    client = new SomosClient();

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            artists: [],
            showArtist: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        
        if (this.state.value.length > 4) {
            
            this.client.getArtists(this.state.value).then(
                response => {
                    this.setState({ artists: response.artists.items })
                    this.setState({ showArtist: true });
                }
            )
        } 

        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={ this.handleSubmit }>

                    <input 
                        placeholder="Buscar Artista" 
                        value={this.state.value} 
                        className={ styles.inputText } 
                        type="text" 
                        onChange={ this.handleChange }
                        onSubmit={ this.handleSubmit }
                        minLength={5}
                        />
                    <input className={ styles.buttonSubmit } type="submit" value="Buscar" />
                </form>
                { this.state.showArtist &&  <ListArtist artists={this.state.artists} /> }
            </React.Fragment>
            
        )
    }
}

export default InputArtist;