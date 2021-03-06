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
import User from './context/User';
import MutableRef from './ref/MutableRef';
import Private from './auth/Private';
import Profile from './auth/Profile';
import List from './genirics/List';
import RandomNamber from './restriction';
import Toast from './components/Toast';
import CustomInput from './html/Input';
import CustomButton from './html/Button';
import { ThemeContextProvider } from './context/ThemBox/ThemeContext';
import { UserContextProvider } from './context/User/UserContext';

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
      {/* <List items={['Islombek', 'Eshon']} clickHandler={((value) => console.log(value))} />

      <List items={[2001, 2003]} clickHandler={((value) => console.log(value))} /> */}

      <CustomInput defaultValue='example value' />

      <CustomButton variant='primary'>
        <div>
          ksjhsa
        </div>
      </CustomButton>

      <Toast position='center-bottom' />

      <RandomNamber value={10} isPositive />

      <List items={[{
        id: 1,
        first: 'Islombek'
      }, {
        id: 2,
        first: 'Eshon'
      }]} 
      clickHandler={((value) => console.log(value))} />

      <Private isLoginIn={true} component={Profile} />

      <ThemeContextProvider>
        <ThemeBox />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <MutableRef />
      
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
    </div>
  );
}

export default App;
