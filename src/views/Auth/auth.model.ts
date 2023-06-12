import { GENDERS } from "~/enums/user.enum"

export interface ISignUp {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string,
  gender: GENDERS
}

export interface SignIn
  extends Pick<ISignUp, 'email' | 'password'> {
}
