import { render, screen } from '@testing-library/react'
import React from 'react'

import flag from 'cozy-flags'

import { App } from './App'

jest.mock('cozy-flags', () => ({
  __esModule: true,
  default: { useFlag: jest.fn() }
}))

jest.mock('@/components/NotConfigured', () => ({
  NotConfigured: () =>
    require('react').createElement('div', { 'data-testid': 'not-configured' })
}))

describe('App', () => {
  it('renders the embedded iframe when the flag is set', () => {
    flag.useFlag.mockReturnValue('https://openproject.example.org')

    render(<App />)

    const iframe = screen.queryByTestId('embedded-app')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', 'https://openproject.example.org')
    expect(screen.queryByTestId('not-configured')).toBe(null)
  })

  it('renders the not-configured screen when the flag is missing', () => {
    flag.useFlag.mockReturnValue(undefined)

    render(<App />)

    expect(screen.queryByTestId('not-configured')).toBeInTheDocument()
    expect(screen.queryByTestId('embedded-app')).toBe(null)
  })
})
