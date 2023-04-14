import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { PokemonCard } from './PokemonCard'

describe('PokemonCard', () => {
  let props

  beforeEach(() => {
    props = {
      pokemon: {
        id: 1,
        name: 'Bulbasaur',
        captured: false,
        imgUrl: 'http://img.pokemondb.net/artwork/bulbasaur.jpg',
        pokemonTypes: ['Grass', 'Poison'],
      },
      setPokedexData: jest.fn(),
    }
  })

  it('renders a card for an uncaptured Pokémon', () => {
    render(<PokemonCard {...props} />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('Grass, Poison')).toBeInTheDocument()
    expect(
      screen.getByRole('checkbox', { name: 'Captured: Bulbasaur' })
    ).not.toBeChecked()
  })

  it('renders a card for a captured Pokémon', () => {
    const capturedPokemonProps = {
      ...props,
      pokemon: {
        ...props.pokemon,
        captured: true,
      },
    }

    render(<PokemonCard {...capturedPokemonProps} />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('Grass, Poison')).toBeInTheDocument()
    expect(
      screen.getByRole('checkbox', { name: 'Captured: Bulbasaur' })
    ).toBeChecked()
  })

  it('allows the user to toggle the Captured value', () => {
    render(<PokemonCard {...props} />)

    const capturedSwitch = screen.getByRole('checkbox', {
      name: 'Captured: Bulbasaur',
    })

    userEvent.click(capturedSwitch)

    expect(props.setPokedexData).toHaveBeenCalled()
  })
})
