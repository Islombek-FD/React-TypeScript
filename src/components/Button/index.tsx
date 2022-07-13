import React from 'react';

type ButtonProps = {
  children: React.ReactNode
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

function Button(props: ButtonProps) {
  return (
    <button onClick={(e) => props.clickHandler(e, 10)}>
      {props.children}
    </button>
  )
}

export default Button;