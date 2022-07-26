import { useState } from 'react';
import './Demo6Css.css';

function Demo6DynamicRenderRepeater() {

    const [person, setPerson] = useState([{ name: 'Avi', age: 20 }, { name: 'Dana', age: 25 }, { name: 'Reuven', age: 30 }]);

    const [colors, setColors] = useState(['Red', 'Green', 'Blue', 'Yellow', 'Purple']);

    const addColor = () => {
        setColors([...colors, 'Yellow']);
    }

    const addPerson = () => {
        setPerson([...person, { name: 'Ron', age: 35 }]);
    }

    return (
        <div>
            <h1>Hello from Dynamic Render Repeater Header</h1>

            <table border="1">
                {
                    person.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    })
                }
            </table>

            <input type="button" value="Add Color" onClick={addColor} />
            {
                colors.map(item => {
                    return <h3 key={item}>{item}</h3>
                })
            }

            <input type="button" value="Add Person" onClick={addPerson} />


            <h1>Hello from Dynamic Render Repeater Header</h1>
        </div>
    );
}
export default Demo6DynamicRenderRepeater;
