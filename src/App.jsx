import React from 'react';

const App = () => {
  const defaultPlaylist = "https://open.spotify.com/embed/playlist/4jwEw625KnuAZUIU3PYA9M?utm_source=generator";
  const [playlistSrc, setPlaylistSrc] = React.useState(defaultPlaylist);

  const handleInputChange = (e) => {
    const val = e.target.value.trim();
    if (!val) {
      setPlaylistSrc(defaultPlaylist);
      return;
    }

    // Basic check if it's a spotify link
    if (val.includes('open.spotify.com')) {
      // Try to extract the type and id
      // e.g. https://open.spotify.com/playlist/7dK... or /track/123...
      const parts = val.split('/');
      const typeIndex = parts.findIndex(p => p === 'playlist' || p === 'track' || p === 'album');

      if (typeIndex !== -1 && parts[typeIndex + 1]) {
        const type = parts[typeIndex];
        const idWithQuery = parts[typeIndex + 1];
        const id = idWithQuery.split('?')[0]; // Remove query params like ?si=...

        setPlaylistSrc(`https://open.spotify.com/embed/${type}/${id}`);
      }
    }
  };

  return (
    <>
      {/* Background Elements */}
      <div className="grain-overlay"></div>
      <div className="background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <main className="app-container">
        <header className="header">
          {/* A small prop: A star or heart floating near the title */}
          <div className="floating-prop" style={{ top: '-40px', right: '-20px', animationDelay: '1s' }}>✨</div>

          <h1>Happy Birthday 🤍</h1>
          <p className="subtitle">I made this for you.</p>
        </header>

        <div className="content">
          <iframe
            style={{ borderRadius: "12px", marginBottom: "1.5rem" }}
            src={playlistSrc}
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
          <div className="playlist-input-container">
            <input
              type="text"
              className="playlist-input"
              placeholder="Paste a Spotify link here..."
              onChange={handleInputChange}
            />
          </div>
        </div>

        <footer className="footer">
          <p>Hope today treats you gently.</p>
        </footer>
      </main>
    </>
  );
};

export default App;
