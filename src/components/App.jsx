import React from 'react'
import { useI18n } from 'twake-i18n'

import flag from 'cozy-flags'

import { NotConfigured } from '@/components/NotConfigured'

/**
 * Name of the Cozy flag that holds the URL of the embedded OpenProject service.
 * It must be set on the instance (or globally) for the wrapper to display
 * anything, e.g. `https://openproject.example.org`.
 */
export const EMBEDDED_APP_URL_FLAG = 'openproject.embedded-app-url'

export const App = () => {
  const { t } = useI18n()
  const embeddedAppUrl = flag.useFlag(EMBEDDED_APP_URL_FLAG)

  if (!embeddedAppUrl) {
    return <NotConfigured flagName={EMBEDDED_APP_URL_FLAG} />
  }

  return (
    <iframe
      id="embeddedApp"
      data-testid="embedded-app"
      title={t('embeddedApp.title')}
      src={embeddedAppUrl}
      allow="clipboard-read; clipboard-write"
    />
  )
}
