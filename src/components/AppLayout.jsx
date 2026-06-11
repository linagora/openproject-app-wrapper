import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent } from 'cozy-bar'

import { OpenProject } from '@/components/Icons/OpenProject'
import { OpenProjectText } from '@/components/Icons/OpenProjectText'

export const AppLayout = () => {
  return (
    <>
      <BarComponent
        searchOptions={{ enabled: false }}
        appIcon={OpenProject}
        appTextIcon={OpenProjectText}
        componentsProps={{
          CozyTheme: {
            type: 'auto'
          }
        }}
      />
      <Outlet />
    </>
  )
}
