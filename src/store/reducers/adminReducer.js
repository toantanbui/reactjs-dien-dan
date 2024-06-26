import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    UsersRedux: [],
    errMessage: '',
    userInfo1: null,
    errMessagePosts: '',
    postsInfo: null,
    allPosts: null,
    postsInfoById: null,
    allPostsLike: null,
    errMessageEditOneUser: '',
    errMessageCreatePost: '',
    dataSearchKey: null






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
        case actionTypes.GET_ONE_POSTS:
            state.postsInfo = action.data

            console.log('action postsInfo ', action.data)

            return {
                ...state,
            }

        case actionTypes.GET_ALL_POSTS:
            state.allPosts = action.data

            console.log('action postsInfo ', action.data)

            return {
                ...state,
            }
        case actionTypes.GET_ONE_POSTS_BY_ID:
            state.postsInfoById = action.data

            console.log('action postsInfo ', action.data)

            return {
                ...state,
            }
        case actionTypes.GET_ALL_POSTS_LIKE:
            state.allPostsLike = action.data

            console.log('action postsInfo ', action.data)

            return {
                ...state,
            }
        case actionTypes.EDIT_ONE_USER:
            state.errMessageEditOneUser = action.errMessage
            console.log('action postsInfo ', action)

            return {
                ...state,
            }

        case actionTypes.SEARCH_KEY:
            state.dataSearchKey = action.data
            console.log('action postsInfo ', action)

            return {
                ...state,
            }

        // case actionTypes.CREATE_ONE_POSTS:
        //     state.errMessageCreatePost = action.errMessage
        //     console.log('action postsInfo ', action)

        //     return {
        //         ...state,
        //     }






        default:
            return state;
    }
}

export default adminReducer;