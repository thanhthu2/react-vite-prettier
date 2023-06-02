import { Container, TextField, Button, Typography, Link, Grid } from '@mui/material'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import { SignIn } from './auth.model'
import styles from './auth.module.scss'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required()
})

function Login() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm<SignIn>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<SignIn> = (data) => {
    console.log(data)
  }

  return (
    <Container className={styles.container}>
      <form>
        <Typography align='center' variant='h3' color='primary'>
          Login
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Controller
              name='email'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Email'
                  type='email'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  error={!!errors.email}
                  helperText={errors.email ? errors.email?.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Controller
              name='password'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Password'
                  type='password'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  error={!!errors.password}
                  helperText={errors.password ? errors.password?.message : ''}
                />
              )}
            />
          </Grid>
        </Grid>
        <Button
          onClick={handleSubmit(onSubmit)}
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
      </form>
    </Container>
  )
}

export default Login
