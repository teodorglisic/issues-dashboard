import { Badge, Callout } from '@radix-ui/themes'
import React, { PropsWithChildren, useState } from 'react'

const StatusField = ({children}: PropsWithChildren) => {

    console.log(children)
  return (
    <Badge color='crimson'>{children}</Badge>
  )
}

export default StatusField