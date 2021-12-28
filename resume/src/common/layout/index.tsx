import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Header from './header';
import Main from '../../pages/home/main'
import Login from '../../pages/auth'

const index = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path={'/Main'} element={<Main />} />
                    <Route path={'/Login'} element={<Login />} />
                </Routes>
            </main>
        </Router>
    );
};

export default index;