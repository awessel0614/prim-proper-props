import axios from 'axios';


function GuestList(props) {

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
        <table>
            <tbody>
                <tr>
                    <td>{props.name}</td> 
                    <td></td>
                    <td>{String(props.kidsMeal)}</td>
                    <td></td>
                    <td></td>
                    <td><button onClick={deleteGuest}>Delete</button></td>
                </tr>
            </tbody>
        </table>
        </>
    )
}


export default GuestList;