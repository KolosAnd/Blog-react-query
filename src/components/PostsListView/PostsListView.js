import "./postList.scss";
import {PostForm} from "../postForm/PostForm";
import {useFetchPosts} from "../../hooks/useFetchPosts";
import {useCreatePost} from "../../hooks/useCreatePost";
import {useDeletePost} from "../../hooks/useDeletePost";
import {PostsList} from "../PostList/PostList";

function PostsListView ()  {
    const fetchPostsQ = useFetchPosts();
    const createPostsM = useCreatePost();
    const deletePostsM = useDeletePost();

    return(
        <section className="posts">
            <div className="container">
                <div className="posts__wrap">
                    <div className="posts__form">
                        <PostForm title={"Create user"} status={createPostsM.status}
                                  onSubmit={createPostsM.mutateAsync} type="create"
                                  initialValue={{}}/>
                    </div>
                    <PostsList isFetching={fetchPostsQ.isFetching} isLoading={fetchPostsQ.isLoading}
                               isFetched={fetchPostsQ.isFetched} posts={fetchPostsQ.data}
                               status={fetchPostsQ.status} error={fetchPostsQ.error}
                               deletePost={deletePostsM.mutateAsync} />
                </div>
            </div>
        </section>

    )
}
export default PostsListView;
