import React from 'react';
import Cards from './Card'
export default ((albums) => {
  console.log(albums)
  return(    
    <div className="album-list">
    {albums.albums.map((x)=>
      <Cards album = {x}/>
    )}
    </div>
  )
}
);