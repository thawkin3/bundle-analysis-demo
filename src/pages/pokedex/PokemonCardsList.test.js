import React from 'react'
import { render, screen } from '@testing-library/react'

import { PokemonCardsList } from './PokemonCardsList'

describe('PokemonCardsList', () => {
  let props

  beforeEach(() => {
    props = {
      pokedexData: [
        {
          id: 1,
          name: 'Bulbasaur',
          captured: false,
          imgUrl: 'http://img.pokemondb.net/artwork/bulbasaur.jpg',
          pokemonTypes: ['Grass', 'Poison'],
        },
        {
          id: 2,
          name: 'Ivysaur',
          captured: false,
          imgUrl: 'http://img.pokemondb.net/artwork/ivysaur.jpg',
          pokemonTypes: ['Grass', 'Poison'],
        },
        {
          id: 3,
          name: 'Venusaur',
          captured: false,
          imgUrl: 'http://img.pokemondb.net/artwork/venusaur.jpg',
          pokemonTypes: ['Grass', 'Poison'],
        },
      ],
      setPokedexData: jest.fn(),
    }
  })

  it('renders a list of cards', () => {
    render(<PokemonCardsList {...props} />)

    expect(screen.getAllByTestId('pokemonCard')).toHaveLength(3)
  })

  it('renders a message when there is no data', () => {
    render(<PokemonCardsList {...props} pokedexData={[]} />)

    expect(screen.queryAllByTestId('pokemonCard')).toHaveLength(0)
    expect(
      screen.getByText('No results. Please try a different filter value.')
    ).toBeInTheDocument()
  })
})
