import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

export const getPokemonData = async (
  searchParam: string,
): Promise<Partial<Pokemon>> => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${searchParam}`);
  const { id, name, sprites } = data;

  return { id, name, sprites };
};
