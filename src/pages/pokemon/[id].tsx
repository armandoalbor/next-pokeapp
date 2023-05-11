import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { PokemonDetails } from '@/components/Pokemon/PokemonDetails/PokemonDetails';
import { MainLayout } from '@/layouts';
import { Pokemon } from '@/interfaces';
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

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: {
        id,
      },
    })),
    // fallback: false, // Block all request that are not defined in params
    fallback: 'blocking', // Allow fallback to render component without pre loaded data
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await getPokemonData(id);

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
      pokemon,
    },
    revalidate: 86400, // 60 * 60 * 24
  };
};

export default PokemonPage;
