import { useState } from 'react';
import PropTypes from 'prop-types';
import './DeveloperFilter.css';

const DeveloperFilter = ( {setFilter} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setFilter(inputValue);
        }
    }
  
    return (
    <form onSubmit={ handleSubmit }>
        <input 
            type='text'
            className='custom-input'
            value={ inputValue }
            onChange={ handleInputValue }
        />
    </form>
  )
}

DeveloperFilter.propTypes = {
  setFilter: PropTypes.func.isRequired
}

export default DeveloperFilter;