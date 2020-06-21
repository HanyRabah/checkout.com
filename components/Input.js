import styled from 'styled-components'
import Tooltip from './ToolTip'

const FormInput = (props) => {
  const {
    type,
    label,
    name,
    placeholder,
    errorText,
    handleChange,
    value,
    row,
    required,
  } = props

  return (
    <InputWrapper>
      <Label>
        {required && <Required title="required">*</Required>} {label}
      </Label>
      {type === 'text' && (
        <Input
          name={name}
          placeholder={placeholder}
          isInvalid={errorText}
          onChange={handleChange}
          value={value}
        />
      )}
      {type === 'textArea' && (
        <TextArea
          name={name}
          placeholder={placeholder}
          isInvalid={errorText}
          onChange={handleChange}
          value={value}
          rows={row}
        />
      )}
      {errorText && <Tooltip text={errorText} />}
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  margin-bottom: 10px;
  position: relative;
`

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 600;
`

const Input = styled.input`
  display: block;
  background: #ececec;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  border: 0;
  outline: 0;
  font-size: 14px;
  text-indent: 12px;
  line-height: 14;
  ${(props) => props.isInvalid && `border: 1px red solid;`}
  &:focus {
    background: #f1f1f1;
  }
`
const TextArea = styled.textarea`
  display: block;
  background: #ececec;
  border-radius: 4px;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 14px;
  text-indent: 12px;
  line-height: 2;

  ${(props) => props.isInvalid && `border: 1px red solid;`}

  &:focus {
    background: #f1f1f1;
  }
`
const Rating = styled.div`
  display: flex;
`
const Required = styled.span`
  color: #fd496d;
`

export default FormInput
