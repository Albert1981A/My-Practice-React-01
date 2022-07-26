
function InputComp(props) {

    const sayHello = () => {
        alert("Hello");
    }
    
    // "e" is Event
    const textBoxEvent = (e) => {
        console.log(e.target.value);
    }

    // "e" is Event
    const checkBoxEvent = (e) => {
        console.log(e.target.checked);
    }

    return (
        <div>
            <h3>Hello from Input Comp Header</h3>
            
            {/* input by button */}
            <input type="button" onClick={sayHello} value="Click Me!" style={ { backgroundColor: "yellow", color: "red", fontWeight: 'bold' } } />
            <br /> <br />

            {/* input by text box */}
            <input type="text" onChange={textBoxEvent} />
            <br /> <br />
            
            {/* input by check box */}
            <input type="checkbox" onChange={checkBoxEvent} />


        </div>
    );
}
export default InputComp;