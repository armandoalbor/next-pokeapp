import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { PokemonFavoriteCard } from './PokemonFavoriteCard';

interface Props {
  pokemonIds: number[];
}

export const PokemonFavoriteList: FC<Props> = ({ pokemonIds }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonIds.map((id) => (
        <PokemonFavoriteCard key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
