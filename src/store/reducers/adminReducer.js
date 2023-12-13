import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    arrAllUsersRedux: [],





}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {


        case actionTypes.GET_NEW_USERS:
            state.arrAllUsersRedux = action.data

            console.log('action', action.data)

            return {
                ...state,
            }




        default:
            return state;
    }
}

export default adminReducer;