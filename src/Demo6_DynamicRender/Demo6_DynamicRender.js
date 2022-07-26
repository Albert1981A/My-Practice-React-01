import { useState } from 'react';
import './Demo6Css.css';

function Demo6DynamicRender() {

    const [isRed, setIsRed] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    return(
        <div>
            <h1>Hello from Dynamic Render Header</h1>

            <h3 style={ { color: isRed ? 'red' : 'blue' } }>This is the "Dynamic Render" of style 1</h3>

            <h3 className={ isRed ? 'greenStyle' : 'yellowStyle' }>This is the "Dynamic Render" of style 2</h3>

            <h3 style={ { visibility: isVisible ? 'visible' : 'hidden' , color: 'purple' } }>This is the "Dynamic Render" of style 3</h3>

            <br /> 
            
            <input type="button" value="Change Color" onClick={ () => setIsRed( !isRed ) }/>

            <br />

            <input type="button" value="Hide/Show" onClick={ () => setIsVisible( !isVisible ) }/>


            <h1>Hello from Dynamic Render Footer</h1>
        </div>
    );
}
export default Demo6DynamicRender;