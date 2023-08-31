import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Cover from './components/cover';
import MatchForm from './components/matchForm';
import Scorecard from './components/scorecard';
import Toss from './components/toss';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="inner">
      <div className='inner'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="matchForm" element={<MatchForm />} />
            <Route path="scorecard" element={<Scorecard />} />
            <Route path="toss" element={<Toss />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
