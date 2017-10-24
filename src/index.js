import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Layout, FeedbackForm, RatingReport } from './components'

class App extends PureComponent {
  state = {
    feedbacks: [
      {
        name: 'Andreas',
        email: 'andreas.w.dev@gmail.com',
        rating: 4,
        comment: 'It is awesome',
      },
    ],
  }

  handleOnSubmitFeedback = feedback => {
    this.setState({
      feedbacks: this.state.feedbacks.concat([feedback]),
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <FeedbackForm onSubmit={this.handleOnSubmitFeedback} />

          <RatingReport feedbacks={this.state.feedbacks} />
        </Layout>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
