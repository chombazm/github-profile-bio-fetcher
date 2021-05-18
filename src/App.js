import React, { useState } from 'react'
import './App.css';

import Header from './components/Header';
import AddUserForm from './components/AddUserForm';
import CardList from './components/CardList';

function App() {
  const [profiles, setProfiles] = useState([
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
  ]);


  const addNewProfile = (profileData) => {
    console.log(profileData)
    const objT = [...profiles, profileData];

    console.log(objT)

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
