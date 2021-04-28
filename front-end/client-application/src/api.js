import axios from "axios";

const api = axios.create({
   baseURL: 'http://localhost:8080/web/v1/listarProdutos',
   timeout: 1000,   
   
   /*
   headers:{       
       'Access-Control-Allow-Origin' : '*',
       'Access-Control-Allow-Headers': 'Authorization',
       'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE,PATCH,OPTIONS',       
       'Content-type': 'application/json;charset=UTF-8',
       'Access-Control-Max-Age': '86400',    
    },*/
});

//axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
//axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default api;