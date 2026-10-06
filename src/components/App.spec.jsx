import { render, screen } from '@testing-library/react'
import React from 'react'
import I18n from 'twake-i18n'

import flag from 'cozy-flags'

import { App } from './App'

import en from '@/locales/en.json'

jest.mock('cozy-flags', () => ({
  __esModule: true,
  default: { useFlag: jest.fn() }
}))

jest.mock('@/components/NotConfigured', () => ({
  NotConfigured: () =>
    require('react').createElement('div', { 'data-testid': 'not-configured' })
}))

const renderApp = () =>
  render(
    <I18n lang="en" dictRequire={() => en}>
      <App />
    </I18n>
  )

describe('App', () => {
  it('renders the embedded iframe when the flag is set', () => {
    flag.useFlag.mockReturnValue('https://openproject.example.org')

    renderApp()

    const iframe = screen.queryByTestId('embedded-app')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('title', 'Embedded OpenProject service')
    expect(iframe).toHaveAttribute('src', 'https://openproject.example.org')
    expect(screen.queryByTestId('not-configured')).toBe(null)
  })

  it('renders the not-configured screen when the flag is missing', () => {
    flag.useFlag.mockReturnValue(undefined)

    renderApp()

    expect(screen.queryByTestId('not-configured')).toBeInTheDocument()
    expect(screen.queryByTestId('embedded-app')).toBe(null)
  })
})
