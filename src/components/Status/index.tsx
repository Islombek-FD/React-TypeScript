import React from 'react';

type StatusProps = {
   status: 'loading' | 'success' | 'error'
}

function Status(props: StatusProps) {
   let message;

   if(props.status === 'loading') {
      message = 'Loading....';
   } else if (props.status === 'success') {
      message = 'Data successfully fetched';
   } else if (props.status === 'error') {
      message = 'Fetched error'
   }

   return (
      <div>
         <h2>{message}</h2>
      </div>
   )
}

export default Status;