import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Breadcrumb } from '@plurall/elo'

import { Footer } from 'plurall-footer'
import NavBar from 'plurall-header'

import { getToken, setToken, SomosClient } from 'utils'

import styles from './Layout.module.css'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  client = new SomosClient({
    accessToken: getToken(),
  })

  state = {}

  componentDidMount() {}

  handleLogout = path => {
    setToken('')
    window.location = path
  }

  render() {
    const {
      props: { children },
    } = this

    const { content, footer, 'nav-bar': navBar } = styles

    return (
      <>
        <div className={ navBar }>
          <NavBar
            logout={this.handleLogout}
            service="reader"
            userToken={getToken()}
          />
        </div>

        <div className={content}>
          <Breadcrumb
            className={ styles.Breadcrumb } 
            content={[
              { text: 'Home', href: '/' },
              {
                text: 'Buscar Artista',
                href: '/busca',
              },
              { text: 'Página do Artista', href: '/artista/:id' },
            ]}
          />
          {children}
        </div>

        <div className={footer}>
          <Footer />
        </div>
      </>
    )
  }
}

export default Layout
