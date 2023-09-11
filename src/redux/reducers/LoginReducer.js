const stateDefault = {
    userLogin: {},
    userID: localStorage.getItem('userID'),
    msg: '',
    moderator: localStorage.getItem('moderator'),
    msgModerator: '',
    userIDMobile:localStorage.getItem('userIDMobile'),
    ModeratorId:{}
}


export const LoginReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_USER_LOGIN': {
            state.userLogin = action.userLogin;
            state.userID = action.userID;
            return { ...state }
        }
        case 'CHECH_LOGIN': {
            state.msg = action.data;
            return { ...state }
        }
        case "LOGOUT1": {
            localStorage.setItem('setError', "")
            state.userID = localStorage.setItem('userID', "")
            return { ...state }
        }
        case 'GET_MODERATOR_LOGIN': {
            state.moderator = action.moderator;
            state.msgModerator = '';
            return { ...state }
        }
        case 'CHECK_MODERATOR': {
            state.msgModerator = action.msgModerator;
            return { ...state }
        }
        case 'GET_USER_LOGIN_MOBILE':{
            state.userIDMobile = action.userIDMobile;
            return { ...state }
        }
        case 'GET_LIST_MODERATOR_ID':{
            state.ModeratorId = action.ModeratorId;
            return { ...state }
        }
        default: return state;
    }
}