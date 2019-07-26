import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// import PlurallTracker from 'plurall-tracker'

import { Layout } from 'components'
import { Home, SearchArtist, Artist } from 'views'

import './App.module.css'

// window.tracker = new PlurallTracker({
//   env: 'staging',
//   clientId: '4d0a0ab2a04d415d9c38e45a40c57f24',
// })

class App extends Component {
  async componentDidMount() {
    // window.tracker.pageView()
  }

  render() {
    return (
      <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/busca" exact  component={SearchArtist} />
            <Route path="/artista/:id" exact component={Artist} />
          </Switch>
      </Layout>
    )
  }
}

export default App
