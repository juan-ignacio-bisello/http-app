import { User } from "../models/user";
import { loadUserByPage } from "../uses-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],

}

const loadNextPage = async() => {
    const users = await loadUserByPage( state.currentPage + 1 );
    if ( users.length === 0 ) return;

    state.currentPage += 1;
    state.users = users;
}

const loadPreviusPage = async() => {
    if ( state.currentPage === 1) return;
    const users = await loadUserByPage( state.currentPage - 1 );

    state.currentPage = state.currentPage - 1;
    state.users = users;
}
/**
 * 
 * @param {User} user 
 */
const onUserChanged = ( updatedUser ) => {

    let wasFound = false;
    
    state.users = state.users.map( user => {
        if ( user.id === updatedUser.id ) {
            wasFound = true
            return updatedUser;
        }
        return user;
    });

    if ( state.users.length < 10 && !wasFound ) {
        state.users.push( updatedUser );
    }
}

const reloadPage = async() => {
    const users = await loadUserByPage( state.currentPage );
    if ( users.length === 0 ) {
        await loadPreviusPage();
        return;
    };
    state.users = users;
}


export default {
    loadNextPage,
    loadPreviusPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUser: () => [...state.users],
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}