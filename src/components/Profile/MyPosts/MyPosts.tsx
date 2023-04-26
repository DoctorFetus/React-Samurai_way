import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Posts, {PostsType} from "./Posts/Posts";

type PostsProps = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<PostsProps> = (props) => {

    let postsElements = props.posts.map(p => <Posts message={p.message} likeCounter={p.likeCounter} id={p.id}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const AddPost = () => {
            props.addPost()
    }

    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
            <div className={s.container}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement} onChange={changeText} value={props.newPostText}/>
                    <button onClick={AddPost}>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.newPosts}>
                    New post
                </div>
                <div className={s.posts}>
                {postsElements}
                </div>
            </div>
    );
}

export default MyPosts;