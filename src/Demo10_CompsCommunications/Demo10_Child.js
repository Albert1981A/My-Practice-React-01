

// If the Child Component needs to send Data to the Parent component 
// It need to get a call back function from the parent

function Demo10Child(props) {

    return (
        <div>
            <h3>Components Communications Child Header</h3>

            <input type="button" value="Send Data To Parent" onClick={ () => props.callback("Hello from Child") } /> 

            <h3>Components Communications child Footer</h3>
        </div>
    );
}
export default Demo10Child;