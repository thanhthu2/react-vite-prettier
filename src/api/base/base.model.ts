import { GENDERS } from "~/enums/user.enum"

export interface Auth {
  firstName: string
  lastName: string
  email: string
  gender: GENDERS
}