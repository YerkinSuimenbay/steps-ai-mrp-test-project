import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './navigation/navbar/Navbar';
import { Home } from './pages/home/Home';
import { MRP } from './pages/mrp/MRP';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mrp' element={<MRP />} />
          {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;
