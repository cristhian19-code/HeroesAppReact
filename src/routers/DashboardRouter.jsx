import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRouter = () => {
    return (
        <>
            <Navbar/>

            <div className="p-3 mt-3">
                <Switch>
                    <Route exact path="/search" component={SearchScreen}></Route>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/hero/:heroId" component={HeroeScreen}></Route>
                    <Route path="/dc" component={DcScreen}></Route>
                </Switch>
            </div>
        </>
    )
}
