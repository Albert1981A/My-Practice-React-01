import { useState } from 'react';


function Demo3State() {

    const [name, setName] = useState('Avi');
    const [age, setAge] = useState(20);
    // useState with Json:
    const [address, setAddress] = useState( { street: "Yosseftal 3", city: "Bat-Yam" } );

    const changeData = () => {
        setName('Dana')
        setAge(30)
    }

    const changeAllAddress = () => {
        setAddress({street: "Moseh Sharet 5", city: "Tel-Aviv"});
    }

    const changeStreet = () => {
        // Spread Operator => tack every thing you have in address and only change the Street
        setAddress({ ...address, street: "Shenkin 5"});
    }


    return(
        <div className="App">
            <h1> Hello from State comp Header </h1>

            <span>Name: </span> <span>{name}</span> <br />
            <span>Age: </span> <span>{age}</span> <br /> <br />
            <span>Address: </span> <span> street: {address.street}</span> <span> city: {address.city}</span> <br /> <br />

            <input type="button" value="Change Data" onClick={changeData} /> <br />
            <input type="button" value="Change All Address" onClick={changeAllAddress} /> <br />
            <input type="button" value="Change Street" onClick={changeStreet} /> <br />


            

            <h1> Hello from State comp Footer </h1>
        </div>
    );
}
export default Demo3State;

// 2:47