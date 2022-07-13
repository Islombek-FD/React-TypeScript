import React, { CSSProperties } from 'react';

type BoxProps = {
  style: CSSProperties
  children: React.ReactNode
}

function Box(props: BoxProps) {
  return (
    <div style={props.style}>
      {props.children}
    </div>
  )
}

export default Box;