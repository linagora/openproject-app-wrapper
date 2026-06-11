import React from 'react'
import { useI18n } from 'twake-i18n'

import Empty from 'cozy-ui/transpiled/react/Empty'

import { OpenProject } from '@/components/Icons/OpenProject'

export const NotConfigured = ({ flagName }) => {
  const { t } = useI18n()

  return (
    <Empty
      data-testid="not-configured"
      centered
      icon={<OpenProject />}
      title={t('notConfigured.title')}
      text={t('notConfigured.text', { flag: flagName })}
    />
  )
}
