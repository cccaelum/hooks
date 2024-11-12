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
      {errorPokemon ? 
        <p>Error: {errorPokemon}</p>
       : !pokemonData ? 
        <p>Cargando...</p>
       : 
        <Character
          title="Personaje Pokemon"
          nombre={pokemonData.name}
          imagen={pokemonData.sprites?.front_default}
        />
      }
      {errorRick ? 
        <p>Error: {errorRick}</p>
       : !rickData ? 
        <p>Cargando...</p>
       : 
        <Character
          title="Personaje Rick and Morty"
          nombre={rickData.name}
          imagen={rickData.image}
        />
      }
    </>
  );
}

export default App;
