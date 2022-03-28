import {useParams} from "react-router-dom";
import {PostView} from "./PostView";
import {PostForm} from "../postForm/PostForm";
import {useUpdatePost} from "../../hooks/useUpdatePost";
import {usePostById} from "../../hooks/usePostById";

export function PostByIdView() {
    const {postId} = useParams();

    const {data: post,status: fetchPostStatus,error} = usePostById(postId);

    const {
        mutateAsync: updatePost,
        status: updatePostStatus,
    } = useUpdatePost();


    return(
        <section className="posts">
            <div className="container">
                <PostView status={fetchPostStatus} error={error} post={post}/>
                <PostForm title="Update post" type="update" status={updatePostStatus}
                          initialValue={post} onSubmit={updatePost}/>
            </div>
        </section>
    )
}
