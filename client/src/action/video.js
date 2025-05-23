import * as api from "../APIs"

export const uploadvideo = (videodata) => async (dispatch) => {
    try {
        const { filedata, fileoption } = videodata;
        const { data } = await api.uploadvideo(filedata, fileoption);
        dispatch({ type: 'POST_VIDEO', data });
        dispatch(getallvideo());
    } catch (error) {
        alert(error.response.data.message);
    }
}

export const getallvideo = () => async (dispatch) => {
    try {
        const { data } = await api.getvideos();
        dispatch({ type: 'FETCH_ALL_VIDEOS', payload: data });
    } catch (error) {
        console.log("Getallvideo error", error);
    }
}

export const likevideo = (likedata) => async (dispatch) => {
    try {
        const { id, Like } = likedata;
        // console.log(likedata);
        const { data } = await api.likevideo(id, Like)
        dispatch({ type: 'POST_LIKE', payload: data });
        dispatch(getallvideo());
    } catch (error) {
        console.log("likevideo error", error);
    }
}

export const viewvideo = (viewvideo) => async (dispatch) => {
    try {
        const { id } = viewvideo;
        // console.log(id);
        const { data } = await api.viewsvideo(id);
        dispatch({ type: 'POST_VIEWS', data });
        dispatch(getallvideo());
    } catch (error) {
        console.log("viewvideo error", error)
    }
}