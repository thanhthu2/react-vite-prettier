import { Container, TextField, Button } from '@mui/material'

function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit}>
        <TextField label='Email' type='email' variant='outlined' fullWidth margin='normal' />
        <TextField label='Mật khẩu' type='password' variant='outlined' fullWidth margin='normal' />
        <Button type='submit' variant='contained' color='primary'>
          Đăng nhập
        </Button>
      </form>
    </Container>
  )
}

export default Login
