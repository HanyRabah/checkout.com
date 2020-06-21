import React from 'react'
import Input from '../Input'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'

const setupTextInput = () => {
  const { getByPlaceholderText } = render(
    <Input
      type="text"
      placeholder="name"
      label="What is your name ?"
      name="name"
    />,
  )
  const input = getByPlaceholderText('name')
  return { input }
}

const setupTextArea = () => {
  const { getByPlaceholderText } = render(
    <Input
      type="textArea"
      placeholder="Comments"
      label="Leave your comment"
      name="comment"
    />,
  )
  const textArea = getByPlaceholderText('Comments')
  return { textArea }
}

describe('Input', () => {
  afterEach(cleanup)

  it('render correctly', () => {
    const component = renderer.create(
      <Input
        type="text"
        placeholder="Name"
        label="What is your name ?"
        name="name"
      />,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('It should change value', () => {
    const { input } = setupTextInput()
    expect(input.value).toBe('') // empty before
    fireEvent.change(input, { target: { value: 'Good Day' } })
    expect(input.value).toBe('Good Day')
  })
})

describe('TextArea', () => {
  afterEach(cleanup)

  it('render correctly', () => {
    const component = renderer.create(
      <Input
        type="textArea"
        placeholder="Comments"
        label="Leave your comment"
        name="comment"
      />,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('It should change value', () => {
    const { textArea } = setupTextArea()
    expect(textArea.value).toBe('') // empty before
    fireEvent.change(textArea, { target: { value: 'Here is my comment' } })
    expect(textArea.value).toBe('Here is my comment')
  })
})
