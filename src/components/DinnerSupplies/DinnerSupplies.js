import SilverWare from '../SilverWare/SilverWare.js';
import GuestList from '../GuestList/GuestList.js';
import {useState} from 'react';

function DinnerSupplies(props) {

       //const [count, setCount] = useState([props.guestList.length * 2]);
        
        let count = props.guestList.length*2;
        return (
            <>
                <h2>Dinner Supplies</h2>
                    <SilverWare name="Spoons" count={count} />
                    <SilverWare name="Forks" count={count} />
                    <SilverWare name="Knives" count={count} />
            </>
        )

}


export default DinnerSupplies;