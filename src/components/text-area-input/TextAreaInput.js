import React, { PureComponent } from 'react'

import { Container, Label, Input, ErrorMessage } from './styles'

class TextAreaInput extends PureComponent {
  render() {
    const { labelText, error, ...inputProps } = this.props

    return (
      <Container>
        <Label>{labelText}</Label>

        <Input {...inputProps} />

        {!!error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    )
  }
}

export default TextAreaInput
