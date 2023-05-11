import { Container, Image, Text } from '@nextui-org/react';

export const NoFavoriteData = () => (
  <Container
    css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text h1>No hay favoritos</Text>

    <Image
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        Math.floor(Math.random() * 151) + 1
      }.svg`}
      alt="Not found image"
      width={250}
      height={250}
      css={{ opacity: 0.3 }}
    />
  </Container>
);
