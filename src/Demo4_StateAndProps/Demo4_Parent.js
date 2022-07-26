import Demo4ChildComp from "./Demo4_Child";
import {useState} from 'react';

function Demo4ParentComp() {

    const [name, setName] = useState("Danny");

    // const ChangeName = () => {
    //     setName("Avi")
    // }


    return(
        <div>
            <h1> Hello from Parent comp Header </h1>

            <input type="button" value="Change Name" onClick={ () => setName("Avi") } />

            <Demo4ChildComp name={name} />

            <h1> Hello from Parent comp Footer </h1>
        </div>
    );
}
export default Demo4ParentComp;