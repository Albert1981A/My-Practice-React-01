function PropsChildeComp(props) {
    return(
        <div>
            <h3>Hello from Childe Header</h3>

            {/* {props.firstName} <br />
            {props.lastName} <br /> */}
            {props.Data.fName} <br />
            {props.Data.lName}
            
            <h3>Hello from Childe Footer</h3>
        </div>
    );
}
export default PropsChildeComp;