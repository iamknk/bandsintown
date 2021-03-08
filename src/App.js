import { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { 
  SearchBar, 
  ArtistCard, 
  Events, 
  Spinner, 
  RecentSearches 
} from './components/index'

import { getRecentSearches } from './helpers/SearchHelper'

const recentSearches = JSON.parse(localStorage.getItem('searches') || '[]')
function App() {
  const [artists, setArtists] = useState([])
  const [searches, setSearches] = useState(recentSearches)
  const [searcheLoading, setSearchLoading] = useState(false)
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    localStorage.setItem("searches", JSON.stringify(searches))
  }, [searches])

  const artistSearch = async (term) => {
    setSearches([...searches, term])
    setSearchLoading(true)
    const res = await fetch(`https://rest.bandsintown.com/artists/${term}?` + new URLSearchParams({
      app_id: 'bandsintown',
    }))
    const data = await res.json()
    
    setArtists([data])
    
    if(typeof(data) !== 'object'){
      setNoResults(true)
    }else{
      setNoResults(false)
    }
    setSearchLoading(false)
  
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Route
          path='/'
          exact
          render={() => (
            <>
              <SearchBar artistSearch={artistSearch} />
              <RecentSearches searches={getRecentSearches(searches)} onChipClick={(text) => artistSearch(text)} />
              { searcheLoading ? <Spinner />  : <> { noResults ? <div className="text-center mt-5 pt-5">
                 <h2>We couldn't find this band. Search again!</h2>
              </div> : <> {artists.length > 0 ? 
                artists.map(artist => 
              <div className="container" key={artist.id}>
                <div className="row">
                  <ArtistCard name={artist.name} image={artist.image_url} facebookUrl={artist.facebook_page_url} viewEvent={true} />
                </div>
              </div>
              ) 
              : 
              <div className="text-center mt-5 pt-5">
                 <h2>Search For Bands In Town</h2>
              </div>
        
              }</>
              }</>}
            </>
          )}
        />
        <Route path="/events" component={Events} /> 
      </div>
    </BrowserRouter>
    
  );
}

export default App;
