import { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { SearchBar, ArtistCard, Events, Spinner } from './components/index'

function App() {
  const [artists, setArtists] = useState([])
  const [searchLoading, setSearchLoading] = useState(false)
  const [noResults, setNoResults] = useState(false)

  const artistSearch = async (term) => {
    setSearchLoading(true)
    const res = await fetch(`artists/${term}?` + new URLSearchParams({
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

  const getEvents = async (name) => {
    const res = await fetch(`artists/${name}/events?` + new URLSearchParams({
      app_id: 'bandsintown',
  }))
  const data = await res.json()
  console.log(data)

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
              { searchLoading ? <Spinner />  : <> { noResults ? <div className="text-center mt-5 pt-5">
                 <h2>We couldn't find this band. Search again!</h2>
              </div> : <> {artists.length > 0 ? 
                artists.map(artist => 
              <div className="container">
                <div className="row">
                  <ArtistCard key={artist.id} name={artist.name} image={artist.image_url} facebookUrl={artist.facebook_page_url} viewEvent={true} onClick={getEvents} />
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
