import React from 'react'
import styled from 'styled-components'
// ______________________________________________________
//
type Props = {
  className?: string
  count: number
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <div className={props.className}>
    <h2 />
    <p>{props.count}回目</p>
  </div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  color: #f00;
`

export default StyledComponent
