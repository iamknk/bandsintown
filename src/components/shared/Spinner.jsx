import React from 'react'
import '../../stylesheets/Spinner.css'

export const Spinner = () => {
    return (
        <div class="center spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    )
}
