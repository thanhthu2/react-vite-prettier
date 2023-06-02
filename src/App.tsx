import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { publicRoutes } from '~/routes'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ec5990'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Routes>
            {publicRoutes.map((route, idx) => {
              const Layout = route.layout
              const Page = route.component
              return (
                <Route
                  key={idx}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              )
            })}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
