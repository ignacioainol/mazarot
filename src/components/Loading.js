import React, { useEffect, useState } from 'react'
import './Loading.css'

export const Loading = () => {
    const [applyEffect, setApplyEffect] = useState(false);

    useEffect(() => {
        setApplyEffect(true);
    }, [])


    return (
        <div className={`container logo-loading ${applyEffect ? 'fade-out' : ''}`}>
            <div id="loading-logo-mazarot" style={{ width: '78%', height: '383px', backgroundSize: 'cover', backgroundImage: `url('./assets/images/logo-mazarot.png')` }}></div>
        </div>
    )
}
