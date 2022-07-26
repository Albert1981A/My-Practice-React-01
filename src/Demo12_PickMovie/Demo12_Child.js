import { useState } from "react";

function Demo12Child(props) {

    return (
        <div>
            <h3>Components Communications Child Header</h3>

            {
            props.moviesData && <div>
            <h5>{props.moviesData.name}</h5>
            <img src={props.moviesData.pic} />
            </div>
            }
            
            <h3>Components Communications child Footer</h3>
        </div>
    );
}
export default Demo12Child;