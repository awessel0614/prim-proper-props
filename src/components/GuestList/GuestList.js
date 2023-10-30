// import axios from 'axios';

// function GuestList(props) {

    
//     const deleteGuest = () => {

//         console.log(props.guestList);
//         console.log(props.guestList.guest.id);
//         axios.delete(`/guests/${props.guestList.id}`)
//             .then(response => {
//                 props.getGuests();
//             })
//             .catch(error => {
//                 console.error(error);
//                 alert('Something went wrong!');
//             });
//     };

//     return (
//         <>
//       <h2>Guest List</h2>
//         {/**this line allows you to see whether you are getting
//          * the props that you are expecting
//          */}
      
//       <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Kid's Meal</th>
//         </tr>
//       </thead>
//       <tbody>
//         {props.guestList.map(guest => (
//           <tr key={guest.id}>
//             <td>{guest.name}</td>
//             <td>{String(guest.kidsMeal)}</td>
//             <td><button onClick={deleteGuest}>Delete</button></td>
//           </tr>
          
          
//         ))}
//       </tbody>
      


//     </table>
    
    
//     </>
//     )
// }

// export default GuestList;













import axios from 'axios';

function GuestList(props) {
    console.log(props.name);
    console.log(props.id);
    const deleteGuest = () => {

        axios.delete(`/guests/${props.id}`)
            .then(response => {
                props.getGuests();
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong!');
            });
    };

    return (
        <>
      
        {/**this line allows you to see whether you are getting
         * the props that you are expecting
         */}
      
    <table>
      <tbody>
        
          <tr>
            <td>{props.name}</td>
            <td>{String(props.kidsMeal)}</td>
            <td><button onClick={deleteGuest}>Delete</button></td>
          </tr>
    
      </tbody>
    </table>
    
    
    </>
    )
}

export default GuestList;