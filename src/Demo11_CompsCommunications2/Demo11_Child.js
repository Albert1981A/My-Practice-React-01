
// If the Child Component needs to send Data to the Parent component 
// It need to get a call back function from the parent

import { useState } from "react";

function Demo11Child(props) {

    const [childData, setChildData] = useState({name: "", age: 0, city: "", adult: false});

    return (
        <div>
            <h3>Components Communications Child Header</h3>

            <span>Enter Name: </span> <input type="text" onChange={ (e) => setChildData({...childData, name: e.target.value}) } /> <br />
            <span>Enter age: </span> <input type="number" onChange={ (e) => setChildData({...childData, age: e.target.value}) } /><br />
            <span>Enter city: </span> <input type="text" onChange={ (e) => setChildData({...childData, city: e.target.value}) } /><br />
            <span>Adult ? </span> <input type="checkBox" onChange={ (e) => setChildData({...childData, adult: e.target.checked}) } /><br />


            <input type="button" value="Send Data" onClick={ () => props.callback(childData) } /> 
 
            <h3>Components Communications child Footer</h3>
        </div>
    );
}
export default Demo11Child;