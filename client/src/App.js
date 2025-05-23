import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Allrouters from './components/Allrouters';
import Drawersliderbar from './components/LeftsideBars/Drawersliderbar';
import Createeditchannel from './components/Pages/Createeditchannel';
import Videoupload from './components/Pages/Videoupload';
import { fetchallchannel } from './action/channeluser';
import { getallvideo } from './action/video';
import { getallcomment } from './action/comment';
import { getallhistory } from './action/history';
import { getalllikedvideo } from './action/likedvideo';
import { getallwatchlater } from './action/watchlater';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallchannel());
    dispatch(getallvideo());
    dispatch(getallcomment());
    dispatch(getallhistory());
    dispatch(getallwatchlater());
    dispatch(getalllikedvideo());
  }, [dispatch])

  const [toggleDrawersSideBar, settoggleDrawersSideBar] = useState({ display: 'none' });
  const [editcreateChannelBtn, seteditcreateChannelBtn] = useState(false);
  const [videoUploadPage, setvideoUploadPage] = useState(false);

  const toggleDrawer = () => {
    if (toggleDrawersSideBar.display === 'none') {
      settoggleDrawersSideBar({
        display: 'flex'
      })
    }
    else {
      settoggleDrawersSideBar({
        display: 'none'
      })
    }
  }

  return (
    <>
      <Router>
        {videoUploadPage && (
          <Videoupload setvideoUploadPage={setvideoUploadPage} />
        )}

        {editcreateChannelBtn && (
          <Createeditchannel seteditcreateChannelBtn={seteditcreateChannelBtn} />
        )}
        <NavBar seteditcreateChannelBtn={seteditcreateChannelBtn} toggleDrawer={toggleDrawer} />
        <Drawersliderbar toggleDrawer={toggleDrawer} toggleDrawersSideBar={toggleDrawersSideBar} />
        <Allrouters seteditcreateChannelBtn={seteditcreateChannelBtn} setvideoUploadPage={setvideoUploadPage} />
      </Router>
    </>
  );
}

export default App;
