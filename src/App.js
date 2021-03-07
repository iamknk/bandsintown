import { useState } from 'react'

import { SearchBar, ArtistCard } from './components/index'

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
    <div className="App">
      <SearchBar artistSearch={artistSearch} />
      {artists.length > 0 ? 
          artists.map(artist => 
        <div className="container" key={artist.id}>
          <div className="row">
            <ArtistCard key={artist.id} name={artist.name} image={artist.image_url} facebookUrl={artist.facebook_page_url} />
          </div>
        </div>
        ) 
        : 
        <div className="text-center mt-5 pt-5">
            <h2>Search For Bands In Town</h2>
        </div>
      }
    </div>
  );
}

export default App;
