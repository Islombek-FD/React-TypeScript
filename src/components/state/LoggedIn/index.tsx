import React, { useState } from 'react';

function LoggedIn() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);


   const loginHandler = () => setIsLoggedIn(true);

   const logoutHandler = () => setIsLoggedIn(false);

   return (
      <div>
         { isLoggedIn 
            ? <button onClick={loginHandler}>Log In</button>
            : <button onClick={logoutHandler}>Log Out</button>
         }
      </div>
   )
}

export default LoggedIn;