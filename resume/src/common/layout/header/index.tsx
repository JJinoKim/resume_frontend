import { Link } from 'react-router-dom'


const Header = () => {
    const goLink = () => {
        // return (
        //     <Link to={'/main'}>Home</Link>
        // )
    }
    return (
        <ul>
            <li>
                <Link to={'/main'}>Home</Link>
            </li>
            <li>
                <Link to={'/login'}>Login</Link>
            </li>
            <li>
                <Link to={'/test'}>Test</Link>
            </li>
        </ul>
    );
};

export default Header;
