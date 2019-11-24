var playlist = {MichealJackson: "beat"}

function updatePlaylist(playlist, artistName, songTitle){

  playlist[artistName] = songTitle

  return playlist
}

  updatePlaylist(playlist, "slowdive", "My Bloody Valentine")


  function removeFromPlaylist(playlist){

     delete playlist.slowdive;

     return playlist
  }

  removeFromPlaylist(playlist)
