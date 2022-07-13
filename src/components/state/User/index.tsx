import React, { useState } from 'react';

type AuthUser = {
   name: string
   email: string
}

function User() {
   // const [user, setUser] = useState<AuthUser | null>(null);
   const [user, setUser] = useState<AuthUser>({} as AuthUser);

   const loginHandler = () => setUser({ name: 'Islombek', email: 'islombekqurbonovfd@gmail.com' });

   return (
      <div>
         <button onClick={loginHandler}>Login</button>
         <div>
            <strong>User name: {user?.name}</strong>
            <span>User email: {user?.email}</span>
         </div>
      </div>
   )
}

export default User;