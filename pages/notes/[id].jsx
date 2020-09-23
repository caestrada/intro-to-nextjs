import React from 'react'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { id }= router.query

  console.log(':::::', id);

  return (
    <h1>Note: {id} </h1>
  )
}