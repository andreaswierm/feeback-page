import React, { PureComponent } from 'react'

import { Container, ChildrenContainer } from './styles'

class Layout extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <Container>
        <ChildrenContainer>{children}</ChildrenContainer>
      </Container>
    )
  }
}

export default Layout
