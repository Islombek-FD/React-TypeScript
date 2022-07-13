import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function User() {
   const userContext = useContext(UserContext);

   const loginHandler = () => {
      userContext?.setUser({ name: 'Islombek', email: 'islombekqurbonovfd@gmail.com' });
   }

   const logoutHandler = () => {
      userContext?.setUser(null);
   }
      
   return (
      <div>
         <button onClick={loginHandler}>Login</button>
         <button onClick={logoutHandler}>Logout</button>

         <p>User name is {userContext?.user?.name}</p>
         <p>User name is {userContext?.user?.email}</p>
      </div>
   )
}

export default User;