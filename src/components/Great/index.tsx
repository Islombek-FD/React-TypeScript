import React from 'react';

type GreateProps = {
   name: string
   age: number
   isLogin: boolean
}

function Greate(props: GreateProps) {
  return (
    <div>
      {
         props.isLogin 
            ? <h1>Hello! My name is {props.name}. I am {props.age}</h1>
            : <h1>Welocome Guest</h1>
      }
      
    </div>
  )
}

export default Greate;