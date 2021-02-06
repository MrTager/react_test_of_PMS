import axios from 'axios'


const service = axios.create({
    baseURL:"",
    timeout:5000,
    headers:{
        "post":{
            "Content-Type":"application/x-www-form-urlencoded",
        }
    }
})
axios.defaults.baseURL=process.env.NODE_ENV==='development'?'http://localhost:3001':'http://192.168.0.1';

//request interceptor
service.interceptors.request.use(
    config => {
        if(config.method == 'post'){
            let oldData = config.data
            let arr = []
            for(let key in oldData){
              let str = ''
              str = key+'='+oldData[key]
              arr.push(str);
            }
            let argumentes = arr.join('&');
            config.data = argumentes
          }
          return config;
       },
       error => {
        return Promise.reject(error)
       }
)
//response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        if(res.errorCode !== 0){
            console.error("请求错误",res)
        }else{
          return res
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service