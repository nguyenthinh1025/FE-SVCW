import { http } from "../../utils/reponse";
import { GetActivityIDAction, GetListActivityAction, GetListEndActivityAction, GetListEndActivityByUserIDAction, GetRecommentActivityAction } from "./ActivityAction";
import { GetFanpageByIDAction } from "./FanpageAction";
import { GetProfileByIdAction } from "./ProfileAction";

export const FollowAction = (activity, user) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/Activity/follow-Activity?activityId=${activity}&userId=${user}`);
            console.log(result.data);
            const action = GetListActivityAction();
            dispatch(action)
            const action1 = GetRecommentActivityAction(user);
            dispatch(action1)
            const action2 = GetProfileByIdAction(user);
            dispatch(action2)
            const action3 = GetActivityIDAction(activity)
            dispatch(action3)
            const action4 = GetFanpageByIDAction(localStorage.getItem('fanpagedatail'));
            dispatch(action4)
            const action7 = GetListEndActivityAction();
            dispatch(action7)
            const action8 = GetListEndActivityByUserIDAction(user);
            dispatch(action8)
        } catch (error) {
            console.log(error.response?.data.message);
        }
    }
}


export const UnFollowAction = (activity, user) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/Activity/unfollow-activity?activityId=${activity}&userId=${user}`);
            console.log(result.data);
            const action = GetListActivityAction();
            dispatch(action)
            const action1 = GetRecommentActivityAction(user);
            dispatch(action1)
            const action2 = GetProfileByIdAction(user);
            dispatch(action2)
            const action3 = GetActivityIDAction(activity)
            dispatch(action3)
            const action4 = GetFanpageByIDAction(localStorage.getItem('fanpagedatail'));
            dispatch(action4)
            const action7 = GetListEndActivityAction();
            dispatch(action7)
            const action8 = GetListEndActivityByUserIDAction(user);
            dispatch(action8)
        } catch (error) {
            console.log(error);
        }
    }
}



export const JoinAction = (activity, user) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/Activity/join-Activity?activityId=${activity}&userId=${user}`);
            console.log(result.data);

            const action = GetListActivityAction();
            dispatch(action)
            const action1 = GetRecommentActivityAction(user);
            dispatch(action1)
            const action2 = GetProfileByIdAction(user);
            dispatch(action2)
            const action3 = GetActivityIDAction(activity)
            dispatch(action3)
            const action4 = GetFanpageByIDAction(localStorage.getItem('fanpagedatail'));
            dispatch(action4)
            const action7 = GetListEndActivityAction();
            dispatch(action7)
            const action8 = GetListEndActivityByUserIDAction(user);
            dispatch(action8)
        } catch (error) {
            console.log(error.response?.data.message);
        }
    }
}
export const UnJoinAction = (activity, user) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/Activity/disJoin-activity?activityId=${activity}&userId=${user}`);
            console.log(result.data);
            const action = GetListActivityAction();
            dispatch(action)
            const action1 = GetRecommentActivityAction(user);
            dispatch(action1)
            const action2 = GetProfileByIdAction(user);
            dispatch(action2)
            const action3 = GetActivityIDAction(activity)
            dispatch(action3)
            const action4 = GetFanpageByIDAction(localStorage.getItem('fanpagedatail'));
            dispatch(action4)
            const action7 = GetListEndActivityAction();
            dispatch(action7)
            const action8 = GetListEndActivityByUserIDAction(user);
            dispatch(action8)
        } catch (error) {
            console.log(error);
        }
    }
}