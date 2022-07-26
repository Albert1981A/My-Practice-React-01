import { useState } from 'react';
import Demo11Child from "./Demo11_Child";

function Demo11Parent() {

    const [dataFromChild, setDataFromChild] = useState([]);

    return (
        <div>
            <h1>Components Communications Parent Header</h1>

            <lu>
            {
                dataFromChild.map( (item, index ) => {
                return <li key={index}>
                    My Name is {item.name} and I'm {item.age} years old,
                    {item.adult ? "I'm an Adult" : "I'm Not 18 years old yet"} 
                </li>})
            }
            </lu>

            <Demo11Child callback={ data => setDataFromChild([...dataFromChild, data]) } />
            
            <h1>Components Communications Parent Footer</h1>
        </div>
    );
}
export default Demo11Parent;