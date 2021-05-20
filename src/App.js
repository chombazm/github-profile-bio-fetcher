import React, { useState } from 'react'
import './App.css';

import Header from './components/Header';
import AddUserForm from './components/AddUserForm';
import CardList from './components/CardList';

// For XP
import "98.css/dist/98.css";

function App() {
  const [profiles, setProfiles] = useState([]);


  const addNewProfile = (profileData) => {
    console.log(profileData)
    const objT = [...profiles, profileData];
    setProfiles(objT);
    //console.log(objT)

    // setProfiles({ ...profiles, ...profileData })
  }

  return (
    
    <div className="App">
      <Header />
      <AddUserForm onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
