import React from 'react'
import Paper from '@mui/material/Paper'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { makeStyles } from '@mui/styles'

const pokemonTypes = [
  'Bug',
  'Dark',
  'Dragon',
  'Electric',
  'Fairy',
  'Fighting',
  'Fire',
  'Flying',
  'Ghost',
  'Grass',
  'Ground',
  'Ice',
  'Normal',
  'Poison',
  'Psychic',
  'Rock',
  'Steel',
  'Water',
]

const useStyles = makeStyles(() => ({
  optionsContainer: {
    background: '#FFF',
    padding: '8px 16px',
    borderRadius: 4,
    marginBottom: 16,
  },
  formControl: {
    margin: '8px !important',
    minWidth: '300px !important',
    background: '#FFF',
  },
}))

export function Filters({
  pokemonTypeFilter,
  setPokemonTypeFilter,
  capturedFilter,
  setCapturedFilter,
}) {
  const classes = useStyles()

  const handlePokemonTypeChange = (event) => {
    setPokemonTypeFilter(event.target.value)
  }

  const handleCapturedChange = (event) => {
    setCapturedFilter(event.target.value)
  }

  return (
    <Paper
      variant="outlined"
      className={classes.optionsContainer}
      data-testid="filters"
    >
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="type-input-label">Type</InputLabel>
        <Select
          value={pokemonTypeFilter}
          onChange={handlePokemonTypeChange}
          label="Type"
          labelId="type-input-label"
          data-testid="type-input"
        >
          <MenuItem value="Any">Any</MenuItem>
          {pokemonTypes.map((type) => (
            <MenuItem value={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="captured-input-label">Captured</InputLabel>
        <Select
          value={capturedFilter}
          onChange={handleCapturedChange}
          label="Captured"
          labelId="captured-input-label"
          data-testid="captured-input"
        >
          <MenuItem value="Any">Any</MenuItem>
          <MenuItem value="Captured">Captured</MenuItem>
          <MenuItem value="Not Captured">Not Captured</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  )
}
