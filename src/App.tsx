import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";

const App = () => {
    return (
        <div className="app_wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app_wrapper_content">
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                <Route path="/dialogs" render={() => <DialogsContainer/>}/>

                <Route path="/news" render={() => <News/>}/>

                <Route path="/music" render={() => <Music/>}/>

                <Route path="/settings" render={() => <Settings/>}/>

                <Route path={"/users"} render={() => <UsersContainer/>} />

                <Route path="/login" render={() => <Login/>} />
            </div>
        </div>
    );
}

export default App;
