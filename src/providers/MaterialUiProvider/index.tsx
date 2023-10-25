import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import theme from './theme'

export default function AntdProvider({ children }: React.PropsWithChildren) {
  const appTheme = createTheme(theme)

  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
}
