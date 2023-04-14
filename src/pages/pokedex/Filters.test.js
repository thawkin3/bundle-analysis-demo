import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Filters } from './Filters'

describe('Filters', () => {
  it('renders two dropdowns', () => {
    const setPokemonTypeFilter = jest.fn()
    const setCapturedFilter = jest.fn()

    render(
      <Filters
        pokemonTypeFilter="Any"
        setPokemonTypeFilter={setPokemonTypeFilter}
        capturedFilter="Any"
        setCapturedFilter={setCapturedFilter}
      />
    )

    expect(screen.getByLabelText('Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Type')).toHaveTextContent('Any')

    expect(screen.getByLabelText('Captured')).toBeInTheDocument()
    expect(screen.getByLabelText('Captured')).toHaveTextContent('Any')
  })

  it('calls the change handler when a new value is selected from the dropdown', () => {
    const setPokemonTypeFilter = jest.fn()
    const setCapturedFilter = jest.fn()

    render(
      <Filters
        pokemonTypeFilter="Any"
        setPokemonTypeFilter={setPokemonTypeFilter}
        capturedFilter="Any"
        setCapturedFilter={setCapturedFilter}
      />
    )

    userEvent.click(screen.getByLabelText('Type'))
    userEvent.click(screen.getByRole('option', { name: 'Fire' }))

    expect(setPokemonTypeFilter).toHaveBeenCalled()
  })
})
