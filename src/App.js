import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";

function App() {
  /*The issue with the avatar getting pushed off the right side of the 
  screen at around 2 hours and 30 mins can 100% be easily
   fixed by adding "border-box: box-sizing" to the very 
   first wildcard selector,  "*, *:before, *:after". 
   This is actually the preferred method.
No need to set the Netflix logo to fixed and then adjust the spacing/padding/margins.
  */
  return (
    <div className="App">
      {/* Navbar */}
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
