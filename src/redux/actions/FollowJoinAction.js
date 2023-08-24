import { http } from "../../utils/reponse";
import { GetListActivityAction, GetRecommentActivityAction } from "./ActivityAction";
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
        } catch (error) {
            console.log(error);
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
            const action2 = GetProfileByIdAction(user);
            dispatch(action2)

        } catch (error) {
            console.log(error);
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
            const action2 = GetProfileByIdAction(user);
            dispatch(action2)

        } catch (error) {
            console.log(error);
        }
    }
}