import {api} from "../api/api-service";
import {useMutation, useQueryClient} from "react-query";

export const useUpdatePost = () => {
    const client = useQueryClient();

    const mutation = useMutation(values => api.updatePost(values),
        {
            async onMutate(newPost) {
                const cacheKey = ['posts', newPost.id];

                const prevPost = await client.getQueryData(cacheKey);
                await  client.setQueryData(cacheKey, oldPost => ({
                    ...oldPost, ...newPost,
                }));

                return () => client.setQueryData(cacheKey, prevPost);
            },
            onError: (error,values,rollback) => rollback(),
            async onSettled(_,__,newPost) {
                await client.invalidateQueries('posts',newPost.id);
            },
        });
        return mutation;
}
