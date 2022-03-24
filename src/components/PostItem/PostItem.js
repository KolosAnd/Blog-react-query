import {useState} from "react";
import {useQueryClient} from "react-query";
import {api} from "../../api/api-service";
import {NavLink} from "react-router-dom";

export const PostItem = (props)=> {
    const client = useQueryClient();
    const [isFetching,setFetching] = useState(false);

    const deletePost = async ()=> {
        setFetching(true);
        await props.deletePost(props.post.id);
    }
    const prefetch = () => {
        client.prefetchQuery(['posts', props.post.id], () => api.getPostById(props.post.id));
    }
    return(
        <li onMouseEnter={prefetch} key={props.post.id} className="post-item link">
            <NavLink to={`/${props.post.id}`}>{props.post.id}, {props.post.title}</NavLink>
            <button className="button" disabled={isFetching} onClick={deletePost}>delete</button>
        </li>
    )
}
