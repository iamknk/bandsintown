import { useState } from 'react'

import { SearchBar } from './components/index'

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
    </div>
  );
}

export default App;
