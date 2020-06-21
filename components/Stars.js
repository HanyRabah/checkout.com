import React from 'react'
import styled from 'styled-components'

const SELECTED_COLOR = '#FFED76'
const UNSELECTED_COLOR = '#c1c1c1'

const Stars = ({ selected }) => {
  return (
    <Star
      selected={selected}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 34"
    >
      <path
        fill="currentColor"
        d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z"
      />
    </Star>
  )
}
const Star = styled.svg`
  color: ${(props) => (props.selected ? SELECTED_COLOR : UNSELECTED_COLOR)};
  fill: ${(props) =>
    props.selected ? 'rgba(0, 0, 0, 0.02)' : 'rgba(0, 0, 0, 0.04)'};
  display: block;
  height: 36px;
  width: 36px;
  transition: color 0.5s ease-in-out, fill 0.5s ease-in-out;
`

export default Stars
