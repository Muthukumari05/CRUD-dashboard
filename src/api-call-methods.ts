import axios from "axios";

const httpClient = axios.create();

const getPosts = "https://jsonplaceholder.typicode.com/posts";



class APICalls {
    async addFormCall() {
        try {
            await httpClient.post(getPosts);
        } catch (error) {
            console.error("er", error);
        }
    }

    async editFormCall() {
        try {
            await httpClient.put(getPosts);
        } catch (error) {
            console.error("er", error);
        }
    }

    async deleteFormCall() {
        try {
            await httpClient.delete(getPosts);
        } catch (error) {
            console.error("er", error);
        }
    }

}  

const apiCalls = new APICalls();
export default apiCalls;