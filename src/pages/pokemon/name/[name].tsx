import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { PokemonDetails } from '@/components/Pokemon/PokemonDetails/PokemonDetails';
import { MainLayout } from '@/layouts';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { pokeApi } from '@/api';
import { getPokemonData } from '@/utils';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: FC<Props> = ({ pokemon }) => {
  return (
    <MainLayout title={pokemon.name}>
      <PokemonDetails pokemon={pokemon} />
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
  const pokemonNames = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonNames.map((name) => ({
      params: {
        name,
      },
    })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon = await getPokemonData(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon: pokemon,
    },
  };
};

export default PokemonPage;
