import {
  Container,
  TextField,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Link,
  Grid
} from '@mui/material'
import { useForm, SubmitHandler, Controller, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import { ISignUp, Gender } from './auth.model'
import styles from './auth.module.scss'
import { DynamicForm } from '~/components'

const schema = yup.object().shape({
  firstName: yup.string().min(4).max(20).required('Please enter your first name'),
  lastName: yup.string().min(4).max(20).required('Please enter your last name'),
  email: yup.string().email().required('Please enter your email'),
  password: yup.string().min(4).max(20).required('Please enter your password'),
  confirmPassword: yup
    .string()
    .min(4)
    .max(20)
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match')
})

const FormsLogin = [
  {
    name: 'firstName',
    defaultValue: '',
    component: TextField,
    componentProps: {
      label: 'First name',
      type: 'firstName',
      fullWidth: true,
      variant: 'outlined',
      margin: 'normal'
    },
    colsProps: {
      xl: 6,
      sm: 12,
      md: 12,
      xs: 12,
      lg: 6
    }
  },
  {
    name: 'lastName',
    defaultValue: '',
    component: TextField,
    componentProps: {
      label: 'Last name',
      type: 'lastName',
      fullWidth: true,
      variant: 'outlined',
      margin: 'normal'
    },
    colsProps: {
      xl: 6,
      sm: 12,
      md: 12,
      xs: 12,
      lg: 6
    }
  },
  {
    name: 'email',
    defaultValue: '',
    component: TextField,
    componentProps: {
      label: 'Email',
      type: 'email',
      fullWidth: true,
      variant: 'outlined',
      margin: 'normal'
    },
    colsProps: {
      xl: 12,
      sm: 12,
      md: 12,
      xs: 12,
      lg: 12
    }
  },
  {
    name: 'password',
    defaultValue: '',
    component: TextField,
    componentProps: {
      label: 'Password',
      type: 'password',
      fullWidth: true,
      variant: 'outlined',
      margin: 'normal'
    },
    colsProps: {
      xl: 12,
      sm: 12,
      md: 12,
      xs: 12,
      lg: 12
    }
  },
  {
    name: 'confirmPassword',
    defaultValue: '',
    component: TextField,
    componentProps: {
      label: 'Confirm Password',
      type: 'confirmPassword',
      fullWidth: true,
      variant: 'outlined',
      margin: 'normal'
    },
    colsProps: {
      xl: 12,
      sm: 12,
      md: 12,
      xs: 12,
      lg: 12
    }
  }
  // {
  //   name: 'gender',
  //   defaultValue: Gender.Male,
  //   component: RadioGroup,
  //   componentProps: {
  //     type: 'gender',
  //     label: 'gender',
  //     row: true
  //   },
  //   colsProps: {
  //     xl: 12,
  //     sm: 12,
  //     md: 12,
  //     xs: 12,
  //     lg: 12
  //   }
  // }
]

function SignUp() {
  const navigate = useNavigate()

  const methods = useForm<ISignUp>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<ISignUp> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Container className={styles.container}>
        <main className={styles.main}>
          <Typography align='center' variant='h3' color='primary'>
            Sign Up
          </Typography>
          <FormProvider {...methods}>
            <Grid container spacing={2}>
              <DynamicForm FormsLogin={FormsLogin} />
            </Grid>
          </FormProvider>

          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Controller
                name='gender'
                control={control}
                defaultValue={Gender.Male}
                rules={{ required: 'Vui lòng chọn giới tính' }}
                render={({ field, fieldState: { error } }) => (
                  <RadioGroup {...field} aria-label='gender' row>
                    <FormControlLabel value='male' control={<Radio />} label='Male' />
                    <FormControlLabel value='female' control={<Radio />} label='Female' />
                    <FormControlLabel value='other' control={<Radio />} label='Other' />
                    {error && <p>{error.message}</p>}
                  </RadioGroup>
                )}
              />
            </Grid> */}
          </Grid>
          <Button
            onClick={methods.handleSubmit(onSubmit)}
            variant='contained'
            color='primary'
            fullWidth
            style={{ marginTop: '12px' }}
          >
            Submit
          </Button>

          <Link
            component='button'
            variant='body2'
            onClick={() => {
              navigate('/signin')
            }}
          >
            Already have and account? Login
          </Link>
        </main>
      </Container>
    </>
  )
}

export default SignUp
