import './App.css';
import FilmBox from './containers/FilmBox';

function App() {
 return (
   <>
    <main>
      <h1>
        Upcoming Film Releases for UK
      </h1>
      <span className='line'></span>
      <div id='film-box'>
        <FilmBox></FilmBox>
      </div>
      <span className='line'></span>
      <footer>
       <a href="https://www.imdb.com/calendar/?region=gb" target='_blank'>View more upcoming releases > ></a>
      </footer>
    </main>
   </>
 )
}

export default App;
