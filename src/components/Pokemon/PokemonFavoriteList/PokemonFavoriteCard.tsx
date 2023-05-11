import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react';

interface Props {
  id: number;
}

export const PokemonFavoriteCard: FC<Props> = ({ id }) => {
  const router = useRouter();

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 32 }}
        onClick={() => router.push(`/pokemon/${id}`)}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width="100%"
          height="140px"
        />
      </Card>
    </Grid>
  );
};
