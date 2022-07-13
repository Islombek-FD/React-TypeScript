import React from 'react';

import Greate from './components/Great';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Box from './components/Box';

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
      <Greate name='Islombek' age={21} />
      
      <Person fullName={fullName} />

      <PersonList fullNames={fullNames} />
      
      <Status status='loading' />

      <Heading>
        Heading 
      </Heading>

      <Box>
        <Heading>
          ReactNode
        </Heading>
      </Box>
    </div>
  );
}

export default App;
