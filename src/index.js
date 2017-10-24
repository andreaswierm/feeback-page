import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Layout, FeedbackForm } from './components'

class App extends PureComponent {
  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <FeedbackForm />
        </Layout>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
