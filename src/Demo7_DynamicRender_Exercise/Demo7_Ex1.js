import { useState } from 'react';

function Demo7Ex1() {

    const [isRed, setIsRed] = useState(false);

    const setColor = (e) => {
        if ( e.target.value.length > 5 ) {
            setIsRed(true);
        } else {
            setIsRed(false);
        }
    }


    return (
        <div>
            <h1>Dynamic Render Header Ex1</h1>

            <input style={ { backgroundColor: isRed ? 'red' : 'green', color: 'white', fontWeight: 'bold' } } type="text" onChange={ setColor } />

            <h1>Dynamic Render Footer Ex1</h1>
        </div>
    );
}
export default Demo7Ex1;