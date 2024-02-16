import { localHostUserToModel } from '../mappers/localHost-user.mapper';
import { User } from "../models/user";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUserByPage = async( page = 1 ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`
    const res = await fetch(url);
    const data = await res.json();

    const users = data.map( localHostUserToModel )

    return users;
}