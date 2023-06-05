import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Container, Grid, Link, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { DynamicForm } from '~/components'

import { SignIn } from './auth.model'
import styles from './auth.module.scss'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required()
})

const FormsLogin = [
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
      xs: 12
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
      xs: 12
    }
  }
]

function Login() {
  const navigate = useNavigate()

  const methods = useForm<SignIn>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<SignIn> = (data) => {
    console.log(data)
  }

  return (
    <Container className={styles.container}>
      <main className={styles.main}>
        <Typography align='center' variant='h3' color='primary'>
          Login
        </Typography>
        <FormProvider {...methods}>
          <Grid container spacing={2}>
            <DynamicForm FormsLogin={FormsLogin} />
          </Grid>
        </FormProvider>
        <Button
          onClick={methods.handleSubmit(onSubmit)}
          variant='contained'
          color='primary'
          fullWidth
          style={{ marginTop: '12px', marginBottom: '12px' }}
        >
          Submit
        </Button>

        <Link
          component='button'
          variant='body2'
          onClick={() => {
            navigate('/signup')
          }}
        >
          Don't have an account? Sign Up
        </Link>
      </main>
    </Container>
  )
}

export default Login
