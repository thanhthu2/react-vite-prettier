import { Alert, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'

import { service } from '~/api'

import { Post } from './home.model'

function Home() {
  const [open, setOpen] = useState<boolean>(false)
  const [listData, setListData] = useState<Post[]>([])

  const fetch = async () => {
    const [err, res] = await service.mock.fetchPost()
    if (err) {
      setOpen(true)
    } else {
      setListData(res)
    }
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      {listData.map((data) => {
        return <li> {JSON.stringify(data)}</li>
      })}
      <Snackbar  open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Note archived">
        <Alert severity='error' sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Home
