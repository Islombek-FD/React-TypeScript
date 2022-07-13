import React from 'react';
import { Name } from '../../types/name';

type PersonListProps = {
   fullNames: Name[]
}

function PersonList(props: PersonListProps) {
  return (
    <div>
      <ul>
         {props.fullNames.map((fullName, index) => (
            <li key={index}> 
               <h3>{fullName.firstName}</h3>
               <p>{fullName.lastName}</p>
            </li>
         ))}
      </ul>
    </div>
  )
}

export default PersonList;