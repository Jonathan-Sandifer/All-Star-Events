import { NavLink } from 'react-router-dom';
import transparent from '../images/transparent.png'

function Navbar() {
    return (
        <nav>
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
                    <NavLink className='spacer active' to="/">Logout</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar