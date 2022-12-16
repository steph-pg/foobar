import React from 'react'
import { useForm } from 'react-hook-form'

export default function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      login: '',
      password: '',
    }
  })

  const onSubmit = handleSubmit((values) => {
    console.log(values)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input {...register('login')}/>
        <input {...register('password')}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
