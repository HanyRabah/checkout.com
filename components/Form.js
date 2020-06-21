import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Rating from './Rating'
import useForm from '../hooks/useForm'
import validate from '../helpers/validate'

const Form = ({ submitComment }) => {
  const initialValues = {
    name: '',
    email: '',
    rating: '',
    comment: '',
    date: '',
  }

  const submitForm = () => {
    submitComment({ ...values })
  }

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    submitForm,
    validate,
  )

  return (
    <FormWrapper onSubmit={handleSubmit} noValidate data-testid="form">
      <FormTitle>
        <FormTitleText>Give Us Feedback</FormTitleText>
        <FormTitleTextSmall>
          Help us make our service better :)
        </FormTitleTextSmall>
      </FormTitle>

      <Input
        type="text"
        label="What is your name ?"
        name="name"
        placeholder="Name"
        errorText={errors.name}
        handleChange={handleChange}
        value={values.name || ''}
        required
        data-testid="name-input"
      />

      <Input
        type="text"
        label="What is your email ?"
        name="email"
        placeholder="E-mail"
        errorText={errors.email}
        handleChange={handleChange}
        value={values.email || ''}
        required
        data-testid="email-input"
      />

      <Rating
        label="Overall, how satisfiedy were you with our service ?"
        name="rating"
        errorText={errors.rating}
        handleChange={handleChange}
        value={values.rating || ''}
        required
        data-testid="rating-input"
      />

      <Input
        type="textArea"
        label="Any Feedback ?"
        name="comment"
        placeholder="Add your feedback"
        errorText={errors.comment}
        handleChange={handleChange}
        value={values.comment || ''}
        row={3}
        required
        data-testid="textarea-input"
      />

      <Button type="submit" data-testid="submit-form">
        Send My Feedback
      </Button>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  padding: 48px;
`
const FormTitle = styled.div`
  margin-bottom: 22px;
`
const FormTitleText = styled.h1`
  margin: 0;
`
const FormTitleTextSmall = styled.small`
  color: #6c757d;
`

const Button = styled.button`
  background: #fd496d;
  color: white;
  font-weight: 500;
  border: 0;
  font-size: 18px;
  padding: 18px;
  border-radius: 6px;
  width: 100%;
  outline: none;
  transition: background 300ms ease-out;
  &:hover,
  &:focus {
    background: #ed4b8b;
    outline: none;
  }
`

export default Form
