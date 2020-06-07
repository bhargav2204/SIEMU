import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-rainbow-components';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

index.propTypes = {
    onDateChange: PropTypes.func
};

function index({ onDateChange }) {
    const [selection, setselected] = useState({
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
    });
    const handleSelect = (event, ranges) => { console.log(ranges) };
    return (
        <Card>
            <DateRangePicker
                onChange={item => setselected(item.selection)}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={1}
                ranges={[selection]}
                direction="vertical"
            />
            <div className="rainbow-align-content_center rainbow-flex_wrap">
                <Button
                    shaded
                    label="Apply"
                    onClick={() => onDateChange({ modal: false, selection: selection })}
                    variant="brand"
                    className="rainbow-m-around_medium"
                />
                <Button
                    shaded
                    label="Cancle"
                    onClick={() => onDateChange({ modal: false,selection:{} })}
                    variant="destructive"
                    className="rainbow-m-around_medium"
                />
            </div>
        </Card>
    );
}

export default index;