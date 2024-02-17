import axios from "axios";

const Instance = axios.create({
    baseURL : "http://localhost:7777/v1",
    headers :{
        "Content-Type" : "application/json"
    }
});

export default Instance;