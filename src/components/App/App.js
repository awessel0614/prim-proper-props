import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import GuestList from '../GuestList/GuestList.js';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies.js';
import GuestForm from '../GuestForm/GuestForm.js';

function App() {
  let [guestList, setGuestList] = useState([]);
  //let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  


 

  console.log(newGuestMeal)
  return (

    

    <div className="App">
      <Header />
      
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
      
      <GuestForm 
        getGuests={getGuests}
      />
        <GuestList 
          guestList={guestList}
        />
    
      <DinnerSupplies 
          guestList={guestList}      
      />

      <Footer />
    </div>
  );
}

export default App;
