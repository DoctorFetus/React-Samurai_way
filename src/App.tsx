import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogItemType} from "./components/Dialogs/Dialog/DialogItem";
import {MessageType} from "./components/Dialogs/Message/Message";
import {PostsType} from "./components/Profile/MyPosts/Posts/Posts";
import {FriendType} from "./components/Navbar/Friends/Friend/Friend";
import {updateNewPostText} from "./redux/state";

type AppType = {
    state: {
        profilePage: {
            posts: Array<PostsType>
            newPostText: string
        },
        dialogsPage: {
            dialogs: Array<DialogItemType>
            messages: Array<MessageType>
        },
        sidebar: {
            friends: Array<FriendType>
        }
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App: React.FC<AppType> = (props) => {
    return (
            <div className="app_wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="app_wrapper_content">
                    <Route path="/profile" render={() => <Profile updateNewPostText={updateNewPostText} addPost={props.addPost} profilePage={props.state.profilePage}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;
