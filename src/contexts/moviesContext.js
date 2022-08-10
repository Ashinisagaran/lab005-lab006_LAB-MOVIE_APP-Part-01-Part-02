import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favorites, setFavorites] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    setFavorites(newFavorites)
  };

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  //NEW
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

//   return (
//     <MoviesContext.Provider
//       value={{
//         favorites,
//         addToFavorites,
//         removeFromFavorites
//       }}
//     >
//       {props.children}
//     </MoviesContext.Provider>
//   );
// };

return (
  <MoviesContext.Provider
    value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      addReview,
    }}
  >
    {props.children}
  </MoviesContext.Provider>
);
};


export default MoviesContextProvider;