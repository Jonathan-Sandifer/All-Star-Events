import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li>
                    <NavLink to="/">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar