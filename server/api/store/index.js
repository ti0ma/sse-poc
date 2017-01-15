// Store del local actual

module.exports = {
  tracks: [{
    id: 1,
    name: 'Track 1',
    artist: 'Artist 1',
    duration: 245 // Segundos
  }, {
    id: 2,
    name: 'Track 2',
    artist: 'Artist 2',
    duration: 300 // Segundos
  }, {
    id: 3,
    name: 'Track 3',
    artist: 'Artist 3',
    duration: 236 // Segundos
  }],
  status: {
    current: 'none', // playing, stopped, paused, none
    track: null,
    time: null
  }
}
