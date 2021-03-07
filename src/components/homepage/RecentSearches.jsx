import React from 'react'
import { TextChip } from '../index'

export const RecentSearches = ({ searches, onChipClick }) => {

    return (
        <div class="card mb-5">
            <div class="card-header">
                <strong>Recent Searches : </strong>
                {searches.length > 0 ? searches.map(text => <TextChip text={text} onClick={onChipClick} />) : <p>Data not availible.</p>}
            </div>
        </div>
    )
}
