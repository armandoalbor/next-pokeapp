export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string | null;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}
