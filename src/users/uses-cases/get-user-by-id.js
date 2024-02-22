import { localHostUserToModel } from '../mappers/localHost-user.mapper';
import { User } from "../models/user";
import { extractUserData } from './extraxt-user-data';

/**
 * 
 * @param {String|Number} id 
 * @returns { Promise<User[]> }
 */
export const getUserById = async( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const res = await fetch(url);
    const data = await res.json();
    const newData = extractUserData( data );

    const users = localHostUserToModel( data );

    console.log({users})

    return users;
}