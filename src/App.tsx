import React from 'react';

import Greate from './components/Great';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const fullName = {
    firstName: 'Islombek',
    lastName: 'Qurbonov'
  }

  const fullNames = [
    {
      firstName: 'Elbek',
      lastName: 'Musayev'
    },
    {
      firstName: 'Muslim',
      lastName: 'Pardayev'
    },
    {
      firstName: 'Eshon',
      lastName: 'Abdulazizov'
    },
    {
      firstName: 'Abbos',
      lastName: 'Dusqulov'
    }
  ]

  return (
    <div className="App">
      <Greate name='Islombek' age={21} isLogin={false} />
      <Person fullName={fullName} />
      <PersonList fullNames={fullNames} />
    </div>
  );
}

export default App;
