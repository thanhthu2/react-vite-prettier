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
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import { ISignUp, Gender } from './auth.model'
import styles from './auth.module.scss'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
  confirmPassword: yup
    .string()
    .min(4)
    .max(20)
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match')
})

function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm<ISignUp>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<ISignUp> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Container className={styles.container}>
        <form>
          <Typography align='center' variant='h3' color='primary'>
            Sign Up
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Controller
                name='firstName'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='First name'
                    type='firstName'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    error={!!errors.firstName}
                    helperText={errors.firstName ? errors.firstName?.message : ''}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Controller
                name='lastName'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Last name'
                    type='lastName'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    error={!!errors.lastName}
                    helperText={errors.lastName ? errors.lastName?.message : ''}
                  />
                )}
              />
            </Grid>
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
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Controller
                name='confirmPassword'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Confirm Password'
                    type='confirmPassword'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword ? errors.confirmPassword?.message : ''}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit(onSubmit)}
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
        </form>
      </Container>
    </>
  )
}

export default SignUp
