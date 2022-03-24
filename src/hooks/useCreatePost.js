
import {api} from "../api/api-service";
import {useMutation, useQueryClient} from "react-query";

export const useCreatePost = () => {
    const client = useQueryClient();

    const mutation = useMutation(newPost => api.createPost(newPost),
        {
            async onMutate(newPost) {
                const prevPosts = await client.getQueryData('posts');
                await client.setQueryData('posts', oldPosts => [
                    ...oldPosts, {id: 'temp', ...newPost,}
                ]);
                return () => client.setQueryData('posts', prevPosts);
            },
            onError: (error, values, rollback) => rollback(),
            onSettled: () => client.invalidateQueries('posts'),
        });

    return mutation;

}
