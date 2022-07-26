
function PhoneComp(props) {

    let printToConsole = () => {
        console.log(props.data);
    }

    return(
        <div>
            <h3> Hello from Phone comp Header </h3>

            <span>Home phone Number:</span> {props.data.home} <br />
            <span>Mobile phone Number:</span> {props.data.mobile} <br />
            <span>Fax phone Number:</span> {props.data.fax} <br />
            <input type="button" value="Print to Console" onClick={printToConsole} />

            <h3> Hello from Phone comp Footer </h3>
        </div>
    );
}
export default PhoneComp;
