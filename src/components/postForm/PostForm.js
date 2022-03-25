import {useEffect, useState} from "react";

export const PostForm = (props) =>{
    const [post,setPost] = useState(props.initialValue)
    const [isFetching, setFetching] = useState(false);

    const setValue = (field,value) => setPost(old => ({...old, [field]:value}));

    const submit = async e => {
        e.preventDefault();

        try {
            setFetching(true);
            await props.onSubmit(post);
        }finally {
            setFetching(false);
            if(props.type === 'create') setPost(props.initialValue);
        }
    }

    useEffect(()=>{
        setPost(props.initialValue);
    }, [props.initialValue]);

    if(post === null){
        return null;
    }
    return(
        <form className="post-form" onSubmit={submit}>
            <h2>{props.title}</h2>
            <fieldset disabled={isFetching} className="post-form__wrap">
                <div className="post-form__input-block">
                    <label className="post-form__label" htmlFor="postTitle">Post title</label>
                    <input onChange={(e) => setValue('title',  e.target.value)}
                           value={post.title} required className="post-form__input"
                           name="title" id="postTitle" type="text"/>
                </div>
                <div className="post-form__input-block">
                    <label className="post-form__label" htmlFor="postBody">Post body</label>
                    <input onChange={(e) => setValue('body', e.target.value)}
                           value={post.body} required className="post-form__input"
                           name="body" id="postBody" type="text"/>
                </div>
                <div className="post-form__input-block">
                        <button type="submit" className="button">Send</button>
                </div>
            </fieldset>
        </form>
    )
}
