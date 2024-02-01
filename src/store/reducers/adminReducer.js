import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    UsersRedux: [],
    errMessage: '',
    userInfo1: null,
    errMessagePosts: '',






}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {


        case actionTypes.GET_NEW_USERS:
            // state.arrAllUsersRedux = action.data

            console.log('action', action.data)

            return {
                ...state,
            }
        case actionTypes.USER_SIGNUP_SUCCESS:
            state.errMessage = action.errMessage

            console.log('action', action)

            return {
                ...state,
            }
        case actionTypes.USER_SIGNUP_FAIL:
            state.errMessage = action.errMessage

            console.log('action', action)

            return {
                ...state,
            }
        case actionTypes.GET_ONE_USER:
            state.userInfo1 = action.data

            console.log('action userInfo', state.userInfo1)

            return {
                ...state,
            }
        case actionTypes.CREATE_ONE_POSTS:
            state.errMessagePosts = action.errMessage

            console.log('action errMessagePosts ', state)

            return {
                ...state,
            }





        default:
            return state;
    }
}

export default adminReducer;