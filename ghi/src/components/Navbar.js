import { NavLink } from 'react-router-dom';
import transparent from '../images/transparent.png'

function Navbar() {
    return (
        <nav className='my-nav'>
            <ul>
                <li >
                    <NavLink  className='icon' to="/"> <img  className='icon' src={transparent}></img> </NavLink>
                </li>
                <li >
                    <NavLink  className='spacer active' to="/signup">Sign Up</NavLink>
                </li>
                <li >
                    <NavLink className='spacer active' to="/login">Login</NavLink>
                </li>
                <li >
                    <NavLink className='spacer active' to="/preferences">Preferences</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar