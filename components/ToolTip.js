import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { getTextWidth } from '../helpers/getTextWidth'
import InfoIcon from '../public/infoIcon'

const Tooltip = ({ className, text }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <ToolTipWrapper className={className}>
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <InfoIcon />
      </div>
      <ToolTipInfo width={getTextWidth({ text })} isShown={isShown}>
        {text}
      </ToolTipInfo>
    </ToolTipWrapper>
  )
}

const ToolTipWrapper = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 12px;
`

// ToDo: we can use portal for the z-index later
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
