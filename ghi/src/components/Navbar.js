import { NavLink } from 'react-router-dom';
import transparent from '../images/transparent.png'

function Navbar() {
    return (
        <nav>
            <ul>
                <li >
                    <img  className='icon' src={transparent}></img>
                </li>
                <li >
                    <NavLink  className='spacer active' to="/signup">Sign Up</NavLink>
                </li>
                <li >
                    <NavLink className='spacer active' to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar