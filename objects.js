var playlist = {MichealJackson: "beat"}

function updatePlaylist(playlist, artistName, songTitle){

  playlist[artistName] = songTitle

  return playlist
}

  updatePlaylist(playlist, 'Slowdive', "My Bloody Valentine")


  function removeFromPlaylist(playlist, artistName){

     delete playlst[artistName];

     return playlist
  }

  removeFromPlaylist(playlist, artistName)
