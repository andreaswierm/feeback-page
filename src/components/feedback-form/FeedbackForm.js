import React, { PureComponent } from 'react'

import { TextInput, TextAreaInput, RatingInput } from './../'

import { Container, LeftBar, RightBar, Form } from './styles'

const initialInputState = () => ({
  value: '',
  touched: false,
  error: false,
})

class FeedbackForm extends PureComponent {
  state = {
    formSubmitted: false,
    name: initialInputState(),
    email: initialInputState(),
    rating: initialInputState(),
    comment: initialInputState(),
  }

  setErrors = cb => {
    this.setState(
      state => ({
        name: {
          ...state.name,
          error: !state.name.value.length ? 'Requried' : false,
        },
        email: {
          ...state.email,
          error: !state.email.value.length ? 'Requried' : false,
        },
        rating: {
          ...state.rating,
          error: !state.rating.value ? 'Requried' : false,
        },
      }),
      cb
    )
  }

  handleOnChangeName = event => {
    const name = event.target.value

    this.setState(
      state => ({
        name: {
          ...state.name,
          value: name,
          touched: true,
        },
      }),
      this.setErrors
    )
  }

  handleOnChangeEmail = event => {
    const email = event.target.value

    this.setState(
      state => ({
        email: {
          ...state.email,
          value: email,
          touched: true,
        },
      }),
      this.setErrors
    )
  }

  handleOnChangeComment = event => {
    const comment = event.target.value

    this.setState(state => ({
      comment: {
        value: comment,
        touched: true,
      },
    }))
  }

  handleOnChangeRating = value => {
    this.setState(state => ({
      rating: {
        value,
        touched: true,
      },
    }))
  }

  handleOnSubmit = event => {
    event.preventDefault()

    this.setState({ formSubmitted: true })

    this.setErrors(() => {
      const { name, email, rating, comment } = this.state

      if (name.error || email.error || rating.error) {
        return
      }

      this.props.onSubmit({
        name: name.value,
        email: email.value,
        rating: rating.value,
        comment: comment.value,
      })
    })
  }

  render() {
    const { formSubmitted, name, email, rating, comment } = this.state

    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Container>
          <LeftBar>
            <TextInput
              labelText="Name"
              type="text"
              placeholder="Name"
              error={(formSubmitted || name.touched) && name.error}
              onChange={this.handleOnChangeName}
              value={name.value}
            />

            <TextInput
              labelText="Email"
              type="email"
              placeholder="Email"
              error={(formSubmitted || email.touched) && email.error}
              onChange={this.handleOnChangeEmail}
              value={email.value}
            />

            <RatingInput
              labelText="Rating"
              onChange={this.handleOnChangeRating}
              value={rating.value}
              error={rating.error}
            />
          </LeftBar>

          <RightBar>
            <TextAreaInput
              labelText="Comment"
              placeholder="Comment"
              onChange={this.handleOnChangeComment}
              value={comment.value}
            />
          </RightBar>
        </Container>

        <button type="submit">Send</button>
      </Form>
    )
  }
}

FeedbackForm.defaultProps = {
  onSubmit: () => null,
}
export default FeedbackForm
