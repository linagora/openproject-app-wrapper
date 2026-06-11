import React from 'react'
import I18n from 'twake-i18n'

import { BarProvider } from 'cozy-bar'
import { CozyProvider } from 'cozy-client'
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'

export const AppProviders = ({ client, lang, polyglot, children }) => {
  return (
    <CozyProvider client={client}>
      <I18n lang={lang} polyglot={polyglot}>
        <MuiCozyTheme>
          <BarProvider>
            <BreakpointsProvider>{children}</BreakpointsProvider>
          </BarProvider>
        </MuiCozyTheme>
      </I18n>
    </CozyProvider>
  )
}
