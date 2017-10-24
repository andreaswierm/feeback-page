import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`

export const Label = styled.label`
  padding: 6px 0;
  font-size: 12px;
`

export const Input = styled.input`
  border: 1px solid #d6d6d6;
  font-size: 16px;
  padding: 6px;

  &:focus {
    outline: none;
  }
`

export const ErrorMessage = styled.small`
  color: red;
  padding: 4px 0;
`
