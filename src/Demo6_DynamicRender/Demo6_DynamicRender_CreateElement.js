import { useState } from 'react';
import './Demo6Css.css';

function Demo6DynamicRenderCreateElement() {

    const [isExist, setIsExist] = useState(false);

    return(
        <div>
            <h1>Hello from Dynamic Render Create Element Header</h1>

            <input type="button" value="Create/Delete" onClick={ () => setIsExist( !isExist ) }/>

            {/* First option */}
            { isExist && <h1>Hello Everyone I'm here - first option</h1> }

            {/* Second option */}
            { isExist ? <h1>Hello Everyone I'm here - second option</h1> : null }

            <h1>Hello from Dynamic Render Create Element Header</h1>
        </div>
    );
}
export default Demo6DynamicRenderCreateElement;