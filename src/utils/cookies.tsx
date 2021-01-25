import Cookies from 'universal-cookie';

const cookiesLocal = new Cookies();


const options: any = { maxAge: 900000, path: '/', sameSite: 'Lax' };


export const cookies = {
    get: (name: string) => cookiesLocal.get(name, options),
    set: (name: string, value: string | number) => cookiesLocal.set(name, value, options),
    remove: (name: string) => cookiesLocal.remove(name, options),
    getAll: () => cookiesLocal.getAll(options),
};
