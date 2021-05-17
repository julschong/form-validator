import React, { useState } from 'react';

const FormControl = ({ fieldName, setFormControl, formControl }) => {
    const errMsg = formControl[fieldName][1];
    let style = {};
    let errStyle = {};

    if (errMsg === '') {
        style = null;
        errStyle = { visibility: 'hidden' };
    } else if (errMsg === 'OK') {
        style = {
            border: 'green 3px solid'
        };
        errStyle = { visibility: 'hidden' };
    } else {
        style = {
            border: 'red 3px solid'
        };
        errStyle = { visibility: 'visible' };
    }

    return (
        <div className="form-control">
            <label>
                {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            </label>
            <input
                type="text"
                id={fieldName}
                onChange={(e) => {
                    const newForm = { ...formControl };
                    newForm[fieldName][0] = e.target.value;
                    setFormControl(newForm);
                }}
                value={formControl[fieldName][0]}
                placeholder={`Enter ${fieldName}`}
                style={style}
            />
            <small id={`error-${fieldName}`} style={errStyle}>
                {errMsg === '' ? 'OK' : errMsg}
            </small>
        </div>
    );
};

export default FormControl;
