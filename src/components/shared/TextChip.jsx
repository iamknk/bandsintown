import React from 'react'
import '../../stylesheets/TextChip.css'

export const TextChip = ({text, onClick}) => {
    const onChipClick = () => {
        onClick(text);
    }

    return (
        <div className="d-inline" onClick={() => onChipClick()}>
            <div className="chip">{text}</div>
        </div>
    )
}
