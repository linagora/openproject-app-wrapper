/* eslint-disable import/order */
import 'cozy-ui/transpiled/react/stylesheet.css'
import 'cozy-ui/dist/cozy-ui.utils.min.css'
import 'cozy-ui-plus/dist/stylesheet.css'
import 'cozy-bar/dist/stylesheet.css'

import '@/styles/index.styl'
import React from 'react'

import flag from 'cozy-flags'

import { AppProviders } from '@/components/AppProviders'
import { AppRouter } from '@/components/AppRouter'
import setupApp from '@/targets/browser/setupApp'

const init = async () => {
  const { root, client, lang, polyglot } = setupApp()

  // Load the flags before the first render so that the iframe URL
  // (openproject.embedded-app-url) is known and we do not flash the
  // "not configured" screen while the flags are still being fetched.
  try {
    await flag.initialize(client)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unable to initialize flags', error)
  }

  root.render(
    <AppProviders client={client} lang={lang} polyglot={polyglot}>
      <AppRouter />
    </AppProviders>
  )
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
