import { loadUserByPage } from "../uses-cases/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],

}

const loadNextPage = async() => {
    await loadUserByPage( state.currentPage + 1 );
}

const loadPreviusPage = async() => {
    throw new Error('no implementado');
}

const onUserChanged = () => {
    throw new Error('no implementado');
}

const reloadPage = async() => {
    throw new Error('no implementado');
}


export default {
    loadNextPage,
    loadPreviusPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}