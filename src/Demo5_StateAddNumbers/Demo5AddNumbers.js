import {useState} from 'react';

function Demo5AddNumbers() {

    const [number, setNumber] = useState(0);
    const [total, setTotal] = useState(0);

    return(
        <div>
            <h1> Hello from Add Number Header </h1>

            <span>Enter number to total: </span> <input type="text" onChange={ (e) => setNumber( parseInt(e.target.value) ) } /> <br />

            <input type="button" value="Change Name" onClick={() => setTotal(number + total)} /> <br />

            <span>Total Number: {total} </span>


            <h1> Hello from Add Number Footer </h1>
        </div>
    );
}
export default Demo5AddNumbers;

// 3:16