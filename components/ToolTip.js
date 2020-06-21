import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { getTextWidth } from '../helpers/getTextWidth'

const InfoIcon = () => (
  <svg
    fill="#fd496d"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16px"
    height="16px"
  >
    <path d="M 7.5 1 C 3.917969 1 1 3.917969 1 7.5 C 1 11.082031 3.917969 14 7.5 14 C 11.082031 14 14 11.082031 14 7.5 C 14 3.917969 11.082031 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 10.542969 10.542969 13 7.5 13 C 4.457031 13 2 10.542969 2 7.5 C 2 4.457031 4.457031 2 7.5 2 Z M 7 4 L 7 5 L 8 5 L 8 4 Z M 7 6 L 7 11 L 8 11 L 8 6 Z" />
  </svg>
)

const Tooltip = (props) => {
  const [isShown, setIsShown] = useState(false)
  const { className, text } = props

  return (
    <ToolTip className={className}>
      <div
        onMouseEnter={(e) => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <InfoIcon />
      </div>
      <ToolTipInfo width={getTextWidth({ text })} isShown={isShown}>
        {text}
      </ToolTipInfo>
    </ToolTip>
  )
}

const ToolTip = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 12px;
`

// ToDo: can use portal for the z-index later
const ToolTipInfo = styled.div`
  position: absolute;
  padding: 3px 8px;
  background: #fd496d;
  color: white;
  border-radius: 4px;
  font-size: 13px;
  font-weight: normal;
  top: 0;
  right: 20px;
  width: ${(props) => props.width}px;
  z-index: 50;
  opacity: 0;
  transition: opacity 300ms ease-out;
  &: before {
    position: absolute;
    top: 50%;
    right: -4px;
    border-top: 4px solid transparent;
    border-left: 4px solid #fff;
    border-bottom: 4px solid transparent;
    border-left-color: #fd496d;
    transform: translateY(-50%);
    content: '';
  }
  ${(props) =>
    props.isShown &&
    css`
      opacity: 1;
    `}
`

export default Tooltip
