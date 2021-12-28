import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'


const header = () => {
    return (
        <ul>
            <li>
                <Link to={'/main'}>Home</Link>
            </li>
            <li>
                <Link to={'/login'}>Login</Link>
            </li>
        </ul>
    );
};

export default header;
