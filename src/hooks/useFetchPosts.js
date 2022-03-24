import {api} from "../api/api-service";
import {useQuery} from "react-query";

export const useFetchPosts = () => {
    const query = useQuery('posts', api.getPosts);

    return query;
}
