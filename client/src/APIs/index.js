import axios from 'axios';

const api = axios.create({ baseURL: `http://localhost:5000/` });

api.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`
    }
    return req;
})

export const login = (authdata) => api.post("/user/login", authdata);

export const updatechaneldata = (id, updatedata) => api.patch(`/user/update/${id}`, updatedata);
export const fetchallchannel = () => api.get("/user/getallchannel");

export const uploadvideo = (filedata, fileoption) => api.post("/video/uploadvideo", filedata, fileoption);
export const getvideos = () => api.get("/video/getvideos");
export const likevideo = (id, Like) => api.patch(`/video/like/${id}`, { Like })
export const viewsvideo = (id) => api.patch(`/video/view/${id}`);

export const postcomment = (commentdata) => api.post('/comment/post', commentdata);
export const deletecomment = (id) => api.delete(`/comment/delete/${id}`);
export const editcomment = (id, commentbody) => api.patch(`/comment/edit${id}`, commentbody);
export const getallcomment = () => api.get('comment/get');

export const addtohistory = (historydata) => api.post("/video/history", historydata);
export const getallhistory = () => api.get('/video/getallhistory');
export const deletehistory = (userid) => api.delete(`/video/deletehistory/${userid}`);

export const addtowatchlater = (watchlaterdata) => api.post('/video/watchlater', watchlaterdata);
export const getallwatchlater = () => api.get('/video/getallwatchlater');
export const deletewatchlater = (videoid, viewer) => api.delete(`/video/deletewatchlater/${videoid}/${viewer}`);

export const addtolikevideo = (likedvideodata) => api.post('/video/likevideo', likedvideodata);
export const getalllikedvideo = () => api.get('/video/getalllikedvideo');
export const deletelikedvideo = (videoid, viewer) => api.delete(`/video/deletelikedvideo/${videoid}/${viewer}`);