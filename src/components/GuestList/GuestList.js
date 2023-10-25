

function GuestList(props) {

    return (
        <>
      <h2>Guest List</h2>
        {/**this line allows you to see whether you are getting
         * the props that you are expecting
         */}
      
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Kid's Meal</th>
        </tr>
      </thead>
      <tbody>
        {props.guestList.map(guest => (
          <tr key={guest.id}>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
          </tr>
          
        ))}
      </tbody>


    </table>
    
    </>
    )
}

export default GuestList;