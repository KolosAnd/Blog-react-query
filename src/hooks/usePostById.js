
import {api} from "../api/api-service";
import {useNavigate} from "react-router-dom";
import {useQuery, useQueryClient} from "react-query";

export const usePostById = postId => {
    const navigate = useNavigate();

    const client = useQueryClient();

    const query = useQuery(['posts', postId],
        async ()=> {
            const postById = await api.getPostById(postId);
            return postById;
        },
        {
            placeholderData(){
                const postPreview = client.getQueryData('posts')?.find(post=> post.id === postId);
                return( postPreview ?? {
                    title: 'wait for data...',
                    body:  'wait for data too...',
                });
            },
            onError(){navigate('/');},
            retry: 2,
            retryDelay: 1500,
        },

        );

    return query;

}
