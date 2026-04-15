import React, { useState } from "react";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  const [watchlist, setWatchlist] = useState( [] )

  const addToFavourites = (movie) => {
    let newFavourites = [];
    if (!favourites.includes(movie.id)){
      newFavourites = [...favourites, movie.id];
    }
    else{
      newFavourites = [...favourites];
    }
    setFavourites(newFavourites)
  };
  
  // We will use this function in the next step
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  }; 

    const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);
  const addToWatchlist = (movie) => {
    let newWatchlist = [];
    if (!watchlist.includes(movie.id)){
      newWatchlist = [...watchlist, movie.id];
    }
    else{
      newWatchlist = [...watchlist];
    }
    setWatchlist(newWatchlist)
  };


  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToWatchlist,
        watchlist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
