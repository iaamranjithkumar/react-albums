import React from 'react';
export default ((album) => {
  return(
    <div className="album">
    <img className="album-img" src={album.album.image} alt={album.album.title}></img>
    <p>{album.album.title}</p>
    </div>
  )
}
);