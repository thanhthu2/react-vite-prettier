import { authRoute } from './modules/auth.routes'
import { HomeRoute } from './modules/home.route'

const publicRoutes = [
  ...authRoute,
  ...HomeRoute
]

// const privateRoutes = []

export { publicRoutes }