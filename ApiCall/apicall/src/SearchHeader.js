import {useState} from "react";
function SearchHeader({search}) {
    const [value, setvalue] = useState('')
    const handleFormSubmit = (event) => {
        event.preventDefault();
        search(value);
    };

    const handleChange = (event) => {
        setvalue(event.target.value);
    }
    return ( 
    <div className="search-div"> 
        <form onSubmit={handleFormSubmit}>
            <label>Ne Arıyorsunuz?</label>
            <input value={value} onChange={handleChange}></input>
        </form>
    </div> );
}

export default SearchHeader;