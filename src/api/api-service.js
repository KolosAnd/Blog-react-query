
import axios from "axios";

const apiUrl = 'http://localhost:5000';

export const api = Object.freeze({
    async getPosts(){
        const response = await  axios.get(`${apiUrl}/posts`);
        return response.data;
    },
    async getPostById(id){
        const response = await  axios.get(`${apiUrl}/posts/${id}`);
        return response.data;
    },
    async createPost(newPost){
        const response = await  axios.post(`${apiUrl}/posts`,newPost);
        return response.data;
    },
    async updatePost(newPost){
        const{id,created,...postPayLoad} = newPost;
        const response = await  axios.put(`${apiUrl}/posts/${id}`,postPayLoad);
        return response.data;
    },
    async deletePost(id){
        const response = await  axios.delete(`${apiUrl}/posts/${id}`);
        return response.data;
    },
});

