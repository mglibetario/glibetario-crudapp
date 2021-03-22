import React from 'react';
//import CrudApp from './forms/CrudApp';
import Navigation from './components/Navigation/Navigation';
import SaladMaker from './components/SaladMaker/SaladMaker';
import UserContext from './components/User/User';

const user = {
    name: 'Gab',
    favorites: [
      'seasoned rice',
      'broccoli'
    ]
}

const App = () => {
  return (
    <>
      <UserContext.Provider value={user}>
        <Navigation />
        <SaladMaker />
      </UserContext.Provider>
    </>
  );
}
export default App;