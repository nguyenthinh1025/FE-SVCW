const stateDefault = {
    arrEndActivity: [],
    arrEndActivityByUserID:[],
}


export const EndActivityReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_END_ACTIVITY': {
            state.arrEndActivity = action.arrEndActivity;
            return { ...state }
        }
        case 'GET_LIST_END_ACTIVITY_BY_USERID': {
            state.arrEndActivityByUserID = action.arrEndActivityByUserID;
            return { ...state }
        }

        default: return state;
    }
}