import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcScreen = () => {
    const publisher = 'DC Comics'
    return (
        <div>
            <h1>DcScreen</h1>
            <HeroesList publisher={publisher} />
        </div>
    )
}
