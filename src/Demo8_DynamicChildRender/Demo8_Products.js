import { useState } from 'react';
import Demo8Product from './Demo8_Product';

function Demo8Products() {

    const [prods, setProds] = useState( [ 
        { name: "PC", price: 100 },
        { name: "TV", price: 120 },
        { name: "Table", price: 130 }
    ] );

    return (
        <div>
            <h1>Dynamic Render Products Header</h1> 
            <br />

            {
                prods.map( ( item, index ) => {
                    return <Demo8Product key={ index } prodsData={ item } />
                } )
            }

            <h1>Dynamic Render Products Footer</h1>
        </div>
    );
}
export default Demo8Products;