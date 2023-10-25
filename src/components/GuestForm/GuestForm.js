import { useState } from 'react';
import axios from 'axios';

function GuestForm (props) {

    const [newGuestName, setNewGuestName] = useState([]);
    const [newGuestMeal, setNewGuestMeal] = useState([]);

    const addGuest = () => {
        
        axios.post('/guests', { name: newGuestName, kidsMeal: newGuestMeal })
          .then((response) => {
            // clear inputs
            setNewGuestName('');
            setNewGuestMeal(false);
    
            props.getGuests();
          })
          .catch(err => {
            alert('Error Adding Guest');
            console.log(err);
          })
      };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (newGuestName) {
          addGuest();
        }
        else {
          alert('The new guest needs a name!');
        }
      }

    return (
        <>
        <h2>Add a new guest</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            value={props.newGuestName}
            onChange={(evt) => setNewGuestName(evt.target.value)}
          />
          <div>
            Would this guest like a kid's meal?
            <div >
              <div>
                <label>
                  <input
                    type="radio"
                    value={true}
                    checked={props.newGuestMeal === 'true'}
                    name="kidsMeal"
                    onChange={(evt) => setNewGuestMeal(evt.target.value)}
                  />
                  Yes, this guest would like a Kid's Meal
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value={false}
                    checked={props.newGuestMeal === 'false'}
                    name="kidsMeal"
                    onChange={(evt) => setNewGuestMeal(evt.target.value)}
                  />
                  No, this guest would not like a Kid's Meal
                </label>
              </div>
            </div>
          </div>
          <button type="submit">Add Guest</button>
        </form>
        </>

    )
}

export default GuestForm;