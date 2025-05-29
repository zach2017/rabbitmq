import React from 'react';
import { Container, Grid, Button, Typography } from '@mui/material';
import './App.css';

const artists = [
  { name: "Artist 1", image: "https://images.unsplash.com/photo-1516455590571-18256e5b149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" }, // Concert stage
  { name: "Artist 2", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a596?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" }, // Musician with guitar
  { name: "Artist 3", image: "https://loremflickr.com/400/300/concert" }, // Random concert image
  { name: "Artist 4", image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" }, // Live performance
  { name: "Artist 5", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbacd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" }, // Band performance
  { name: "Artist 6", image: "https://loremflickr.com/400/300/musician" }, // Random musician image
];

function App() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <Typography variant="h1" component="h1">
          Music Vibes
        </Typography>
        <Typography variant="h5" component="p">
          Discover the hottest artists and tracks
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="mt-4 hover:scale-105 transition-transform"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          Explore Now
        </Button>
      </div>

      {/* Artist Grid Section */}
      <div className="artist-grid">
        <Container>
          <Grid container spacing={4}>
            {artists.map((artist, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <div className="artist-card">
                  <img src={artist.image} alt={artist.name} />
                  <div className="artist-overlay">
                    <Typography variant="h6">{artist.name}</Typography>
                    <Typography variant="body2">Explore their music</Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default App;