import React, { useContext } from 'react'
import {NavLink,Link, useHistory} from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
export const Navbar = () => {
    const {user,dispatch} = useContext(AuthContext)
    const history = useHistory()

    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
        history.push('/login')
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">HeroesApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="active" exact to="/" className="nav-items nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" exact to="/dc" className="nav-items nav-link">DC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" exact to="/marvel" className="nav-items nav-link">Marvel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" exact to="/search" className="nav-items nav-link">Search</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <div className="nav-link nav-item text-danger">{user.name}</div>
                        {
                            !user.logged 
                            ? (<NavLink exact to="/login" className="text-white nav-link nav-item">Login</NavLink>)
                            : (<button onClick={handleLogout} className="btn btn-primary">Logout</button>) 
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}
