import React from 'react'
import { useParams } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { pokemonData } from '../../constants/pokemonData'

export default function Pokemon() {
  const { id } = useParams()

  const pokemon = pokemonData[id - 1]

  return (
    <Paper>
      <Typography component="h1" variant="h3">
        {pokemon.name}
      </Typography>
      <p>{id}</p>
    </Paper>
  )
}
