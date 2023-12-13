import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    errMessage: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            state.isLoggedIn = true;
            state.userInfo = action.data;
            console.log('action', action.data)
            return {
                ...state,

            }
        case actionTypes.USER_LOGIN_FAIL:
            state.isLoggedIn = false;
            state.errMessage = action.data;
            return {
                ...state,

            }




        default:
            return state;
    }
}

export default userReducer;