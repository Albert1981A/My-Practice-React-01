function Demo4ChildComp(props) {


    return(
        <div className="App">
            <h3> Hello from Child comp Header </h3>

            <span>Name: </span><span>{props.name}</span>

            <h3> Hello from Child comp Footer </h3>
        </div>
    );
}
export default Demo4ChildComp;