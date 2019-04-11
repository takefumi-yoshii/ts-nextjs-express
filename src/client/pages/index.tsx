import React from 'react'
import Head from 'next/head'
import { ExNextContext } from 'next'
import Component from '../components/index'
// ______________________________________________________
//
type Props = {
  title: string
  count: number
}
// ______________________________________________________
//
class App extends React.Component<Props> {
  static async getInitialProps({ req }: ExNextContext) {
    if (req.session) {
      if (req.session.count === undefined) {
        req.session.count = 0
      }
      req.session.count++
      return { title: 'Home', count: req.session.count }
    }
    return { title: 'No Session', count: 1 }
  }
  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <Component count={this.props.count} />
      </>
    )
  }
}

export default App
