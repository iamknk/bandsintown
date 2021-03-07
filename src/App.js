import { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { SearchBar, ArtistCard, Events } from './components/index'

function App() {
  const [artists, setArtists] = useState([])

  const artistSearch = async (term) => {
    const res = await fetch(`artists/${term}?` + new URLSearchParams({
      app_id: 'bandsintown',
    }))
    const data = await res.json()
    setArtists([data])
    
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
            {artists.length > 0 ? 
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
      
            }
          </>
        )}
      />
      <Route path="/events" component={Events} /> 
    </div>
  </BrowserRouter>
  );
}

export default App;
