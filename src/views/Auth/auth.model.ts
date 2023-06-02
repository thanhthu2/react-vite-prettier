export interface ISignUp {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string,
  gender: Gender
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface SignIn
  extends Pick<ISignUp, 'email' | 'password'> {
}
