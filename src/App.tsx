import React from 'react';

import Greate from './components/Great';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Box from './components/Box';
import Button from './components/Button';
import Input from './components/Input';
import Counter from './components/state/Counter';
import ThemeBox from './context/ThemBox';
import { ThemeContextProvider } from './context/ThemBox/ThemeContext';

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

      <Box style={{ border: '3px solid red', width: 200 }}>
        <Heading>
          ReactNode
        </Heading>
      </Box>

      <Button clickHandler={() => console.log('svshjdjvkhds')}>
        Click me
      </Button>

      <Input changeHandler={(e) => console.log(e.target.value)} />

      <Counter />

      <ThemeContextProvider>
        <ThemeBox />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
