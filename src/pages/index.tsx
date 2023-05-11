import { FC } from 'react';
import { GetStaticProps } from 'next';
import { Button, Grid } from '@nextui-org/react';
import { pokeApi } from '@/api';
import { MainLayout } from '../layouts/MainLayout';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { PokemonCard } from '@/components/Pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: FC<Props> = ({ pokemons }) => {
  return (
    <>
      <MainLayout title="Listado de Pokémons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((item, index) => ({
    ...item,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
