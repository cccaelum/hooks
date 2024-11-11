import './App.css';
import useFetchCharacters from './hooks/useFecthCharacters';
import Character from './components/Character';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  const { data: pokemonData, error: errorPokemon } = useFetchCharacters(urlPokemon);
  const { data: rickData, error: errorRick } = useFetchCharacters(urlRick);

  return (
    <>
    <h2>Personaje Pokemon</h2>
      {errorPokemon ? (
        <p>Error: {errorPokemon}</p>
      ) : pokemonData ? (
        <Character
          nombre={pokemonData.name}
          imagen={pokemonData.sprites.front_default}
        />
      ) : (
        <p>Cargando...</p>
      )}

      <h2>Personaje Rick and Morty</h2>
      {errorRick ? (
        <p>Error: {errorRick}</p>
      ) : rickData ? (
        <Character
          nombre={rickData.name}
          imagen={rickData.image}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}

export default App;
