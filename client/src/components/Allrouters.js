import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Search from './Pages/Search';
import VideoPage from './Pages/VideoPage';
import Channel from './Pages/Channel';
import Library from './Pages/Library';
import Likedvideopage from './Pages/Likedvideopage';
import Watchlaterpage from './Pages/Watchlaterpage';
import WatchHistorypage from './Pages/WatchHistorypage';
import Yourvideopage from './Pages/Yourvideopage';

const Allrouters = ({ seteditcreateChannelBtn, setvideoUploadPage }) => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/search/:Searchquery' element={<Search />} />
        <Route path='/videopage/:vid' element={<VideoPage />} />
        <Route path='/channel/:cid' element={<Channel seteditcreateChannelBtn={seteditcreateChannelBtn} setvideoUploadPage={setvideoUploadPage} />} />
        <Route path='/Library' element={<Library />} />
        <Route path='/LikedVideos' element={<Likedvideopage />} />
        <Route path='/WatchHistory' element={<WatchHistorypage />} />
        <Route path='/WatchLater' element={<Watchlaterpage />} />
        <Route path='/YourVideo' element={<Yourvideopage />} />
    </Routes>;
}

export default Allrouters;