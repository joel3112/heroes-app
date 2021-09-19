import { createContext } from 'react';
import { useFavorites } from '../hooks/useFavorites';

export const FavoritesContext = createContext({});

export const FavoritesContextProvider = ({ children, id }) => {
  const { favorites, isFavorite, add, remove } = useFavorites();

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, add, remove }}>
      {children}
    </FavoritesContext.Provider>
  );
}