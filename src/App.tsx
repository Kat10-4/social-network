import React from 'react';
import './App.css'

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qCreqkTZL0F0bF9kZctFE1XVFocO__70kw&s"
                    alt="logo"/>
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className="content">
                <div><img
                    src="https://static.vecteezy.com/system/resources/previews/006/180/174/non_2x/panther-chameleon-on-branch-free-photo.jpg"
                    alt="chameleon"/></div>
                <div>
                    ava + descript
                </div>
                <div>My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
