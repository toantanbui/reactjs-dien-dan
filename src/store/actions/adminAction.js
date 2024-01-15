import actionTypes from "./actionTypes";

import {
    handleGetDataLogin, handleGetDataSignup

} from '../../services/userService'






// export const getNewUsers = () => {
//     return async (dispatch, getState) => {
//         try {
//             let res = await handleGetNewUsers();
//             console.log('res', res)
//             if (res && res.errCode === 0) {
//                 dispatch({
//                     type: actionTypes.GET_NEW_USERS,
//                     data: res.data
//                 })
//             }


//         } catch (e) {
//             console.log(e)

//         }
//     }
// }

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
