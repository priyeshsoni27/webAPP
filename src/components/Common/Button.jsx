import { Button } from '@material-ui/core'
import React from 'react'

const Buttons = (props) => {
  return (

    <Button variant={props.variant} >{props.text}</Button>
  )
}

export default Buttons