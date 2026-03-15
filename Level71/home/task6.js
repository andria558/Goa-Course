var playlist = ["Song A", "Song B", "Song C", "Song D"];

function addSong(songTitle) {
  playlist.unshift(songTitle);
  return playlist;
}

function removeLastSong() {
  playlist.pop();
  return playlist;
}

function moveSongs() {
  var targetIndex = playlist.length - 2;
  playlist.copyWithin(targetIndex, 0, 2);
  return playlist;
}


function combinePlaylists(secondPlaylist) {
  return playlist.concat(secondPlaylist);
}
console.log("Initial Playlist:", playlist);

console.log("After adding 'New Song':", addSong("New Song"));

console.log("After removing the last song:", removeLastSong());

console.log("After moving first two songs to the end:", moveSongs());

console.log("After combining with another playlist:", combinePlaylists(["Song X", "Song Y"]));
