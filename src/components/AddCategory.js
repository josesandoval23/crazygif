import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ misCategorias, setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const hanldeInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const valorDelInput = inputValue.trim();
    if (valorDelInput.length > 2) {
      setCategories(cats => [inputValue, ...cats,]);
      setInputValue('');
    }
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input className="animate__animated animate__bounce nav"
        type="text"
        value={inputValue}
        onChange={hanldeInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}