import {PostItem} from "../PostItem/PostItem";
import {LoadingIndicator} from "./LoadingIndicator";

export const PostsList = props => {

    const postListJSX =
        props.posts?.map(post =>{
            return (
                <PostItem key={post.id} post={post} deletePost={props.deletePost}/>
            )
        }) ?? null;

    return(
        <div className="posts__list">
            <h2>Posts list</h2>
            <h3>
                {props.isLoading && 'Loading...'}
                {props.isFetched && props.isFetching && 'Loading more...'}
            </h3>
            <ul className="item-list">
                <LoadingIndicator status={props.status} data={postListJSX}/>
            </ul>
        </div>
    )
}
