import { ReactNode } from 'react'

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      Default layout
      {children}
    </>
  )
}

export default DefaultLayout
