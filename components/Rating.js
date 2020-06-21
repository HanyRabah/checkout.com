import styled from 'styled-components'
import Stars from './Stars'
import Tooltip from './Tooltip'

const Rating = (props) => {
  const {
    label,
    value,
    handleChange,
    errorText,
    stars,
    readOnly,
    required,
  } = props
  const totalStars = stars ? stars : 5

  return (
    <Container>
      <Label>
        {required && <Required title="required">*</Required>} {label}
      </Label>
      <RatingContainer>
        {Array(totalStars)
          .fill(null)
          .map((_, i) => i + 1)
          .map((starValue) => (
            <Star key={`rating-${starValue}`}>
              <Radio
                type="radio"
                name="rating"
                value={starValue}
                disabled={readOnly}
                onChange={handleChange}
              />
              <Stars selected={starValue <= value} />
            </Star>
          ))}
      </RatingContainer>
      {errorText && <Tooltip text={errorText} />}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Label = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 600;
  position: relative;
`

const UList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`
const RatingContainer = styled.div`
  display: flex;
`

const Star = styled.div`
  position: relative;
`

const Radio = styled.input`
  cursor: pointer;
  position: relative;
  opacity: 0;
  width: 36px;
  height: 36px;
  position: absolute;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`

const ValidationMessage = styled.span`
  color: red;
  font-size: 11px;
`
const Required = styled.span`
  color: #fd496d;
`

export default Rating
