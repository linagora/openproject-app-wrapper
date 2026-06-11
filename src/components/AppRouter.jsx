import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import { App } from '@/components/App'
import { AppLayout } from '@/components/AppLayout'

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
