import { Login, SignUp } from "~/views/Auth";
import { AuthLayout } from '~/layouts'
export const authRoute = [
  {
    path: '/signin',
    component: Login,
    layout: AuthLayout
  },
  {
    path: '/signup',
    component: SignUp,
    layout: AuthLayout
  }
]