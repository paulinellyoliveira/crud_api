import axios from "axios";

const api = axios.create({
   baseURL: 'http://localhost:8080/web',
   timeout: 1000,      
   
   headers:{       
        'Content-type': 'application/json;charset=UTF-8',
        /*'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers': 'Authorization',
        'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE,PATCH,OPTIONS',              
        'Access-Control-Max-Age': '86400',    */
    },
});

export default api;