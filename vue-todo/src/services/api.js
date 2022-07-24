import axios from 'axios'

class Api {
    constructor(){
        const api = axios.create({
            baseURL: "http://localhost:3333/"
        });
        this.api = api;
    }
}

export default Api;