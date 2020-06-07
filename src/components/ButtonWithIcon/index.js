import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button
} from "react-rainbow-components";


function ButtonWithIcon({ data }) {
    return (
        <Button variant="base" >
            <FontAwesomeIcon icon={data.icon} className="rainbow-m-right_medium" />
            {data.label}
        </Button>
    );
}

ButtonWithIcon.propTypes = {
    data: PropTypes.object
};

export default ButtonWithIcon;