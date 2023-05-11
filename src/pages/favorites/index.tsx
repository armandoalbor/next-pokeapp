import React, { useEffect, useState } from 'react';
import { MainLayout } from '@/layouts';
import { localStorageFavorites } from '@/utils';
import { NoFavoriteData, PokemonFavoriteList } from '@/components/Pokemon';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localStorageFavorites.getFavorites());
  }, []);

  return (
    <MainLayout title="Favoritos">
      {favorites.length === 0 ? (
        <NoFavoriteData />
      ) : (
        <PokemonFavoriteList pokemonIds={favorites} />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
