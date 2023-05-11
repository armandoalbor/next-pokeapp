import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '@/interfaces';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid key={pokemon.id} xs={12} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 16 }}>
          <Card.Image src={pokemon.img} alt="Pokemon Image" width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
