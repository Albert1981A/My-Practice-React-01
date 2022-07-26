

function Demo8Product(props) {

    return (
        <div>
            <h3>Dynamic Render Product Header</h3>

            <table border="1">
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Product price</th>
                    </tr>
                    <tr>
                        <td>{props.prodsData.name}</td>
                        <td>{props.prodsData.price}</td>
                    </tr>
                </tbody>
            </table>

            <h3>Dynamic Render Product Footer</h3>
            <br />
        </div>
    );
}
export default Demo8Product;