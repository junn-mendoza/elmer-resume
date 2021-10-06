import React from 'react';
import LoadingGif from "../Components/backgroundImage/gif/loading-arrow.gif"

export default function Loading() {
    return (
        <div className="loading">
            <h4>...data loading</h4>
            <img src={LoadingGif} alt="loading"  />
        </div>
        )
}
