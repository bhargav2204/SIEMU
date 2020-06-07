import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tabset, Tab } from 'react-rainbow-components';




function TabSet({ data, handleOnSelectChanged }) {
    const [selected, setselected] = useState(data[0]);
    const handleOnSelect = (event, selected) => {
        setselected(selected);
        handleOnSelectChanged({
            selected: selected
        });
    };

    return (
        <div>
            <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                <Tabset
                    id="tabset-1"
                    onSelect={handleOnSelect}
                    activeTabName={selected}
                    className="rainbow-p-horizontal_x-large"
                >
                    {data.map((record, i) => {
                        return <Tab
                            key={i}
                            label={data[i]}
                            name={data[i]}
                            id={data[i]}
                            ariaControls={`${data[i]}Tab`}
                        />
                    })}
                </Tabset>

            </div>

        </div>
    );
}

TabSet.propTypes = {
    data: PropTypes.array,
    handleOnSelectChanged: PropTypes.func
};

export default TabSet;