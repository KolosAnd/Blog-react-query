
import {api} from "../api/api-service";
import {useMutation, useQueryClient} from "react-query";

export const useDeletePost = () => {
   const client = useQueryClient();
   const mutation = useMutation(postId => api.deletePost(postId), {
       onMutate(...params){
           console.log('onMutate', params);
           console.log('dalete post mutation fired');
       },
       onSuccess(...params) {
           console.log('onSuccess', params);
           console.log('post was deleted');
       },
       onError(...params) {
           console.log('onError', params);
           console.log('post was not deleted');
       },
       onSettled(...params) {
           console.log('onSettled', params);
           console.log('delete post completed');
           client.invalidateQueries('posts');
       }
   });

   return mutation;
}
