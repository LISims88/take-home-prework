import { useState } from 'react';
import './Select.css';

function Select({ onOptionChange }) {
    const [option, setOption] = useState("");

    const handleOptionChange = (event) => {
        setOption(event.target.value);
        onOptionChange(event.target.value);
    };
    return (
        <div>
            <label className='filter'>Sort:</label>
            <select value={option} onChange={handleOptionChange}>
                <option value="">--Choose your Option--</option>
                <option value="alphabetically">Alphabetically</option>
                <option value="source">Source</option>
            </select>
        </div>
    );
}

export default Select