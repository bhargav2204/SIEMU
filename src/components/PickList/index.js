import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Picklist, PicklistOption } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

index.propTypes = {
    placeholder: PropTypes.string,
    data: PropTypes.array
};
function index({ data, placeholder }) {
    const [value, setState] = useState(null)
    console.log("djhj0",value);
    return (
        <Picklist
            style={containerStyles}
            placeholder={placeholder}
            className="rainbow-m-bottom_small rainbow-p-horizontal_medium"
            onChange={value => setState(value)}
            value={value}
            hideLabel
        >
            {data.map((record, i) => {
                return <PicklistOption key={i} name={data[i]} label={data[i]} />
            })}
        </Picklist>
    );
}

export default index;