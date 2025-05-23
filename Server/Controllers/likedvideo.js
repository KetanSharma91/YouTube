import Likedvideo from '../Models/likedvideo.js';

export const likedvideocontroller = async (req, res) => {
    const likedvideodata = req.body;
    const addtolikedvideo = new Likedvideo(likedvideodata);

    try {
        await addtolikedvideo.save();
        res.status(200).json("added to likedvideo");
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}

export const getalllikedvideocontroller = async (req, res) => {
    try {
        const files = await Likedvideo.find();
        res.status(200).send(files);
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}

export const deletelikedvideo = async (req, res) => {
    const { videoid: videoid, viewer: viewer } = req.params;

    try {
        await Likedvideo.findOneAndDelete({
            videoid: videoid, viewer: viewer,
        });
        res.status(200).json({ message: "removed from liked videos" });
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
}