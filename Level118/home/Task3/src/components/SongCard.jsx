import React from 'react';
import SongBody from './SongBody';
import AlbumArt from './AlbumArt';


const SongCard = ( { songObject } ) => {
  return (
    <div>
      <SongBody songTitle={songObject.songTitle} artist={songObject.artist} />
      <AlbumArt albumArt={songObject.albumArt} />
    </div>
  )
}

export default SongCard;