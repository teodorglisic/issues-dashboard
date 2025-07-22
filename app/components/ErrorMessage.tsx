import React, { PropsWithChildren, ReactNode } from 'react'
import { Text } from '@radix-ui/themes'



const ErrorMessage = ({ children }: PropsWithChildren) => {
    if (!children) return null;
    return (
        <Text className='py-3' color='red' as='p'>{children}</Text>
    )
}

export default ErrorMessage