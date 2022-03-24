export const PostView = (props)=> {
    return(
        <div className="post-item">
            <div className="item-row">
              <p>id:{props.post.id}, { props.post.title}</p>
            </div>
            <div className="item-row">
               <p>{props.post.body}</p>
            </div>
        </div>
    )
}
