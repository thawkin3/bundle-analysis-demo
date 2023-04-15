import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { visuallyHidden } from '@mui/utils'

import { Filters } from './Filters'
import { PokemonCardsList } from './PokemonCardsList'
// import pokemonLogo from './pokemon-logo.png'
import { pokemonData } from '../../constants/pokemonData'

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
  pokemonLogo: {
    maxWidth: '90%',
    width: 400,
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: 24,
    textTransform: 'uppercase',
  },
  loadingText: {
    marginTop: 16,
  },
}))

export default function Pokedex() {
  const classes = useStyles()

  const [pokedexData, setPokedexData] = React.useState(pokemonData)
  const [pokemonTypeFilter, setPokemonTypeFilter] = React.useState('Any')
  const [capturedFilter, setCapturedFilter] = React.useState('Any')

  const filteredPokedexData = React.useMemo(() => {
    return pokedexData.filter((pokemon) => {
      const isCorrectType =
        pokemonTypeFilter === 'Any' ||
        pokemon.pokemonTypes.includes(pokemonTypeFilter)
      const isCorrectCapturedStatus =
        capturedFilter === 'Any' ||
        (capturedFilter === 'Captured' && pokemon.captured) ||
        (capturedFilter === 'Not Captured' && !pokemon.captured)

      return isCorrectType && isCorrectCapturedStatus
    })
  }, [pokedexData, pokemonTypeFilter, capturedFilter])

  return (
    <main className={classes.root}>
      <Container>
        {/* <img src={pokemonLogo} alt="" className={classes.pokemonLogo} /> */}
        <Typography sx={visuallyHidden} variant="h1">
          Pokémon Pokédex
        </Typography>
        <Filters
          pokemonTypeFilter={pokemonTypeFilter}
          setPokemonTypeFilter={setPokemonTypeFilter}
          capturedFilter={capturedFilter}
          setCapturedFilter={setCapturedFilter}
        />
        <PokemonCardsList
          pokedexData={filteredPokedexData}
          setPokedexData={setPokedexData}
        />
      </Container>
    </main>
  )
}
