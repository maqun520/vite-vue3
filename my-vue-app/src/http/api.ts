import axios from "../http/index"
//请求示例
//get
export const mokeGet = (data: any) => {
    return axios({
        url: "/api/xxxx",
        method: "GET",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}
//post
export const mokePost = (data: any) => {
    return axios({
        url: "/api/xxxx",
        method: "POST",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}
