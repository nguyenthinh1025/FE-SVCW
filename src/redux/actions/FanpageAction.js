import { http } from "../../utils/reponse";

export const GetListFanpageAction = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Fanpage/getall-fanpage');
            console.log(result.data.data);

            const action = {
                type: "GET_LIST_FANPAGE",
                arrFanpage: result.data.data
            }
            dispatch(action)
            console.log(result.data.data);
            localStorage.setItem('arrFanpage', JSON.stringify(result.data.data))
        } catch (error) {
            console.log(error);
        }
    }
}


export const CreateFanpageAction = (value, props) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Fanpage/Insert-fanpage', value);
            console.log(result.data.data);
            const action = GetListFanpageAction()
            dispatch(action)
            localStorage.setItem('isFanpage', true)
            props.history.push('/home')
        } catch (error) {
            console.log(error);
        }
    }
}

export const GetFanpageByIDAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "DISPLAY_LOADING" })
            let result = await http.get(`/Fanpage/get-fanpage-id?id=${id}`);
            console.log(result.data.data);
            const action = {
                type: "GET_FANPAGE_ID",
                fanpageId: result.data.data,
            }
            dispatch(action)
            localStorage.setItem('fanpageId', result.data.data)
            dispatch({ type: "HIDE_LOADING" })
        } catch (error) {
            console.log(error);
            dispatch({ type: "HIDE_LOADING" })
        }
    }
}

export const UnFollowFanpageAction = (user, fanpage) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/Fanpage/unfollow-fanpage?userId=${user}&fanpageId=${fanpage}`);
            console.log(result.data.data);
            const action = GetListFanpageAction()
            dispatch(action)
            // localStorage.setItem('isFanpage', true)
            // props.history.push('/home')
        } catch (error) {
            console.log(error);
        }
    }
}

export const FollowFanpageAction = (user, fanpage) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/Fanpage/follow-fanpage?userId=${user}&fanpageId=${fanpage}`);
            console.log(result.data.data);
            const action = GetListFanpageAction()
            dispatch(action)
            // localStorage.setItem('isFanpage', true)
            // props.history.push('/home')
        } catch (error) {
            console.log(error);
        }
    }
}

export const UpdateStatusFanpageAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/Fanpage/moderate-fanpage?id=${id}`);
            console.log(result.data.data);
            // const action = GetListFanpageAction()
            // dispatch(action)
            // localStorage.setItem('isFanpage', true)
            // props.history.push('/home')
            const action = GetListFanpageAction();
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}