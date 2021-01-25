import axios from 'axios';

// declare module 'axios' {
//     export interface AxiosResponse<T = any> extends Promise<T> {}
//   }


export const cookieAuthKey: string = '_TKN_';



const headers: any = { 'content-type': 'application/json' };
const baseURL: string = 'https://virtserver.swaggerhub.com/ITEnterprise/phone-user-ms/1.0.0';


const client = (endpoint: string, { body, ...customConfig }: any = {}) => {
    const token: string = 'test'

    if (token) {
        headers['X-AUTH-PROTOKEN'] = token;
    }

    const config = {
        baseURL,
        url: endpoint,
        data: body,
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };

    return axios.request(config).then(res => res?.data);
}

export default client;
