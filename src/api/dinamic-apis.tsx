import {client} from 'api';

//Login
export const loginClient = (data: any) => client('/api/v1/user/login', { body: data });

export const registerClient = (data: any) => client('/api/v1/user/register', { body: data });