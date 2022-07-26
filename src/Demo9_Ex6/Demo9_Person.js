import { useState } from 'react';
import Demo9Task from './Demo9_Task';

function Demo9Person(props) {

    const [tasks, setTasks] = useState(props.personsData.tasks);

    return (
        <div>
            <h3>Dynamic Render Person Header</h3>

            <span>Name:</span> {props.personsData.name} <br />
            <span>Tasks:</span>
            {
                tasks.map( ( item, index ) => {
                    return <Demo9Task key={ index } tasksData={ item } />
                } )
            }

            <h3>Dynamic Render Person Footer</h3>
            <br />
        </div>

    );
}
export default Demo9Person;