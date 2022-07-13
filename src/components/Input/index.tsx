import React from 'react';

type InputProps = {
  value?: string
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: InputProps) {
  return (
    <input onChange={props.changeHandler} defaultValue={props.value} />
  )
}

export default Input;