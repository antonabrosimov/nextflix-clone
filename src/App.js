import React from 'react';
import Row from './components/Row';
import requests from './requests';

import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      {/* Navbar */}
      <Navbar />
      {/* Banner  */}
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionsMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHororMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      {/* <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} /> */}
      <Row title='Popular Series' fetchUrl={requests.fetchSeries} />
    </div>
  );
}

export default App;
