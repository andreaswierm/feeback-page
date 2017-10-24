import React, { PureComponent } from 'react'
import FullStar from 'material-ui/svg-icons/toggle/star'
import EmptyStar from 'material-ui/svg-icons/toggle/star-border'

import { Container, Label, Input, ErrorMessage, StarContainer } from './styles'

class RatingInput extends PureComponent {
  handleOnClickStart = level => () => {
    this.props.onChange(level)
  }

  render() {
    const { labelText, error, value } = this.props

    return (
      <Container>
        <Label>{labelText}</Label>

        <StarContainer>
          <div onClick={this.handleOnClickStart(1)}>{value >= 1 ? <FullStar /> : <EmptyStar />}</div>

          <div onClick={this.handleOnClickStart(2)}>{value >= 2 ? <FullStar /> : <EmptyStar />}</div>

          <div onClick={this.handleOnClickStart(3)}>{value >= 3 ? <FullStar /> : <EmptyStar />}</div>

          <div onClick={this.handleOnClickStart(4)}>{value >= 4 ? <FullStar /> : <EmptyStar />}</div>

          <div onClick={this.handleOnClickStart(5)}>{value >= 5 ? <FullStar /> : <EmptyStar />}</div>
        </StarContainer>

        {!!error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    )
  }
}

export default RatingInput
