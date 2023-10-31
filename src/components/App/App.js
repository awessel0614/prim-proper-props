import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import GuestList from '../GuestList/GuestList.js';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies.js';
import GuestForm from '../GuestForm/GuestForm.js';
import PartyLeader from '../PartyLeader/PartyLeader.js';


function App() {
  let [guestList, setGuestList] = useState([]);
  

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


  return (
    <div className="App">
      <Header />
      <PartyLeader leader={guestList[0]}/>
      <GuestForm 
        getGuests={getGuests}
      />
      <h2>Guest List</h2>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Kid's Meal</th>
        </tr>
      </thead>
      </table>
      {
      guestList.map(guest =>
        
      <GuestList 
        key={guest.id}
        id={guest.id}
        name={guest.name}
        kidsMeal={guest.kidsMeal}
        getGuests={getGuests}
      />)
      }
      <DinnerSupplies 
        guestList={guestList}      
      />
      <Footer />
    </div>
  );
}

export default App;
