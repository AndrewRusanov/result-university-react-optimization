import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout'
import { PrivateRoute } from './providers'

const Home = lazy(() =>
  import('@pages/Home').then(module => ({
    default: module.Home,
  }))
)
const Login = lazy(() =>
  import('@pages/Login').then(module => ({
    default: module.Login,
  }))
)
const NotFound = lazy(() =>
  import('@pages/NotFound').then(module => ({
    default: module.NotFound,
  }))
)
const Category = lazy(() =>
  import('@pages/Category').then(module => ({
    default: module.Category,
  }))
)
const Details = lazy(() =>
  import('@pages/Details').then(module => ({
    default: module.Details,
  }))
)

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route element={<MainLayout />}>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='/characters'
            element={
              <PrivateRoute>
                <Category category='characters' />
              </PrivateRoute>
            }
          />
          <Route
            path='/characters/:id'
            element={
              <PrivateRoute>
                <Details category='characters' />
              </PrivateRoute>
            }
          />
          <Route
            path='/episodes'
            element={
              <PrivateRoute>
                <Category category='episodes' />
              </PrivateRoute>
            }
          />
          <Route
            path='/episodes/:id'
            element={
              <PrivateRoute>
                <Details category='episodes' />
              </PrivateRoute>
            }
          />
          <Route
            path='/locations'
            element={
              <PrivateRoute>
                <Category category='locations' />
              </PrivateRoute>
            }
          />
          <Route
            path='/locations/:id'
            element={
              <PrivateRoute>
                <Category category='locations' />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
