import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';

import ApplicationEntryPage from './components/ApplicationEntryPage/ApplicationEntryPage';
import ApplicationFillPage01 from './components/ApplicationFillPage01/ApplicationFillPage01';
import ApplicationFillPage02 from './components/ApplicationFillPage02/ApplicationFillPage02';
import ApplicationFillPage03 from './components/ApplicationFillPage03/ApplicationFillPage03';
import ApplicationFillPage04 from './components/ApplicationFillPage04/ApplicationFillPage04';
import VolunteerEntryPage from './components/VolunteerEntryPage/VolunteerEntryPage';
import VolunteerInquiryPage from './components/VolunteerInquiryPage/VolunteerInquiryPage';

import './App.css';
import CreatePost from './components/post/createpost';
import Board from './components/post/board';
import HealthBoard from './components/post/healthboard';

function App() {
  return (
    <>

    </>

  );
}
const AppRoutes = () =>(
  <div className="app-container">
        <Header />
  <div className="app-content">
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/board' element={<Board/>} />
      <Route path='/post' element={<CreatePost/>} />
      <Route path='/healthboard' element={<HealthBoard/>} />
      <Route path='/ApplicationEntryPage' element={<ApplicationEntryPage/>} />
      <Route path='/ApplicationFillPage01' element={<ApplicationFillPage01/>} />
      <Route path='/ApplicationFillPage02' element={<ApplicationFillPage02/>} />
      <Route path='/ApplicationFillPage03' element={<ApplicationFillPage03/>} />
      <Route path='/ApplicationFillPage04' element={<ApplicationFillPage04/>} />
      <Route path='/VolunteerEntryPage' element={<VolunteerEntryPage/>} />
      <Route path='/VolunteerInquiryPage' element={<VolunteerInquiryPage/>} />
      
      

    </Routes>
  </div>
  </div>
)

export default AppRoutes;
