
import PhoneComp from "./PhonesComp";

function PersonComp() {
    return(
        <div>
            <h1> Hello from Person comp Header </h1>
            <br />
            <PhoneComp data={ { home: "055-555", mobile: "052-222", fax: "053-333" } } /> <br />
            <PhoneComp data={ { home: "03-555", mobile: "072-222", fax: "03-333" } } /> <br />
            <PhoneComp data={ { home: "02-222", mobile: "042-444", fax: "08-888" } } /> <br />

            <h1> Hello from Person comp Footer </h1>
        </div>
    );
}
export default PersonComp;
