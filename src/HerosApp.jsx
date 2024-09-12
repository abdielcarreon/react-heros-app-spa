import React from 'react'
import AppRouter from './router/AppRouter'
import { AuthProvider } from './auth';

const HerosApp = () => {

  return (
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  )
}

export default HerosApp
