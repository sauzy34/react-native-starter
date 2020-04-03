import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import styled, { withTheme } from 'styled-components'

const TextStyle = styled(Text)(
  `
  width: ${props => props.width || 'auto'};
  font-size: ${props => props.fontSize || '16px'};
  color: ${props => props.color || '#000'};
  font-family: ${props => props =>
    props.fontWeight === 'bold'
      ? 'space-mono'
      : props.fontWeight === 'semiBold'
      ? 'space-mono'
      : props.fontWeight === 'medium'
      ? 'space-mono'
      : 'space-mono'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  letter-spacing: ${props => props.letterSpacing || ' 0.2px'};
  padding: ${props => props.viewPadding || '0px'};
  text-decoration-line: ${props => props.textDecorationLine || 'none'};
  flex: ${props => props.flex || 'none'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
`
)

function StyledText({ highlight, ...props }) {
  return (
    <React.Fragment>
      {highlight ? (
        <TouchableHighlight underlayColor="red">
          <TextStyle {...props} />
        </TouchableHighlight>
      ) : (
        <TextStyle {...props} />
      )}
    </React.Fragment>
  )
}
export default withTheme(StyledText)
