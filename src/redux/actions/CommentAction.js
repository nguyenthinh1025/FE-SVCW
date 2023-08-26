import { http } from "../../utils/reponse";
import { GetActivityIDAction, GetListActivityAction } from "./ActivityAction";
import { GetFanpageByIDAction } from "./FanpageAction";
import { GetProfileByIdAction } from "./ProfileAction";

export const CommentAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Comment/comment', value);
            console.log(result);
            const action = GetListActivityAction();
            dispatch(action)
            const action2 = GetProfileByIdAction(value.userId)
            dispatch(action2)
            const action3 = GetActivityIDAction(value.activityId);
            dispatch(action3)
            const action4 = GetFanpageByIDAction(localStorage.getItem('fanpagedatail'));
            dispatch(action4)
        } catch (error) {
            console.log(error);
        }
    }
}
export const CommentFanpageAction = (value, id) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Comment/comment', value);
            console.log(result);
            const action = GetFanpageByIDAction(id);
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const CommentRepllyAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Comment/reply-comment', value);
            console.log(result);
            const action = GetListActivityAction();
            dispatch(action)
            const action2 = GetProfileByIdAction(value.userId)
            dispatch(action2)
            const action3 = GetActivityIDAction(value.activityId);
            dispatch(action3)
            const action4 = GetFanpageByIDAction(localStorage.getItem('fanpagedatail'));
            dispatch(action4)
        } catch (error) {
            console.log(error);
        }
    }
}
export const CommentRepllyFanpageAction = (value, id) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Comment/reply-comment', value);
            console.log(result);
            const action = GetFanpageByIDAction(id);
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}