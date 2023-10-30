import SilverWare from '../SilverWare/SilverWare.js';
//import GuestList from '../GuestList/GuestList.js';
import {useState} from 'react';

function DinnerSupplies(props) {
        
        // console.log(props.guestList.length*2);
        // const [count, setCount] = useState(props.guestList.length*2);
        // console.log(count);
        let count = props.guestList.length*2;
        return (
            <>
                <h2>Dinner Supplies</h2>
                <div>{count}</div>
                    <SilverWare name="Spoons" count={count} />
                    <SilverWare name="Forks" count={count} />
                    <SilverWare name="Knives" count={count} />
            </>
        )

}


export default DinnerSupplies;