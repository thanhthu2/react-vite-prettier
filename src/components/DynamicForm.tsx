import { Grid, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { SignIn } from '~/views/Auth/auth.model'

function DynamicForm({ FormsLogin }: { FormsLogin: any }) {
  const {
    control,
    formState: { errors }
  } = useFormContext<SignIn>()
  return (
    <>
      {FormsLogin.map((fieldProps: any) => {
        return (
          <Grid item {...fieldProps.colsProps}>
            <Controller
              name={fieldProps.name}
              control={control}
              defaultValue={fieldProps.defaultValue}
              render={({ field }) => {
                const Component = fieldProps.component

                console.log(field)
                return (
                  <Component
                    {...field}
                    {...fieldProps.componentProps}
                    error={!!errors[field.name]}
                    helperText={errors[field.name] ? errors[field.name]?.message : ''}
                  />
                )
              }}
            />
          </Grid>
        )
      })}
    </>
  )
}

export default DynamicForm
