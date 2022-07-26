import { useState } from 'react';
import Demo10Child from "./Demo10_Child";

function Demo10Parent() {

    const [dataFromChild, setDataFromChild] = useState("");

    return (
        <div>
            <h1>Components Communications Parent Header</h1>

            <span>Data from Child:</span> <span>{dataFromChild}</span> <br />

            <Demo10Child callback={ data => setDataFromChild(data) } />

            <h1>Components Communications Parent Footer</h1>
        </div>
    );
}
export default Demo10Parent;

// 46