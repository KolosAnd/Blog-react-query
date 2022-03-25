import {api} from "../api/api-service";
import {useQuery} from "react-query";

export const useFetchPosts = () => {
    return useQuery('posts', api.getPosts);
}
