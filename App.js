import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes and Route instead of Switch
import HomePage from './Pages/HomePage';
import StatesPage from './Pages/find-beaches/StatesPage';
import CitiesPage from './Pages/find-beaches/Citiespage';
import BeachesPage from './Pages/find-beaches/BeachesPage';
import BeachParams from './Pages/find-beaches/BeachParams';


function App() {
  return (
    <Router>
        {/* Main Content with Routing */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/states" element={<StatesPage />} />
          <Route path="/states/:stateId/cities" element={<CitiesPage />} />
          <Route path='/beaches/:stateId/:cityId' element={<BeachesPage />} />
          <Route path="/beaches/:stateId/:cityId/:beach" component={BeachParams} />
        </Routes>
    </Router>
  );
}

export default App;