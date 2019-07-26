import React from 'react'

import { Link } from 'react-router-dom';

import { SomosClient } from 'utils'

import { Button } from '@plurall/elo'

import styles from './Home.module.css'

class Home extends React.Component {
  
  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        
        <div className={styles.wrapper}>

          <Link to="/busca">
            <Button>Buscar Artista</Button>
          </Link>

        </div>
      </React.Fragment>
    )
  }
}

export default Home
