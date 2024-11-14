import React from 'react';
import './App.css'
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Navigate, Route, Routes} from 'react-router-dom';

export const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs'
}

function App() {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<Navigate to={PATH.PROFILE}/>}/>
                        <Route path={PATH.PROFILE} element={<Profile/>}/>
                        <Route path={`${PATH.DIALOGS}/*`} element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
