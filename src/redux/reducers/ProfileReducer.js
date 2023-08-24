
let user = {}
let arr = []
if (localStorage.getItem('getuserid')) {
    user = JSON.parse(localStorage.getItem('getuserid'))
    arr = JSON.parse(localStorage.getItem('getuserid'))
}
const stateDefault = {
    getUserId: user,
    arrActivityUser: arr
}


export const ProfileReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_USER_BY_ID': {
            state.getUserId = action.getUserId;
            state.arrActivityUser = action.arrActivityUser;
            return { ...state }
        }

        default: return state;
    }
}