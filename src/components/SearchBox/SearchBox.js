import React from 'react';
import './SearchBox.css';

export const SearchBox = (props) => {
    return (
        <input
            className="search"
            type={props.type}
            placeholder={props.placeholder}
            onChange={e => props.onChange(e.target.value)}
        />
    )
}
