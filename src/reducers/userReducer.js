import {GET_USER_SESSION, PROFILE_PAGE_DATA,USER_LIST_DATA,USER_LIST_DETAIL_DATA, RECEIVE_SESSION_USER, RECEIVE_USER_IS_LOGGED_LOGIN, RECEIVE_USER_LOGGED_IN} from "../constants/actionTypes";

const initialState ={};

const userReducer= (state = initialState, action) =>{
    switch(action.type){
        case RECEIVE_SESSION_USER:
            return{
                ...state,
                user:action.payload
            }
        case GET_USER_SESSION:

            return {
                ...state,
                userIsLoggedIn: action.payload
            }
        case PROFILE_PAGE_DATA:

            return {
                ...state,
                profile: action.payload
            }
        case USER_LIST_DATA:

            return {
                ...state,
                lists: action.payload
            }
        case USER_LIST_DETAIL_DATA:

            return {
                ...state,
                lisDetail: action.payload
            }
        default:
            return state;
    }
}


export default userReducer;