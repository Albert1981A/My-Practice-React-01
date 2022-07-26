import { useState } from 'react';
import Demo12Child from "./Demo12_Child";

function Demo12Parent() {

    const [movies, setMovies] = useState([
        {id : 1 , name : "Under the Dome", pic : "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"},
        {id : 2 , name : "Person of Interest", pic : "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg"},
        {id : 3 , name : "Bitten", pic : "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg"}
    ]);

    const [select, setSelect] = useState(0)

    return (
        <div>
            <h1>Components Communications Parent Header</h1>

            <select onChange={ e => setSelect( parseInt( e.target.value ) ) }>
                <option defaultValue> -- Select Move -- </option>

                {
                    movies.map( ( item ) => {
                    return <option key={item.id} value={item.id} >{item.name}</option>
                    })
                }
                
            </select>

            <Demo12Child moviesData={ movies.find( movies => movies.id == select ) } />
            
            <h1>Components Communications Parent Footer</h1>
        </div>
    );
}
export default Demo12Parent;