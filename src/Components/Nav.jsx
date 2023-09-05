import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='nav'>
        <Link to={'/'}>Articles </Link>
        <Link to={'/users'}>Users </Link>
    </nav>
    )
 
}

export default Nav