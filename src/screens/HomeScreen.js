import './HomeScreen.css';
import Banner from '../Banner';
import Rows from '../Rows';
import Nav from '../Nav';
import requests from '../Requests';

function HomeScreen() {
    return(
        <div className="homeScreen">
            <Nav/>
            {/* banner */}
            <Banner/>
            {/* rows */}
            <Rows 
                title = 'NETFLIX ORIGINALS'
                fetchUrl = {requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Rows
                title = 'Trending Now'
                fetchUrl = {requests.fetchTrending}
            />
            <Rows
                title = 'Top Rated'
                fetchUrl = {requests.fetchTopRated}
            />
            <Rows
                title = 'Action Movies'
                fetchUrl = {requests.fetchActionMovies}
            />
            <Rows
                title = 'Comedy Movies'
                fetchUrl = {requests.fetchComedyMovies}
            />
            <Rows
                title = 'Horror Movies'
                fetchUrl = {requests.fetchHorrorMovies}
            />
            <Rows
                title = 'Romance Movies'
                fetchUrl = {requests.fetchRomanceMovies}
            />
            <Rows
                title = 'Documentaries'
                fetchUrl = {requests.fetchDocumentaries}
            />
            
        </div>
    )
 }

export default HomeScreen;