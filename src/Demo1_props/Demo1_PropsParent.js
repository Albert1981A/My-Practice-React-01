import PropsChildeComp from "./Demo1_PropsChilde";


function PropsParentComp() {
    return(
        <div>
            <h1>Hello from Parent Header</h1>

            {/* <PropsChildeComp firstName="Avi" lastName="Cohen" />
            <PropsChildeComp firstName="Dana" lastName="Fridman" />
            <PropsChildeComp firstName="Dov" lastName="Amnon" /> */}

            <br /> 
            <p>This props passed with Json:</p>
            <PropsChildeComp Data={ { fName: "Eran", lName: "Drek" } } />

            <h1>Hello from Parent Footer</h1>
        </div>
    );
}
export default PropsParentComp;