import React from 'react';

type PersonListProps = {
   fullNames: {
      firstName: string
      lastName: string
   }[]
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