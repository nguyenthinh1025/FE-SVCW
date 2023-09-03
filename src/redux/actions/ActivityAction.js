import { http } from "../../utils/reponse";
import { GetFanpageByIDAction } from "./FanpageAction";
import { GetProfileByIdAction } from "./ProfileAction";
export const GetListActivityAction = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "DISPLAY_LOADING" })
            let result = await http.get('/Activity/get-activity?pageSize=30&PageLoad=1');
            console.log(result.data.data.result);

            const action = {
                type: "GET_LIST_ACTIVITY",
                arrActivity: result.data.data.result
            }
            dispatch(action)

            localStorage.setItem('activity', JSON.stringify(result.data.data.result))
            dispatch({ type: "HIDE_LOADING" })
        } catch (error) {
            console.log(error);
        }
    }
}

export const GetActivityAction = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "DISPLAY_LOADING" })
            let result = await http.get('/Activity/get-activity?pageSize=5&PageLoad=1');
            console.log(result.data.data.result);

            const action = {
                type: "GET_ACTIVITY",
                arrListActivity: result.data.data.result
            }
            dispatch(action)
            dispatch({ type: "HIDE_LOADING" })
        } catch (error) {
            console.log(error);
        }
    }
}

export const GetListEndActivityAction = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "DISPLAY_LOADING" })
            let result = await http.get('/Activity/get-activity-after-enddate');
            console.log(result.data.data);

            const action = {
                type: "GET_LIST_END_ACTIVITY",
                arrEndActivity: result.data.data
            }
            dispatch(action)
            localStorage.setItem('endactivity', JSON.stringify(result.data.data))
            dispatch({ type: "HIDE_LOADING" })
        } catch (error) {
            console.log(error);
            dispatch({ type: "HIDE_LOADING" })
        }
    }
}
export const GetListEndActivityByUserIDAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "DISPLAY_LOADING" })
            let result = await http.get(`/Activity/get-activity-after-enddate-user?userId=${id}`);
            console.log(result.data.data);

            const action = {
                type: "GET_LIST_END_ACTIVITY_BY_USERID",
                arrEndActivityByUserID: result.data.data
            }
            dispatch(action)
            localStorage.setItem('endactivity', JSON.stringify(result.data.data))
            dispatch({ type: "HIDE_LOADING" })
        } catch (error) {
            console.log(error);
            dispatch({ type: "HIDE_LOADING" })
        }
    }
}
export const CreateActivityAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Activity/Insert-Activity', value);
            console.log(result.data.data);
            const action1 = {
                type: "CREATE_PROCEESS",
                activityProcess: result.data.data.activityId
            }
            dispatch(action1)
            const action = GetListActivityAction()
            dispatch(action)
            const action5 = GetListEndActivityAction();
            dispatch(action5)
            localStorage.setItem('activityprocess', result.data.data.activityId)
            localStorage.setItem('startactivity', value.startDate)
            localStorage.setItem('endstart', value.endDate)

        } catch (error) {
            console.log(error);
        }
    }
}


export const GetActivityTitleAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Activity/get-activity-title?search=43432`)
            const action = {
                type: "GET_LIST_ACTIVITY_TITLE",
                arrActivity: result.data.data
            }
            dispatch(action)
            localStorage.setItem('activity', JSON.stringify(result.data.data))
        } catch (error) {
            console.log(error);
        }
    }
}
export const GetActivityIDAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Activity/get-activity-id?id=${value}`)
            const action = {
                type: "GET_ACTIVITY_BY_ID",
                activityById: result.data.data
            }
            localStorage.setItem('activityID', result.data.data)
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const PostLikeAction = (value) => {
    console.log("sasa" + localStorage.getItem('fanpagedatail'))
    return async (dispatch) => {
        try {
            let result = await http.post('/Like/simple-like', value);
            const action = GetListActivityAction()
            dispatch(action)
            const action1 = GetListEndActivityAction()
            dispatch(action1)
            const action2 = GetProfileByIdAction(value.userId)
            dispatch(action2)
            const action3 = GetActivityIDAction(value.activityId)
            dispatch(action3)
            const action4 = GetFanpageByIDAction(localStorage.getItem('fanpagedatail'));
            dispatch(action4)
            const action5 = GetListEndActivityAction();
            dispatch(action5)
        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteLikeAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.delete('/Like/simple-unlike', {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: value
            });

            const action = GetListActivityAction()
            dispatch(action)
            const action1 = GetListEndActivityAction()
            dispatch(action1)
            const action2 = GetProfileByIdAction(value.userId)
            dispatch(action2)
            const action3 = GetActivityIDAction(value.activityId)
            dispatch(action3)
            const action4 = GetFanpageByIDAction(localStorage.getItem('fanpagedatail'));
            dispatch(action4)
            const action5 = GetListEndActivityAction();
            dispatch(action5)
        } catch (error) {
            console.log(error);
        }
    }
}


export const ResultActivityAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/ActivityResult/Insert-activityresult', value)
            console.log(result.data.data);
            const action1 = GetListEndActivityAction()
            dispatch(action1)
            const action5 = GetListEndActivityAction();
            dispatch(action5)
        } catch (error) {
            console.log(error);
        }
    }
}


export const DeleteActivityAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/Activity/delete-activity?id=${value}`)
            console.log(result.data.data);
            const action1 = GetListActivityAction()
            dispatch(action1)
            const action5 = GetListEndActivityAction();
            dispatch(action5)
        } catch (error) {
            console.log(error);
        }
    }
}
export const DeleteActivityByUserAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/Activity/delete-activity-user?id=${value}`)
            console.log(result.data.data);
            const action1 = GetListActivityAction()
            dispatch(action1)
            const action = GetProfileByIdAction(localStorage.getItem('userID'));
            dispatch(action)
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const GetActivityByIDAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Activity/get-activity-id?id=${value}`)
            console.log(result.data.data);
            const action = {
                type: "GET_ACTIVITY_ID",
                activityId: result.data.data
            }
            localStorage.setItem('activityID', result.data.data)
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const UpdateActivityAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/Activity/update-activity`, value)
            console.log(result.data.data);
            const action1 = GetListActivityAction()
            dispatch(action1)
            const action = GetProfileByIdAction(localStorage.getItem('userID'));
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const GetActivityLoginAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Activity/get-activity-login-page`)
            console.log(result.data.data);
            const action = {
                type: 'GET_ACTIVITY_LOGIN',
                arrActivityLogin: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const GetRecommentActivityAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/UserSearch/recommend-activity?userId=${id}`)
            console.log(result.data.data);
            const action = {
                type: 'GET_ACTIVITY_RECOMMENT',
                arrActivityRecomment: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const RecommentActivityAction = (value, id) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/UserSearch/create`, value)
            console.log(result.data.data);
            const action = GetRecommentActivityAction(id)
            dispatch(action)
            const action1 = GetListActivityAction();
            dispatch(action1)
        } catch (error) {
            console.log(error);
        }
    }
}