import React from 'react';
import Login from './Login';
import { ProfileProps } from './Profile';

type PrivateProps = {
   isLoginIn: boolean
   component: React.ComponentType<ProfileProps>
}

function Private({ isLoginIn, component: Component }: PrivateProps) {
   if (isLoginIn) {
      return <Component name='Islombek' />
   } else {
      return <Login />
   }
}

export default Private;