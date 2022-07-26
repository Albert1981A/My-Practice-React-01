import { useState } from 'react';

function Demo7Ex3Ex4Ex5() {

    const [person, setPerson] = useState([
        { name: "Dana", age: 20, city: "Haifa" },
        { name: "Ron", age: 22, city: "Tel-Aviv" },
        { name: "Dov", age: 31, city: "Ashdod" },
        { name: "Vered", age: 19, city: "Eilat" }
    ]);

    const [nePerson, setNePerson] = useState( { name: "", age: 0, city: "" } );

    const addPerson = () => {
        setPerson([...person, nePerson ])
    }

    return (
        <div>
            <h1>Dynamic Render Header Ex3 Ex4 Ex5</h1>

            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                <tbody>
                {
                    person.map(
                        (item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
                            </tr>
                        }
                    )
                }
                </tbody>
            </table>

            <h3>Ordered List</h3>

            <ul>
                {
                    person.map(
                        (item, index) => {
                            return <li key={index}>
                                {item.name}
                                <ul>
                                    <li>{item.age}</li>
                                    <li>{item.city}</li>
                                </ul>
                            </li>
                        }
                    )
                }
                <br />


                <span>Name:</span><input type="text" onChange={ (e) => setNePerson( { ...nePerson, name: e.target.value } ) } /> <br />
                <span>age:</span><input type="number" onChange={ (e) => setNePerson( { ...nePerson, age: e.target.value } ) } /> <br />
                <span>City:</span><input type="text" onChange={ (e) => setNePerson( { ...nePerson, city: e.target.value } ) } /> <br />
                <input type="button" value="Add Person" onClick={addPerson} />



                
            </ul>

            <h1>Dynamic Render Footer Ex3 Ex4 Ex5</h1>
        </div>
    );
}
export default Demo7Ex3Ex4Ex5;