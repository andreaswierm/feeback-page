import React, { PureComponent } from 'react'
import groupBy from 'lodash/groupBy'
import FullStar from 'material-ui/svg-icons/toggle/star'
import EmptyStar from 'material-ui/svg-icons/toggle/star-border'

import { Container, Row } from './styles'

class RatingReport extends PureComponent {
  render() {
    const { feedbacks } = this.props

    const feedbackGroups = groupBy(feedbacks, 'rating')

    return (
      <Container>
        {this.renderRow(5, feedbackGroups[5])}
        {this.renderRow(4, feedbackGroups[4])}
        {this.renderRow(3, feedbackGroups[3])}
        {this.renderRow(2, feedbackGroups[2])}
        {this.renderRow(1, feedbackGroups[1])}
      </Container>
    )
  }

  renderRow = (level, feedbacks) => {
    return (
      <Row>
        {level >= 1 ? <FullStar /> : <EmptyStar />}

        {level >= 2 ? <FullStar /> : <EmptyStar />}

        {level >= 3 ? <FullStar /> : <EmptyStar />}

        {level >= 4 ? <FullStar /> : <EmptyStar />}

        {level >= 5 ? <FullStar /> : <EmptyStar />}

        {feedbacks ? feedbacks.length : 0}
      </Row>
    )
  }
}

export default RatingReport
