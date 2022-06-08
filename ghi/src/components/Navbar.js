import { NavLink } from 'react-router-dom';
import transparent from '../images/transparent.png'

function Navbar(props) {
    const token = props.token;
    return (
        <nav className='my-nav'>
            <ul>
                <li >
                    <NavLink  className='icon' to="/"> <img  alt='' className='icon' src={transparent}></img> </NavLink>
                </li>
                { token ?
                <>
                    <li >
                        <NavLink className='spacer active' to="/userEventsParks">Your Events/Parks</NavLink>
                    </li>
                    <li >
                        <NavLink className='spacer active' to="/preferences">Preferences</NavLink>
                    </li>
                    <li >
                        <NavLink className='spacer active' to="/logout">Logout</NavLink>
                    </li>
                </>
                :
                <>
                    <li >
                        <NavLink className='spacer active' to="/login">Login</NavLink>
                    </li>
                    <li >
                        <NavLink  className='spacer active' to="/signup">Sign Up</NavLink>
                    </li>
                </>
                }
            </ul>
        </nav>
    )
}


export default Navbar
