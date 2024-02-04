import React from 'react'

export default function InputColor({ array = [], handleColorChange, selectedColors }) {
    array.forEach((input, index) => {
        return (
            <React.Fragment key={index}>
                <input
                    type="checkbox"
                    value={input}
                    // checked={selectedColors.includes(input)}
                    onChange={event => handleColorChange}
                />
            </React.Fragment>
        )
    })
}
