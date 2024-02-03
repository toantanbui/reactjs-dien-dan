import actionTypes from "./actionTypes";

import {
    handleGetDataLogin, handleGetDataSignup, handleGetDataLogout,
    handleGetDataOneUser, handleEditDataOneUser, handleCreateDataPosts,
    handleGetDataOnePosts, handleCreateDataComment1

} from '../../services/userService'






export const handleLogin = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetDataLogin(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.USER_LOGIN_SUCCESS,
                    data: res.data,
                    errMessage: res.errMessage,
                    token: res.token1

                })

            } else {
                dispatch({
                    type: actionTypes.USER_LOGIN_FAIL,
                    data: res.errMessage
                })
            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const handleSignup = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetDataSignup(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.USER_SIGNUP_SUCCESS,

                    errMessage: res.errMessage,


                })

            } else {
                dispatch({
                    type: actionTypes.USER_SIGNUP_FAIL,
                    errMessage: res.errMessage
                })
            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const handleLogout = () => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetDataLogout();


            dispatch({
                type: actionTypes.USER_LOGOUT,

            })





        } catch (e) {
            console.log(e)

        }
    }
}

export const handleGetOneUser = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetDataOneUser(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ONE_USER,

                    errMessage: res.errMessage,
                    data: res.data


                })

            }

            await dispatch(handleGetPosts(data1))

        } catch (e) {
            console.log(e)

        }
    }
}

export const handleEditOneUser = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleEditDataOneUser(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_ONE_USER,

                    errMessage: res.errMessage,



                })

                await dispatch(handleGetOneUser(data1.id))

            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const handleCreatePosts = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleCreateDataPosts(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_ONE_POSTS,

                    errMessage: res.errMessage,



                })


            }



        } catch (e) {
            console.log(e)

        }
    }
}
export const handleGetPosts = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetDataOnePosts(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ONE_POSTS,

                    errMessage: res.errMessage,
                    data: res.data


                })

            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const handleCreateComment1 = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleCreateDataComment1(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_ONE_COMMENT1,

                    errMessage: res.errMessage,



                })
                await dispatch(handleGetPosts({ id: data1.idUser }))




            }



        } catch (e) {
            console.log(e)

        }
    }
}

