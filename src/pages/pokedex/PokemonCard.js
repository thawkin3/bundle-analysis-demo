import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 275,
  },
  pokemonIdNumber: {
    fontSize: 14,
    marginBottom: 32,
  },
  avatar: {
    height: 128,
    borderRadius: 0,
    marginBottom: 8,
  },
  cardActions: {
    justifyContent: 'center',
  },
}))

export function PokemonCard({ pokemon, setPokedexData }) {
  const classes = useStyles()

  const handleCapturedChange = () => {
    const pokemonIndex = pokemon.id - 1
    setPokedexData((pokedexData) => [
      ...pokedexData.slice(0, pokemonIndex),
      {
        ...pokedexData[pokemonIndex],
        captured: !pokedexData[pokemonIndex].captured,
      },
      ...pokedexData.slice(pokemonIndex + 1),
    ])
  }

  return (
    <Card
      className={classes.root}
      variant="outlined"
      role="group"
      aria-label={`Pokémon: ${pokemon.name}`}
      data-testid="pokemonCard"
    >
      <CardContent>
        <Typography
          className={classes.pokemonIdNumber}
          color="textSecondary"
          gutterBottom
        >
          {pokemon.id}
        </Typography>
        <img alt="" src={pokemon.imgUrl} className={classes.avatar} />
        <Typography variant="h5" component="h2">
          {pokemon.name}
        </Typography>
        <Typography color="textSecondary">
          {pokemon.pokemonTypes.join(', ')}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <FormControlLabel
          control={
            <Switch
              checked={pokemon.captured}
              onChange={handleCapturedChange}
              name="captured"
              color="primary"
            />
          }
          label="Captured"
          aria-label={`Captured: ${pokemon.name}`}
        />
      </CardActions>
    </Card>
  )
}
