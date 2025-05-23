import express from "express";

import upload from "../Helper/filehelper.js";
import auth from "../middleware/auth.js";

import { likevideocontroller } from "../Controllers/like.js";
import { viewscontroller } from "../Controllers/views.js";
import { uploadvideo, getallvideos } from "../Controllers/video.js";
import { getallhistorycontroller, historycontroller, deletehistory } from "../Controllers/History.js";
import { deletewatchlater, getallwatchlatercontroller, watchlatercontroller } from "../Controllers/watchlater.js";
import { deletelikedvideo, getalllikedvideocontroller, likedvideocontroller } from "../Controllers/likedvideo.js";


const routes = express.Router();

routes.post("/uploadvideo", auth, upload.single("file"), uploadvideo);

routes.get("/getvideos", getallvideos);
routes.patch("/like/:id", auth, likevideocontroller);
routes.patch("/view/:id", viewscontroller);

routes.post('/history', auth, historycontroller);
routes.get('/getallhistory', getallhistorycontroller);
routes.delete('/deletehistory/:userid', auth, deletehistory);

routes.post('/watchlater', auth, watchlatercontroller);
routes.get('/getallwatchlater', getallwatchlatercontroller);
routes.delete('/deletewatchlater/:videoid/:viewer', auth, deletewatchlater);

routes.post('/likevideo', auth, likedvideocontroller);
routes.get('/getalllikedvideo', getalllikedvideocontroller);
routes.delete('/deletelikedvideo/:videoid/:viewer', auth, deletelikedvideo);

export default routes;