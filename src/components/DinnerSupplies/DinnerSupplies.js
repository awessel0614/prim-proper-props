import SilverWare from '../SilverWare/SilverWare.js';


function DinnerSupplies(props) {
        
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