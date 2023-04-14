import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Pokedex from './index'

describe('Pokedex', () => {
  it('renders a heading and loading spinner while loading', () => {
    render(<Pokedex />)

    expect(screen.getByText('Pokémon Pokédex')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Pokémon Pokédex'
    )

    expect(screen.getByText('Loading')).toBeInTheDocument()

    expect(screen.queryByTestId('filters')).not.toBeInTheDocument()
    expect(screen.queryByTestId('pokemonCardsList')).not.toBeInTheDocument()
  })

  it('renders a heading, two dropdowns, and a list of cards after the data has loaded', async () => {
    render(<Pokedex />)

    expect(screen.getByText('Pokémon Pokédex')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Pokémon Pokédex'
    )

    expect(await screen.findByLabelText('Type')).toBeInTheDocument()
    expect(screen.getAllByLabelText('Captured')[0]).toBeInTheDocument()

    expect(screen.getAllByTestId('pokemonCard')).toHaveLength(151)
  })

  it('filters the cards based on Pokémon type', async () => {
    render(<Pokedex />)

    expect(await screen.findAllByTestId('pokemonCard')).toHaveLength(151)

    userEvent.click(screen.getByLabelText('Type'))
    userEvent.click(screen.getByRole('option', { name: 'Fire' }))

    expect(screen.getAllByTestId('pokemonCard')).toHaveLength(12)
  })

  it('filters the cards based on Captured status', async () => {
    render(<Pokedex />)

    expect(await screen.findAllByTestId('pokemonCard')).toHaveLength(151)

    const pikachuCapturedSwitch = screen.getByRole('checkbox', {
      name: 'Captured: Pikachu',
    })
    expect(pikachuCapturedSwitch).not.toBeChecked()

    userEvent.click(pikachuCapturedSwitch)
    expect(pikachuCapturedSwitch).toBeChecked()

    userEvent.click(screen.getByRole('button', { name: 'Captured' }))
    userEvent.click(screen.getByRole('option', { name: 'Captured' }))

    expect(screen.getAllByTestId('pokemonCard')).toHaveLength(1)

    userEvent.click(screen.getByRole('button', { name: 'Captured' }))
    userEvent.click(screen.getByRole('option', { name: 'Not Captured' }))

    expect(screen.getAllByTestId('pokemonCard')).toHaveLength(150)
  })

  it('allows a user to mark a Pokémon as Captured', async () => {
    render(<Pokedex />)

    const pikachuCapturedSwitch = await screen.findByRole('checkbox', {
      name: 'Captured: Pikachu',
    })
    expect(pikachuCapturedSwitch).not.toBeChecked()

    userEvent.click(pikachuCapturedSwitch)
    expect(pikachuCapturedSwitch).toBeChecked()
  })
})
