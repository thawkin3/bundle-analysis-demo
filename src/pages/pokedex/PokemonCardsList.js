import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

import { PokemonCard } from './PokemonCard'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  noResultsContainer: {
    textAlign: 'center',
  },
  noResults: {
    color: '#FFF',
    fontSize: 24,
    textTransform: 'uppercase',
    marginTop: 48,
  },
}))

export function PokemonCardsList({ pokedexData, setPokedexData }) {
  const classes = useStyles()

  return pokedexData.length > 0 ? (
    <Grid
      container
      className={classes.root}
      spacing={2}
      data-testid="pokemonCardsList"
    >
      {pokedexData.map((pokemon) => (
        <Grid key={pokemon.name} item xs={12} sm={6} md={4} lg={3}>
          <PokemonCard pokemon={pokemon} setPokedexData={setPokedexData} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <div className={classes.noResultsContainer}>
      <Typography className={classes.noResults}>
        No results. Please try a different filter value.
      </Typography>
    </div>
  )
}
