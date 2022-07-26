import { useState } from 'react';
import Demo9Person from './Demo9_Person';

function Demo9Persons() {

    const [persons, setPersons] = useState( [ 
        { name: "Avi", tasks: [ { title: "Task A", completed: true }, { title: "Task B", completed: false } ] },
        { name: "Dana", tasks: [ { title: "Task C", completed: false }, { title: "Task D", completed: true } ] }
    ] );

    return (
        <div>
            <h1>Dynamic Render Persons Header</h1> 
            <br />

            {
                persons.map( ( item, index ) => {
                    return <Demo9Person key={ index } personsData={ item } />
                } )
            }

            <h1>Dynamic Render Persons Footer</h1>
        </div>
    );
}
export default Demo9Persons;



// Name : “Avi”
// Tasks :
// Title : “Task A”
// Completed : true
// Title : “Task B”
// Completed : false

// Name : “Dana”
// Tasks :
// Title : “Task C”
// Completed : false
// Title : “Task D”
// Completed : true