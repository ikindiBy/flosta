import React from 'react';

const FilterItem = ({
    name,
    onClick,
    filterData,
}) => {
    const onFilterClick = (e) => {
        e.preventDefault();
        onClick(e, filterData);
    }
    return (
        <li><a href="" onClick={onFilterClick}>{name}</a></li>
    )
};

export default FilterItem;