import React from 'react';

type GreatProps = {
   name: string
   age: number
   isLogin?: boolean
}

function Great(props: GreatProps) {
  const { isLogin = true } = props;

  return (
    <div>
      {
         isLogin 
            ? <h1>Hello! My name is {props.name}. I am {props.age}</h1>
            : <h1>Welocome Guest</h1>
      }
      
    </div>
  )
}

export default Great;