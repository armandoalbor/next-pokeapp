const getFavorites = (): number[] => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]',
  );

  return favorites;
};

const toggleFavorite = (id: number) => {
  let favorites: number[] = getFavorites();

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokemonId) => pokemonId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  //   if (typeof window === 'undefined') return false;

  let favorites: number[] = getFavorites();

  return favorites.includes(id);
};

export default { toggleFavorite, existInFavorites, getFavorites };
