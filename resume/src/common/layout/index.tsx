import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import "styled-components";

import Header from './Header';
import Main from '../../pages/home/Main'
import Login from '../../pages/auth/Login'
import Register from '../../pages/auth/Register'
import Test from '../../pages/Testpage';


declare module "styled-components" {
    export interface DefaultTheme {
        basicWidth: string;

        color: {
            main: string;
            sub: string;
        };
    }
}

const index = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path={'/Main'} element={<Main />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/test'} element={<Test />} />
                </Routes>
            </main>
        </Router>
    );
};

export default index;
