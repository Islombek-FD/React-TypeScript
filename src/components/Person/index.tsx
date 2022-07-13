import React from 'react';
import { PersonProps } from './types';

function Person(props: PersonProps) {
  return (
    <div>
      <h2>{props.fullName.firstName} {props.fullName.lastName}</h2>
    </div>
  )
}

export default Person;